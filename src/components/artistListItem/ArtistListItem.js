import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './artists-list-item.scss';
import { Link, withRouter } from 'react-router-dom';

class ArtistListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, image, listenersCount, mbid } = this.props;

    return (
      <div className="app-artists-list__item">
        <div className="app-artists-list__item-header">
          <div>
            <img className="app-artists-list__item-header__image" src={image} alt={''}/>
          </div>
          <div className="app-artists-list__item-header__title">
            <span><Link to={`/artists/${mbid}`}>{name}</Link></span>
          </div>
          <div className="app-artists-list__item-header__listeners-count">
            <span>{listenersCount} listeners</span>
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
  listenersCount: PropTypes.string,
  mbid: PropTypes.string
};

export default withRouter(ArtistListItem);