import React, { Component } from 'react';
import './sidebar.scss';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'app-sidebar'}>
        <div className={'app-sidebar__item'}>
          First menu item
        </div>
        <div className={'app-sidebar__item'}>
          Second menu item
        </div>
      </div>
    )
  }
}

export default Sidebar;