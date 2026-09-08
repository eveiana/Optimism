import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { AnimatedText } from './AnimatedText';
import { AnimatedParagraph } from './AnimatedParagraph';
import { CheckCircle2, Send } from 'lucide-react';

export const GetTheBookSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubmitted(true);
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.8 },
    });
  };

  return (
    <section id="get-book" className="py-20 sm:py-28 bg-[#FFFDF9] border-t border-[#F0EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Authors & Book Summary */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#C2185B] uppercase">
              GET THE BOOK
            </span>

            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-[#00A86B] leading-[0.92] tracking-tight">
              <AnimatedText text="READ THE EVIDENCE" className="block" />
              <AnimatedText text="BEHIND THE OPTIMISM." className="block" delay={0.2} />
            </h2>

            <AnimatedParagraph
              text="Eleven chapters. Hundreds of data points. A continent's worth of reasons to reconsider the story you've been told."
              className="text-base sm:text-lg text-[#334155] max-w-xl font-normal"
              delay={0.25}
              stagger={0.015}
            />

            <div className="pt-2 text-sm text-[#475569] space-y-3 font-medium border-t border-[#E2D8C9] pt-4">
              <div>
                <p className="font-bold text-[#1E293B] text-base">
                  A book by Dr Anand Kulkarni
                </p>
                <p className="text-xs sm:text-sm text-[#64748B] font-medium mt-0.5">
                  Supported by Africa No Filter · Foreword by Moky Makura
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 pt-1">
                Receive priority chapters, interactive indices, and data spreadsheets upon launch.
              </p>
            </div>
          </div>

          {/* Right Column: "BE FIRST TO KNOW" Container */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.5, ease: [0.22, 0.8, 0.26, 0.99] }}
              className="rounded-3xl p-7 sm:p-9 bg-[#00A86B] text-white shadow-xl relative overflow-hidden"
            >
              <div className="max-w-md space-y-5">
                <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide leading-none">
                  BE FIRST TO KNOW
                </h3>

                {isSubmitted ? (
                  <div className="bg-white/20 p-6 rounded-2xl flex items-start gap-3 border border-white/30 animate-in fade-in">
                    <CheckCircle2 size={24} className="text-emerald-200 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-base">You&apos;re on the priority list!</h4>
                      <p className="text-xs sm:text-sm text-emerald-100 mt-1 leading-relaxed">
                        We&apos;ve sent a confirmation to <span className="font-semibold">{email}</span>. You&apos;ll receive sample chapters and launch updates first.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Input Field */}
                    <div className="relative">
                      <input
                        type="email"
                        id="book-lead-email-input"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email"
                        className="w-full px-6 py-4 rounded-full bg-[#10E09F] text-[#064E3B] placeholder-[#065F46] font-semibold text-sm sm:text-base outline-none focus:ring-4 focus:ring-white/40 transition-all shadow-inner"
                      />
                    </div>

                    <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed font-normal opacity-95">
                      Leave your email and we&apos;ll send the book the moment it&apos;s out — plus
                      your optimism quiz results if you&apos;d like a copy.
                    </p>

                    <div>
                      <motion.button
                        type="submit"
                        id="submit-getbook-btn"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-8 py-3.5 rounded-full bg-[#E01A8A] hover:bg-[#C2185B] text-white font-bold text-sm sm:text-base tracking-wide transition-colors shadow-md hover:shadow-lg active:scale-95 cursor-pointer uppercase inline-flex items-center gap-2"
                      >
                        <span>GET THE BOOK</span>
                        <Send size={16} />
                      </motion.button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
