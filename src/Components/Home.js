import React, { Component } from "react";
import "../App.css";
import bus from "../images/bus.png";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="image">
            <h3 className="display-3 title">ErKab</h3>
            <h3 className="display-6 mt-3 title">
              Your new solution for affordable school busses
            </h3>

            <button type="button" className="btn btn-outline-info mt-4">
              Discover More
            </button>
          </div>
          <div className="box">
            <img className="image" src={bus} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
