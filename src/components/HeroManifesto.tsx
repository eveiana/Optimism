import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CountUp } from './CountUp';

interface HeroManifestoProps {
  className?: string;
}

export const HeroManifesto: React.FC<HeroManifestoProps> = ({ className = '' }) => {
  // Stagger & motion definitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.022,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 14,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const badgeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      y: 14,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring' as const,
        damping: 15,
        stiffness: 220,
      },
    },
  };

  const highlightVariants = {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <div className={`relative ${className}`}>
      <motion.p
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-base sm:text-lg md:text-[19px] text-[#334155] leading-relaxed font-normal tracking-[-0.01em] select-text"
      >
        {/* Clause 1: Negative perceptions cost */}
        {['Negative', 'perceptions', 'cost', 'the', 'continent', 'an', 'estimated'].map(
          (word, idx) => (
            <motion.span
              key={`w1-${idx}`}
              variants={wordVariants}
              whileHover={{ y: -2, scale: 1.05, color: '#0F172A', transition: { duration: 0.15 } }}
              className="inline-block mr-[0.28em] will-change-transform cursor-default"
            >
              {word}
            </motion.span>
          )
        )}

        {/* Special Accent: $4.2 billion */}
        <motion.span
          variants={badgeVariants}
          whileHover={{
            scale: 1.08,
            y: -2.5,
            boxShadow: '0 4px 12px rgba(217, 83, 30, 0.25)',
            transition: { duration: 0.15 },
          }}
          className="inline-flex items-center px-2.5 py-0.5 rounded-md font-bold text-[#D9531E] bg-[#FFF3EE] border border-[#FDBA74]/60 shadow-xs mr-[0.28em] will-change-transform align-baseline cursor-pointer transition-colors"
        >
          <CountUp prefix="$" end={4.2} decimals={1} suffix=" billion" duration={1500} />
        </motion.span>

        {/* Clause 2: every year in higher borrowing costs */}
        {[
          'every',
          'year',
          'in',
          'higher',
          'borrowing',
          'costs',
          '—',
          'money',
          'that',
          'could',
          'fund',
          'schools,',
          'hospitals,',
          'roads',
          'and',
          'clean',
          'water.',
        ].map((word, idx) => (
          <motion.span
            key={`w2-${idx}`}
            variants={wordVariants}
            whileHover={{ y: -2, scale: 1.05, color: '#0F172A', transition: { duration: 0.15 } }}
            className={`inline-block mr-[0.28em] will-change-transform cursor-default ${
              word === '—' ? 'text-slate-400 font-semibold px-0.5' : ''
            }`}
          >
            {word}
          </motion.span>
        ))}

        {/* Spacing break between ideas */}
        <span className="inline-block w-1.5" />

        {/* Clause 3: Optimistic Africa asks a different question */}
        <motion.span
          variants={wordVariants}
          whileHover={{ y: -2, scale: 1.08, color: '#0A381E', transition: { duration: 0.15 } }}
          className="inline-block mr-[0.28em] font-semibold text-[#0E4A28] will-change-transform cursor-default"
        >
          Optimistic
        </motion.span>
        <motion.span
          variants={wordVariants}
          whileHover={{ y: -2, scale: 1.08, color: '#0A381E', transition: { duration: 0.15 } }}
          className="inline-block mr-[0.28em] font-semibold text-[#0E4A28] will-change-transform cursor-default"
        >
          Africa
        </motion.span>

        {['asks', 'a', 'different', 'question:'].map((word, idx) => (
          <motion.span
            key={`w3-${idx}`}
            variants={wordVariants}
            whileHover={{ y: -2, scale: 1.05, color: '#0F172A', transition: { duration: 0.15 } }}
            className="inline-block mr-[0.28em] will-change-transform cursor-default"
          >
            {word}
          </motion.span>
        ))}

        {/* Final Question: highlighted inquiry */}
        <motion.span
          variants={highlightVariants}
          className="relative inline text-[#1E293B] font-medium"
        >
          {[
            'are',
            'we',
            'overlooking',
            'the',
            'evidence',
            'of',
            'extraordinary',
            'progress?',
          ].map((word, idx) => (
            <motion.span
              key={`w4-${idx}`}
              variants={wordVariants}
              whileHover={{
                y: -2.5,
                scale: 1.08,
                color: word.includes('extraordinary') || word.includes('progress') ? '#065F46' : '#0F172A',
                transition: { duration: 0.15 },
              }}
              className={`inline-block mr-[0.28em] will-change-transform cursor-default ${
                word.includes('extraordinary') || word.includes('progress')
                  ? 'text-[#0E4A28] font-semibold'
                  : ''
              }`}
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      </motion.p>
    </div>
  );
};
