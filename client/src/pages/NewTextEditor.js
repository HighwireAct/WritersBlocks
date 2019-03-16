import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

class NewTextEditor extends Component {
  state = {
    title: "",
    text: "",
    pieceSumbmitted: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const pieceData = {
      title: this.state.title.trim(),
      blocks: [],
      authorCount: 0
    };
    console.log("Alright");
    API.createPiece(pieceData)
      .then(res => {
        const blockData = {
          text: this.state.text.trim(),
          pieceId: res.data._id
        };
        API.createBlock(blockData)
          .then(res => {
            const lastState = this.state;
            console.log(res);
            this.setState({ ...lastState, pieceSubmitted: true })
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
  };

  render() {
    return (this.state.pieceSubmitted)
    ?
    (<Redirect to="/write"/>)
    :
    (
      <>
        <Container fluid>
          <Row>
            <Col size="md-6">
              <form>
                <Input
                  value={this.state.title}
                  onChange={this.handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
                <TextArea
                  value={this.state.text}
                  onChange={this.handleInputChange}
                  name="text"
                  placeholder="Add your portion of the story here (between 10 and 150 words)"
                />
                <FormBtn
                  disabled={!(this.state.title && this.state.text)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Starting Block
                </FormBtn>
              </form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default NewTextEditor;
