import React from 'react';
import { motion } from 'motion/react';

interface KineticHeadlineProps {
  className?: string;
}

interface WordData {
  text: string;
  isAccent?: boolean;
}

const LINE_1: WordData[] = [
  { text: "AFRICA'S", isAccent: true },
  { text: 'STORY' },
  { text: 'IS' },
  { text: 'CHANGING.', isAccent: true },
];

const LINE_2: WordData[] = [
  { text: 'THE' },
  { text: 'DATA' },
  { text: 'AGREES.', isAccent: true },
];

export const KineticHeadline: React.FC<KineticHeadlineProps> = ({ className = '' }) => {
  // Main headline container: staggers words sequentially
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.11,
        delayChildren: 0.08,
      },
    },
  };

  // Word container: staggers individual characters like piano keys
  const wordVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  // Character-level kinetic physics: masked upward slide with perspective & de-blur
  const charVariants = {
    hidden: {
      y: '115%',
      opacity: 0,
      rotateX: 40,
      filter: 'blur(5px)',
    },
    visible: {
      y: '0%',
      opacity: 1,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.68,
        ease: [0.16, 1, 0.3, 1] as const, // Quintic deceleration spring curve
      },
    },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.92] tracking-tight text-[#D9531E] select-text ${className}`}
      style={{ perspective: 1000 }}
    >
      {/* Line 1: AFRICA'S STORY IS CHANGING. */}
      <span className="block">
        {LINE_1.map((wordObj, wIdx) => (
          <span
            key={`l1-w-${wIdx}`}
            className="inline-block whitespace-nowrap overflow-hidden align-top mr-[0.24em] last:mr-0 pb-1 -mb-1"
          >
            <motion.span
              variants={wordVariants}
              className="inline-block will-change-transform"
            >
              {wordObj.text.split('').map((char, cIdx) => (
                <motion.span
                  key={`l1-c-${wIdx}-${cIdx}`}
                  variants={charVariants}
                  whileHover={{
                    y: -6,
                    scale: 1.12,
                    color: '#B83E0F',
                    transition: { type: 'spring', stiffness: 500, damping: 15 },
                  }}
                  className="inline-block will-change-transform cursor-default transition-colors"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </span>
        ))}
      </span>

      {/* Line 2: THE DATA AGREES. */}
      <span className="block">
        {LINE_2.map((wordObj, wIdx) => (
          <span
            key={`l2-w-${wIdx}`}
            className="inline-block whitespace-nowrap overflow-hidden align-top mr-[0.24em] last:mr-0 pb-1 -mb-1"
          >
            <motion.span
              variants={wordVariants}
              className="inline-block will-change-transform"
            >
              {wordObj.text.split('').map((char, cIdx) => (
                <motion.span
                  key={`l2-c-${wIdx}-${cIdx}`}
                  variants={charVariants}
                  whileHover={{
                    y: -6,
                    scale: 1.12,
                    color: '#B83E0F',
                    transition: { type: 'spring', stiffness: 500, damping: 15 },
                  }}
                  className="inline-block will-change-transform cursor-default transition-colors"
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </span>
        ))}
      </span>
    </motion.h1>
  );
};
