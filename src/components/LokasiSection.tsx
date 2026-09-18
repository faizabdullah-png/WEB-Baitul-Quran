import React from 'react';
import { INSTITUTION_CONFIG } from '../data/initialData';
import { MapPin, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';

export const LokasiSection: React.FC = () => {
  return (
    <section id="lokasi" className="py-20 bg-white dark:bg-[#1C0A26] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#64157D] dark:text-[#FFB800] bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#C218A8]" />
            <span>Alamat & Akses Pesantren</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#43104F] dark:text-white tracking-tight mb-4">
            Lokasi Kampus Santriwati
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C218A8] via-[#FF8500] to-[#FFB800] mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Berada di lingkungan perumahan yang tenang, aman, dan kondusif untuk konsentrasi menghafal Al-Qur'an dan menuntut ilmu syar'i.
          </p>
        </div>

        {/* Location Grid: Info Card + Responsive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Info Card */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#FAF7FC] dark:bg-[#250D33] border border-purple-100 dark:border-purple-900/50 shadow-sm flex flex-col justify-between text-left">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C218A8] to-[#64157D] text-[#FFB800] flex items-center justify-center mb-6 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-[#FF8500] block mb-1">
                Alamat Lembaga
              </span>
              <h3 className="text-2xl font-bold text-[#43104F] dark:text-white mb-4 leading-tight">
                {INSTITUTION_CONFIG.name}
              </h3>

              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-200 leading-relaxed mb-6 font-medium">
                {INSTITUTION_CONFIG.address}
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 pt-4 border-t border-purple-100 dark:border-purple-900/40">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Yayasan: {INSTITUTION_CONFIG.foundation}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#C218A8] shrink-0" />
                  <span>Akses mudah dijangkau dari pusat Kota Cilegon</span>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Button */}
            <div className="mt-8 pt-6 border-t border-purple-100 dark:border-purple-900/40">
              <a
                href={INSTITUTION_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#C218A8] to-[#64157D] hover:opacity-95 shadow-md shadow-purple-500/20 transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#FFB800]" />
                <span>Buka Rute di Google Maps</span>
                <ExternalLink className="w-4 h-4 text-white/80" />
              </a>
            </div>
          </div>

          {/* Embedded Responsive Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-purple-100 dark:border-purple-900/50 shadow-sm min-h-[380px] sm:min-h-[440px] bg-neutral-100 dark:bg-neutral-800 relative">
            <iframe
              title="Peta Lokasi Baitul Qur'an Dzun Nurain Lil Banaat"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15867.737751996504!2d106.0274!3d-6.0048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418e38d781b0ff%3A0x28974ee48d1c7f0b!2sKomplek%20BBS%203%2C%20Ciwaduk%2C%20Kec.%20Cilegon%2C%20Kota%20Cilegon%2C%20Banten!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full absolute inset-0"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
