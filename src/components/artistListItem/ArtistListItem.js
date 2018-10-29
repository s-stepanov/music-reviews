import React from 'react';
import PropTypes from 'prop-types';
import './artists-list-item.scss';
import { Link, withRouter } from 'react-router-dom';

const ArtistListItem = props => {
  const { name, image, listenersCount, mbid } = props;

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
  );
};

ArtistListItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  listenersCount: PropTypes.string,
  mbid: PropTypes.string
};

export default withRouter(ArtistListItem);