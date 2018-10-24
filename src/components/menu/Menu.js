import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import './menu.scss';
import { withRouter, Link } from 'react-router-dom';
import ArtistSearchField from "../artistSearchField/ArtistSearchField";

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="app-menu">
        <div className="app-menu__title-container">
          <Icon className="app-menu__title-container__hamburger">
            graphic_eq
          </Icon>
          <Link to={'/'} className="app-menu__title-container__title">Music Reviews App</Link>
        </div>
        <div className='app-menu__search-container'>
          <ArtistSearchField />
        </div>
        <div className="app-menu__buttons">
          <button className="app-menu__buttons__login-button">Login</button>
        </div>
      </header>
    );
  }
}

export default withRouter(Menu);