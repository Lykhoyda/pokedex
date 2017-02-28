import React from "react";
import { AppBar,  AutoComplete, TextField } from 'material-ui';
import Pokeball from '../PokeballIcon';
import { navigate } from '../../utils/apiUtils';

import "./styles.css";
import cx from 'classnames';

const classes = cx({
    "header-color--violet": true
});

const Header = ({ history, path, searchHint, onSearchSubmit }) => {
	return (
		<header>
			<AppBar
				showMenuIconButton={false}
				className={classes}
				title="Pokedex"
				iconElementLeft={
					<a href='#' onClick={navigate(history, path)}>
						<Pokeball style={{ position: 'absolute', left: 10, top: 19 }} />
					</a>
				} >

			<TextField 
				style={{ marginTop: 5 }}
				onChange={onSearchSubmit}
				hintText={searchHint}
				underlineDisabledStyle={{color: "#fff"}}
				className="text-field--custom"
			/>
			</AppBar>
		</header>
	)
}

export default Header;
