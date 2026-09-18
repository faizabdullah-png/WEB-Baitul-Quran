import React from 'react';
import { Sparkles, Calendar, BookOpen, HeartHandshake, CheckCircle2, ChevronRight, Award } from 'lucide-react';

interface HeroSectionProps {
  onRegisterClick: () => void;
  onLearnMoreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onRegisterClick,
  onLearnMoreClick,
}) => {
  const handleLearnMore = onLearnMoreClick || (() => {
    const el = document.getElementById('program') || document.getElementById('tentang-kami') || document.getElementById('tentang');
    el?.scrollIntoView({ behavior: 'smooth' });
  });
  return (
    <section id="beranda" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#C218A8]/15 via-[#64157D]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-gradient-to-tr from-[#FF8500]/15 via-[#FFB800]/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* PPDB Badges */}
            <div className="inline-flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#C218A8] to-[#64157D] text-white shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
                PPDB 2027/2028
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/50 text-[#FF8500] dark:text-[#FFB800] border border-amber-200 dark:border-amber-800/60">
                <Calendar className="w-3.5 h-3.5" />
                Mulai Pendaftaran 1 Oktober 2026
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#43104F] dark:text-white leading-[1.15] mb-6">
              Membentuk Generasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C218A8] via-[#85189C] to-[#64157D] dark:from-[#f05bd9] dark:to-[#FFB800]">Qur’ani</span>, Berilmu dan Berakhlak
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-8">
              <strong className="font-semibold text-[#64157D] dark:text-purple-300">
                Baitul Qur’an Dzun Nurain Lil Banaat
              </strong>{' '}
              merupakan lembaga pendidikan Islam khusus putri yang memadukan hafalan Al-Qur’an, ilmu syar’iyyah, pendidikan formal, dan pembentukan karakter.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onRegisterClick}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-bold text-base text-white bg-gradient-to-r from-[#FF8500] to-[#FFB800] hover:from-[#e67700] hover:to-[#e6a600] shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Daftar Sekarang</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={handleLearnMore}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-base text-[#64157D] dark:text-purple-200 bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 dark:hover:bg-purple-900/40 border border-purple-200/80 dark:border-purple-800/80 transition-colors"
              >
                <span>Pelajari Program</span>
                <BookOpen className="w-4 h-4" />
              </button>
            </div>

            {/* Core Value Highlights */}
            <div className="pt-6 border-t border-purple-100 dark:border-purple-900/40 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-pink-100 dark:bg-pink-950/50 flex items-center justify-center text-[#C218A8] shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#43104F] dark:text-white uppercase tracking-wider">Khusus Putri</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Lingkungan asrama terjaga</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-100 dark:bg-purple-950/50 flex items-center justify-center text-[#64157D] dark:text-purple-300 shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#43104F] dark:text-white uppercase tracking-wider">SMP & SMA/PKBM</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Pendidikan terintegrasi</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950/50 flex items-center justify-center text-[#FF8500] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#43104F] dark:text-white uppercase tracking-wider">Hafalan 30 Juz</h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">Mutqin & bersanad matan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Geometric Outline Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#C218A8]/30 via-[#64157D]/20 to-[#FFB800]/30 transform -rotate-2 scale-102 filter blur-sm"></div>

              {/* Main Card Wrapper */}
              <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-[#200D2B] p-2 shadow-2xl border border-purple-100 dark:border-purple-900/50">
                <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden bg-gradient-to-b from-purple-900 to-[#43104F]">
                  <img
                    src="https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=1000&q=80"
                    alt="Santriwati Muslimah membaca Al-Qur'an dalam suasana khusyuk dan santun"
                    className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#43104F] via-[#43104F]/40 to-transparent"></div>

                  {/* Floating Card: Visi Singkat */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 dark:bg-[#1A0A24]/95 backdrop-blur-md border border-white/40 dark:border-purple-900/60 shadow-lg text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF8500]"></span>
                      <span className="text-[11px] font-bold tracking-wider uppercase text-[#C218A8] dark:text-[#FFB800]">
                        Salafush Shalih
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-[#43104F] dark:text-neutral-100 leading-snug">
                      "Berbasis pada penguasaan hafalan Al-Qur’an dan ilmu syar’iyyah berdalil shahih."
                    </p>
                  </div>

                  {/* Top Floating Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />
                    <span>Lembaga Khusus Putri</span>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Badges */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white dark:bg-[#2A1039] px-4 py-3 rounded-2xl shadow-xl border border-purple-100 dark:border-purple-900/50 items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF8500] to-[#FFB800] flex items-center justify-center text-white font-bold text-sm">
                  30
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#43104F] dark:text-white">Target 30 Juz</div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Mutqin & Terarah</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
