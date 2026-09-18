import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  inverted?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  inverted = false
}) => {
  const sizeClasses = {
    sm: { icon: 'w-8 h-8', text: 'text-sm font-semibold', sub: 'text-[10px]' },
    md: { icon: 'w-11 h-11', text: 'text-base font-bold', sub: 'text-xs' },
    lg: { icon: 'w-14 h-14', text: 'text-lg font-extrabold', sub: 'text-xs' },
    xl: { icon: 'w-20 h-20', text: 'text-2xl font-extrabold', sub: 'text-sm' }
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Emblem SVG Icon representing Quran & Lily Bloom with Islamic Arch */}
      <div
        className={`relative flex items-center justify-center shrink-0 rounded-2xl shadow-sm ${sizeClasses[size].icon} bg-gradient-to-br from-[#C218A8] via-[#64157D] to-[#43104F] p-2 text-white border border-[#FFB800]/30`}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow"
        >
          {/* Outer Islamic Eight-Point Star Accent */}
          <path
            d="M50 8L59 27L80 20L73 41L92 50L73 59L80 80L59 73L50 92L41 73L20 80L27 59L8 50L27 41L20 20L41 27L50 8Z"
            stroke="#FFB800"
            strokeWidth="2.5"
            strokeOpacity="0.4"
            fill="none"
          />
          {/* Elegant Open Quran Book & Dome silhouette */}
          <path
            d="M50 28C40 28 32 34 32 44C32 58 50 68 50 68C50 68 68 58 68 44C68 34 60 28 50 28Z"
            fill="url(#goldGradient)"
            fillOpacity="0.95"
          />
          <path
            d="M30 65C38 60 48 62 50 67C52 62 62 60 70 65C70 65 64 73 50 72C36 73 30 65 30 65Z"
            fill="#FFFFFF"
          />
          {/* Subtle Lil Banaat feminine motif */}
          <circle cx="50" cy="40" r="4.5" fill="#C218A8" />
          <defs>
            <linearGradient id="goldGradient" x1="32" y1="28" x2="68" y2="68" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF8500" />
              <stop offset="1" stopColor="#FFB800" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-tight">
        <span
          className={`tracking-tight ${sizeClasses[size].text} ${
            inverted
              ? 'text-white'
              : 'text-[#43104F] dark:text-[#FAF7FC]'
          }`}
        >
          Baitul Qur’an Dzun Nurain
        </span>
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-extrabold text-[#C218A8] dark:text-[#FF8500]">
            Lil Banaat
          </span>
          {showSubtitle && (
            <span
              className={`hidden sm:inline-block font-normal border-l pl-1.5 ${
                inverted
                  ? 'border-white/30 text-purple-200'
                  : 'border-[#64157D]/30 text-neutral-500 dark:text-neutral-400'
              } ${sizeClasses[size].sub}`}
            >
              SMP & SMA / PKBM
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
