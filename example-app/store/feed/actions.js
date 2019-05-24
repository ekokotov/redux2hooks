import {LOADING_END, LOADING_FAILED, LOADING_START, LOADING_SUCCESS, NEXT_PAGE} from "../feed/action-types";
import API from "../../api";

export const loadFeed = () => async (dispatch, getState) => {
  dispatch({type: LOADING_START});
  try {
    const store = getState();
    const me = store.auth.me.login;
    const events = await API.getFeed(me, store.feeds.page);

    dispatch({type: LOADING_SUCCESS, payload: {events}});
  } catch (e) {
    dispatch({type: LOADING_FAILED});
  } finally {
    dispatch({type: LOADING_END});
  }
};

export const loadNextPage = () => ({type: NEXT_PAGE});
