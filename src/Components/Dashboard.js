import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LocationPicking from "./LocationPicking";
import ChildRow from "./ChildRow";
import bg from "../images/bg.jpg";

class Dashboard extends Component {
  render() {
    if (!this.props.user) return <Redirect to="/" />;

    const childRows = this.props.children.map((child) => (
      <ChildRow key={child.name + child.id} child={child} />
    ));
    return (
      <div className="background" style={{ backgroundImage: `url(${bg})` }}>
        <div className="container mt-5 ">
          <div className="image text-center card bg-dark text-light">
            <h3 className="mb-4 display-4">Dashboard</h3>
            <ul class="list-group">
              <li class="list-group-item bg-info">
                User:{this.props.user.username}
              </li>

              <li style={{ color: "black" }} className="list-group-item">
                Email:{this.props.user.email}
              </li>
            </ul>
            <h3 className="my-4">My Children:</h3>
            <table className="mt-3 table bg-light">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date of Birth</th>
                </tr>
              </thead>
              <tbody>{childRows}</tbody>
            </table>

            <Link to="/addchild">
              <button type="button" className="btn btn-info my-4">
                Add Child
              </button>
            </Link>
          </div>
          <div className="box">
            <LocationPicking />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    children: state.children.children,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Dashboard);
