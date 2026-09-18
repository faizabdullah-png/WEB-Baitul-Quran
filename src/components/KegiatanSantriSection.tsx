import React, { useState } from 'react';
import { GalleryItem } from '../types';
import { Camera, Plus, Trash2, Eye, X, Image as ImageIcon, Sparkles } from 'lucide-react';

interface KegiatanSantriSectionProps {
  galleryItems: GalleryItem[];
  onAddPhoto?: (item: Omit<GalleryItem, 'id'>) => void;
  onDeletePhoto?: (id: string) => void;
}

export const KegiatanSantriSection: React.FC<KegiatanSantriSectionProps> = ({
  galleryItems,
  onAddPhoto,
  onDeletePhoto,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activePreview, setActivePreview] = useState<GalleryItem | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [photoToDelete, setPhotoToDelete] = useState<string | null>(null);

  // Form states for adding photo
  const [photoTitle, setPhotoTitle] = useState('');
  const [photoCategory, setPhotoCategory] = useState('Cooking Class');
  const [photoUrl, setPhotoUrl] = useState('');
  const [photoDesc, setPhotoDesc] = useState('');

  const categories = [
    'ALL',
    'Cooking Class',
    'Daurah Ilmiyah',
    'Rihlah',
    'KBM',
    'Olahraga'
  ];

  const filteredItems =
    selectedCategory === 'ALL'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoTitle || !photoUrl) return;
    if (onAddPhoto) {
      onAddPhoto({
        title: photoTitle.trim(),
        category: photoCategory,
        imageUrl: photoUrl.trim(),
        description: photoDesc.trim() || undefined
      });
    }
    setPhotoTitle('');
    setPhotoUrl('');
    setPhotoDesc('');
    setShowAddModal(false);
  };

  return (
    <section id="kegiatan" className="py-20 bg-[#FAF7FC] dark:bg-[#16071F] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#C218A8] dark:text-[#FFB800] bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Dokumentasi & Aktivitas Santriwati</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#43104F] dark:text-white tracking-tight mb-4">
            Kegiatan Santriwati
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C218A8] via-[#FF8500] to-[#FFB800] mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Ragam aktivitas harian dan berkala yang dirancang untuk memperkaya keilmuan, memperkuat ukhuwah, melatih kemandirian, dan menjaga kebugaran santriwati.
          </p>
        </div>

        {/* Category Filters & Add Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex items-center flex-wrap gap-2 justify-center sm:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#C218A8] to-[#64157D] text-white shadow-md'
                    : 'bg-white dark:bg-[#250D33] text-[#43104F] dark:text-neutral-300 border border-purple-100 dark:border-purple-900/40 hover:bg-purple-50 dark:hover:bg-[#2F1042]'
                }`}
              >
                {cat === 'ALL' ? 'Semua Kegiatan' : cat}
              </button>
            ))}
          </div>

          {onAddPhoto && (
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#FF8500] to-[#FFB800] hover:from-[#e67700] hover:to-[#e6a600] shadow-sm cursor-pointer shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Kelola / Tambah Foto</span>
            </button>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-3xl bg-white dark:bg-[#250D33] border border-purple-100/80 dark:border-purple-900/50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative h-56 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Badge Category */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 dark:bg-black/80 backdrop-blur-xs text-[#C218A8] dark:text-[#FFB800] shadow">
                    {item.category}
                  </span>
                </div>

                {/* Overlay Action */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 opacity-90 group-hover:opacity-100">
                  <button
                    onClick={() => setActivePreview(item)}
                    className="p-2 rounded-xl bg-white/90 dark:bg-neutral-900/90 text-neutral-800 dark:text-white hover:bg-[#C218A8] hover:text-white transition-colors cursor-pointer shadow"
                    title="Lihat Foto Lebih Besar"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  {onDeletePhoto && (
                    <button
                      onClick={() => setPhotoToDelete(item.id)}
                      className="p-2 rounded-xl bg-red-600/90 text-white hover:bg-red-700 transition-colors cursor-pointer shadow"
                      title="Hapus Foto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-[#43104F] dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>
                )}
                <div className="mt-4 pt-3 border-t border-purple-100/60 dark:border-purple-900/30 text-[11px] text-neutral-400">
                  Dokumentasi Pendidikan Santriwati
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Preview */}
        {activePreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-white dark:bg-[#200A2C] rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl relative">
              <button
                onClick={() => setActivePreview(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={activePreview.imageUrl}
                  alt={activePreview.title}
                  className="w-full max-h-[70vh] object-contain"
                />
              </div>
              <div className="p-6 text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-[#C218A8] bg-pink-50 dark:bg-pink-950/60 border border-pink-200 dark:border-pink-800 mb-2">
                  {activePreview.category}
                </span>
                <h3 className="text-xl font-bold text-[#43104F] dark:text-white mb-2">
                  {activePreview.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {activePreview.description || 'Dokumentasi kegiatan resmi santriwati Baitul Qur’an Dzun Nurain Lil Banaat.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Modal Upload / Tambah Foto */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white dark:bg-[#250D33] rounded-3xl p-6 max-w-md w-full shadow-2xl border border-purple-100 dark:border-purple-900">
              <h3 className="text-lg font-bold text-[#43104F] dark:text-white mb-4">
                Tambah Foto Dokumentasi Kegiatan
              </h3>
              <form onSubmit={handleAddSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    Judul Kegiatan
                  </label>
                  <input
                    type="text"
                    required
                    value={photoTitle}
                    onChange={(e) => setPhotoTitle(e.target.value)}
                    placeholder="Contoh: Daurah Tajwid Bersama Ustadzah"
                    className="w-full px-3 py-2 text-sm rounded-xl border border-purple-200 dark:border-purple-800 bg-neutral-50 dark:bg-[#1A0A24] text-[#43104F] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C218A8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    Kategori Kegiatan
                  </label>
                  <select
                    value={photoCategory}
                    onChange={(e) => setPhotoCategory(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-purple-200 dark:border-purple-800 bg-neutral-50 dark:bg-[#1A0A24] text-[#43104F] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C218A8]"
                  >
                    <option value="Cooking Class">Cooking Class</option>
                    <option value="Daurah Ilmiyah">Daurah Ilmiyah</option>
                    <option value="Rihlah">Rihlah</option>
                    <option value="KBM">KBM</option>
                    <option value="Olahraga">Olahraga</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    URL Foto (Gambar)
                  </label>
                  <input
                    type="url"
                    required
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-3 py-2 text-sm rounded-xl border border-purple-200 dark:border-purple-800 bg-neutral-50 dark:bg-[#1A0A24] text-[#43104F] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C218A8]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    Deskripsi Singkat
                  </label>
                  <textarea
                    rows={2}
                    value={photoDesc}
                    onChange={(e) => setPhotoDesc(e.target.value)}
                    placeholder="Keterangan singkat tentang kegiatan..."
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
                    Simpan Foto
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal Konfirmasi Hapus Foto */}
        {photoToDelete && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white dark:bg-[#250D33] rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-purple-100 dark:border-purple-900 text-center">
              <div className="w-12 h-12 rounded-2xl bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto mb-4">
                <Trash2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-2">
                Hapus Foto Kegiatan?
              </h3>
              <p className="text-xs text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                Foto ini akan dihapus dari dokumentasi kegiatan santriwati.
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => setPhotoToDelete(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (onDeletePhoto && photoToDelete) {
                      onDeletePhoto(photoToDelete);
                    }
                    setPhotoToDelete(null);
                  }}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 shadow transition cursor-pointer"
                >
                  Ya, Hapus
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
