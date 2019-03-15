import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";



class NewTextEditor extends Component {
  
  state = {
    title: "",
    text: ""
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