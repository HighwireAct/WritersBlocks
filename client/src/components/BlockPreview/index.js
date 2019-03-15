import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";


class BlockPreview extends Component {
  
  state = {
    title: "",
    excerpt: "",
    wordCount: "",
    authorCount: ""

  };

  render() {
      return (
          <div className="card h-100">
            <div className="card-title"><h3><i>{this.props.title}</i><span className="add-block"><Link to={this.props.newBlockLink} className="add-block"><i className="fas fa-keyboard"></i></Link></span></h3></div>
            <div className="excerpt"><i>{this.props.excerpt}</i></div>
            <div className="count-container w-100">
            <h6 className="word-count">Word Count:  {this.props.wordCount}</h6>
            <h6 className="contributor-count">No. of Authors:  {this.props.authorCount}</h6>
            </div>
          </div>
      )
  }
}

export default BlockPreview;
