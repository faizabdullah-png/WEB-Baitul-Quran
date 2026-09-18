export type StatusPendaftaran =
  | 'Menunggu Verifikasi'
  | 'Diverifikasi'
  | 'Lulus Administrasi'
  | 'Mengikuti Tes'
  | 'Diterima'
  | 'Ditolak'
  | 'Tidak Diterima'
  | 'Daftar Ulang';

export type JenjangPendidikan = 'SMP' | 'SMA / PKBM';

export interface DokumenUpload {
  kartuKeluarga?: string; // filename or base64
  aktaKelahiran?: string;
  ijazahSkhun?: string;
  fotoSantri?: string;
}

export interface PendaftarPPDB {
  id: string;
  registrationId: string;
  namaLengkap: string;
  namaPanggilan: string;
  nik: string;
  nisn: string;
  tempatLahir: string;
  tanggalLahir: string;
  jenisKelamin: string;
  alamat: string;
  kelurahan: string;
  kecamatan: string;
  kota: string;
  provinsi: string;
  noWhatsApp: string;
  email: string;
  namaAyah: string;
  namaIbu: string;
  noWhatsAppOrangTua: string;
  pekerjaanAyah: string;
  pekerjaanIbu: string;
  asalSekolah: string;
  jenjang: JenjangPendidikan;
  tahunLulus: string;
  hafalanQuran: string;
  hafalJuz30: 'Ya' | 'Tidak';
  hafalanLainnya: string;
  kemampuanQuran: string;
  dokumen: DokumenUpload;
  statusPendaftaran: StatusPendaftaran;
  tanggalDaftar: string;
  createdAt: string;
  updatedAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
}

export interface FasilitasItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PPDBStats {
  total: number;
  smp: number;
  sma: number;
  smaPkbm?: number;
  byStatus: Record<string, number>;
  menungguVerifikasi: number;
  mengikutiTes?: number;
  diterima: number;
  tidakDiterima?: number;
  daftarUlang?: number;
}
