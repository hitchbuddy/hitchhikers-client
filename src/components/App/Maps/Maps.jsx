import React, { Component, PropTypes } from 'react';
import GoogleMap from 'react-google-maps/lib/GoogleMap';
import './Maps.scss';

class Maps extends Component {

  componentDidMount() {
    this.props.getCurrentLocation();
  }

  componentDidUpdate() {
  }

  _getLocation() {
    return {
      lat: this.props.lat || -25.363882,
      lng: this.props.lng || 131.044922,
    };
  }

  render() {
    return (
        <GoogleMap containerProps={{
          id: 'maps',
        }}
           ref="map"
           defaultZoom={12}
           center={this._getLocation()} />
    );
  }
}

Maps.propTypes = {
  getCurrentLocation: PropTypes.func.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
};
export default Maps;
