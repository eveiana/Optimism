import React, { useState } from 'react';
import { CountUp } from './CountUp';
import { MapPin, X, ArrowUpRight } from 'lucide-react';

interface AfricaMapProps {
  className?: string;
  onSelectHub?: (hub: HubData) => void;
}

export interface HubData {
  id: string;
  city: string;
  country: string;
  statValue: number;
  statPrefix?: string;
  statSuffix?: string;
  statLabel: string;
  description: string;
  cx: number;
  cy: number;
  color: string;
}

const HUBS: HubData[] = [
  {
    id: 'cairo',
    city: 'Cairo',
    country: 'Egypt',
    statValue: 560,
    statSuffix: '+',
    statLabel: 'Active Tech Startups',
    description: 'Northern Africa’s primary venture gateway and home to major AI, logistics, and fintech unicorns.',
    cx: 380,
    cy: 110,
    color: '#38BDF8',
  },
  {
    id: 'lagos',
    city: 'Lagos',
    country: 'Nigeria',
    statValue: 35,
    statSuffix: '+',
    statLabel: 'Countries reached by Flutterwave',
    description: 'Africa’s fintech capital, home to Flutterwave, Paystack, and leading mobile financial architectures.',
    cx: 185,
    cy: 245,
    color: '#E01A8A',
  },
  {
    id: 'nairobi',
    city: 'Nairobi',
    country: 'Kenya',
    statValue: 70,
    statSuffix: '%',
    statLabel: 'World Mobile Money Share',
    description: 'The "Silicon Savannah" that pioneered M-Pesa and leads in mobile financial infrastructure and clean grid power.',
    cx: 395,
    cy: 275,
    color: '#F59E0B',
  },
  {
    id: 'kigali',
    city: 'Kigali',
    country: 'Rwanda',
    statValue: 48,
    statPrefix: '+',
    statLabel: 'Peace Index Jump',
    description: 'Pioneering drone medical delivery, institutional innovation, and ranked among the cleanest, safest cities globally.',
    cx: 355,
    cy: 315,
    color: '#10B981',
  },
  {
    id: 'capetown',
    city: 'Cape Town & Joburg',
    country: 'South Africa',
    statValue: 35,
    statSuffix: ' Cities',
    statLabel: 'UNESCO Creative Network',
    description: 'Leading Africa in deep tech research, venture capital deployment, and UNESCO creative cultural infrastructure.',
    cx: 250,
    cy: 520,
    color: '#A855F7',
  },
];

