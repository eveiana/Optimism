import React from 'react';
import { motion } from 'motion/react';

interface AnimatedParagraphProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'p' | 'div' | 'span';
  interactive?: boolean;
}

export const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({
  text,
  className = '',
  delay = 0,
  stagger = 0.012,
  as = 'p',
  interactive = true,
}) => {
  const words = text.split(/\s+/).filter(Boolean);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 14,
      filter: 'blur(3px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.48,
        ease: [0.22, 0.8, 0.26, 0.99] as const,
      },
    },
  };

  const Component = motion[as];

  return (
    <Component
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`leading-relaxed select-text ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          whileHover={
            interactive
              ? {
                  y: -2,
                  scale: 1.04,
                  color: '#0F172A',
                  transition: { duration: 0.15 },
                }
              : undefined
          }
          className={`inline-block mr-[0.28em] will-change-transform ${interactive ? 'cursor-default transition-colors' : ''}`}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
};
