import { default as canUseDOM } from 'can-use-dom';

const geolocation = (
  canUseDOM && navigator.geolocation || {
    getCurrentPosition: (success, failure) => {
      failure("Your browser doesn't support geolocation.");
    },
  }
);

export default function findCurrentLocation() {
  return (dispatch) => {
    geolocation.getCurrentPosition((position) => {
      return dispatch({
        type: 'GO_TO_LOCATION',
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    }, () => {
      return;
    });
  };
}
