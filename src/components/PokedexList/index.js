import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import PokedexItem from '../PokedexItem';

const PokedexList = ({ list, name }) => (
  <div className="row">
    {list.map((p, index) => <PokedexItem {...p} key={index} />)}
  </div>
);

PokedexList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default PokedexList;
