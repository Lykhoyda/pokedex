import Pokedex from 'pokedex-promise-v2';
const pokedex = new Pokedex();

import * as actionTypes from '../constants/actionTypes';
import getEntryUrl from '../utils/apiUtils';
import { setStatus } from './status';
import { fetchDescription } from './description';
import {
  LOADING_STATUS,
  LOADING_STATUS_MESSAGE,
  NULL_STATUS,
  NETWORK_ERROR,
  NETWORK_ERROR_MESSAGE
}  from '../constants/status';


export function fetchPokemonSuccess(data) {
  return {
    type: actionTypes.FETCH_POKEMON_SUCCESS,
    data
  };
}


export function fetchPokemonTypes () {
  pokedex.getTypesList()
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
}

export function fetchPokemon(name) {

  return dispatch => {
    
    dispatch(setStatus({ 
      status: LOADING_STATUS, 
      message: LOADING_STATUS_MESSAGE
    }))

    return pokedex.getPokemonByName(name)
    .then(
      response => {
        dispatch(fetchPokemonSuccess(response));
    },

    error => {
      dispatch(setStatus({
        status: error !== 'abort' ? NETWORK_ERROR : NULL_STATUS,
        message: error !== 'abort' ? NETWORK_ERROR_MESSAGE : '',
      }))

      throw error
    });
  }
}

export function filterPokemon(data) {
  return {
    type: actionTypes.FILTER_POKEMON,
    data
  };
}
