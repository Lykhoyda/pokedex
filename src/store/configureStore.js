import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";

import { pokemon } from "../reducers/pokemon";
import { pokemons } from "../reducers/pokemons";
import { status } from '../reducers/status';
import { filter } from '../reducers/filter';
import { routerStateReducer as router } from 'redux-router';

const logger = createLogger();
const rootReducer = combineReducers({
  router,
  pokemon,
  pokemons,
  filter,
  status
});

const initialState = {};

export default function configureStore() {
  let store;

  if (module.hot) {
    store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(thunkMiddleware, logger),
        window.devToolsExtension ? window.devToolsExtension() : f => f
      )
    );
  } else {
    store = createStore(
      rootReducer,
      initialState,
      compose(applyMiddleware(thunkMiddleware), f => f)
    );
  }

  return store;
}

