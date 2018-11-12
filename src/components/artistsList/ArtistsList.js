import React from 'react';
import ArtistListItem from '../artistListItem/ArtistListItem';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import './../../styles/list.scss';

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
    <div className={'app-list-container'}>
      <div className={'app-list-container__title'}>
        Search Results
      </div>
      <div className={'app-list'}>
        {artistsList}
      </div>
    </div>
  );
};

ArtistsList.propTypes = {
  artists: PropTypes.array,
};

export default ArtistsList;