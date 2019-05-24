import Provider, {Store as storeContext} from './StoreProvider.jsx';
import bindComponent from './connect';
import {combineAllReducers} from './combineReducers';
import {useStoreHook} from "./useStore";
import {useActionsHook} from "./useActions";

// export const createStore = (reducers, initialState) => ({reducers, initialState});
// export const compose = (...funcs) => (...args) => funcs.forEach(f => f(...args));

// export const applyMiddleware = compose;
export const Store = storeContext;
export const StoreProvider = Provider;
export const connect = bindComponent;
export const combineReducers = combineAllReducers;
export const useStore = useStoreHook;
export const useActions = useActionsHook;
