import React, { createContext, useReducer } from 'react';
import { IAction, IState } from './types';

export const Store: React.Context<any> = createContext(null);

// const devTools = devToolsEnhancer;
// let _redux;
// import {devToolsEnhancer} from 'redux-devtools-extension';
interface IStoreProviderProps {
  reducers: () => IState;
  initialState?: IState;
  children: Array<React.ReactElement>;
}

export function StoreProvider(props: IStoreProviderProps): React.ReactElement {
  let [state, setState] = useReducer(
    props.reducers,
    props.initialState || props.reducers()
  );
  // _redux = devTools.connect();
  // _redux.init(state);
  // });
  function getState(): IState {
    return state;
  }

  function dispatch(action: IAction | Function) {
    // own dispatch
    if (typeof action === 'function') {
      return action(dispatch, getState);
    } else if (typeof action === 'object') {
      // devTools.send(action, reducers(state, action));
      return setState(action);
    }
  }

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}

export default StoreProvider;
