import React, { Component } from "react";
import * as PropTypes from 'prop-types';
import AlbumsList from "../albumsList/AlbumsList";
import './artist-page.scss';

class ArtistPage extends Component {
  constructor(props) {
    super(props);
    this.props.getArtistInfo(this.props.mbid);
  }

  render() {
    const { image, name, stats, bio, albums } = this.props.artist;

    return (
      <div className={'app-artist-page'}>
        <div className={'app-artist-page-header'}>
          <div className={'app-artist-page-header__photo-container'}>
            <img src={image}
                 className={'app-artist-page-header__photo-container__photo'}/>
          </div>
          <div className={'app-artist-page-header__name'}>
            {name}
          </div>
          <div className={'app-artist-page-header__stats'}>
          </div>
        </div>
        <div className={'app-artist-page__bio'}>
          {bio}
        </div>
        <div className={'app-artist-page-albums-list'}>
          <AlbumsList albums={albums}/>
        </div>
      </div>
    );
  }
}
ArtistPage.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  stats: PropTypes.objectOf({
    listeners: PropTypes.string,
    plays: PropTypes.string
  }),
  mbid: PropTypes.string,
  albums: PropTypes.array,
  reviews: PropTypes.array,
  getArtistInfo: PropTypes.func
};

export default ArtistPage;