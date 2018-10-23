import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as PropTypes from 'prop-types';

class AlbumPage extends Component {
  constructor(props) {
    super(props);
    this.props.getAlbumInfo(this.props.mbid);
  }

  render() {
    const { name, image, wiki } = this.props.album;

    return (
      <div className={'app-album-page'}>
        <div className={'app-album-page__header'}>
          <div className={'app-album-page__header__name'}>
            {name}
          </div>
          <div className={'app-album-page__header__image'}>
            <img src={image} />
          </div>
        </div>
        <div className={'app-album-page__content'}>
          <div className={'app-album-page__wiki'}>
            {wiki && wiki.summary}
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
  getAlbumInfo: PropTypes.func
};

export default withRouter(AlbumPage);