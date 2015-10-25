const GoogleMapsAPI = window.google.maps;
import {findCityFromAddressComponents, findCountryFromAddressComponents} from './addressComponentUtility';

export default function getCityAndCountryByLatLng(lat, lng) {
  return new Promise((resolve, reject) => {
    const geocoder = new GoogleMapsAPI.Geocoder;
    geocoder.geocode({'location': { lat: lat, lng: lng}}, (results, status) => {
      if (status === GoogleMapsAPI.GeocoderStatus.OK && results[0]) {
        const country = findCountryFromAddressComponents(results[0].address_components);
        const city = findCityFromAddressComponents(results[0].address_components);
        resolve({city: city, country: country});
      }
      reject();
    });
  });
}
