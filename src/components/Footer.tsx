import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

interface FooterProps {
  onOpenGetBook?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGetBook }) => {
  return (
    <footer className="bg-[#4A154B] text-white pt-16 pb-12 border-t border-purple-900/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Main Footer Layout matching PDF Page 6 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-white/15">
          
          {/* Left Column: Brand, Tagline, Yellow CTA Button & Partner Logos */}
          <div className="md:col-span-8 space-y-6">
            
            {/* Title / Brand Name */}
            <div>
              <h2 className="font-bebas text-3xl sm:text-4xl lg:text-5xl text-white tracking-wider leading-none">
                OPTIMISTIC AFRICA
              </h2>
              <p className="text-xs sm:text-sm text-purple-200/90 mt-2 max-w-xl leading-relaxed">
                A book by Dr Anand Kulkarni and supported by Africa No Filter. Foreword by Moky Makura.
              </p>
            </div>

            {/* GET THE BOOK Yellow Pill Button matching PDF Page 6 */}
            <div>
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenGetBook}
                className="px-6 py-2.5 rounded-full bg-[#FACC15] hover:bg-[#FDE047] text-[#1E1B4B] font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center justify-center min-h-[42px]"
              >
                GET THE BOOK
              </motion.button>
            </div>

            {/* Partner Logos matching PDF Page 6 bottom: Centre for Optimism & Africa No Filter */}
            <div className="pt-4 flex flex-wrap items-center gap-6 sm:gap-8">
              {/* Centre for Optimism Logo Badge */}
              <a
                href="https://www.centreforoptimism.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-2 rounded-xl transition-colors group"
                title="The Centre for Optimism"
              >
                <svg viewBox="0 0 100 100" className="w-7 h-7 shrink-0">
                  <circle cx="50" cy="50" r="18" fill="#F97316" />
                  {[...Array(16)].map((_, i) => (
                    <polygon
                      key={i}
                      points="48,16 52,16 50,4"
                      fill="#F97316"
                      transform={`rotate(${(i * 360) / 16} 50 50)`}
                    />
                  ))}
                </svg>
                <div className="text-left">
                  <span className="block font-bebas text-sm text-[#FB923C] tracking-wider leading-none group-hover:text-amber-300 transition-colors">
                    OPTIMISM
                  </span>
                  <span className="block text-[8px] font-bold text-white/80 tracking-widest uppercase">
                    THE CENTRE FOR OPTIMISM
                  </span>
                </div>
              </a>

              {/* Africa No Filter Wordmark Badge */}
              <a
                href="https://africanofilter.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 px-4 py-2 rounded-xl transition-colors group"
                title="Africa No Filter"
              >
                <div className="w-5 h-5 rounded-full bg-[#E01A8A] flex items-center justify-center text-white font-black text-[10px]">
                  #
                </div>
                <div className="text-left">
                  <span className="block font-bebas text-sm text-white tracking-wider leading-none group-hover:text-[#F472B6] transition-colors">
                    AFRICA NO FILTER
                  </span>
                  <span className="block text-[8px] font-bold text-purple-200/70 tracking-widest uppercase">
                    NARRATIVE COLLABORATIVE
                  </span>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Clean Navigation List matching PDF Page 6 */}
          <div className="md:col-span-4 space-y-3 md:text-right">
            <span className="text-[11px] font-bold uppercase tracking-widest text-purple-300 block">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs sm:text-sm font-medium text-purple-100/90">
              <li>
                <a
                  href="#why-exists"
                  className="hover:text-[#FACC15] transition-colors inline-block py-0.5"
                >
                  About the Book
                </a>
              </li>
              <li>
                <a
                  href="#funnel"
                  className="hover:text-[#FACC15] transition-colors inline-block py-0.5"
                >
                  The Funnel
                </a>
              </li>
              <li>
                <a
                  href="#chapters"
                  className="hover:text-[#FACC15] transition-colors inline-block py-0.5"
                >
                  Chapters
                </a>
              </li>
              <li>
                <a
                  href="#evidence"
                  className="hover:text-[#FACC15] transition-colors inline-block py-0.5"
                >
                  The Evidence
                </a>
              </li>
              <li>
                <a
                  href="#quiz"
                  className="hover:text-[#FACC15] transition-colors inline-block py-0.5"
                >
                  Take the Quiz
                </a>
              </li>
              <li>
                <a
                  href="#author"
                  className="hover:text-[#FACC15] transition-colors inline-block py-0.5"
                >
                  Meet the Author
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright notice matching PDF Page 6 */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300/80">
          <div>
            © 2024 Optimistic Africa. All rights reserved. Supported by Africa No Filter and The Centre for Optimism.
          </div>
          <div className="flex items-center gap-4 text-purple-200">
            <a
              href="https://africanofilter.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline inline-flex items-center gap-1"
            >
              <span>Africa No Filter</span>
              <ExternalLink size={11} />
            </a>
            <span>·</span>
            <a
              href="https://www.centreforoptimism.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline inline-flex items-center gap-1"
            >
              <span>Centre for Optimism</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
