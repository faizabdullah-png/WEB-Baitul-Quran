import { PendaftarPPDB, StatusPendaftaran } from '../types';

const LOCAL_STORAGE_KEY = 'bqn_ppdb_applicants';

export const INITIAL_APPLICANTS: PendaftarPPDB[] = [
  {
    id: 'reg-001',
    registrationId: 'BQN-2027-00001',
    namaLengkap: 'Aisyah Humaira Putri',
    namaPanggilan: 'Aisyah',
    nik: '3201015607090001',
    nisn: '0112345678',
    tempatLahir: 'Cilegon',
    tanggalLahir: '2014-06-15',
    jenisKelamin: 'Perempuan',
    alamat: 'Jl. Ahmad Yani No. 45, Ciwaduk',
    kelurahan: 'Ciwaduk',
    kecamatan: 'Cilegon',
    kota: 'Kota Cilegon',
    provinsi: 'Banten',
    noWhatsApp: '081234567890',
    email: 'keluarga.aisyah@example.com',
    namaAyah: 'Ahmad Fauzi',
    namaIbu: 'Siti Aminah',
    noWhatsAppOrangTua: '081298765432',
    pekerjaanAyah: 'Wiraswasta',
    pekerjaanIbu: 'Ibu Rumah Tangga',
    asalSekolah: 'SDIT Al-Hikmah Cilegon',
    jenjang: 'SMP',
    tahunLulus: '2026',
    hafalanQuran: '2 Juz (Juz 30 & 29)',
    hafalJuz30: 'Ya',
    hafalanLainnya: 'Surah Al-Mulk, As-Sajdah, Ar-Rahman',
    kemampuanQuran: 'Lancar bertajwid tartil',
    dokumen: {
      kartuKeluarga: 'kk_aisyah.pdf',
      aktaKelahiran: 'akta_aisyah.pdf',
      ijazahSkhun: 'ijazah_sd.pdf',
      fotoSantri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80'
    },
    statusPendaftaran: 'Diverifikasi',
    tanggalDaftar: '2026-10-01',
    createdAt: '2026-10-01T08:30:00.000Z',
    updatedAt: '2026-10-01T09:15:00.000Z'
  },
  {
    id: 'reg-002',
    registrationId: 'BQN-2027-00002',
    namaLengkap: 'Fatimah Az-Zahra',
    namaPanggilan: 'Zahra',
    nik: '3201016508100002',
    nisn: '0109876543',
    tempatLahir: 'Serang',
    tanggalLahir: '2011-03-22',
    jenisKelamin: 'Perempuan',
    alamat: 'Komplek Griya Asri Blok D2 No. 12',
    kelurahan: 'Sumur Pecung',
    kecamatan: 'Serang',
    kota: 'Kota Serang',
    provinsi: 'Banten',
    noWhatsApp: '085712349988',
    email: 'fatimah.zahra@example.com',
    namaAyah: 'Muhammad Ridwan',
    namaIbu: 'Nur Laila',
    noWhatsAppOrangTua: '085788991122',
    pekerjaanAyah: 'Pegawai BUMN',
    pekerjaanIbu: 'Guru',
    asalSekolah: 'SMP IT Bina Insani Serang',
    jenjang: 'SMA / PKBM',
    tahunLulus: '2026',
    hafalanQuran: '5 Juz (Juz 26-30)',
    hafalJuz30: 'Ya',
    hafalanLainnya: 'Hafal Matan Tuhfatul Athfal sampai bait ke-30',
    kemampuanQuran: 'Fasih makharijul huruf dan tajwid',
    dokumen: {
      kartuKeluarga: 'kk_fatimah.pdf',
      aktaKelahiran: 'akta_fatimah.pdf',
      ijazahSkhun: 'skhun_smp.pdf',
      fotoSantri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'
    },
    statusPendaftaran: 'Menunggu Verifikasi',
    tanggalDaftar: '2026-10-02',
    createdAt: '2026-10-02T10:10:00.000Z',
    updatedAt: '2026-10-02T10:10:00.000Z'
  },
  {
    id: 'reg-003',
    registrationId: 'BQN-2027-00003',
    namaLengkap: 'Maryam Salimah',
    namaPanggilan: 'Maryam',
    nik: '3201014511080003',
    nisn: '0115544332',
    tempatLahir: 'Cilegon',
    tanggalLahir: '2014-09-10',
    jenisKelamin: 'Perempuan',
    alamat: 'Perum BBS 2 Ciwaduk',
    kelurahan: 'Ciwaduk',
    kecamatan: 'Cilegon',
    kota: 'Kota Cilegon',
    provinsi: 'Banten',
    noWhatsApp: '082199887766',
    email: 'maryam.salimah@example.com',
    namaAyah: 'Umar Abdullah',
    namaIbu: 'Khadijah',
    noWhatsAppOrangTua: '082188776655',
    pekerjaanAyah: 'Dosen',
    pekerjaanIbu: 'Ibu Rumah Tangga',
    asalSekolah: 'SD Unggulan Cilegon',
    jenjang: 'SMP',
    tahunLulus: '2026',
    hafalanQuran: '1 Juz (Juz 30)',
    hafalJuz30: 'Ya',
    hafalanLainnya: 'Doa-doa harian & Hadits Arbain',
    kemampuanQuran: 'Lancar membaca mushaf madinah',
    dokumen: {
      kartuKeluarga: 'kk_maryam.pdf',
      aktaKelahiran: 'akta_maryam.pdf',
      ijazahSkhun: '',
      fotoSantri: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80'
    },
    statusPendaftaran: 'Mengikuti Tes',
    tanggalDaftar: '2026-10-03',
    createdAt: '2026-10-03T14:20:00.000Z',
    updatedAt: '2026-10-03T16:00:00.000Z'
  }
];

