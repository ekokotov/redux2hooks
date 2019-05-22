import React from 'react';
import PropTypes from 'prop-types';
import Octicon, {Package, Star} from "@githubprimer/octicons-react";

function Repo(props) {
  return (
    <li className="list-group-item">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">
          <Octicon icon={Package} size='small' className="mr-2"/>
          <a href={props.repository.url}>{props.repository.name}</a>
        </h5>
        <small>
          {props.repository.stargazers_count}
          <Octicon icon={Star} size='small' className="ml-1"/>
        </small>
      </div>
      <p className="mb-1 text-secondary">{props.repository.description}</p>
      <span className="badge badge-warning m-1">{props.repository.language}</span>
    </li>
  );
}

Repo.propTypes = {
  repository: PropTypes.object.isRequired
};

export default Repo;
