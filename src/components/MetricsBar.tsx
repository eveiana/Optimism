import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HERO_METRICS } from '../data/bookData';
import { CountUp, DualCountUp } from './CountUp';
import { Info, X } from 'lucide-react';

export const MetricsBar: React.FC = () => {
  const [activeMetricId, setActiveMetricId] = useState<string | null>(null);

  // Detailed evidence for interactive expansion
  const metricInsights: Record<string, { title: string; detail: string; source: string }> = {
    remittances: {
      title: 'Solidarity Economy & Remittance Power',
      detail:
        'In 2023, African diaspora remittances reached $104 billion, far exceeding Foreign Direct Investment ($48B) and Official Development Assistance ($53B) combined. This direct citizen-to-citizen funding drives grassroots housing, education, and healthcare across the continent.',
      source: 'World Bank Remittance Inflows & KNOMAD Report',
    },
    demographics: {
      title: 'The World’s Youngest Continent',
      detail:
        'Over 60% of Africa’s population is under age 25, and over 70% is under 30. While aging demographics slow down Western and East Asian workforces, Africa will account for 40% of all global youth by 2030, representing the future of the global labor and consumer market.',
      source: 'United Nations Department of Economic and Social Affairs (UNDESA)',
    },
    entrepreneurship: {
      title: 'Highest Entrepreneurial Intent Globally',
      detail:
        'Over 75% of young Africans surveyed intend to launch their own enterprise within 5 years. Africa holds the highest early-stage entrepreneurial activity rate in the world (20%+), driven by leapfrog opportunities in fintech, agritech, and renewable energy.',
      source: 'Global Entrepreneurship Monitor (GEM) & African Youth Survey',
    },
    governance: {
      title: 'Decade-Long Governance Improvement',
      detail:
        '14 of the top 20 ranked nations on the Mo Ibrahim Index of African Governance improved their institutional performance over the past decade, demonstrating measurable structural progress in rule of law, anti-corruption, and digital public services.',
      source: 'Ibrahim Index of African Governance (IIAG)',
    },
  };

  const renderMetricNumber = (item: (typeof HERO_METRICS)[0]) => {
    switch (item.id) {
      case 'remittances':
        return <CountUp prefix="$" end={104} suffix="B" duration={1800} />;
      case 'demographics':
        return <DualCountUp end1={60} end2={70} separator="–" suffix="%" duration={1800} />;
      case 'entrepreneurship':
        return <CountUp end={75} suffix="%+" duration={1800} />;
      case 'governance':
        return <CountUp end={14} suffix="/20" duration={1800} />;
      default:
        return <span>{item.value}</span>;
    }
  };

  return (
    <section className="bg-[#00BFA5] text-white py-8 sm:py-10 border-y border-[#009688]/30 shadow-inner relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Interactive Indicator header */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/20 text-xs font-semibold text-emerald-950/80">
          <span className="flex items-center gap-1.5 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>Interactive Data Indicators — Click any metric to reveal source facts</span>
          </span>
          <span className="hidden sm:inline-block text-[11px] opacity-75">
            Hover to re-animate numbers
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/30">
          {HERO_METRICS.map((item, index) => {
            const isSelected = activeMetricId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveMetricId(isSelected ? null : item.id)}
                className={`flex flex-col justify-start px-3 sm:px-6 cursor-pointer group transition-colors duration-200 rounded-xl p-3 ${
                  isSelected ? 'bg-white/25 shadow-md ring-2 ring-white' : 'hover:bg-white/10'
                } ${index === 0 ? 'lg:pl-0' : ''} ${index === HERO_METRICS.length - 1 ? 'lg:pr-0' : ''}`}
              >
                <div className="font-bebas text-4xl sm:text-5xl lg:text-[54px] tracking-tight leading-none text-white drop-shadow-sm mb-2 flex items-baseline justify-between">
                  {renderMetricNumber(item)}
                  <Info
                    size={16}
                    className={`transition-all ${
                      isSelected ? 'opacity-100 text-white scale-110' : 'opacity-40 group-hover:opacity-100'
                    }`}
                  />
                </div>
                <p className="text-xs sm:text-sm font-medium text-emerald-950/90 leading-snug group-hover:text-emerald-950 transition-colors">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Expandable Insight Spotlight with Smooth Transition */}
        <AnimatePresence>
          {activeMetricId && metricInsights[activeMetricId] && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -12 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 p-5 sm:p-6 bg-emerald-950/90 text-white rounded-2xl border border-white/25 shadow-xl relative overflow-hidden"
            >
              <button
                onClick={() => setActiveMetricId(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white p-1 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer"
                aria-label="Close insight"
              >
                <X size={18} />
              </button>

              <div className="max-w-3xl pr-8 space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#A3E635]">
                  Deeper Dive · From Optimistic Africa
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {metricInsights[activeMetricId].title}
                </h4>
                <p className="text-sm sm:text-base text-emerald-100/95 leading-relaxed font-normal">
                  {metricInsights[activeMetricId].detail}
                </p>
                <div className="pt-2 text-xs text-emerald-300 font-medium">
                  Source: {metricInsights[activeMetricId].source}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
