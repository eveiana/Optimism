import React, { useState } from 'react';
import { X, CheckCircle2, Download, BookMarked } from 'lucide-react';
import confetti from 'canvas-confetti';
import bookCover from '../assets/images/book_cover_hd.png';

interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookModal: React.FC<BookModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [format, setFormat] = useState<'hardcover' | 'kindle' | 'audiobook'>('hardcover');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#FFFDF9] rounded-3xl p-8 sm:p-9 shadow-2xl border border-[#E2D8C9] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-20 sm:w-24 rounded-xl overflow-hidden drop-shadow-md border border-slate-200 bg-white">
                <img
                  src={bookCover}
                  alt="Optimistic Africa Book Cover"
                  className="w-full h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-[#E01A8A] uppercase">
                  EXCLUSIVE ACCESS
                </span>
                <h3 className="font-bebas text-3xl sm:text-4xl text-[#4A154B] tracking-tight leading-none mt-0.5">
                  GET OPTIMISTIC AFRICA
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                  Pre-order and instantly receive the 42-page Executive Briefing featuring key indices,
                  charts, and the first 3 chapters.
                </p>
              </div>
            </div>

            {/* Quick 1-Click Direct Download Banner */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">
                  Instant Access (No Waiting)
                </span>
                <p className="text-xs font-semibold text-emerald-950">
                  42-Page Executive Briefing (PDF)
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  import('../utils/downloadHelper').then((m) => {
                    m.triggerInstantDownload('Optimistic-Africa-Executive-Briefing.pdf', 'Executive Briefing & Key Indicators', 'PDF');
                  });
                }}
                className="px-4 py-2.5 rounded-xl bg-[#126B3E] hover:bg-[#0E5431] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm active:scale-95 cursor-pointer min-h-[44px]"
              >
                <Download size={15} />
                <span>Instant Download</span>
              </button>
            </div>

            {/* Format Selection */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Preferred Edition
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'hardcover', label: 'Hardcover' },
                  { id: 'kindle', label: 'E-Book / Kindle' },
                  { id: 'audiobook', label: 'Audiobook' },
                ].map((fmt) => (
                  <button
                    key={fmt.id}
                    type="button"
                    onClick={() => setFormat(fmt.id as any)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                      format === fmt.id
                        ? 'bg-[#5B188A] text-white border-[#5B188A] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {fmt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 pt-1">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#5B188A] focus:ring-2 focus:ring-[#5B188A]/20 outline-none text-sm transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-[#5B188A] hover:bg-[#6E1EA6] text-white font-bold text-sm tracking-wide transition-all shadow-md active:scale-95 cursor-pointer uppercase inline-flex items-center justify-center gap-2"
              >
                <span>GET SAMPLE CHAPTERS &amp; UPDATES</span>
              </button>
            </form>

            <div className="text-[11px] text-slate-500 text-center pt-1">
              No spam, ever. Unsubscribe at any time with a single click.
            </div>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="font-bebas text-3xl text-slate-900">YOU&apos;RE ON THE LIST!</h4>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              We&apos;ve sent your sample download link for the <span className="font-bold capitalize">{format}</span> briefing to <span className="font-semibold text-slate-800">{email}</span>.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase"
              >
                Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
