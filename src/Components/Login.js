import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/actions";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.login(this.state);
  };

  render() {
    const { username, password } = this.state;
    if (this.props.user) return <Redirect to="/dashboard" />;
    return (
      <div className="col-6 mx-auto">
        <div className="card my-5">
          <div className="card-body text-center">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="ml-3" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label className="ml-3" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-info">
                Login
              </button>
              <p>
                <Link
                  style={{ color: "#ffc107" }}
                  to="/signup"
                  className="btn btn-link my-2 my-sm-0"
                >
                  Signup for an account
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = (dispatch) => ({
  login: (userData) => dispatch(login(userData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Login);
