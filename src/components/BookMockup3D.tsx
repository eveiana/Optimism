import React from 'react';
import { motion } from 'motion/react';
import bookCover from '../assets/images/book_cover_hd.png';

export const BookMockup3D: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center p-4 sm:p-8 select-none">
      {/* Realistic Ground Contact Shadow */}
      <div className="absolute -bottom-5 w-48 sm:w-60 h-8 bg-slate-900/25 rounded-full blur-xl transform scale-y-50" />

      {/* Interactive 3D Floating Book */}
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.03,
          rotateY: -4,
          transition: { duration: 0.35, ease: [0.22, 0.8, 0.26, 0.99] },
        }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 0.8, 0.26, 0.99] }}
        className="relative max-w-[270px] sm:max-w-[320px] cursor-pointer group"
      >
        {/* The Authentic 3D Book Cover Image */}
        <div className="relative rounded-2xl overflow-hidden drop-shadow-[0_24px_45px_rgba(28,15,60,0.38)] group-hover:drop-shadow-[0_32px_55px_rgba(28,15,60,0.48)] transition-all duration-300">
          <img
            src={bookCover}
            alt="Optimistic Africa: The Data Agrees by Dr Anand Kulkarni"
            className="w-full h-auto object-contain block select-none"
            referrerPolicy="no-referrer"
          />

          {/* Subtle glossy sheen reflection on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Subtle Author & Edition Caption */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="text-[11px] font-bold tracking-widest text-[#4A154B] uppercase bg-[#FEF08A] px-3 py-1 rounded-full border border-[#FACC15]/60 shadow-2xs">
            Official Book Edition
          </span>
        </div>
      </motion.div>
    </div>
  );
};

