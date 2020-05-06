// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer font-small bg-dark">
      <div
        style={{ color: "white" }}
        className="footer-copyright text-center py-2 "
      >
        © 2020 Copyright:
        <span>Team ErKab</span>
        <Link
          style={{ color: "#ffea32", fontSize: "1.2rem" }}
          to="/aboutus"
          className="nav-link font-weight-bold"
        >
          About Us
        </Link>
      </div>
    </footer>
  );
};
export default Footer;
