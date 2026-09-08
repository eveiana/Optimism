import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { WhyExists } from './components/WhyExists';
import { FunnelSection } from './components/FunnelSection';
import { ChaptersSection } from './components/ChaptersSection';
import { EvidenceSection } from './components/EvidenceSection';
import { QuizSection } from './components/QuizSection';
import { AuthorSection } from './components/AuthorSection';
import { CentreForOptimismSection } from './components/CentreForOptimismSection';
import { GetTheBookSection } from './components/GetTheBookSection';
import { Footer } from './components/Footer';
import { BookModal } from './components/BookModal';
import { ArrowUp } from 'lucide-react';

/**
 * Editorial Rise & Reveal matching notwaiting.africa
 * Smooth translate(0, 24px) -> translate(0, 0) with signature cubic-bezier(.22, .8, .26, .99)
 */
const editorialRise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: {
    duration: 0.75,
    delay,
    ease: [0.22, 0.8, 0.26, 0.99] as const,
  },
});

export default function App() {
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Global Page Scroll Progress with smooth spring physics
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Track scroll distance to show back to top
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToQuiz = () => {
    const quizEl = document.getElementById('quiz');
    if (quizEl) {
      quizEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenGetBook = () => {
    setIsBookModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#1E293B] font-body selection:bg-[#E01A8A] selection:text-white overflow-x-hidden relative">
      
      {/* Top Global Scroll Progress Bar with vibrant gradient */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D9531E] via-[#00BFA5] to-[#E01A8A] origin-left z-50 shadow-xs"
        style={{ scaleX }}
      />

      {/* Top Navigation Bar */}
      <Navbar onOpenGetBook={handleOpenGetBook} />

      {/* Main Content matching PDF Structure with Smooth Editorial Transitions */}
      <main className="flex-1">
        {/* 1. Hero Section with Faceted Africa Map & Floating Stat Badges */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 0.8, 0.26, 0.99] }}
        >
          <Hero
            onStartQuiz={scrollToQuiz}
            onOpenGetBook={handleOpenGetBook}
          />
        </motion.div>

        {/* 2. Full-width Vibrant Teal Metrics Bar ($104B | 60-70% | 75%+ | 14/20) */}
        <motion.div {...editorialRise()}>
          <MetricsBar />
        </motion.div>

        {/* 3. Why This Book Exists Section */}
        <motion.div {...editorialRise()}>
          <WhyExists />
        </motion.div>

        {/* 4. The Funnel of Optimism Framework (Sieve & Enamel Mug + 3 Static Cards) */}
        <motion.div {...editorialRise()}>
          <FunnelSection />
        </motion.div>

        {/* 5. Eleven Chapters. One Argument. (11 Stacked Chapters, Ch 03 Expanded with Money Bag) */}
        <motion.div {...editorialRise()}>
          <ChaptersSection />
        </motion.div>

        {/* 6. The Evidence: Three Data Visualizations (Peace Rankings, Morocco Poverty Leaping Figures, Real GDP Growth Chart) */}
        <motion.div {...editorialRise()}>
          <EvidenceSection />
        </motion.div>

        {/* 7. Exercise Your Optimism Muscle (Factfulness Quiz & Interactive Questions) - PDF Page 5 Top */}
        <motion.div {...editorialRise()}>
          <QuizSection onOpenGetBook={handleOpenGetBook} />
        </motion.div>

        {/* 8. Get The Book (Read the Evidence Behind the Optimism) - PDF Page 5 Middle */}
        <motion.div {...editorialRise()}>
          <GetTheBookSection />
        </motion.div>

        {/* 9. The Author: Dr Anand Kulkarni - PDF Page 5 Bottom & Page 6 Top */}
        <motion.div {...editorialRise()}>
          <AuthorSection />
        </motion.div>

        {/* 10. The Centre for Optimism - PDF Page 6 Middle */}
        <motion.div {...editorialRise()}>
          <CentreForOptimismSection />
        </motion.div>
      </main>

      {/* Footer matching PDF Page 6 */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 0.8, 0.26, 0.99] }}
      >
        <Footer onOpenGetBook={handleOpenGetBook} />
      </motion.footer>

      {/* Floating Interactive Scroll-To-Top Button with Smooth Motion */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 0.8, 0.26, 0.99] }}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
          >
            <motion.button
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.94 }}
              onClick={scrollToTop}
              className="p-3.5 rounded-full bg-[#126B3E] hover:bg-[#0E5431] text-white shadow-xl shadow-emerald-950/20 flex items-center justify-center cursor-pointer transition-colors border border-emerald-400/30"
              title="Scroll back to top"
            >
              <ArrowUp size={20} strokeWidth={2.4} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pre-order & Sample Chapter Modal */}
      <BookModal
        isOpen={isBookModalOpen}
        onClose={() => setIsBookModalOpen(false)}
      />
    </div>
  );
}
