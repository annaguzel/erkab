import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import LocationPicking from "./LocationPicking";

class Dashboard extends Component {
  componentDidMount() {
    console.log(this.props.user.address);
  }
  render() {
    return (
      <div>
        <div className="container mt-5">
          <div className="image">
            <h3 className="display-4 title">My Dashboard:</h3>
            <h3 className="display-6 mt-3 title">
              User:{this.props.user.username}
            </h3>
            <h3 className="display-6 mt-3 title">
              Email:{this.props.user.email}
            </h3>
            <h3 className="display-6 mt-3 title">
              Email:{this.props.user.address}
            </h3>

            <Link to="/addchild">
              <button type="button" className="btn btn-outline-info mt-4">
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

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Dashboard);
