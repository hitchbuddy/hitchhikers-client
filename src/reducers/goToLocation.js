export default function goToLocation(state, lat, lng) {
  return Object.assign({}, state, {lat: lat, lng: lng});
}

