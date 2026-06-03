import { useRef, useEffect, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ParallaxImage({ src, alt, className = '' }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [supportsScrollTimeline, setSupportsScrollTimeline] = useState(false);

  useEffect(() => {
    setSupportsScrollTimeline(CSS.supports('animation-timeline: scroll()'));
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || supportsScrollTimeline) return;

    let rafId: number;
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image) return;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const viewHeight = window.innerHeight;
        const progress = (viewHeight - rect.top) / (viewHeight + rect.height);
        const clampedProgress = Math.max(0, Math.min(1, progress));
        const translateY = -5 + clampedProgress * 10;
        image.style.transform = `scale(1.15) translateY(${translateY}%)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion, supportsScrollTimeline]);

  return (
    <div ref={containerRef} className={`overflow-hidden rounded-2xl ${className}`}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${
          supportsScrollTimeline && !prefersReducedMotion
            ? 'scale-[1.15] animate-parallax'
            : 'scale-[1.15]'
        }`}
        style={
          supportsScrollTimeline && !prefersReducedMotion
            ? {
                animationName: 'parallax-y',
                animationTimeline: 'view()',
                animationRange: 'cover 20% 80%',
                animationFillMode: 'both',
              }
            : undefined
        }
      />
    </div>
  );
}
