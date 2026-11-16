---
title: "Berapa Lama Rekaman CCTV Tersimpan di Harddisk 1TB"
description: "Hitungan lama rekaman CCTV berdasarkan kapasitas harddisk 500GB sampai 8TB. Tabel per jumlah kamera, pengaruh bitrate, dan cara memperpanjang masa simpan."
publishDate: 2026-11-16
author: "Tim Teknisi CCTV Palembang"
category: "Panduan Teknis"
tags: ["kapasitas rekaman cctv", "harddisk cctv", "lama rekaman cctv", "penyimpanan rekaman cctv"]
image: "/images/blog/lama-rekaman-cctv-kapasitas-harddisk-palembang_poco.webp"
featured: false
faq:
  - question: "Berapa lama rekaman CCTV 4 kamera dengan harddisk 1TB?"
    answer: "Untuk 4 kamera 2MP yang merekam 24 jam dengan kompresi H.265+ pada 12 sampai 15 frame per detik, harddisk 1TB bertahan sekitar 12 sampai 21 hari, tergantung kepadatan gerakan di depan kamera dan pengaturan bitrate. Kalau kamera 4MP atau rekaman memakai H.264, masa simpannya turun menjadi 6 sampai 11 hari."
  - question: "Apakah harddisk 1TB benar-benar menyimpan 1000 GB?"
    answer: "Tidak. Kapasitas efektif yang bisa dipakai DVR sekitar 93 persen dari angka di label, jadi 1TB terbaca kira-kira 931 GB. Sisanya dipakai sistem berkas perekam, partisi firmware, dan ruang cadangan untuk indeks video. Hitungan lama rekaman sebaiknya memakai angka efektif ini agar tidak kecewa saat memeriksa menu DVR."
  - question: "Kenapa rekaman lama saya hilang padahal harddisk belum penuh?"
    answer: "DVR memakai mode loop recording, yaitu menimpa rekaman paling lama secara otomatis ketika ruang penyimpanan habis. Rekaman baru selalu menggeser rekaman lama tanpa pemberitahuan. Kalau kejadian yang Anda cari berumur lebih dari kapasitas simpan, rekamannya memang sudah tertimpa dan tidak bisa dikembalikan."
  - question: "Berapa kapasitas harddisk yang pas untuk toko yang butuh rekaman 30 hari?"
    answer: "Untuk 4 kamera 2MP H.265+, kebutuhan 30 hari setara 1,3TB sampai 2,3TB, sehingga harddisk 2TB atau 4TB lebih aman. Toko yang kamera kasirnya 4MP sebaiknya langsung memilih 4TB. Simpan juga salinan klip transaksi penting ke flashdisk sebelum rekaman tertimpa."
  - question: "Bisakah menambah harddisk baru tanpa membeli DVR baru?"
    answer: "Tergantung jumlah bay dan batas kapasitas DVR. DVR 4 channel kelas ekonomis umumnya hanya punya satu slot SATA dengan dukungan maksimal 4TB atau 6TB, sedangkan NVR dan DVR kelas atas punya dua sampai empat bay. Cek spesifikasi perekam Anda sebelum membeli, karena harddisk 8TB tidak akan terbaca penuh pada DVR yang dibatasi 4TB."
  - question: "Apakah harddisk komputer biasa bisa dipakai untuk CCTV?"
    answer: "Bisa menyala, tetapi tidak layak dipakai jangka panjang. Harddisk desktop dirancang untuk beban baca dan operasi sekitar 8 jam sehari, sementara CCTV menulis data nonstop 24 jam. Pada beban itu, harddisk biasa umumnya mulai bad sector dalam 6 sampai 12 bulan, dan rekaman justru hilang saat dibutuhkan."
---

Pertanyaan yang paling sering masuk ke WhatsApp kami bukan soal merek kamera, melainkan soal lama rekaman. Pelanggan di Sukarami, Ilir Barat, sampai Jakabaring ingin tahu berapa hari video tersimpan di dalam harddisk sebelum tertimpa rekaman baru. Jawabannya bergantung pada tiga hal yang saling mengunci: kapasitas harddisk, jumlah kamera, dan bitrate rekaman yang dipakai perekam.

