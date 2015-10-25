import fetchCurrentLocation from './../utils/fetchCurrentLocation';
import findHitchhikersAndGoToThisLocation from './findHitchhikersAndGoToThisLocation';

export default function findCurrentLocation(socket) {
  return (dispatch) => {
    fetchCurrentLocation().then((location) => {
      return findHitchhikersAndGoToThisLocation(dispatch, socket, location.lat, location.lng, location.city, location.country);
    }, () => {
      return;
    });
  };
}
