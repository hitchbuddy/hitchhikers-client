import chai from 'chai';
import {describe, it} from 'mocha';
import configureStore from './../../src/store/configureStore';
import initialize from './../../src/actions/initialize';
chai.should();

describe('initialize', () => {
  it('should initialize the app state', () => {
    const store = configureStore();

    store.dispatch(initialize());

    store.getState().currentLocation.should.eql({
      lat: 52.539,
      lng: 13.443,
    });
  });
});

