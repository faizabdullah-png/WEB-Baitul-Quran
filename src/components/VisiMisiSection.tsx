import React from 'react';
import { INSTITUTION_CONFIG } from '../data/initialData';
import { Compass, Target, CheckCheck, Sparkles, BookOpen, MessageSquare, Utensils } from 'lucide-react';

export const VisiMisiSection: React.FC = () => {
  const missionIcons = [
    <Sparkles className="w-5 h-5" key="1" />,
    <BookOpen className="w-5 h-5" key="2" />,
    <MessageSquare className="w-5 h-5" key="3" />,
    <Utensils className="w-5 h-5" key="4" />
  ];

  return (
    <section className="py-20 bg-[#FAF7FC] dark:bg-[#16071F] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#64157D] dark:text-[#FFB800] bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Arah & Tujuan Lembaga</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#43104F] dark:text-white tracking-tight mb-4">
            Visi & Misi Lembaga
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C218A8] via-[#FF8500] to-[#FFB800] mx-auto rounded-full"></div>
        </div>

        {/* Visi Card */}
        <div className="mb-14 max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#C218A8] via-[#85189C] to-[#64157D] text-white shadow-xl overflow-hidden text-center">
            {/* Background embellishment */}
            <div className="absolute top-2 right-2 text-white/10 font-arabic text-8xl select-none pointer-events-none">
              القرآن
            </div>

            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/20 text-[#FFB800] mb-4 shadow-sm">
              <Target className="w-6 h-6" />
            </div>

            <span className="block text-xs uppercase tracking-widest text-[#FFB800] font-bold mb-2">
              Visi Utama
            </span>

            <blockquote className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed max-w-3xl mx-auto drop-shadow-sm">
              “{INSTITUTION_CONFIG.vision}”
            </blockquote>
          </div>
        </div>

        {/* Misi Cards Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#64157D] dark:text-purple-300 font-bold">
              Langkah Nyata Pelaksanaan
            </span>
            <h3 className="text-2xl font-bold text-[#43104F] dark:text-white mt-1">
              4 Misi Utama
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INSTITUTION_CONFIG.mission.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#250D33] border border-purple-100 dark:border-purple-900/50 shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4 text-left hover:border-[#C218A8]/40"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C218A8] to-[#64157D] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  {missionIcons[idx] || <CheckCheck className="w-5 h-5" />}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#FF8500] uppercase tracking-wider">
                      Misi {idx + 1}
                    </span>
                  </div>
                  <p className="text-neutral-700 dark:text-neutral-200 text-sm sm:text-base font-medium leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
