import { useContext } from 'react'
import { Store } from './StoreProvider'

export default function useStore<Function>(mapFunction: Function): Object {
  const { state } = useContext(Store);

  return typeof mapFunction === 'function' ? mapFunction(state) : state
}
