import React from 'react';
import PropTypes from 'prop-types';

function Follower(props) {
  return (
    <li className="list-group-item">
      <div className="media">
        <img className="rounded float-left rounded-md mr-3" width="25" src={props.user.avatar_url}
             alt={props.user.login}/>
        <div className="media-body">
          <h4 className="m-0">{props.user.login}</h4>
        </div>
      </div>
    </li>
  );
}

Follower.propTypes = {
  user: PropTypes.object.isRequired
};

export default Follower;
