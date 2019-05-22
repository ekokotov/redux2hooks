import React, {useEffect} from "react";
import LoginPage from "./pages/login";
import DashBoard from "./pages/dashboard";
import {Switch, Route} from 'react-router-dom';
import PrivateRoute from "./components/private-route";
import {initAuth} from './store/auth/actions';
import {connect} from "../src";

function Routes(props) {
  useEffect(() => {
    props.initUser();
  }, []);

  return <Switch>
    <Route path="/login" component={LoginPage}/>
    <PrivateRoute path="/" component={DashBoard}/>
  </Switch>;
}

export default connect(
  null,
  {initUser: initAuth})
(Routes)
