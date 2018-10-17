import React, { Component } from 'react';
import ArtistListItem from '../artistListItem/ArtistListItem';

class ArtistsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-artists-list">
        <ArtistListItem description="Some description about an artist"
                        title="Artist title"
                        listenersCount="300"
                        image="https://lastfm-img2.akamaized.net/i/u/174s/a15d55c8a1fb4905bf7cc3e720de0b67.png">
        </ArtistListItem>
      </div>
    )
  }
}

export default ArtistsList;