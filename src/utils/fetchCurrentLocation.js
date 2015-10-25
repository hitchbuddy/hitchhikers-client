import { default as canUseDOM } from 'can-use-dom';
import getCityAndCountryByLatLng from './getCityAndCountryByLatLng';

const geolocation = (
  canUseDOM && navigator.geolocation || {
    getCurrentPosition: (success, failure) => {
      failure("Your browser doesn't support geolocation.");
    },
  }
);

export default function fetchCurrentLocation() {
  return new Promise((resolve, reject) => {
    geolocation.getCurrentPosition((position) => {
      getCityAndCountryByLatLng(position.coords.latitude, position.coords.longitude).then((place) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          city: place.city,
          country: place.country,
        });
      }, () => reject());
    }, () => reject());
  });
}
