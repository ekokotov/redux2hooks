import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {Store} from "../../src";

function PrivateRoute({component: Component, ...rest}) {
  const {state} = React.useContext(Store);

  if (!state.auth.initialized) {
    return <Fragment/>;
  }

  return <Route {...rest} render={
    props => state.auth.me ? <Component {...props} /> : <Redirect to={'/login'}/>
  }/>;
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default PrivateRoute;
