export interface InternalLinkItem {
  anchor: string;
  url: string;
  title: string;
  description: string;
  category: 'service' | 'blog' | 'page';
}

export const internalLinksRegistry: InternalLinkItem[] = [
  // 5 Money Pages Layanan Utama (Wajib diakhiri trailing slash '/')
  {
    anchor: 'jasa pasang cctv rumah di palembang',
    url: '/layanan/pasang-cctv-rumah-palembang/',
    title: 'Pasang CCTV Rumah Palembang',
    description: 'Instalasi CCTV rumah hunian dan perumahan cluster Palembang tanpa DP bergaransi ganti baru.',
    category: 'service',
  },
  {
    anchor: 'instalasi cctv ruko dan toko palembang',
    url: '/layanan/pasang-cctv-ruko-toko-palembang/',
    title: 'Pasang CCTV Ruko & Toko Palembang',
    description: 'Sistem pengawasan kasir, etalase, dan anti maling untuk ruko komersial di Palembang.',
    category: 'service',
  },
  {
    anchor: 'instalasi ip camera gedung dan pabrik palembang',
    url: '/layanan/instalasi-ip-camera-gedung-pabrik-palembang/',
    title: 'Instalasi IP Camera Gedung & Pabrik Palembang',
    description: 'Sistem IP Camera PoE resolusi tinggi untuk industri, pergudangan, dan perkantoran.',
    category: 'service',
  },
  {
    anchor: 'jasa servis cctv panggilan palembang',
    url: '/layanan/jasa-servis-maintenance-cctv-palembang/',
    title: 'Jasa Servis & Maintenance CCTV Palembang',
    description: 'Perbaikan kamera mati, reset password DVR, harddisk error, dan setting online HP se-Palembang.',
    category: 'service',
  },
  {
    anchor: 'paket pasang cctv palembang murah terima beres',
    url: '/layanan/paket-cctv-palembang-murah/',
    title: 'Paket CCTV Palembang Murah',
    description: 'Paket 2, 4, 8 kamera Full HD Hikvision & Dahua komplit terima beres tanpa biaya tersembunyi.',
    category: 'service',
  },
  // Halaman Utama & Navigasi (Wajib trailing slash)
  {
    anchor: 'pasang cctv palembang',
    url: '/',
    title: 'CCTV Palembang — Jasa Pasang CCTV Terpercaya',
    description: 'Vendor instalasi CCTV nomor 1 di Palembang bebas DP garansi 1 tahun.',
    category: 'page',
  },
  {
    anchor: 'paket pasang cctv palembang',
    url: '/paket/',
    title: 'Daftar Paket CCTV Palembang',
    description: 'Pilihan paket CCTV rumah, ruko, dan industri di Palembang.',
    category: 'page',
  },
  {
    anchor: 'paket hemat rumah 2 kamera palembang',
    url: '/paket/paket-hemat-rumah-2-kamera/',
    title: 'Paket Hemat Rumah (2 Kamera) CCTV Palembang',
    description: 'Paket pasang CCTV 2 kamera 2MP Hikvision/Dahua terima beres Rp 1.850.000 tanpa DP dan garansi 1 tahun ganti baru.',
    category: 'page',
  },
  {
    anchor: 'paket standar bisnis 4 kamera palembang',
    url: '/paket/paket-standar-bisnis-4-kamera/',
    title: 'Paket Standar Bisnis (4 Kamera) CCTV Palembang',
    description: 'Paket pasang CCTV 4 kamera 2MP Hikvision/Dahua paling laris di Palembang Rp 2.850.000 terima beres tanpa DP dan garansi 1 tahun ganti baru.',
    category: 'page',
  },
  {
    anchor: 'area jangkauan teknisi cctv palembang',
    url: '/area/',
    title: 'Area Layanan CCTV Palembang',
    description: 'Cakupan pengiriman teknisi se-Kota Palembang, Banyuasin, dan Ogan Ilir.',
    category: 'page',
  },
  {
    anchor: 'artikel edukasi keamanan cctv',
    url: '/blog/',
    title: 'Pusat Edukasi & Blog CCTV Palembang',
    description: 'Tips keamanan, panduan teknis, dan perbandingan perangkat pengawas.',
    category: 'page',
  },
  // Spoke Blog Spesifik
  {
    anchor: 'sertifikasi ip66 ip67 dan wdr cctv cuaca palembang',
    url: '/blog/penjelasan-teknis-ip66-ip67-wdr-cuaca-palembang/',
    title: 'Sertifikasi IP66 IP67 dan WDR CCTV Cuaca Ekstrem Palembang',
    description: 'Panduan teknis ketahanan outdoor Ingress Protection dan True WDR menghadapi iklim tropis Palembang.',
    category: 'blog',
  },
  {
    anchor: 'perbedaan cctv analog hd vs ip camera poe palembang',
    url: '/blog/perbedaan-cctv-analog-vs-ip-camera/',
    title: 'Perbedaan CCTV Analog HD vs IP Camera PoE di Palembang',
    description: 'Komparasi teknis dan biaya per titik antara CCTV Analog HD dan IP Camera PoE untuk properti di Palembang.',
    category: 'blog',
  },
  {
    anchor: 'dokumentasi pemasangan 100 titik cctv perumahan palembang',
    url: '/blog/dokumentasi-pemasangan-100-titik-cctv-palembang/',
    title: 'Dokumentasi Pemasangan 100 Titik CCTV Kompleks Perumahan Palembang',
    description: 'Studi kasus instalasi backbone fiber optic, tiang perimeter, dan video wall pos satpam skala kawasan.',
    category: 'blog',
  },
  {
    anchor: 'cara klaim garansi cctv 1 tahun palembang',
    url: '/blog/cara-klaim-garansi-cctv-1-tahun-palembang/',
    title: 'Cara Klaim Garansi CCTV 1 Tahun Ganti Baru di Palembang',
    description: 'Panduan purna jual garansi ganti baru, kategori kerusakan, alur klaim, dan SLA teknisi Palembang.',
    category: 'blog',
  },
  {
    anchor: 'tips memilih merk cctv hikvision dahua hilook',
    url: '/blog/tips-memilih-merk-cctv-hikvision-dahua-hilook/',
    title: 'Tips Memilih Merk CCTV Hikvision, Dahua, dan HiLook',
    description: 'Perbandingan orisinalitas unit, aplikasi pantau HP, dukungan purnajual, dan posisi harga tiga merk CCTV.',
    category: 'blog',
  }
];

export function getLinkByUrl(url: string) {
  return internalLinksRegistry.find(item => item.url === url);
}

export function getLinksByCategory(category: 'service' | 'blog' | 'page') {
  return internalLinksRegistry.filter(item => item.category === category);
}
