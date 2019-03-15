import React, { Component } from "react";
import "./style.css";
import {Col} from "../Grid";
import { Link } from "react-router-dom";

class ReadCard extends Component {
  render() {
      return (
        <Col size="md-4">
          <div className="card h-100">
            <div className="card-title"><h3><i>{this.props.title}</i><span className="add-block"><Link to={this.props.newblocklink} className="add-block"><i className="fas fa-book-reader"></i></Link></span></h3></div>
            <div className="preview-text"><i>{this.props.previewtext}</i></div>
            <div className="container">
            <h6 className="word-count">Word Count:  {this.props.wordcount}</h6>
            <h6 className="contributor-count">No. of Contributors:  {this.props.contributorcount}</h6>
            </div>
          </div>
          </Col>
      )
  }
}

export default ReadCard;
