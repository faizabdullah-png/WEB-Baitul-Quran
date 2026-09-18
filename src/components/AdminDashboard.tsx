import React, { useState, useEffect } from 'react';
import { PendaftarPPDB, StatusPendaftaran, PPDBStats } from '../types';
import { INSTITUTION_CONFIG } from '../data/initialData';
import {
  Users,
  GraduationCap,
  CheckCircle,
  Clock,
  Search,
  Filter,
  Download,
  Eye,
  Printer,
  X,
  ArrowLeft,
  Trash2,
  Edit,
  Phone,
  RefreshCw,
  FileText
} from 'lucide-react';

interface AdminDashboardProps {
  onBackToWeb: () => void;
  onOpenPrintModal: (applicant: PendaftarPPDB) => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  onBackToWeb,
  onOpenPrintModal,
}) => {
  const [applicants, setApplicants] = useState<PendaftarPPDB[]>([]);
  const [stats, setStats] = useState<PPDBStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedJenjang, setSelectedJenjang] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [selectedApplicant, setSelectedApplicant] = useState<PendaftarPPDB | null>(null);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  const fetchApplicants = async () => {
    setIsLoading(true);
    try {
      const [appRes, statsRes] = await Promise.all([
        fetch('/api/ppdb'),
        fetch('/api/ppdb/stats'),
      ]);

      if (appRes.ok) {
        const appData = await appRes.json();
        setApplicants(appData);
      }
      if (statsRes.ok) {
        const statsData = await statsRes.json();
        setStats(statsData);
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
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        const updated = await res.json();
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

  const handleDeleteApplicant = async (id: string) => {
    if (!window.confirm('Apakah Anda yakin ingin menghapus data pendaftar ini?')) {
      return;
    }
    try {
      const res = await fetch(`/api/ppdb/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setApplicants((prev) => prev.filter((a) => a.id !== id));
        if (selectedApplicant && selectedApplicant.id === id) {
          setSelectedApplicant(null);
        }
        // Refresh stats
        fetch('/api/ppdb/stats')
          .then((r) => r.json())
          .then((s) => setStats(s))
          .catch(() => {});
      }
    } catch (err) {
      console.error('Failed to delete applicant', err);
    }
  };

  // Filtered List
  const filteredApplicants = applicants.filter((a) => {
    const matchQuery =
      a.namaLengkap.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.registrationId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (a.asalSekolah && a.asalSekolah.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchJenjang = selectedJenjang === 'ALL' || a.jenjang === selectedJenjang;
    const matchStatus = selectedStatus === 'ALL' || a.statusPendaftaran === selectedStatus;

    return matchQuery && matchJenjang && matchStatus;
  });

  const getStatusBadge = (status: StatusPendaftaran) => {
    switch (status) {
      case 'Diterima':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
            Diterima
          </span>
        );
      case 'Lulus Administrasi':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
            Lulus Administrasi
          </span>
        );
      case 'Ditolak':
        return (
          <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300">
            Ditolak
          </span>
        );
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
                <span className="text-2xl font-black text-[#43104F] dark:text-white">{stats.sma}</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#250D33] border border-purple-100 dark:border-purple-900/40 shadow-xs flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 block">Diterima / Lolos</span>
                <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                  {stats.byStatus['Diterima'] || 0}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Filter and Search Bar */}
        <div className="bg-white dark:bg-[#250D33] p-4 rounded-2xl border border-purple-100 dark:border-purple-900/40 shadow-xs flex flex-col md:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari nama santriwati, nomor registrasi, atau asal sekolah..."
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-purple-200 dark:border-purple-800 bg-neutral-50 dark:bg-[#1B0A24] text-[#43104F] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C218A8]"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-1.5 w-1/2 md:w-auto">
              <Filter className="w-4 h-4 text-neutral-400 shrink-0" />
              <select
                value={selectedJenjang}
                onChange={(e) => setSelectedJenjang(e.target.value)}
                className="w-full md:w-auto px-3 py-2 text-xs rounded-xl border border-purple-200 dark:border-purple-800 bg-neutral-50 dark:bg-[#1B0A24] text-neutral-700 dark:text-neutral-200 focus:outline-none"
              >
                <option value="ALL">Semua Jenjang</option>
                <option value="SMP">SMP</option>
                <option value="SMA / PKBM">SMA / PKBM</option>
              </select>
            </div>

            <div className="w-1/2 md:w-auto">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full md:w-auto px-3 py-2 text-xs rounded-xl border border-purple-200 dark:border-purple-800 bg-neutral-50 dark:bg-[#1B0A24] text-neutral-700 dark:text-neutral-200 focus:outline-none"
              >
                <option value="ALL">Semua Status</option>
                <option value="Menunggu Verifikasi">Menunggu Verifikasi</option>
                <option value="Lulus Administrasi">Lulus Administrasi</option>
                <option value="Diterima">Diterima</option>
                <option value="Ditolak">Ditolak</option>
              </select>
            </div>
          </div>
        </div>

        {/* Applicants Table */}
        <div className="bg-white dark:bg-[#250D33] rounded-3xl border border-purple-100 dark:border-purple-900/40 shadow-sm overflow-hidden text-left">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-purple-50/70 dark:bg-[#1C0A26] border-b border-purple-100 dark:border-purple-900/50 text-neutral-600 dark:text-neutral-300">
                  <th className="py-3.5 px-4 font-bold">No. Registrasi</th>
                  <th className="py-3.5 px-4 font-bold">Nama Calon Santriwati</th>
                  <th className="py-3.5 px-4 font-bold">Jenjang</th>
                  <th className="py-3.5 px-4 font-bold">Hafalan Juz 30</th>
                  <th className="py-3.5 px-4 font-bold">WhatsApp Wali</th>
                  <th className="py-3.5 px-4 font-bold">Tgl Daftar</th>
                  <th className="py-3.5 px-4 font-bold">Status</th>
                  <th className="py-3.5 px-4 font-bold text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100/60 dark:divide-purple-900/30">
                {filteredApplicants.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-12 text-center text-neutral-400">
                      Tidak ada data pendaftar yang cocok dengan pencarian.
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
                            app.hafalJuz30 === 'Ya' ? 'text-emerald-600' : 'text-amber-600'
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
                          className="inline-flex items-center gap-1 text-[#64157D] dark:text-purple-300 hover:underline"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          <span>{app.noWhatsAppOrangTua || app.noWhatsApp}</span>
                        </a>
                      </td>
                      <td className="py-3.5 px-4 text-neutral-500 whitespace-nowrap">
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
                            onClick={() => handleDeleteApplicant(app.id)}
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

        {/* Modal Detail Pendaftar */}
        {selectedApplicant && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
            <div className="bg-white dark:bg-[#250D33] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-purple-100 dark:border-purple-900 text-left relative my-8">
              
              <div className="flex items-center justify-between pb-4 border-b border-purple-100 dark:border-purple-900/40 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#C218A8] dark:text-[#FFB800]">
                    {selectedApplicant.registrationId}
                  </span>
                  <h3 className="text-xl font-bold text-[#43104F] dark:text-white">
                    {selectedApplicant.namaLengkap}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedApplicant(null)}
                  className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
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
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold border border-purple-200 dark:border-purple-800 bg-white dark:bg-[#2D0F3D] text-[#43104F] dark:text-white focus:outline-none"
                  >
                    <option value="Menunggu Verifikasi">Menunggu Verifikasi</option>
                    <option value="Lulus Administrasi">Lulus Administrasi</option>
                    <option value="Diterima">Diterima</option>
                    <option value="Ditolak">Ditolak</option>
                  </select>
                </div>
              </div>

              {/* Data Detail Tabs / Fields */}
              <div className="space-y-4 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <strong className="block text-neutral-400 text-[11px]">Jenjang Pilihan</strong>
                    <span>{selectedApplicant.jenjang}</span>
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
                    <strong className="block text-neutral-400 text-[11px]">Nama Orang Tua</strong>
                    <span>Ayah: {selectedApplicant.namaAyah} | Ibu: {selectedApplicant.namaIbu}</span>
                  </div>
                  <div>
                    <strong className="block text-neutral-400 text-[11px]">No. WhatsApp Ortu</strong>
                    <span>{selectedApplicant.noWhatsAppOrangTua || selectedApplicant.noWhatsApp}</span>
                  </div>
                  <div className="col-span-2">
                    <strong className="block text-neutral-400 text-[11px]">Alamat Lengkap</strong>
                    <span>{selectedApplicant.alamat}, {selectedApplicant.kelurahan}, {selectedApplicant.kecamatan}, {selectedApplicant.kota}, {selectedApplicant.provinsi}</span>
                  </div>
                  <div className="col-span-2">
                    <strong className="block text-neutral-400 text-[11px]">Hafalan & Kemampuan Quran</strong>
                    <span>Hafal Juz 30: <strong>{selectedApplicant.hafalJuz30}</strong> | Riwayat: {selectedApplicant.hafalanQuran || '-'} | Kemampuan: {selectedApplicant.kemampuanQuran}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons in Modal */}
              <div className="mt-8 pt-6 border-t border-purple-100 dark:border-purple-900/40 flex items-center justify-between gap-3">
                <button
                  onClick={() => onOpenPrintModal(selectedApplicant)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#64157D] hover:bg-[#43104F] transition cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Cetak Bukti Pendaftaran</span>
                </button>

                <button
                  onClick={() => setSelectedApplicant(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer"
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
