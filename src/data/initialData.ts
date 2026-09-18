import { FasilitasItem, GalleryItem, FAQItem } from '../types';

export const INSTITUTION_CONFIG = {
  name: "Baitul Qur’an Dzun Nurain Lil Banaat",
  shortName: "BQN Dzun Nurain Lil Banaat",
  foundation: "Yayasan Lentera Ilmu Generasi Insani",
  targetGender: "Khusus Santri Putri",
  levels: ["SMP", "SMA / PKBM"],
  address: "Komplek BBS 3 Ciwaduk, Cilegon, Banten",
  googleMapsUrl: "https://maps.app.goo.gl/k1eMEJCFURegvNnU6?g_st=ac",
  mapsUrl: "https://maps.app.goo.gl/k1eMEJCFURegvNnU6?g_st=ac",
  googleMapsEmbedUrl: "https://www.google.com/maps?q=Komplek+BBS+3+Ciwaduk+Cilegon+Banten&output=embed",
  ppdb: {
    academicYear: "2027/2028",
    registrationStart: "Mulai 1 Oktober 2026",
    registrationFee: 300000,
    registrationFeeFormatted: "Rp300.000",
    note: "Biaya pendaftaran dan tes seleksi",
  },
  contacts: [
    { label: "Admin 1 (Informasi & Pendaftaran)", number: "+62 812-8522-0164", clean: "6281285220164" },
    { label: "Admin 2 (Layanan PPDB)", number: "+62 859-4064-4093", clean: "6285940644093" },
    { label: "Admin 3 (Konfirmasi & Administrasi)", number: "+62 821-1084-9649", clean: "6282110849649" },
  ],
  vision: "Terwujudnya lembaga pendidikan Islam yang berkualitas dan berbasis pada penguasaan hafalan Al-Qur’an, ilmu syar’iyyah berdasarkan dalil yang sesuai dengan pemahaman salafush shalih.",
  mission: [
    "Mengembangkan lembaga pendidikan dengan pelayanan yang berkualitas.",
    "Mencetak para Huffaadz Al-Qur’an dan memahami ilmu syar’iyyah.",
    "Mengembangkan pendidikan bahasa Arab dengan praktik setiap hari.",
    "Mengajarkan keterampilan dasar untuk kehidupan sehari-hari."
  ],
  whyUsPoints: [
    "Pendidikan khusus putri",
    "Fokus hafalan Al-Qur’an",
    "Pembelajaran ilmu syar’iyyah",
    "Pembiasaan bahasa Arab",
    "Pendidikan akhlak dan karakter",
    "Lingkungan asrama",
    "Pendidikan akademik dan keterampilan"
  ],
  admissionRequirements: [
    "Lulusan SD/sederajat untuk jenjang yang sesuai",
    "Lancar membaca Al-Qur’an",
    "Diutamakan sudah hafal Juz 30",
    "Mengikuti proses pendaftaran dan tes"
  ]
};

export const INITIAL_PROGRAMS = [
  {
    category: "TAHFIDZ",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    items: [
      {
        title: "Menghafal Al-Qur’an 30 Juz",
        desc: "Program bimbingan intensif talaqqi dan setoran mutqin hafalan 30 Juz khusus santriwati dengan metode bertahap dan terarah."
      },
      {
        title: "Menghafal Matan Tuhfatul Athfal",
        desc: "Penguasaan dasar kaidah tajwid secara mandhumah bersanad guna memperkokoh dasar bacaan Al-Qur’an yang tartil."
      },
      {
        title: "Menghafal Al-Jazari",
        desc: "Pendalaman kaidah makharijul huruf, sifat huruf, dan hukum tajwid tingkat lanjut melalui matan Al-Jazariyyah."
      }
    ]
  },
  {
    category: "ILMU SYAR’I",
    badgeColor: "bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800",
    items: [
      {
        title: "Aqidah & Pemahaman Salafush Shalih",
        desc: "Memahami dasar-dasar Aqidah Ahlussunnah wal Jama’ah berdasarkan dalil Al-Qur’an dan As-Sunnah."
      },
      {
        title: "Fiqih Ibadah & Muamalah",
        desc: "Pembelajaran fiqih praktis sehari-hari, thaharah, shalat, puasa, dan tata cara ibadah sesuai sunnah Rasulullah ﷺ."
      },
      {
        title: "Tafsir Al-Qur’an",
        desc: "Mempelajari makna ayat-ayat pilihan untuk menanamkan tadabbur dan pengamalan nilai Qur’ani dalam kehidupan."
      }
    ]
  },
  {
    category: "BAHASA ARAB",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    items: [
      {
        title: "Bahasa Arab Aktif Sehari-hari",
        desc: "Pengembangan kemampuan percakapan (muhadatsah), kosa kata (mufradat), dan pembiasaan lingkungan berbahasa Arab."
      },
      {
        title: "Kaidah Tajwid & Qira'at",
        desc: "Penerapan teori tajwid langsung dalam lisan dan tulisan saat membaca ayat-ayat suci Al-Qur'an."
      }
    ]
  },
  {
    category: "PEMBENTUKAN KARAKTER",
    badgeColor: "bg-pink-100 text-pink-800 dark:bg-pink-950/60 dark:text-pink-300 border-pink-200 dark:border-pink-800",
    items: [
      {
        title: "Pendidikan Akhlak Santriwati",
        desc: "Penanaman adab penuntut ilmu, akhlak mulia kepada orang tua, guru, sesama santriwati, dan masyarakat."
      },
      {
        title: "Keterampilan Kehidupan Sehari-hari",
        desc: "Melatih kemandirian santriwati, kedisiplinan asrama, kecakapan praktis, dan kepekaan sosial."
      }
    ]
  }
];

