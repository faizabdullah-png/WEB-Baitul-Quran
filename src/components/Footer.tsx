import React from 'react';
import { BrandLogo } from './BrandLogo';
import { INSTITUTION_CONFIG } from '../data/initialData';
import { MapPin, Phone, MessageSquare, ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  onAdminClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F0727] text-neutral-300 pt-16 pb-12 border-t border-purple-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-purple-900/40 text-left">
          
          {/* Col 1: Identity */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo inverted={true} />
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm pt-2">
              Lembaga pendidikan Islam khusus putri yang menyelenggarakan pendidikan tingkat SMP dan SMA melalui program PKBM. Berbasis hafalan Al-Qur'an dan ilmu syar'iyyah sesuai pemahaman salafush shalih.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold bg-purple-950/80 text-[#FFB800] border border-purple-800">
                Penerimaan Santri Baru T.A. 2027/2028
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#tentang-kami" className="hover:text-[#FFB800] transition">Tentang Kami</a>
              </li>
              <li>
                <a href="#program" className="hover:text-[#FFB800] transition">Program Unggulan</a>
              </li>
              <li>
                <a href="#kurikulum" className="hover:text-[#FFB800] transition">Kurikulum Terpadu</a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-[#FFB800] transition">Fasilitas Asrama</a>
              </li>
              <li>
                <a href="#kegiatan" className="hover:text-[#FFB800] transition">Kegiatan Santriwati</a>
              </li>
              <li>
                <a href="#ppdb" className="hover:text-[#FFB800] transition">Alur & Syarat PPDB</a>
              </li>
              <li>
                <a href="#biaya" className="hover:text-[#FFB800] transition">Estimasi Biaya</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#FFB800] transition">Kontak & Lokasi</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Address & Contacts */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Kontak & Alamat
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF8500] shrink-0 mt-1" />
                <span>{INSTITUTION_CONFIG.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF8500] shrink-0" />
                <span>{INSTITUTION_CONFIG.contacts[0].number}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#FF8500] shrink-0" />
                <span>{INSTITUTION_CONFIG.contacts[1].number}</span>
              </div>
              <div className="pt-2">
                <a
                  href={INSTITUTION_CONFIG.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#FFB800] hover:underline font-semibold"
                >
                  Buka di Google Maps →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} {INSTITUTION_CONFIG.name}. Seluruh Hak Cipta Dilindungi.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onAdminClick}
              className="text-xs text-purple-400 hover:text-[#FFB800] transition cursor-pointer underline"
            >
              Dashboard Admin PPDB
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-white transition cursor-pointer"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
