import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import './menu.scss';
import { Link, withRouter } from 'react-router-dom';
import ArtistSearchField from "../artistSearchField/ArtistSearchField";
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import { logout } from "../../actions/authActions";

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
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
          <ArtistSearchField {...this.props}/>
        </div>
        <div className="app-menu__buttons">
          <div className="app-menu__buttons__user-info">
            <img src={this.props.user && this.props.user.photo}/>
            {this.props.user ? this.props.user.name : ''}
          </div>
          <button className="app-menu__buttons__button" onClick={this.logout}><Icon>exit_to_app</Icon></button>
        </div>
      </header>
    );
  }
}
Menu.propTypes = {
  logout: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu));