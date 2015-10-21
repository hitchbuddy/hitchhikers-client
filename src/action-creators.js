import { default as canUseDOM } from 'can-use-dom';

const geolocation = (
  canUseDOM && navigator.geolocation || {
    getCurrentPosition: (success, failure) => {
      failure("Your browser doesn't support geolocation.");
    },
  }
);

export function listHitchhikers(hitchhikers) {
  return {
    type: 'LIST_HITCHHIKERS',
    hitchhikers: hitchhikers,
  };
}

export function getCurrentLocation() {
  return (dispatch) => {
    geolocation.getCurrentPosition((position) => {
      return dispatch({
        type: 'GO_TO_LOCATION',
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    }, () => {
      return dispatch({
        type: 'GO_TO_LOCATION',
        lat: 60,
        lng: 105,
      });
    });
  };
}
