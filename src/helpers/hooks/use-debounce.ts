import debounce from 'lodash.debounce';
import { useEffect, useMemo, useRef } from 'react';

export default function useDebounce(callback: () => void, timer: number) {
  const ref = useRef<() => void>();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };
    return debounce(func, timer);
  }, [timer]);

  return debouncedCallback;
}
