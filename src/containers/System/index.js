import React, { Component } from 'react';
import { Link } from 'react-router';
import image_404 from './404.png';

export default class NotFound extends Component {
  render() {
    return (
      <Link to={'/pokedex/'}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src={image_404} alt='404 Pokemon not found'/>
        </div>
      </Link>
    );
  }
}
