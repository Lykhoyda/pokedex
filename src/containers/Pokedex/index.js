import React, {Component, PropTypes} from "react";
import RaectDom from "react-dom";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import * as pokemonsActions from '../../actions/pokemons';
import { chunk } from 'lodash';
import PokedexList from '../../components/PokedexList';
import PokedexItem from '../../components/PokedexItem';
import PaginationBar from '../../components/PaginationBar';

class Pokedex extends Component {
  constructor() {
    super();
    this.state = {
      page: 1
    }
    
    this.onPaginatorClick = this.onPaginatorClick.bind(this);
  }

  componentDidMount() {
    let { actions } = this.props;

    actions.fetchPokedex();
  }

  onPaginatorClick(page){

    this.props.router.push({
      pathname: '/pokedex',
      query: {
        page: page,
      },
    });

    this.setState({
      page: page
    })
  }

  renderPokedex() {
    let { page } = this.props.location.query;
    let { list } = this.props;
    let blocks = chunk(list, 12); // TODO: change to app constants

    return (
      <div>
        <PokedexList list={blocks[page ? (page - 1): 0] || []}/>
        <PaginationBar
          defaultPageSize={12}
          total={list.length}
          pageNum={blocks.length} 
          onChange={this.onPaginationChange}  
          onClick={this.onPaginatorClick} />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderPokedex()}
      </div>
    )
  }
}

function mapStateToProps({ pokemons, filter }) {
  let { value } = filter;

  return {
    list: value.length ? filter.list : pokemons.list,
    noMatches: value.length && !filter.list.length,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pokemonsActions, dispatch)
  }
}

Pokedex.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
