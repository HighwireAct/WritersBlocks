import React, { Component } from "react";
import "./style.css";
import { Input, TextArea, FormBtn } from "../Form";
import LastTextPreview from "../LastTextPreview";


class AddText extends Component {
  state = {
    blocks: [],
    title: "",
    excerpt: "",
    wordCount: "",
    authorCount: "",
    lastExcerpt: ""
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
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <LastTextPreview excerpt={"test"}/>
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
              </>
      )
  }
}

export default AddText;