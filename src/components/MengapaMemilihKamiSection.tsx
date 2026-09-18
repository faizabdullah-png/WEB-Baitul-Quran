import React from 'react';
import { CheckCircle2, ShieldCheck, Heart, Sparkles, BookOpen, Home, Languages, Award } from 'lucide-react';

export const MengapaMemilihKamiSection: React.FC = () => {
  const points = [
    {
      title: "Pendidikan Khusus Putri",
      desc: "Suasana asrama dan proses belajar yang eksklusif bagi santriwati, menjaga adab pergaulan, rasa aman, dan kenyamanan belajar.",
      icon: <Heart className="w-5 h-5 text-[#C218A8]" />
    },
    {
      title: "Fokus Hafalan Al-Qur’an",
      desc: "Pendampingan intensif dengan target hafalan 30 Juz serta penguatan mutqin melalui talaqqi berkala.",
      icon: <BookOpen className="w-5 h-5 text-[#64157D] dark:text-purple-300" />
    },
    {
      title: "Pembelajaran Ilmu Syar’iyyah",
      desc: "Penanaman dasar-dasar aqidah, fiqih, tafsir, dan hadits berlandaskan dalil Al-Qur'an dan As-Sunnah sesuai pemahaman salafush shalih.",
      icon: <ShieldCheck className="w-5 h-5 text-[#FF8500]" />
    },
    {
      title: "Pembiasaan Bahasa Arab",
      desc: "Pendidikan bahasa Arab aplikatif sehari-hari melalui latihan percakapan, kosakata, dan pemahaman kaidah dasar.",
      icon: <Languages className="w-5 h-5 text-[#C218A8]" />
    },
    {
      title: "Pendidikan Akhlak dan Karakter",
      desc: "Pembentukan adab penuntut ilmu, kesantunan, kedisiplinan, serta rasa tanggung jawab santriwati dalam kehidupan bermasyarakat.",
      icon: <Sparkles className="w-5 h-5 text-[#FFB800]" />
    },
    {
      title: "Lingkungan Asrama",
      desc: "Kehidupan asrama yang tertata, terarah, dan terjaga, mendidik kemandirian dan ukhuwah islamiyyah yang erat.",
      icon: <Home className="w-5 h-5 text-[#64157D] dark:text-purple-300" />
    },
    {
      title: "Pendidikan Akademik dan Keterampilan",
      desc: "Integrasi kurikulum formal SMP dan SMA/PKBM dengan bekal kecakapan praktis penunjang masa depan santriwati.",
      icon: <Award className="w-5 h-5 text-[#FF8500]" />
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#1C0A26] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#64157D] dark:text-[#FFB800] bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 mb-3">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C218A8]" />
            <span>Karakteristik & Keunggulan Nyata</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#43104F] dark:text-white tracking-tight mb-4">
            Mengapa Memilih Kami
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C218A8] via-[#FF8500] to-[#FFB800] mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Fokus kami adalah menyelenggarakan pendidikan yang berlandaskan amanah, kejujuran ilmiah, dan pembinaan santriwati dengan penuh kasih sayang.
          </p>
        </div>

        {/* Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-3xl bg-[#FAF7FC] dark:bg-[#250D33] border border-purple-100/80 dark:border-purple-900/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#1A0A24] border border-purple-100 dark:border-purple-900/60 flex items-center justify-center mb-4 shadow-xs">
                  {pt.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <h3 className="text-base font-bold text-[#43104F] dark:text-white">
                    {pt.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {pt.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-purple-100/60 dark:border-purple-900/30 flex items-center justify-between text-[11px] text-neutral-400">
                <span>Keunggulan #{idx + 1}</span>
                <span className="text-[#C218A8] dark:text-[#FF8500] font-semibold">Khusus Putri</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
