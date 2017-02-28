import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, browserHistory } from "react-router";
import { ReduxRouter } from 'redux-router';

import configureStore from "./store/configureStore";

import App from "./containers/App";
import Pokemon from "./containers/Pokemon";
import Pokedex from "./containers/Pokedex";
import NotFound from "./containers/System";

import "./index.css";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <ReduxRouter>
          <Route path="/" component={App}>
            <Route path="/pokedex" component={Pokedex} />
            <Route path="/pokemon/:id" component={Pokemon} />
            <Route path="*" component={NotFound} />
          </Route>
        </ReduxRouter>
      </Router>
    </Provider>,
  document.querySelector("#root")
);
