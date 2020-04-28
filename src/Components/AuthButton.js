import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions";
// Fontawesome

const AuthButton = ({ user, logout }) => {
  let buttons = [
    <li key="loginButton" className="nav-item font-weight-bold">
      <Link
        style={{ color: "#ffea32", fontSize: "1.2rem" }}
        to="/login"
        className="nav-link"
      >
        Login
      </Link>
    </li>,
    <li key="signupButton" className="nav-item font-weight-bold">
      <Link
        style={{ color: "#ffea32", fontSize: "1.2rem" }}
        to="/signup"
        className="nav-link"
      >
        Signup
      </Link>
    </li>,
  ];
  if (user) {
    console.log(user, "user.username");
    buttons = (
      <>
        <li key="dashboardButton" className="nav-item font-weight-bold">
          <Link
            style={{ color: "#ffea32", fontSize: "1.2rem" }}
            to="/dashboard"
            className="nav-link"
          >
            Dashboard
          </Link>
        </li>
        <li className="nav-item font-weight-bold">
          <span
            style={{ color: "#ffea32", fontSize: "1.2rem" }}
            className="nav-link"
            onClick={logout}
          >
            Logout
          </span>
        </li>
      </>
    );
  }
  return <ul className="auth navbar-nav ml-auto">{buttons}</ul>;
};

const mapStateToProps = ({ user }) => ({
  user,
});
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
