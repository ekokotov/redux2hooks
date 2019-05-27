import React from 'react';
import { IMappedStateToProps, IStoreState } from './types-helper';
export declare const Store: React.Context<any>;
interface IStoreProviderProps {
    reducers: IMappedStateToProps;
    initialState?: IStoreState;
}
export declare const StoreProvider: React.FC<React.PropsWithChildren<IStoreProviderProps>>;
export {};
