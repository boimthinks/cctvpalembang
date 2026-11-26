---
title: "Sistem CCTV NVR PoE untuk Kantor dan Gudang Skala Besar"
description: "Panduan NVR PoE untuk kantor dan gudang Palembang: jumlah channel, switch PoE, kabel UTP antar-gedung, rack, UPS, sampai pembagian hak akses operator."
publishDate: 2026-12-02
author: "Martha Rhino"
category: "Panduan Teknis"
tags: ["nvr poe cctv gudang", "cctv kantor palembang", "ip camera gudang", "instalasi cctv pabrik palembang"]
image: "/images/blog/sistem-cctv-nvr-poe-kantor-gudang-palembang.webp"
featured: false
draft: true
faq:
  - question: "Apa bedanya NVR PoE dengan DVR analog biasa?"
    answer: "DVR analog menerima sinyal video lewat kabel coaxial dari kamera analog, lalu menyimpannya. NVR PoE menerima data digital lewat kabel LAN, sekaligus mengirim daya ke kamera melalui kabel yang sama. Karena itu NVR PoE tidak membutuhkan adaptor terpisah di setiap kamera."
  - question: "Berapa jumlah channel NVR yang sebaiknya dipilih untuk gudang?"
    answer: "Pilih NVR dengan channel minimal 30 persen di atas kebutuhan sekarang. Gudang yang butuh 12 kamera sebaiknya memakai NVR 16 channel, bukan 12 channel. Kamera tambahan di area loading dock atau kantor hampir selalu muncul dalam satu dua tahun pertama."
  - question: "Apakah kabel LAN boleh lebih dari 100 meter?"
    answer: "Tidak untuk satu tarikan UTP. Batas standar Ethernet adalah 100 meter. Untuk gudang panjang atau antar-gedung, gunakan fiber optic dengan konverter di kedua ujung, atau pasang switch PoE di titik tengah sebagai repeater. Jangan menyambung kabel dengan konektor biasa."
  - question: "Kenapa kamera PoE mati padahal NVR menyala?"
    answer: "Biasanya karena anggaran daya switch PoE habis. Switch PoE 8 port dengan total 60 watt tidak bisa memberi daya 8 kamera yang masing-masing butuh 10 watt lebih. Periksa total watt perangkat, bukan hanya jumlah port, lalu hitung ulang dengan cadangan 20 sampai 30 persen."
  - question: "Apakah perlu UPS untuk sistem CCTV gudang?"
    answer: "Ya, sangat perlu. Gudang dengan proses bongkar muat malam sering mengalami listrik tidak stabil. UPS menjaga NVR dan switch tetap hidup saat listrik putus, dan memberi waktu untuk menyimpan rekaman atau memeriksa kejadian. Minimal 30 sampai 60 menit cadangan untuk NVR dan switch."
  - question: "Berapa lama rekaman yang wajar untuk gudang?"
    answer: "Untuk gudang, kami menyarankan 30 sampai 45 hari, tergantung tingkat risiko. Kehilangan barang di gudang sering baru ketahuan saat stok opname bulanan. Dengan 16 kamera resolusi 2MP dan kompresi H.265+, kebutuhan harddisk berada di kisaran 4TB untuk sebulan."
---

Gudang dan kantor bukan rumah. Jumlah kamera lebih banyak, jalur kabel lebih panjang, dan sistem harus tetap jalan ketika listrik bermasalah. Di titik ini, DVR analog dengan adaptor per kamera mulai kewalahan. Kabel coaxial tidak lagi praktis untuk 16 titik yang tersebar di tiga blok bangunan.

NVR PoE adalah jawaban umum untuk skala ini. Satu kabel LAN mengirim gambar sekaligus daya, sehingga tiap kamera tidak butuh adaptor dan stop kontak sendiri. Artikel ini membahas perencanaan sistem NVR PoE dari jumlah channel sampai pembagian hak akses operator, berdasarkan pemasangan yang kami kerjakan di gudang dan kantor di Palembang.

