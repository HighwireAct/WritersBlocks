import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: ""
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
            <div className="card card-body register-body">
              <h1 className="text-center mb-3">
                <i className="fas fa-user-plus" /> Register
              </h1>
              <form action="/users/register" method="POST">
                <div className="form-group">
                  <label htmlhtmlFor="name">Name</label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter Name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
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
                    placeholder="Create Password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password2">Confirm Password</label>
                  <input
                    type="password"
                    id="password2"
                    name="password2"
                    className="form-control"
                    placeholder="Confirm Password"
                    value={this.state.password2}
                    onChange={this.handleInputChange}
                  />
                </div>
                <button type="submit" className="btn btn-dark btn-block">
                  Register
                </button>
              </form>
              <p className="lead mt-4">
                Have An Account?{" "}
                <Link to="/users/login" className="text-primary">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Register;
