import React from 'react';
import { ClipboardList, Wallet, FileCheck2, UserCheck, CheckCircle, Calendar, Users, ArrowRight } from 'lucide-react';

interface AlurPPDBSectionProps {
  onRegisterClick: () => void;
}

export const AlurPPDBSection: React.FC<AlurPPDBSectionProps> = ({ onRegisterClick }) => {
  const steps = [
    {
      step: "01",
      title: "Pengisian Formulir Online",
      desc: "Calon santriwati mengisi formulir pendaftaran PPDB online secara lengkap dan melampirkan berkas identitas.",
      icon: <ClipboardList className="w-6 h-6 text-[#C218A8]" />
    },
    {
      step: "02",
      title: "Biaya Pendaftaran & Tes",
      desc: "Melakukan pembayaran biaya pendaftaran dan tes seleksi sebesar Rp300.000 sesuai petunjuk konfirmasi.",
      icon: <Wallet className="w-6 h-6 text-[#FF8500]" />
    },
    {
      step: "03",
      title: "Verifikasi Berkas",
      desc: "Panitia PPDB memverifikasi kelengkapan dokumen administrasi (KK, Akta Kelahiran, dan Foto).",
      icon: <FileCheck2 className="w-6 h-6 text-[#64157D] dark:text-purple-300" />
    },
    {
      step: "04",
      title: "Pelaksanaan Tes Seleksi",
      desc: "Calon santriwati mengikuti tes kelancaran membaca Al-Qur'an, observasi hafalan, serta wawancara santri & orang tua.",
      icon: <UserCheck className="w-6 h-6 text-[#C218A8]" />
    },
    {
      step: "05",
      title: "Pengumuman & Daftar Ulang",
      desc: "Pengumuman hasil seleksi oleh panitia dan penyelesaian proses daftar ulang persiapan masuk asrama.",
      icon: <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
    }
  ];

  return (
    <section id="ppdb" className="py-20 bg-[#FAF7FC] dark:bg-[#16071F] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Section PPDB 2027/2028 */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#64157D] via-[#43104F] to-[#25082D] text-white shadow-xl mb-16 relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C218A8]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-[#FF8500]/20 rounded-full blur-2xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FF8500] text-white mb-4 shadow">
              <Calendar className="w-3.5 h-3.5" />
              <span>TAHUN AJARAN 2027/2028</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Penerimaan Santri Baru (PPDB)
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base text-purple-200 mb-8">
              <span className="flex items-center gap-1.5 font-medium text-white">
                <Calendar className="w-4 h-4 text-[#FFB800]" />
                Pendaftaran Mulai: <strong>1 Oktober 2026</strong>
              </span>
              <span className="text-purple-400">•</span>
              <span className="flex items-center gap-1.5 font-medium text-white">
                <Users className="w-4 h-4 text-[#FFB800]" />
                Khusus: <strong>Santri Putri</strong>
              </span>
              <span className="text-purple-400">•</span>
              <span className="font-medium text-white">
                Jenjang: <strong>SMP & SMA / PKBM</strong>
              </span>
            </div>

            <button
              onClick={onRegisterClick}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base text-[#43104F] bg-gradient-to-r from-[#FF8500] to-[#FFB800] hover:from-[#e67700] hover:to-[#e6a600] shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>DAFTAR SEKARANG</span>
              <ArrowRight className="w-5 h-5 text-[#43104F]" />
            </button>
          </div>
        </div>

        {/* Alur Pendaftaran Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C218A8] dark:text-[#FFB800]">
            Panduan Calon Wali Santri
          </span>
          <h3 className="text-3xl font-extrabold text-[#43104F] dark:text-white mt-1 mb-3">
            Alur Pendaftaran Santri Baru
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300">
            5 tahapan terstruktur mulai dari pendaftaran online hingga penyambutan santriwati di asrama.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-white dark:bg-[#250D33] border border-purple-100 dark:border-purple-900/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-neutral-200 dark:text-purple-900/80">
                    {item.step}
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#43104F] dark:text-white mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-purple-100/60 dark:border-purple-900/30 text-[11px] font-semibold text-[#C218A8] dark:text-[#FF8500]">
                Tahap {idx + 1}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
