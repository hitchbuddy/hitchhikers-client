import {Map} from 'immutable';

export default function goToLocation(state, lat, lng, city, country) {
  return state.set('currentLocation', new Map({
    lat: lat,
    lng: lng,
    city: city,
    country: country,
  }));
}

