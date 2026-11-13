# RISET SEMANTIK, ENTITY MAPPING & ARSITEKTUR SILO
## Project: cctvpalembang.web.id
**Kata Kunci Target Utama:** "pasang cctv palembang"
**Wilayah Target:** Palembang & Sekitarnya (Sumatera Selatan)
**Kontak Resmi:** 0857-5890-3353 (WhatsApp)
**Workshop Utama:** Jl. Silaberanti No.24, Silaberanti, Kec. Seberang Ulu I, Kota Palembang 30116
**Workshop Hub Ilir:** Jl. Demang Lebar Daun, Lorok Pakjo, Kec. Ilir Barat I, Kota Palembang 30137

---

## 1. EKSTRAKSI KATA KUNCI

### A. Primary Keywords (Commercial & Transactional Intent)
1. pasang cctv palembang
2. jasa pasang cctv palembang
3. harga pasang cctv palembang
4. teknisi cctv palembang

### B. Secondary Keywords (Varian Layanan, Perangkat & Lokasi)
1. paket cctv palembang murah
2. pasang cctv rumah palembang
3. instalasi ip camera palembang
4. servis cctv palembang panggilan
5. pasang cctv ruko palembang
6. cctv hikvision dahua hilook palembang
7. jasa setting cctv online hp palembang
8. maintenance cctv gedung kantor palembang

### C. Long-Tail Keywords (Informational & Masalah Teknis Lapangan)
1. biaya pasang cctv 4 kamera di palembang 2026
2. perbedaan cctv analog hd dan ip camera poe untuk ruko
3. cara mengatasi cctv mati saat hujan petir di palembang
4. rekomendasi jenis kabel cctv outdoor tahan panas dan gigitan tikus
5. solusi cctv jarak jauh tanpa wifi di kebun banyuasin ogan ilir
6. jasa perbaikan dvr nvr cctv harddisk tidak terbaca palembang
7. tips memilih spesifikasi cctv malam hari colorvu full color
8. estimasi rab pemasangan cctv pabrik dan gudang palembang

### D. Entity Keywords (Brand, Teknis, Komponen & Regulasi)
- **Brand CCTV:** Hikvision, Dahua Technology, HiLook, Ezviz, Uniview (UNV), Imou.
- **Tipe Perangkat:** DVR (Digital Video Recorder), NVR (Network Video Recorder), IP Camera PoE, Analog HD Camera (HD-TVI, HD-CVI, AHD), PTZ Camera, Harddisk Surveillance (Seagate SkyHawk, WD Purple).
- **Infrastruktur & Aksesori:** Kabel UTP Cat6 FTP/STP Shielded, Pipa Conduit PVC High Impact, Box Panel Waterproof IP66/IP67, Power Supply Central Jaring / Adaptor Dedicated, BNC Connector, RJ45 Cat6, Surge Arrester / Anti Petir CCTV.
- **Toponimi / Wilayah:** Palembang, Ilir Barat I, Ilir Barat II, Ilir Timur I, Ilir Timur II, Ilir Timur III, Sukarami, Alang-Alang Lebar, Kemuning, Sako, Kalidoni, Sematang Borang, Plaju, Seberang Ulu I, Seberang Ulu II, Jakabaring, Kertapati, Gandus, serta batas Banyuasin (Talang Kelapa) dan Ogan Ilir (Indralaya).

---

## 2. PEMETAAN ENTITAS & KNOWLEDGE GRAPH (SCHEMA.ORG)

### A. Primary Entity
- **Tipe:** `LocalBusiness` / `HomeAndConstructionBusiness` / `ProfessionalService`
- **Nama Konseptual:** Jasa Pasang & Service CCTV Palembang (`cctvpalembang.web.id`)
- **Area Layanan:** `AdministrativeArea` -> Palembang, Sumatera Selatan (Wikidata: Q9007).

### B. Secondary Entity (Kategori Layanan / Money Pages)
1. `Service` "Jasa Pasang CCTV Rumah & Cluster Perumahan"
2. `Service` "Instalasi CCTV Ruko & Tempat Usaha"
3. `Service` "Pemasangan IP Camera & CCTV Gedung, Pabrik, Gudang"
4. `Service` "Jasa Servis, Maintenance & Setting Online CCTV ke HP"
5. `Product` "Paket CCTV 2 Kamera, 4 Kamera, 8 Kamera, 16 Kamera (Hikvision / Dahua / HiLook)"

