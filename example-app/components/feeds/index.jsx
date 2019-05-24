import React, {useEffect, Fragment} from 'react';
import {loadFeed, loadNextPage} from "../../store/feed/actions";
import Event from "./event";
import {useStore, useActions} from "../../../src";

function Feed() {
  const {events, inProgress, page} = useStore(store => ({
    events: store.feeds.events,
    inProgress: store.feeds.inProgress,
    page: store.feeds.page
  }));

  const actions = useActions({
    loadFeed,
    loadNextPage
  });

  useEffect(() => {
    actions.loadFeed()
  }, [page]);

  return (
    <Fragment>
      <h3>Feed
        {!inProgress && <span className="badge badge-info mr-1 ml-1">{events.length}</span>}
        :</h3>
      {inProgress && <div className="d-flex justify-content-center mt-5">
        <span className="spinner-border spinner-border-md text-info" role="status">
            <span className="sr-only">in Progress...</span>
          </span>
      </div>}
      <ul className="list-group">
        {events.map(event => <Event key={event.id} data={event}/>)}
      </ul>
      <div className="d-flex justify-content-center">
        {events.length ?
          <button className="btn btn-outline-success btn-sm m-3" onClick={() => actions.loadNextPage()}>
            {inProgress ?
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
