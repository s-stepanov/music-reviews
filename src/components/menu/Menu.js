import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import './menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appName: 'Music Reviews App'
    };
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
          <span className="app-menu__title-container__title">Music Reviews App</span>
        </div>
        <div className="app-menu__buttons">
          <button className="app-menu__buttons__login-button">Sign In</button>
        </div>
      </header>
    );
  }
}

export default Menu;