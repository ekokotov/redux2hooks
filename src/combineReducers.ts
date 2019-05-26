import { IAction, ICombineReducers, IState } from './types';

const combineReducers = (reducers: ICombineReducers): Function => (
  state: IState = {},
  action: IAction
) =>
  Object.keys(reducers).reduce(
    (nextState: IState = {}, key: string): IState => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    },
    {}
  );

export default combineReducers;
