import React from 'react';
import { PendaftarPPDB } from '../types';
import { INSTITUTION_CONFIG } from '../data/initialData';
import { Printer, Download, X, CheckCircle, QrCode } from 'lucide-react';

interface PrintableAdmissionCardProps {
  applicant: PendaftarPPDB;
  onClose: () => void;
}

export const PrintableAdmissionCard: React.FC<PrintableAdmissionCardProps> = ({
  applicant,
  onClose,
}) => {
  const handlePrint = () => {
    try {
      window.print();
    } catch (e) {
      console.error('Print failed', e);
      handleDownloadHtml();
    }
  };

  const handleDownloadHtml = () => {
    const htmlContent = `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <title>Kartu_Pendaftaran_${applicant.registrationId}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 24px; color: #222; background: #fff; }
    .card { border: 2px solid #64157D; border-radius: 16px; padding: 28px; max-width: 680px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
    .header { border-bottom: 2px solid #64157D; padding-bottom: 16px; margin-bottom: 20px; }
    .foundation { font-size: 11px; font-weight: bold; color: #FF8500; text-transform: uppercase; letter-spacing: 0.05em; }
    h2 { color: #43104F; margin: 4px 0; font-size: 22px; font-weight: 800; }
    .sub { font-size: 13px; color: #555; }
    .contact { font-size: 11px; color: #777; margin-top: 4px; }
    .title-box { text-align: center; margin: 20px 0; }
    .title-box h3 { color: #43104F; margin: 0 0 8px 0; font-size: 16px; letter-spacing: 0.03em; }
    .reg-badge { display: inline-block; background: #f3e8ff; color: #64157D; padding: 6px 16px; border-radius: 9999px; font-weight: 800; font-size: 14px; border: 1px solid #d8b4fe; }
    table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 13px; }
    td { padding: 8px 10px; border-bottom: 1px solid #eee; }
    td.label { color: #666; width: 35%; font-weight: 500; }
    td.val { font-weight: 600; color: #222; }
    .instructions { background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 12px; padding: 14px; font-size: 12px; color: #555; margin-top: 20px; line-height: 1.6; }
    .instructions strong { color: #64157D; display: block; margin-bottom: 6px; }
    .footer { margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee; display: flex; justify-content: space-between; align-items: flex-end; font-size: 12px; }
    @media print { body { margin: 0; } .card { box-shadow: none; border-width: 2px; } }
  </style>
</head>
<body onload="window.print()">
  <div class="card">
    <div class="header">
      <div class="foundation">${INSTITUTION_CONFIG.foundation}</div>
      <h2>${INSTITUTION_CONFIG.name}</h2>
      <div class="sub">Pendidikan Islam Khusus Santri Putri Tingkat SMP & SMA/PKBM</div>
      <div class="contact">${INSTITUTION_CONFIG.address} • Telp: ${INSTITUTION_CONFIG.contacts[0].number}</div>
    </div>
    <div class="title-box">
      <h3>KARTU BUKTI PENDAFTARAN SANTRI BARU (PPDB 2027/2028)</h3>
      <div class="reg-badge">No. Registrasi: ${applicant.registrationId}</div>
    </div>
    <table>
      <tr><td class="label">Nama Lengkap Santriwati</td><td class="val">${applicant.namaLengkap}</td></tr>
      <tr><td class="label">Nama Panggilan</td><td class="val">${applicant.namaPanggilan || '-'}</td></tr>
      <tr><td class="label">Jenjang Pilihan</td><td class="val" style="color: #C218A8;">${applicant.jenjang}</td></tr>
      <tr><td class="label">NIK / NISN</td><td class="val">${applicant.nik} / ${applicant.nisn || '-'}</td></tr>
      <tr><td class="label">Tempat, Tanggal Lahir</td><td class="val">${applicant.tempatLahir}, ${applicant.tanggalLahir}</td></tr>
      <tr><td class="label">Asal Sekolah</td><td class="val">${applicant.asalSekolah || '-'}</td></tr>
      <tr><td class="label">Hafalan Al-Qur'an</td><td class="val">${applicant.hafalJuz30} (${applicant.hafalanQuran || 'Juz 30'})</td></tr>
      <tr><td class="label">Nama Ayah / Ibu</td><td class="val">${applicant.namaAyah} / ${applicant.namaIbu}</td></tr>
      <tr><td class="label">WhatsApp Orang Tua/Wali</td><td class="val">${applicant.noWhatsAppOrangTua || applicant.noWhatsApp}</td></tr>
      <tr><td class="label">Tanggal Pendaftaran</td><td class="val">${applicant.tanggalDaftar}</td></tr>
      <tr><td class="label">Status Berkas</td><td class="val">${applicant.statusPendaftaran}</td></tr>
    </table>
    <div class="instructions">
      <strong>Catatan Untuk Calon Wali Santri:</strong>
      1. Simpan kartu bukti pendaftaran ini.<br>
      2. Konfirmasikan nomor registrasi kepada Admin PPDB via WhatsApp resmi (+62 812-8522-0164).<br>
      3. Tes seleksi membaca Al-Qur'an dan wawancara akan dijadwalkan oleh panitia.
    </div>
    <div class="footer">
      <div>
        <small style="color: #888;">Dokumen Resmi PPDB BQN</small><br>
        <strong>VERIFIED BQN-PPDB</strong>
      </div>
      <div style="text-align: right;">
        <div>Cilegon, ${applicant.tanggalDaftar}</div>
        <div style="font-weight: 600; margin-top: 4px;">Panitia PPDB Baitul Qur’an Dzun Nurain</div>
      </div>
    </div>
  </div>
</body>
</html>`;
    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Kartu_Pendaftaran_${applicant.registrationId}.html`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    }, 200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white text-neutral-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8">
        
        {/* Modal Controls (Hidden in Print) */}
        <div className="no-print flex items-center justify-between pb-4 mb-4 border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Dokumen Resmi PPDB
            </span>
            <span className="text-xs text-neutral-500">
              Siap dicetak atau disimpan sebagai PDF
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#64157D] hover:bg-[#43104F] transition shadow-sm cursor-pointer"
              title="Cetak langsung menggunakan printer atau simpan PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak / PDF</span>
            </button>
            <button
              onClick={handleDownloadHtml}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#64157D] bg-purple-100 hover:bg-purple-200 transition shadow-sm cursor-pointer"
              title="Unduh file kartu bukti pendaftaran ke perangkat"
            >
              <Download className="w-4 h-4" />
              <span>Unduh File</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Area Target */}
        <div id="print-area" className="bg-white border-2 border-[#64157D] rounded-2xl p-6 sm:p-8 text-left relative">
          
          {/* Header Lembaga */}
          <div className="border-b-2 border-[#64157D] pb-4 mb-6 flex items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold text-[#FF8500] uppercase tracking-wider block">
                {INSTITUTION_CONFIG.foundation}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#43104F] tracking-tight">
                {INSTITUTION_CONFIG.name}
              </h2>
              <p className="text-xs text-neutral-600">
                Pendidikan Islam Khusus Santri Putri Tingkat SMP & SMA/PKBM
              </p>
              <p className="text-[11px] text-neutral-500">
                {INSTITUTION_CONFIG.address} • Telp: +62 812-8522-0164
              </p>
            </div>

            {/* Emblem / Badge */}
            <div className="shrink-0 text-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#C218A8] to-[#64157D] text-white flex flex-col items-center justify-center p-1 border border-[#FFB800]">
                <span className="text-[10px] font-bold">PPDB</span>
                <span className="text-sm font-extrabold">2027</span>
                <span className="text-[9px]">/ 2028</span>
              </div>
            </div>
          </div>

          {/* Title Slip */}
          <div className="text-center mb-6">
            <h3 className="text-lg font-black text-[#43104F] uppercase tracking-wide">
              KARTU BUKTI PENDAFTARAN SANTRI BARU
            </h3>
            <div className="inline-block px-4 py-1 rounded-full bg-purple-100 text-[#64157D] font-mono font-bold text-sm mt-1">
              No. Registrasi: {applicant.registrationId}
            </div>
          </div>

          {/* Main Grid: Data Santriwati & Photo */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-6">
            
            {/* Pas Foto Box */}
            <div className="sm:col-span-1 flex flex-col items-center">
              <div className="w-32 h-40 border-2 border-dashed border-neutral-300 rounded-xl overflow-hidden bg-neutral-100 flex items-center justify-center text-center p-2 text-xs text-neutral-400">
                {applicant.dokumen?.fotoSantri ? (
                  <img
                    src={applicant.dokumen.fotoSantri}
                    alt="Foto Santri"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span>Pas Foto 3x4 Calon Santriwati</span>
                )}
              </div>
              <span className="text-[10px] text-neutral-400 mt-1">Status Khusus Putri</span>
            </div>

            {/* Information Table */}
            <div className="sm:col-span-3 text-xs sm:text-sm space-y-2">
              <div className="grid grid-cols-3 gap-2 border-b border-neutral-100 pb-1.5">
                <span className="text-neutral-500 font-medium">Nama Lengkap</span>
                <span className="col-span-2 font-bold text-neutral-900">{applicant.namaLengkap}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 border-b border-neutral-100 pb-1.5">
                <span className="text-neutral-500 font-medium">Nama Panggilan</span>
                <span className="col-span-2 font-medium text-neutral-800">{applicant.namaPanggilan || '-'}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 border-b border-neutral-100 pb-1.5">
                <span className="text-neutral-500 font-medium">Jenjang Pilihan</span>
                <span className="col-span-2 font-extrabold text-[#C218A8]">{applicant.jenjang}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 border-b border-neutral-100 pb-1.5">
                <span className="text-neutral-500 font-medium">NIK / NISN</span>
                <span className="col-span-2 font-mono text-neutral-800">{applicant.nik} / {applicant.nisn || '-'}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 border-b border-neutral-100 pb-1.5">
                <span className="text-neutral-500 font-medium">Tempat, Tgl Lahir</span>
                <span className="col-span-2 text-neutral-800">{applicant.tempatLahir}, {applicant.tanggalLahir}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 border-b border-neutral-100 pb-1.5">
                <span className="text-neutral-500 font-medium">Asal Sekolah</span>
                <span className="col-span-2 text-neutral-800">{applicant.asalSekolah || '-'}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 border-b border-neutral-100 pb-1.5">
                <span className="text-neutral-500 font-medium">Hafalan Juz 30</span>
                <span className="col-span-2 font-semibold text-emerald-700">{applicant.hafalJuz30} ({applicant.hafalanQuran || 'Juz 30'})</span>
              </div>
              <div className="grid grid-cols-3 gap-2 border-b border-neutral-100 pb-1.5">
                <span className="text-neutral-500 font-medium">No. WhatsApp Wali</span>
                <span className="col-span-2 text-neutral-800">{applicant.noWhatsAppOrangTua || applicant.noWhatsApp}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 pb-1.5">
                <span className="text-neutral-500 font-medium">Tanggal Daftar</span>
                <span className="col-span-2 font-medium text-neutral-800">{applicant.tanggalDaftar}</span>
              </div>
            </div>

          </div>

          {/* Instructions Box */}
          <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200 text-xs text-neutral-700 mb-6 space-y-1">
            <strong className="block text-[#64157D] font-bold">Catatan Untuk Calon Wali Santri:</strong>
            <p>1. Simpan dan cetak kartu ini sebagai bukti resmi pendaftaran PPDB T.A. 2027/2028.</p>
            <p>2. Konfirmasikan nomor registrasi kepada Admin PPDB via WhatsApp resmi untuk validasi pembayaran biaya pendaftaran & tes (Rp300.000).</p>
            <p>3. Jadwal tes observasi Al-Qur'an dan wawancara akan diinformasikan panitia.</p>
          </div>

          {/* Signature / Validation Footer */}
          <div className="flex justify-between items-end pt-4 border-t border-neutral-200 text-xs text-neutral-700">
            <div>
              <div className="w-16 h-16 border border-neutral-300 rounded-lg flex items-center justify-center p-1 bg-neutral-50">
                <QrCode className="w-12 h-12 text-[#64157D]" />
              </div>
              <span className="text-[10px] text-neutral-400 font-mono mt-1 block">
                VERIFIED BQN-PPDB
              </span>
            </div>

            <div className="text-right">
              <p>Cilegon, {applicant.tanggalDaftar}</p>
              <p className="font-semibold text-neutral-800 mt-1">Panitia Penerimaan Santri Baru (PPDB)</p>
              <div className="h-12 flex items-center justify-end">
                <span className="font-arabic text-xl text-[#C218A8]">بيت القرآن</span>
              </div>
              <p className="font-bold text-[#43104F] underline">
                Baitul Qur’an Dzun Nurain Lil Banaat
              </p>
            </div>
          </div>

        </div>

        {/* Modal Bottom Close */}
        <div className="no-print mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-sm font-semibold text-neutral-600 hover:bg-neutral-100 transition cursor-pointer"
          >
            Tutup Jendela
          </button>
        </div>

      </div>
    </div>
  );
};
