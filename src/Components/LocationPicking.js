import React, { Component } from "react";
import LocationPicker from "react-location-picker";
import { connect } from "react-redux";
import { updateAddress } from "../store/actions";
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
      console.log(this.props.user.user_id);
      this.props.updateAddress(this.props.user.user_id, this.state.position);
    };
    // Bind
    this.handleLocationChange = this.handleLocationChange.bind(this);
  }

  handleLocationChange({ position, address }) {
    // Set new location
    this.setState({ position, address });
  }

  render() {
    return (
      <div>
        <h1>Set your location:</h1>
        <h3>Current Address:{this.state.address}</h3>
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
            Set Address
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
  updateAddress: (addressID, position) =>
    dispatch(updateAddress(addressID, position)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationPicking);
