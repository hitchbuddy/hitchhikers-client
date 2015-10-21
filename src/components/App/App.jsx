import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Header from './Header/Header';
import Maps from './Maps/Maps';
import SideBar from './SideBar/SideBar';
import {getCurrentLocation} from './../../action-creators';

class App extends Component {
  render() {
    const { dispatch, lat, lng } = this.props;
    return (
      <div>
        <Header />
        <div className="content">
          <div className="left">
            <Maps getCurrentLocation={() =>
              dispatch(getCurrentLocation())
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
  dispatch: PropTypes.func.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

function select(state) {
  return {
    hitchhikers: state.hitchhikers,
    lat: state.lat,
    lng: state.lng,
  };
}

export default connect(select)(App);
