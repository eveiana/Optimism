import React from 'react';
import { motion } from 'motion/react';
import { AfricaMap } from './AfricaMap';
import { KineticHeadline } from './KineticHeadline';
import { HeroManifesto } from './HeroManifesto';

interface HeroProps {
  onStartQuiz: () => void;
  onOpenGetBook: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartQuiz, onOpenGetBook }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:pt-14 md:pb-20 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Calls to Action matching PDF Page 1 */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
            
            {/* Byline Tag in Yellow matching PDF Page 1 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 0.8, 0.26, 0.99] }}
              className="inline-flex items-center"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF08A] text-[#713F12] border border-[#FACC15]/60 text-xs sm:text-[13px] font-bold tracking-wide shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
                <span>A book by Dr Anand Kulkarni and supported by Africa No Filter</span>
              </div>
            </motion.div>

            {/* Main Headline: AFRICA'S STORY IS CHANGING. THE DATA AGREES. */}
            <KineticHeadline />

            {/* Subtitle / Lead Paragraph matching PDF */}
            <HeroManifesto className="max-w-2xl" />

            {/* Action Buttons: Lime Green Quiz CTA & Blue Get The Book CTA matching PDF Page 1 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 0.8, 0.26, 0.99] }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              {/* Lime Green Button */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                id="hero-quiz-cta"
                onClick={onStartQuiz}
                className="px-6 sm:px-7 py-3.5 rounded-full bg-[#A3E635] hover:bg-[#86EFAC] text-[#0F172A] font-extrabold text-xs sm:text-sm md:text-base tracking-wider transition-colors shadow-md hover:shadow-lg cursor-pointer uppercase inline-flex items-center justify-center min-h-[46px]"
              >
                TAKE THE OPTIMISM QUIZ
              </motion.button>

              {/* Blue Button */}
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                id="hero-getbook-cta"
                onClick={onOpenGetBook}
                className="px-6 sm:px-7 py-3.5 rounded-full bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-extrabold text-xs sm:text-sm md:text-base tracking-wider transition-colors shadow-md hover:shadow-lg cursor-pointer uppercase min-h-[46px] flex items-center justify-center"
              >
                GET THE BOOK
              </motion.button>
            </motion.div>

            {/* Secondary Metadata matching PDF Page 1 under buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.55 }}
              className="text-xs sm:text-[13px] text-[#64748B] flex items-center flex-wrap gap-2 pt-1 font-medium"
            >
              <span>
                10 benchmarks, from tax to tea leaves... 100+ data points, various benchmarks from across the continent
              </span>
            </motion.div>

          </div>

          {/* Right Column: Faceted Purple Africa Map with Floating Stat Badges */}
          <div className="lg:col-span-5 flex justify-center items-center py-4 lg:py-0">
            <AfricaMap className="w-full max-w-[460px] lg:max-w-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
