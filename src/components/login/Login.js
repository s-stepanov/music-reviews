import React from 'react';
import './login.scss';
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  handleLoginClick() {
    window.location.href = 'http://localhost:3000/api/auth/google';
  }

  render () {
    return (
      <div className={'app-login'}>
        <div className={'app-login__form'}>
          <div className={'app-login__form__title'}>
            Music Reviews App
          </div>
          <img
            onClick={this.handleLoginClick}
            className={'app-login__form__button'}
            src={'img/btn_google_signin_dark_normal_web@2x.png'}
          />
        </div>
      </div>
    );
  }
}

export default Login;