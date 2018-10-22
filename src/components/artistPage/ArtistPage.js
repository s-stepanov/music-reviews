import React, { Component } from "react";
import * as PropTypes from 'prop-types';

class ArtistPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { photo, name, stats, bio, albums, reviews } = this.props;

    return (
      <div className={'app-artist-page'}>
        <div className={'app-artist-page-header'}>
          <div className={'app-artist-page-header__photo'}>
            <img src={photo}/>
          </div>
          <div className={'app-artist-page-header__name'}>
            {name}
          </div>
          <div className={'app-artist-page-header__stats'}>
            {stats}
          </div>
          <div className={'app-artist-page-header__bio'}>
            {bio}
          </div>
        </div>
        <div className={'app-artist-page-albums-list'}>
          {albums}
        </div>
        <div className={'app-artist-page-latest-reviews'}>
          {reviews}
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
  albums: PropTypes.array,
  reviews: PropTypes.array
};

export default ArtistPage;