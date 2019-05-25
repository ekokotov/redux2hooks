import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from "../../../../src";
import {loadFollowers} from '../../store/followers/actions';
import Follower from "./follower";

function Followers(props) {
  useEffect(() => {
    props.loadFollowers()
  }, []);

  return (
    <Fragment>
      <h3>Followers
        {!props.inProgress && <span className="badge badge-info mr-1 ml-1">{props.followers.length}</span>}
        :</h3>
      {props.inProgress && <div className="d-flex justify-content-center mt-5">
        <span className="spinner-border spinner-border-md text-info" role="status">
            <span className="sr-only">in Progress...</span>
          </span>
      </div>}
      <ul className="list-group">
        {props.followers.map(user => <Follower key={user.id} user={user}/>)}
      </ul>
    </Fragment>
  );
}

Followers.propTypes = {
  followers: PropTypes.array,
  inProgress: PropTypes.bool.isRequired
};

export default connect(
  state => ({
    followers: state.followers.items,
    inProgress: state.followers.inProgress
  }),
  {loadFollowers}
)(Followers);
