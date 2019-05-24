import React, {createContext, useReducer} from 'react';
import PropTypes from 'prop-types';

export const Store = createContext();

// const devTools = devToolsEnhancer;
// let _redux;
// import {devToolsEnhancer} from 'redux-devtools-extension';

export function StoreProvider(props) {
  let [state, setState] = useReducer(props.reducers, props.initialState || props.reducers());
  // _redux = devTools.connect();
  // _redux.init(state);
  // });
  function getState() {
    return state;
  }

  function dispatch(action) { //own dispatch
    if (typeof action === 'function') {
      return action(dispatch, getState);
    } else if (typeof action === 'object') {
      // devTools.send(action, reducers(state, action));
      return setState(action);
    }
  }

  return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>;
}

StoreProvider.propTypes = {
  initialState: PropTypes.object,
  reducers: PropTypes.func.isRequired
};

export default StoreProvider;
