import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import AlbumsListItem from "../albumsListItem/AlbumsListItem";

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
      <div className={'app-albums-list'}>
        {albums}
      </div>
    )
  }
}
AlbumsList.propTypes = {
  albums: PropTypes.array
};

export default AlbumsList;