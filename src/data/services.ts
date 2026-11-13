export interface ServicePackage {
  name: string;
  price: string;
  competitorPrice?: string;
  badge?: string;
  features: string[];
}

export interface RabItem {
  component: string;
  spec: string;
  qty: string;
  unitPrice: string;
  subtotal: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  heroHeadline: string;
  heroSubtitle: string;
  serviceType: string;
  targetAudience: string;
  image: string;
  packages: ServicePackage[];
  rabSimulation: {
    packageName: string;
    total: string;
    items: RabItem[];
    notes: string;
  };
  hardwareSpecs: {
    category: string;
    details: { name: string; spec: string; benefit: string }[];
  }[];
  localAreaAnalysis: {
    area: string;
    characteristics: string;
    recommendedSystem: string;
  }[];
  sopAndK3: string[];
  legalityAndWarranty: string[];
  faqs: { question: string; answer: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: 'pasang-cctv-rumah-palembang',
    title: 'Jasa Pasang CCTV Rumah di Palembang',
    metaTitle: 'Jasa Pasang CCTV Rumah Palembang — Tanpa DP & Garansi 1 Tahun Ganti Baru',
    description: 'Jasa pasang CCTV rumah hunian dan cluster perumahan di Palembang. Tanpa uang muka (DP 0%), instalasi rapi pipa PVC conduit, kamera 2MP jernih terhubung ke HP keluarga.',
    heroHeadline: 'Lindungi Keluarga & Properti Rumah Anda dengan CCTV Cerdas Bergaransi',
    heroSubtitle: 'Solusi keamanan residensial nomor satu di Palembang. Bayar hanya setelah kamera menyala sempurna. Teknisi sopan, no-smoking, dan instalasi rapi tertutup conduit.',
    serviceType: 'Residential Security Camera Installation',
    targetAudience: 'Pemilik rumah tinggal, perumahan cluster, townhouse, dan indekos se-Kota Palembang',
    image: '/images/services/pasang-cctv-rumah-palembang.webp',
    packages: [
      {
        name: 'Paket Hemat Rumah (2 Kamera 2MP)',
        price: 'Rp 1.850.000',
        competitorPrice: 'Rp 2.200.000',
        badge: 'Paling Hemat',
        features: [
          '2 Kamera Hikvision / Dahua 2MP Full HD 1080p',
          '1 DVR 4-Channel Turbo HD (Siap ekspansi ke 4 kamera)',
          'Harddisk 500GB Khusus CCTV (Rekam 10-12 hari otomatis overwrite)',
          'Kabel Coaxial RG59 + Power Coaxial 20 Meter',
          'Adaptor & Jack BNC/DC Premium anti-karat',
          'Gratis Instalasi Rapi Pipa Conduit & Setting Online ke HP',
          'Garansi Resmi 1 Tahun Ganti Unit Baru',
          '100% Tanpa DP — Bayar setelah CCTV menyala rapi'
        ]
      },
      {
        name: 'Paket Standar Rumah 2 Lantai (4 Kamera 2MP)',
        price: 'Rp 2.850.000',
        competitorPrice: 'Rp 2.999.000',
        badge: 'Paling Laris di Palembang',
        features: [
          '4 Kamera Hikvision / Dahua 2MP (Bebas pilih Indoor & Outdoor)',
          '1 DVR 4-Channel Full HD Turbo',
          'Harddisk 1TB Surveillance (Rekam 18-20 hari)',
          'Kabel Coaxial RG59 + Power Coaxial 40 Meter',
          'Power Supply Sentral 10A Jaring Berkualitas',
          'Gratis Instalasi Rapi Pipa Conduit & Setting Multi-HP',
          'Garansi Resmi 1 Tahun Ganti Unit Baru',
          '100% Tanpa DP — Bayar setelah uji coba selesai'
        ]
      },
      {
        name: 'Paket Rumah Full Color Malam (4 Kamera ColorVu)',
        price: 'Rp 3.190.000',
        competitorPrice: 'Rp 3.300.000',
        badge: 'Malam Tetap Berwarna',
        features: [
          '4 Kamera Hikvision ColorVu / Dahua Full Color 2MP F1.0 Aperture',
          'Rekaman tetap berwarna tajam tengah malam jam 12 tanpa lampu jalan',
          '1 DVR 4-Channel Full HD Smart Playback',
          'Harddisk 1TB Surveillance Original',
          'Kabel Shielded Coaxial RG59 40 Meter + Power Supply anti-induksi petir',
          'Gratis Pemasangan Rapi Berpipa & Konfigurasi Notifikasi Gerak ke HP',
          'Garansi Resmi 1 Tahun Ganti Unit Baru',
          'Bayar di Tempat (COD) Tanpa Uang Muka'
        ]
      }
    ],
    rabSimulation: {
      packageName: 'Simulasi RAB Paket Standar Rumah 4 Kamera (Terima Beres)',
      total: 'Rp 2.850.000',
      items: [
        { component: 'Kamera CCTV 2MP Indoor/Outdoor', spec: 'Hikvision DS-2CE / Dahua HAC-HFW 1080p Lens 2.8mm/3.6mm', qty: '4 Unit', unitPrice: 'Rp 280.000', subtotal: 'Rp 1.120.000' },
        { component: 'Perekam DVR 4-Channel', spec: 'Hikvision Turbo HD / Dahua Pentabrid H.265+ Compression', qty: '1 Unit', unitPrice: 'Rp 550.000', subtotal: 'Rp 550.000' },
        { component: 'Harddisk Khusus CCTV', spec: 'Seagate SkyHawk / WD Purple 1TB 24/7 Surveillance Grade', qty: '1 Unit', unitPrice: 'Rp 650.000', subtotal: 'Rp 650.000' },
        { component: 'Power Supply Sentral', spec: 'Power Supply Jaring 12V 10A Dedicated Fuse Protection', qty: '1 Unit', unitPrice: 'Rp 180.000', subtotal: 'Rp 180.000' },
        { component: 'Kabel Coaxial + Power', spec: 'RG59 Shielded 95% Braiding + Copper Power Cable', qty: '40 Meter', unitPrice: 'Rp 6.000', subtotal: 'Rp 240.000' },
        { component: 'Konektor & Aksesori', spec: 'BNC Taiwan Compression Crimp + Male DC Jack Anti Korosi', qty: '1 Set', unitPrice: 'Rp 110.000', subtotal: 'Rp 110.000' },
        { component: 'Pipa Conduit & Clamp', spec: 'Pipa Conduit PVC High Impact 20mm + Soket + Klem Dinding', qty: 'Free Promo', unitPrice: 'Rp 0', subtotal: 'Rp 0 (Bonus)' },
        { component: 'Jasa Pasang & Setting HP', spec: 'Instalasi SOP teknisi rapi, crimping, terminasi, dan edukasi aplikasi HP', qty: '4 Titik', unitPrice: 'Free Promo', subtotal: 'Rp 0 (Bonus)' }
      ],
      notes: 'Harga terima beres tanpa biaya tersembunyi. Penggunaan kabel tambahan melebihi kuota 40 meter dikenakan tarif hemat Rp 6.000/meter.'
    },
    hardwareSpecs: [
      {
        category: 'Kamera Pengawas (Optik & Sensor)',
        details: [
          { name: 'Resolusi Sensor', spec: '2.0 Megapixel (1920 x 1080 Full HD)', benefit: 'Detail wajah anggota keluarga dan plat nomor kendaraan terlihat jelas tanpa blur.' },
          { name: 'Sudut Pandang Lensa', spec: '2.8mm (Wide 103°) atau 3.6mm (82°)', benefit: 'Cakupan sudut ruang garasi atau teras sangat lebar tanpa banyak titik buta (blind spot).' },
          { name: 'Night Vision Inframerah / ColorVu', spec: 'Smart IR 20-30m / Warm LED 20m F1.0', benefit: 'Pantauan malam hari tetap terang benderang meski lampu teras sengaja dimatikan.' }
        ]
      },
      {
        category: 'Media Penyimpanan & Perekaman (DVR & HDD)',
        details: [
          { name: 'Kompresi Video', spec: 'H.265+ High Efficiency Video Coding', benefit: 'Hemat konsumsi memori harddisk hingga 75% dibanding H.264 standar lama.' },
          { name: 'Tipe Harddisk', spec: 'Surveillance Duty 24/7 (Bukan HDD PC Biasa)', benefit: 'Tahan bekerja nonstop 24 jam tanpa panas berlebih, rekaman awet tidak mudah korup.' }
        ]
      }
    ],
    localAreaAnalysis: [
      {
        area: 'Kompleks Perumahan Sukarami & Alang-Alang Lebar',
        characteristics: 'Kawasan perumahan berkembang dengan aktivitas mobilitas tinggi penghuni yang bekerja di pusat kota.',
        recommendedSystem: 'Paket 4 Kamera Full Color dengan notifikasi deteksi manusia langsung ke aplikasi HP saat rumah ditinggal kosong.'
      },
      {
        area: 'Kawasan Residensial Jakabaring & Plaju',
        characteristics: 'Wilayah dekat aliran anak Sungai Musi dengan kelembapan udara tinggi dan paparan terik matahari siang hari.',
        recommendedSystem: 'Kamera tipe Outdoor IP67 waterproof casing tebal dengan proteksi kabel pipa conduit tertutup penuh.'
      },
      {
        area: 'Pemukiman Padat Ilir Barat & Ilir Timur',
        characteristics: 'Jalan akses lingkungan lebih sempit, jarak pandang pendek antarrumah, dan perlunya pengawasan garasi pagar.',
        recommendedSystem: 'Kamera lensa 2.8mm sudut ultra lebar agar seluruh halaman teras termonitor sempurna dari satu titik pasang.'
      }
    ],
    sopAndK3: [
      'Pengecekan jalur pipa air dan instalasi kabel listrik PLN sebelum melakukan pengeboran dinding.',
      'Wajib menggunakan pipa conduit PVC High Impact pelindung kabel untuk mencegah gigitan tikus di atas plafon.',
      'Teknisi wajib mengenakan sabuk pengaman / tangga aluminium berstandar saat menjangkau titik tinggi atap.',
      'SOP Bebas Asap Rokok (No-Smoking): Teknisi dilarang merokok di area properti pelanggan demi kenyamanan keluarga.',
      'Pembersihan tuntas serpihan debu semen dan sisa potongan isolasi/kabel sebelum menyerahkan sistem ke pemilik rumah.'
    ],
    legalityAndWarranty: [
      'Garansi Resmi 1 Tahun Ganti Baru untuk unit Kamera, DVR, dan Harddisk (bukan servis berbulan-bulan).',
      'Kuitansi dan invoice resmi bertanda tangan & stempel untuk kepastian klaim pasca-pemasangan.',
      'SLA Kunjungan Perbaikan Teknisi maksimal 24 s/d 48 jam kerja sejak pelaporan tiket WhatsApp.'
    ],
    faqs: [
      {
        question: 'Apakah benar pemasangan CCTV ini tanpa uang muka sama sekali (Tanpa DP)?',
        answer: 'Benar 100%. Anda tidak perlu mentransfer uang sepeser pun di awal. Teknisi kami datang membawa peralatan lengkap, memasang seluruh kamera hingga rapi, menyalakan sistem, dan mengajari Anda setting ke HP. Anda baru membayar setelah semua bekerja normal.'
      },
      {
        question: 'Berapa hari rekaman CCTV 4 kamera dapat tersimpan di harddisk 1TB?',
        answer: 'Dengan teknologi kompresi video H.265+ modern yang kami pasang, harddisk 1TB surveillance mampu menyimpan rekaman rekaman terus menerus selama 18 hingga 22 hari. Setelah penuh, sistem secara otomatis menghapus rekaman hari paling lama dan menimpanya dengan hari baru (auto overwrite).'
      },
      {
        question: 'Apakah CCTV rumah ini bisa dipantau langsung dari HP saat saya sedang di luar kota?',
        answer: 'Bisa, asalkan di rumah Anda tersedia koneksi internet (seperti IndiHome, Biznet, MyRepublic, First Media, Iconnet, atau modem router WiFi). Teknisi kami akan menghubungkan DVR ke internet dan menginstal aplikasi resmi Hik-Connect / DMSS di seluruh HP anggota keluarga tanpa biaya tambahan.'
      },
      {
        question: 'Bagaimana jika di rumah saya belum terpasang internet WiFi?',
        answer: 'CCTV tetap berfungsi normal 100% merekam video 24 jam nonstop ke dalam harddisk dan dapat ditonton melalui layar TV/monitor di rumah. Kapan pun Anda memasang WiFi di kemudian hari, sistem tinggal disambungkan ke internet agar bisa online ke HP.'
      },
      {
        question: 'Bagaimana prosedur klaim jika ada kamera yang mati dalam masa garansi?',
        answer: 'Cukup kirim pesan WhatsApp ke nomor resmi kami 0857-5890-3353. Tim teknisi kami akan menjadwalkan kunjungan pengecekan ke rumah Anda. Bila terjadi kerusakan teknis pada perangkat, unit langsung diganti baru di tempat tanpa prosedur birokrasi rumit.'
      },
      {
        question: 'Berapa lama proses pemasangan 4 titik kamera di rumah tinggal?',
        answer: 'Pemasangan paket standar 4 kamera di rumah 1 atau 2 lantai umumnya memakan waktu sekitar 3 hingga 5 jam kerja, tergantung jalur plafon dan tingkat kesulitan arsitektur rumah Anda.'
      }
    ]
  },
  {
    slug: 'pasang-cctv-ruko-toko-palembang',
    title: 'Instalasi CCTV Ruko & Tempat Usaha di Palembang',
    metaTitle: 'Jasa Pasang CCTV Ruko & Toko Palembang — Solusi Pantau Kasir & Anti Maling',
    description: 'Instalasi CCTV khusus ruko, minimarket, toko grosir, kafe, dan perkantoran di Palembang. Pantau meja kasir tajam, area parkir, etalase, dan stok barang 24 jam nonstop.',
    heroHeadline: 'Cegah Kecurangan Kasir & Amankan Aset Tempat Usaha Anda 24 Jam',
    heroSubtitle: 'Sistem pengawasan terintegrasi untuk ruko bertingkat dan toko ritel se-Kota Palembang. Kualitas rekaman tajam untuk mendeteksi nominal uang dan wajah pelanggan.',
    serviceType: 'Commercial Surveillance System Installation',
    targetAudience: 'Pemilik ruko perdagangan, kafe, restoran, apotek, minimarket, dan toko grosir se-Palembang',
    image: '/images/services/pasang-cctv-ruko-toko-palembang.webp',
    packages: [
      {
        name: 'Paket Standar Ruko 2 Lantai (4 Kamera)',
        price: 'Rp 2.850.000',
        competitorPrice: 'Rp 2.999.000',
        badge: 'Favorit Toko & Ruko',
        features: [
          '4 Kamera 2MP Hikvision/Dahua (1 Kamera Kasir Lensa Sempit + 3 Kamera Sudut Lebar)',
          '1 DVR 4-Channel Turbo HD H.265+',
          'Harddisk 1TB Surveillance (Rekam 20 hari)',
          'Kabel Coaxial RG59 + Power Shielded 40 Meter',
          'Power Supply Sentral 10A Fuse Box',
          'Free Pemasangan Pipa Conduit & Setting HP Owner',
          'Garansi 1 Tahun Ganti Unit Baru',
          'Sistem Tanpa DP (Bayar Setelah Beres)'
        ]
      },
      {
        name: 'Paket Full Color Ruko & Parkiran (4 Kamera 24 Jam)',
        price: 'Rp 3.190.000',
        competitorPrice: 'Rp 3.300.000',
        badge: 'Parkiran Tetap Terang',
        features: [
          '4 Kamera 2MP Full Color Hikvision ColorVu / Dahua Full Color',
          'Rekaman warna alami 24 jam menangkap warna baju & plat kendaraan malam hari',
          '1 DVR 4-Channel Full HD',
          'Harddisk 1TB Surveillance Original',
          'Kabel Shielded 40 Meter + Jalur Conduit Rapi',
          'Power Supply Jaring Dedicated dengan proteksi arus listrik',
          'Free Setting Streaming Multi-Device Pemilik Bisnis',
          'Garansi 1 Tahun Ganti Baru — Tanpa DP'
        ]
      },
      {
        name: 'Paket Komprehensif Ruko 3-4 Lantai (8 Kamera)',
        price: 'Rp 5.450.000',
        competitorPrice: 'Rp 6.200.000',
        badge: 'Cakupan Menyeluruh',
        features: [
          '8 Kamera 2MP Hikvision/Dahua (Kombinasi Kasir, Etalase, Gudang Lantai Atas & Parkir)',
          '1 DVR 8-Channel Turbo HD',
          'Harddisk 2TB Surveillance (Kapasitas rekam besar)',
          'Kabel Coaxial RG59 80 Meter + Pipa Conduit Pelindung',
          'Power Supply Sentral 20A Box Metal Berkunci',
          'Gratis Instalasi Rapi & Pelatihan Staff',
          'Garansi Resmi 1 Tahun Ganti Baru',
          'Bayar di Tempat Tanpa Uang Muka'
        ]
      }
    ],
    rabSimulation: {
      packageName: 'Simulasi RAB Paket Ruko 4 Kamera dengan 1 Titik Fokus Kasir',
      total: 'Rp 2.850.000',
      items: [
        { component: 'Kamera Lensa Kasir (3.6mm/6mm)', spec: 'Hikvision 2MP High Definition fokus jarak dekat meja kasir', qty: '1 Unit', unitPrice: 'Rp 295.000', subtotal: 'Rp 295.000' },
        { component: 'Kamera Sudut Luas Toko (2.8mm)', spec: 'Hikvision 2MP Wide Angle 103° untuk lorong belanja & etalase', qty: '3 Unit', unitPrice: 'Rp 280.000', subtotal: 'Rp 840.000' },
        { component: 'Perekam DVR 4 Channel', spec: 'Turbo HD H.265+ dengan fitur Smart Search rekaman', qty: '1 Unit', unitPrice: 'Rp 550.000', subtotal: 'Rp 550.000' },
        { component: 'Harddisk 1TB Surveillance', spec: 'Seagate SkyHawk 24/7 continuous writing', qty: '1 Unit', unitPrice: 'Rp 650.000', subtotal: 'Rp 650.000' },
        { component: 'Power Supply 12V 10A', spec: 'Jaring casing aluminium dengan sekering proteksi korsleting', qty: '1 Unit', unitPrice: 'Rp 180.000', subtotal: 'Rp 180.000' },
        { component: 'Kabel Coaxial Shielded', spec: 'RG59 Braiding tebal anti interferensi motor/kulkas showcase', qty: '40 Meter', unitPrice: 'Rp 6.000', subtotal: 'Rp 240.000' },
        { component: 'Aksesori & Konektor', spec: 'BNC Crimp Taiwan + Jack DC Male/Female', qty: '1 Set', unitPrice: 'Rp 95.000', subtotal: 'Rp 95.000' },
        { component: 'Pipa Conduit PVC & Instalasi', spec: 'Instalasi rapi tanpa mengganggu operasional toko, setting HP owner', qty: '1 Paket', unitPrice: 'Free Promo', subtotal: 'Rp 0 (Bonus)' }
      ],
      notes: 'Khusus pemasangan ruko bertingkat, penarikan antar-lantai dilakukan lewat shaft kabel gedung atau pipa conduit rapi.'
    },
    hardwareSpecs: [
      {
        category: 'Spesifikasi Khusus Pengawasan Kasir & Toko',
        details: [
          { name: 'Kamera Kasir (Focal Length 3.6mm/6mm)', spec: 'Sudut pandang terfokus ke area meja laci kasir', benefit: 'Mampu memperjelas pecahan lembar uang Rp 50.000 dan Rp 100.000 saat transaksi.' },
          { name: 'Audio Mikrofon Terintegrasi (Opsional)', spec: 'Built-in Mic High Sensitivity', benefit: 'Merekam percakapan kasir dengan pembeli untuk mengantisipasi sengketa atau komplain.' },
          { name: 'Housing Anti-Benturan (Vandal-Proof)', spec: 'Dome Metal Housing IP66', benefit: 'Kokoh dan tidak mudah dirusak atau diputar arahnya oleh orang yang berniat jahat.' }
        ]
      }
    ],
    localAreaAnalysis: [
      {
        area: 'Sentra Bisnis Kolonel Atmo, Sayangan & Sudirman',
        characteristics: 'Kawasan ruko padat dengan aktivitas bongkar muat barang tinggi dan deretan pertokoan retail emas/pakaian/elektronik.',
        recommendedSystem: 'Kombinasi kamera fokus kasir, kamera lorong etalase, dan kamera outdoor full color mengarah ke pintu rolling door.'
      },
      {
        area: 'Kawasan Komersial R. Sukamto, Celentang & Basuki Rahmat',
        characteristics: 'Banyak kafe kekinian, restoran, apotek, dan ruko modern dengan instalasi interior estetik.',
        recommendedSystem: 'Pemasangan jalur kabel tersembunyi berpipa rapi agar tidak merusak konsep desain interior tempat usaha.'
      }
    ],
    sopAndK3: [
      'Pengerjaan instalasi dapat disesuaikan pada jam sebelum toko buka atau setelah toko tutup agar tidak mengganggu transaksi.',
      'Jalur kabel dipisahkan minimal 20 cm dari jalur kabel kulkas/chiller motor pendingin guna menghindari noise gelombang.',
      'Semua sambungan BNC diisolasi ganda dan diletakkan di dalam junction box tahan debu.',
      'SOP Bebas Rokok dan kebersihan area kasir dijaga ketat selama instalasi berlangsung.'
    ],
    legalityAndWarranty: [
      'Garansi Resmi 1 Tahun Ganti Baru untuk seluruh unit tanpa potongan biaya perbaikan.',
      'Dukungan kuitansi, faktur, dan stempel basah legal untuk pencatatan inventaris dan perpajakan badan usaha.',
      'Layanan konsultasi backup rekaman video untuk keperluan penyelidikan pihak berwenang.'
    ],
    faqs: [
      {
        question: 'Apakah kamera di area kasir bisa merekam pecahan uang kertas dengan jelas?',
        answer: 'Ya. Kami menempatkan kamera bersudut fokus terarah (focal length 3.6mm atau 6mm) tepat di atas meja kasir pada jarak optimal, sehingga tangan kasir, lembaran uang transaksi, dan struk pembayaran terlihat sangat jelas di layar rekaman.'
      },
      {
        question: 'Bisakah saya memantau beberapa ruko cabang sekaligus dalam satu layar HP?',
        answer: 'Tentu saja. Aplikasi Hik-Connect atau DMSS mendukung fitur multi-device. Anda dapat mengelompokkan kamera ruko cabang A, ruko cabang B, dan rumah pribadi dalam satu tampilan aplikasi di smartphone pemilik usaha.'
      },
      {
        question: 'Bagaimana jika kabel toko sering digigit tikus pada malam hari?',
        answer: 'Seluruh instalasi kami wajib menggunakan pipa conduit PVC High Impact yang keras dan kedap. Pipa ini membuat kabel terlindung rapat sehingga tikus tidak dapat menjangkau atau menggigit kabel tembaga di dalamnya.'
      },
      {
        question: 'Apakah teknisi bisa bekerja di luar jam buka ruko kami?',
        answer: 'Bisa. Kami menyediakan jadwal instalasi fleksibel (pagi hari sebelum ruko buka atau sore/malam hari setelah toko tutup) dengan konfirmasi jadwal terlebih dahulu ke nomor WhatsApp kami.'
      },
      {
        question: 'Berapa kapasitas harddisk yang disarankan untuk ruko 4 kamera?',
        answer: 'Kami menyarankan kapasitas minimal 1TB Surveillance yang mampu menampung rekaman continuous 24 jam selama kurang lebih 20 hari, sehingga Anda memiliki jendela waktu yang sangat cukup untuk mengecek rekaman saat audit bulanan.'
      },
      {
        question: 'Apakah sistem CCTV ruko ini bisa dipasang alarm bunyi saat ada penyusup malam hari?',
        answer: 'Bisa. Seri kamera aktif defending kami dilengkapi fitur Motion Detection dan smart siren yang akan membunyikan sirine peringatan dan mengirimkan pop-up notifikasi ke HP Anda saat ada pergerakan mencurigakan setelah jam tutup toko.'
      }
    ]
  },
  {
    slug: 'instalasi-ip-camera-gedung-pabrik-palembang',
    title: 'Instalasi IP Camera Gedung, Pabrik & Gudang di Palembang',
    metaTitle: 'Jasa Instalasi IP Camera Palembang — CCTV Skala Gedung, Gudang & Pabrik',
    description: 'Jasa pemasangan sistem IP Camera PoE digital resolusi tinggi untuk kawasan industri, pabrik, gudang logistik, hotel, dan kantor bertingkat di Palembang dan Sumatera Selatan.',
    heroHeadline: 'Solusi Jaringan IP Camera Digital Kelas Industri Berperforma Tinggi',
    heroSubtitle: 'Arsitektur surveillance skala besar berbasis Power over Ethernet (PoE), Switch Manageable, NVR Enterprise, dan kabel shielded anti-gangguan petir.',
    serviceType: 'Network IP Camera PoE Deployment',
    targetAudience: 'Manajer operasional gudang, pabrik manufaktur, kontraktor gedung, hotel, rumah sakit, dan instansi BUMN di Palembang',
    image: '/images/services/instalasi-ip-camera-gedung-pabrik-palembang.webp',
    packages: [
      {
        name: 'Paket Basic IP Cam PoE (4 Kamera Digital)',
        price: 'Rp 4.900.000',
        competitorPrice: 'Rp 5.500.000',
        badge: 'Kualitas Digital Crystal Clear',
        features: [
          '4 Unit IP Camera PoE 2MP/4MP Hikvision/Uniview Weatherproof IP67',
          '1 Unit NVR 4/8-Channel 4K H.265+ Output HDMI Ultra HD',
          '1 Unit Switch PoE 4-Port 100Mbps Dedicated Surveillance',
          'Harddisk 1TB / 2TB WD Purple / Seagate SkyHawk Enterprise',
          'Kabel LAN UTP Cat6 Shielded 60 Meter + RJ45 Cat6 Modular',
          'Instalasi Rapi Full Pipa Conduit & Setting VLAN Jaringan',
          'Garansi Resmi 1 Tahun Ganti Baru',
          'Syarat Pembayaran Fleksibel / Termin Resmi Perusahaan'
        ]
      },
      {
        name: 'Paket Industri Gudang Menengah (8 Kamera IP PoE)',
        price: 'Rp 8.750.000',
        competitorPrice: 'Rp 9.900.000',
        badge: 'Standar Pergudangan',
        features: [
          '8 Unit IP Camera PoE Outdoor Metal Housing IP67 IR 40 Meter',
          '1 Unit NVR 8/16-Channel 4K Dual HDMI/VGA Output',
          '1 Unit Switch PoE 8-Port Gigabit + 2 Uplink Port',
          'Harddisk 2TB / 4TB Enterprise Surveillance',
          'Kabel UTP Cat6 Shielded FTP Outdoor 120 Meter',
          'Box Panel Waterproof + Surge Arrester Proteksi Petir',
          'Gratis Desain Topologi Jaringan & Training Tim IT Internal',
          'Garansi Resmi 1 Tahun Ganti Unit Baru'
        ]
      },
      {
        name: 'Paket Enterprise & Fiber Optic (16+ Kamera Custom)',
        price: 'Kustom / Hubungi Kami',
        badge: 'Skala Pabrik & Kawasan Luas',
        features: [
          '16 s/d 64 Kamera IP PoE 4MP / 8MP (4K) PTZ Zoom 360 Derajat',
          'NVR Enterprise Rackmount 32/64 Channel Dual NIC & Hot-Swap HDD',
          'Transmisi Fiber Optic Antar-Gedung Menggunakan Media Converter / SFP Module',
          'Server Rack 19 Inch + UPS Online Pure Sine Wave Backup Listrik',
          'Konfigurasi Video Wall Control Room & Integrasi Sistem Absensi/Gate',
          'SOP Keselamatan Kerja K3 Standar Industri Berat',
          'Garansi Resmi Sparepart 1-2 Tahun + Kontrak SLA Maintenance'
        ]
      }
    ],
    rabSimulation: {
      packageName: 'Simulasi RAB Paket 4 Titik IP Camera PoE Kelas Bisnis',
      total: 'Rp 4.900.000',
      items: [
        { component: 'IP Camera 2MP/4MP PoE Weatherproof', spec: 'Hikvision / Dahua Outdoor Metal IP67 WDR 120dB', qty: '4 Unit', unitPrice: 'Rp 550.000', subtotal: 'Rp 2.200.000' },
        { component: 'NVR 4-Channel 4K H.265+', spec: 'NVR Smart Analytics, Audio I/O, Plug & Play PoE ready', qty: '1 Unit', unitPrice: 'Rp 850.000', subtotal: 'Rp 850.000' },
        { component: 'Switch PoE 4-Port + 2 Uplink', spec: 'PoE Switch 65W IEEE 802.3af/at Long Range 250m Mode', qty: '1 Unit', unitPrice: 'Rp 450.000', subtotal: 'Rp 450.000' },
        { component: 'Harddisk 1TB Surveillance', spec: 'WD Purple / Seagate SkyHawk 64MB Cache 5400 RPM', qty: '1 Unit', unitPrice: 'Rp 650.000', subtotal: 'Rp 650.000' },
        { component: 'Kabel UTP Cat6 FTP Shielded', spec: 'Kabel outdoor pelindung aluminium foil + grounding wire', qty: '60 Meter', unitPrice: 'Rp 7.500', subtotal: 'Rp 450.000' },
        { component: 'Konektor RJ45 Cat6 + Patch Cord', spec: 'RJ45 Shielded Gold Plated + Boot Cover', qty: '1 Set', unitPrice: 'Rp 100.000', subtotal: 'Rp 100.000' },
        { component: 'Pipa Conduit PVC High Impact', spec: 'Pipa 20mm + Klem + Box Sambungan Waterproof', qty: '1 Paket', unitPrice: 'Rp 200.000', subtotal: 'Rp 200.000' },
        { component: 'Jasa Crimping, Fluke Test & Setup', spec: 'Uji koneksi jaringan, konfigurasi IP static, penomoran kabel', qty: '4 Titik', unitPrice: 'Free Promo', subtotal: 'Rp 0 (Bonus)' }
      ],
      notes: 'Estimasi harga dapat disesuaikan dengan jarak tarikan kabel aktual dan kebutuhan spesifik topologi jaringan di lokasi pabrik/gudang.'
    },
    hardwareSpecs: [
      {
        category: 'Spesifikasi Sistem Digital IP & Jaringan',
        details: [
          { name: 'Teknologi Power over Ethernet (PoE)', spec: 'Standard IEEE 802.3af/at', benefit: 'Daya listrik dan transmisi data video berjalan lewat satu kabel LAN Cat6, menghemat biaya kabel listrik.' },
          { name: 'Resolusi Digital True WDR 120dB', spec: 'Sensor Digital Ultra Clarity', benefit: 'Mampu mengimbangi perbedaan cahaya ekstrem di pintu gerbang bongkar muat gudang tanpa silau.' },
          { name: 'Ketahanan Cuaca & Debu', spec: 'Casing Logam Sertifikasi IP67', benefit: 'Tahan semprotan air hujan deras, debu semen pabrik, dan paparan suhu panas atap seng Palembang.' }
        ]
      }
    ],
    localAreaAnalysis: [
      {
        area: 'Kawasan Industri Kramasan, Kertapati & Gandus',
        characteristics: 'Kawasan pabrik, galangan kapal, dan gudang semen/logistik dengan debu tebal, vibrasi mesin, dan bentangan area puluhan ribu meter persegi.',
        recommendedSystem: 'IP Camera housing logam berpelindung debu IP67 dengan transmisi kabel LAN Cat6 Shielded atau backbone Fiber Optic.'
      },
      {
        area: 'Kawasan Pergudangan Bandara & Tanjung Api-Api (Sukarami)',
        characteristics: 'Pusat distribusi logistik ekspedisi yang beroperasi 24 jam nonstop dengan mobilitas truk kontainer.',
        recommendedSystem: 'IP Camera lensa fokus plat nomor kendaraan (LPR/ANPR ready) dan kamera PTZ pemantau seluruh halaman parkir kontainer.'
      }
    ],
    sopAndK3: [
      'Penerapan ketat Alat Pelindung Diri (APD K3): Helm proyek, rompi scotlight, kacamata pelindung, dan sepatu safety bersol baja.',
      'Sertifikasi pengerjaan ketinggian menggunakan perancah scaffolding atau tangga boom lift yang terkunci stabil.',
      'Pengetesan sertifikasi kabel LAN menggunakan kabel tester / Fluke meter untuk memastikan transmisi throughput gigabit stabil.',
      'Pemasangan sistem grounding mandiri (pembumian di bawah 5 Ohm) untuk membuang induksi petir sebelum masuk ke switch dan NVR.'
    ],
    legalityAndWarranty: [
      'Legalitas lengkap: SIUP, NIB, NPWP perusahaan siap melayani pengadaan instansi BUMN, dinas pemerintahan, dan korporasi swasta.',
      'Faktur pajak resmi dan invoice resmi bertanda tangan pimpinan perusahaan.',
      'Garansi produk 1 hingga 2 tahun penggantian suku cadang pabrikan resmi.'
    ],
    faqs: [
      {
        question: 'Apa perbedaan utama IP Camera PoE dibanding sistem CCTV Analog biasa?',
        answer: 'IP Camera mengirimkan sinyal video digital murni dengan resolusi yang jauh lebih tinggi dan detail zoom yang tidak pecah. Selain itu, sistem PoE hanya memerlukan satu kabel LAN untuk menyalurkan daya listrik sekaligus video, sehingga instalasi di gedung besar jauh lebih ringkas, aman, dan mudah dimonitor per segmen jaringan.'
      },
      {
        question: 'Berapa jarak maksimal tarikan kabel LAN PoE dari switch ke kamera?',
        answer: 'Jarak standar transmisi kabel UTP Cat6 PoE adalah 100 meter. Namun, untuk switch PoE khusus industri yang kami sediakan, terdapat fitur Long Range Mode yang sanggup mengalirkan sinyal hingga jarak 250 meter tanpa bantuan repeater. Bila jarak antargedung melebihi 250 meter, kami menggunakan kabel Fiber Optic.'
      },
      {
        question: 'Apakah sistem IP Camera ini dapat diakses dari kantor pusat di Jakarta?',
        answer: 'Sangat bisa. NVR Enterprise kami dapat dihubungkan ke jaringan internet publik melalui IP Static atau layanan Cloud P2P terenkripsi, sehingga jajaran manajemen di kantor pusat dapat memantau rekaman gudang/pabrik Palembang secara real-time kapan pun dibutuhkan.'
      },
      {
        question: 'Apakah kami mendapatkan dokumen topologi dan penomoran kabel setelah selesai proyek?',
        answer: 'Ya. Untuk setiap proyek IP Camera gedung dan pabrik, kami selalu menyerahkan dokumen as-built drawing, peta topologi jaringan, tabel alokasi IP address, dan label penomoran di setiap patch panel untuk memudahkan tim IT internal Anda.'
      },
      {
        question: 'Bagaimana penanganan proteksi petir untuk kamera luar ruangan pabrik?',
        answer: 'Kami memasang surge arrester RJ45 PoE pada setiap jalur kabel luar ruangan dan menyambungkannya ke sistem pembumian (grounding rod) dengan resistansi di bawah 5 Ohm guna menyalurkan lonjakan tegangan petir langsung ke tanah.'
      },
      {
        question: 'Apakah bisa menggunakan sistem pembayaran termin bertahap untuk perusahaan kami?',
        answer: 'Bisa. Untuk proyek korporasi, pabrik, dan instansi, kami melayani sistem pembayaran termin (misal DP PO, termin progress fisik, dan pelunasan berita acara serah terima BAST) dengan dokumen invoice resmi dan faktur pajak.'
      }
    ]
  },
  {
    slug: 'jasa-servis-maintenance-cctv-palembang',
    title: 'Jasa Servis & Maintenance CCTV di Palembang',
    metaTitle: 'Jasa Servis CCTV Palembang Panggilan — Kamera Mati, Harddisk & Setting HP',
    description: 'Jasa servis dan perbaikan CCTV rusak di Palembang panggilan cepat. Atasi kamera mati, DVR bunyi terus, harddisk tidak terbaca, gambar bergaris, lupa password, dan setting online HP.',
    heroHeadline: 'Solusi Cepat Perbaikan CCTV Rusak & Maintenance Berkala di Palembang',
    heroSubtitle: 'Armada teknisi ahli panggilan se-Kota Palembang. Kami menelusuri kerusakan tepat pada sumber masalah tanpa bongkar asal-asalan. Biaya transparan dan bergaransi.',
    serviceType: 'Security System Repair and Maintenance',
    targetAudience: 'Pemilik rumah, kantor, dan tempat usaha yang sistem CCTV-nya mati, bermasalah, atau butuh perawatan tahunan',
    image: '/images/services/jasa-servis-maintenance-cctv-palembang.webp',
    packages: [
      {
        name: 'Paket Servis Panggilan Standar (Troubleshooting)',
        price: 'Rp 150.000 - Rp 250.000',
        badge: 'Panggilan Cepat',
        features: [
          'Kunjungan teknisi langsung ke lokasi di seluruh wilayah Palembang',
          'Pemeriksaan menyeluruh: Jalur tegangan power supply, konektor BNC/RJ45, dan status DVR',
          'Perbaikan sambungan kabel putus, kendor, atau korosi',
          'Pengetesan display monitor dan kalibrasi sudut lensa kamera',
          'Biaya belum termasuk penggantian sparepart (bila ada komponen yang mati total)'
        ]
      },
      {
        name: 'Paket Setting Ulang Online HP (Ganti WiFi/Modem)',
        price: 'Rp 150.000',
        badge: 'Solusi CCTV Offline',
        features: [
          'Konfigurasi ulang koneksi internet DVR/NVR ke modem/router WiFi baru',
          'Reset akun cloud P2P (Hik-Connect, DMSS, EZVIZ, Imou Life)',
          'Instalasi dan sinkronisasi ke smartphone anggota keluarga atau staf kantor',
          'Pengujian streaming jarak jauh menggunakan jaringan data seluler'
        ]
      },
      {
        name: 'Paket Maintenance Rutin Gedung / Kantor (Kontrak Bulanan/Tahunan)',
        price: 'Mulai Rp 50.000 / titik / bulan',
        badge: 'Perawatan Berkala B2B',
        features: [
          'Pembersihan optik kaca lensa dari debu, sarang laba-laba, dan jamur kelembapan',
          'Pemeriksaan kapasitas harddisk dan integritas log rekaman 24/7',
          'Pengukuran voltase power supply dan uji cadangan baterai UPS',
          'Pengencangan braket dudukan dan pengecekan pipa conduit pelindung',
          'Laporan tertulis berkala (Health Check Report) untuk manajemen gedung'
        ]
      }
    ],
    rabSimulation: {
      packageName: 'Estimasi Biaya Penggantian Komponen Rusak CCTV (Transparan)',
      total: 'Variatif Sesuai Kerusakan',
      items: [
        { component: 'Biaya Jasa Kunjungan & Analisa Awal', spec: 'Pengecekan teknisi ke lokasi se-Palembang', qty: '1 Kunjungan', unitPrice: 'Rp 100.000', subtotal: 'Rp 100.000' },
        { component: 'Penggantian Adaptor Dedicated Kamera', spec: 'Adaptor 12V 2A Grade A Stabilized', qty: '1 Unit', unitPrice: 'Rp 65.000', subtotal: 'Rp 65.000' },
        { component: 'Penggantian Power Supply Central 10A', spec: 'Power supply jaring aluminium dengan sekering cadangan', qty: '1 Unit', unitPrice: 'Rp 180.000', subtotal: 'Rp 180.000' },
        { component: 'Penggantian Konektor BNC / DC', spec: 'BNC Taiwan Compression anti-goyang', qty: '1 Pasang', unitPrice: 'Rp 25.000', subtotal: 'Rp 25.000' },
        { component: 'Penggantian Harddisk CCTV 1TB Baru', spec: 'Seagate SkyHawk Surveillance Original Garansi 3 Tahun', qty: '1 Unit', unitPrice: 'Rp 650.000', subtotal: 'Rp 650.000' },
        { component: 'Jasa Tarik Ulang Kabel Putus', spec: 'Penarikan kabel RG59/LAN baru berpipa per meter', qty: 'Per Meter', unitPrice: 'Rp 10.000', subtotal: 'Rp 10.000 / m' }
      ],
      notes: 'Pelanggan selalu diberitahu estimasi rincian biaya sparepart sebelum teknisi melakukan penggantian fisik di tempat.'
    },
    hardwareSpecs: [
      {
        category: 'Alat Uji & Diagnostik Teknisi Lapangan',
        details: [
          { name: 'CCTV Tester Monitor Portabel', spec: 'Tester 4K AHD/TVI/CVI/IP dengan multimeter internal', benefit: 'Mendeteksi titik kerusakan kabel dan sinyal kamera di atas plafon tanpa harus bolak-balik ke layar DVR.' },
          { name: 'Optical Power Meter & Cable Tracker', spec: 'Tone Generator & LAN Continuity Tester', benefit: 'Menemukan titik kabel yang putus di dalam pipa atau plafon bertingkat dalam waktu singkat.' },
          { name: 'Multimeter Digital True RMS', spec: 'Pengukur voltase dan ampere presisi', benefit: 'Mendeteksi arus drop tegangan yang menyebabkan kamera mati berkedip pada malam hari.' }
        ]
      }
    ],
    localAreaAnalysis: [
      {
        area: 'Kawasan Lembab Dekat Sungai Musi & Rawa Palembang',
        characteristics: 'Tingkat oksidasi konektor sangat cepat dan rawan gigitan serangga/hewan pengerat di atas plafon.',
        recommendedSystem: 'Penggantian konektor tembaga berpelindung isolasi silikon dan penambahan silica gel di dalam junction box kamera.'
      },
      {
        area: 'Kawasan Rawan Petir Dataran Terbuka Jakabaring & Plaju',
        characteristics: 'Fluktuasi lonjakan listrik sering merusak port HDMI DVR dan adaptor power supply.',
        recommendedSystem: 'Pemasangan Surge Protector listrik dan penyelarasan grounding netral stopkontak listrik PLN.'
      }
    ],
    sopAndK3: [
      'Pemeriksaan grounding listrik sebelum menyentuh sirkuit elektronik DVR guna menghindari sengatan listrik statis.',
      'Teknisi wajib meminta persetujuan pemilik sebelum melakukan reset password atau format ulang harddisk.',
      'Pengujian durasi rekam dan playback selama 15 menit setelah penggantian komponen dilakukan.',
      'SOP Bersih & Sopan: Tidak meninggalkan bekas potongan kawat tembaga atau isolasi di lantai rumah/kantor pelanggan.'
    ],
    legalityAndWarranty: [
      'Garansi pengerjaan servis selama 30 hari untuk kerusakan pada titik yang sama.',
      'Garansi sparepart baru sesuai jaminan pabrikan resmi (1 hingga 3 tahun).',
      'Pemberian nota servis fisik dan tanda terima resmi pekerjaan.'
    ],
    faqs: [
      {
        question: 'Kenapa kamera CCTV saya tiba-tiba tidak ada gambar (No Video / Hitam)?',
        answer: 'Penyebab paling sering adalah power supply/adaptor kamera mati, konektor BNC kendor atau berkarat, kabel tembaga putus akibat gigitan tikus, atau sensor kamera mengalami kerusakan akibat lonjakan tegangan petir. Teknisi kami akan menguji sumber masalah dengan alat ukur portabel langsung di lokasi Anda.'
      },
      {
        question: 'Mengapa DVR CCTV saya berbunyi beep panjang terus-menerus?',
        answer: 'Bunyi alarm beep pada DVR biasanya merupakan tanda peringatan bahwa harddisk tidak terbaca (HDD Error), harddisk belum diformat, ada konflik IP address jaringan, atau hilangnya sinyal video pada salah satu channel. Jangan panik, kami bisa menonaktifkan suara beep tersebut dan memulihkan fungsi harddisk Anda.'
      },
      {
        question: 'Saya lupa password DVR Hikvision / Dahua saya, apakah bisa direset?',
        answer: 'Bisa. Kami memiliki prosedur resmi untuk mereset kata sandi DVR/NVR Hikvision, Dahua, Hilook, dan merk lainnya menggunakan metode file XML export-import resmi pabrikan tanpa merusak file rekaman di dalam harddisk.'
      },
      {
        question: 'Kenapa CCTV saya di HP mendadak berstatus Offline setelah ganti modem WiFi?',
        answer: 'Ketika modem atau router WiFi internet di rumah Anda diganti baru, konfigurasi IP address lokal, gateway, dan DNS pada DVR berubah sehingga koneksi ke server cloud terputus. Kami dapat mengatur ulang jaringan DVR Anda agar kembali terhubung ke HP hanya dalam waktu kurang dari 30 menit.'
      },
      {
        question: 'Berapa biaya jasa servis CCTV bila teknisi datang ke rumah saya?',
        answer: 'Biaya pengecekan dan perbaikan ringan berkisar antara Rp 100.000 hingga Rp 200.000 tergantung jarak lokasi dan tingkat kesulitan. Bila diperlukan penggantian komponen (seperti adaptor atau harddisk), rincian harga akan kami sampaikan terlebih dahulu untuk persetujuan Anda.'
      },
      {
        question: 'Apakah teknisi servis bisa dipanggil ke luar kota Palembang seperti Banyuasin atau Ogan Ilir?',
        answer: 'Bisa. Kami melayani panggilan servis ke wilayah Talang Kelapa, Pangkalan Balai, Indralaya, dan sekitarnya dengan penyesuaian biaya transport teknisi yang sangat wajar.'
      }
    ]
  },
  {
    slug: 'paket-cctv-palembang-murah',
    title: 'Paket Pasang CCTV Palembang Terima Beres & Promo Terbaru',
    metaTitle: 'Paket Pasang CCTV Palembang Murah — Terima Beres Bebas DP Garansi 1 Thn',
    description: 'Daftar paket pasang CCTV murah di Palembang lengkap terima beres. Kamera 2, 4, 8 titik Full HD Hikvision & Dahua, tanpa DP, garansi resmi 1 tahun ganti baru.',
    heroHeadline: 'Paket Pasang CCTV Murah Palembang — Tanpa Biaya Tersembunyi, Selesai Baru Bayar',
    heroSubtitle: 'Bandingkan langsung harga jujur kami dengan kompetitor. Kualitas perangkat original kelas dunia, pengerjaan rapi standar pipa PVC, dan garansi penuh ganti baru.',
    serviceType: 'Comprehensive Security Camera Packages',
    targetAudience: 'Warga Kota Palembang yang membutuhkan solusi pasang CCTV lengkap, hemat, aman, dan tanpa risiko penipuan',
    image: '/images/services/paket-cctv-palembang-murah.webp',
    packages: [
      {
        name: 'Paket 2 Kamera Hemat (Rumah / Toko Kecil)',
        price: 'Rp 1.850.000',
        competitorPrice: 'Rp 2.200.000',
        badge: 'Termurah se-Palembang',
        features: [
          '2 Unit Kamera 2MP Hikvision / Dahua Full HD 1080p',
          '1 Unit DVR 4-Channel Turbo HD (Bisa tambah kamera sewaktu-waktu)',
          'Harddisk 500GB Surveillance Khusus CCTV (Rekam 12 hari)',
          'Kabel Coaxial RG59 + Power 20 Meter',
          'Konektor BNC Taiwan & Jack DC Anti Karat',
          'Adaptor & Power Supply Terpusat',
          'Gratis Pemasangan Rapi Berpipa Conduit + Setting HP',
          'Garansi Resmi 1 Tahun Ganti Baru — Tanpa DP'
        ]
      },
      {
        name: 'Paket 4 Kamera Standar Bisnis (Paling Populer)',
        price: 'Rp 2.850.000',
        competitorPrice: 'Rp 2.999.000',
        badge: 'Best Seller 2026',
        features: [
          '4 Unit Kamera 2MP Hikvision / Dahua (Kombinasi Indoor & Outdoor Bebas)',
          '1 Unit DVR 4-Channel Turbo HD Full HD',
          'Harddisk 1TB Surveillance Original (Rekam 20 hari)',
          'Kabel Coaxial RG59 + Power 40 Meter',
          'Power Supply Sentral 10A Jaring Berkualitas',
          'Konektor BNC Taiwan & Jack DC Premium',
          'Gratis Instalasi Rapi Pipa Conduit & Setting Multi-HP',
          'Garansi Resmi 1 Tahun Ganti Baru — Tanpa DP'
        ]
      },
      {
        name: 'Paket 4 Kamera Full Color 24 Jam (ColorVu)',
        price: 'Rp 3.190.000',
        competitorPrice: 'Rp 3.300.000',
        badge: 'Malam Tetap Berwarna',
        features: [
          '4 Unit Kamera Hikvision ColorVu / Dahua Full Color 2MP F1.0',
          'Visual rekaman tengah malam tetap berwarna tajam tanpa lampu',
          '1 Unit DVR 4-Channel Active Defending Full HD',
          'Harddisk 1TB Surveillance Original',
          'Kabel Shielded Coaxial RG59 40 Meter',
          'Power Supply Premium anti petir & induksi listrik',
          'Gratis Instalasi Rapi Pipa Conduit + Setting HP',
          'Garansi Resmi 1 Tahun Ganti Baru — Tanpa DP'
        ]
      },
      {
        name: 'Paket 8 Kamera Komplit (Rumah Mewah / Ruko / Kantor)',
        price: 'Rp 5.450.000',
        competitorPrice: 'Rp 6.200.000',
        badge: 'Perlindungan Total',
        features: [
          '8 Unit Kamera 2MP Hikvision / Dahua Full HD Indoor/Outdoor',
          '1 Unit DVR 8-Channel Turbo HD H.265+',
          'Harddisk 2TB Surveillance (Rekam hingga 25-30 hari)',
          'Kabel Coaxial RG59 + Power 80 Meter',
          'Power Supply Sentral 20A Metal Box Berkunci',
          'Konektor BNC Taiwan & Aksesori Lengkap',
          'Gratis Pasang Rapi Jalur Berpipa + Setting Multi-HP',
          'Garansi Resmi 1 Tahun Ganti Baru — Tanpa DP'
        ]
      }
    ],
    rabSimulation: {
      packageName: 'Tabel Perbandingan Harga Jujur CCTV Palembang vs Kompetitor',
      total: 'Hemat Hingga Rp 750.000',
      items: [
        { component: 'Paket Hemat 2 Kamera 2MP + HDD', spec: 'Unit komplit terima beres + pipa conduit', qty: '1 Paket', unitPrice: 'Rp 1.850.000', subtotal: 'Rp 1.850.000 (Kompetitor Rp 2.200.000)' },
        { component: 'Paket Standar 4 Kamera 2MP + HDD 1TB', spec: 'Best seller rumah 2 lantai & ruko', qty: '1 Paket', unitPrice: 'Rp 2.850.000', subtotal: 'Rp 2.850.000 (Kompetitor Rp 2.999.000)' },
        { component: 'Paket Full Color 4 Kamera 24 Jam', spec: 'Teknologi ColorVu malam hari berwarna', qty: '1 Paket', unitPrice: 'Rp 3.190.000', subtotal: 'Rp 3.190.000 (Kompetitor Rp 3.300.000)' },
        { component: 'Paket Komplit 8 Kamera 2MP + HDD 2TB', spec: 'Perlindungan ruko tingkat & minimarket', qty: '1 Paket', unitPrice: 'Rp 5.450.000', subtotal: 'Rp 5.450.000 (Kompetitor Rp 6.200.000)' }
      ],
      notes: 'Seluruh paket di atas sudah termasuk ongkos pasang teknisi, material pipa pelindung, dan setting HP. Anda tidak akan dikenakan biaya tambahan tak terduga di akhir pekerjaan.'
    },
    hardwareSpecs: [
      {
        category: 'Jaminan Orisinalitas & Kualitas Komponen Paket',
        details: [
          { name: 'Kamera Hikvision & Dahua Asli', spec: 'Serial number resmi distributor Indonesia', benefit: 'Dukungan firmware resmi terupdate dan bebas resiko pemblokiran server cloud P2P.' },
          { name: 'Harddisk Khusus Surveillance (Bukan Copotan PC)', spec: 'Seagate SkyHawk / Western Digital Purple', benefit: 'Dirancang khusus untuk beban tulis video 24/7 tanpa henti, tahan hingga 5 tahun pemakaian.' },
          { name: 'Kabel Coaxial Shielded 95% Braid', spec: 'Tembaga murni berselubung tebal', benefit: 'Gambar video bebas distorsi garis bergelombang akibat tarikan panjang atau induksi listrik.' }
        ]
      }
    ],
    localAreaAnalysis: [
      {
        area: 'Pelayanan Se-Kota Palembang (Seberang Ulu & Seberang Ilir)',
        characteristics: 'Kawasan pusat kota dengan mobilitas tinggi yang membutuhkan instalasi cepat dan terpercaya.',
        recommendedSystem: 'Semua paket promo berlaku bebas ongkos kirim armada teknisi untuk seluruh kecamatan di Kota Palembang.'
      },
      {
        area: 'Area Penyangga (Indralaya, Talang Kelapa, Mariana)',
        characteristics: 'Permintaan tinggi untuk perumahan baru di perbatasan kota Palembang.',
        recommendedSystem: 'Pengiriman teknisi pada hari yang sama (Same Day Service) dengan konfirmasi pesanan pagi hari.'
      }
    ],
    sopAndK3: [
      'Semua pengerjaan paket promo tetap wajib tunduk pada standar kerapihan pipa conduit PVC.',
      'Dilarang memotong atau menghemat kabel dengan sambungan isolasi tipis di tengah jalan.',
      'Teknisi wajib melakukan demo hasil rekaman di TV dan HP sebelum meminta tanda tangan penyelesaian.',
      'SOP No-Smoking: Tidak merokok di area properti pelanggan, etika santun dan berseragam kerja rapi.'
    ],
    legalityAndWarranty: [
      'Garansi Resmi 1 Tahun Ganti Unit Baru (Kamera, DVR, Harddisk).',
      'Sistem Pembayaran 100% Tanpa DP (Bayar di Tempat setelah puas mengecek hasil instalasi).',
      'Invoice dan kartu garansi resmi bermaterai/stempel resmi perusahaan.'
    ],
    faqs: [
      {
        question: 'Apakah harga paket sudah termasuk biaya pasang atau masih ada biaya lain?',
        answer: 'Harga paket kami adalah harga terima beres! Sudah termasuk kamera, DVR, harddisk surveillance, kabel bawaan sesuai paket, konektor, adaptor/power supply, jasa pasang teknisi rapi, pipa conduit, serta setting ke HP. Tidak ada biaya siluman atau tambahan lain.'
      },
      {
        question: 'Bagaimana jika kabel bawaan paket ternyata kurang saat dipasang di rumah saya?',
        answer: 'Setiap paket sudah dibekali kuota kabel yang sangat longgar (20 meter untuk paket 2 kamera, 40 meter untuk paket 4 kamera, 80 meter untuk paket 8 kamera). Bila tata letak rumah Anda sangat luas dan membutuhkan kabel tambahan di luar kuota, tarif penambahan kabel sangat terjangkau yaitu Rp 6.000 per meter.'
      },
      {
        question: 'Kenapa harga di CCTV Palembang bisa lebih murah dari tempat lain?',
        answer: 'Kami bermitra langsung dengan distributor resmi Hikvision dan Dahua di Indonesia dalam volume besar tanpa perantara tangan ketiga. Kami meneruskan efisiensi harga tersebut langsung kepada konsumen warga Palembang agar mendapatkan sistem keamanan berkualitas dengan harga paling jujur.'
      },
      {
        question: 'Apakah benar bisa bayar setelah CCTV selesai dipasang tanpa DP?',
        answer: 'Benar 100%. Kami memberikan fasilitas Bebas Uang Muka (DP 0%) untuk membuktikan kualitas kerja kami dan memberikan rasa aman maksimal bagi Anda agar terhindar dari risiko penipuan vendor online nakal.'
      },
      {
        question: 'Berapa lama unit diganti jika terjadi kerusakan dalam masa garansi?',
        answer: 'Dalam masa garansi 1 tahun, bila unit kamera atau DVR dinyatakan rusak oleh teknisi kami saat kunjungan, kami langsung menggantinya dengan unit baru dari stok armada kami, bukan membawa unit Anda ke tempat servis selama berminggu-minggu.'
      },
      {
        question: 'Bagaimana cara memesan paket promo ini?',
        answer: 'Caranya sangat mudah. Cukup klik tombol WhatsApp di website ini (nomor 0857-5890-3353), informasikan paket pilihan Anda dan alamat lokasi pemasangan di Palembang. Tim admin kami akan langsung mengonfirmasi jadwal kedatangan teknisi ke tempat Anda.'
      }
    ]
  }
];