export function getLocalApplicants(): PendaftarPPDB[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(INITIAL_APPLICANTS));
      return INITIAL_APPLICANTS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_APPLICANTS;
  }
}

export function saveLocalApplicants(data: PendaftarPPDB[]) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.warn('Failed to persist to localStorage', err);
  }
}

export async function fetchPPDBApplicants(): Promise<PendaftarPPDB[]> {
  try {
    const res = await fetch('/api/ppdb');
    const contentType = res.headers.get('content-type');
    if (res.ok && contentType && contentType.includes('application/json')) {
      const data = await res.json();
      saveLocalApplicants(data);
      return data;
    }
  } catch {
    // Backend API unavailable (e.g. Vercel static deployment)
  }
  return getLocalApplicants();
}

export async function savePPDBApplicant(newApplicant: PendaftarPPDB): Promise<PendaftarPPDB> {
  try {
    const res = await fetch('/api/ppdb', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newApplicant)
    });
    const contentType = res.headers.get('content-type');
    if (res.ok && contentType && contentType.includes('application/json')) {
      return await res.json();
    }
  } catch {
    // Fallback to local
  }

  const current = getLocalApplicants();
  const updated = [newApplicant, ...current];
  saveLocalApplicants(updated);
  return newApplicant;
}

export async function updatePPDBApplicantStatus(id: string, newStatus: StatusPendaftaran): Promise<PendaftarPPDB | null> {
  try {
    const res = await fetch(`/api/ppdb/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ statusPendaftaran: newStatus, status: newStatus })
    });
    const contentType = res.headers.get('content-type');
    if (res.ok && contentType && contentType.includes('application/json')) {
      return await res.json();
    }
  } catch {
    // Fallback to local
  }

  const current = getLocalApplicants();
  const idx = current.findIndex((a) => a.id === id || a.registrationId === id);
  if (idx !== -1) {
    current[idx].statusPendaftaran = newStatus;
    current[idx].updatedAt = new Date().toISOString();
    saveLocalApplicants(current);
    return current[idx];
  }
  return null;
}

export async function deletePPDBApplicant(id: string): Promise<boolean> {
  try {
    const res = await fetch(`/api/ppdb/${id}`, { method: 'DELETE' });
    if (res.ok) {
      const current = getLocalApplicants().filter((a) => a.id !== id && a.registrationId !== id);
      saveLocalApplicants(current);
      return true;
    }
  } catch {
    // Fallback to local
  }

  const current = getLocalApplicants().filter((a) => a.id !== id && a.registrationId !== id);
  saveLocalApplicants(current);
  return true;
}

export function computeStats(applicants: PendaftarPPDB[]) {
  const byStatus: Record<string, number> = {};
  applicants.forEach((a) => {
    byStatus[a.statusPendaftaran] = (byStatus[a.statusPendaftaran] || 0) + 1;
  });

  return {
    total: applicants.length,
    smp: applicants.filter((a) => a.jenjang === 'SMP').length,
    sma: applicants.filter((a) => a.jenjang === 'SMA / PKBM').length,
    smaPkbm: applicants.filter((a) => a.jenjang === 'SMA / PKBM').length,
    byStatus,
    menungguVerifikasi: applicants.filter((a) => a.statusPendaftaran === 'Menunggu Verifikasi').length,
    diverifikasi: applicants.filter((a) => a.statusPendaftaran === 'Diverifikasi' || a.statusPendaftaran === 'Lulus Administrasi').length,
    mengikutiTes: applicants.filter((a) => a.statusPendaftaran === 'Mengikuti Tes').length,
    diterima: applicants.filter((a) => a.statusPendaftaran === 'Diterima').length,
    tidakDiterima: applicants.filter((a) => a.statusPendaftaran === 'Tidak Diterima' || a.statusPendaftaran === 'Ditolak').length,
    daftarUlang: applicants.filter((a) => a.statusPendaftaran === 'Daftar Ulang').length,
  };
}

export function exportApplicantsToCSV(applicants: PendaftarPPDB[]) {
  const headers = [
    'No Registrasi',
    'Nama Lengkap',
    'Nama Panggilan',
    'NIK',
    'NISN',
    'Jenjang',
    'Tempat Lahir',
    'Tanggal Lahir',
    'Alamat',
    'Kota',
    'Provinsi',
    'No WA Santri',
    'Email',
    'Nama Ayah',
    'Nama Ibu',
    'No WA Orang Tua',
    'Pekerjaan Ayah',
    'Pekerjaan Ibu',
    'Asal Sekolah',
    'Hafalan Quran',
    'Hafal Juz 30',
    'Status Pendaftaran',
    'Tanggal Daftar'
  ];

  const escapeCsv = (str: any) => {
    if (str === null || str === undefined) return '""';
    const clean = String(str).replace(/"/g, '""');
    return `"${clean}"`;
  };

  const rows = applicants.map((a) => [
    escapeCsv(a.registrationId),
    escapeCsv(a.namaLengkap),
    escapeCsv(a.namaPanggilan),
    escapeCsv(a.nik),
    escapeCsv(a.nisn),
    escapeCsv(a.jenjang),
    escapeCsv(a.tempatLahir),
    escapeCsv(a.tanggalLahir),
    escapeCsv(a.alamat),
    escapeCsv(a.kota),
    escapeCsv(a.provinsi),
    escapeCsv(a.noWhatsApp),
    escapeCsv(a.email),
    escapeCsv(a.namaAyah),
    escapeCsv(a.namaIbu),
    escapeCsv(a.noWhatsAppOrangTua),
    escapeCsv(a.pekerjaanAyah),
    escapeCsv(a.pekerjaanIbu),
    escapeCsv(a.asalSekolah),
    escapeCsv(a.hafalanQuran),
    escapeCsv(a.hafalJuz30),
    escapeCsv(a.statusPendaftaran),
    escapeCsv(a.tanggalDaftar)
  ]);

  const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\r\n');
  const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `PPDB_BaitulQuran_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
