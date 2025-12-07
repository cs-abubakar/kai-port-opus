import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  const directionVariants = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 }
  };

  const initial = {
    opacity: 0,
    ...directionVariants[direction]
  };

  const animate = {
    opacity: isInView ? 1 : 0,
    x: isInView ? 0 : directionVariants[direction].x,
    y: isInView ? 0 : directionVariants[direction].y
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
