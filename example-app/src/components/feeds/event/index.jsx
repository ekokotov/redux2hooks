import React from 'react';
import PropTypes from 'prop-types';
import Octicon, {Repo, Link} from "@githubprimer/octicons-react/";
import {getEventTextByType} from "./helper";

function Event(props) {
  const {repo, payload, actor, type} = props.data;

  return (
    <li className="list-group-item">
      <div className="d-flex w-100 justify-content-between">
        <div className="media align-items-center">
          <img className="rounded float-left rounded-md mr-3 align-self-start" width="50" src={actor.avatar_url}
               alt={actor.display_login}/>
          <div className="media-body">
            <div className="d-flex align-items-center flex-wrap pb-2">
              {actor.display_login}
              <mark className="m-1">{getEventTextByType(type)}</mark>
              <p className="mb-1">
                <Octicon icon={Repo} size='small' className="mr-2"/>
                <a href={repo.url} target="_blank">{repo.name}</a>
              </p>
            </div>
            {payload.description && <p className="mb-1 text-secondary">{payload.description}</p>}
            {payload.issue && <div>
              {payload.comment ? <div className="text-secondary bg-light p-1 m-0 rounded">
                <pre>
                  <code>
                    {payload.comment.body}
                  </code>
                </pre>
                </div> :
                <div className="mb-1 text-secondary">
                  <b><a href={payload.issue.url} target="_blank">{payload.issue.title}</a></b>
                  <p className="text-secondary bg-light p-1 rounded m-0 ">{payload.issue.body}</p>
                </div>}
              <small>
                <Octicon icon={Link} size='small' className="mr-1"/>
                <a href={payload.issue.html_url} target="_blank">Issue</a>
              </small>
            </div>}
          </div>
        </div>
      </div>
    </li>
  );
}

Event.propTypes = {
  data: PropTypes.object.isRequired
};

export default React.memo(Event);
