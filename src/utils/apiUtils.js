import "isomorphic-fetch";
import jwt_decode from "jwt-decode";
import Pokedex from 'pokedex-promise-v2';
const pokedex = new Pokedex();

import {
  POKEAPI_ROOT_URL,
  POKEAPI_POKEDEX_URL,
  POKEAPI_POKEMON_URL,
  POKEAPI_IMAGE_URL,
} from '../constants/services';

const alias = {
  root: '',
  pokedex: POKEAPI_POKEDEX_URL,
  image: POKEAPI_IMAGE_URL,
  pokemon: POKEAPI_POKEMON_URL,
}


export function getPokemonType(name) {
  pokedex.getTypeByName(name)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
}

export function getEntryUrl(path = '', aditional = '') {
  return POKEAPI_ROOT_URL + alias[path] + aditional;
}

export function getPokemonId(uri = '') {
  return uri.split('/')
    .reduce((c, n) => c = !n ? c : n, '');
}

export function navigate(history = {}, path = '/') {
  let { push } = history;

  return (event) => {
    event.preventDefault();
    push(path);
  }
}

export function checkStatus(response) {
  if (!response.ok) {
    // (response.status < 200 || response.status > 300)
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  return response;
}
