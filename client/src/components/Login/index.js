import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <>
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <div className="card card-body login-body">
              <h1 className="text-center mb-3">
                <i className="fas fa-sign-in-alt" /> Login
              </h1>

              <form action="/users/login" method="POST">
                <div className="form-group">
                  <label htmlhtmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-dark btn-block">
                  Login
                </button>
              </form>
              <p className="lead mt-4">
                No Account?{" "}
                <Link to="/users/register" className="text-primary">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
