import {useContext} from 'react';
import {Store} from "./index";

export function useStoreHook(mapFunction) {
  const {state} = useContext(Store);

  return typeof mapFunction === 'function' ? mapFunction(state) : state;
}
