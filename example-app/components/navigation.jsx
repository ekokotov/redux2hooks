import React from 'react';
import PropTypes from 'prop-types';
import {logout} from '../store/auth/actions';
import {connect} from "../../src";
import Octicon, {SignOut, Location} from "@githubprimer/octicons-react";

function Nav(props) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <a href={props.me.html_url} className="navbar-brand p-0" target="_blank">
        <div className="media">
          <img className="rounded float-left rounded-md mr-3" width="50" src={props.me.avatar_url} alt="avatar"/>
          <div className="media-body">
            <h5 className="mt-0">{props.me.name}</h5>
            <Octicon icon={Location} size='small' className="float-left mr-2"/><h6>{props.me.location}</h6>
          </div>
        </div>
      </a>

      <ul className="navbar-nav my-lg-0">
        <li className="nav-item active">
          <button className="btn btn-warning" onClick={props.logout}><Octicon icon={SignOut} size='small'/> Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

Nav.propTypes = {
  me: PropTypes.object,
  logout: PropTypes.func,
};

export default connect(
  state => ({
    me: state.auth.me
  }),
  {logout}
)(Nav);
