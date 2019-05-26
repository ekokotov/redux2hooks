export interface IAction {
    type: string;
    payload?: Object;
}
export interface IState {
    [key: string]: Object;
}
export interface IReducer extends Object {
    (state: Object, action: IAction): IState;
}
export interface ICombineReducers {
    [key: string]: IReducer;
}
export interface IMappedAction {
    [key: string]: Function;
}
