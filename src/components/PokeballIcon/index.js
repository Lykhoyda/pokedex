import React from 'react';

import src from './pokeball-icon.png';

const Pokeball = ({ style }) => (
  <img 
    src={src}
    width={32}
    height={32}
    style={style}
    />
);

export default Pokeball;
