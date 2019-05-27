import { IAction, ICombineReducers, IStoreState } from './types-helper';

const combineReducers = (reducers: ICombineReducers): Function => (
  state: IStoreState = {},
  action: IAction
) =>
  Object.keys(reducers).reduce(
    (nextState: IStoreState = {}, key: string): IStoreState => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    },
    {}
  );

export default combineReducers;
