import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

const PORT = 3000;
const DATA_DIR = path.join(process.cwd(), 'data');
const PPDB_FILE = path.join(DATA_DIR, 'ppdb_pendaftar.json');
const FACILITIES_FILE = path.join(DATA_DIR, 'facilities.json');
const GALLERY_FILE = path.join(DATA_DIR, 'gallery.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initial seed data if not present
if (!fs.existsSync(PPDB_FILE)) {
  const initialApplicants = [
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
  fs.writeFileSync(PPDB_FILE, JSON.stringify(initialApplicants, null, 2), 'utf-8');
}

function readPPDBData(): any[] {
  try {
    const raw = fs.readFileSync(PPDB_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
}

function writePPDBData(data: any[]) {
  fs.writeFileSync(PPDB_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

async function startServer() {
  const app = express();

  app.use(express.json({ limit: '15mb' }));
  app.use(express.urlencoded({ extended: true, limit: '15mb' }));

  // API Routes
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({
      status: 'ok',
      institution: 'Baitul Qur’an Dzun Nurain Lil Banaat',
      time: new Date().toISOString()
    });
  });

  // Get statistics
  app.get('/api/ppdb/stats', (_req: Request, res: Response) => {
    const applicants = readPPDBData();
    const byStatus: Record<string, number> = {};
    applicants.forEach((a) => {
      byStatus[a.statusPendaftaran] = (byStatus[a.statusPendaftaran] || 0) + 1;
    });

    const stats = {
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
    res.json(stats);
  });

  // Get all applicants with optional search & filters
  app.get('/api/ppdb', (req: Request, res: Response) => {
    let applicants = readPPDBData();
    const { search, jenjang, status } = req.query;

    if (search && typeof search === 'string') {
      const q = search.toLowerCase();
      applicants = applicants.filter(
        (a) =>
          a.namaLengkap?.toLowerCase().includes(q) ||
          a.registrationId?.toLowerCase().includes(q) ||
          a.nik?.includes(q) ||
          a.asalSekolah?.toLowerCase().includes(q) ||
          a.noWhatsApp?.includes(q)
      );
    }

    if (jenjang && typeof jenjang === 'string' && jenjang !== 'ALL') {
      applicants = applicants.filter((a) => a.jenjang === jenjang);
    }

    if (status && typeof status === 'string' && status !== 'ALL') {
      applicants = applicants.filter((a) => a.statusPendaftaran === status);
    }

    // Sort descending by registration date
    applicants.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    res.json(applicants);
  });

  // Get single applicant
  app.get('/api/ppdb/:id', (req: Request, res: Response) => {
    const applicants = readPPDBData();
    const found = applicants.find((a) => a.id === req.params.id || a.registrationId === req.params.id);
    if (!found) {
      return res.status(404).json({ error: 'Data pendaftar tidak ditemukan' });
    }
    res.json(found);
  });

  // Create new applicant registration
  app.post('/api/ppdb', (req: Request, res: Response) => {
    try {
      const applicants = readPPDBData();
      const body = req.body;

      if (!body.namaLengkap || !body.nik || !body.jenjang) {
        return res.status(400).json({ error: 'Nama lengkap, NIK, dan jenjang pendidikan wajib diisi.' });
      }

      // Generate next registration ID: BQN-2027-00001
      const count = applicants.length + 1;
      const registrationId = `BQN-2027-${String(count).padStart(5, '0')}`;
      const now = new Date().toISOString();
      const todayDate = now.split('T')[0];

      const newApplicant = {
        id: `reg-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        registrationId,
        namaLengkap: body.namaLengkap.trim(),
        namaPanggilan: body.namaPanggilan?.trim() || '',
        nik: body.nik.trim(),
        nisn: body.nisn?.trim() || '',
        tempatLahir: body.tempatLahir?.trim() || '',
        tanggalLahir: body.tanggalLahir || '',
        jenisKelamin: 'Perempuan', // Khusus putri
        alamat: body.alamat?.trim() || '',
        kelurahan: body.kelurahan?.trim() || '',
        kecamatan: body.kecamatan?.trim() || '',
        kota: body.kota?.trim() || 'Kota Cilegon',
        provinsi: body.provinsi?.trim() || 'Banten',
        noWhatsApp: body.noWhatsApp?.trim() || '',
        email: body.email?.trim() || '',
        namaAyah: body.namaAyah?.trim() || '',
        namaIbu: body.namaIbu?.trim() || '',
        noWhatsAppOrangTua: body.noWhatsAppOrangTua?.trim() || '',
        pekerjaanAyah: body.pekerjaanAyah?.trim() || '',
        pekerjaanIbu: body.pekerjaanIbu?.trim() || '',
        asalSekolah: body.asalSekolah?.trim() || '',
        jenjang: body.jenjang,
        tahunLulus: body.tahunLulus || '2026',
        hafalanQuran: body.hafalanQuran?.trim() || '',
        hafalJuz30: body.hafalJuz30 || 'Ya',
        hafalanLainnya: body.hafalanLainnya?.trim() || '',
        kemampuanQuran: body.kemampuanQuran?.trim() || '',
        dokumen: body.dokumen || {},
        statusPendaftaran: 'Menunggu Verifikasi',
        tanggalDaftar: todayDate,
        createdAt: now,
        updatedAt: now
      };

      applicants.unshift(newApplicant);
      writePPDBData(applicants);

      res.status(201).json(newApplicant);
    } catch (err: any) {
      console.error('Error saving PPDB registration:', err);
      res.status(500).json({ error: 'Gagal menyimpan pendaftaran: ' + err.message });
    }
  });

  // Update status of applicant
  app.patch('/api/ppdb/:id/status', (req: Request, res: Response) => {
    const applicants = readPPDBData();
    const index = applicants.findIndex((a) => a.id === req.params.id || a.registrationId === req.params.id);
    if (index === -1) {
      return res.status(404).json({ error: 'Data pendaftar tidak ditemukan' });
    }

    const { statusPendaftaran, status } = req.body;
    const targetStatus = statusPendaftaran || status;
    if (!targetStatus) {
      return res.status(400).json({ error: 'Status pendaftaran wajib disertakan' });
    }

    applicants[index].statusPendaftaran = targetStatus;
    applicants[index].updatedAt = new Date().toISOString();
    writePPDBData(applicants);

    res.json(applicants[index]);
  });

  // Delete applicant
  app.delete('/api/ppdb/:id', (req: Request, res: Response) => {
    let applicants = readPPDBData();
    const beforeCount = applicants.length;
    applicants = applicants.filter((a) => a.id !== req.params.id && a.registrationId !== req.params.id);

    if (applicants.length === beforeCount) {
      return res.status(404).json({ error: 'Data pendaftar tidak ditemukan' });
    }

    writePPDBData(applicants);
    res.json({ message: 'Data pendaftar berhasil dihapus' });
  });

  // Export CSV
  app.get('/api/ppdb/export/csv', (_req: Request, res: Response) => {
    const applicants = readPPDBData();
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

    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="PPDB_BaitulQuran_${new Date().toISOString().slice(0, 10)}.csv"`);
    res.send('\uFEFF' + csvContent); // Add UTF-8 BOM for Excel compatibility
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Baitul Qur’an Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
