import React, { Component } from 'react';
import './sidebar.scss';
import Icon from "@material-ui/core/Icon/Icon";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className={'app-sidebar'}>
        <Link to={'/'} className={'app-sidebar__link'}>
          <div className={'app-sidebar__item'}>
            <Icon className={'app-sidebar__item__icon'}>home</Icon>
            <span className={'app-sidebar__item__text'}>Home</span>
          </div>
        </Link>
        <div className={'app-sidebar__item'}>
          <Icon className={'app-sidebar__item__icon'}>person</Icon>
          <span className={'app-sidebar__item__text'}>Artists</span>
        </div>
        <div className={'app-sidebar__item'}>
          <Icon className={'app-sidebar__item__icon'}>album</Icon>
          <span className={'app-sidebar__item__text'}>Albums</span>
        </div>
        <div className={'app-sidebar__item'}>
          <Icon className={'app-sidebar__item__icon'}>music_note</Icon>
          <span className={'app-sidebar__item__text'}>Genres</span>
        </div>
      </div>
    )
  }
}

export default Sidebar;