export const AfricaMap: React.FC<AfricaMapProps> = ({ className = '' }) => {
  const [selectedHub, setSelectedHub] = useState<HubData | null>(HUBS[2]); // Default Nairobi

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 via-fuchsia-500/15 to-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

      {/* Interactive Helper Pill */}
      <div className="mb-2 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-purple-200 text-[11px] font-semibold text-purple-900 shadow-sm">
        <MapPin size={12} className="text-purple-600" />
        <span>Click nodes on map to inspect innovation hubs</span>
      </div>

      <div className="relative w-full max-w-[460px]">
        {/* Floating Badges exactly matching the PDF poster with live auto-counting figures */}
        {/* Top-Left: 39 Countries with a pervasive peace narrative */}
        <div className="absolute top-2 left-2 sm:-left-4 z-20 bg-white/95 text-slate-800 px-3.5 py-2 rounded-2xl shadow-xl border border-purple-100 max-w-[145px] sm:max-w-[160px] cursor-pointer hover:scale-105 transition-transform duration-200">
          <div className="flex items-center gap-1">
            <span className="font-bebas text-3xl sm:text-4xl text-[#7E22CE] leading-none font-bold">
              <CountUp end={39} duration={1500} />
            </span>
            <span className="w-2 h-2 rounded-full bg-[#7E22CE] animate-pulse" />
          </div>
          <p className="text-[10px] sm:text-[11px] font-semibold text-slate-700 leading-tight mt-0.5">
            countries with a pervasive peace narrative
          </p>
        </div>

        {/* Mid-Left: 21 Nations rank in the world's top 100 most peaceful */}
        <div className="absolute top-44 -left-3 sm:-left-8 z-20 bg-white/95 text-slate-800 px-3.5 py-2 rounded-2xl shadow-xl border border-emerald-100 max-w-[145px] sm:max-w-[160px] cursor-pointer hover:scale-105 transition-transform duration-200">
          <div className="flex items-center gap-1">
            <span className="font-bebas text-3xl sm:text-4xl text-[#10B981] leading-none font-bold">
              <CountUp end={21} duration={1500} />
            </span>
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
          </div>
          <p className="text-[10px] sm:text-[11px] font-semibold text-slate-700 leading-tight mt-0.5">
            nations rank in the world&apos;s top <CountUp end={100} duration={1400} /> most peaceful
          </p>
        </div>

        {/* Top-Right: 700+ Tech & innovation hubs */}
        <div className="absolute top-6 right-0 sm:-right-4 z-20 bg-white/95 text-slate-800 px-3.5 py-2 rounded-2xl shadow-xl border border-teal-100 max-w-[145px] sm:max-w-[160px] cursor-pointer hover:scale-105 transition-transform duration-200">
          <div className="flex items-center gap-1">
            <span className="font-bebas text-3xl sm:text-4xl text-[#047857] leading-none font-bold">
              <CountUp end={700} suffix="+" duration={1600} />
            </span>
            <span className="w-2 h-2 rounded-full bg-[#047857]" />
          </div>
          <p className="text-[10px] sm:text-[11px] font-semibold text-slate-700 leading-tight mt-0.5">
            tech &amp; innovation hubs, up from fewer than <CountUp end={20} duration={1200} />
          </p>
        </div>

        <svg
          viewBox="0 0 540 580"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-2xl transition-transform duration-700 select-none"
        >
          <defs>
            {/* Gradients for facets */}
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#C084FC" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>
            <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D8B4FE" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
            <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#7E22CE" />
            </linearGradient>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E879F9" />
              <stop offset="100%" stopColor="#D946EF" />
            </linearGradient>
            <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#9333EA" />
            </linearGradient>
            <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818CF8" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
            <linearGradient id="grad7" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F0ABFC" />
              <stop offset="100%" stopColor="#E879F9" />
            </linearGradient>
            <linearGradient id="grad8" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7E22CE" />
              <stop offset="100%" stopColor="#6B21A8" />
            </linearGradient>
            <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#7E22CE" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* African Continent - Low-Poly 3D Faceted Vector Mesh */}
          <g filter="url(#shadow)">
            {/* North Africa / Maghreb */}
            <polygon points="175,70 235,55 285,62 230,105 175,105" fill="#C084FC" />
            <polygon points="235,55 315,58 355,75 305,115 285,62" fill="#D8B4FE" />
            <polygon points="315,58 395,78 410,105 355,115 355,75" fill="#A855F7" />
            <polygon points="395,78 440,95 445,130 405,138 410,105" fill="#9333EA" />

            {/* Sahara & Sahel */}
            <polygon points="140,115 175,70 175,105 125,145" fill="#A855F7" />
            <polygon points="125,145 175,105 230,105 200,165 135,175" fill="#9333EA" />
            <polygon points="230,105 285,62 305,115 265,165 200,165" fill="#C084FC" />
            <polygon points="305,115 355,75 355,115 340,175 265,165" fill="#D8B4FE" />
            <polygon points="355,115 410,105 405,138 375,185 340,175" fill="#C084FC" />
            <polygon points="405,138 445,130 460,175 415,190 375,185" fill="#818CF8" />

            {/* West Africa Bulge */}
            <polygon points="85,175 140,115 125,145 75,195" fill="#7E22CE" />
            <polygon points="75,195 125,145 135,175 105,225" fill="#9333EA" />
            <polygon points="75,195 105,225 90,265 65,245" fill="#A855F7" />
            <polygon points="105,225 135,175 175,225 145,275 90,265" fill="#C084FC" />
            <polygon points="135,175 200,165 220,225 175,225" fill="#D8B4FE" />
            <polygon points="90,265 145,275 180,310 135,325 105,295" fill="#818CF8" />
            <polygon points="145,275 175,225 220,225 210,295 180,310" fill="#A855F7" />

            {/* Central Africa / Congo Basin */}
            <polygon points="200,165 265,165 280,225 220,225" fill="#E879F9" />
            <polygon points="265,165 340,175 345,235 280,225" fill="#F0ABFC" />
            <polygon points="220,225 280,225 270,300 210,295" fill="#C084FC" />
            <polygon points="280,225 345,235 340,305 270,300" fill="#D8B4FE" />
            <polygon points="210,295 270,300 260,365 205,360" fill="#9333EA" />
            <polygon points="270,300 340,305 325,370 260,365" fill="#A855F7" />

            {/* East Africa & Horn of Africa */}
            <polygon points="340,175 375,185 415,190 395,240 345,235" fill="#E879F9" />
            <polygon points="415,190 460,175 495,215 450,250 395,240" fill="#C084FC" />
            <polygon points="460,175 505,210 520,230 480,248 450,250" fill="#D8B4FE" />
            <polygon points="345,235 395,240 450,250 410,310 340,305" fill="#A855F7" />
            <polygon points="450,250 480,248 455,305 410,310" fill="#818CF8" />
            <polygon points="340,305 410,310 405,375 325,370" fill="#9333EA" />
            <polygon points="410,310 455,305 435,365 405,375" fill="#7E22CE" />

            {/* Southern Africa */}
            <polygon points="205,360 260,365 250,430 190,415" fill="#818CF8" />
            <polygon points="260,365 325,370 310,435 250,430" fill="#A855F7" />
            <polygon points="325,370 405,375 385,435 310,435" fill="#C084FC" />
            <polygon points="190,415 250,430 240,490 195,470" fill="#9333EA" />
            <polygon points="250,430 310,435 295,495 240,490" fill="#A855F7" />
            <polygon points="310,435 385,435 355,490 295,495" fill="#D8B4FE" />
            <polygon points="195,470 240,490 230,540 205,510" fill="#7E22CE" />
            <polygon points="240,490 295,495 270,545 230,540" fill="#9333EA" />

            {/* Madagascar Island */}
            <polygon points="465,375 490,390 480,450 455,435" fill="#C084FC" />
            <polygon points="480,450 495,485 475,515 455,475 455,435" fill="#E879F9" />
            <polygon points="455,475 475,515 460,535 445,495" fill="#9333EA" />
          </g>

          {/* Dynamic mesh facet edges */}
          <g stroke="#FFFFFF" strokeOpacity="0.28" strokeWidth="1" strokeLinejoin="round" fill="none">
            <line x1="175" y1="70" x2="285" y2="62" />
            <line x1="285" y1="62" x2="355" y2="75" />
            <line x1="355" y1="75" x2="440" y2="95" />
            <line x1="175" y1="105" x2="230" y2="105" />
            <line x1="230" y1="105" x2="305" y2="115" />
            <line x1="305" y1="115" x2="355" y2="115" />
            <line x1="200" y1="165" x2="265" y2="165" />
            <line x1="265" y1="165" x2="340" y2="175" />
            <line x1="220" y1="225" x2="280" y2="225" />
            <line x1="280" y1="225" x2="345" y2="235" />
            <line x1="210" y1="295" x2="270" y2="300" />
            <line x1="270" y1="300" x2="340" y2="305" />
            <line x1="260" y1="365" x2="325" y2="370" />
            <line x1="250" y1="430" x2="310" y2="435" />
            <line x1="240" y1="490" x2="295" y2="495" />
          </g>

          {/* Interactive Glowing Innovation Hubs */}
          <g>
            {HUBS.map((hub) => {
              const isSelected = selectedHub?.id === hub.id;
              return (
                <g
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className="cursor-pointer transition-transform duration-200 hover:scale-125"
                  style={{ transformOrigin: `${hub.cx}px ${hub.cy}px` }}
                >
                  {/* Outer pulse wave */}
                  <circle
                    cx={hub.cx}
                    cy={hub.cy}
                    r={isSelected ? 16 : 11}
                    fill={hub.color}
                    fillOpacity={isSelected ? 0.35 : 0.2}
                    className="animate-ping"
                    style={{ animationDuration: '3s' }}
                  />

                  {/* Outer dashed ring */}
                  <circle
                    cx={hub.cx}
                    cy={hub.cy}
                    r={isSelected ? 14 : 9}
                    stroke={hub.color}
                    strokeWidth={isSelected ? 2.5 : 1.5}
                    strokeDasharray={isSelected ? 'none' : '2 2'}
                  />

                  {/* Inner node */}
                  <circle
                    cx={hub.cx}
                    cy={hub.cy}
                    r={isSelected ? 6 : 4.5}
                    fill="#FFFFFF"
                    stroke={hub.color}
                    strokeWidth={2}
                  />

                  {/* City Label & Figure on Map */}
                  <text
                    x={hub.cx + 12}
                    y={hub.cy + 2}
                    fill="#FFFFFF"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="sans-serif"
                    className="drop-shadow-md pointer-events-none select-none"
                  >
                    {hub.city}
                  </text>
                  <text
                    x={hub.cx + 12}
                    y={hub.cy + 14}
                    fill={hub.color}
                    fontSize="9.5"
                    fontWeight="800"
                    fontFamily="sans-serif"
                    className="drop-shadow-md pointer-events-none select-none"
                  >
                    {hub.statPrefix || ''}{hub.statValue}{hub.statSuffix || ''}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>

        {/* Selected Hub Interactive Popover Card */}
        {selectedHub && (
          <div className="mt-3 p-4 sm:p-5 rounded-2xl bg-[#1E1B4B]/95 text-white border border-purple-400/40 shadow-xl backdrop-blur-md animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedHub.color }} />
                  <span className="font-bebas text-2xl text-white tracking-wide">
                    {selectedHub.city}, {selectedHub.country}
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <div className="font-bebas text-3xl text-[#A3E635]">
                    <CountUp
                      key={`${selectedHub.id}-${selectedHub.statValue}`}
                      prefix={selectedHub.statPrefix}
                      end={selectedHub.statValue}
                      suffix={selectedHub.statSuffix}
                      duration={1200}
                    />
                  </div>
                  <span className="text-xs text-purple-200 font-semibold uppercase tracking-wider">
                    {selectedHub.statLabel}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setSelectedHub(null)}
                className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer"
                aria-label="Close hub details"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-purple-100/90 mt-2 leading-relaxed">
              {selectedHub.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
