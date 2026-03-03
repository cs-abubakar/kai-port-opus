import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function AnimatedText({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.03,
  once = true
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-100px' });

  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: () => ({
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block"
        >
          {word}
          {index !== words.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.span>
  );
}
