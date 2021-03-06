import * as React from 'react';

export type IAction = {
  type: string;
  payload?: Object;
};

export interface IStoreState {
  [key: string]: Object;
}

export interface IReducer extends Object {
  (state: Object, action: IAction): IStoreState;
}

export interface ICombineReducers {
  [key: string]: IReducer;
}

export interface IMappedAction {
  [key: string]: Function;
}

export interface IMappedStateToProps {
  (state?: IStoreState | null, props?: React.ComponentProps<any>): IStoreState;
}

export interface IStoreProviderProps {
  reducers: IMappedStateToProps;
  initialState?: IStoreState;
}
export type DispatchAction =
  | IAction
  | {
  (dispatch: DispatchAction, getState: () => IStoreState): IStoreState;
};
