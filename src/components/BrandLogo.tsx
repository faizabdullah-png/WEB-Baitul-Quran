import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

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
    sm: { box: 'w-8 h-8 rounded-xl', icon: 'w-4 h-4', text: 'text-sm font-semibold', sub: 'text-[10px]' },
    md: { box: 'w-11 h-11 rounded-2xl', icon: 'w-5 h-5', text: 'text-base font-bold', sub: 'text-xs' },
    lg: { box: 'w-14 h-14 rounded-2xl', icon: 'w-7 h-7', text: 'text-lg font-extrabold', sub: 'text-xs' },
    xl: { box: 'w-18 h-18 rounded-3xl', icon: 'w-9 h-9', text: 'text-2xl font-extrabold', sub: 'text-sm' }
  };

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Emblem Icon representing Islamic Institution */}
      <div
        className={`relative flex items-center justify-center shrink-0 shadow-md ${sizeClasses[size].box} bg-gradient-to-br from-[#C218A8] via-[#64157D] to-[#43104F] text-white border border-[#FFB800]/40 overflow-hidden`}
      >
        <BookOpen className={`${sizeClasses[size].icon} text-white drop-shadow-xs`} />
        <Sparkles className="w-2.5 h-2.5 text-[#FFB800] absolute top-1 right-1 animate-pulse" />
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-tight text-left">
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