### C. Supporting Entity (Standar Teknis & Prosedur)
- **Teknis:** `Thing` -> IP Rating (IP66, IP67), Power over Ethernet (IEEE 802.3af/at), H.265+ Compression, ColorVu / Full-color Starlight, Night Vision Smart IR.
- **Infrastruktur Proteksi:** Conduit Pipe Routing, Grounding System, Surge Protection, CCTV Surge Arrester.
- **Metode/SOP:** `HowTo` -> Prosedur instalasi rapi kabel tertutup conduit, konfigurasi DDNS/Cloud P2P Hik-Connect & DMSS.

### D. Related Entity (Konteks Lokal & Lingkungan Fisik Palembang)
- **Kondisi Cuaca:** Wilayah tropis lembab, intensitas petir tinggi di kawasan dataran rendah sungai Musi. Wajib proteksi grounding dan kabel shielded outdoor.
- **Kawasan Target:** Kawasan perdagangan Sudirman, Kolonel Atmo, R. Sukamto, Basuki Rahmat, ruko Celentang, pusat industri Kramasan & Gandus, kawasan perumahan Jakabaring & Sukarami.

### E. Knowledge Graph Table

| Subject (Entitas) | Predicate (Relasi Schema.org) | Object (Target Entitas) |
| :--- | :--- | :--- |
| `cctvpalembang.web.id` | `rdf:type` | `HomeAndConstructionBusiness` |
| `cctvpalembang.web.id` | `areaServed` | `City: Palembang (Wikidata: Q9007)` |
| `cctvpalembang.web.id` | `hasOfferCatalog` | `OfferCatalog: Jasa Pasang & Perbaikan CCTV` |
| `Jasa Pasang CCTV Rumah` | `serviceType` | `Residential Security Camera Installation` |
| `Jasa Pasang CCTV Ruko` | `serviceType` | `Commercial Surveillance System Installation` |
| `Jasa IP Camera PoE` | `serviceType` | `Network IP Camera PoE Deployment` |
| `Jasa Servis CCTV` | `serviceType` | `Security System Repair and Maintenance` |
| `Paket CCTV Hikvision` | `brand` | `Hikvision (Wikidata: Q15915865)` |
| `Paket CCTV Dahua` | `brand` | `Dahua Technology (Wikidata: Q24835940)` |
| `Instalasi Kabel Outdoor` | `material` | `FTP Cat6 Shielded Cable + Conduit PVC High Impact` |
| `Sistem Proteksi Petir` | `conformsTo` | `CCTV Surge Protection & Grounding Standards` |

---

## 3. BLUEPRINT ARSITEKTUR SILO & STRUKTUR HALAMAN

### Tier 1: Homepage (`/`)
- **Intensi:** Primary Entity & Brand Authority.
- **Target Keyword:** "Pasang CCTV Palembang - Jasa Instalasi & Servis CCTV Bergaransi".
- **Fungsi:** Trust building, rangkuman paket terlaris, area jangkauan se-Kota Palembang, jaminan teknisi bersertifikat, dan integrasi WhatsApp lead.

---

### Tier 2: Service Pillar Pages / Money Pages (`/layanan/[slug]`)
Halaman ini adalah **pilar konversi komersial berbobot tinggi** dengan struktur kaya data: Hero 4:3, tabel rincian paket bertingkat, simulasi RAB transparan, spesifikasi fisik perangkat, SOP & K3, legalitas garansi resmi, dan 6 FAQ berbobot.

1. **`/layanan/pasang-cctv-rumah-palembang`**
   - *Target Intent:* Pemilik rumah tinggal, townhouse, dan perumahan cluster di Palembang.
   - *Fokus:* Privasi keluarga, kamera audio dua arah, notifikasi deteksi manusia ke HP, instalasi kabel rapi tanpa merusak interior gypsum/plafon.

2. **`/layanan/pasang-cctv-ruko-toko-palembang`**
   - *Target Intent:* Pelaku usaha ruko, toko retail, kafe, apotek, dan restoran di Palembang.
   - *Fokus:* Pengawasan kasir (sudut zoom detail uang), titik buta etalase, pintu masuk/keluar, kamera full color 24 jam meski lampu padam.

3. **`/layanan/instalasi-ip-camera-gedung-pabrik-palembang`**
   - *Target Intent:* B2B, pengelola gudang, pabrik, hotel, kampus, dan kantor instansi.
   - *Fokus:* Arsitektur jaringan PoE switch, kabel UTP FTP antar-gedung/fiber optic, NVR puluhan channel, rack server, backup UPS, dan manajemen ruang kontrol.

