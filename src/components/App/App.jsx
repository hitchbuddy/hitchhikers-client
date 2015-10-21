import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from './../../action-creators';

export const App = React.createClass({
  mixins: [PureRenderMixin],
  render: () => {
    return (<div>hi
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
