import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', light = false }) => {
  const textColor = light ? 'text-white' : 'text-[#0E4A28]';
  const ringColor = light ? 'border-white' : 'border-[#0E4A28]';

  return (
    <a
      href="#"
      id="brand-logo"
      className={`inline-flex items-center gap-1.5 font-bold tracking-wider uppercase select-none transition-opacity hover:opacity-90 ${textColor} ${className}`}
    >
      {/* Custom geometric ring O */}
      <span className="relative flex items-center justify-center">
        <span
          className={`inline-block w-4 h-4 rounded-full border-[2.5px] ${ringColor} -mr-0.5`}
        />
      </span>
      <span className="font-bebas text-2xl sm:text-3xl tracking-wide leading-none pt-0.5">
        PTIMISTIC AFRICA
      </span>
    </a>
  );
};
