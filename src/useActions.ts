import { useContext } from 'react';
import { Store } from './StoreProvider';
import { IMappedAction } from './types';

function useActions(mapAction: IMappedAction = {}) {
  const { dispatch } = useContext(Store);

  return Object.keys(mapAction).reduce(
    (acc: IMappedAction, key: string): Object => {
      acc[key] = (...args: any): Function => dispatch(mapAction[key](...args));
      return acc;
    },
    {}
  );
}

export default useActions;
