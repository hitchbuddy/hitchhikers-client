import {Map} from 'immutable';

export default function initializeReducer(state) {
  return state.set('currentLocation', new Map({
    lat: 52.539,
    lng: 13.443,
    city: 'Berlin',
    country: 'Germany',
  }));
}

