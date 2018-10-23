import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import AlbumsListItem from "../albumsListItem/AlbumsListItem";
import './albums-list.scss';

class AlbumsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { albums } = this.props;
    albums = albums ? albums.map(album => {
      return <AlbumsListItem album={album}
                             key={album.mbid}
      />
    }) : [];

    return (
      <div>
        <h3>Albums: </h3>
        <div className={'app-albums-list'}>
          {albums}
        </div>
      </div>
    )
  }
}
AlbumsList.propTypes = {
  albums: PropTypes.array
};

export default AlbumsList;