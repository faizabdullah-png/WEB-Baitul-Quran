import React, { useState, useEffect } from 'react';
import { PendaftarPPDB, FasilitasItem, GalleryItem } from './types';
import { INITIAL_FACILITIES, INITIAL_GALLERY, INSTITUTION_CONFIG } from './data/initialData';

// Landing Page Components
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TentangKamiSection } from './components/TentangKamiSection';
import { VisiMisiSection } from './components/VisiMisiSection';
import { ProgramUnggulanSection } from './components/ProgramUnggulanSection';
import { KurikulumSection } from './components/KurikulumSection';
import { FasilitasSection } from './components/FasilitasSection';
import { KegiatanSantriSection } from './components/KegiatanSantriSection';
import { MengapaMemilihKamiSection } from './components/MengapaMemilihKamiSection';
import { AlurPPDBSection } from './components/AlurPPDBSection';
import { PersyaratanSection } from './components/PersyaratanSection';
import { FormPPDBOnline } from './components/FormPPDBOnline';
import { FAQSection } from './components/FAQSection';
import { LokasiSection } from './components/LokasiSection';
import { KontakSection } from './components/KontakSection';
import { Footer } from './components/Footer';

// Admin and Printable Slip
import { AdminDashboard } from './components/AdminDashboard';
import { PrintableAdmissionCard } from './components/PrintableAdmissionCard';

// Floating WhatsApp Widget
import { MessageCircle, X, ExternalLink, ChevronRight, Phone } from 'lucide-react';

