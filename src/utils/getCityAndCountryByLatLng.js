const GoogleMapsAPI = window.google.maps;

export default function getCityAndCountryByLatLng(lat, lng) {
  return new Promise((resolve, reject) => {
    const geocoder = new GoogleMapsAPI.Geocoder;
    geocoder.geocode({'location': { lat: lat, lng: lng}}, (results, status) => {
      if (status === GoogleMapsAPI.GeocoderStatus.OK && results[0]) {
        let country = '';
        let city = '';
        const countryComponent = results[0].address_components.find(component => component.types[0] === 'country');
        if (countryComponent) {
          country = countryComponent.long_name;
        }
        const cityComponent = results[0].address_components.find(component => component.types[0] === 'administrative_area_level_1');
        if (cityComponent) {
          city = cityComponent.long_name;
        }
        resolve({city: city, country: country});
      }
      reject();
    });
  });
}
