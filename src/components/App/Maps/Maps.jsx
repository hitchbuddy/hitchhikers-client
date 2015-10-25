import React, { Component, PropTypes } from 'react';
const GoogleMapsAPI = window.google.maps;
import './Maps.scss';

class Maps extends Component {
  componentDidMount() {
    const mapContainer = this.refs.map;
    this.map = new GoogleMapsAPI.Map(mapContainer, {
      center: this._getLocation(),
      zoom: 12,
    });
    this.props.getCurrentLocation();
  }

  componentDidUpdate() {
    this.map.setCenter(this._getLocation());
  }

  _getLocation() {
    return {
      lat: this.props.lat,
      lng: this.props.lng,
    };
  }

  render() {
    return (<div id="map" ref="map"/>);
  }
}

Maps.propTypes = {
  getCurrentLocation: PropTypes.func.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
};
export default Maps;
