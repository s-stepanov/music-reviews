import React from 'react';
import * as PropTypes from 'prop-types';
import AlbumsListItem from "../albumsListItem/AlbumsListItem";
import './albums-list.scss';

const AlbumsList = props => {
  let { albums } = props;
  albums = albums ? albums.map(album => {
    return <AlbumsListItem album={album}
                           key={album.mbid}
    />
  }) : [];

  return (
    <div>
      <h4>Albums</h4>
      <div className={'app-albums-list'}>
        {albums}
      </div>
    </div>
  );
};
AlbumsList.propTypes = {
  albums: PropTypes.array
};

export default AlbumsList;