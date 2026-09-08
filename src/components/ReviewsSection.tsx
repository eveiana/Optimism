import React, { useState, useEffect } from 'react';
import { ReviewItem } from '../types';
import {
  Star,
  MessageSquarePlus,
  CheckCircle2,
  ThumbsUp,
  ExternalLink,
  Send,
  Trash2,
  BookOpen,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'motion/react';

const STORAGE_KEY = 'optimistic_africa_user_reviews';

export const ReviewsSection: React.FC = () => {
  // Only user-submitted reviews - NO SAMPLE REVIEWS
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  
  // Review Form States
  const [author, setAuthor] = useState('');
  const [role, setRole] = useState('');
  const [organization, setOrganization] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<ReviewItem['category']>('General Reader');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helpful votes local tracking
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>({});

  // Load reviews from local storage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: ReviewItem[] = JSON.parse(saved);
        setReviews(parsed);
      }
    } catch (e) {
      console.warn('Failed to load user reviews from storage', e);
    }
  }, []);

  const handleVoteHelpful = (id: string) => {
    setHelpfulVotes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleDeleteReview = (id: string) => {
    const updated = reviews.filter((r) => r.id !== id);
    setReviews(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.warn('Failed to update storage', err);
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !title.trim() || !content.trim()) return;

    setIsSubmitting(true);

    const newReview: ReviewItem = {
      id: `user-rev-${Date.now()}`,
      author: author.trim(),
      role: role.trim() || 'Reader',
      organization: organization.trim() || undefined,
      location: location.trim() || 'Global',
      rating,
      date: 'Just now',
      title: title.trim(),
      content: content.trim(),
      category,
      verified: true,
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.warn('Failed to save review to storage', err);
    }

    confetti({
      particleCount: 55,
      spread: 60,
      origin: { y: 0.6 },
    });

    setSubmittedSuccess(true);
    setIsSubmitting(false);

    // Reset form fields
    setAuthor('');
    setRole('');
    setOrganization('');
    setLocation('');
    setTitle('');
    setContent('');
    setRating(5);

    setTimeout(() => {
      setSubmittedSuccess(false);
    }, 4500);
  };

  const getRatingLabel = (stars: number) => {
    switch (stars) {
      case 5:
        return '5 of 5 Stars · Outstanding';
      case 4:
        return '4 of 5 Stars · Very Good';
      case 3:
        return '3 of 5 Stars · Good';
      case 2:
        return '2 of 5 Stars · Fair';
      case 1:
        return '1 of 5 Stars · Needs Improvement';
      default:
        return `${stars} of 5 Stars`;
    }
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FFFDF9] border-t border-[#F0EBE1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E01A8A]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#E01A8A] uppercase">
              READER FEEDBACK
            </span>
          </div>
          <h2 className="font-bebas text-4xl sm:text-6xl md:text-7xl text-[#4A154B] leading-[0.92] tracking-tight">
            COMMUNITY REVIEWS.
            <br />
            SHARE YOUR THOUGHTS.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Have you read the book or explored the data chapters? We welcome your review, questions, or reflections on Africa&apos;s peace, governance, technology, and economic trajectory.
          </p>
        </div>

        {/* The Review Submission Card (The Place to Review) */}
        <div className="rounded-3xl bg-white border border-[#E2D8C9] p-6 sm:p-10 shadow-lg mb-16 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-100/40 via-purple-50/20 to-transparent rounded-bl-full pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#E01A8A] mb-1">
              <MessageSquarePlus size={16} />
              <span>Write a Review</span>
            </div>
            <h3 className="font-bebas text-2xl sm:text-3xl text-slate-900 mb-6">
              LEAVE YOUR REVIEW FOR OPTIMISTIC AFRICA
            </h3>

            {submittedSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-center gap-3"
              >
                <CheckCircle2 size={22} className="text-emerald-600 shrink-0" />
                <div className="text-xs sm:text-sm">
                  <p className="font-bold">Thank you! Your review has been published below.</p>
                  <p className="text-emerald-700">Thank you for contributing to realistic optimism and evidence-based storytelling.</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmitReview} className="space-y-5">
              {/* Star Rating Picker */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Overall Rating *
                </label>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 cursor-pointer transition-transform hover:scale-115 active:scale-95"
                        title={`${star} Star${star > 1 ? 's' : ''}`}
                      >
                        <Star
                          size={28}
                          fill={(hoverRating || rating) >= star ? '#F59E0B' : 'none'}
                          color="#F59E0B"
                        />
                      </button>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-700 ml-2">
                    {getRatingLabel(hoverRating || rating)}
                  </span>
                </div>
              </div>

              {/* Author and Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="e.g. Samuel Mutua"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#E01A8A] focus:ring-2 focus:ring-[#E01A8A]/20 outline-none text-sm min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Role / Title
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Policy Analyst, Tech Founder, Student, Reader"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#E01A8A] focus:ring-2 focus:ring-[#E01A8A]/20 outline-none text-sm min-h-[44px]"
                  />
                </div>
              </div>

              {/* Organization and Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Organization / Affiliation (Optional)
                  </label>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. University, Organization or Company"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#E01A8A] focus:ring-2 focus:ring-[#E01A8A]/20 outline-none text-sm min-h-[44px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                    Location / Country (Optional)
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Nairobi, Kenya or London, UK"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#E01A8A] focus:ring-2 focus:ring-[#E01A8A]/20 outline-none text-sm min-h-[44px]"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Perspective / Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full sm:w-80 px-4 py-2.5 rounded-xl border border-slate-300 focus:border-[#E01A8A] outline-none text-sm bg-white min-h-[44px] cursor-pointer"
                >
                  <option value="General Reader">General Reader</option>
                  <option value="Policy & Economics">Policy &amp; Economics</option>
                  <option value="Business & Tech">Business &amp; Tech</option>
                  <option value="Academic & Media">Academic &amp; Media</option>
                </select>
              </div>

              {/* Review Headline */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Review Headline *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. A transformational look at Africa's real economic trajectory"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#E01A8A] focus:ring-2 focus:ring-[#E01A8A]/20 outline-none text-sm min-h-[44px]"
                />
              </div>

              {/* Review Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
                  Your Review *
                </label>
                <textarea
                  required
                  rows={4}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="What chapter, index, or data point resonated with you? How did this book influence your perception of the continent?"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#E01A8A] focus:ring-2 focus:ring-[#E01A8A]/20 outline-none text-sm resize-none"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3.5 rounded-full bg-[#E01A8A] hover:bg-[#C2185B] text-white font-bold text-sm tracking-wider transition-all shadow-md hover:shadow-lg active:scale-95 cursor-pointer uppercase inline-flex items-center gap-2 min-h-[48px]"
                >
                  <span>SUBMIT REVIEW</span>
                  <Send size={16} />
                </button>

                {/* External Links */}
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>Also review on:</span>
                  <a
                    href="https://www.goodreads.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Goodreads</span>
                    <ExternalLink size={11} />
                  </a>
                  <a
                    href="https://www.amazon.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold inline-flex items-center gap-1"
                  >
                    <span>Amazon</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Community Reviews Display (User reviews only) */}
        <div className="text-left">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8">
            <h3 className="font-bebas text-2xl sm:text-3xl text-slate-900 tracking-wide">
              SUBMITTED REVIEWS ({reviews.length})
            </h3>
            {reviews.length > 0 && (
              <span className="text-xs text-slate-500 font-medium">
                Showing live community reviews
              </span>
            )}
          </div>

          {reviews.length === 0 ? (
            <div className="text-center py-16 px-4 rounded-3xl bg-[#F8F5EE] border border-dashed border-[#D5C9B3] max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
                <Star size={28} />
              </div>
              <h4 className="font-bebas text-2xl text-slate-800 tracking-wide mb-1">
                NO REVIEWS YET
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Be the first to share your review! Use the form above to rate the book, leave feedback, and contribute your perspective.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {reviews.map((rev) => (
                  <motion.div
                    key={rev.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    whileHover={{
                      y: -6,
                      scale: 1.015,
                      boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.12)',
                    }}
                    transition={{ duration: 0.28, ease: [0.22, 0.8, 0.26, 0.99] }}
                    className="rounded-3xl p-6 sm:p-7 bg-white border border-[#E2D8C9] hover:border-amber-400/40 shadow-sm transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Bar: Stars & Category */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex text-amber-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                          ))}
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {rev.category}
                        </span>
                      </div>

                      {/* Review Title */}
                      <h4 className="font-bold text-base sm:text-lg text-slate-900 leading-snug mb-2">
                        &ldquo;{rev.title}&rdquo;
                      </h4>

                      {/* Review Content */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                        {rev.content}
                      </p>
                    </div>

                    {/* Author Footer */}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="text-left">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-xs text-slate-800">{rev.author}</span>
                          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded inline-flex items-center gap-0.5">
                            <CheckCircle2 size={10} />
                            <span>Community</span>
                          </span>
                        </div>
                        <div className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                          {rev.role}{rev.organization ? ` · ${rev.organization}` : ''}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {rev.location} · {rev.date}
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleVoteHelpful(rev.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-50 text-xs flex items-center gap-1 cursor-pointer transition-colors"
                          title="Mark this review as helpful"
                        >
                          <ThumbsUp size={13} />
                          <span>{helpfulVotes[rev.id] || 0}</span>
                        </button>

                        <button
                          onClick={() => handleDeleteReview(rev.id)}
                          className="p-1.5 rounded-lg text-slate-300 hover:text-red-600 hover:bg-red-50 text-xs cursor-pointer transition-colors"
                          title="Delete review"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
