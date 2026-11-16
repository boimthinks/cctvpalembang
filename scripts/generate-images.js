import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

// Pastikan direktori tujuan tersedia
const dirs = [
  'public/images/services',
  'public/images/blog',
  'public/images/og',
];

for (const dir of dirs) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Helper: Escape teks XML
function escapeXml(unsafe) {
  return String(unsafe).replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

// 1. Template SVG Rasio 4:3 (800x600 px) untuk Card & Hero
function createCardSvg4x3(title, subtitle, badge = 'CCTV PALEMBANG') {
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);
  const safeBadge = escapeXml(badge);

  return `
  <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0b1329" />
        <stop offset="60%" stop-color="#111d38" />
        <stop offset="100%" stop-color="#075985" />
      </linearGradient>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0284c7" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#0369a1" stop-opacity="0.1" />
      </linearGradient>
      <radialGradient id="glow" cx="80%" cy="20%" r="50%">
        <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25" />
        <stop offset="100%" stop-color="#0b1329" stop-opacity="0" />
      </radialGradient>
    </defs>

    <!-- Background Base -->
    <rect width="800" height="600" fill="url(#bgGrad)" />
    <rect width="800" height="600" fill="url(#glow)" />

    <!-- Grid Line Dekoratif -->
    <path d="M 0,150 L 800,150 M 0,300 L 800,300 M 0,450 L 800,450 M 200,0 L 200,600 M 400,0 L 400,600 M 600,0 L 600,600" 
          stroke="#1e2e54" stroke-width="1" stroke-opacity="0.4" />

    <!-- Bingkai Kamera CCTV Modern -->
    <rect x="50" y="50" width="700" height="500" rx="20" fill="url(#cardGrad)" stroke="#38bdf8" stroke-opacity="0.3" stroke-width="2" />

    <!-- Sudut Bidik Kamera (Viewfinder HUD) -->
    <path d="M 70,100 L 70,70 L 100,70" stroke="#38bdf8" stroke-width="3" fill="none" />
    <path d="M 730,100 L 730,70 L 700,70" stroke="#38bdf8" stroke-width="3" fill="none" />
    <path d="M 70,500 L 70,530 L 100,530" stroke="#38bdf8" stroke-width="3" fill="none" />
    <path d="M 730,500 L 730,530 L 700,530" stroke="#38bdf8" stroke-width="3" fill="none" />

    <!-- Status Rec Dot & Badge -->
    <circle cx="100" cy="115" r="8" fill="#ef4444" />
    <text x="120" y="122" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="bold" fill="#f87171" letter-spacing="2">REC ● LIVE 1080P</text>

    <!-- Badge Kategori -->
    <rect x="520" y="100" width="190" height="34" rx="8" fill="#0284c7" />
    <text x="615" y="122" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1.5">${safeBadge}</text>

    <!-- Icon Kamera Keamanan (Minimalist Vector) -->
    <g transform="translate(100, 180) scale(1.1)">
      <!-- Badan Kamera -->
      <rect x="0" y="25" width="90" height="50" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
      <polygon points="90,35 125,20 125,80 90,65" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
      <!-- Lensa -->
      <circle cx="35" cy="50" r="16" fill="#0284c7" />
      <circle cx="35" cy="50" r="8" fill="#38bdf8" />
      <!-- Stand / Bracket -->
      <path d="M 25,75 L 25,95 L 45,95" stroke="#94a3b8" stroke-width="4" fill="none" stroke-linecap="round" />
    </g>

    <!-- Area Teks Judul & Subtitle -->
    <foreignObject x="90" y="310" width="620" height="210">
      <div xmlns="http://www.w3.org/1999/xhtml" style="display:flex; flex-direction:column; justify-content:flex-end; height:100%; font-family:system-ui, -apple-system, sans-serif;">
        <h1 style="color:#ffffff; font-size:32px; font-weight:800; line-height:1.2; margin:0 0 12px 0; text-shadow:0 2px 10px rgba(0,0,0,0.8);">${safeTitle}</h1>
        <p style="color:#bae6fd; font-size:18px; font-weight:500; line-height:1.4; margin:0 0 10px 0;">${safeSubtitle}</p>
        <div style="display:flex; gap:16px; font-size:14px; color:#38bdf8; font-weight:600;">
          <span>• Tanpa DP (COD)</span>
          <span>• Garansi 1 Thn Ganti Baru</span>
          <span>• Palembang &amp; Sekitarnya</span>
        </div>
      </div>
    </foreignObject>
  </svg>`;
}

