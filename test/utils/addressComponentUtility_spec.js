import chai from 'chai';
import {describe, it} from 'mocha';
import {findCityFromAddressComponents, findCountryFromAddressComponents} from './../../src/utils/addressComponentUtility';
chai.should();

describe('findCityFromAddressComponents', () => {
  it('should return the city from component', () => {
    const components = [{long_name: 'Hari Nagar', types: ['locality']},
      {long_name: 'Delhi', types: ['administrative_area_level_1']},
      {long_name: 'India', types: ['country']}];

    findCityFromAddressComponents(components).should.eql('Delhi');
  });

  it('should return empty string if not present', () => {
    findCityFromAddressComponents([]).should.eql('');
    findCityFromAddressComponents([{long_name: 'Hari Nagar', types: ['locality']}]).should.eql('');
  });
});


describe('findCountryFromAddressComponents', () => {
  it('should return the city from component', () => {
    const components = [{long_name: 'Hari Nagar', types: ['locality']},
      {long_name: 'Delhi', types: ['administrative_area_level_1']},
      {long_name: 'India', types: ['country']}];

    findCountryFromAddressComponents(components).should.eql('India');
  });

  it('should return empty string if not present', () => {
    findCountryFromAddressComponents([]).should.eql('');
    findCountryFromAddressComponents([{long_name: 'Hari Nagar', types: ['locality']}]).should.eql('');
  });
});
