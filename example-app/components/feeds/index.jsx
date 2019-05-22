import React, {useEffect, useContext, Fragment} from 'react';
import {Store} from "../../../src";
import {loadFeed, loadNextPage} from "../../store/feed/actions";
import Event from "./event";

function Feed() {
  const {state, dispatch} = useContext(Store);

  useEffect(() => {
    dispatch(loadFeed());
  }, [state.feeds.page]);

  return (
    <Fragment>
      <h3>Feed
        {!state.feeds.inProgress && <span className="badge badge-info mr-1 ml-1">{state.feeds.events.length}</span>}
        :</h3>
      {state.feeds.inProgress && <div className="d-flex justify-content-center mt-5">
        <span className="spinner-border spinner-border-md text-info" role="status">
            <span className="sr-only">in Progress...</span>
          </span>
      </div>}
      <ul className="list-group">
        {state.feeds.events.map(event => <Event key={event.id} data={event}/>)}
      </ul>
      <div className="d-flex justify-content-center">
        {state.feeds.events.length ?
          <button className="btn btn-outline-success btn-sm m-3" onClick={() => dispatch(loadNextPage())}>
            {state.feeds.inProgress ?
              <Fragment>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"/>
                <span className="sr-only">Loading...</span> Loading...
              </Fragment> :
              <span>Load more</span>}
          </button> : null}
      </div>
    </Fragment>
  );
}

export default Feed;
