import React, {Component} from 'react';
import { Link } from 'react-router';
import ReactImageFallback from "react-image-fallback";
import loadingImage from './loading.gif';
import fallbackImage from './fallback.jpg';

import './styles.css';

const PokedexItem = ({name, id, path}) => (
  <div className="col-xs-6 col-sm-4 col-md-3">
    <div className="pokemon">
      <header className="pokemon__panel-heading">
        <span className="pokemon__name">{name}</span>
        <span>{id}</span>
      </header>
      <div className="pokemon__panel-body">
        <Link to={path}>
          <ReactImageFallback 
            className="pokemon__image center-block" 
            src={`https://img.pokemondb.net/artwork/${name}.jpg`} 
            fallbackImage={fallbackImage}
            initialImage={loadingImage}
            alt="image"
          />
        </Link>
      </div>
      <footer className="pokemon__panel-footer">
        <span className="pokemon__type">
            <span className="pokemon__type--name type-grass">Grass</span>
            <span className="pokemon__type--name type-poison">Poison</span>
        </span>
      </footer>
    </div>
  </div>
);

export default PokedexItem;