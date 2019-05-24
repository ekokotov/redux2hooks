import {useContext, useMemo} from 'react';
import {Store} from "./index";

export function useActionsHook(mapAction = {}) {
  const {dispatch} = useContext(Store);

  return useMemo(() =>
    Object.keys(mapAction).reduce((acc, key) => {
      acc[key] = (...args) => dispatch(mapAction[key](...args));
      return acc;
    }, {}),
    []);
}