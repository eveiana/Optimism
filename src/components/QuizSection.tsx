import React, { useState, useMemo, useEffect } from 'react';
import { motion } from 'motion/react';
import { QUIZ_QUESTIONS } from '../data/bookData';
import { CountUp } from './CountUp';
import { AnimatedText } from './AnimatedText';
import { AnimatedParagraph } from './AnimatedParagraph';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Award,
  ChevronRight,
  Check,
  X,
  ListFilter,
  Timer,
  Pause,
  Play,
} from 'lucide-react';

interface QuizSectionProps {
  onOpenGetBook: () => void;
}

export const QuizSection: React.FC<QuizSectionProps> = ({ onOpenGetBook }) => {
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({}); // qId -> selected option index
  const [quizFinished, setQuizFinished] = useState(false);
  const [showReviewList, setShowReviewList] = useState(false);

  // 5-second auto jump countdown state (in ms: 5000 -> 0)
  const [countdownMs, setCountdownMs] = useState<number | null>(null);
  const [isTimerPaused, setIsTimerPaused] = useState(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentQ = QUIZ_QUESTIONS[currentIdx];

  // Calculate totals and tier breakdowns
  const tierTotals = useMemo(() => {
    const totals = { foundations: 0, capabilities: 0, outcomes: 0 };
    QUIZ_QUESTIONS.forEach((q) => {
      totals[q.tier]++;
    });
    return totals;
  }, []);

  const { score, tierCorrect, isCompleted } = useMemo(() => {
    let s = 0;
    const correct = { foundations: 0, capabilities: 0, outcomes: 0 };
    QUIZ_QUESTIONS.forEach((q) => {
      if (answers[q.id] !== undefined && answers[q.id] === q.a) {
        s++;
        correct[q.tier]++;
      }
    });
    const completed = Object.keys(answers).length === totalQuestions;
    return { score: s, tierCorrect: correct, isCompleted: completed };
  }, [answers, totalQuestions]);

  // 5-Second auto jump countdown interval
  useEffect(() => {
    if (countdownMs === null || isTimerPaused) return;

    if (countdownMs <= 0) {
      setCountdownMs(null);
      if (currentIdx + 1 < totalQuestions) {
        setCurrentIdx((prev) => prev + 1);
      } else {
        setQuizFinished(true);
        confetti({
          particleCount: 90,
          spread: 70,
          origin: { y: 0.6 },
        });
      }
      return;
    }

    const interval = setInterval(() => {
      setCountdownMs((prev) => (prev !== null ? Math.max(0, prev - 50) : null));
    }, 50);

    return () => clearInterval(interval);
  }, [countdownMs, isTimerPaused, currentIdx, totalQuestions]);

  const handleStart = () => {
    setIsQuizActive(true);
    setQuizFinished(false);
    setCurrentIdx(0);
    setAnswers({});
    setShowReviewList(false);
    setCountdownMs(null);
    setIsTimerPaused(false);
  };

  const handleSelectOption = (optIndex: number) => {
    if (answers[currentQ.id] !== undefined) return; // already answered
    const newAnswers = { ...answers, [currentQ.id]: optIndex };
    setAnswers(newAnswers);

    // Start the 5-second countdown to automatically jump to the next question
    setCountdownMs(5000);
    setIsTimerPaused(false);
  };

  const handleNext = () => {
    setCountdownMs(null);
    if (currentIdx + 1 < totalQuestions) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setQuizFinished(true);
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const handlePrev = () => {
    setCountdownMs(null);
    if (currentIdx > 0) {
      setCurrentIdx((prev) => prev - 1);
    }
  };

  const handleJumpToQuestion = (targetIdx: number) => {
    setCountdownMs(null);
    setCurrentIdx(targetIdx);
  };

  const handleTogglePause = () => {
    setIsTimerPaused((prev) => !prev);
  };

  // Persona calculation from book logic
  const getPersona = () => {
    const pct = score / totalQuestions;
    if (pct <= 0.34) {
      return {
        title: 'The Headline Reader',
        desc: 'Your instincts still lean on the old story. The data in this book will surprise you — that’s exactly who it was written for.',
        badgeColor: 'bg-amber-500/20 text-amber-200 border-amber-400/40',
      };
    } else if (pct <= 0.6) {
      return {
        title: 'The Cautious Realist',
        desc: 'You sense the shift, but the scale of it is bigger than you thought. A few chapters will close the gap.',
        badgeColor: 'bg-sky-500/20 text-sky-200 border-sky-400/40',
      };
    } else if (pct <= 0.8) {
      return {
        title: 'The Evidence-Based Optimist',
        desc: 'Your instincts are well calibrated to the data. You already read Africa the way this book does.',
        badgeColor: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/40',
      };
    } else {
      return {
        title: 'The Afro-Realist Visionary',
        desc: 'You see Africa as it really is — hard problems and hard evidence of progress, in equal measure. Share your score.',
        badgeColor: 'bg-purple-500/20 text-purple-200 border-purple-400/40',
      };
    }
  };

  const currentAnswer = answers[currentQ?.id];
  const hasAnsweredCurrent = currentAnswer !== undefined;
  const isCurrentCorrect = currentAnswer === currentQ?.a;

  const tierColors: Record<string, { bg: string; text: string; bar: string }> = {
    foundations: { bg: 'bg-[#AE5128]', text: 'text-white', bar: 'bg-[#AE5128]' },
    capabilities: { bg: 'bg-[#CE9A2C]', text: 'text-slate-900', bar: 'bg-[#CE9A2C]' },
    outcomes: { bg: 'bg-[#4A154B]', text: 'text-white', bar: 'bg-[#4A154B]' },
  };

  const secondsRemaining = countdownMs !== null ? Math.ceil(countdownMs / 1000) : null;

  return (
    <section id="quiz" className="py-20 sm:py-28 bg-[#FFFDF9] border-t border-[#F0EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7 space-y-2">
            <span className="block text-xs sm:text-sm font-bold tracking-widest text-[#E05A2B] uppercase">
              EXERCISE YOUR OPTIMISM MUSCLE
            </span>
            <h2 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-[#1E293B] leading-[0.92] tracking-tight">
              <AnimatedText text="HOW WELL DO YOU" className="block" />
              <AnimatedText text="REALLY KNOW AFRICA?" className="block" delay={0.2} />
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <AnimatedParagraph
              text="Inspired by Hans Rosling's Factfulness: most people score worse than random guessing on questions like these — because our instincts lag decades behind the data. Thirty questions, pulled from every chapter of the book, each with a short explanation after you answer."
              className="text-sm sm:text-base text-[#475569]"
              delay={0.2}
              stagger={0.012}
            />
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <motion.span
                whileHover={{ y: -2.5, scale: 1.05 }}
                className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-white bg-[#AE5128] uppercase cursor-default shadow-xs"
              >
                FOUNDATIONS
              </motion.span>
              <motion.span
                whileHover={{ y: -2.5, scale: 1.05 }}
                className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-slate-900 bg-[#CE9A2C] uppercase cursor-default shadow-xs"
              >
                CAPABILITIES
              </motion.span>
              <motion.span
                whileHover={{ y: -2.5, scale: 1.05 }}
                className="px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-white bg-[#4A154B] uppercase cursor-default shadow-xs"
              >
                OUTCOMES
              </motion.span>
            </div>
          </div>
        </div>

        {/* Main Quiz Box */}
        <div className="rounded-3xl bg-[#1D4ED8] text-white p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden relative">
          
          {/* STATE 1: Teaser Banner */}
          {!isQuizActive ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column Copy & Call to Action */}
              <div className="lg:col-span-8 space-y-5">
                <motion.span
                  whileHover={{ x: 3 }}
                  className="inline-block text-xs sm:text-sm font-bold tracking-widest text-[#67E8F9] uppercase cursor-default"
                >
                  BEFORE YOU BEGIN
                </motion.span>

                <motion.h3
                  whileHover={{ x: 4, color: '#93C5FD' }}
                  className="font-bebas text-4xl sm:text-5xl md:text-6xl text-white leading-[0.95] tracking-tight cursor-default transition-colors"
                >
                  TAKE A GUESS BEFORE
                  <br />
                  YOU TAKE THE FACTS.
                </motion.h3>

                <p className="text-sm sm:text-base text-blue-100 max-w-xl leading-relaxed">
                  Every question is drawn directly from a chapter of <em>Optimistic Africa</em>. You&apos;ll get an
                  explanation — and the source — right after each answer, and the quiz will automatically
                  advance after 5 seconds to keep the momentum going.
                </p>

                <div className="pt-3">
                  <button
                    id="start-quiz-btn"
                    onClick={handleStart}
                    className="px-8 py-3.5 rounded-full bg-[#E01A8A] hover:bg-[#C2185B] text-white font-bold text-sm sm:text-base tracking-wide transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer uppercase inline-flex items-center gap-2"
                  >
                    <span>START THE QUIZ</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Right Column: 30 Questions Badge */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="relative flex items-center justify-center">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-[#A3E635] p-1.5 flex items-center justify-center shadow-lg shadow-[#A3E635]/20 animate-pulse">
                    <div className="w-full h-full rounded-full border-2 border-[#A3E635]/60 bg-blue-900/50 flex flex-col items-center justify-center text-center p-4">
                      <span className="font-bebas text-5xl sm:text-6xl text-white leading-none">
                        <CountUp end={30} duration={1400} />
                      </span>
                      <span className="text-xs sm:text-sm font-bold tracking-wider text-[#A3E635] uppercase">
                        QUESTIONS
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ) : quizFinished && !showReviewList ? (
            /* STATE 2: Quiz Completed View */
            <div className="py-4 space-y-8 max-w-2xl mx-auto text-center">
              <div className="inline-flex p-4 rounded-full bg-white/10 text-[#A3E635] shadow-inner">
                <Award size={44} />
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-blue-200 uppercase">
                  YOUR OPTIMISM SCORE
                </span>
                <div className="font-bebas text-6xl sm:text-7xl text-white leading-none mt-2">
                  <span className="text-[#A3E635]">
                    <CountUp end={score} duration={1800} />
                  </span>
                  <span className="text-blue-300/80 text-4xl sm:text-5xl"> / {totalQuestions}</span>
                </div>
              </div>

              {/* Persona Title & Description */}
              <div className="bg-blue-900/40 p-6 rounded-2xl border border-white/15 text-left space-y-2">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border uppercase ${getPersona().badgeColor}`}>
                    Persona
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-white italic">
                    {getPersona().title}
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-blue-100 leading-relaxed pt-1">
                  {getPersona().desc}
                </p>
              </div>

              {/* Tier Breakdown Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                {/* Foundations */}
                <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-amber-200 mb-2">
                    <span>Foundations</span>
                    <span>
                      <CountUp end={tierCorrect.foundations} duration={1200} /> / {tierTotals.foundations}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-black/30 overflow-hidden">
                    <div
                      className="h-full bg-[#E05A2B] transition-all duration-700"
                      style={{ width: `${(tierCorrect.foundations / tierTotals.foundations) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Capabilities */}
                <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-yellow-200 mb-2">
                    <span>Capabilities</span>
                    <span>
                      <CountUp end={tierCorrect.capabilities} duration={1200} /> / {tierTotals.capabilities}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-black/30 overflow-hidden">
                    <div
                      className="h-full bg-[#CE9A2C] transition-all duration-700"
                      style={{ width: `${(tierCorrect.capabilities / tierTotals.capabilities) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Outcomes */}
                <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-purple-200 mb-2">
                    <span>Outcomes</span>
                    <span>
                      <CountUp end={tierCorrect.outcomes} duration={1200} /> / {tierTotals.outcomes}
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-black/30 overflow-hidden">
                    <div
                      className="h-full bg-[#E01A8A] transition-all duration-700"
                      style={{ width: `${(tierCorrect.outcomes / tierTotals.outcomes) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <button
                  onClick={handleStart}
                  className="px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-sm tracking-wide transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <RotateCcw size={16} />
                  <span>RETAKE QUIZ</span>
                </button>

                <button
                  onClick={() => setShowReviewList(true)}
                  className="px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-sm tracking-wide transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <ListFilter size={16} />
                  <span>REVIEW ALL ANSWERS</span>
                </button>

                <button
                  onClick={onOpenGetBook}
                  className="px-7 py-3 rounded-full bg-[#E01A8A] hover:bg-[#C2185B] text-white font-bold text-sm tracking-wide transition-all shadow-md inline-flex items-center gap-2 cursor-pointer uppercase"
                >
                  <span>GET THE BOOK</span>
                </button>
              </div>
            </div>
          ) : showReviewList ? (
            /* STATE 3: Review All 30 Answers List */
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/20 pb-4">
                <h4 className="font-bebas text-2xl sm:text-3xl text-white">
                  REVIEWING ALL 30 QUESTIONS
                </h4>
                <button
                  onClick={() => setShowReviewList(false)}
                  className="px-4 py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-xs font-bold uppercase cursor-pointer"
                >
                  Back to Results
                </button>
              </div>

              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {QUIZ_QUESTIONS.map((item, qIdx) => {
                  const userChoice = answers[item.id];
                  const isCorrect = userChoice === item.a;
                  return (
                    <div
                      key={item.id}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                        isCorrect
                          ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-50'
                          : 'bg-rose-950/30 border-rose-500/40 text-rose-50'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 text-xs font-bold mb-2">
                        <span className="text-white/70 uppercase">
                          Q{qIdx + 1} · {item.ch}
                        </span>
                        <span
                          className={`px-2.5 py-0.5 rounded-full uppercase ${
                            isCorrect ? 'bg-emerald-500/30 text-emerald-200' : 'bg-rose-500/30 text-rose-200'
                          }`}
                        >
                          {isCorrect ? 'Correct' : 'Incorrect'}
                        </span>
                      </div>
                      <p className="font-semibold text-white text-sm sm:text-base mb-2">{item.q}</p>
                      <div className="text-xs space-y-1">
                        <div>
                          <span className="opacity-75">Correct Answer: </span>
                          <span className="font-bold text-emerald-300">{item.o[item.a]}</span>
                        </div>
                        {!isCorrect && userChoice !== undefined && (
                          <div>
                            <span className="opacity-75">Your Answer: </span>
                            <span className="font-bold text-rose-300">{item.o[userChoice]}</span>
                          </div>
                        )}
                        <p className="pt-2 text-white/90 leading-relaxed italic border-t border-white/10 mt-2">
                          {item.e}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* STATE 4: Active Question Engine */
            <div className="space-y-6">
              
              {/* Top Bar: Progress Fill and Counter */}
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-blue-200 mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                        tierColors[currentQ.tier]?.bg || 'bg-white/20'
                      } ${tierColors[currentQ.tier]?.text || 'text-white'}`}
                    >
                      {currentQ.tier}
                    </span>
                    <span className="text-white/80 font-medium">{currentQ.ch}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-[#A3E635]">
                      Q{currentIdx + 1} / {totalQuestions}
                    </span>
                    <button
                      onClick={() => {
                        setCountdownMs(null);
                        setIsQuizActive(false);
                      }}
                      className="text-white/60 hover:text-white text-xs underline cursor-pointer"
                    >
                      Exit
                    </button>
                  </div>
                </div>

                {/* Progress Bar Track */}
                <div className="w-full h-2 rounded-full bg-blue-950/60 overflow-hidden border border-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-[#AE5128] via-[#CE9A2C] to-[#A3E635] transition-all duration-300"
                    style={{ width: `${((currentIdx + 1) / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className="pt-1">
                <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-white">
                  {currentQ.q}
                </h4>
              </div>

              {/* Options */}
              <div className="space-y-3 pt-2">
                {currentQ.o.map((optText, optIdx) => {
                  let btnStyle = 'bg-white/10 hover:bg-white/20 text-white border-white/20';

                  if (hasAnsweredCurrent) {
                    if (optIdx === currentQ.a) {
                      btnStyle = 'bg-emerald-600/90 text-white border-emerald-400 font-bold shadow-md';
                    } else if (currentAnswer === optIdx) {
                      btnStyle = 'bg-rose-600/80 text-white border-rose-400 font-medium';
                    } else {
                      btnStyle = 'bg-white/5 text-white/40 border-white/10 opacity-50';
                    }
                  }

                  const optLetter = String.fromCharCode(65 + optIdx); // A, B, C, D

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      disabled={hasAnsweredCurrent}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${btnStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm shrink-0">
                          {optLetter}
                        </span>
                        <span className="text-sm sm:text-base">{optText}</span>
                      </div>

                      {hasAnsweredCurrent && (
                        <div className="flex items-center gap-2 pl-2">
                          {optIdx === currentQ.a ? (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-300">
                              <CheckCircle2 size={20} />
                              <span className="hidden sm:inline">Correct</span>
                            </span>
                          ) : currentAnswer === optIdx ? (
                            <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-300">
                              <XCircle size={20} />
                              <span className="hidden sm:inline">Your guess</span>
                            </span>
                          ) : null}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Fact Explanation Card after answering */}
              {hasAnsweredCurrent && (
                <div className="p-5 sm:p-6 rounded-2xl bg-black/35 border border-white/20 space-y-4 animate-in fade-in duration-300">
                  
                  {/* Top Status & 5-Second Timer Banner */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      {isCurrentCorrect ? (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500 text-white uppercase inline-flex items-center gap-1">
                          <Check size={14} /> Correct
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500 text-white uppercase inline-flex items-center gap-1">
                          <X size={14} /> Not quite
                        </span>
                      )}
                      <span className="text-xs font-semibold text-blue-200">
                        The Evidence Behind The Data
                      </span>
                    </div>

                    {/* 5-Second Countdown Indicator */}
                    {countdownMs !== null && (
                      <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-medium text-blue-100 border border-white/15">
                        <Timer size={14} className="text-[#A3E635] animate-spin" style={{ animationDuration: '3s' }} />
                        <span>
                          {currentIdx + 1 === totalQuestions
                            ? `Results in ${secondsRemaining}s`
                            : `Next question in ${secondsRemaining}s`}
                        </span>
                        <button
                          onClick={handleTogglePause}
                          className="hover:text-white p-0.5 rounded cursor-pointer transition-colors"
                          title={isTimerPaused ? 'Resume 5s countdown' : 'Pause 5s countdown'}
                        >
                          {isTimerPaused ? <Play size={12} className="text-emerald-300" /> : <Pause size={12} className="text-amber-300" />}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* 5-second animated progress strip */}
                  {countdownMs !== null && (
                    <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full transition-all duration-75 ease-linear ${isTimerPaused ? 'bg-amber-400' : 'bg-[#A3E635]'}`}
                        style={{ width: `${(countdownMs / 5000) * 100}%` }}
                      />
                    </div>
                  )}

                  <p className="text-sm sm:text-base text-blue-50 leading-relaxed font-normal">
                    {currentQ.e}
                  </p>

                  <div className="pt-3 flex items-center justify-between border-t border-white/10">
                    <button
                      onClick={handlePrev}
                      disabled={currentIdx === 0}
                      className={`text-xs text-blue-200 hover:text-white cursor-pointer ${
                        currentIdx === 0 ? 'invisible' : ''
                      }`}
                    >
                      ← Previous
                    </button>

                    <button
                      onClick={handleNext}
                      className="px-6 py-2.5 rounded-full bg-[#E01A8A] hover:bg-[#C2185B] text-white font-bold text-sm tracking-wide inline-flex items-center gap-2 shadow-lg cursor-pointer uppercase transition-all"
                    >
                      <span>
                        {currentIdx + 1 === totalQuestions
                          ? 'See Full Results'
                          : secondsRemaining !== null && !isTimerPaused
                          ? `Next Question (${secondsRemaining}s)`
                          : 'Next Question'}
                      </span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* Mini Pagination Question Grid */}
              <div className="pt-2 border-t border-white/15">
                <div className="text-[11px] text-blue-200 uppercase tracking-wider mb-2 font-semibold">
                  Question Tracker
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {QUIZ_QUESTIONS.map((q, i) => {
                    const answered = answers[q.id] !== undefined;
                    const correct = answered && answers[q.id] === q.a;
                    const isCurrent = i === currentIdx;

                    let dotClass = 'bg-white/15 text-white/60 hover:bg-white/30';
                    if (isCurrent) {
                      dotClass = 'ring-2 ring-white bg-white text-blue-900 font-bold';
                    } else if (answered) {
                      dotClass = correct
                        ? 'bg-emerald-500 text-white font-bold'
                        : 'bg-rose-500 text-white font-bold';
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => handleJumpToQuestion(i)}
                        className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs flex items-center justify-center transition-all cursor-pointer ${dotClass}`}
                        title={`Question ${i + 1}: ${q.ch}`}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