// 2. Template SVG Open Graph 1200x630 px untuk Media Sosial
function createOgSvg1200x630(title, description) {
  const safeTitle = escapeXml(title);
  const safeDesc = escapeXml(description);

  return `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ogBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#070d1e" />
        <stop offset="60%" stop-color="#0c1733" />
        <stop offset="100%" stop-color="#0369a1" />
      </linearGradient>
      <radialGradient id="ogGlow" cx="20%" cy="30%" r="60%">
        <stop offset="0%" stop-color="#0284c7" stop-opacity="0.35" />
        <stop offset="100%" stop-color="#070d1e" stop-opacity="0" />
      </radialGradient>
    </defs>

    <rect width="1200" height="630" fill="url(#ogBg)" />
    <rect width="1200" height="630" fill="url(#ogGlow)" />

    <!-- Grid lines -->
    <path d="M 0,210 L 1200,210 M 0,420 L 1200,420 M 300,0 L 300,630 M 600,0 L 600,630 M 900,0 L 900,630" 
          stroke="#1e2e54" stroke-width="1" stroke-opacity="0.3" />

    <!-- Border Accent -->
    <rect x="40" y="40" width="1120" height="550" rx="24" fill="none" stroke="#38bdf8" stroke-opacity="0.25" stroke-width="2" />

    <!-- Header Brand -->
    <g transform="translate(80, 95)">
      <circle cx="16" cy="16" r="14" fill="#0284c7" />
      <text x="42" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="900" fill="#38bdf8" letter-spacing="1">CCTV PALEMBANG</text>
      <text x="280" y="24" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="500" fill="#94a3b8">• cctvpalembang.web.id</text>
    </g>

    <!-- Content Area -->
    <foreignObject x="80" y="160" width="1040" height="340">
      <div xmlns="http://www.w3.org/1999/xhtml" style="height:100%; display:flex; flex-direction:column; justify-content:center; font-family:system-ui, -apple-system, sans-serif;">
        <h1 style="color:#ffffff; font-size:46px; font-weight:800; line-height:1.2; margin:0 0 20px 0;">${safeTitle}</h1>
        <p style="color:#cbd5e1; font-size:24px; font-weight:400; line-height:1.4; margin:0 0 30px 0;">${safeDesc}</p>
        <div style="display:flex; gap:24px; font-size:18px; color:#38bdf8; font-weight:700;">
          <span style="background:rgba(2,132,199,0.3); padding:8px 18px; border-radius:30px; border:1px solid #0284c7;">Bebas Uang Muka (Tanpa DP)</span>
          <span style="background:rgba(2,132,199,0.3); padding:8px 18px; border-radius:30px; border:1px solid #0284c7;">Garansi 1 Tahun Ganti Baru</span>
          <span style="background:rgba(2,132,199,0.3); padding:8px 18px; border-radius:30px; border:1px solid #0284c7;">Hotline: 0857-5890-3353</span>
        </div>
      </div>
    </foreignObject>
  </svg>`;
}

async function renderImage(svgString, outputPath, width, height, format = 'webp') {
  const buffer = Buffer.from(svgString);
  let pipeline = sharp(buffer).resize(width, height);
  if (format === 'webp') {
    await pipeline.webp({ quality: 85 }).toFile(outputPath);
  } else {
    await pipeline.png({ quality: 90 }).toFile(outputPath);
  }
}