export default function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('bqn_theme');
      return saved === 'dark';
    }
    return false;
  });

  // Current view: 'landing' or 'admin'
  const [currentView, setCurrentView] = useState<'landing' | 'admin'>('landing');

  // Facilities & Gallery extensible states
  const [facilities, setFacilities] = useState<FasilitasItem[]>(INITIAL_FACILITIES);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(INITIAL_GALLERY);

  // Print Admission Slip modal
  const [printApplicant, setPrintApplicant] = useState<PendaftarPPDB | null>(null);

  // Floating WhatsApp Quick Menu toggle
  const [showWhatsAppMenu, setShowWhatsAppMenu] = useState(false);

  // Sync dark mode class with DOM
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('bqn_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('bqn_theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleRegisterClick = () => {
    if (currentView === 'admin') {
      setCurrentView('landing');
      setTimeout(() => {
        const formEl = document.getElementById('ppdb-form');
        formEl?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const formEl = document.getElementById('ppdb-form');
      formEl?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddFacility = (newFac: Omit<FasilitasItem, 'id'>) => {
    const item: FasilitasItem = {
      ...newFac,
      id: `fac-${Date.now()}`,
    };
    setFacilities((prev) => [...prev, item]);
  };

  const handleAddPhoto = (newPhoto: Omit<GalleryItem, 'id'>) => {
    const item: GalleryItem = {
      ...newPhoto,
      id: `gal-${Date.now()}`,
    };
    setGalleryItems((prev) => [item, ...prev]);
  };

  const handleDeletePhoto = (id: string) => {
    setGalleryItems((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#FAF7FC] dark:bg-[#16071F] text-neutral-800 dark:text-neutral-100 font-sans transition-colors duration-300">
      
      {/* If Admin View */}
      {currentView === 'admin' ? (
        <AdminDashboard
          onBackToWeb={() => setCurrentView('landing')}
          onOpenPrintModal={(applicant) => setPrintApplicant(applicant)}
        />
      ) : (
        /* Landing Page View */
        <>
          {/* Header Navigation */}
          <Navbar
            darkMode={darkMode}
            onToggleDarkMode={toggleDarkMode}
            onRegisterClick={handleRegisterClick}
            onAdminClick={() => setCurrentView('admin')}
          />

          {/* Main Content Sections */}
          <main>
            {/* 1. Hero */}
            <HeroSection onRegisterClick={handleRegisterClick} />

            {/* 2. Tentang Kami */}
            <TentangKamiSection />

            {/* 3. Visi & Misi */}
            <VisiMisiSection />

            {/* 4. Program Unggulan */}
            <ProgramUnggulanSection />

            {/* 5. Pendidikan & Kurikulum Terintegrasi */}
            <KurikulumSection />

            {/* 6. Fasilitas */}
            <FasilitasSection
              facilities={facilities}
              onAddFacility={handleAddFacility}
            />

            {/* 7. Kegiatan Santriwati */}
            <KegiatanSantriSection
              galleryItems={galleryItems}
              onAddPhoto={handleAddPhoto}
              onDeletePhoto={handleDeletePhoto}
            />

            {/* 8. Mengapa Memilih Kami */}
            <MengapaMemilihKamiSection />

            {/* 9. Alur PPDB */}
            <AlurPPDBSection onRegisterClick={handleRegisterClick} />

            {/* 10. Persyaratan Pendaftaran */}
            <PersyaratanSection onRegisterClick={handleRegisterClick} />

            {/* 11. Form PPDB Online */}
            <FormPPDBOnline
              onSubmitSuccess={(data) => {
                // Keep local updated
              }}
              onOpenPrintModal={(data) => setPrintApplicant(data)}
            />

            {/* 12. FAQ */}
            <FAQSection />

            {/* 13. Lokasi */}
            <LokasiSection />

            {/* 14. Kontak */}
            <KontakSection />
          </main>

          {/* Footer */}
          <Footer onAdminClick={() => setCurrentView('admin')} />
        </>
      )}

      {/* Printable Slip Modal */}
      {printApplicant && (
        <PrintableAdmissionCard
          applicant={printApplicant}
          onClose={() => setPrintApplicant(null)}
        />
      )}

      {/* Floating Interactive WhatsApp Widget (Persistent) */}
      <div className="no-print fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {showWhatsAppMenu && (
          <div className="mb-3 w-80 bg-white dark:bg-[#250D33] rounded-3xl p-5 shadow-2xl border border-purple-100 dark:border-purple-900 animate-in fade-in slide-in-from-bottom-5 text-left">
            <div className="flex items-center justify-between pb-3 border-b border-purple-100 dark:border-purple-900/40 mb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF8500]">
                  Layanan Resmi PPDB
                </span>
                <h4 className="text-sm font-bold text-[#43104F] dark:text-white">
                  Hubungi Admin WhatsApp
                </h4>
              </div>
              <button
                onClick={() => setShowWhatsAppMenu(false)}
                className="p-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-neutral-600 dark:text-neutral-300 mb-3 leading-relaxed">
              Silakan pilih salah satu kontak admin panitia PPDB untuk memulai konsultasi:
            </p>

            <div className="space-y-2">
              {INSTITUTION_CONFIG.contacts.map((contact, idx) => {
                const text = encodeURIComponent(
                  `Assalamu'alaikum Warahmatullahi Wabarakatuh,\nPanitia PPDB Baitul Qur'an Dzun Nurain Lil Banaat,\nSaya ingin menanyakan informasi pendaftaran santri baru T.A. 2027/2028.`
                );
                const url = `https://wa.me/${contact.clean}?text=${text}`;

                return (
                  <a
                    key={contact.number}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl border border-purple-100 dark:border-purple-900/40 bg-purple-50/50 dark:bg-[#1B0A24] hover:bg-purple-100/70 dark:hover:bg-[#341348] transition cursor-pointer group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <MessageCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] font-bold text-[#43104F] dark:text-white block">
                          {contact.label}
                        </span>
                        <span className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                          {contact.number}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-[#C218A8] transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        )}

        <button
          onClick={() => setShowWhatsAppMenu((prev) => !prev)}
          className="flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer"
          title="Chat WhatsApp Panitia PPDB"
          aria-label="Chat WhatsApp Panitia PPDB"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline">WhatsApp Panitia PPDB</span>
          <span className="sm:hidden">WhatsApp</span>
        </button>
      </div>

    </div>
  );
}
