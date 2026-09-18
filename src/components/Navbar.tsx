import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, Sun, Moon, ShieldCheck, ArrowRight } from 'lucide-react';

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
    { label: 'Lokasi', href: '#lokasi' },
    { label: 'Kontak', href: '#kontak' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    let elem = document.getElementById(targetId);
    if (!elem) {
      // Fallback aliases
      if (targetId === 'tentang') elem = document.getElementById('tentang-kami');
      if (targetId === 'tentang-kami') elem = document.getElementById('tentang');
    }
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#1A0A24]/95 backdrop-blur-md shadow-sm border-b border-[#64157D]/10 dark:border-purple-900/40 py-2.5'
          : 'bg-white/70 dark:bg-[#16071F]/70 backdrop-blur-xs py-3.5 border-b border-purple-100/40 dark:border-purple-950/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#beranda');
            }}
            className="focus:outline-none focus:ring-2 focus:ring-[#C218A8] rounded-lg cursor-pointer"
          >
            <BrandLogo size="md" />
          </a>

          {/* Desktop Navigation Links (>= lg / 1024px) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-2.5 py-1.5 text-xs xl:text-sm font-semibold text-[#43104F] dark:text-neutral-200 hover:text-[#C218A8] dark:hover:text-[#FFB800] rounded-lg transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons (>= lg) */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5">
            {/* Dark Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className="p-2 rounded-xl text-neutral-600 dark:text-neutral-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors cursor-pointer"
              aria-label={darkMode ? 'Beralih ke mode terang' : 'Beralih ke mode gelap'}
              title={darkMode ? 'Mode Terang' : 'Mode Gelap'}
            >
              {darkMode ? <Sun className="w-5 h-5 text-[#FFB800]" /> : <Moon className="w-5 h-5 text-[#64157D]" />}
            </button>

            {/* Admin Dashboard trigger */}
            <button
              onClick={handleAdmin}
              className="p-2 rounded-xl text-[#64157D] dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors cursor-pointer"
              title="Portal Admin PPDB"
            >
              <ShieldCheck className="w-5 h-5" />
            </button>

            {/* CTA Daftar Sekarang */}
            <button
              onClick={handleRegister}
              className="inline-flex items-center justify-center gap-1.5 px-4 xl:px-5 py-2.5 rounded-full font-bold text-xs xl:text-sm text-white bg-gradient-to-r from-[#FF8500] to-[#FFB800] hover:from-[#e67700] hover:to-[#e6a600] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Daftar Sekarang</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile & Tablet Controls (< lg / < 1024px) */}
          <div className="flex lg:hidden items-center gap-1.5">
            <button
              onClick={onToggleDarkMode}
              className="p-2 text-neutral-600 dark:text-neutral-300 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/30 cursor-pointer"
              aria-label="Mode Tema"
            >
              {darkMode ? <Sun className="w-5 h-5 text-[#FFB800]" /> : <Moon className="w-5 h-5 text-[#64157D]" />}
            </button>

            <button
              onClick={handleRegister}
              className="px-3 py-1.5 rounded-full font-bold text-xs text-white bg-gradient-to-r from-[#FF8500] to-[#FFB800] shadow-xs cursor-pointer"
            >
              Daftar
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#43104F] dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C218A8] cursor-pointer"
              aria-label="Buka Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu (< lg) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-[#1A0A24]/98 backdrop-blur-xl border-b border-purple-100 dark:border-purple-900/40 px-4 pt-3 pb-6 shadow-xl transition-all">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-[#43104F] dark:text-neutral-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 active:bg-purple-100 cursor-pointer"
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
                className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#FF8500] to-[#FFB800] text-center shadow-md flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <span>Formulir PPDB Online</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleAdmin();
                }}
                className="w-full py-2.5 rounded-xl text-xs font-semibold text-[#64157D] dark:text-purple-300 bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center gap-2 cursor-pointer"
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
