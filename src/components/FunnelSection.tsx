import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimatedText } from './AnimatedText';
import { AnimatedParagraph } from './AnimatedParagraph';
import { Layers, CheckCircle2, Maximize2, X, ZoomIn } from 'lucide-react';
import { TeaLeavesSimulation } from './TeaLeavesSimulation';
import funnelImg from '../assets/images/funnel.png';

export const FunnelSection: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<'foundations' | 'capabilities' | 'outcomes' | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const tiers = [
    {
      id: 'foundations' as const,
      title: 'FOUNDATIONS',
      description:
        'Peace, governance and solidarity are threshold conditions. They don\'t need to be perfect — but they must exist to enable progress.',
      chapters: ['PEACE', 'GOVERNANCE', 'SOLIDARITY'],
    },
    {
      id: 'capabilities' as const,
      title: 'CAPABILITIES',
      description:
        'Youth, entrepreneurship, technology, diaspora and creative industries — the productive forces that compound over time.',
      chapters: ['CREATIVE CITIES', 'INNOVATION & TECH', 'DIASPORA & ICT', 'ENTREPRENEURSHIP', 'YOUTH'],
    },
    {
      id: 'outcomes' as const,
      title: 'OUTCOMES',
      description:
        'Higher growth, rising incomes, poverty reduction and expanding middle classes — proof the funnel is working.',
      chapters: ['OPTIMISM INDEX', 'GROWTH AND PROSPERITY'],
    },
  ];

  return (
    <section id="funnel" className="py-20 sm:py-28 bg-[#E01A8A] text-white relative overflow-hidden">
      {/* Subtle organic texture pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Tag */}
        <div className="flex items-center justify-center gap-2 mb-3 text-center">
          <Layers size={16} className="text-white/80" />
          <span className="inline-block text-xs sm:text-sm font-bold tracking-widest text-white/90 uppercase">
            THE FRAMEWORK
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-8">
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight text-white">
            <AnimatedText text="THE FUNNEL OF OPTIMISM" className="inline-block" />
          </h2>
          
          <div className="mt-4 max-w-3xl mx-auto text-white/95">
            <AnimatedParagraph
              text="Optimism, here, isn't rhetorical — it's structural. Peace, governance and solidarity form the foundation. A young population, entrepreneurs, technology, the diaspora and creative industries build the capabilities. Together they produce the outcomes: higher growth, rising incomes, falling poverty. Foundations enable capabilities. Capabilities generate outcomes. Outcomes strengthen optimism — and the cycle compounds."
              className="text-sm sm:text-base md:text-lg font-normal leading-relaxed text-white/90"
              delay={0.15}
              stagger={0.01}
            />
          </div>
        </div>

        {/* Slogan Banner */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-6 py-2.5 rounded-full bg-white/15 border border-white/30 text-white font-bebas text-lg sm:text-2xl tracking-widest uppercase shadow-sm backdrop-blur-xs"
          >
            <span>RISING INCOMES • FALLING POVERTY • A WIDER MIDDLE CLASS</span>
          </motion.div>
        </div>

        {/* The Authentic Funnel Artwork Centerpiece with Tiers & Pillars */}
        <div className="max-w-5xl mx-auto mb-16">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Left Labels: OUTCOMES | CAPABILITIES | FOUNDATIONS matching PDF Page 2 */}
            <div className="hidden md:flex md:col-span-3 flex-col justify-between h-[490px] py-6 text-right pr-8">
              {/* Level 1: OUTCOMES */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="pt-2"
              >
                <div
                  onClick={() => setSelectedTier(selectedTier === 'outcomes' ? null : 'outcomes')}
                  className="inline-flex flex-col items-end cursor-pointer group"
                >
                  <span className={`font-bebas text-3xl lg:text-4xl text-white tracking-wider leading-none transition-colors ${selectedTier === 'outcomes' ? 'text-yellow-300' : 'group-hover:text-yellow-200'}`}>
                    OUTCOMES
                  </span>
                  <div className={`w-full h-0.5 mt-1 transition-all ${selectedTier === 'outcomes' ? 'bg-yellow-300 h-1' : 'bg-white/50 group-hover:bg-white'}`} />
                </div>
              </motion.div>

              {/* Level 2: CAPABILITIES */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="my-auto"
              >
                <div
                  onClick={() => setSelectedTier(selectedTier === 'capabilities' ? null : 'capabilities')}
                  className="inline-flex flex-col items-end cursor-pointer group"
                >
                  <span className={`font-bebas text-3xl lg:text-4xl text-white tracking-wider leading-none transition-colors ${selectedTier === 'capabilities' ? 'text-yellow-300' : 'group-hover:text-yellow-200'}`}>
                    CAPABILITIES
                  </span>
                  <div className={`w-full h-0.5 mt-1 transition-all ${selectedTier === 'capabilities' ? 'bg-yellow-300 h-1' : 'bg-white/50 group-hover:bg-white'}`} />
                </div>
              </motion.div>

              {/* Level 3: FOUNDATIONS */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="pb-6"
              >
                <div
                  onClick={() => setSelectedTier(selectedTier === 'foundations' ? null : 'foundations')}
                  className="inline-flex flex-col items-end cursor-pointer group"
                >
                  <span className={`font-bebas text-3xl lg:text-4xl text-white tracking-wider leading-none transition-colors ${selectedTier === 'foundations' ? 'text-yellow-300' : 'group-hover:text-yellow-200'}`}>
                    FOUNDATIONS
                  </span>
                  <div className={`w-full h-0.5 mt-1 transition-all ${selectedTier === 'foundations' ? 'bg-yellow-300 h-1' : 'bg-white/50 group-hover:bg-white'}`} />
                </div>
              </motion.div>
            </div>

            {/* Center: Authentic Funnel Artwork with Live Animated Tea Leaves Simulation */}
            <div className="col-span-1 md:col-span-6 flex flex-col justify-center items-center">
              {/* Mobile Badges */}
              <div className="flex md:hidden flex-wrap items-center justify-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#E01A8A] font-extrabold text-[11px] uppercase shadow-sm">
                  <span className="w-2 h-2 rounded-full border border-[#E01A8A]" />
                  OUTCOMES
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#E01A8A] font-extrabold text-[11px] uppercase shadow-sm">
                  <span className="w-2 h-2 rounded-full border border-[#E01A8A]" />
                  CAPABILITIES
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#E01A8A] font-extrabold text-[11px] uppercase shadow-sm">
                  <span className="w-2 h-2 rounded-full border border-[#E01A8A]" />
                  FOUNDATIONS
                </span>
              </div>

              {/* Live Animated Tea Leaves Simulation within Authentic Book Artwork */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full relative flex flex-col items-center justify-center py-2 select-none"
              >
                <TeaLeavesSimulation
                  onOpenZoom={() => setIsZoomed(true)}
                  selectedTier={selectedTier}
                  onSelectTier={setSelectedTier}
                />

                {/* Subtitle Caption */}
                <div className="mt-3 flex items-center gap-2 text-white/80 text-xs sm:text-[13px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
                  <span>The Funnel of Optimism · Authentic Book Framework</span>
                  <button
                    onClick={() => setIsZoomed(true)}
                    className="ml-1 text-white underline hover:text-yellow-200 cursor-pointer text-xs font-semibold"
                  >
                    View Fullscreen
                  </button>
                </div>
              </motion.div>

              {/* Mobile Chapter Summary */}
              <div className="flex md:hidden flex-col items-center text-center gap-2.5 mt-4 text-xs font-bebas tracking-wider text-white">
                <div className="bg-white/10 rounded-xl px-4 py-2 w-full max-w-sm">
                  <span className="text-white/70 block text-[9px] font-sans font-bold uppercase tracking-widest mb-0.5">Outcomes</span>
                  <span className="text-sm">OPTIMISM INDEX · GROWTH AND PROSPERITY</span>
                </div>
                <div className="bg-white/10 rounded-xl px-4 py-2 w-full max-w-sm">
                  <span className="text-white/70 block text-[9px] font-sans font-bold uppercase tracking-widest mb-0.5">Capabilities</span>
                  <span className="text-sm">CREATIVE CITIES · INNOVATION &amp; TECH · DIASPORA · ENTREPRENEURSHIP · YOUTH</span>
                </div>
                <div className="bg-white/10 rounded-xl px-4 py-2 w-full max-w-sm">
                  <span className="text-white/70 block text-[9px] font-sans font-bold uppercase tracking-widest mb-0.5">Foundations</span>
                  <span className="text-sm">PEACE · GOVERNANCE · SOLIDARITY</span>
                </div>
              </div>
            </div>

            {/* Right Pillars matching reference list */}
            <div className="hidden md:flex md:col-span-3 flex-col justify-between h-[490px] py-4 text-left pl-6">
              {/* Outcomes list */}
              <div className="pt-2 space-y-1">
                <div className="font-bebas text-xl sm:text-2xl tracking-wider text-white leading-tight">
                  <motion.div
                    whileHover={{ x: 6, scale: 1.04, color: '#FEF08A' }}
                    className="transition-colors cursor-pointer inline-block"
                  >
                    OPTIMISM INDEX
                  </motion.div>
                  <br />
                  <motion.div
                    whileHover={{ x: 6, scale: 1.04, color: '#FEF08A' }}
                    className="transition-colors cursor-pointer inline-block"
                  >
                    GROWTH AND PROSPERITY
                  </motion.div>
                </div>
              </div>

              {/* Capabilities list */}
              <div className="my-auto space-y-1">
                <div className="font-bebas text-xl sm:text-2xl tracking-wider text-white leading-tight space-y-0.5">
                  {['CREATIVE CITIES', 'INNOVATION & TECH', 'DIASPORA & ICT', 'ENTREPRENEURSHIP', 'YOUTH'].map(
                    (item) => (
                      <div key={item}>
                        <motion.div
                          whileHover={{ x: 6, scale: 1.04, color: '#FEF08A' }}
                          className="transition-colors cursor-pointer inline-block"
                        >
                          {item}
                        </motion.div>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Foundations list */}
              <div className="pb-6 space-y-1">
                <div className="font-bebas text-xl sm:text-2xl tracking-wider text-white leading-tight space-y-0.5">
                  {['PEACE', 'GOVERNANCE', 'SOLIDARITY'].map((item) => (
                    <div key={item}>
                      <motion.div
                        whileHover={{ x: 6, scale: 1.04, color: '#FEF08A' }}
                        className="transition-colors cursor-pointer inline-block"
                      >
                        {item}
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Structured Columns at Bottom matching PDF Page 2 */}
        <div className="border-t border-white/30 pt-10 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/25">
            {tiers.map((tier, idx) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setSelectedTier(selectedTier === tier.id ? null : tier.id)}
                className={`py-4 md:py-0 px-4 sm:px-8 cursor-pointer transition-all ${
                  selectedTier === tier.id ? 'bg-white/10 rounded-2xl' : 'hover:bg-white/5'
                }`}
              >
                <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wider mb-2 leading-tight flex items-center justify-between">
                  <span>{tier.title}</span>
                  {selectedTier === tier.id && (
                    <CheckCircle2 size={18} className="text-yellow-300" />
                  )}
                </h3>
                <p className="text-xs sm:text-sm text-white/95 leading-relaxed font-normal mb-3">
                  {tier.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {tier.chapters.map((ch) => (
                    <span
                      key={ch}
                      className="text-[10px] font-semibold bg-white/20 text-white px-2.5 py-0.5 rounded-full"
                    >
                      {ch}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Full-Screen Funnel Poster Inspection */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] bg-[#E01A8A] rounded-3xl p-3 sm:p-5 shadow-2xl border-2 border-white/30"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <img
                src={funnelImg}
                alt="The Funnel of Optimism High-Resolution Poster"
                className="max-h-[82vh] w-auto mx-auto object-contain rounded-2xl shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="text-center mt-3 text-xs sm:text-sm font-bold uppercase tracking-widest text-white/90">
                The Funnel of Optimism · Authentic Book Illustration
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
