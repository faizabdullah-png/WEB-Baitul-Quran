import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, Sun, Moon, ShieldCheck, ArrowRight, Phone } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenAdmin?: () => void;
  onOpenRegister?: () => void;
  onAdminClick?: () => void;
  onRegisterClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  onToggleDarkMode,
  onOpenAdmin,
  onOpenRegister,
  onAdminClick,
  onRegisterClick,
}) => {
  const handleAdmin = onAdminClick || onOpenAdmin || (() => {});
  const handleRegister = onRegisterClick || onOpenRegister || (() => {});
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang Kami', href: '#tentang-kami' },
    { label: 'Program', href: '#program' },
    { label: 'Fasilitas', href: '#fasilitas' },
    { label: 'Kegiatan', href: '#kegiatan' },
    { label: 'PPDB', href: '#ppdb' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontak', href: '#kontak' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#1A0A24]/95 backdrop-blur-md shadow-sm border-b border-[#64157D]/10 dark:border-purple-900/40 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      {/* Top Banner Information on larger screens */}
      {!isScrolled && (
        <div className="hidden lg:block border-b border-purple-100 dark:border-purple-950/60 pb-2 mb-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs text-neutral-600 dark:text-neutral-300">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 font-medium text-[#C218A8] dark:text-[#FF8500]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                PPDB T.A. 2027/2028: Pendaftaran Mulai 1 Oktober 2026
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">•</span>
              <span>Khusus Santri Putri (SMP & SMA / PKBM)</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-neutral-500 dark:text-neutral-400">
                Komplek BBS 3 Ciwaduk, Cilegon
              </span>
              <button
                onClick={onOpenAdmin}
                className="inline-flex items-center gap-1 text-purple-700 dark:text-purple-300 hover:text-[#C218A8] dark:hover:text-[#FF8500] font-medium transition-colors"
                title="Buka Portal Admin PPDB"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                Portal Admin
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#beranda');
            }}
            className="focus:outline-none focus:ring-2 focus:ring-[#C218A8] rounded-lg"
          >
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-1.5 text-sm font-medium text-[#43104F] dark:text-neutral-200 hover:text-[#C218A8] dark:hover:text-[#FFB800] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-xl text-neutral-600 dark:text-neutral-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
              aria-label={darkMode ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
            >
              {darkMode ? <Sun className="w-5 h-5 text-[#FFB800]" /> : <Moon className="w-5 h-5 text-[#64157D]" />}
            </button>

            {/* Admin trigger button for tablet/desktop */}
            <button
              onClick={handleAdmin}
              className="p-2 rounded-xl text-neutral-600 dark:text-neutral-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors xl:hidden"
              title="Portal Admin PPDB"
            >
              <ShieldCheck className="w-5 h-5 text-[#64157D] dark:text-purple-300" />
            </button>

            {/* CTA Daftar Sekarang */}
            <button
              onClick={handleRegister}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-[#FF8500] to-[#FFB800] hover:from-[#e67700] hover:to-[#e6a600] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Daftar Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              onClick={onToggleDarkMode}
              className="p-2 text-neutral-600 dark:text-neutral-300 rounded-lg"
              aria-label="Mode Tema"
            >
              {darkMode ? <Sun className="w-5 h-5 text-[#FFB800]" /> : <Moon className="w-5 h-5 text-[#64157D]" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#43104F] dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C218A8]"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white/98 dark:bg-[#1A0A24]/98 backdrop-blur-xl border-b border-purple-100 dark:border-purple-900/40 px-4 pt-3 pb-6 shadow-xl transition-all">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#43104F] dark:text-neutral-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 active:bg-purple-100"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-purple-100 dark:border-purple-900/40 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleRegister();
                }}
                className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[#FF8500] to-[#FFB800] text-center shadow-md flex items-center justify-center gap-2"
              >
                <span>Daftar Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleAdmin();
                }}
                className="w-full py-2.5 rounded-xl text-sm font-medium text-[#64157D] dark:text-purple-300 bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Portal Admin PPDB</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