Untuk patokan cepat, 4 kamera 2MP dengan harddisk 1TB dan kompresi H.265+ umumnya menyimpan rekaman 12 sampai 21 hari. Dua kamera 2MP di harddisk 500GB berada di kisaran yang mirip, 12 sampai 21 hari, karena jumlah kamera lebih sedikit. Angka ini bukan patokan mutlak. Kamera 4MP, frame rate tinggi, atau kompresi H.264 bisa memotong masa simpan sampai separuhnya.

## Jawaban singkat dan rumus hitungnya

Kapasitas rekaman CCTV dihitung dari bitrate, bukan dari merek kamera. Satu kamera yang menulis data 2 Mbps menghasilkan sekitar 21,6 GB per hari. Kamera dengan bitrate 1 Mbps menghasilkan separuhnya, sekitar 10,8 GB per hari. Angka ini didapat dari konversi satuan: 1 Mbps sama dengan 1 juta bit per detik, dikali 86.400 detik, lalu dibagi 8 untuk diubah menjadi byte.

Rumus praktisnya:

**lama rekaman (hari) = kapasitas efektif harddisk ÷ (jumlah kamera × pemakaian GB per kamera per hari)**

Kapasitas efektif bukan angka di label. Harddisk 1TB terbaca sekitar 931 GB di menu DVR, lalu sekitar 5 sampai 7 persen dipotong untuk sistem berkas dan partisi perekam. Sisanya yang benar-benar bisa dipakai menyimpan video. Untuk hitungan di artikel ini kami memakai 465 GB untuk harddisk 500GB, 931 GB untuk 1TB, 1.862 GB untuk 2TB, 3.725 GB untuk 4TB, dan 7.450 GB untuk 8TB.

## Tabel lama rekaman per kapasitas dan jumlah kamera

Tabel berikut memakai asumsi rekaman 24 jam nonstop, kamera 2MP 1080p, kompresi H.265+, frame rate 12 sampai 15 fps, dan bitrate efektif 1,0 sampai 1,8 Mbps. Rentang bawah mewakili scene ramai dengan gerakan terus menerus, rentang atas mewakili scene tenang seperti lorong rumah atau halaman belakang.

| Kapasitas | 2 kamera | 4 kamera | 8 kamera | 16 kamera |
| :--- | :--- | :--- | :--- | :--- |
| 500GB | 12 - 21 hari | 6 - 10 hari | 3 - 5 hari | 1 - 2 hari |
| 1TB | 24 - 43 hari | 12 - 21 hari | 6 - 10 hari | 3 - 5 hari |
| 2TB | 48 - 86 hari | 24 - 43 hari | 12 - 21 hari | 6 - 10 hari |
| 4TB | 96 - 172 hari | 48 - 86 hari | 24 - 43 hari | 12 - 21 hari |
| 8TB | 192 - 345 hari | 96 - 172 hari | 48 - 86 hari | 24 - 43 hari |

Angka di tabel ini sejalan dengan pengaturan yang kami pakai pada paket standar. Paket 2 kamera dengan harddisk 500GB dirancang menyimpan sekitar 12 hari, dan paket 4 kamera dengan 1TB menyimpan sekitar 20 hari. Selisih antara dua paket itu bukan kebetulan, melainkan hasil perhitungan bitrate dibagi jumlah titik kamera.

Satu hal yang perlu diingat, menambah kamera ke DVR yang sama akan memotong masa simpan secara proporsional. Ruko yang mulai dengan 4 kamera dan menambah 4 titik lagi akan melihat masa simpan 1TB turun dari sekitar 20 hari menjadi sekitar 10 hari, meskipun harddisknya tidak disentuh.

## Faktor yang membuat hitungan meleset dari tabel

### Resolusi kamera

Kamera 4MP atau 2K memakai ruang penyimpanan sekitar 1,6 sampai 2 kali kamera 2MP pada pengaturan serupa. Inilah penyebab paling sering dari keluhan "kok rekaman saya cuma seminggu". Pelanggan membeli kamera 4MP untuk hasil gambar lebih tajam, tetapi tetap memakai harddisk 1TB bawaan paket 2MP.

### Kompresi video

H.265 menghemat ruang sekitar 40 persen dibanding H.264. Smart codec seperti H.265+ bisa memotong lagi 30 sampai 50 persen pada scene yang gerakannya jarang, karena perekam hanya mengirim detail penuh ketika ada perubahan di depan lensa. Kamera lama yang masih H.264 akan menghabiskan harddisk jauh lebih cepat.

### Frame rate dan pola rekaman

