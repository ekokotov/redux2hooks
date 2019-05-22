import {LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT, LOGIN_END, LOGIN_INIT} from './action-types';
import API from '../../api';

export const login = userData => async dispatch => {
  dispatch({type: LOGIN_START});
  try {
    const user = await API.authenticate(userData);
    dispatch({type: LOGIN_SUCCESS, payload: {user}});
  } catch (errors) {
    dispatch({type: LOGIN_FAILED, payload: {error: errors.message}});
  }
  dispatch({type: LOGIN_END});
};

export const initAuth = () => async dispatch => {
  try {
    const user = await API.authenticate();
    dispatch({type: LOGIN_SUCCESS, payload: {user}});
  } catch (errors) {
    console.log(errors)
  }
  dispatch({type: LOGIN_INIT});
};

export const logout = () => dispatch => {
  API.logout();
  dispatch({type: LOGOUT});
};