4. **`/layanan/jasa-servis-maintenance-cctv-palembang`**
   - *Target Intent:* Konsumen dengan sistem CCTV rusak, kamera mati, DVR beep/rusak, harddisk error, atau lupa password.
   - *Fokus:* Panggilan cepat teknisi ke lokasi se-Palembang, penelusuran jalur kabel putus/short, penggantian power supply, setting ulang online streaming HP.

5. **`/layanan/paket-cctv-palembang-murah`**
   - *Target Intent:* Pencari paket all-in terima beres (2, 4, 8, 16 kamera).
   - *Fokus:* Komparasi spesifikasi paket ekonomis (HiLook/Dahua Cooper) vs paket premium (Hikvision ColorVu), rincian gratis kabel & instalasi, garansi sparepart 1-2 tahun.

---

### Tier 3: Blog Spokes / Support Articles (`/blog/[slug]`)
30 artikel pendukung bertarget informational keywords yang menjawab pertanyaan spesifik calon pelanggan, memecahkan keraguan teknis, dan **seluruhnya mengalirkan internal link kontekstual ke Money Pages Tier 2**:

#### Klaster A: Panduan Pembelian & Estimasi Biaya (Inbound Intent)
1. `biaya-pasang-cctv-rumah-palembang` -> internal link ke `/layanan/pasang-cctv-rumah-palembang`
2. `perbedaan-cctv-analog-vs-ip-camera` -> internal link ke `/layanan/instalasi-ip-camera-gedung-pabrik-palembang`
3. `rekomendasi-cctv-terbaik-untuk-ruko-palembang` -> internal link ke `/layanan/pasang-cctv-ruko-toko-palembang`
4. `rincian-biaya-pasang-cctv-4-kamera-palembang` -> internal link ke `/layanan/paket-cctv-palembang-murah`
5. `tips-memilih-merk-cctv-hikvision-dahua-hilook` -> internal link ke `/layanan/paket-cctv-palembang-murah`
6. `berapa-lama-rekaman-cctv-tersimpan-berdasarkan-kapasitas-harddisk` -> internal link ke `/layanan/jasa-servis-maintenance-cctv-palembang`

#### Klaster B: Masalah Lapangan, Servis & Troubleshooting (Pain-Point Intent)
7. `penyebab-kamera-cctv-mati-total-dan-cara-mengatasinya` -> internal link ke `/layanan/jasa-servis-maintenance-cctv-palembang`
8. `mengapa-cctv-tidak-bisa-online-di-hp-solusi-lengkap` -> internal link ke `/layanan/jasa-servis-maintenance-cctv-palembang`
9. `cara-mengatasi-dvr-cctv-bunyi-beep-terus-menerus` -> internal link ke `/layanan/jasa-servis-maintenance-cctv-palembang`
10. `panduan-mengamankan-cctv-dari-sambaran-petir-di-palembang` -> internal link ke `/layanan/instalasi-ip-camera-gedung-pabrik-palembang`
11. `cara-mereset-password-dvr-hikvision-dan-dahua-yang-lupa` -> internal link ke `/layanan/jasa-servis-maintenance-cctv-palembang`
12. `mengapa-gambar-cctv-bergaris-atau-bergelombang` -> internal link ke `/layanan/jasa-servis-maintenance-cctv-palembang`

#### Klaster C: Instalasi Teknis & Standar Keamanan (E-E-A-T & Authority)
13. `standar-kabel-cctv-outdoor-agar-tahan-cuaca-palembang` -> internal link ke `/layanan/pasang-cctv-ruko-toko-palembang`
14. `titik-lokasi-strategis-pemasangan-cctv-di-rumah-tinggal` -> internal link ke `/layanan/pasang-cctv-rumah-palembang`
15. `keunggulan-fitur-cctv-colorvu-bisa-merekam-warna-malam-hari` -> internal link ke `/layanan/paket-cctv-palembang-murah`
16. `panduan-memasang-cctv-di-area-kasir-toko-untuk-cegah-selisih-uang` -> internal link ke `/layanan/pasang-cctv-ruko-toko-palembang`
17. `sistem-cctv-nvr-poe-untuk-kantor-dan-gudang-skala-besar` -> internal link ke `/layanan/instalasi-ip-camera-gedung-pabrik-palembang`
18. `perbedaan-harddisk-cctv-surveillance-vs-harddisk-komputer-biasa` -> internal link ke `/layanan/jasa-servis-maintenance-cctv-palembang`

