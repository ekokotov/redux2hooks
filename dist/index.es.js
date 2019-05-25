import React, { createContext, useReducer, useContext } from 'react';

const Store = createContext();

// const devTools = devToolsEnhancer;
// let _redux;
// import {devToolsEnhancer} from 'redux-devtools-extension';

function StoreProvider(props) {
  let [state, setState] = useReducer(props.reducers, props.initialState || props.reducers());
  // _redux = devTools.connect();
  // _redux.init(state);
  // });
  function getState() {
    return state;
  }

  function dispatch(action) {
    //own dispatch
    if (typeof action === 'function') {
      return action(dispatch, getState);
    } else if (typeof action === 'object') {
      // devTools.send(action, reducers(state, action));
      return setState(action);
    }
  }

  return React.createElement(
    Store.Provider,
    { value: { state, dispatch } },
    props.children
  );
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function connect(mapStateToProps, mapActions) {
  return Component => () => {
    const { state, dispatch } = useContext(Store);
    const mappedActions = {};
    const mappedStateToProps = mapStateToProps ? mapStateToProps(state) : {};

    for (const key in mapActions) {
      if (mapActions.hasOwnProperty(key)) {
        mappedActions[key] = args => dispatch(mapActions[key](args));
      }
    }
    // Wraps the input component in a container, without mutating it. Good!
    return React.createElement(Component, _extends({}, mappedStateToProps, mappedActions));
  };
}

const combineReducers = reducers => (state = {}, action) => Object.keys(reducers).reduce((nextState, key) => {
  nextState[key] = reducers[key](state[key], action);
  return nextState;
}, {});

function useStore(mapFunction) {
  const { state } = useContext(Store);

  return typeof mapFunction === 'function' ? mapFunction(state) : state;
}

function useActions(mapAction = {}) {
  const { dispatch } = useContext(Store);

  return Object.keys(mapAction).reduce((acc, key) => {
    acc[key] = (...args) => dispatch(mapAction[key](...args));
    return acc;
  }, {});
}

export { Store, StoreProvider, combineReducers, connect, useActions, useStore };
//# sourceMappingURL=index.es.js.map
