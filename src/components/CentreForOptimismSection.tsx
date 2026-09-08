import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Globe, Users } from 'lucide-react';

export const CentreForOptimismSection: React.FC = () => {
  return (
    <section id="centre-for-optimism" className="py-20 sm:py-28 bg-[#FFFDF9] border-t border-[#F0EBE1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Organization Story matching PDF Page 6 */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 0.8, 0.26, 0.99] }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Tag / Eyebrow */}
            <div>
              <span className="inline-block px-3 py-1 rounded bg-[#DE5541] text-white font-extrabold text-xs tracking-widest uppercase shadow-sm">
                ABOUT
              </span>
            </div>

            {/* Headline matching PDF: THE CENTRE FOR / OPTIMISM */}
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#182352] leading-[0.9] tracking-tight">
              THE CENTRE FOR
              <br />
              OPTIMISM
            </h2>

            {/* Narrative text matching PDF */}
            <div className="space-y-4 text-base sm:text-lg text-[#334155] leading-relaxed font-normal pt-1 max-w-2xl">
              <p>
                The Centre for Optimism is an Australian-based global research and advocacy organization founded in 2018 by former Member of Parliament and Trade Commissioner Victor Perton. It explores and demonstrates how optimism can strengthen leadership, communities and activities, and turn positivity into action.
              </p>
              <p>
                Its work in Africa has included the Nelson Mandela Youth Leadership Summit and the &apos;Hour of African Optimism&apos;. <em>Optimistic Africa</em> builds on this work, exploring optimism as a force for Africa&apos;s development and future.
              </p>
            </div>

            {/* Key African Initiatives */}
            <div className="pt-2 flex flex-wrap gap-2.5">
              {[
                'Nelson Mandela Youth Leadership Summit',
                'Hour of African Optimism',
                'Global Optimism Index Methodology',
                'Melbourne & Pan-African Collaboration',
              ].map((pill, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#F1F5F9] text-[#1E293B] border border-[#CBD5E1]"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="pt-3">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="https://www.centreforoptimism.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#182352] hover:bg-[#0F172A] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-colors cursor-pointer"
              >
                <span>Visit The Centre for Optimism</span>
                <ExternalLink size={15} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column: Official Brand Logo Card matching PDF Page 6 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 0.8, 0.26, 0.99] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-slate-200/80 overflow-hidden group hover:shadow-2xl transition-shadow duration-300">
              {/* Top Vibrant Orange Bar matching PDF Page 6 */}
              <div className="h-2.5 bg-[#EA580C] w-full" />

              <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center space-y-6">
                
                {/* Official Centre for Optimism Sun & Wordmark */}
                <div className="flex items-center gap-4 text-left">
                  {/* Radiant Sun Vector Emblem */}
                  <div className="relative shrink-0">
                    <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20 drop-shadow-sm">
                      {/* Sun Central Disc */}
                      <circle cx="50" cy="50" r="18" fill="#F97316" />
                      {/* Radiating Triangular Rays */}
                      {[...Array(16)].map((_, i) => {
                        const angle = (i * 360) / 16;
                        return (
                          <polygon
                            key={i}
                            points="48,16 52,16 50,4"
                            fill="#F97316"
                            transform={`rotate(${angle} 50 50)`}
                          />
                        );
                      })}
                    </svg>
                  </div>

                  {/* Brand Typography */}
                  <div>
                    <h3 className="font-bebas text-3xl sm:text-4xl tracking-wider text-[#EA580C] leading-none">
                      OPTIMISM
                    </h3>
                    <p className="text-[11px] sm:text-xs font-bold tracking-widest text-[#334155] uppercase mt-0.5">
                      THE CENTRE FOR OPTIMISM
                    </p>
                  </div>
                </div>

                <div className="w-full border-t border-slate-100 pt-5 space-y-2 text-xs text-slate-600 text-left">
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-[#EA580C] shrink-0" />
                    <span>Melbourne, Australia · Global Think-Tank</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-[#EA580C] shrink-0" />
                    <span>Founder: Victor Perton · Chief Economist: Dr Anand Kulkarni</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
