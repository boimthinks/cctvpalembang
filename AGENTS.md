# Petunjuk Proyek: cctvpalembang.web.id

Dokumen ini adalah referensi utama sistem otomatisasi agen di proyek **cctvpalembang.web.id**.
Semua agen AI, subagent, dan sesi Antigravity WAJIB membaca dan mematuhi dokumen ini.

---

## 1. Komunikasi & Bahasa

- **Bahasa Indonesia Baku & Profesional**: Selalu berkomunikasi dan menulis jawaban dalam Bahasa Indonesia.
- **Tone**: Lugas, padat, teknis (E-E-A-T), dan berorientasi konversi lokal Palembang tanpa basa-basi klise buatan AI.
- **Tanda Baca**: Hindari em dash (—) atau en dash (–); ganti dengan tanda titik, koma, titik dua, atau kurung biasa. Tanpa emoji berlebihan.

---

## 2. Sumber Pengetahuan Tunggal (Single Source of Truth)

- **`SUMBER-PENGETAHUAN.md`** di root direktori proyek adalah **SATU-SATUNYA SUMBER KEBENARAN** untuk:
  - Identitas Brand, Legalitas, dan Workshop fisik (Silaberanti Seberang Ulu I & Demang Lebar Daun Lorok Pakjo).
  - Nomor Kontak WhatsApp Resmi (`0851-0171-8690`).
  - Database Kata Kunci Potensial (SEO & GEO 2026).
  - Rincian Paket Pemasangan CCTV, Harga Riil, dan Syarat Pembayaran (Tanpa DP / COD).
  - Garansi Resmi 1 Tahun Ganti Baru dan SOP Teknisi (Pipa PVC Conduit, No-Smoking).
  - Cakupan Distrik & Area Operasional (Palembang Raya, Ogan Ilir, Banyuasin, Prabumulih).
- **DILARANG MENGARANG DATA**: Jangan membuat harga fiktif, alamat palsu, atau nomor kontak lain selain yang tercatat di `SUMBER-PENGETAHUAN.md`.

---

## 3. Skill & Alur Kerja Standar

Sebelum menulis atau mengedit konten website:
1. **Riset & Silo**: Gunakan skill `pakar-entity-seo` untuk ekstraksi keyword semantik, entity mapping Schema.org, dan pencegahan duplikasi topik.
2. **Penulisan Konten Blog**: Gunakan skill `penulis-ahli` untuk penulisan artikel humanis (lolos deteksi AI), optimasi SEO & GEO 2026 (AI Overviews ready), dan wajib mencantumkan internal link ke halaman layanan terkait.
3. **Orkestrasi Sistem**: Gunakan skill `astro-autopilot` untuk eksekusi workflow `/daily`, `/audit`, dan sinkronisasi aset build.

---

## 4. Tech Stack & Perintah Penting

- **Framework**: Astro 7 (SSG - Static Site Generation) dengan Tailwind CSS v4 via `@tailwindcss/vite` dan `@astrojs/sitemap`.
- **View Transitions**: `ClientRouter` dari `astro:transitions`.
- **Image Processing**: Node.js automated image generator (`scripts/generate-images.js`) dengan format 4:3 WebP dan OG 1200x630.
- **Perintah Build**:
  - Pembangunan: `npm run build`
  - Mode Pengembang: `npm run dev`
  - Pemeriksaan Tipe/Preview: `npm run preview`

---

## 5. Arsitektur Halaman & Konvensi Linking

- **Trailing Slash WAJIB 'always'**: Seluruh URL internal, navigasi, dan internal linking dalam artikel WAJIB selalu berakhiran slash `/` (contoh: `/layanan/pasang-cctv-rumah-palembang/`, `/blog/`, `/paket/`, `/`). DILARANG membuat URL tanpa trailing slash.
- **Money Pages (`/layanan/[slug]/`)**: Halaman pilar komersial berbobot tinggi. Wajib memuat tabel breakdown RAB, perbandingan paket fisik, spesifikasi hardware, SOP & K3, serta 6 butir FAQ.
- **Blog Spokes (`/blog/[slug]/`)**: Artikel pendukung edukatif/masalah lapangan. Wajib menyertakan minimal 1 tautan kontekstual berakhiran trailing slash `/` ke Money Page terkait.
- **CTA WhatsApp Terpadu**:
  - Nomor: `0851-0171-8690`
  - URL Format: `https://wa.me/6285101718690?text=Halo%20Admin%20CCTV%20Palembang...`

---

## 6. Deployment Target

- **Platform:** DomaiNesia (cPanel Addon Domain)
- **Target Path:** `/home/apitowpc/cctvpalembang.web.id/`
- **Metode Deploy:** Gunakan skill `cpanel-domainesia` (otomatis build & upload via HTTPS UAPI port 2083 tanpa SSH).
- **Perintah Deploy Cepat:** `npm run deploy`

