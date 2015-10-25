function dispatchAction(dispatch, lat, lng, city, country) {
  return dispatch({
    type: 'GO_TO_LOCATION',
    lat: lat,
    lng: lng,
    city: city,
    country: country,
  });
}

export default function findHitchhikersAndGoToThisLocation(disptach, socket, lat, lng, city, country) {
  if (city) {
    socket.emit('FIND_HITCHHIKERS_BY_CITY', {city: city}, () => {
      return dispatchAction(disptach, lat, lng, city, country);
    });
  } else {
    socket.emit('FIND_HITCHHIKERS_BY_COUNTRY', {country: country}, () => {
      return dispatchAction(disptach, lat, lng, city, country);
    });
  }
}
