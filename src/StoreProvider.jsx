import React, {createContext, useReducer} from 'react';

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

export default StoreProvider;
