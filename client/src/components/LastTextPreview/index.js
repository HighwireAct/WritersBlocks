import React, { Component } from "react";
import "./style.css";

class LastTextPreview extends Component {

    state = {
        excerpt: ""
    };
    
    render() {
        return (
              <div className="preview-text"><i>{this.props.excerpt}</i></div>
        )
    }
  }
  
  export default LastTextPreview;