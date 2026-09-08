import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DOWNLOAD_OPTIONS } from '../data/reviewsAndDownloads';
import { DownloadOption } from '../types';
import { triggerInstantDownload } from '../utils/downloadHelper';
import {
  Download,
  FileText,
  BookOpen,
  Headphones,
  CheckCircle2,
  Smartphone,
  ArrowDownToLine,
  Mail,
  Check,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DownloadSectionProps {
  onOpenGetBook?: () => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ onOpenGetBook }) => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadSuccessId, setDownloadSuccessId] = useState<string | null>(null);
  const [emailModalOption, setEmailModalOption] = useState<DownloadOption | null>(null);
  const [emailInput, setEmailInput] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleDownload = (option: DownloadOption) => {
    setDownloadingId(option.id);
    
    // Simulate brief preparation delay then trigger download
    setTimeout(() => {
      triggerInstantDownload(option.fileName, option.title, option.format);
      setDownloadingId(null);
      setDownloadSuccessId(option.id);
      
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 },
      });

      // Clear success badge after 4 seconds
      setTimeout(() => {
        setDownloadSuccessId(null);
      }, 4000);
    }, 600);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setEmailSent(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
    });
    setTimeout(() => {
      setEmailModalOption(null);
      setEmailSent(false);
      setEmailInput('');
    }, 3000);
  };

  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'PDF':
        return <FileText className="w-5 h-5 text-rose-600" />;
      case 'EPUB':
        return <BookOpen className="w-5 h-5 text-indigo-600" />;
      case 'MOBI':
        return <Smartphone className="w-5 h-5 text-amber-600" />;
      case 'AUDIO':
        return <Headphones className="w-5 h-5 text-emerald-600" />;
      default:
        return <Download className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <section id="downloads" className="py-20 sm:py-28 bg-[#FFFDF9] border-t border-[#F0EBE1] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#126B3E]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#126B3E] uppercase">
                FREE DOWNLOADS &amp; EDITIONS
              </span>
            </div>
            <h2 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-[#4A154B] leading-[0.92] tracking-tight">
              DOWNLOAD THE BOOK
              <br />
              &amp; DATA COMPANIONS.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end text-left sm:text-right">
            <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
              Immediate access to executive briefings, chart decks, e-reader editions, and audio excerpts. Free to download, cite, and share.
            </p>
          </div>
        </div>

        {/* Featured Hero Download Card: 42-Page Executive Briefing */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 0.8, 0.26, 0.99] }}
          whileHover={{
            y: -6,
            scale: 1.01,
            boxShadow: '0 30px 60px -20px rgba(18, 107, 62, 0.35)',
          }}
          className="mb-12 rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#126B3E] to-[#0E5431] text-white shadow-xl transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none hidden md:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-[#A3E635] text-[#064E3B] text-xs font-bold uppercase tracking-wider">
                  Featured Free Download
                </span>
                <span className="text-xs text-emerald-100 font-medium">
                  42 Pages · 4.8 MB · PDF
                </span>
              </div>

              <h3 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
                OPTIMISTIC AFRICA: EXECUTIVE BRIEFING &amp; DATA PACK
              </h3>

              <p className="text-sm sm:text-base text-emerald-50 leading-relaxed max-w-2xl">
                Contains the complete 42-page executive preview: the $4.2B sovereign risk penalty report, the full Funnel of Optimism architecture, unedited full chapters on Peace and Diaspora Solidarity, and 14 international benchmark index tables.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-emerald-100 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#A3E635] shrink-0" />
                  <span>Unabridged Chapters 1 &amp; 3 Included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#A3E635] shrink-0" />
                  <span>54-Country Peace &amp; Governance Matrix</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#A3E635] shrink-0" />
                  <span>Full Methodology &amp; Citations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#A3E635] shrink-0" />
                  <span>No Registration Required to Read</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3 justify-center">
              <button
                id="featured-download-pdf-btn"
                onClick={() => handleDownload(DOWNLOAD_OPTIONS[0])}
                disabled={downloadingId === DOWNLOAD_OPTIONS[0].id}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#A3E635] hover:bg-[#8fd028] text-[#064E3B] font-bold text-sm sm:text-base tracking-wide transition-all shadow-lg active:scale-95 cursor-pointer uppercase inline-flex items-center justify-center gap-2.5 min-h-[48px]"
              >
                {downloadingId === DOWNLOAD_OPTIONS[0].id ? (
                  <>
                    <span className="w-4 h-4 border-2 border-[#064E3B] border-t-transparent rounded-full animate-spin" />
                    <span>Preparing File...</span>
                  </>
                ) : downloadSuccessId === DOWNLOAD_OPTIONS[0].id ? (
                  <>
                    <Check size={20} className="text-[#064E3B]" />
                    <span>Downloaded!</span>
                  </>
                ) : (
                  <>
                    <ArrowDownToLine size={20} />
                    <span>Download PDF (4.8 MB)</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setEmailModalOption(DOWNLOAD_OPTIONS[0])}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-semibold text-xs sm:text-sm tracking-wide transition-colors cursor-pointer inline-flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Mail size={16} />
                <span>Send to My Email</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* All Available Formats & Companions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOWNLOAD_OPTIONS.map((option, index) => {
            const isDownloading = downloadingId === option.id;
            const isSuccess = downloadSuccessId === option.id;

            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 0.8, 0.26, 0.99] }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  boxShadow: '0 24px 48px -16px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(74, 21, 75, 0.1)',
                }}
                id={`download-card-${option.id}`}
                className="rounded-3xl p-6 sm:p-7 bg-white border border-[#E2D8C9] hover:border-[#4A154B]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Icon, Badge, and Size */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-2xl bg-slate-100 flex items-center justify-center">
                      {getFormatIcon(option.format)}
                    </div>
                    <div className="flex items-center gap-2">
                      {option.badge && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-purple-100 text-purple-800">
                          {option.badge}
                        </span>
                      )}
                      <span className="text-xs font-semibold text-slate-500 font-mono">
                        {option.fileSize}
                      </span>
                    </div>
                  </div>

                  <h4 className="font-bebas text-2xl sm:text-3xl text-slate-900 tracking-tight leading-snug">
                    {option.title}
                  </h4>
                  
                  <div className="text-xs font-semibold text-slate-500 mt-1 mb-3">
                    Format: <span className="text-slate-800 font-bold">{option.format}</span> · {option.pagesOrDuration}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {option.description}
                  </p>

                  {/* Bullet Points */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-6">
                    {option.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check size={14} className="text-[#126B3E] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={() => handleDownload(option)}
                    disabled={isDownloading}
                    className="w-full py-3 px-4 rounded-xl bg-[#4A154B] hover:bg-[#3B113C] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-sm active:scale-95 cursor-pointer uppercase flex items-center justify-center gap-2 min-h-[44px]"
                  >
                    {isDownloading ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Downloading...</span>
                      </>
                    ) : isSuccess ? (
                      <>
                        <Check size={16} className="text-[#A3E635]" />
                        <span>Downloaded Successfully</span>
                      </>
                    ) : (
                      <>
                        <Download size={16} />
                        <span>Download {option.format}</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => setEmailModalOption(option)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5 min-h-[40px]"
                  >
                    <Mail size={14} />
                    <span>Email me this file</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Informative Note for Hardcover / Complete Print Book */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#F4EDE2] border border-[#E2D8C9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="font-bebas text-2xl text-slate-900 tracking-tight">
              LOOKING FOR THE PHYSICAL HARDCOVER OR PAPERBACK?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              The full 320-page published edition will be available via major global distributors, university bookshops, and African independent bookstores.
            </p>
          </div>
          <button
            onClick={onOpenGetBook}
            className="shrink-0 px-6 py-3 rounded-full bg-[#E01A8A] hover:bg-[#C2185B] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer min-h-[44px]"
          >
            Pre-Order Print Edition
          </button>
        </div>

      </div>

      {/* Email Me This File Modal */}
      {emailModalOption && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            {!emailSent ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-purple-50 text-[#4A154B]">
                    {getFormatIcon(emailModalOption.format)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      SEND TO EMAIL
                    </span>
                    <h4 className="font-bebas text-2xl text-slate-900 leading-none">
                      {emailModalOption.title}
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-slate-600">
                  Enter your email to receive an instant direct download link and read anytime on your desktop, phone, or Kindle.
                </p>

                <form onSubmit={handleSendEmail} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#4A154B] focus:ring-2 focus:ring-[#4A154B]/20 outline-none text-sm transition-all min-h-[44px]"
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setEmailModalOption(null)}
                      className="flex-1 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs uppercase cursor-pointer min-h-[44px]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 rounded-xl bg-[#126B3E] hover:bg-[#0E5431] text-white font-bold text-xs uppercase shadow-md cursor-pointer flex items-center justify-center gap-1.5 min-h-[44px]"
                    >
                      <span>Send Download</span>
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={28} />
                </div>
                <h4 className="font-bebas text-2xl text-slate-900">LINK ON ITS WAY!</h4>
                <p className="text-xs text-slate-600">
                  We&apos;ve dispatched the download link for <strong>{emailModalOption.title}</strong> to <strong>{emailInput}</strong>.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
