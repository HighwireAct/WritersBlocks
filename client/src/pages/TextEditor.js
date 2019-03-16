import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import { TextArea, FormBtn } from "../components/Form";
import { Redirect } from "react-router-dom";
import "./textEditorStyle.css";
import API from "../utils/API";


class TextEditor extends Component { 
  state = {
    excerpt: "",
    text: "",
    pieceId: this.props.match.params.id,
    blockSubmitted: false
  };

  componentDidMount() {
    API.getPieceById(this.state.pieceId)
      .then(res => this.setState({ excerpt: res.data.blocks[res.data.blocks.length - 1].text }))
      .catch(err => console.error(err));
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const blockData = {
      text: this.state.text.trim(),
      pieceId: this.state.pieceId
    }
    API.createBlock(blockData)
      .then(res => {
        const lastState = this.state;
        console.log(res);
        this.setState({ ...lastState, blockSubmitted: true })
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      (this.state.blockSubmitted) ?
      (<Redirect to='/write'/>)
      :
      (<>
        <Container fluid>
          <Row>
            <Col size="md-6">
            <form>
            <div className="preview-text"><i>{this.state.excerpt}</i></div>
              <TextArea
                value={this.state.text}
                onChange={this.handleInputChange}
                name="text"
                placeholder="Add your portion of the story here (between 10 and 150 words)"
              />
              <FormBtn
                disabled={!(this.state.text)}
                onClick={this.handleFormSubmit}
              >
                Submit Block
              </FormBtn>
            </form>
            </Col>
          </Row>
        </Container>
      </>)
    );
  }
}

export default TextEditor;