Rekaman 25 fps membutuhkan ruang lebih besar daripada 12 fps tanpa perbedaan berarti untuk kebutuhan bukti. Banyak juga pelanggan yang mengaktifkan rekaman berbasis deteksi gerakan pada jam sepi, misalnya pukul 22.00 sampai 06.00, sehingga masa simpan bisa memanjang dua sampai tiga kali lipat.

### Audio dan fitur tambahan

Kamera dengan mikrofon built-in menambah data suara sekitar 5 sampai 10 persen. Fitur analitik seperti deteksi manusia dan kendaraan tidak menambah besar file secara signifikan, tetapi memudahkan pencarian klip sehingga tidak perlu memutar rekaman berjam-jam.

## Kasus lapangan yang sering kami temui di Palembang

Ruko di kawasan Kolonel Atmo pernah memakai paket 4 kamera 4MP dengan harddisk 1TB. Pemilik mengeluh rekaman hanya bertahan 9 hari, padahal tetangganya dengan paket serupa bisa 18 hari. Setelah kami periksa, kameranya dipasang menghadap jalan raya yang ramai sepanjang hari, jadi bitrate smart codec tidak pernah turun. Solusinya bukan menambah harddisk, melainkan menurunkan frame rate kamera jalan dan memindahkan satu kamera 4MP ke area dalam toko yang gerakannya lebih sepi.

Kasus kedua datang dari toko kelontong di Plaju. Pemilik butuh rekaman 30 hari untuk menyelesaikan sengketa dengan pemasok, sementara sistemnya hanya menyimpan 12 hari. Saat kami datang, klip yang dicari sudah tertimpa. Kami pasang harddisk 4TB dan mengaktifkan jadwal rekaman penuh hanya di area kasir, sementara kamera gudang merekam saat ada gerakan. Hasilnya masa simpan area kasir menembus 40 hari.

Contoh ketiga justru sebaliknya. Rumah dua lantai di Sukarami dengan 2 kamera dan harddisk 500GB tetap menyimpan 21 hari karena kedua kamera menghadap halaman belakang yang kosong. Pemilik sempat ingin membeli harddisk 2TB, padahal kebutuhan rekamannya hanya 14 hari. Uangnya lebih baik dipakai menambah satu titik kamera di garasi.

## Cara memeriksa sisa umur rekaman di DVR

Jangan menebak. Hampir semua DVR Hikvision dan Dahua menampilkan kapasitas dan perkiraan sisa hari di menu info sistem.

Pada DVR Hikvision, buka menu utama, masuk ke HDD, lalu lihat kolom kapasitas total, kapasitas bebas, dan status harddisk. Untuk melihat rentang rekaman yang tersedia, buka menu Playback dan lihat tanggal paling awal yang masih menyimpan file. Selisih antara tanggal itu dan hari ini adalah masa simpan sebenarnya di lokasi Anda.

Pada DVR Dahua, buka menu Info, pilih HDD, lalu cek kolom status dan kapasitas. Menu Record atau Search akan menampilkan kalender dengan tanggal yang memiliki rekaman aktif. Kalau tanggal bergaris biru hanya mundur belasan hari, itu angka riil yang perlu Anda jadikan patokan, bukan tabel di artikel ini.

Pemeriksaan ini sebaiknya dilakukan sebulan setelah pemasangan, bukan setahun kemudian. Kalau ternyata masa simpannya kurang dari kebutuhan, penambahan harddisk atau penyesuaian bitrate masih murah. Kalau menunggu sampai ada kejadian, rekaman yang dibutuhkan biasanya sudah hilang.

## Cara memperpanjang masa simpan tanpa membeli harddisk baru

Ada beberapa pengaturan yang bisa mengubah masa simpan secara nyata. Semuanya bisa dilakukan dari menu DVR tanpa membongkar kamera.

- Turunkan frame rate ke 12 atau 15 fps. Untuk kebutuhan identifikasi wajah dan pelat nomor, 15 fps sudah cukup.
- Aktifkan H.265+ atau smart codec bila kamera dan DVR mendukung. Cek kompatibilitas karena smart codec hanya aktif ketika kamera, DVR, dan firmware berada di generasi yang sama.
- Matikan audio pada kamera yang tidak menghadap area transaksi. Suara jarang dibutuhkan untuk pemantauan parkiran atau halaman.
- Pakai jadwal rekaman. Area yang hanya ramai pada jam tertentu bisa direkam penuh saat jam operasional, lalu beralih ke mode deteksi gerakan di luar jam tersebut.
- Kurangi resolusi sub-stream untuk rekaman cadangan, sementara main stream tetap 2MP untuk keperluan zoom saat memutar ulang.