#### Klaster D: Kebutuhan Spesifik & Area Lokal Palembang
19. `pasang-cctv-di-ilir-timur-palembang-tips-pilih-teknisi-lokal` -> internal link ke `/layanan/pasang-cctv-rumah-palembang`
20. `solusi-keamanan-cctv-untuk-perumahan-di-jakabaring-dan-plaju` -> internal link ke `/layanan/pasang-cctv-rumah-palembang`
21. `rekomendasi-cctv-tanpa-kabel-wifi-untuk-kost-dan-kontrakan-palembang` -> internal link ke `/layanan/paket-cctv-palembang-murah`
22. `instalasi-cctv-area-parkir-gedung-dan-perkantoran-palembang` -> internal link ke `/layanan/instalasi-ip-camera-gedung-pabrik-palembang`
23. `cctv-solar-cell-panel-surya-untuk-kebun-dan-tambak-luar-kota-palembang` -> internal link ke `/layanan/instalasi-ip-camera-gedung-pabrik-palembang`
24. `aspek-hukum-pemasangan-cctv-di-tempat-umum-dan-privasi-tetangga` -> internal link ke `/layanan/pasang-cctv-rumah-palembang`

#### Klaster E: Fitur Canggih & Smart Security
25. `cctv-dengan-audio-dua-arah-bisa-bicara-langsung-lewat-hp` -> internal link ke `/layanan/pasang-cctv-rumah-palembang`
26. `fitur-ai-human-and-vehicle-detection-pada-cctv-cegah-alarm-palsu` -> internal link ke `/layanan/pasang-cctv-ruko-toko-palembang`
27. `tips-mengatur-sudut-pandang-lensa-cctv-2-8mm-vs-3-6mm` -> internal link ke `/layanan/pasang-cctv-ruko-toko-palembang`
28. `cara-menyambungkan-cctv-ke-smart-tv-dan-banyak-hp-keluarga` -> internal link ke `/layanan/pasang-cctv-rumah-palembang`
29. `checklist-perawatan-rutin-cctv-tahunan-agar-tahan-lebih-dari-5-tahun` -> internal link ke `/layanan/jasa-servis-maintenance-cctv-palembang`
30. `perbandingan-biaya-cctv-online-cloud-vs-rekaman-harddisk-lokal` -> internal link ke `/layanan/paket-cctv-palembang-murah`

---

## 4. ESTIMASI RANGE BIAYA RIIL PALEMBANG (DATA RESMI CCTV PALEMBANG)

- **Paket Hemat Rumah (2 Kamera Analog HD 2MP Hikvision/Dahua):** Rp 1.850.000 *(Harga kompetitor terendah: Rp 2.200.000)*
  - Termasuk: DVR 4ch Turbo HD, HDD Surveillance 500GB (rekam 12 hari), kabel coaxial 20m, BNC/DC, power supply, free pasang rapi pipa conduit, free setting HP, garansi 1 tahun ganti baru, Tanpa DP.
- **Paket Standar Bisnis (4 Kamera Analog HD 2MP Hikvision/Dahua):** Rp 2.850.000 *(Harga kompetitor: Rp 2.999.000) — Paling Laris*
  - Termasuk: DVR 4ch Full HD, HDD Surveillance 1TB (rekam 20 hari), kabel coaxial 40m, power supply sentral 10A jaring, free pasang pipa conduit, setting HP, garansi 1 tahun ganti baru, Tanpa DP.
- **Paket Full Color 24 Jam (4 Kamera ColorVu/Full Color Hikvision/Dahua 2MP):** Rp 3.190.000 *(Harga kompetitor: Rp 3.300.000)*
  - Termasuk: Kamera Full Color malam berwarna terang, DVR 4ch, HDD 1TB, kabel shielded 40m, power supply anti petir, free pasang rapi conduit, Tanpa DP.
- **Paket Pro IP Camera PoE (4 Kamera Kelas Industri):** Rp 4.900.000
  - Termasuk: Kamera IP PoE crystal clear digital, NVR PoE dedicated, HDD Surveillance 1TB/2TB, kabel LAN Cat6 shielded.
- **Paket Kustom 8 Kamera:** Rp 5.200.000 - Rp 6.800.000.
- **Paket Kustom 16 Kamera:** Rp 10.500.000 - Rp 13.500.000.
- **Jasa Pasang Saja (Perangkat dari konsumen):** Rp 150.000 - Rp 250.000 / titik.
- **Jasa Servis & Pengecekan CCTV Panggilan:** Rp 100.000 - Rp 200.000 / kunjungan awal.
