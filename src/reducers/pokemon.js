import { getEntryUrl, getPokemonId } from '../utils/apiUtils';
import * as actionTypes from '../constants/actionTypes'

export const INITIAL_STATE = {
  id: '',
  name: '',
  url: '',
  stats: {
    base_stat: 0,
    effort: 0,
    stat: {
      name: "",
      url: ""
    }
  }
};

export function pokemon(state = INITIAL_STATE, action) {
  let id = getPokemonId(action.data ? action.data.url : state.url);
  let path = `/pokemon/${id}`;
  
  switch(action.type) {
    case actionTypes.FETCH_POKEMON_SUCCESS:
      let { data } = action;
      return {
        ...data,
        id, 
        path,
      }

    case actionTypes.POKEMON_UPDATE:
      return {
        ...state,
        id,
        path,
      }

    default:
      return state;
  }
};
