import React from 'react';
import { motion } from 'motion/react';
import birdImg from '../assets/images/bird.png';
import girlImg from '../assets/images/girl.svg';

export const EvidenceSection: React.FC = () => {
  return (
    <section id="evidence" className="pt-16 sm:pt-20 bg-[#FFFDF9] border-t border-[#F0EBE1] overflow-hidden">
      
      {/* 1. Header on Cream Background matching image.png */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-10 sm:mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          
          {/* Left: Cyan Tag + Purple Display Heading */}
          <div className="text-left space-y-2">
            <span className="block text-xs sm:text-sm font-extrabold tracking-widest text-[#0EA5E9] uppercase">
              THE EVIDENCE
            </span>
            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl lg:text-[82px] text-[#4A154B] leading-[0.92] tracking-tight">
              A FEW CHARTS THE
              <br />
              HEADLINES LEAVE OUT.
            </h2>
          </div>

          {/* Right: Subtitle paragraph matching image.png */}
          <div className="md:max-w-xs lg:max-w-sm text-left md:text-left pb-2">
            <p className="text-sm sm:text-base md:text-[17px] text-[#334155] leading-relaxed font-normal">
              Three small proof points, pulled straight from the book&apos;s indices — peace, poverty and growth.
            </p>
          </div>

        </div>
      </div>

      {/* 2. Full-Bleed Blue Horizon Band matching image.png */}
      <div className="relative bg-[#2563EB] pt-16 sm:pt-24 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto relative">
          
          {/* 3 Evidence Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-8 items-stretch relative">
            
            {/* =========================================================================
                CARD 1: MORE PEACEFUL THAN YOU'D GUESS (Warm Camel/Ochre #C07428)
               ========================================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.8, 0.26, 0.99] }}
              className="relative rounded-[32px] p-7 sm:p-9 bg-[#C07428] text-white shadow-2xl flex flex-col justify-between z-10"
            >
              {/* Authentic Peace Dove (from uploaded bird.png) perched top-right over card across blue horizon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 14 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 0.8, 0.26, 0.99] }}
                className="absolute -top-16 sm:-top-20 md:-top-24 right-4 sm:right-8 w-36 sm:w-44 md:w-50 pointer-events-none z-30 select-none"
              >
                <img
                  src={birdImg}
                  alt="Authentic Peace Dove with Olive Branch"
                  className="w-full h-auto object-contain drop-shadow-md"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <div>
                {/* Title matching image.png */}
                <h3 className="font-bebas text-3xl sm:text-4xl lg:text-[44px] text-white tracking-wide leading-[0.92] mb-2">
                  MORE PEACEFUL THAN
                  <br />
                  YOU&apos;D GUESS
                </h3>

                {/* Subtitle: 2020 Global Peace Index rank */}
                <p className="text-xs sm:text-[13px] text-amber-100/90 font-normal leading-snug mb-12">
                  2020 Global Peace Index rank
                  <br />
                  (lower = more peaceful)
                </p>

                {/* Horizontal Axis Chart with corrected country ranks */}
                <div className="py-6 my-2">
                  <div className="relative pt-6 pb-6">
                    {/* Main Axis Line */}
                    <div className="w-full h-0.5 bg-white/40 relative">
                      
                      {/* Left Dot (Hot Pink): Mauritius - #24 (Top ranked in Africa) */}
                      <div className="absolute left-[8%] -top-1.5 flex flex-col items-center">
                        <div className="text-[11px] font-semibold text-white whitespace-nowrap -top-5 absolute">
                          Mauritius - #24
                        </div>
                        <div className="w-3.5 h-3.5 rounded-full bg-[#EC4899] ring-2 ring-white/60 shadow-xs" />
                      </div>

                      {/* Middle Indicator (Cyan Dot): #46 - Morocco */}
                      <div className="absolute left-[38%] -top-1.5 flex flex-col items-center">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#06B6D4] ring-2 ring-white/60 shadow-xs" />
                        <div className="text-[11px] font-semibold text-cyan-100 whitespace-nowrap top-4 absolute">
                          #46 - Morocco
                        </div>
                      </div>

                      {/* Right Dot (Yellow): South Sudan - #160 (Least peaceful benchmark) */}
                      <div className="absolute right-[8%] -top-1.5 flex flex-col items-center">
                        <div className="text-[11px] font-semibold text-white whitespace-nowrap -top-5 absolute">
                          South Sudan - #160
                        </div>
                        <div className="w-3.5 h-3.5 rounded-full bg-[#FACC15] ring-2 ring-white/60 shadow-xs" />
                      </div>
                    </div>

                    {/* Left & Right End Labels matching image.png */}
                    <div className="flex justify-between items-center text-[10.5px] text-amber-100/90 pt-8 font-medium">
                      <span>Most Peaceful</span>
                      <span>Least Peaceful</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Source Footnote matching image.png */}
              <div className="pt-4 border-t border-white/20 text-[10.5px] text-amber-100/80 mt-6">
                Source: Global Peace Index (2020) cited in <em>Optimistic Growth</em>
              </div>
            </motion.div>

            {/* =========================================================================
                CARD 2: POVERTY IN FREEFALL — MOROCCO (Olive Green #9A9318)
               ========================================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.8, 0.26, 0.99] }}
              className="relative rounded-[32px] p-7 sm:p-9 bg-[#9A9318] text-white shadow-2xl flex flex-col justify-between z-20"
            >
              {/* Crisp SVG Leaping Figure (enlarged, bridging Card 2 and Card 3) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 14 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 0.8, 0.26, 0.99] }}
                className="absolute -top-28 sm:-top-36 md:-top-44 lg:-top-52 xl:-top-56 -right-6 sm:-right-8 lg:-right-14 xl:-right-16 w-64 sm:w-72 md:w-80 lg:w-[340px] xl:w-[370px] pointer-events-none z-30 select-none"
              >
                <img
                  src={girlImg}
                  alt="Celebrating Woman with Streamers - Leaping Figure"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] filter contrast-[1.1] brightness-[1.05]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <div>
                {/* Title matching image.png */}
                <h3 className="font-bebas text-3xl sm:text-4xl lg:text-[44px] text-white tracking-wide leading-[0.92] mb-2">
                  POVERTY IN
                  <br />
                  FREEFALL -
                  <br />
                  MOROCCO
                </h3>

                {/* Subtitle matching image.png */}
                <p className="text-xs sm:text-[13px] text-yellow-100/90 font-normal leading-snug mb-12">
                  Share of population below the international
                  <br />
                  poverty line
                </p>

                {/* Two Horizontal Capsule Bars with CORRECTED scale: 2001 (2.1%, long) -> 2020 (0.4%, collapsed) */}
                <div className="space-y-4 py-4">
                  {/* 2001 Bar: Cyan Capsule with 2.1% (High rate = Longer bar) */}
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-xs sm:text-sm font-semibold text-white w-12">2001</span>
                    <div className="flex-1 flex items-center">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '68%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-6 rounded-full bg-[#22D3EE] text-[#083344] font-bold text-[11px] px-3 flex items-center justify-end shadow-xs"
                      >
                        2.1%
                      </motion.div>
                    </div>
                  </div>

                  {/* 2020 Bar: Yellow/Chartreuse Capsule with 0.4% (Fallen rate = Shorter bar) */}
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-xs sm:text-sm font-semibold text-white w-12">2020</span>
                    <div className="flex-1 flex items-center">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '20%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.3 }}
                        className="h-6 rounded-full bg-[#D6E617] text-[#3F4305] font-bold text-[11px] px-2.5 flex items-center justify-center shadow-xs"
                      >
                        0.4%
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Source Footnote matching image.png */}
              <div className="pt-4 border-t border-white/20 text-[10.5px] text-yellow-100/80 mt-6">
                Source: IMF/World Bank indicators / Database
              </div>
            </motion.div>

            {/* =========================================================================
                CARD 3: GROWTH. AT TWO TO THREE TIMES THE PACE (Teal #14858B matching image.png)
               ========================================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 0.8, 0.26, 0.99] }}
              className="relative rounded-[32px] p-7 sm:p-9 bg-[#14858B] text-white shadow-2xl flex flex-col justify-between z-10"
            >
              <div>
                {/* Title matching uploaded image.png: GROWTH. AT TWO TO / THREE TIMES THE PACE */}
                <h3
                  className="font-bebas text-3xl sm:text-4xl lg:text-[44px] text-[#EFF5EA] tracking-wide leading-[0.92] mb-2"
                  aria-label="GROWTH. AT TWO TO THREE TIMES THE PACE"
                >
                  <span className="inline-flex items-center" aria-hidden="true">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-[0.76em] h-[0.76em] inline-block shrink-0 mr-1 text-[#EFF5EA] fill-none stroke-current"
                      style={{ strokeWidth: 8.5, strokeLinecap: 'butt', strokeLinejoin: 'miter' }}
                    >
                      <path d="M 83 21 A 44 44 0 1 0 94 50 L 50 50" />
                    </svg>
                    <span>ROWTH. AT TWO TO</span>
                  </span>
                  <br />
                  <span>THREE TIMES THE PACE</span>
                </h3>

                {/* Subtitle matching image.png */}
                <p className="text-xs sm:text-[13px] text-teal-100/90 font-normal leading-snug mb-8">
                  Real GDP growth, 2024 (%)
                </p>

                {/* Vertical Bar Chart with CORRECTED IMF benchmarks verifying "two to three times the pace" */}
                <div className="pt-2 pb-2">
                  <div className="flex items-end justify-between h-44 gap-1.5 sm:gap-2 pb-2">
                    
                    {/* Bar 1: Morocco / Top performers (7.8%, Yellow #FACC15) */}
                    <div className="flex-1 flex flex-col items-center h-full justify-end">
                      <span className="text-[11px] font-bold text-white font-mono mb-1">
                        7.8
                      </span>
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '96%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="w-full max-w-[28px] rounded-t-sm bg-[#FACC15] shadow-xs"
                      />
                      <span className="text-[9.5px] sm:text-[10px] font-semibold text-teal-100 mt-2 text-center truncate w-full">
                        Morocco
                      </span>
                    </div>

                    {/* Bar 2: US avg. (2.6%, Plum #4A154B) */}
                    <div className="flex-1 flex flex-col items-center h-full justify-end">
                      <span className="text-[11px] font-bold text-white font-mono mb-1">
                        2.6
                      </span>
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '33%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full max-w-[28px] rounded-t-sm bg-[#4A154B] shadow-xs"
                      />
                      <span className="text-[9.5px] sm:text-[10px] font-semibold text-teal-100 mt-2 text-center truncate w-full">
                        US avg.
                      </span>
                    </div>

                    {/* Bar 3: OECD avg. (1.7%, Lime Green #84CC16) */}
                    <div className="flex-1 flex flex-col items-center h-full justify-end">
                      <span className="text-[11px] font-bold text-white font-mono mb-1">
                        1.7
                      </span>
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '22%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                        className="w-full max-w-[28px] rounded-t-sm bg-[#84CC16] shadow-xs"
                      />
                      <span className="text-[9.5px] sm:text-[10px] font-semibold text-teal-100 mt-2 text-center truncate w-full">
                        OECD avg.
                      </span>
                    </div>

                    {/* Bar 4: China (4.8%, Red #DC2626) */}
                    <div className="flex-1 flex flex-col items-center h-full justify-end">
                      <span className="text-[11px] font-bold text-white font-mono mb-1">
                        4.8
                      </span>
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '60%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="w-full max-w-[28px] rounded-t-sm bg-[#DC2626] shadow-xs"
                      />
                      <span className="text-[9.5px] sm:text-[10px] font-semibold text-teal-100 mt-2 text-center truncate w-full">
                        China
                      </span>
                    </div>

                    {/* Bar 5: India (6.8%, Dark Navy #1E293B) */}
                    <div className="flex-1 flex flex-col items-center h-full justify-end">
                      <span className="text-[11px] font-bold text-white font-mono mb-1">
                        6.8
                      </span>
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        className="w-full max-w-[28px] rounded-t-sm bg-[#1E293B] shadow-xs"
                      />
                      <span className="text-[9.5px] sm:text-[10px] font-semibold text-teal-100 mt-2 text-center truncate w-full">
                        India
                      </span>
                    </div>

                    {/* Bar 6: Africa avg. (4.1%, Purple #7E22CE) */}
                    <div className="flex-1 flex flex-col items-center h-full justify-end">
                      <span className="text-[11px] font-bold text-white font-mono mb-1">
                        4.1
                      </span>
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: '52%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full max-w-[28px] rounded-t-sm bg-[#7E22CE] shadow-xs"
                      />
                      <span className="text-[9.5px] sm:text-[10px] font-semibold text-teal-100 mt-2 text-center truncate w-full">
                        Africa avg.
                      </span>
                    </div>

                  </div>
                </div>
              </div>

              {/* Source Footnote matching image.png */}
              <div className="pt-4 border-t border-white/20 text-[10.5px] text-teal-100/80 mt-6">
                Source: IMF/World Bank projections cited in <em>Optimistic Growth</em>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

    </section>
  );
};
