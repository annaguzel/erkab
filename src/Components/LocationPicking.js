import React, { Component } from "react";
import LocationPicker from "react-location-picker";

/* Default position */
const defaultPosition = {
  lat: 31.963158,
  lng: 35.930359,
};

class LocationPicking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: "Amman",
      position: {
        lat: 0,
        lng: 0,
      },
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
        <div>
          <LocationPicker
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: "400px" }} />}
            defaultPosition={defaultPosition}
            onChange={this.handleLocationChange}
          />
        </div>
      </div>
    );
  }
}
export default LocationPicking;
