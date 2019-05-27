import React, { createContext, useReducer } from 'react';
import { IAction, IMappedStateToProps, IStoreState } from './types-helper';

export const Store: React.Context<any> = createContext(undefined);

// const devTools = devToolsEnhancer;
// let _redux;
// import {devToolsEnhancer} from 'redux-devtools-extension';
interface IStoreProviderProps {
  reducers: IMappedStateToProps;
  initialState?: IStoreState;
}

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

  function dispatch(action: IAction | Function) {
    // own dispatch
    if (typeof action == 'function') {
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
};
