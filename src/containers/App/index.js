import React, { Component, PropTypes } from "react";
import { bindActionCreators, dispatch } from 'redux';
import { connect } from "react-redux";
import * as pokemonsActions from '../../actions/pokemons';

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Status from '../../components/Status';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import "./app.css";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  constructor(){
    super();

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  onSearchSubmit(data) {
    console.log("Search")
    let { actions, pokemons } = this.props;
    let { push } = this.props.router;
    let { value } = data.target;

    if (value.length < 3 && value.length) {
      return;
    }

    push('/pokedex');
    actions.filterPokemon({
      list: pokemons.list,
      value,
    });
  }

  render() { 
    const { pathname } = this.props.location;
    const { status, history } = this.props;

    return (
        <MuiThemeProvider>
          <div className="container">
            <Header  
              onSearchSubmit={this.onSearchSubmit}
              searchHint='Search for a pokemon'
              history={history}
            />
            <div className="appContent">
              {this.props.children}
            </div>
            <Footer />
          </div>
        </MuiThemeProvider>
    );
  }
}


function mapStateToProps({ status, pokemons }) {
  return {
    status,
    pokemons,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
