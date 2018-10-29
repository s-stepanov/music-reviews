import React from 'react';
import ArtistListItem from '../artistListItem/ArtistListItem';
import PropTypes from 'prop-types';
import './artists-list.scss';
import Loader from 'react-loader-spinner';

const ArtistsList = props => {
  if (props.isLoading) {
    return (
      <div className={'spinner'}>
        <Loader
          type="Audio"
          color="#00BFFF"
          height="100"
          width="100"
        />
      </div>
    )
  }

  const artistsList = props.artists.map(({ mbid, name, listeners, image }) => {
    return <ArtistListItem key={mbid}
                           name={name}
                           listenersCount={listeners}
                           image={image}
                           mbid={mbid}
    >
    </ArtistListItem>
  });

  return (
    <div className="app-artists-list">
      {artistsList}
    </div>
  )
};

ArtistsList.propTypes = {
  artists: PropTypes.array,
  getArtists: PropTypes.func
};

export default ArtistsList;