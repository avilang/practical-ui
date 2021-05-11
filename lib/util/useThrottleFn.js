import { useRef, useEffect, useCallback } from 'react';

function useThrottleFn(fn, delay) {
  const { current } = useRef({ fn, timer: null });
  useEffect(
    function () {
      current.fn = fn;
    },
    [fn]
  );

  useEffect(() => {
    return () => {
      if (current.timer) {
        clearTimeout(current.timer);
        current.timer = null;
      }
    };
  }, []);

  return useCallback(function (...args) {
    if (!current.timer) {
      current.timer = setTimeout(() => {
        current.timer = null;
      }, delay);
      current.fn.call(this, ...args);
    }
  }, []);
}

export default useThrottleFn;
