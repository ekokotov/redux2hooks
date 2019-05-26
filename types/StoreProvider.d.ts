import React from 'react';
import { IState } from './types';
export declare const Store: React.Context<any>;
interface IStoreProviderProps {
    reducers: () => IState;
    initialState?: IState;
    children: Array<React.ReactElement>;
}
export declare function StoreProvider(props: IStoreProviderProps): React.ReactElement;
export default StoreProvider;
