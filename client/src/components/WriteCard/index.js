import React from "react";
import "./style.css";
import { Link } from "react-router-dom"

function WriteCard(props) {
    return (
      <div className="card h-100">
            <div className="card-title"><h3><i>{props.title}</i><span className="add-block"><Link to={this.props.newBlockLink} className="add-block"><i className="fas fa-keyboard"></i></Link></span></h3></div>
            <div className="excerpt"><i>{props.excerpt}</i></div>
            <div className="count-container w-100">
            <h6 className="word-count">Word Count:  {props.wordCount}</h6>
            </div>
          </div>
    );
  }
  
  export default WriteCard;