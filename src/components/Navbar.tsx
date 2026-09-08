import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenGetBook: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenGetBook }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exact navigation links matching PDF Page 1
  const navLinks = [
    { label: 'About the book', href: '#why-exists', id: 'nav-about-book' },
    { label: 'The Funnel', href: '#funnel', id: 'nav-funnel' },
    { label: 'Chapters', href: '#chapters', id: 'nav-chapters' },
    { label: 'The Evidence', href: '#evidence', id: 'nav-evidence' },
    { label: 'Take the Quiz', href: '#quiz', id: 'nav-quiz' },
    { label: 'Meet the Author', href: '#author', id: 'nav-author' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#E2D8C9] shadow-sm'
          : 'bg-[#FFFDF9] border-b border-[#F0EBE1]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation Links matching PDF Page 1 */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13.5px] xl:text-[14.5px] font-medium text-[#475569]">
          {navLinks.map((link) => (
            <motion.a
              key={link.id}
              href={link.href}
              id={link.id}
              whileHover={{ y: -1 }}
              transition={{ duration: 0.15 }}
              className="relative py-2 transition-colors duration-200 group hover:text-[#182352]"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-[#182352] rounded-full transition-all duration-200 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* Action Button: Get the Book (Blue pill matching PDF Page 1) */}
        <div className="hidden sm:flex items-center">
          <motion.button
            id="nav-get-book-btn"
            onClick={onOpenGetBook}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="px-6 py-2.5 rounded-full bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold text-xs sm:text-sm tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer uppercase min-h-[42px] flex items-center justify-center"
          >
            GET THE BOOK
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-[#FFFDF9] border-b border-[#E2D8C9] px-6 py-6 space-y-4 shadow-xl overflow-hidden"
          >
            <nav className="flex flex-col space-y-2 text-left">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-700 hover:text-[#182352] py-2 min-h-[44px] flex items-center transition-colors border-b border-slate-100 last:border-b-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="pt-2 border-t border-slate-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGetBook();
                }}
                className="w-full py-3.5 rounded-full bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold text-sm tracking-wide uppercase shadow-md flex items-center justify-center min-h-[44px] transition-colors cursor-pointer"
              >
                GET THE BOOK
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
