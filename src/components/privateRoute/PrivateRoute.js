import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentUser } from "../../actions/authActions";

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const {component: Component, ...rest} = this.props;

    return <Route {...rest} render={(props) => (
      <Component {...props} />
    )} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PrivateRoute));