## Kenapa PoE cocok untuk gudang

PoE atau Power over Ethernet mengirim daya listrik melalui kabel data. Artinya, satu tarikan kabel LAN Cat6 cukup untuk data video 4 megapiksel sekaligus daya kamera.

Bagi gudang, keuntungannya besar. Kamera di atap gudang setinggi 8 meter tidak perlu stop kontak, tidak perlu adaptor 12V yang diletakkan di tempat panas, dan tidak perlu jalur listrik terpisah. Titik yang sering bermasalah pada sistem analog, yaitu adaptor yang lelah di suhu tinggi, hilang seluruhnya.

Keuntungan kedua, kualitas gambar tidak menurun seiring jarak seperti pada kabel coaxial. Selama masih di bawah 100 meter, kualitas data tetap utuh. Keuntungan ketiga, pengelolaan terpusat. Semua kamera terlihat di satu NVR, dengan pengaturan seragam.

| Aspek | DVR analog + adaptor | NVR PoE |
| :--- | :--- | :--- |
| Jenis kabel | Coaxial RG59 + kabel daya | UTP Cat6 saja |
| Daya kamera | Adaptor per kamera | Dari switch PoE |
| Jarak maksimal | Sekitar 150 m per jalur | 100 m per tarikan |
| Resolusi umum | 2MP | 2MP sampai 8MP |
| Titik rawan | Adaptor, konektor BNC | Konektor RJ45, anggaran daya |
| Skala ideal | sampai 8 kamera | 8 kamera ke atas |

## Menentukan jumlah channel dan titik kamera

Mulai dari denah gudang, bukan dari brosur perangkat. Tandai dulu jalur yang benar-benar berisiko: pintu utama, loading dock, gang antar rak, area stok bernilai tinggi, ruang kasir atau administrasi, dan pintu darurat.

Untuk gudang ukuran menengah di kawasan Kramasan atau Gandus, kebutuhan awal biasanya 10 sampai 14 kamera. Tambahkan kamera di area parkir kendaraan pengangkut, karena kejadian di area ini sering tidak tercatat.

Setelah jumlah titik pasti, pilih NVR dengan channel minimal 30 persen lebih tinggi. Gudang dengan 12 kamera sebaiknya memakai NVR 16 channel. Perangkat tidak perlu diganti saat menambah kamera di tahap berikutnya, dan biaya tambahan untuk channel lebih besar relatif kecil.

## Switch PoE dan anggaran daya

NVR dengan port PoE bawaan praktis untuk kamera yang dekat. Tetapi untuk gudang, switch PoE terpisah hampir selalu lebih baik karena kamera tersebar di beberapa blok.

Dua angka perlu dihitung, jumlah port dan total watt. Kamera IP 2MP umumnya menarik 6 sampai 8 watt, kamera 4MP dengan lampu putih bisa 10 sampai 12 watt. Switch PoE 8 port dengan total 60 watt tidak akan cukup untuk 8 kamera 4MP.

Hitung total watt seluruh kamera, lalu tambahkan cadangan 20 sampai 30 persen. Hasilnya menjadi patokan minimal total watt switch. Periksa juga standar PoE yang dipakai, IEEE 802.3af cukup untuk kamera biasa, sedangkan 802.3at dibutuhkan untuk kamera dengan lampu atau PTZ.

## Kabel antar-gedung dan batas 100 meter

Kesalahan paling mahal di sistem gudang adalah menarik satu kabel UTP sepanjang 180 meter tanpa perencanaan. Kabel tetap terpasang, tetapi gambar tidak muncul sama sekali karena melewati batas Ethernet.

Untuk jarak di atas 100 meter, ada tiga pilihan. Pertama, fiber optic dengan konverter di kedua ujung, pilihan terbaik untuk antar-gedung karena tidak terpengaruh petir dan induksi. Kedua, switch PoE di titik tengah sebagai repeater. Ketiga, memindahkan NVR lebih dekat ke kamera.