export const INITIAL_FACILITIES: FasilitasItem[] = [
  {
    id: "fac-1",
    title: "Asrama Ber-AC",
    description: "Ruang istirahat yang sejuk, bersih, dan nyaman khusus santriwati untuk menjaga kualitas waktu istirahat.",
    iconName: "Wind"
  },
  {
    id: "fac-2",
    title: "Perlengkapan Tidur Lengkap",
    description: "Fasilitas tempat tidur, kasur, bantal, dan sprei yang tertata rapi serta higienis di setiap kamar.",
    iconName: "Bed"
  },
  {
    id: "fac-3",
    title: "Lemari Pribadi",
    description: "Lemari penyimpanan pakaian dan barang pribadi santriwati yang aman dan tertata rapi.",
    iconName: "Archive"
  },
  {
    id: "fac-4",
    title: "Seragam Santriwati",
    description: "Paket seragam syar'i khusus santriwati untuk kegiatan belajar mengajar dan seragam harian.",
    iconName: "Shirt"
  },
  {
    id: "fac-5",
    title: "Buku-Buku Penunjang",
    description: "Kitab materi syar'iyyah, mushaf Al-Qur'an, dan modul literasi pendidikan yang terstruktur.",
    iconName: "BookOpen"
  },
  {
    id: "fac-6",
    title: "Makan 3 Kali Sehari",
    description: "Penyediaan konsumsi makanan sehat, bergizi seimbang, halal, dan teratur 3 kali setiap hari.",
    iconName: "Utensils"
  },
  {
    id: "fac-7",
    title: "Fasilitas Pendukung Pendidikan",
    description: "Ruang kelas belajar interaktif, sarana ibadah, dan area telaah hafalan yang kondusif.",
    iconName: "GraduationCap"
  },
  {
    id: "fac-8",
    title: "Kesempatan Ujian Paket A, B, & C",
    description: "Akses resmi mengikuti asesmen pendidikan kesetaraan Paket A, B, dan C bagi santriwati yang membutuhkan.",
    iconName: "FileCheck"
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Cooking Class Santriwati",
    category: "Cooking Class",
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80",
    description: "Kegiatan pembelajaran memasak dan mengolah makanan halal untuk melatih kemandirian dan kecakapan hidup."
  },
  {
    id: "gal-2",
    title: "Daurah Ilmiyah Syar'iyyah",
    category: "Daurah Ilmiyah",
    imageUrl: "https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=800&q=80",
    description: "Majelis pengkajian kitab tauhid, fiqih, dan hadits bersama ustadzah pembimbing secara intensif."
  },
  {
    id: "gal-3",
    title: "Rihlah & Tadabbur Alam",
    category: "Rihlah",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    description: "Kegiatan luar ruangan untuk merefresh suasana belajar, mempererat ukhuwah islamiyyah, dan tadabbur ciptaan Allah."
  },
  {
    id: "gal-4",
    title: "KBM & Halaqah Al-Qur’an",
    category: "KBM",
    imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
    description: "Suasana kegiatan belajar mengajar, setoran hafalan harian, dan mutaba'ah tartil Al-Qur'an santriwati."
  },
  {
    id: "gal-5",
    title: "Olahraga & Kebugaran Jasmani",
    category: "Olahraga",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80",
    description: "Aktivitas pembiasaan jasmani yang sehat dan terarah khusus santriwati di lingkungan asrama tertutup."
  }
];

export const INITIAL_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "Apa jenjang pendidikan yang tersedia di Baitul Qur’an Dzun Nurain Lil Banaat?",
    answer: "Jenjang pendidikan yang tersedia adalah SMP dan SMA melalui program Pusat Kegiatan Belajar Masyarakat (PKBM)."
  },
  {
    id: "faq-2",
    question: "Apakah lembaga ini khusus untuk santri putri?",
    answer: "Ya, Baitul Qur’an Dzun Nurain Lil Banaat adalah lembaga pendidikan Islam asrama yang dikhususkan bagi santri putri."
  },
  {
    id: "faq-3",
    question: "Kapan pendaftaran santri baru (PPDB) dibuka?",
    answer: "Pendaftaran PPDB Tahun Ajaran 2027/2028 mulai dibuka pada tanggal 1 Oktober 2026."
  },
  {
    id: "faq-4",
    question: "Berapa biaya pendaftaran PPDB?",
    answer: "Biaya pendaftaran dan tes seleksi adalah sebesar Rp300.000."
  },
  {
    id: "faq-5",
    question: "Apakah calon santriwati harus sudah memiliki hafalan Al-Qur’an sebelum mendaftar?",
    answer: "Calon santriwati disyaratkan lancar membaca Al-Qur’an dan diutamakan sudah hafal Juz 30."
  },
  {
    id: "faq-6",
    question: "Bagaimana integrasi antara pendidikan Al-Qur'an dan pendidikan formal?",
    answer: "Pendidikan memadukan hafalan Al-Qur’an 30 juz, ilmu syar’iyyah berlandaskan dalil pemahaman salafush shalih, pembiasaan bahasa Arab harian, pendidikan akademik berijazah formal (Paket A, B, C), serta pendidikan karakter dan kemandirian."
  },
  {
    id: "faq-7",
    question: "Bagaimana cara mendapatkan informasi lengkap lainnya?",
    answer: "Untuk informasi yang belum tercantum atau detail tambahan mengenai asrama dan administrasi, silakan hubungi admin kami melalui nomor WhatsApp resmi yang tertera."
  }
];
