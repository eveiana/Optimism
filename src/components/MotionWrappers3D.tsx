import React from 'react';
import { motion } from 'motion/react';

/**
 * Editorial Rise & Reveal transition matching notwaiting.africa (cubic-bezier(.22,.8,.26,.99))
 * Gentle, confident upward slide and opacity fade without jarring 3D tilt.
 */
export const EditorialSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}> = ({ children, className = '', id, delay = 0 }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{
      duration: 0.8,
      delay,
      ease: [0.22, 0.8, 0.26, 0.99],
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// Backward compatibility alias for FlipSection
export const FlipSection = EditorialSection;

// Backward compatibility alias for ZoomDepthSection
export const ZoomDepthSection = EditorialSection;

/**
 * Editorial Card Hover transition matching notwaiting.africa
 * Clean vertical lift and subtle scale with refined shadow elevation.
 */
export const EditorialCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  id?: string;
}> = ({ children, className = '', onClick, style = {}, id }) => (
  <motion.div
    id={id}
    whileHover={{
      y: -8,
      scale: 1.015,
      boxShadow: '0 24px 48px -16px rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.05)',
    }}
    transition={{ duration: 0.32, ease: [0.22, 0.8, 0.26, 0.99] }}
    style={style}
    className={className}
    onClick={onClick}
  >
    {children}
  </motion.div>
);

// Backward compatibility alias for Card3DHover
export const Card3DHover = EditorialCard;

