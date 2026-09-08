export interface Chapter {
  id: string;
  number: string;
  title: string;
  category: 'foundations' | 'capabilities' | 'outcomes';
  bgColor: string;
  textColor: string;
  badge?: string;
  badgeBg?: string;
  badgeText?: string;
  description: string;
  keyStat?: {
    value: string;
    label: string;
    sublabel?: string;
  };
  details: {
    takeaway: string;
    indices: string[];
    featuredCountry: string;
  };
}

export interface MetricItem {
  id: string;
  value: string;
  description: string;
}

export interface QuizQuestion {
  id: number;
  tier: 'foundations' | 'capabilities' | 'outcomes';
  ch: string;
  q: string;
  o: string[];
  a: number; // correct option index (0-based)
  e: string; // explanation
}

export interface ChartDataPoint {
  country: string;
  value: number;
  color: string;
  note?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  organization?: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  category: 'General Reader' | 'Policy & Economics' | 'Business & Tech' | 'Academic & Media';
  verified?: boolean;
}

export interface DownloadOption {
  id: string;
  title: string;
  format: 'PDF' | 'EPUB' | 'MOBI' | 'AUDIO';
  fileSize: string;
  pagesOrDuration: string;
  description: string;
  includes: string[];
  isFree: boolean;
  badge?: string;
  fileName: string;
}
