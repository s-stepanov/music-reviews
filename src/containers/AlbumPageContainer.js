import { connect } from 'react-redux';
import AlbumPage from "../components/albumPage/AlbumPage";
import { getAlbumInfo } from "../actions/albumsActions";
import { getReviews } from "../actions/reviewsActions";

const mapStateToProps = (state, ownProps) => {
  return {
    album: state.albums.album,
    mbid: ownProps.match.params.mbid,
    isLoading: state.albums.isFetching,
    reviews: state.reviews.reviews
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getAlbumInfo: mbid => dispatch(getAlbumInfo(mbid)),
    getReviews: mbid => dispatch(getReviews(mbid))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPage);