import React, { useState } from 'react';
import { FasilitasItem } from '../types';
import {
  Wind,
  Bed,
  Archive,
  Shirt,
  BookOpen,
  Utensils,
  GraduationCap,
  FileCheck,
  Sparkles,
  PlusCircle,
  Building,
  Check
} from 'lucide-react';

interface FasilitasSectionProps {
  facilities: FasilitasItem[];
  onAddFacility?: (item: Omit<FasilitasItem, 'id'>) => void;
}

export const FasilitasSection: React.FC<FasilitasSectionProps> = ({
  facilities,
  onAddFacility,
}) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wind':
        return <Wind className="w-6 h-6" />;
      case 'Bed':
        return <Bed className="w-6 h-6" />;
      case 'Archive':
        return <Archive className="w-6 h-6" />;
      case 'Shirt':
        return <Shirt className="w-6 h-6" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6" />;
      default:
        return <Building className="w-6 h-6" />;
    }
  };

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;
    if (onAddFacility) {
      onAddFacility({
        title: newTitle.trim(),
        description: newDesc.trim() || 'Fasilitas penunjang kenyamanan santriwati.',
        iconName: 'Building'
      });
    }
    setNewTitle('');
    setNewDesc('');
    setShowAddModal(false);
  };

  return (
    <section id="fasilitas" className="py-20 bg-white dark:bg-[#1C0A26] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#C218A8] dark:text-[#FFB800] bg-pink-50 dark:bg-pink-950/60 border border-pink-200 dark:border-pink-800 mb-3">
            <Building className="w-3.5 h-3.5" />
            <span>Kenyamanan & Sarana Santriwati</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#43104F] dark:text-white tracking-tight mb-4">
            Fasilitas Lembaga
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C218A8] via-[#FF8500] to-[#FFB800] mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Sarana dan prasarana yang disiapkan dengan teliti untuk mendukung proses menghafal, belajar, dan kenyamanan hidup di asrama.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              className="group p-6 rounded-2xl bg-[#FAF7FC] dark:bg-[#250D33] border border-purple-100/80 dark:border-purple-900/40 hover:border-[#C218A8]/40 dark:hover:border-[#FFB800]/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#64157D] to-[#C218A8] text-[#FFB800] flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  {renderIcon(fac.iconName)}
                </div>
                <h3 className="text-base font-bold text-[#43104F] dark:text-white mb-2 leading-snug">
                  {fac.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {fac.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-purple-100/60 dark:border-purple-900/30 flex items-center gap-1.5 text-[11px] text-[#C218A8] dark:text-[#FF8500] font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>Tersedia untuk santriwati</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on Extensibility / Admin Quick Add */}
        <div className="mt-12 p-4 rounded-2xl bg-purple-50/70 dark:bg-[#200A2C]/70 border border-purple-100 dark:border-purple-900/40 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            * Informasi fasilitas dapat terus bertambah sesuai perkembangan sarana lembaga di asrama.
          </p>
          {onAddFacility && (
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#64157D] dark:text-purple-300 bg-white dark:bg-[#2D0F3D] border border-purple-200 dark:border-purple-800 hover:bg-purple-50 shrink-0 shadow-sm cursor-pointer"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Tambah Fasilitas (Admin)</span>
            </button>
          )}
        </div>

        {/* Modal Tambah Fasilitas */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white dark:bg-[#250D33] rounded-3xl p-6 max-w-md w-full shadow-2xl border border-purple-100 dark:border-purple-900">
              <h3 className="text-lg font-bold text-[#43104F] dark:text-white mb-4">
                Tambah Data Fasilitas Baru
              </h3>
              <form onSubmit={handleAddSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    Nama Fasilitas
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Contoh: Perpustakaan Mini Santri"
                    className="w-full px-3 py-2 text-sm rounded-xl border border-purple-200 dark:border-purple-800 bg-neutral-50 dark:bg-[#1A0A24] text-[#43104F] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C218A8]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    Deskripsi Singkat
                  </label>
                  <textarea
                    rows={3}
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    placeholder="Koleksi kitab dan buku bacaan islami penunjang pembelajaran."
                    className="w-full px-3 py-2 text-sm rounded-xl border border-purple-200 dark:border-purple-800 bg-neutral-50 dark:bg-[#1A0A24] text-[#43104F] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C218A8]"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#C218A8] to-[#64157D] shadow cursor-pointer"
                  >
                    Simpan Fasilitas
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
