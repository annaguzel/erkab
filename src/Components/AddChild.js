import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSchools } from "../store/actions";

class AddChild extends Component {
  state = {
    name: "",
    dob: "",
    school: 0,
  };

  handleChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addChild(this.state);
  };

  render() {
    let schools = this.props.schools;
    let options = schools.map((school) => (
      <option key={school.id} value={school}>
        {school.name}
      </option>
    ));
    const { name, dob, school } = this.state;
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
                  value={name}
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
                  type="text"
                  className="form-control"
                  id="dob"
                  value={dob}
                  name="dob"
                  placeholder="yyyy/mm/dd"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <select
                  name="customSearch"
                  className="custom-search-select"
                  onChange={this.handleChange}
                  value={school}
                >
                  <option>Select School</option>
                  {options}
                </select>
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
    fetchSchools: () => dispatch(fetchSchools()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddChild);
