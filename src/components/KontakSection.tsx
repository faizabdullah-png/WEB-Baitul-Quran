import React, { useState } from 'react';
import { INSTITUTION_CONFIG } from '../data/initialData';
import { MessageSquare, PhoneCall, Send, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';

export const KontakSection: React.FC = () => {
  const [namaPengirim, setNamaPengirim] = useState('');
  const [pesanTanya, setPesanTanya] = useState('');
  const [selectedAdminIndex, setSelectedAdminIndex] = useState(0);
  const [isSent, setIsSent] = useState(false);
  const [generatedWaUrl, setGeneratedWaUrl] = useState<string | null>(null);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pesanTanya.trim()) return;

    const chosenContact = INSTITUTION_CONFIG.contacts[selectedAdminIndex] || INSTITUTION_CONFIG.contacts[0];
    const greetingName = namaPengirim.trim() ? `Nama saya ${namaPengirim.trim()},\n` : '';
    const fullText = encodeURIComponent(
      `Assalamu'alaikum Warahmatullahi Wabarakatuh,\n${greetingName}Saya ingin bertanya informasi seputar Baitul Qur'an Dzun Nurain Lil Banaat / PPDB 2027/2028:\n\n"${pesanTanya.trim()}"\n\nJazakumullahu khairan.`
    );

    const waUrl = `https://wa.me/${chosenContact.clean}?text=${fullText}`;
    setGeneratedWaUrl(waUrl);

    // Safely trigger navigation without getting blocked by iframe popup restrictions
    try {
      const link = document.createElement('a');
      link.href = waUrl;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch {
      window.location.href = waUrl;
    }

    setIsSent(true);
    setPesanTanya('');
  };

  return (
    <section id="kontak" className="py-20 bg-[#FAF7FC] dark:bg-[#16071F] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#64157D] dark:text-[#FFB800] bg-purple-100 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 mb-3">
            <PhoneCall className="w-3.5 h-3.5 text-[#C218A8]" />
            <span>Layanan Informasi & Konsultasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#43104F] dark:text-white tracking-tight mb-4">
            Hubungi Panitia & Pengurus
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#C218A8] via-[#FF8500] to-[#FFB800] mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Panitia PPDB dan pengurus Baitul Qur’an siap membantu menjawab pertanyaan Anda terkait pendaftaran dan kurikulum.
          </p>
        </div>

        {/* 3 WhatsApp Direct Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 text-left max-w-5xl mx-auto">
          {INSTITUTION_CONFIG.contacts.map((contact, idx) => {
            const defaultText = encodeURIComponent(
              `Assalamu'alaikum Warahmatullahi Wabarakatuh,\nPanitia PPDB Baitul Qur'an Dzun Nurain Lil Banaat,\nSaya ingin menanyakan informasi seputar penerimaan santri baru putri.`
            );
            const directWa = `https://wa.me/${contact.clean}?text=${defaultText}`;

            return (
              <div
                key={contact.number}
                className="p-6 rounded-3xl bg-white dark:bg-[#250D33] border border-purple-100 dark:border-purple-900/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-pink-50 dark:bg-pink-950/50 text-[#C218A8] dark:text-pink-300 border border-pink-100 dark:border-pink-900">
                      Layanan {idx + 1}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 flex items-center justify-center">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-[#43104F] dark:text-white mb-1">
                    {contact.label}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4 font-mono font-medium">
                    {contact.number}
                  </p>
                </div>

                <a
                  href={directWa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition shadow-sm cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat WhatsApp</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Quick Message Form */}
        <div className="max-w-2xl mx-auto p-8 rounded-3xl bg-white dark:bg-[#250D33] border border-purple-100 dark:border-purple-900/50 shadow-sm text-left">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-[#C218A8]" />
            <h3 className="text-xl font-bold text-[#43104F] dark:text-white">
              Kirim Pesan Pertanyaan Cepat
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mb-6">
            Tulis pertanyaan Anda di bawah ini, lalu klik tombol kirim untuk membuka chat WhatsApp resmi panitia.
          </p>

          <form onSubmit={handleSendMessage} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                Nama Anda (Calon Wali Santri)
              </label>
              <input
                type="text"
                value={namaPengirim}
                onChange={(e) => setNamaPengirim(e.target.value)}
                placeholder="Contoh: Bapak Ahmad / Ibu Khadijah"
                className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-purple-200 dark:border-purple-800 bg-neutral-50 dark:bg-[#1A0A24] text-[#43104F] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C218A8]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                Pilih Nomor WhatsApp Admin Tujuan
              </label>
              <select
                value={selectedAdminIndex}
                onChange={(e) => setSelectedAdminIndex(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-purple-200 dark:border-purple-800 bg-neutral-50 dark:bg-[#1A0A24] text-[#43104F] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C218A8] cursor-pointer"
              >
                {INSTITUTION_CONFIG.contacts.map((c, i) => (
                  <option key={c.number} value={i}>
                    {c.label} ({c.number})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                Pertanyaan Anda <span className="text-red-500">*</span>
              </label>
              <textarea
                rows={3}
                required
                value={pesanTanya}
                onChange={(e) => setPesanTanya(e.target.value)}
                placeholder="Tuliskan pertanyaan Anda mengenai jadwal tes, pendaftaran, kurikulum, atau asrama..."
                className="w-full px-3.5 py-2.5 rounded-xl text-sm border border-purple-200 dark:border-purple-800 bg-neutral-50 dark:bg-[#1A0A24] text-[#43104F] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#C218A8]"
              />
            </div>

            {isSent && (
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-700 dark:text-emerald-300 space-y-2">
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                  <span>Pesan siap diteruskan ke WhatsApp Admin.</span>
                </div>
                {generatedWaUrl && (
                  <a
                    href={generatedWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#C218A8] dark:text-[#FFB800] font-bold underline"
                  >
                    <span>Klik di sini jika WhatsApp belum terbuka otomatis</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-[#C218A8] via-[#85189C] to-[#64157D] hover:opacity-95 shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Buka Chat WhatsApp Sekarang</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
