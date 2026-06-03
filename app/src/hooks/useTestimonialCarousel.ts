import { useState, useEffect, useCallback, useRef } from 'react';

export function useTestimonialCarousel(total: number, interval = 6000) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(next, interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, next, interval]);

  return { activeIndex, next, prev, goTo, setIsPaused };
}
