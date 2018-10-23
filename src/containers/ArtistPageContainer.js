import ArtistPage from "../components/artistPage/ArtistPage";
import { connect } from "react-redux";
import { getArtistInfo } from "../actions/artistsActions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => {
  return {
    artist: state.artists.artistInfo,
    mbid: ownProps.match.params.mbid
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getArtistInfo: mbid => dispatch(getArtistInfo(mbid))
  }
};

const ArtistPageContainer = connect(mapStateToProps, mapDispatchToProps)(ArtistPage);
export default withRouter(ArtistPageContainer);
