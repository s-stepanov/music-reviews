import React from 'react';
import { connect } from 'react-redux';
import AlbumsList from "../components/albumsList/AlbumsList";
import PropTypes from 'prop-types';
import { getTopAlbums } from "../actions/albumsActions";
import '../styles/list.scss';

const mapStateToProps = state => {
  return {
    albums: state.albums.topAlbums
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTopAlbums: () => dispatch(getTopAlbums())
  };
};

class TopAlbumsContainer extends React.Component {
  componentDidMount() {
    this.props.getTopAlbums();
  }

  render() {
    const { albums } = this.props;

    return (
      <div className={'app-list-container'}>
        <div className={'app-list-container__title'}>
          Top Rated Albums
        </div>
        <div className={'app-list'}>
          <AlbumsList
            albums={albums}
            listTitle={' '}
          />
        </div>
      </div>
    );
  }
}

TopAlbumsContainer.propTypes = {
  albums: PropTypes.array,
  getTopAlbums: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(TopAlbumsContainer)