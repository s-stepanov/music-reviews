import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

class AlbumsListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, image, artist, mbid } = this.props.album;

    return (
      <div className={'app-albums-list__item'}>
        <div className={'app-albums-list__item__album-artist'}>
          {artist.name}
        </div>
        <div className={'app-albums-list__item__album-name'}>
          <Link to={`/albums/${mbid}`}>{name}</Link>
        </div>
        <div className={'app-albums-list__item__album-image'}>
          <img src={image}/>
        </div>
      </div>
    )
  }
}

AlbumsListItem.propTypes = {
  album: PropTypes.shape({
    name: PropTypes.string,
    mbid: PropTypes.string,
    artist: PropTypes.shape({
      name: PropTypes.string,
      mbid: PropTypes.string,
      url: PropTypes.string
    }),
    image: PropTypes.string
  })
};

export default withRouter(AlbumsListItem);