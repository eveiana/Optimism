import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Globe, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="py-20 sm:py-28 bg-[#FBF8F2] border-t border-[#EAE3D2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl mb-12 space-y-3"
        >
          <div className="flex items-center gap-2">
            <HeartHandshake size={18} className="text-[#C86414]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#C86414] uppercase">
              INSTITUTIONAL FOUNDATIONS &amp; PARTNERS
            </span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl text-[#4A154B] leading-[0.92] tracking-tight">
            SUPPORTED BY AFRICA NO FILTER &amp;
            <br />
            THE CENTRE FOR OPTIMISM IN AUSTRALIA.
          </h2>
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            Optimistic Africa brings together pioneering research on narrative change from Africa and evidence-based optimism from Australia. Discover the two foundational institutions behind this initiative.
          </p>
        </motion.div>

        {/* Two Partner Cards with Staggered Transition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Africa No Filter (ANF) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 0.8, 0.26, 0.99] }}
            whileHover={{
              y: -8,
              scale: 1.012,
              boxShadow: '0 28px 56px -16px rgba(200, 100, 20, 0.18), 0 0 0 1px rgba(200, 100, 20, 0.1)',
            }}
            className="rounded-3xl p-8 sm:p-10 bg-white border border-[#E2D8C9] hover:border-[#C86414]/30 shadow-sm transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-5">
              
              {/* Partner Badge & Location */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-bold text-xs uppercase tracking-wider">
                  Co-Founding Partner
                </span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Globe size={13} className="text-amber-700" />
                  <span>Pan-African Collaborative</span>
                </span>
              </div>

              <div>
                <h3 className="font-bebas text-3xl sm:text-4xl text-[#C86414] tracking-tight">
                  AFRICA NO FILTER (ANF)
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                  Executive Director: Moky Makura (Co-Author)
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                Africa No Filter is a donor collaborative and narrative-change organization working across the continent to shift stereotypical, deficit-based stories of poverty, conflict, and corruption toward nuanced accounts of African agency, innovation, and progress.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">▪</span>
                  <span><strong>Research Leadership:</strong> Produced the groundbreaking study on the $4.2B sovereign credit risk premium caused by biased global headlines.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">▪</span>
                  <span><strong>Storyteller Ecosystem:</strong> Grants and fellowships supporting hundreds of African investigative journalists, artists, and researchers.</span>
                </div>
              </div>
            </div>

            {/* Link Back to ANF */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="https://africanofilter.org"
                target="_blank"
                rel="noopener noreferrer"
                id="link-africa-no-filter"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#C86414] hover:bg-[#A9510C] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-colors inline-flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>Visit Africa No Filter (ANF)</span>
                <ExternalLink size={15} />
              </motion.a>
            </div>
          </motion.div>

          {/* Card 2: Centre for Optimism / Australian Institute of Optimism */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.8, 0.26, 0.99] }}
            whileHover={{
              y: -8,
              scale: 1.012,
              boxShadow: '0 28px 56px -16px rgba(14, 74, 110, 0.18), 0 0 0 1px rgba(14, 74, 110, 0.1)',
            }}
            className="rounded-3xl p-8 sm:p-10 bg-white border border-[#E2D8C9] hover:border-[#0284C7]/30 shadow-sm transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-5">
              
              {/* Partner Badge & Location */}
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-900 font-bold text-xs uppercase tracking-wider">
                  Co-Founding Partner
                </span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Globe size={13} className="text-blue-700" />
                  <span>Melbourne, Australia</span>
                </span>
              </div>

              <div>
                <h3 className="font-bebas text-3xl sm:text-4xl text-[#1565C0] tracking-tight">
                  THE CENTRE FOR OPTIMISM (AUSTRALIA)
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                  Senior Fellow &amp; Economist: Dr Anand Kulkarni (Co-Author)
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                The Centre for Optimism (also known as the Australian Institute of Optimism) is a globally recognized research center and leadership institute advancing realistic, evidence-based optimism, forward-thinking policy, and human flourishing.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">▪</span>
                  <span><strong>Evidence-Based Framework:</strong> Spearheaded the global methodology demonstrating how optimism functions as an economic catalyst rather than mere wishful thinking.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">▪</span>
                  <span><strong>Global Thought Leadership:</strong> Convening international roundtables and publishing economic indices on resilience, youth potential, and institutional trust.</span>
                </div>
              </div>
            </div>

            {/* Link Back to Centre for Optimism */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="https://www.centreforoptimism.com"
                target="_blank"
                rel="noopener noreferrer"
                id="link-centre-for-optimism"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#1565C0] hover:bg-[#0D47A1] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-colors inline-flex items-center justify-center gap-2 min-h-[44px]"
              >
                <span>Visit The Centre for Optimism</span>
                <ExternalLink size={15} />
              </motion.a>
            </div>
          </motion.div>

        </div>

        {/* Joint Institutional Commitment Note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
          className="mt-10 p-6 rounded-2xl bg-white border border-[#E2D8C9] text-center max-w-3xl mx-auto text-xs sm:text-sm text-slate-600 leading-relaxed shadow-xs"
        >
          <p>
            This collaborative initiative bridges continental perspectives: coupling <strong>Africa No Filter&apos;s</strong> deep narrative intelligence across 54 African nations with <strong>The Centre for Optimism&apos;s</strong> proven indices and positive economic modeling in Australia.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
