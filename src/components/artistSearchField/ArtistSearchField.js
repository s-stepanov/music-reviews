import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import './artist-search-field.scss';
import { Field, formValueSelector, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { searchArtists } from "../../actions/artistsActions";
import * as PropTypes from "prop-types";

class ArtistSearchField extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { artist } = this.props;
    this.props.searchArtist(artist);
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="app-artist-search">
        <form className={'app-artist-search__form'}
              onSubmit={this.handleSubmit}>
          <Field name={'artist'}
                 component={'input'}
                 type={'text'}
                 className={'app-artist-search__form__input'}
                 placeholder={'Search artists...'}
          />
          <button className="app-artist-search__form__button">
            <Icon>search</Icon>
          </button>
        </form>
      </div>
    );
  }
}

ArtistSearchField.propTypes = {
  artist: PropTypes.string,
  searchArtist: PropTypes.func
};

const select = formValueSelector('artist-search');

const mapStateToProps = state => {
  return {
    artist: select(state, 'artist')
  }
};

const mapDispatchToProps = dispatch => {
  return {
    searchArtist: searchTerm => dispatch(searchArtists(searchTerm))
  }
};

const artistSearchField = reduxForm({
  form: 'artist-search'
})(ArtistSearchField);

export default connect(mapStateToProps, mapDispatchToProps)(artistSearchField);