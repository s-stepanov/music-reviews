import { connect } from 'react-redux';
import AlbumPage from "../components/albumPage/AlbumPage";
import { getAlbumInfo } from "../actions/albumsActions";

const mapStateToProps = (state, ownProps) => {
  return {
    album: state.albums.album,
    mbid: ownProps.match.params.mbid
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getAlbumInfo: mbid => dispatch(getAlbumInfo(mbid))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);