import React, { useContext } from 'react';
import { Store } from './StoreProvider';
import { IMappedAction, IMappedStateToProps } from './types-helper';

export default function connect(
  mapStateToProps: Function,
  mapActions: IMappedAction
): Function {
  return (Component: React.ComponentType): React.FunctionComponent => (
    props: React.ComponentProps<any>
  ): React.ReactElement => {
    debugger;
    const { state, dispatch } = useContext(Store);
    const mappedActions: IMappedAction = {};
    const mappedStateToProps: IMappedStateToProps = mapStateToProps
      ? mapStateToProps(state, props)
      : {};

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
