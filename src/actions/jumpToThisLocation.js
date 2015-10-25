import findHitchhikersAndGoToThisLocation from './findHitchhikersAndGoToThisLocation';

export default function jumpToThisLocation(socket, lat, lng, city, country) {
  return (dispatch) => {
    return findHitchhikersAndGoToThisLocation(dispatch, socket, lat, lng, city, country);
  };
}
