import React, { useState, useEffect } from 'react';
import { PendaftarPPDB, StatusPendaftaran, PPDBStats, JenjangPendidikan } from '../types';
import {
  ShieldCheck,
  Search,
  Filter,
  Download,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  Printer,
  ArrowLeft,
  Users,
  GraduationCap,
  FileSpreadsheet,
  AlertCircle,
  X,
  Phone,
  RefreshCw,
  Sun,
  Moon
} from 'lucide-react';

interface AdminDashboardProps {
  onBackToWeb: () => void;
  onOpenPrintModal: (applicant: PendaftarPPDB) => void;
  darkMode?: boolean;
  onToggleDarkMode?: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  onBackToWeb,
  onOpenPrintModal,
  darkMode = false,
  onToggleDarkMode,
}) => {
  const [applicants, setApplicants] = useState<PendaftarPPDB[]>([]);
  const [stats, setStats] = useState<PPDBStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJenjang, setSelectedJenjang] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');

  // Detail Modal
  const [selectedApplicant, setSelectedApplicant] = useState<PendaftarPPDB | null>(null);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  // In-app Delete Confirmation Dialog (Avoids window.confirm)
  const [deleteTarget, setDeleteTarget] = useState<PendaftarPPDB | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchApplicants = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/ppdb');
      if (res.ok) {
        const data = await res.json();
        setApplicants(data);
      }
      const statsRes = await fetch('/api/ppdb/stats');
      if (statsRes.ok) {
        const s = await statsRes.json();
        setStats(s);
      }
    } catch (err) {
      console.error('Failed to load PPDB data', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, []);

  const handleUpdateStatus = async (id: string, newStatus: StatusPendaftaran) => {
    setIsUpdatingStatus(true);
    try {
      const res = await fetch(`/api/ppdb/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ statusPendaftaran: newStatus, status: newStatus }),
      });

      if (res.ok) {
        const updated: PendaftarPPDB = await res.json();
        setApplicants((prev) => prev.map((a) => (a.id === id ? updated : a)));
        if (selectedApplicant && selectedApplicant.id === id) {
          setSelectedApplicant(updated);
        }
        // Refresh stats
        fetch('/api/ppdb/stats')
          .then((r) => r.json())
          .then((s) => setStats(s))
          .catch(() => {});
      }
    } catch (err) {
      console.error('Failed to update status', err);
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const confirmDelete = async () => {
    if (!deleteTarget) return;
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/ppdb/${deleteTarget.id}`, { method: 'DELETE' });
      if (res.ok) {
        setApplicants((prev) => prev.filter((a) => a.id !== deleteTarget.id));
        if (selectedApplicant && selectedApplicant.id === deleteTarget.id) {
          setSelectedApplicant(null);
        }
        setDeleteTarget(null);
        // Refresh stats
        fetch('/api/ppdb/stats')
          .then((r) => r.json())
          .then((s) => setStats(s))
          .catch(() => {});
      }
    } catch (err) {
      console.error('Failed to delete applicant', err);
    } finally {
      setIsDeleting(false);
    }
  };

  // Filtered List
  const filteredApplicants = applicants.filter((a) => {
    const q = searchQuery.toLowerCase();
    const matchQuery =
      !searchQuery ||
      a.namaLengkap?.toLowerCase().includes(q) ||
      a.registrationId?.toLowerCase().includes(q) ||
      a.nik?.includes(q) ||
      (a.asalSekolah && a.asalSekolah.toLowerCase().includes(q));

    const matchJenjang = selectedJenjang === 'ALL' || a.jenjang === selectedJenjang;
    const matchStatus = selectedStatus === 'ALL' || a.statusPendaftaran === selectedStatus;

    return matchQuery && matchJenjang && matchStatus;
  });

  const getStatusBadge = (status: StatusPendaftaran | string) => {
    switch (status) {
      case 'Diterima':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
            Diterima
          </span>
        );
      case 'Lulus Administrasi':
      case 'Diverifikasi':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-100 text-[#64157D] dark:bg-purple-950/60 dark:text-purple-300">
            {status}
          </span>
        );
      case 'Mengikuti Tes':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
            Mengikuti Tes
          </span>
        );
      case 'Ditolak':
      case 'Tidak Diterima':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300">
            {status}
          </span>
        );
      case 'Daftar Ulang':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300">
            Daftar Ulang
          </span>
        );
      case 'Menunggu Verifikasi':
      default:
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
            Menunggu Verifikasi
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7FC] dark:bg-[#16071F] text-neutral-800 dark:text-neutral-100 p-4 sm:p-6 lg:p-8 transition-colors">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white dark:bg-[#250D33] p-5 rounded-3xl border border-purple-100 dark:border-purple-900/50 shadow-sm">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToWeb}
              className="p-2.5 rounded-xl border border-purple-200 dark:border-purple-800 hover:bg-purple-50 dark:hover:bg-[#341348] transition cursor-pointer text-[#64157D] dark:text-purple-300"
              title="Kembali ke Landing Page"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <span className="text-[11px] font-bold text-[#C218A8] uppercase tracking-wider block">
                Sistem PPDB 2027/2028
              </span>
              <h1 className="text-xl sm:text-2xl font-extrabold text-[#43104F] dark:text-white">
                Dashboard Manajemen Pendaftar
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {onToggleDarkMode && (
              <button
                onClick={onToggleDarkMode}
                className="p-2 rounded-xl text-neutral-600 dark:text-neutral-300 bg-neutral-100 dark:bg-[#1B0A24] hover:bg-neutral-200 transition cursor-pointer"
                title="Ganti Tema"
              >
                {darkMode ? <Sun className="w-4 h-4 text-[#FFB800]" /> : <Moon className="w-4 h-4 text-[#64157D]" />}
              </button>
            )}

            <button
              onClick={fetchApplicants}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-neutral-700 dark:text-neutral-200 bg-neutral-100 dark:bg-[#1B0A24] hover:bg-neutral-200 transition cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              <span>Refresh</span>
            </button>

            <a
              href="/api/ppdb/export/csv"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#64157D] to-[#C218A8] hover:opacity-90 shadow-sm transition cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV</span>
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        {stats && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white dark:bg-[#250D33] border border-purple-100 dark:border-purple-900/40 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-950/60 text-[#C218A8] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 block">Total Pendaftar</span>
                <span className="text-2xl font-black text-[#43104F] dark:text-white">{stats.total}</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#250D33] border border-purple-100 dark:border-purple-900/40 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-[#64157D] dark:text-purple-300 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 block">Jenjang SMP</span>
                <span className="text-2xl font-black text-[#43104F] dark:text-white">{stats.smp}</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#250D33] border border-purple-100 dark:border-purple-900/40 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-[#FF8500] flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 block">SMA / PKBM</span>
                <span className="text-2xl font-black text-[#43104F] dark:text-white">
                  {stats.sma ?? stats.smaPkbm ?? 0}
                </span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#250D33] border border-purple-100 dark:border-purple-900/40 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 block">Diterima / Lolos</span>
                <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  {stats.byStatus?.['Diterima'] ?? stats.diterima ?? 0}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="bg-white dark:bg-[#250D33] p-4 sm:p-5 rounded-3xl border border-purple-100 dark:border-purple-900/40 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama santri, no. registrasi, NIK, atau asal sekolah..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border border-purple-100 dark:border-purple-800 bg-purple-50/40 dark:bg-[#1B0A24] focus:ring-2 focus:ring-[#C218A8] outline-none text-[#43104F] dark:text-white"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 bg-purple-50/50 dark:bg-[#1B0A24] px-3 py-1.5 rounded-xl border border-purple-100 dark:border-purple-900/40 text-xs">
              <Filter className="w-3.5 h-3.5 text-neutral-400" />
              <select
                value={selectedJenjang}
                onChange={(e) => setSelectedJenjang(e.target.value)}
                className="bg-transparent font-medium text-[#43104F] dark:text-white outline-none cursor-pointer"
              >
                <option value="ALL">Semua Jenjang</option>
                <option value="SMP">SMP</option>
                <option value="SMA / PKBM">SMA / PKBM</option>
              </select>
            </div>

            <div className="flex items-center gap-1.5 bg-purple-50/50 dark:bg-[#1B0A24] px-3 py-1.5 rounded-xl border border-purple-100 dark:border-purple-900/40 text-xs">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="bg-transparent font-medium text-[#43104F] dark:text-white outline-none cursor-pointer"
              >
                <option value="ALL">Semua Status</option>
                <option value="Menunggu Verifikasi">Menunggu Verifikasi</option>
                <option value="Diverifikasi">Diverifikasi</option>
                <option value="Lulus Administrasi">Lulus Administrasi</option>
                <option value="Mengikuti Tes">Mengikuti Tes</option>
                <option value="Diterima">Diterima</option>
                <option value="Tidak Diterima">Tidak Diterima</option>
                <option value="Daftar Ulang">Daftar Ulang</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table Data */}
        <div className="bg-white dark:bg-[#250D33] rounded-3xl border border-purple-100 dark:border-purple-900/40 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-purple-50/70 dark:bg-[#1D0828] text-neutral-600 dark:text-neutral-300 font-semibold border-b border-purple-100 dark:border-purple-900/40">
                <tr>
                  <th className="py-3.5 px-4">No. Registrasi</th>
                  <th className="py-3.5 px-4">Nama Lengkap</th>
                  <th className="py-3.5 px-4">Jenjang</th>
                  <th className="py-3.5 px-4">Hafalan</th>
                  <th className="py-3.5 px-4">Kontak Ortu</th>
                  <th className="py-3.5 px-4">Tgl Daftar</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100/60 dark:divide-purple-900/30">
                {isLoading ? (
                  <tr>
                    <td colSpan={8} className="py-12 text-center text-neutral-400">
                      <RefreshCw className="w-6 h-6 animate-spin mx-auto mb-2 text-[#C218A8]" />
                      <span>Memuat data pendaftar...</span>
                    </td>
                  </tr>
                ) : filteredApplicants.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-12 text-center text-neutral-400">
                      <Users className="w-8 h-8 mx-auto mb-2 text-neutral-300" />
                      <p className="font-semibold text-neutral-600 dark:text-neutral-300">
                        Tidak ada data pendaftar yang cocok.
                      </p>
                      {(searchQuery || selectedJenjang !== 'ALL' || selectedStatus !== 'ALL') && (
                        <button
                          onClick={() => {
                            setSearchQuery('');
                            setSelectedJenjang('ALL');
                            setSelectedStatus('ALL');
                          }}
                          className="mt-3 text-xs text-[#C218A8] font-bold hover:underline cursor-pointer"
                        >
                          Reset Semua Filter
                        </button>
                      )}
                    </td>
                  </tr>
                ) : (
                  filteredApplicants.map((app) => (
                    <tr
                      key={app.id}
                      className="hover:bg-purple-50/40 dark:hover:bg-[#2F1042]/50 transition-colors"
                    >
                      <td className="py-3.5 px-4 font-mono font-bold text-[#C218A8] dark:text-[#FFB800] whitespace-nowrap">
                        {app.registrationId}
                      </td>
                      <td className="py-3.5 px-4 font-medium text-[#43104F] dark:text-white">
                        <div>{app.namaLengkap}</div>
                        <div className="text-[11px] text-neutral-400">Asal: {app.asalSekolah || '-'}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-semibold text-neutral-700 dark:text-neutral-200">
                          {app.jenjang}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span
                          className={`font-semibold ${
                            app.hafalJuz30 === 'Ya' ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'
                          }`}
                        >
                          {app.hafalJuz30} ({app.hafalanQuran || 'Juz 30'})
                        </span>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <a
                          href={`https://wa.me/${(app.noWhatsAppOrangTua || app.noWhatsApp).replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[#64157D] dark:text-purple-300 hover:underline cursor-pointer font-mono text-xs"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>{app.noWhatsAppOrangTua || app.noWhatsApp}</span>
                        </a>
                      </td>
                      <td className="py-3.5 px-4 text-neutral-500 whitespace-nowrap text-xs">
                        {app.tanggalDaftar}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {getStatusBadge(app.statusPendaftaran)}
                      </td>
                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <div className="flex items-center justify-center gap-1.5">
                          <button
                            onClick={() => setSelectedApplicant(app)}
                            className="p-1.5 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-purple-100 dark:hover:bg-purple-950 transition cursor-pointer"
                            title="Detail Pendaftar"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => onOpenPrintModal(app)}
                            className="p-1.5 rounded-lg text-[#64157D] dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-950 transition cursor-pointer"
                            title="Cetak Kartu Registrasi"
                          >
                            <Printer className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setDeleteTarget(app)}
                            className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/50 transition cursor-pointer"
                            title="Hapus Data"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* In-App Delete Confirmation Modal (Replaces window.confirm) */}
        {deleteTarget && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <div className="bg-white dark:bg-[#250D33] rounded-3xl max-w-md w-full p-6 shadow-2xl border border-purple-100 dark:border-purple-900 text-left">
              <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 flex items-center justify-center mb-4">
                <Trash2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#43104F] dark:text-white mb-2">
                Hapus Data Pendaftar?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mb-6 leading-relaxed">
                Apakah Anda yakin ingin menghapus data calon santriwati{' '}
                <strong className="text-neutral-900 dark:text-white">{deleteTarget.namaLengkap}</strong>{' '}
                (No. Reg: {deleteTarget.registrationId})? Tindakan ini tidak dapat dibatalkan.
              </p>
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setDeleteTarget(null)}
                  disabled={isDeleting}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer"
                >
                  Batal
                </button>
                <button
                  onClick={confirmDelete}
                  disabled={isDeleting}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition cursor-pointer disabled:opacity-50"
                >
                  {isDeleting ? 'Menghapus...' : 'Ya, Hapus Data'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal Detail Pendaftar */}
        {selectedApplicant && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
            <div className="bg-white dark:bg-[#250D33] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-purple-100 dark:border-purple-900 text-left relative my-8 max-h-[90vh] overflow-y-auto">
              
              <div className="flex items-center justify-between pb-4 border-b border-purple-100 dark:border-purple-900/40 mb-6 sticky top-0 bg-white dark:bg-[#250D33] z-10">
                <div>
                  <span className="text-xs font-mono font-bold text-[#C218A8] dark:text-[#FFB800]">
                    {selectedApplicant.registrationId}
                  </span>
                  <h3 className="text-xl font-bold text-[#43104F] dark:text-white">
                    {selectedApplicant.namaLengkap}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenPrintModal(selectedApplicant)}
                    className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-[#64157D] dark:text-purple-300 hover:bg-purple-100 transition cursor-pointer"
                    title="Cetak Bukti"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedApplicant(null)}
                    className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Status Manager */}
              <div className="p-4 rounded-2xl bg-purple-50/70 dark:bg-[#1B0A24] border border-purple-100 dark:border-purple-900/40 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-neutral-500 block">Status Saat Ini</span>
                  <div className="mt-1">{getStatusBadge(selectedApplicant.statusPendaftaran)}</div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300">Ubah:</span>
                  <select
                    value={selectedApplicant.statusPendaftaran}
                    onChange={(e) => handleUpdateStatus(selectedApplicant.id, e.target.value as StatusPendaftaran)}
                    disabled={isUpdatingStatus}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold border border-purple-200 dark:border-purple-800 bg-white dark:bg-[#2D0F3D] text-[#43104F] dark:text-white focus:outline-none cursor-pointer"
                  >
                    <option value="Menunggu Verifikasi">Menunggu Verifikasi</option>
                    <option value="Diverifikasi">Diverifikasi</option>
                    <option value="Lulus Administrasi">Lulus Administrasi</option>
                    <option value="Mengikuti Tes">Mengikuti Tes</option>
                    <option value="Diterima">Diterima</option>
                    <option value="Tidak Diterima">Tidak Diterima</option>
                    <option value="Ditolak">Ditolak</option>
                    <option value="Daftar Ulang">Daftar Ulang</option>
                  </select>
                </div>
              </div>

              {/* Data Detail Fields */}
              <div className="space-y-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <strong className="block text-neutral-400 text-[11px]">Jenjang Pilihan</strong>
                    <span className="font-semibold text-neutral-900 dark:text-white">{selectedApplicant.jenjang}</span>
                  </div>
                  <div>
                    <strong className="block text-neutral-400 text-[11px]">Asal Sekolah</strong>
                    <span>{selectedApplicant.asalSekolah || '-'}</span>
                  </div>
                  <div>
                    <strong className="block text-neutral-400 text-[11px]">NIK / NISN</strong>
                    <span>{selectedApplicant.nik} / {selectedApplicant.nisn || '-'}</span>
                  </div>
                  <div>
                    <strong className="block text-neutral-400 text-[11px]">Tempat, Tgl Lahir</strong>
                    <span>{selectedApplicant.tempatLahir}, {selectedApplicant.tanggalLahir}</span>
                  </div>
                  <div>
                    <strong className="block text-neutral-400 text-[11px]">Hafalan Al-Qur’an</strong>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      {selectedApplicant.hafalanQuran || '-'} (Hafal Juz 30: {selectedApplicant.hafalJuz30})
                    </span>
                  </div>
                  <div>
                    <strong className="block text-neutral-400 text-[11px]">Kemampuan Baca</strong>
                    <span>{selectedApplicant.kemampuanQuran || '-'}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-purple-100 dark:border-purple-900/40">
                  <h4 className="font-bold text-xs text-[#43104F] dark:text-white mb-2">Kontak & Alamat</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <strong className="block text-neutral-400 text-[11px]">WhatsApp Santri</strong>
                      <span>{selectedApplicant.noWhatsApp || '-'}</span>
                    </div>
                    <div>
                      <strong className="block text-neutral-400 text-[11px]">Email</strong>
                      <span>{selectedApplicant.email || '-'}</span>
                    </div>
                    <div className="sm:col-span-2">
                      <strong className="block text-neutral-400 text-[11px]">Alamat Domisili</strong>
                      <span>{selectedApplicant.alamat}, {selectedApplicant.kelurahan}, {selectedApplicant.kecamatan}, {selectedApplicant.kota}, {selectedApplicant.provinsi}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-purple-100 dark:border-purple-900/40">
                  <h4 className="font-bold text-xs text-[#43104F] dark:text-white mb-2">Data Orang Tua / Wali</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <strong className="block text-neutral-400 text-[11px]">Nama Ayah</strong>
                      <span>{selectedApplicant.namaAyah} ({selectedApplicant.pekerjaanAyah || '-'})</span>
                    </div>
                    <div>
                      <strong className="block text-neutral-400 text-[11px]">Nama Ibu</strong>
                      <span>{selectedApplicant.namaIbu} ({selectedApplicant.pekerjaanIbu || '-'})</span>
                    </div>
                    <div className="col-span-2">
                      <strong className="block text-neutral-400 text-[11px]">WhatsApp Orang Tua</strong>
                      <a
                        href={`https://wa.me/${selectedApplicant.noWhatsAppOrangTua.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#64157D] dark:text-purple-300 font-bold hover:underline inline-flex items-center gap-1 cursor-pointer font-mono"
                      >
                        <Phone className="w-3 h-3" />
                        <span>{selectedApplicant.noWhatsAppOrangTua}</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Uploaded Documents Status */}
                <div className="pt-3 border-t border-purple-100 dark:border-purple-900/40">
                  <h4 className="font-bold text-xs text-[#43104F] dark:text-white mb-2">Status Dokumen</h4>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className={`px-2.5 py-1 rounded-lg ${selectedApplicant.dokumen?.kartuKeluarga ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' : 'bg-neutral-100 text-neutral-500'}`}>
                      KK: {selectedApplicant.dokumen?.kartuKeluarga ? 'Tersedia' : 'Belum'}
                    </span>
                    <span className={`px-2.5 py-1 rounded-lg ${selectedApplicant.dokumen?.aktaKelahiran ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' : 'bg-neutral-100 text-neutral-500'}`}>
                      Akta: {selectedApplicant.dokumen?.aktaKelahiran ? 'Tersedia' : 'Belum'}
                    </span>
                    <span className={`px-2.5 py-1 rounded-lg ${selectedApplicant.dokumen?.fotoSantri ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' : 'bg-neutral-100 text-neutral-500'}`}>
                      Pas Foto: {selectedApplicant.dokumen?.fotoSantri ? 'Tersedia' : 'Belum'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-purple-100 dark:border-purple-900/40 flex justify-end gap-3">
                <button
                  onClick={() => setSelectedApplicant(null)}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer"
                >
                  Tutup
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
