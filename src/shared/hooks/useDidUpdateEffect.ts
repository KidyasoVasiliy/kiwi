import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

/**
 * Calls function on component update or inputs change phase
 * @param callback
 * @param deps
 */
export const useDidUpdateEffect = (
  callback: EffectCallback,
  deps: DependencyList,
) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) callback();
    else didMountRef.current = true;
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  return true;
};
