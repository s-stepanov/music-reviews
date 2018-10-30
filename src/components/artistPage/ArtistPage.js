import React, { Component } from "react";
import * as PropTypes from 'prop-types';
import AlbumsList from "../albumsList/AlbumsList";
import './artist-page.scss';
import Loader from 'react-loader-spinner';

class ArtistPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFullBio: false,
    };
    this.toggleBio = this.toggleBio.bind(this);
  }

  toggleBio() {
    this.setState({
      showFullBio: !this.state.showFullBio
    });
  }

  componentDidMount() {
    this.props.getArtistInfo(this.props.mbid);
  }

  render() {
    const { image, name, bio, albums } = this.props.artist;

    if (this.props.isLoading) {
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

    return (
      <div className={'app-artist-page'}>
        <div className={'app-artist-page__artist-name'}>
          {name}
        </div>
        <div className={'app-artist-page__container'}>
          <div className={'app-artist-page__artist-info-container'}>
            <div className={'app-artist-page__artist-info-container__photo-container'}>
              <img src={image}
                   className={'app-artist-page__artist-info-container__photo-container__photo'}/>
            </div>
          </div>
          <div className={'app-artist-page__artist-description-container'}>
            <div className={'app-artist-page__artist-description-container__bio'}>
              <h4>Biography</h4>
              {bio && (this.state.showFullBio ? bio.content : bio.summary)}
              <span className={'app-artist-page__artist-description-container__bio__toggle'}
                    onClick={this.toggleBio}>{this.state.showFullBio ? 'Show less' : 'Show more'}
                    </span>
            </div>
            <div className={'app-artist-page__artist-description-container__albums-list'}>
              <AlbumsList albums={albums}/>
            </div>
          </div>
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
  getArtistInfo: PropTypes.func,
  isLoading: PropTypes.bool
};

export default ArtistPage;