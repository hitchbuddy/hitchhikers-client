function findFromAddressComponents(addressComponents, placeType) {
  let place = '';
  const placeTypeComponent = addressComponents.find(component => component.types[0] === placeType);
  if (placeTypeComponent) {
    place = placeTypeComponent.long_name;
  }
  return place;
}

export function findCityFromAddressComponents(addressComponents) {
  return findFromAddressComponents(addressComponents, 'administrative_area_level_1');
}

export function findCountryFromAddressComponents(addressComponents) {
  return findFromAddressComponents(addressComponents, 'country');
}
