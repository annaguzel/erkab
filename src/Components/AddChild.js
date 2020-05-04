import React, { Component } from "react";
import { connect } from "react-redux";
import { addChild } from "../store/actions";
import { Redirect } from "react-router-dom";

class AddChild extends Component {
  state = {
    name: "",
    dob: "",
    school: "",
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleRadio = (value) => this.setState({ school: value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addChild(this.state, this.state.school, this.props.history);
  };

  render() {
    console.log(this.state.school);
    return (
      <div className="col-6 mx-auto text-center">
        <h3 className="display-4">Add Child</h3>
        <div className="card my-5">
          <div className="card-body text-center">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="ml-3" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={this.state.name}
                  name="name"
                  placeholder="Name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label className="ml-3" htmlFor="dob">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  value={this.state.dob}
                  name="dob"
                  placeholder="yyyy-mm-dd"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                {this.props.schools.map((school) => (
                  <label key={school.name}>
                    <input
                      type="radio"
                      value={school.id}
                      name="school"
                      key={school.id}
                      onChange={(event) => this.handleRadio(event.target.value)}
                    />
                    {school.name}
                  </label>
                ))}
              </div>

              <button type="submit" className="btn btn-info">
                Add Child
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    schools: state.children.schools,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addChild: (newChild, schoolID, history) =>
      dispatch(addChild(newChild, schoolID, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddChild);