async function main() {
  console.log('🚀 Memulai pembuatan aset gambar 4:3 WebP dan OG 1200x630...');

  // 1. Gambar 5 Money Pages
  const services = [
    {
      slug: 'pasang-cctv-rumah-palembang',
      title: 'Pasang CCTV Rumah Palembang',
      subtitle: 'Pantau Keluarga & Garasi 24 Jam Dari HP — Tanpa DP',
      badge: 'CCTV RESIDENSIAL',
    },
    {
      slug: 'pasang-cctv-ruko-toko-palembang',
      title: 'Pasang CCTV Ruko & Toko Palembang',
      subtitle: 'Awasi Kasir & Etalase Tajam Bebas Titik Buta',
      badge: 'CCTV KOMERSIAL',
    },
    {
      slug: 'instalasi-ip-camera-gedung-pabrik-palembang',
      title: 'Instalasi IP Camera Gedung & Pabrik',
      subtitle: 'Sistem Surveillance Digital PoE Skala Industri & Gudang',
      badge: 'IP CAMERA INDUSTRIAL',
    },
    {
      slug: 'jasa-servis-maintenance-cctv-palembang',
      title: 'Jasa Servis & Maintenance CCTV Palembang',
      subtitle: 'Kamera Mati, HDD Error, Beep DVR & Setting HP Panggilan',
      badge: 'SERVIS PANGGILAN',
    },
    {
      slug: 'paket-cctv-palembang-murah',
      title: 'Paket CCTV Palembang Murah Terima Beres',
      subtitle: 'Mulai Rp 1.850.000 Hikvision & Dahua Garansi 1 Tahun Ganti Baru',
      badge: 'PAKET PROMO 2026',
    },
    {
      slug: 'paket-hemat-rumah-2-kamera',
      title: 'Paket Hemat Rumah 2 Kamera Palembang',
      subtitle: 'Rp 1.850.000 Terima Beres — Tanpa DP & Garansi 1 Tahun Ganti Baru',
      badge: 'PAKET HEMAT RESIDENSIAL',
    },
    {
      slug: 'paket-standar-bisnis-4-kamera',
      title: 'Paket Standar Bisnis 4 Kamera Palembang',
      subtitle: 'Rp 2.850.000 Paling Laris — Tanpa DP & Garansi 1 Tahun Ganti Baru',
      badge: 'BEST SELLER PALEMBANG',
    },
  ];

  for (const s of services) {
    const cardPath = `public/images/services/${s.slug}.webp`;
    // Jangan menimpa jika sudah ada gambar kustom fotografi (ukuran > 20KB)
    if (fs.existsSync(cardPath)) {
      const stats = fs.statSync(cardPath);
      if (stats.size > 20000) {
        console.log(`- Menggunakan gambar asli yang sudah ada: ${cardPath} (${Math.round(stats.size / 1024)} KB)`);
        continue;
      }
    }
    const cardSvg = createCardSvg4x3(s.title, s.subtitle, s.badge);
    await renderImage(cardSvg, cardPath, 800, 600, 'webp');
    console.log(`Generated Card 4:3: ${cardPath}`);
  }

  // 2. Default & Artikel Blog Spesifik
  const blogs = [
    {
      slug: 'default',
      title: 'Pusat Edukasi & Panduan CCTV Palembang',
      subtitle: 'Tips Memilih & Merawat Sistem Kamera Keamanan Terbaik',
      badge: 'EDUKASI KEAMANAN',
    },
    {
      slug: 'biaya-pasang-cctv-rumah-palembang',
      title: 'Estimasi Biaya Pasang CCTV Rumah Palembang',
      subtitle: 'Rincian Komponen, Paket 2-4 Kamera & Tips Hemat Tanpa DP',
      badge: 'PANDUAN BIAYA',
    },
    {
      slug: 'perbedaan-cctv-analog-vs-ip-camera',
      title: 'Perbedaan CCTV Analog HD vs IP Camera PoE',
      subtitle: 'Biaya per Titik & Total Kepemilikan 5 Tahun di Palembang',
      badge: 'KOMPARASI SISTEM',
    },
    {
      slug: 'penjelasan-teknis-ip66-ip67-wdr-cuaca-palembang',
      title: 'Sertifikasi IP66 IP67 dan True WDR Cuaca Ekstrem',
      subtitle: 'Standar Ketahanan Kamera Outdoor Menghadapi Hujan & Terik Palembang',
      badge: 'PANDUAN TEKNIS',
    },
    {
      slug: 'dokumentasi-pemasangan-100-titik-cctv-palembang',
      title: 'Instalasi 100 Titik CCTV Perumahan Palembang',
      subtitle: 'Studi Kasus Backbone Fiber Optic & Pos Satpam Skala Kawasan',
      badge: 'STUDI KASUS',
    },
    {
      slug: 'cara-klaim-garansi-cctv-1-tahun-palembang',
      title: 'Panduan Klaim Garansi CCTV 1 Tahun Ganti Baru',
      subtitle: 'Alur Mudah Tanpa Berbelit, SOP SLA Cepat Teknisi Palembang',
      badge: 'PURNA JUAL',
    },
    {
      slug: 'penyebab-dvr-cctv-bunyi-beep-dan-solusi-offline-hp',
      title: 'Penyebab DVR CCTV Beep dan Solusi Offline HP',
      subtitle: 'Diagnosa Harddisk Error, Drop Ampere Adaptor & Setting Router Palembang',
      badge: 'PANDUAN SERVIS',
      customImage: 'penyebab-dvr-cctv-bunyi-beep-dan-solusi-offline-hp_poco.webp',
    },
    {
      slug: 'rekomendasi-cctv-terbaik-ruko-toko-palembang',
      title: 'Rekomendasi CCTV Terbaik untuk Ruko dan Toko',
      subtitle: 'Cegah Selisih Kasir, Titik Buta Etalase & Proteksi Parkir Depan',
      badge: 'CCTV KOMERSIAL',
    },
    {
      slug: 'tips-memilih-merk-cctv-hikvision-dahua-hilook',
      title: 'Tips Memilih Merk CCTV Hikvision, Dahua, HiLook',
      subtitle: 'Orisinalitas Unit, Aplikasi HP, dan Dukungan Purnajual di Palembang',
      badge: 'PANDUAN PEMBELIAN',
    },
    {
      slug: 'lama-rekaman-cctv-kapasitas-harddisk-palembang',
      title: 'Lama Rekaman CCTV Sesuai Kapasitas Harddisk',
      subtitle: 'Hitungan Hari Rekam 500GB sampai 8TB untuk 2 hingga 16 Kamera',
      badge: 'PANDUAN TEKNIS',
    }
  ];

  for (const b of blogs) {
    const blogPath = `public/images/blog/${b.slug}.webp`;
    const pocoPath = `public/images/blog/${b.slug}_poco.webp`;

    // 1. Cek apakah ada file fotografi kustom *_poco.webp
    if (fs.existsSync(pocoPath)) {
      console.log(`- Mengonversi & menstandarkan 4:3 (800x600) dari: ${pocoPath}`);
      await sharp(pocoPath)
        .resize(800, 600, { fit: 'cover', position: 'center' })
        .webp({ quality: 85 })
        .toFile(blogPath);
      console.log(`✓ Berhasil memproses gambar blog asli 4:3: ${blogPath}`);
      continue;
    }

// 1b. Gambar pendukung dalam artikel (Detail Kasir & Parkiran Ruko)
    const extraImages = [
      {
        src: 'public/images/blog/Detail-Pengawasan-Meja-Kasir_poco.webp',
        dest: 'public/images/blog/detail-pengawasan-meja-kasir.webp',
      },
      {
        src: 'public/images/blog/Kamera-Outdoor-Area-Parkiran-Ruko_poco.webp',
        dest: 'public/images/blog/kamera-outdoor-area-parkiran-ruko.webp',
      },
    ];

    for (const img of extraImages) {
      if (fs.existsSync(img.src)) {
        await sharp(img.src)
          .resize(800, 600, { fit: 'cover', position: 'center' })
          .webp({ quality: 85 })
          .toFile(img.dest);
        console.log(`✓ Berhasil memproses gambar konten 4:3: ${img.dest}`);
      }
    }

    // 2. Jangan menimpa jika sudah ada gambar asli ukuran > 20KB
    if (fs.existsSync(blogPath)) {
      const stats = fs.statSync(blogPath);
      if (stats.size > 20000) {
        console.log(`- Menggunakan gambar asli yang sudah ada: ${blogPath} (${Math.round(stats.size / 1024)} KB)`);
        continue;
      }
    }

    const blogSvg = createCardSvg4x3(b.title, b.subtitle, b.badge);
    await renderImage(blogSvg, blogPath, 800, 600, 'webp');
    console.log(`✓ Generated Blog Image 4:3: ${blogPath}`);
  }

  // 3. Open Graph Image 1200x630
  const ogSvg = createOgSvg1200x630(
    'Jasa Pasang CCTV Palembang — Tanpa DP & Garansi 1 Tahun Ganti Baru',
    'Solusi keamanan terbaik se-Kota Palembang untuk Rumah, Ruko & Gedung. Teknisi rapi pipa conduit, no-smoking SOP, dan garansi penuh.'
  );
  await renderImage(ogSvg, 'public/images/og/default.webp', 1200, 630, 'webp');
  await renderImage(ogSvg, 'public/images/og/default.png', 1200, 630, 'png');
  console.log('✓ Generated OG Image 1200x630: public/images/og/default.webp & .png');

  console.log('🎉 Seluruh aset visual berhasil dibuat dengan sempurna!');
}

main().catch(console.error);
