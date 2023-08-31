import { useEffect, useRef, useState } from 'react';

export function useOutside(initialIsVisible: boolean) {
  const [isShow, setIsShow] = useState<Boolean>(initialIsVisible);
  const ref = useRef<HTMLDivElement | null>(null);

  function handleClickOutside(event: MouseEvent) {
    if (event.target && !ref.current?.contains(<Node>event!.target)) {
      setIsShow(false);
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return document.removeEventListener('click', handleClickOutside, true);
  }, []);

  return { ref, isShow, setIsShow };
}
