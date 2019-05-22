import Provider, {Store as storeContext} from './StoreProvider';
import bindComponent from './connect';
import {combineAllReducers} from './combineReducers';

// export const createStore = (reducers, initialState) => ({reducers, initialState});
// export const compose = (...funcs) => (...args) => funcs.forEach(f => f(...args));

// export const applyMiddleware = compose;
export const Store = storeContext;
export const StoreProvider = Provider;
export const connect = bindComponent;
export const combineReducers = combineAllReducers;
