import React from 'react';
import { motion } from 'motion/react';
import { AnimatedText } from './AnimatedText';
import { BookMockup3D } from './BookMockup3D';

export const WhyExists: React.FC = () => {
  return (
    <section id="why-exists" className="py-16 sm:py-24 bg-[#FFFDF9] border-b border-[#F0EBE1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Bold Headline & Narrative Copy matching PDF Page 1 */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 0.8, 0.26, 0.99] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Tag / Eyebrow in Pink matching PDF Page 1 */}
            <div>
              <span className="inline-block text-xs sm:text-sm font-extrabold tracking-widest text-[#E01A8A] uppercase cursor-default">
                WHY THIS BOOK EXISTS
              </span>
            </div>

            {/* Headline matching PDF Page 1: NOT A BOOK ABOUT / PRETENDING THE / CHALLENGES DON'T EXIST. */}
            <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.92] text-[#4A154B] tracking-tight">
              <AnimatedText text="NOT A BOOK ABOUT" className="block" />
              <AnimatedText text="PRETENDING THE" className="block" delay={0.12} />
              <AnimatedText text="CHALLENGES DON'T EXIST." className="block" delay={0.24} />
            </h2>

            {/* Narrative copy matching PDF Page 1 */}
            <div className="space-y-4 text-sm sm:text-base md:text-lg text-[#334155] leading-relaxed font-normal pt-1 max-w-2xl">
              <p>
                It&apos;s not about ignoring the challenges — it&apos;s about recognising the evidence of progress that too often goes unnoticed. The stories told about Africa shape investment decisions, policy, media coverage and global perception — and for decades, those stories have failed to keep pace with reality.
              </p>
              <p>
                Drawing on hundreds of data points, international indices and real-life stories from across the continent, <em>Optimistic Africa</em> argues that optimism isn&apos;t wishful thinking, it&apos;s evidence-based. Better narratives create better outcomes: more investment, more tourism, more trade, more innovation.
              </p>
            </div>

            {/* Audience chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'Policymakers',
                'Investors',
                'Development organisations',
                'Journalists',
                'Entrepreneurs',
                'African Diaspora',
              ].map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1 rounded-full text-xs font-semibold border border-[#E2D8C9] bg-white text-[#475569] shadow-2xs"
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right Column: 3D Hardcover Book Mockup matching PDF Page 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 0.8, 0.26, 0.99] }}
            className="lg:col-span-5 flex justify-center items-center py-4 lg:py-0"
          >
            <BookMockup3D />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