Yang tidak kami sarankan adalah menurunkan kualitas sampai wajah tidak lagi bisa dikenali. Rekaman yang bertahan 40 hari tetapi tidak berguna untuk identifikasi hanya membuang kapasitas. Untuk kebutuhan pembuktian, 10 hari rekaman tajam lebih bernilai daripada 30 hari rekaman buram.

## Kapan harddisk rekaman sebaiknya diganti

Harddisk khusus surveillance seperti Seagate SkyHawk dan WD Purple dirancang untuk beban tulis 24 jam dengan rating beban kerja tahunan yang jauh di atas harddisk desktop. Umur pakainya di lapangan umumnya 3 sampai 5 tahun. Setelah melewati rentang itu, tanda penuaan mulai muncul: DVR bunyi beep, rekaman putus-putus, atau status harddisk berubah menjadi error di menu.

Tiga gejala yang perlu Anda waspadai:

- Kapasitas bebas tiba-tiba penuh padahal jumlah kamera tidak berubah.
- DVR mengeluarkan bunyi peringatan berulang dan menampilkan pesan harddisk error.
- Rekaman melompat, ada segmen waktu yang hilang tanpa alasan.

Kalau salah satu gejala muncul, matikan DVR sebelum memeriksa, lalu cek status S.M.A.R.T. di menu penyimpanan. Harddisk yang sudah bad sector tidak bisa diperbaiki dengan format ulang. Memformat justru menghapus bukti dan biasanya hanya menunda kerusakan beberapa hari. Penggantian unit adalah jalan yang lebih aman, dan untuk pelanggan kami unit yang masih dalam masa garansi 1 tahun diganti baru di lokasi tanpa biaya servis. Prosedur servis dan penggantiannya ada di halaman [jasa servis dan maintenance CCTV Palembang](/layanan/jasa-servis-maintenance-cctv-palembang/).

## Checklist sebelum menambah kapasitas harddisk

Sebelum membeli harddisk baru, cek empat hal ini. Salah satunya sering terlewat dan berakhir dengan harddisk besar yang tidak terbaca penuh.

- Jumlah slot SATA pada DVR atau NVR. Perekam 4 channel ekonomis biasanya hanya punya satu slot, sehingga harddisk lama harus dilepas.
- Batas kapasitas yang didukung perekam. Banyak DVR dibatasi 4TB atau 6TB per slot meskipun harddisk 8TB bisa masuk secara fisik.
- Jenis harddisk. Pilih seri surveillance, bukan seri desktop atau NAS umum, dan pastikan garansinya resmi distributor Indonesia.
- Daya adaptor. DVR dengan dua harddisk membutuhkan adaptor lebih besar, dan adaptor bawaan yang underspec sering menjadi penyebab perekam restart sendiri.

Kalau Anda belum punya sistem dan sedang menghitung kebutuhan sejak awal, paket 2 kamera dan 4 kamera kami sudah menyertakan harddisk surveillance dengan masa simpan yang dihitung untuk pemakaian rumah dan ruko. Rincian kapasitas tiap paket ada di halaman [paket pasang CCTV Palembang murah terima beres](/layanan/paket-cctv-palembang-murah/). Untuk rumah dengan kebutuhan lebih sederhana, perbandingan biaya per jumlah kamera ada di artikel [estimasi biaya pasang CCTV rumah di Palembang](/blog/biaya-pasang-cctv-rumah-palembang/).

Untuk konsultasi kapasitas yang sesuai kebutuhan Anda, kirimkan jumlah kamera, resolusi, dan berapa hari rekaman yang ingin disimpan ke WhatsApp resmi kami di 0857-5890-3353. Tim teknisi akan menghitungkan kebutuhan harddisk dan bitrate yang pas, bukan sekadar menjual kapasitas terbesar. Pembayaran dilakukan setelah sistem terpasang rapi, menyala normal, dan Anda sudah bisa memutar ulang rekaman dari HP. Garansi resmi 1 tahun ganti baru berlaku untuk unit kamera, DVR, dan harddisk.
