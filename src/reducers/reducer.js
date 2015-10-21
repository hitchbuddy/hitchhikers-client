import {Map} from 'immutable';
import listHitchhikers from './list-hitchhikers';

const INITIAL_STATE = new Map();

export default function reducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
  case 'LIST_HITCHHIKERS':
    return listHitchhikers(state, action.hitchhikers);
  default:
    return state;
  }
}
