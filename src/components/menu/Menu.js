import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import './menu.scss';
import { withRouter, Link } from 'react-router-dom';

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="app-menu">
        <div className="app-menu__hamburger-container">
          <Icon className="app-menu__hamburger-container__hamburger">
            menu
          </Icon>
        </div>
        <div className="app-menu__title-container">
          <Link to={'/'} className="app-menu__title-container__title">Music Reviews App</Link>
        </div>
        <div className="app-menu__buttons">
          <button className="app-menu__buttons__login-button">Sign In</button>
        </div>
      </header>
    );
  }
}

export default withRouter(Menu);