import React, { createContext, useReducer } from 'react';
import { DispatchAction, IStoreProviderProps, IStoreState } from './types-helper';

export const Store: React.Context<any> = createContext(undefined);

// const devTools = devToolsEnhancer;
// let _redux;
// import {devToolsEnhancer} from 'redux-devtools-extension';

export const StoreProvider: React.FC<
  React.PropsWithChildren<IStoreProviderProps>
> = (
  props: React.PropsWithChildren<IStoreProviderProps>
): React.ReactElement => {
  let [state, setState] = useReducer(
    props.reducers,
    props.initialState || props.reducers()
  );
  // _redux = devTools.connect();
  // _redux.init(state);
  // });
  function getState(): IStoreState {
    return state;
  }

  function dispatch(action: DispatchAction): IStoreState {
    // own dispatch
    if (typeof action == 'function') {
      return action(dispatch, getState);
    }
    // devTools.send(action, reducers(state, action));
    setState(action);
    return state;
  }

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
