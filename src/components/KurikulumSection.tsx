import React from 'react';
import { Layers, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';

export const KurikulumSection: React.FC = () => {
  const integrationPillars = [
    {
      title: "Pendidikan Al-Qur’an & Hafalan",
      desc: "Bimbingan tahsinul qira'ah, tahfidz 30 juz, serta mutaba'ah hafalan berkala dengan sanad matan tajwid."
    },
    {
      title: "Ilmu Syar’iyyah Berdalil",
      desc: "Kajian aqidah ahlussunnah, fiqih ibadah, adab, dan tafsir berlandaskan pemahaman salafush shalih."
    },
    {
      title: "Praktik Bahasa Arab Harian",
      desc: "Pembiasaan percakapan (muhadatsah) dan penguasaan kosa kata praktis dalam interaksi santriwati."
    },
    {
      title: "Pendidikan Akademik Formal",
      desc: "Penyelenggaraan kurikulum akademik untuk jenjang SMP dan SMA melalui program Pusat Kegiatan Belajar Masyarakat (PKBM)."
    },
    {
      title: "Pendidikan Akhlak & Karakter",
      desc: "Penempaan adab islami, kesantunan, berbakti kepada orang tua, dan ukhuwah islamiyyah."
    },
    {
      title: "Keterampilan Kehidupan (Life Skills)",
      desc: "Pembekalan kecakapan praktis seperti cooking class, kedisiplinan asrama, dan kemandirian harian."
    }
  ];

  return (
    <section id="kurikulum" className="py-20 bg-[#FAF7FC] dark:bg-[#16071F] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#64157D] dark:text-[#FFB800] bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Jenjang & Struktur Kurikulum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#43104F] dark:text-white tracking-tight mb-4">
            Pendidikan yang Terintegrasi
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C218A8] via-[#FF8500] to-[#FFB800] mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Menghubungkan pendidikan Al-Qur'an, ilmu syar'iyyah, dan pendidikan akademik formal secara harmonis dalam lingkungan asrama khusus putri.
          </p>
        </div>

        {/* Level Highlight Cards (SMP & SMA/PKBM) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 max-w-4xl mx-auto">
          {/* SMP */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#250D33] border border-purple-100 dark:border-purple-900/50 shadow-md text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C218A8]/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="w-12 h-12 rounded-2xl bg-pink-100 dark:bg-pink-950/60 text-[#C218A8] flex items-center justify-center mb-5">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#C218A8] bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-800 mb-2">
              Jenjang Pendidikan Dasar Menengah
            </div>
            <h3 className="text-2xl font-extrabold text-[#43104F] dark:text-white mb-3">
              Tingkat SMP
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              Dikhususkan bagi lulusan SD/sederajat. Menekankan penguatan bacaan tartil, pondasi hafalan Al-Qur'an, matan dasar, dasar bahasa Arab, serta muatan akademik kurikulum SMP.
            </p>
            <ul className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C218A8]" />
                <span>Usia santriwati lulusan SD/MI sederajat</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C218A8]" />
                <span>Diutamakan sudah memiliki hafalan Juz 30</span>
              </li>
            </ul>
          </div>

          {/* SMA / PKBM */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#250D33] border border-purple-100 dark:border-purple-900/50 shadow-md text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF8500]/10 rounded-full blur-xl pointer-events-none"></div>
            <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-[#FF8500] flex items-center justify-center mb-5">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#FF8500] bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 mb-2">
              Jenjang Pendidikan Menengah Atas
            </div>
            <h3 className="text-2xl font-extrabold text-[#43104F] dark:text-white mb-3">
              Tingkat SMA / PKBM
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
              Diselenggarakan melalui program Pusat Kegiatan Belajar Masyarakat (PKBM) dengan kesempatan mengikuti asesmen kesetaraan resmi Paket C, pendalaman ilmu syar'iyyah, dan kematangan adab.
            </p>
            <ul className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF8500]" />
                <span>Lulusan SMP/MTs sederajat</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF8500]" />
                <span>Fokus mutqin 30 Juz & matan Al-Jazari</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 6 Integrated Pillars Grid */}
        <div className="max-w-5xl mx-auto text-left">
          <h4 className="text-xl font-bold text-[#43104F] dark:text-white mb-6 text-center">
            Pilar Integrasi Pendidikan
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationPillars.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-[#200A2C] border border-purple-100 dark:border-purple-900/40 shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#C218A8] to-[#FF8500] text-white flex items-center justify-center text-xs font-bold mb-3">
                  0{idx + 1}
                </div>
                <h5 className="text-base font-bold text-[#43104F] dark:text-white mb-2">
                  {p.title}
                </h5>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
