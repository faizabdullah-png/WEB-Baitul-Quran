import React from 'react';
import { INSTITUTION_CONFIG } from '../data/initialData';
import { Building2, ShieldCheck, Heart, Users, GraduationCap, CheckCircle } from 'lucide-react';

export const TentangKamiSection: React.FC = () => {
  return (
    <section id="tentang-kami" className="py-20 bg-white dark:bg-[#1C0A26] relative overflow-hidden transition-colors">
      <div id="tentang" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#C218A8] dark:text-[#FFB800] bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Mengenal Lembaga Kami</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#43104F] dark:text-white tracking-tight mb-4">
            Tentang Baitul Qur’an Dzun Nurain Lil Banaat
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C218A8] via-[#FF8500] to-[#FFB800] mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Lembaga pendidikan Islam khusus putri yang mengedepankan kemurnian ajaran Islam berdasarkan Al-Qur'an dan As-Sunnah sesuai pemahaman salafush shalih.
          </p>
        </div>

        {/* Core Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Foundation & Mission Overview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-[#FAF7FC] dark:bg-[#250D33] border border-purple-100 dark:border-purple-900/50 shadow-sm text-left">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-[#64157D] dark:text-purple-300">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400">
                    Naungan Lembaga
                  </span>
                  <h3 className="text-lg font-bold text-[#43104F] dark:text-white">
                    {INSTITUTION_CONFIG.foundation}
                  </h3>
                </div>
              </div>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
                Baitul Qur’an Dzun Nurain Lil Banaat berada di bawah naungan <strong>{INSTITUTION_CONFIG.foundation}</strong>. Yayasan ini secara resmi menaungi penyelenggaraan pendidikan, dakwah, dan kegiatan sosial kemasyarakatan.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#FAF7FC] dark:bg-[#250D33] border border-purple-100 dark:border-purple-900/50 shadow-sm text-left">
              <h4 className="text-base font-bold text-[#43104F] dark:text-white mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#FF8500]" />
                Komitmen Pendidikan Islami Khusus Santriwati
              </h4>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">
                Kami berkomitmen menyediakan lingkungan pendidikan yang aman, asri, dan teratur khusus bagi santri putri. Dengan bimbingan intensif para pengajar berkompeten, santriwati dibimbing untuk mencintai Al-Qur'an, memahami dasar-dasar ilmu agama, serta memiliki kecakapan hidup yang mandiri.
              </p>
            </div>

            {/* Required Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-pink-50 dark:bg-pink-950/60 text-[#C218A8] dark:text-pink-300 border border-pink-200 dark:border-pink-800 flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#C218A8]" />
                <span>Khusus Putri</span>
              </div>

              <div className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-purple-50 dark:bg-purple-950/60 text-[#64157D] dark:text-purple-300 border border-purple-200 dark:border-purple-800 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[#64157D]" />
                <span>SMP & SMA / PKBM</span>
              </div>

              <div className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-amber-50 dark:bg-amber-950/60 text-[#FF8500] dark:text-amber-300 border border-amber-200 dark:border-amber-800 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#FF8500]" />
                <span>Pendidikan Berbasis Al-Qur’an</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-[#64157D] via-[#43104F] to-[#25082D] text-white shadow-xl overflow-hidden text-left">
              {/* Subtle background arabesque geometry */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C218A8]/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#FF8500]/20 rounded-full blur-xl pointer-events-none"></div>

              <div className="relative z-10 space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#FFB800] font-bold">
                    Pilar Utama Lembaga
                  </span>
                  <h3 className="text-2xl font-bold mt-1 mb-2">
                    Karakteristik Pembelajaran
                  </h3>
                  <p className="text-purple-200 text-sm leading-relaxed">
                    Sistem pendidikan dirancang seimbang antara bekal ukhrawi dan kesiapan masa depan santriwati.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#FFB800] mt-0.5">
                      1
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white">Al-Qur'an & As-Sunnah</h5>
                      <p className="text-xs text-purple-200">Landasan beragama yang lurus sesuai tuntunan salafush shalih.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#FFB800] mt-0.5">
                      2
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white">Hafalan & Penguasaan Matan</h5>
                      <p className="text-xs text-purple-200">Target hafalan 30 Juz serta penguasaan matan tajwid Al-Jazari & Tuhfatul Athfal.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-[#FFB800] mt-0.5">
                      3
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white">Bahasa Arab & Keterampilan</h5>
                      <p className="text-xs text-purple-200">Praktik lisan bahasa Arab harian dan life skill kemandirian santriwati.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-purple-200 italic">
                  * Informasi operasional lengkap, jadwal, dan dokumentasi akan terus diperbarui secara resmi.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
