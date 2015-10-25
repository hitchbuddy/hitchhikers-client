import {Map} from 'immutable';

export default function goToLocation(state, lat, lng) {
  return state.set('currentLocation', new Map({
    lat: lat,
    lng: lng,
  }));
}

