import { connect } from 'react-redux';
import Content from "../components/content/Content";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    isLoading: state.albums.isFetching || state.artists.isFetching
  }
};

const ContentContainer = connect(mapStateToProps)(Content);

export default withRouter(ContentContainer);