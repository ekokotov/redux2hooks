import {LOADING_START, LOADING_END, LOADING_SUCCESS, LOADING_FAILED} from './action-types';
import {LOGOUT} from "../auth/action-types";

const initialState = {
  items: [],
  inProgress: false
};

function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        inProgress: true
      };

    case LOADING_SUCCESS:
      return {
        ...state,
        items: action.payload.repos
      };

    case LOADING_FAILED:
      return initialState;

    case LOADING_END:
      return {
        ...state,
        inProgress: false,
      };

    case LOGOUT:
      return {
        ...initialState
      };

    default:
      return state
  }
}

export default reduce;