Gunakan kabel UTP Cat6 dengan pelindung untuk jalur outdoor. Jalur di dalam tanah wajib memakai pipa atau duct, bukan kabel telanjang. Untuk gudang di Palembang yang sering tergenang saat hujan, naikkan jalur kabel minimal 30 cm dari permukaan tanah.

## Rack, UPS, dan ruang kontrol

Sistem NVR PoE berskala gudang layak ditaruh di satu rack kecil, bukan di atas meja. Rack 6U sampai 12U sudah cukup untuk NVR, switch PoE, patch panel, dan UPS.

UPS sangat disarankan. Gudang dengan proses bongkar muat malam sering mengalami tegangan turun atau listrik putus sesaat. UPS 1.000 VA biasanya cukup untuk menjaga NVR dan switch selama 30 sampai 60 menit, tergantung jumlah perangkat.

Hal yang sering terlupa adalah pendinginan. Rack di ruang tertutup tanpa ventilasi akan membuat NVR cepat panas. Beri jarak minimal 10 cm di atas dan bawah perangkat, dan jangan menaruh rack di dekat atap seng yang panas.

## Pembagian hak akses operator

Sistem besar butuh aturan akses. Tanpa aturan, semua orang bisa memutar ulang rekaman dan menghapus bukti.

Praktik yang kami sarankan: satu akun admin dipegang pemilik atau manajer, akun operator untuk kepala keamanan dengan hak melihat live saja, dan akun terbatas untuk staf yang hanya perlu melihat area tertentu. Matikan fitur ekspor rekaman pada akun operator, atau beri izin ekspor hanya pada admin.

Aktifkan juga pencatatan aktivitas login. Pada NVR kelas menengah, log ini menyimpan waktu login, perangkat yang dipakai, dan tindakan penting. Log tersebut sering menjadi penentu ketika rekaman hilang bersamaan dengan hilangnya barang.

## Menghitung kapasitas harddisk

Untuk 16 kamera 2MP dengan kompresi H.265+ dan rekaman 24 jam, kebutuhan sekitar 4TB untuk 30 sampai 45 hari. Angka ini bergerak sesuai jumlah kamera, resolusi, dan tingkat gerakan di area yang direkam.

Untuk gudang, disarankan memakai harddisk khusus surveillance, bukan harddisk komputer. Harddisk surveillance dirancang bekerja terus-menerus, sementara harddisk komputer umumnya cepat rusak pada pemakaian 24 jam. Penggantian dan penambahan kapasitasnya kami tangani lewat [layanan servis dan maintenance CCTV Palembang](/layanan/jasa-servis-maintenance-cctv-palembang/).

## Checklist sebelum membeli paket NVR PoE

Lima hal yang harus dipastikan sebelum kontrak. Pertama, denah titik kamera sudah final. Kedua, total watt switch PoE sudah dihitung dengan cadangan. Ketiga, jarak tiap tarikan kabel sudah diukur.

Keempat, lokasi rack dan UPS sudah ditetapkan. Kelima, daftar akun dan hak aksesnya sudah disepakati.

Untuk pemasangan skala kantor, gudang, dan pabrik dengan perencanaan jaringan seperti ini, lihat [layanan instalasi IP camera gedung dan pabrik Palembang](/layanan/instalasi-ip-camera-gedung-pabrik-palembang/). Kami menyiapkan gambar jaringan, perhitungan daya, dan dokumentasi serah terima berisi data akun sebelum proyek dinyatakan selesai.

Kalau Anda sedang merencanakan pemasangan CCTV untuk gudang atau kantor, hubungi WhatsApp **0851-0171-8690**. Kirim denah sederhana dan jumlah titik yang diinginkan, kami bantu susun daftar perangkat serta perkiraan biayanya. Setiap unit yang kami pasang bergaransi resmi 1 tahun ganti baru, dengan pembayaran setelah sistem berjalan normal.
