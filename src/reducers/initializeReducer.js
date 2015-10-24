export default function initializeReducer(state) {
  return Object.assign({}, state, {currentLocation: {
    lat: 52.539,
    lng: 13.443,
  }});
}

