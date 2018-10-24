import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import './album-page.scss';

class AlbumPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFullDescription: false
    };
    this.toggleBio = this.toggleBio.bind(this);
  }

  componentDidMount() {
    this.props.getAlbumInfo(this.props.mbid);
  }

  toggleBio() {
    this.setState({
      showFullDescription: !this.state.showFullDescription
    });
  }

  render() {
    const { name, image, wiki } = this.props.album;

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
      <div className={'app-album-page'}>
        <div className={'app-album-page__album-name'}>
          {name}
        </div>
        <div className={'app-album-page__container'}>
          <div className={'app-album-page__album-info-container'}>
            <div className={'app-album-page__album-info-container__photo-container'}>
              <img src={image}
                   className={'app-album-page__album-info-container__photo-container__photo'}/>
            </div>
          </div>
          <div className={'app-album-page__album-description-container'}>
            <div className={'app-album-page__album-description-container__description'}>
              <h4>Description</h4>
              {wiki && (this.state.showFullDescription ? wiki.content : wiki.summary)}
              <span onClick={this.toggleBio}>
                {this.state.showFullDescription ? ' Show less' : ' Show more'}
                </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

AlbumPage.propTypes = {
  album: PropTypes.shape({
    name: PropTypes.string,
    mbid: PropTypes.string,
    image: PropTypes.string,
    wiki: PropTypes.shape({
      published: PropTypes.string,
      summary: PropTypes.string,
      content: PropTypes.string
    })
  }),
  mbid: PropTypes.string,
  getAlbumInfo: PropTypes.func,
  isLoading: PropTypes.bool
};

export default withRouter(AlbumPage);