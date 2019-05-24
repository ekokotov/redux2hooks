import {useContext} from 'react';
import {Store} from "./index";

export default function useStore(mapFunction) {
  const {state} = useContext(Store);

  return typeof mapFunction === 'function' ? mapFunction(state) : state;
}
