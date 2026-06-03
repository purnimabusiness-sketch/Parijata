import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionEntranceProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  distance?: number;
  duration?: number;
}

export function SectionEntrance({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 40,
  duration = 0.8,
}: SectionEntranceProps) {
  const getInitial = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -distance };
      case 'right':
        return { opacity: 0, x: distance };
      default:
        return { opacity: 0, y: distance };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: "easeInOut" as const }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delay?: number;
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.12,
  delay = 0,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
  direction = 'up',
  distance = 40,
}: {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  distance?: number;
}) {
  const hidden =
    direction === 'left'
      ? { opacity: 0, x: -distance }
      : direction === 'right'
      ? { opacity: 0, x: distance }
      : { opacity: 0, y: distance };

  const visible =
    direction === 'left' || direction === 'right'
      ? { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" as const } }
      : { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" as const } };

  return (
    <motion.div
      className={className}
      variants={{ hidden, visible }}
    >
      {children}
    </motion.div>
  );
}
