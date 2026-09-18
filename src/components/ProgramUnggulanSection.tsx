import React, { useState } from 'react';
import { INITIAL_PROGRAMS } from '../data/initialData';
import { BookOpen, Sparkles, BookMarked, MessageCircle, HeartHandshake, CheckCircle2 } from 'lucide-react';

export const ProgramUnggulanSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = [
    { id: 'ALL', label: 'Semua Program' },
    { id: 'TAHFIDZ', label: 'Tahfidz' },
    { id: 'ILMU SYAR’I', label: 'Ilmu Syar’i' },
    { id: 'BAHASA ARAB', label: 'Bahasa Arab' },
    { id: 'PEMBENTUKAN KARAKTER', label: 'Pembentukan Karakter' },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'TAHFIDZ':
        return <BookOpen className="w-5 h-5" />;
      case 'ILMU SYAR’I':
        return <BookMarked className="w-5 h-5" />;
      case 'BAHASA ARAB':
        return <MessageCircle className="w-5 h-5" />;
      case 'PEMBENTUKAN KARAKTER':
        return <HeartHandshake className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  const filteredPrograms =
    activeCategory === 'ALL'
      ? INITIAL_PROGRAMS
      : INITIAL_PROGRAMS.filter((p) => p.category === activeCategory);

  return (
    <section id="program" className="py-20 bg-white dark:bg-[#1C0A26] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#C218A8] dark:text-[#FFB800] bg-pink-50 dark:bg-pink-950/60 border border-pink-200 dark:border-pink-800 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fokus Pembelajaran Utama</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#43104F] dark:text-white tracking-tight mb-4">
            Program Unggulan
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C218A8] via-[#FF8500] to-[#FFB800] mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Kurikulum terarah yang memadukan Al-Qur'an, hafalan matan bersanad, pondasi aqidah shahihah, dan karakter mulia.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#C218A8] to-[#64157D] text-white shadow-md'
                  : 'bg-purple-50 dark:bg-[#280E38] text-[#43104F] dark:text-neutral-300 hover:bg-purple-100 dark:hover:bg-[#341348]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Programs Grouping Grid */}
        <div className="space-y-12">
          {filteredPrograms.map((group) => (
            <div key={group.category} className="space-y-6 text-left">
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-purple-100 dark:border-purple-900/40 pb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#64157D] to-[#43104F] text-[#FFB800] flex items-center justify-center shrink-0">
                  {getCategoryIcon(group.category)}
                </div>
                <div>
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border ${group.badgeColor}`}>
                    {group.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#43104F] dark:text-white mt-0.5">
                    Program {group.category.toLowerCase()}
                  </h3>
                </div>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#FAF7FC] dark:bg-[#250D33] border border-purple-100/80 dark:border-purple-900/40 hover:border-[#C218A8]/40 dark:hover:border-[#FFB800]/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle2 className="w-4 h-4 text-[#C218A8] dark:text-[#FF8500] shrink-0" />
                        <h4 className="text-base font-bold text-[#43104F] dark:text-white leading-snug">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-purple-100/60 dark:border-purple-900/30 flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400">
                      <span className="font-semibold text-[#64157D] dark:text-purple-300">Baitul Qur’an</span>
                      <span>Khusus Santriwati</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
