import React from 'react';
import { motion } from 'motion/react';
import authorPhoto from '../assets/images/doctor.jpg';

export const AuthorSection: React.FC = () => {
  return (
    <section id="author" className="py-20 sm:py-28 bg-[#DE5541] text-white relative overflow-hidden">
      {/* Subtle ambient light accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Author Bio and Details matching PDF Page 5 */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 0.8, 0.26, 0.99] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Tag / Eyebrow */}
            <div>
              <span className="inline-block px-3 py-1 rounded bg-[#FACC15] text-[#1E293B] font-extrabold text-xs tracking-widest uppercase shadow-sm">
                ABOUT
              </span>
            </div>

            {/* Headline matching PDF: THE AUTHOR / DR ANAND KULKARNI in vibrant mint green */}
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#10F4A0] leading-[0.9] tracking-tight">
              THE AUTHOR
              <br />
              DR ANAND KULKARNI
            </h2>

            {/* Narrative text matching PDF */}
            <div className="space-y-4 text-base sm:text-lg text-white/95 leading-relaxed font-normal pt-1 max-w-2xl">
              <p>
                Dr Anand Kulkarni is Chief Economist at the Centre for Optimism, bringing extensive experience across government, academia and think-tanks. An economist and author, he has led major research and policy initiatives and advised organizations as a consultant.
              </p>
              <p>
                He is the author of ten books, including <em>India and the Knowledge Economy: Performance, Perils and Prospects</em>, and is currently writing books on higher education in India and India&apos;s path to becoming a developed economy. His work focuses across a number of economic and social trends from tourism, finance to trade and global innovation. He holds Masters and PhD degrees in Economics.
              </p>
            </div>

            {/* Quick credentials badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {[
                'Chief Economist, Centre for Optimism',
                'Author of 10 Books',
                'PhD in Economics',
                'International Policy Advisor',
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/15 text-white border border-white/20 backdrop-blur-xs"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Framed Portrait Photo matching PDF Page 5 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 0.8, 0.26, 0.99] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Decorative background frame */}
              <div className="absolute -inset-2 sm:-inset-3 bg-white/20 rounded-3xl transform rotate-1 group-hover:rotate-0 transition-transform duration-300" />
              
              {/* Photo Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border-4 border-white max-w-sm sm:max-w-md">
                <img
                  src={authorPhoto}
                  alt="Dr Anand Kulkarni, Chief Economist and Co-Author of Optimistic Africa"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-top aspect-[4/5] filter brightness-[1.01] contrast-[1.02]"
                />
                
                {/* Author Name Tag at bottom */}
                <div className="p-4 bg-white text-[#1E293B] border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-base text-[#1E293B] leading-tight">
                      Dr Anand Kulkarni
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Chief Economist &amp; Author
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-[#DE5541] bg-[#FEE2E2] px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Author
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
