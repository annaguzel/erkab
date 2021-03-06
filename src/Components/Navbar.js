import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import AuthButton from "./AuthButton";
import logo from "../images/logo.png";

class NavBar extends Component {
  render() {
    return (
      <header>
        <Navbar bg="dark" collapseOnSelect expand="lg">
          <Navbar.Brand>
            <Link to={"/"} className="navbar-brand">
              <img className="logo d-inline" src={logo} alt="" />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <AuthButton />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );
  }
}

export default NavBar;
