import {LOGIN_START, LOGIN_END, LOGIN_INIT, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT} from './action-types';

const initialState = {
  me: null,
  inProgress: false,
  initialized: false,
  error: null
};

function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        inProgress: true,
        error: null
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        me: action.payload.user,
        error: null
      };

    case LOGIN_FAILED:
      return {
        ...state,
        me: null,
        error: action.payload.error
      };

    case LOGOUT:
      return {
        ...state,
        inProgress: false,
        me: null,
        error: null,
      };

    case LOGIN_END:
      return {
        ...state,
        inProgress: false,
      };

    case LOGIN_INIT:
      return {
        ...state,
        initialized: true
      };

    default:
      return state
  }
}

export default reduce;
