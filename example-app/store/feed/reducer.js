import {LOADING_START, LOADING_END, LOADING_SUCCESS, LOADING_FAILED, SET_PAGE} from './action-types';
import {LOGOUT} from "../auth/action-types";

const initialState = {
  events: [],
  inProgress: false,
  page: 0
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
        events: [...state.events, ...action.payload.events]
      };

    case LOADING_FAILED:
      return {
        ...initialState,
        page: state.page - 1 > 0 ? state.page - 1 : 1
      };

    case LOADING_END:
      return {
        ...state,
        inProgress: false,
      };

    case SET_PAGE:
      return {
        ...state,
        page: state.page + 1
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
