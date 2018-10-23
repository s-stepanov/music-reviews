import React, { Component } from 'react';
import ArtistListItem from '../artistListItem/ArtistListItem';
import PropTypes from 'prop-types';
import ArtistSearchField from "../artistSearchField/ArtistSearchField";

class ArtistsList extends Component {
  render() {
    const artistsList = this.props.artists.map(({ mbid, name, listeners, image }) => {
      return <ArtistListItem key={mbid}
                             name={name}
                             listenersCount={listeners}
                             image={image}
                             mbid={mbid}
      >
      </ArtistListItem>
    });

    return (
      <div>
        <ArtistSearchField />
        <div className="app-artists-list">
          {artistsList}
        </div>
      </div>
    )
  }
}

ArtistsList.propTypes = {
  artists: PropTypes.array,
  getArtists: PropTypes.func
};

export default ArtistsList;