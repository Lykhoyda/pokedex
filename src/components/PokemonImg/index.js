import React from 'react';
import ReactImageFallback from "react-image-fallback";
import loadingImage from './loading.gif';
import fallbackImage from './fallback.jpg';

const PokemonImage = (props) => {
  if (!props.name) return null
  
  const { name } = props;

  return (
    <div>
      <ReactImageFallback
        src={`https://img.pokemondb.net/artwork/${name}.jpg`} 
        fallbackImage={fallbackImage}
        initialImage={loadingImage}
        alt="image"
        className="avatar center-block" />
    </div>
  );
}

export default PokemonImage;