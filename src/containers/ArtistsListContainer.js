import { connect } from 'react-redux';
import ArtistsList from "../components/artistsList/ArtistsList";

const mapStateToProps = state => {
  return {
    artists: state.artists.artistsList,
    isLoading: state.artists.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

const ArtistsListContainer = connect(mapStateToProps, mapDispatchToProps)(ArtistsList);

export default ArtistsListContainer;