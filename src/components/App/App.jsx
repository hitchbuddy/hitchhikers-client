import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Header from './Header/Header';
import Maps from './Maps/Maps';
import SideBar from './SideBar/SideBar';
import findCurrentLocation from './../../actions/findCurrentLocation';
import jumpToThisLocation from './../../actions/jumpToThisLocation';
import './App.scss';

class App extends Component {
  render() {
    const { dispatch, lat, lng } = this.props;
    return (
      <div className="app-container">
        <Header jumpToThisLocation={(newLat, newLng, city, country) =>
              dispatch(jumpToThisLocation(this.props.socket, newLat, newLng, city, country))
            }/>
        <div className="content">
          <div className="left">
            <Maps getCurrentLocation={() =>
              dispatch(findCurrentLocation(this.props.socket))
            } lat={lat} lng={lng}/>
          </div>
          <div className="right">
            <SideBar />
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  socket: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

function select(state) {
  return {
    lat: state.get('currentLocation').get('lat'),
    lng: state.get('currentLocation').get('lng'),
  };
}

export default connect(select)(App);
