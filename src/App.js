import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./components/mainPage/MainPage";
import Login from "./components/login/Login";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import { getCurrentUser } from "./actions/authActions";
import connect from "react-redux/es/connect/connect";

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/login'} component={Login} {...this.props}/>
          <PrivateRoute path={'/'} component={MainPage} {...this.props}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    isAuthenticated: state.auth.isAuthenticated,
    isFetching: state.auth.isFetching
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: () => dispatch(getCurrentUser())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);