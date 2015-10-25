import React, { Component, PropTypes } from 'react';
import {findCityFromAddressComponents, findCountryFromAddressComponents} from './../../../utils/addressComponentUtility';
const GoogleMapsAPI = window.google.maps;
import './Header.scss';

class Header extends Component {
  componentDidMount() {
    const input = this.refs.searchBox;
    const searchBox = new GoogleMapsAPI.places.SearchBox(input);
    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();
      if (places.length === 0) {
        return;
      }
      this.props.jumpToThisLocation(places[0].geometry.location.lat(), places[0].geometry.location.lng(),
        findCityFromAddressComponents(places[0].address_components), findCountryFromAddressComponents(places[0].address_components));
    });
  }

  render() {
    return (
      <div id="header">
        <span className="brand">hitchbuddy</span>
        <div className="search-bar">
          <input id="searchBox" ref="searchBox" className="controls" type="text" placeholder="Search Box" />
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  jumpToThisLocation: PropTypes.func.isRequired,
};
export default Header;
