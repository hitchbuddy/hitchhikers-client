import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Header from './Header/Header';
import Maps from './Maps/Maps';
import SideBar from './SideBar/SideBar';
import * as actionCreators from './../../action-creators';

export const App = React.createClass({
  mixins: [PureRenderMixin],
  render: () => {
    return (<div>
      <Header />
      <div className="content">
        <div className="left">
          <Maps />
        </div>
        <div className="right">
          <SideBar />
        </div>
      </div>
    </div>);
  },
});

function mapStateToProps(state) {
  return {
    hitchhikers: state.get('hitchhikers'),
  };
}

export const AppContainer = connect(
  mapStateToProps,
  actionCreators
)(App);
