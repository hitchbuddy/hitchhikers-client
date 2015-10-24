import {Map} from 'immutable';
import listHitchhikers from './listHitchhikers';
import initializeReducer from './initializeReducer';
import goToLocation from './goToLocation';

const INITIAL_STATE = new Map();

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
  case 'INITIALIZE':
    return initializeReducer(state);
  case 'LIST_HITCHHIKERS':
    return listHitchhikers(state, action.hitchhikers);
  case 'GO_TO_LOCATION':
    return goToLocation(state, action.lat, action.lng);
  default:
    return state;
  }
}
