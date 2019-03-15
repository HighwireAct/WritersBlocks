import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from './writersblocklogo.png';
import ProfileNav from '../ProfileNav/';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
    return (
      <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div className="navbar-nav">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/write"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
               <i className="fas fa-keyboard"></i> write
              </Link>
              <Link
                to="/read"
                className={window.location.pathname === "/read" ? "nav-link active" : "nav-link"}
              >
              <i className="fas fa-book-reader"></i>     read
              </Link>
        </div>
        <div className="login-link"><ProfileNav link={"/users/login"}/></div>
      </nav>
    );
  }
  
  export default Navbar;
