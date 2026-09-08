import React from 'react';
import { motion } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordSpacing?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  interactive?: boolean;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  delay = 0,
  wordSpacing = 'mr-2',
  as = 'span',
  interactive = true,
}) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 18,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
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
      className={`inline-block select-text ${className}`}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          whileHover={
            interactive
              ? {
                  y: -3.5,
                  scale: 1.03,
                  transition: { duration: 0.18, ease: 'easeOut' },
                }
              : undefined
          }
          className={`inline-block will-change-transform ${interactive ? 'cursor-default transition-colors' : ''} ${wordSpacing}`}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
};

