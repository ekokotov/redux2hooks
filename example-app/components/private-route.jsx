import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useStore} from "../../src";

function PrivateRoute({component: Component, ...rest}) {
  const {initialized, me} = useStore(store => ({
    initialized: store.auth.initialized,
    me: store.auth.me
  }));

  if (!initialized) {
    return <Fragment/>; // loading?
  }

  return <Route {...rest} render={
    props => me ? <Component {...props} /> : <Redirect to={'/login'}/>
  }/>;
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default PrivateRoute;
