import { chunk } from 'lodash';

import * as actionTypes from '../constants/actionTypes';
import { pokemon } from './pokemon';

export const INITIAL_STATE = {
  list: [],
};

export const PER_PAGE = 10;


export function pokemons(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_POKEDEX_SUCCESS:
      const { results } = action.data;

      return {
        list: results.map(items => {
          return pokemon(items, {
            type: actionTypes.POKEMON_UPDATE
          });
        }),
      }

    default:
      return state;
  }
};
