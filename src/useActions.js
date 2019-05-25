import {useContext} from 'react';
import {Store} from "./StoreProvider.jsx";

function useActions(mapAction = {}) {
  const {dispatch} = useContext(Store);

  return Object.keys(mapAction).reduce((acc, key) => {
      acc[key] = (...args) => dispatch(mapAction[key](...args));
      return acc;
    }, {});
}
export default useActions;
