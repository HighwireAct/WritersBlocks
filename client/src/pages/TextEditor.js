import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import { TextArea, FormBtn } from "../components/Form";
import "./textEditorStyle.css";


class TextEditor extends Component {
  
  state = {
    blocks: [],
    title: "",
    excerpt: "",
    wordCount: "",
    authorCount: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Container fluid>
          <Row>
            <Col size="md-6">
            <form>
            <div className="preview-text"><i>{this.props.excerpt}</i></div>
              <TextArea
                value={this.state.excerpt}
                onChange={this.handleInputChange}
                name="excerpt"
                placeholder="Add your portion of the story here (between 10 and 150 words)"
              />
              <FormBtn
                disabled={!(this.state.excerpt)}
                onClick={this.handleFormSubmit}
              >
                Submit Block
              </FormBtn>
            </form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default TextEditor;
