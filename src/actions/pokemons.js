import Pokedex from 'pokedex-promise-v2';
const pokedex = new Pokedex();

import * as actionTypes from '../constants/actionTypes'
import { getEntryUrl } from '../utils/apiUtils';
import { setStatus } from './status';
import {
  LOADING_STATUS,
  LOADING_STATUS_MESSAGE,
  NULL_STATUS,
  NETWORK_ERROR,
  NETWORK_ERROR_MESSAGE
}  from '../constants/status';

export function fetchPokedexSuccess(data) {
  return {
    type: actionTypes.FETCH_POKEDEX_SUCCESS,
    data,
  };
}

export function getPokemonTypeSuccess(data) {
  return {
    type: actionTypes.FETCH_POKEMON_TYPE_SUCCESS,
    data,
  };
}

export function getPokemonType(name) {
  
  return dispatch => {
    
    dispatch(setStatus({ 
      status: LOADING_STATUS, 
      message: LOADING_STATUS_MESSAGE
    }))

  return pokedex.getPokemonByName(name)
    .then(
      response => {
        dispatch(getPokemonTypeSuccess(response));
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

export function fetchPokedex() {

  return dispatch => {
    
    dispatch(setStatus({ 
      status: LOADING_STATUS, 
      message: LOADING_STATUS_MESSAGE
    }))

    return pokedex.getPokemonsList()
    .then(
      response => {
        dispatch(fetchPokedexSuccess(response));
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