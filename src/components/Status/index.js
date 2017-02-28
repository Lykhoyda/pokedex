import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { polyfill } from 'es6-promise';
import { random, times } from 'lodash';
import { LinearProgress } from 'material-ui';
import cx from 'classnames';

import styles from './styles.scss';
import { NULL_STATUS, NETWORK_ERROR } from '../../constants/status'

// TODO: update to something more smart than this.
const images = times(4).map((x) => require(`./images/0${x}.gif`));

function singlePreload(src) {
  return new Promise((resolve, reject) => {
    fetch(src)
      .then(resolve)
      .catch(reject);
  });
}

// TODO: handle 1 single image failed
class Status extends Component {
    constructor() {
        super();
        this.state = {
            images,
            actual: 0,
            loaded: false,
        }

        this.onImagesLoaded = this.onImagesLoaded.bind(this);
        this.renderImage = this.renderImage.bind(this);
        this.shouldShowImage = this.shouldShowImage.bind(this);
    }

  componentDidMount() {
    let promises = this.state.images.map((x) => singlePreload(x));

    Promise
      .all(promises)
      .then(this.onImagesLoaded);
  }

  componentWillReceiveProps() {
    this.setState({
      actual: random(0, images.length - 1)
    });
  }

  onFailImage() {
    // TODO: handle all image failed
    console.log('whoops, some image failed');
  }

  onImagesLoaded(events) {
    this.setState({
      loaded: true
    });
  }

  renderImage() {
    let { images, actual  } = this.state;
    let src = images[actual];

    return (<img src={src} alt="" />);
  }

  shouldShowImage() {
    const { loaded } = this.state;
    const { status } = this.props;

    return loaded && status !== NETWORK_ERROR;
  }

  render() {
    const { message, status } = this.props;
    const className = cx({
      "active": status !== NULL_STATUS,
      "root" : status == NULL_STATUS
    })

    return (
      <div className={className} >
        <LinearProgress mode="indeterminate" />
        {message && <p>{message}</p>}
        <div>
          {this.shouldShowImage() && this.renderImage()}
        </div>
      </div>
    );
  }
}

export default Status;
