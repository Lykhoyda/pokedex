import React, {Component, PropTypes} from "react";
import ReactDom from "react-dom";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import * as pokemonActions from '../../actions/pokemon';
import PokemonImg from '../../components/PokemonImg';
import PokemonTabs from '../../components/PokemonTabs';

import { RaisedButton } from 'material-ui';
import styles from './styles.scss';

class Pokemon extends Component {
	constructor() {
		super();
		this.state = {
			requests: []
		}
	}
	
	setPokemonByName (name) {
		const { requests } = this.state;
		const { actions } = this.props;

		requests.push(actions.fetchPokemon(name));
  	}

	componentDidMount() {
		const { id } = this.props.params;

		this.setPokemonByName(id);
	}

	render() {
		const { pokemon } = this.props;
		let { goBack } = this.props.router;

		return (
			<div>
				<div className="heading">
					<div className={styles.bottom}> 
						<RaisedButton secondary={true} onClick={goBack} label='Return'/>
					</div>
				</div> 
				<div className="col-xs-12 col-sm-4">
					<div className="pokemon-panel">
						<header>
							<h2>{pokemon.name}</h2>
						</header>
						<PokemonImg name={pokemon.name} />
					</div>
				</div>
				<div className="col-xs-12 col-sm-8">
					<PokemonTabs data={pokemon} />
				</div>
			</div>
		)
	}
}

function mapStateToProps({pokemon}) {
	return {pokemon}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({ ...pokemonActions}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);