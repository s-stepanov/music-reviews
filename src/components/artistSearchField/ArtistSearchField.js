import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import './artist-search-field.scss';

class ArtistSearchField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app-artist-search-field">
        <input className="app-artist-search-field__input" placeholder="Search artists..."></input>
        <button className="app-artist-search-field__button">
          <Icon>search</Icon>
        </button>
      </div>
    );
  }
}

export default ArtistSearchField;