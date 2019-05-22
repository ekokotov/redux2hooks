import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from "../../../src";
import Octicon, {Organization, Mail, Briefcase} from "@githubprimer/octicons-react";

function Index(props) {
  return (
    <Fragment>
      <h3>Stats:</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <Octicon icon={Organization} size='small' className="mr-2"/>
          Followers: {props.me.followers}</li>
        <li className="list-group-item">
          <Octicon icon={Organization} size='small' className="mr-2"/>
          Following: {props.me.following}</li>
        <li className="list-group-item">
          <Octicon icon={Mail} size='small' className="mr-2"/>
          {props.me.email}</li>
        <li className="list-group-item">
          <Octicon icon={Briefcase} size='small' className="mr-2"/>
          {props.me.company}</li>
      </ul>
    </Fragment>
  );
}

Index.propTypes = {
  me: PropTypes.object
};

export default connect(
  state => ({
    me: state.auth.me
  })
)(Index);
