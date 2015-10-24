import React, { Component } from 'react';
import './Header.scss';
const GoogleMapsAPI = window.google.maps;

class Header extends Component {
  componentDidMount() {
    const input = this.refs.searchBox;
    const searchBox = new GoogleMapsAPI.places.SearchBox(input);
    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();
      if (places.length === 0) {
        return;
      }
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

export default Header;

