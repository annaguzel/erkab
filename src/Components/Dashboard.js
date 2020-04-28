import React, { Component } from "react";
import "../App.css";
import LocationPicking from "./LocationPicking";

class Dashboard extends Component {
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
              Add Child
            </button>
          </div>
          <div className="box">
            <LocationPicking />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
