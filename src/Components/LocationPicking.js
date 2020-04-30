import React, { Component } from "react";
import LocationPicker from "react-location-picker";
import { connect } from "react-redux";
import { addAddress } from "../store/actions";
// Fontawesome

/* Default position */
const defaultPosition = {
  lat: 31.963158,
  lng: 35.930359,
};

class LocationPicking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "Al-Urdon St. 265, Amman, Jordan",
      position: {
        lat: 0,
        lng: 0,
      },
    };
    this.submitAddress = () => {
      console.log(this.state.position);
      this.props.addAddress(this.state.position);
    };
    // Bind
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleLocationChange({ position, address, places }) {
    // Set new location
    this.setState({ position, address });
  }

  render() {
    return (
      <div>
        <h1>{this.state.address}</h1>
        <div className="text-center">
          <LocationPicker
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "400px" }} />}
            defaultPosition={defaultPosition}
            onChange={this.handleLocationChange}
          />
          <button
            type="submit"
            onClick={() => this.submitAddress()}
            className="btn btn-info mt-4"
          >
            Add Address
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  user,
});
const mapDispatchToProps = (dispatch) => ({
  addAddress: (position) => dispatch(addAddress(position)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationPicking);
