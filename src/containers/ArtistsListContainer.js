import { connect } from 'react-redux';
import ArtistsList from "../components/artistsList/ArtistsList";

const mapStateToProps = state => {
  return {
    artists: state.artists.artistsList,
    isLoading: state.artists.isFetching
  };
};

const ArtistsListContainer = connect(mapStateToProps)(ArtistsList);

export default ArtistsListContainer;