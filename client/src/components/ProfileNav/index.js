import React, { Component } from "react";
//import "./style.css";
import { Link } from "react-router-dom";

class ProfileNav extends Component {
    render() {
        return (
          
              <Link to={this.props.link} className="login"><u> login </u></Link>
          
        )
    }
  }
  
  export default ProfileNav;
