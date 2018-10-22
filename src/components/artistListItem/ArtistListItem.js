import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './artists-list-item.scss';

class ArtistListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, image, listenersCount } = this.props;

    return (
      <div className="app-artists-list-item">
        <div className="app-artists-list-item-header">
          <div>
            <img className="app-artists-list-item-header__image" src={image}></img>
          </div>
          <div className="app-artists-list-item-header__title">
            <span>{name}</span>
          </div>
          <div className="app-artists-list-item-header__listeners-count">
            {listenersCount} listeners
          </div>
        </div>
      </div>
    )
  }
}

ArtistListItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  listenersCount: PropTypes.string
};

export default ArtistListItem;