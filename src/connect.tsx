import React, { useContext } from 'react';
import { Store } from './StoreProvider';
import { IMappedAction } from './types';

export default function connect(
  mapStateToProps: Function,
  mapActions: IMappedAction
): Function {
  return (
    Component: React.ComponentType
  ): Function => (): React.ReactElement => {
    const { state, dispatch } = useContext(Store);
    const mappedActions: IMappedAction = {};
    const mappedStateToProps = mapStateToProps ? mapStateToProps(state) : {};

    for (const key in mapActions) {
      if (mapActions.hasOwnProperty(key)) {
        mappedActions[key] = (...args: any) =>
          dispatch(mapActions[key](...args));
      }
    }
    // Wraps the input component in a container, without mutating it. Good!
    return <Component {...mappedStateToProps} {...mappedActions} />;
  };
}
