import React from 'react';
import { INSTITUTION_CONFIG } from '../data/initialData';
import { FileCheck, CheckCircle2, DollarSign, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';

interface PersyaratanSectionProps {
  onRegisterClick: () => void;
}

export const PersyaratanSection: React.FC<PersyaratanSectionProps> = ({ onRegisterClick }) => {
  return (
    <section id="persyaratan" className="py-20 bg-white dark:bg-[#1C0A26] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#64157D] dark:text-[#FFB800] bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 mb-3">
            <FileCheck className="w-3.5 h-3.5 text-[#C218A8]" />
            <span>Kriteria Calon Santriwati</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#43104F] dark:text-white tracking-tight mb-4">
            Persyaratan Pendaftaran
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C218A8] via-[#FF8500] to-[#FFB800] mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Ketentuan administrasi dan kualifikasi dasar calon santriwati baru Baitul Qur’an Dzun Nurain Lil Banaat.
          </p>
        </div>

        {/* Content Box */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Requirements List Card */}
          <div className="md:col-span-7 p-8 rounded-3xl bg-[#FAF7FC] dark:bg-[#250D33] border border-purple-100 dark:border-purple-900/50 shadow-sm flex flex-col justify-between text-left">
            <div>
              <h3 className="text-xl font-bold text-[#43104F] dark:text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#C218A8]" />
                Kualifikasi Pendaftar
              </h3>

              <div className="space-y-4">
                {INSTITUTION_CONFIG.admissionRequirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-pink-100 dark:bg-pink-950/60 text-[#C218A8] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <p className="text-sm sm:text-base font-medium text-neutral-700 dark:text-neutral-200">
                      {req}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-purple-100 dark:border-purple-900/40">
              <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Dokumen pendukung (KK, Akta Lahir, Foto) dapat diunggah melalui formulir online.</span>
              </div>
            </div>
          </div>

          {/* Fee & CTA Card */}
          <div className="md:col-span-5 p-8 rounded-3xl bg-gradient-to-br from-[#64157D] to-[#43104F] text-white shadow-xl flex flex-col justify-between text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF8500]/20 rounded-full blur-2xl pointer-events-none"></div>

            <div className="relative z-10">
              <span className="text-xs uppercase tracking-widest text-[#FFB800] font-bold block mb-1">
                Biaya Pendaftaran & Tes
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                {INSTITUTION_CONFIG.ppdb.registrationFeeFormatted}
              </div>
              <p className="text-xs text-purple-200 leading-relaxed mb-6">
                Mencakup biaya administrasi pendaftaran, pengelolaan berkas, dan pelaksanaan tes seleksi santriwati.
              </p>

              <div className="space-y-2.5 text-xs text-purple-100 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />
                  <span>Proses seleksi Al-Qur'an & wawancara</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />
                  <span>Bukti pendaftaran resmi diterbitkan</span>
                </div>
              </div>
            </div>

            <button
              onClick={onRegisterClick}
              className="relative z-10 w-full py-3.5 px-6 rounded-2xl font-bold text-sm text-[#43104F] bg-gradient-to-r from-[#FF8500] to-[#FFB800] hover:from-[#e67700] hover:to-[#e6a600] shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform transform hover:-translate-y-0.5"
            >
              <span>Isi Formulir Online Sekarang</span>
              <ArrowRight className="w-4 h-4 text-[#43104F]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
