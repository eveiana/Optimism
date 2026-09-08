import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CHAPTERS_DATA } from '../data/bookData';
import { Plus, Minus, Filter, ChevronDown } from 'lucide-react';
import { CountUp } from './CountUp';
import { AnimatedText } from './AnimatedText';
import { AnimatedParagraph } from './AnimatedParagraph';

export const ChaptersSection: React.FC = () => {
  // Chapter 03 is expanded by default
  const [expandedChapter, setExpandedChapter] = useState<string | null>('chapter-03');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'foundations' | 'capabilities' | 'outcomes'>('all');

  const toggleChapter = (id: string) => {
    setExpandedChapter((prev) => (prev === id ? null : id));
  };

  const filteredChapters = CHAPTERS_DATA.filter((ch) => {
    if (selectedCategory === 'all') return true;
    return ch.category === selectedCategory;
  });

  const renderAnimatedStat = (chapterId: string, valStr: string | undefined) => {
    if (!valStr) return null;

    if (chapterId === 'chapter-01') {
      return <CountUp prefix="#" end={28} duration={1400} />;
    }
    if (chapterId === 'chapter-02') {
      return <CountUp end={14} suffix="/20" duration={1400} />;
    }
    if (chapterId === 'chapter-03') {
      return <CountUp prefix="$" end={104} suffix="B" duration={1600} />;
    }
    if (chapterId === 'chapter-04') {
      return <CountUp end={700} suffix="+" duration={1600} />;
    }
    if (chapterId === 'chapter-05') {
      return <CountUp end={20} suffix="%+" duration={1400} />;
    }
    if (chapterId === 'chapter-06') {
      return <CountUp end={70} suffix="%" duration={1400} />;
    }
    if (chapterId === 'chapter-07') {
      return <CountUp end={70} suffix="%" duration={1400} />;
    }
    if (chapterId === 'chapter-08') {
      return <CountUp end={200} suffix="M+" duration={1600} />;
    }
    if (chapterId === 'chapter-09') {
      return <CountUp end={35} suffix=" Cities" duration={1400} />;
    }
    if (chapterId === 'chapter-10') {
      return <CountUp end={40} suffix="%" duration={1400} />;
    }
    if (chapterId === 'chapter-11') {
      return <CountUp end={69.87} decimals={2} duration={1600} />;
    }

    return <span>{valStr}</span>;
  };

  return (
    <section id="chapters" className="py-20 sm:py-28 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
          <div className="lg:col-span-7">
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-[#4A154B] leading-[0.92] tracking-tight">
              <AnimatedText text="ELEVEN CHAPTERS." className="block" />
              <AnimatedText text="ONE ARGUMENT." className="block" delay={0.2} />
            </h2>
          </div>

          <div className="lg:col-span-5 text-sm sm:text-base text-[#475569] leading-relaxed">
            <AnimatedParagraph
              text="Each chapter unpacks one layer of the Funnel of Optimism — grounded in international indices, comparative data and stories from across the continent."
              delay={0.2}
              stagger={0.012}
            />
          </div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-[#F0EBE1]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 flex items-center gap-1">
              <Filter size={13} /> Filter:
            </span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#4A154B] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All (11)
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory('foundations')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                selectedCategory === 'foundations'
                  ? 'bg-[#AE5128] text-white shadow-sm'
                  : 'bg-amber-100/70 text-amber-900 hover:bg-amber-200/80'
              }`}
            >
              Foundations (Ch 1–3)
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory('capabilities')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                selectedCategory === 'capabilities'
                  ? 'bg-[#CE9A2C] text-slate-900 shadow-sm'
                  : 'bg-yellow-100/80 text-yellow-950 hover:bg-yellow-200/80'
              }`}
            >
              Capabilities (Ch 4–9)
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory('outcomes')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                selectedCategory === 'outcomes'
                  ? 'bg-[#4A154B] text-white shadow-sm'
                  : 'bg-purple-100/70 text-purple-900 hover:bg-purple-200/80'
              }`}
            >
              Outcomes (Ch 10–11)
            </motion.button>
          </div>

          <div className="text-xs text-slate-500 font-medium hidden sm:block">
            Click any chapter to expand &amp; inspect live metrics
          </div>
        </div>

        {/* 11 Chapters Accordion Stack */}
        <div className="space-y-4">
          {filteredChapters.map((ch, index) => {
            const isExpanded = expandedChapter === ch.id;

            return (
              <motion.div
                key={ch.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: index * 0.03, ease: [0.22, 0.8, 0.26, 0.99] }}
                whileHover={
                  !isExpanded
                    ? {
                        y: -4,
                        boxShadow: '0 16px 32px -8px rgba(0,0,0,0.15)',
                      }
                    : undefined
                }
                id={`chapter-card-${ch.id}`}
                className="rounded-2xl sm:rounded-3xl transition-all duration-300 shadow-sm overflow-hidden"
                style={{
                  backgroundColor: ch.bgColor,
                  color: ch.textColor,
                }}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => toggleChapter(ch.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left p-6 sm:p-8 flex items-center justify-between cursor-pointer group select-none transition-opacity hover:opacity-95"
                >
                  <div className="space-y-1">
                    <span className="block text-xs sm:text-sm font-semibold tracking-wider opacity-85 uppercase">
                      {ch.number}
                    </span>
                    <h3 className="font-bebas text-3xl sm:text-4xl md:text-5xl tracking-normal leading-none flex items-center gap-2 transition-transform duration-200 group-hover:translate-x-1.5">
                      {ch.id === 'chapter-02' ? (
                        <span className="inline-flex items-center">
                          <span>G</span>
                          <span className="inline-block w-6 h-6 sm:w-8 sm:h-8 rounded-full border-[3px] border-[#F1C40F] mx-0.5" />
                          <span>VERNANCE</span>
                        </span>
                      ) : ch.id === 'chapter-09' ? (
                        <span className="inline-flex items-center">
                          <span>CREATIVE CITIES</span>
                        </span>
                      ) : ch.id === 'chapter-10' ? (
                        <span className="inline-flex items-center">
                          <span>GR</span>
                          <span className="inline-block w-6 h-6 sm:w-8 sm:h-8 rounded-full border-[3px] border-[#38BDF8] mx-0.5" />
                          <span>WTH &amp; PROSPERITY</span>
                        </span>
                      ) : ch.id === 'chapter-11' ? (
                        <span className="inline-flex items-center">
                          <span>THE </span>
                          <span className="inline-block w-6 h-6 sm:w-8 sm:h-8 rounded-full border-[3px] border-white mx-1" />
                          <span>PTIMISM INDEX</span>
                        </span>
                      ) : (
                        ch.title
                      )}
                    </h3>
                  </div>

                  {/* Toggle Icon (+ or -) with subtle rotation */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/10 group-hover:bg-black/20 transition-colors text-current shrink-0 ml-4"
                  >
                    {isExpanded ? (
                      <Minus size={24} strokeWidth={2.8} />
                    ) : (
                      <Plus size={24} strokeWidth={2.8} />
                    )}
                  </motion.div>
                </button>

                {/* Expanded Content Area with Butter Smooth Height Transition */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 sm:px-8 sm:pb-10 pt-2 border-t border-white/15">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                          
                          {/* Left: Chapter Details */}
                          <div className="lg:col-span-8 space-y-4">
                            {ch.badge && (
                              <span
                                className="inline-block px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-sm"
                                style={{
                                  backgroundColor: ch.badgeBg || '#D81B60',
                                  color: ch.badgeText || '#FFFFFF',
                                }}
                              >
                                {ch.badge}
                              </span>
                            )}

                            <p className="text-base sm:text-lg font-medium leading-relaxed opacity-95 max-w-2xl">
                              {ch.description}
                            </p>

                            <div className="pt-2 text-xs sm:text-sm opacity-80 leading-normal space-y-1.5 border-t border-white/15">
                              <p className="font-semibold text-white/95">
                                Core Takeaway: <span className="font-normal">{ch.details.takeaway}</span>
                              </p>
                              <div className="flex flex-wrap items-center gap-2 pt-1">
                                <span className="font-semibold">Benchmarked Indices:</span>
                                {ch.details.indices.map((idx, i) => (
                                  <span
                                    key={i}
                                    className="px-2.5 py-0.5 rounded-md bg-white/15 text-[11px] font-medium tracking-wide"
                                  >
                                    {idx}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Right: Key Metric with Live Animated CountUp */}
                          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-black/15 text-center transition-all hover:bg-black/20">
                            {ch.id === 'chapter-03' ? (
                              <div className="flex flex-col items-center">
                                {/* Money Bag Sketch matching PDF */}
                                <svg
                                  viewBox="0 0 100 100"
                                  className="w-24 h-24 text-white drop-shadow-md mb-2"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  {/* Ruffled Bag Top Opening */}
                                  <path d="M 36 22 Q 40 28 44 24 Q 50 18 56 24 Q 60 28 64 22 C 60 30, 40 30, 36 22 Z" fill="rgba(255,255,255,0.25)" strokeWidth="2.5" />
                                  {/* Tied Neck Rope & Bow */}
                                  <ellipse cx="50" cy="30" rx="14" ry="4" fill="#FFE4E6" stroke="#FFFFFF" strokeWidth="2.5" />
                                  <path d="M 46 32 Q 42 40 38 44" stroke="#FFFFFF" strokeWidth="2.5" />
                                  <path d="M 54 32 Q 58 40 62 44" stroke="#FFFFFF" strokeWidth="2.5" />
                                  {/* Plump Round Sack Body */}
                                  <path
                                    d="M 37 32 C 22 38, 14 56, 16 74 C 18 88, 32 94, 50 94 C 68 94, 82 88, 84 74 C 86 56, 78 38, 63 32 Z"
                                    fill="rgba(255,255,255,0.18)"
                                    stroke="#FFFFFF"
                                    strokeWidth="3"
                                  />
                                  {/* Prominent Dollar Symbol Center Badge */}
                                  <circle cx="50" cy="65" r="14" fill="#FFFFFF" fillOpacity="0.25" stroke="#FFFFFF" strokeWidth="2" />
                                  <text
                                    x="50"
                                    y="72"
                                    textAnchor="middle"
                                    fill="#FFFFFF"
                                    fontSize="22"
                                    fontWeight="bold"
                                    stroke="none"
                                    fontFamily="sans-serif"
                                  >
                                    $
                                  </text>
                                </svg>

                                <div className="font-bebas text-5xl sm:text-6xl tracking-tight leading-none text-white">
                                  {renderAnimatedStat(ch.id, ch.keyStat?.value)}
                                </div>
                                <div className="text-xs sm:text-sm font-semibold opacity-90 mt-1">
                                  {ch.keyStat?.label}
                                </div>
                                {ch.keyStat?.sublabel && (
                                  <div className="text-[11px] opacity-75 max-w-[220px] mt-1">
                                    {ch.keyStat.sublabel}
                                  </div>
                                )}
                              </div>
                            ) : (
                              <div className="flex flex-col items-center">
                                <div className="font-bebas text-5xl sm:text-6xl tracking-tight leading-none">
                                  {renderAnimatedStat(ch.id, ch.keyStat?.value)}
                                </div>
                                <div className="text-xs sm:text-sm font-semibold opacity-90 mt-1">
                                  {ch.keyStat?.label}
                                </div>
                                {ch.keyStat?.sublabel && (
                                  <div className="text-[11px] opacity-75 max-w-[220px] mt-1">
                                    {ch.keyStat.sublabel}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
