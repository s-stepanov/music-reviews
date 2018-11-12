import React from 'react';
import * as PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import './albums-list-item.scss';
import StarRatingComponent from "react-star-rating-component";

export const AlbumsListItem = props => {
  const { name, image, mbid, averageRating } = props.album;

  return (
    <div className={'app-albums-list__item'}>
      <div className={'app-albums-list__item__album-image-container'}>
        <img className={'app-albums-list__item__album-image-container__image'} src={image}/>
      </div>
      <div className={'app-albums-list__item__album-name'}>
        <Link to={`/albums/${mbid}`}>{name}</Link>
      </div>
      {averageRating && <div className={'app-albums-list__item__rating-container'}>
        <StarRatingComponent
          name="rating"
          editing={false}
          starCount={10}
          value={+averageRating}
          className={'app-album-page__album-info-container__rating-container__rating'}
        />
      </div>}
    </div>
  );
};

AlbumsListItem.propTypes = {
  album: PropTypes.shape({
    name: PropTypes.string,
    mbid: PropTypes.string,
    artist: PropTypes.shape({
      name: PropTypes.string,
      mbid: PropTypes.string,
      url: PropTypes.string
    }),
    image: PropTypes.string,
    averageRating: PropTypes.string
  })
};

export default withRouter(AlbumsListItem);