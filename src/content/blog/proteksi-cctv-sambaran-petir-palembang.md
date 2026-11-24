---
title: "CCTV Mati Setelah Petir di Palembang: Proteksi Grounding dan Surge Arrester"
description: "Kenapa kamera CCTV mati setelah hujan petir, jalur masuk tegangan lebih, standar tahanan grounding, dan cara memasang surge arrester agar DVR tidak jebol lagi."
publishDate: 2026-11-17
author: "Martha Rhino"
category: "Panduan Teknis"
tags: ["proteksi cctv petir", "grounding cctv", "surge arrester cctv", "cctv mati setelah petir", "servis cctv palembang"]
image: "/images/blog/proteksi-cctv-sambaran-petir-palembang_poco.webp"
featured: false
faq:
  - question: "Kenapa CCTV mati padahal petir menyambar jauh dari rumah saya?"
    answer: "Kerusakan pada CCTV di Palembang hampir selalu berasal dari induksi elektromagnetik, bukan sambaran langsung ke bangunan. Kilatan petir mengirim pulsa tegangan tinggi ke kabel coaxial dan kabel LAN yang panjang di luar rumah, lalu pulsa itu masuk ke port DVR atau NVR. Karena itu kamera bisa mati meskipun titik sambaran berada beberapa kilometer dari lokasi."
  - question: "Berapa nilai tahanan grounding yang benar untuk instalasi CCTV?"
    answer: "Acuan PUIL dan SNI 0225 menetapkan tahanan pembumian instalasi listrik bangunan maksimal 5 ohm, sementara peralatan elektronik seperti DVR, NVR, dan switch lebih aman di bawah 3 ohm, dan peralatan yang sangat sensitif terhadap arus kejut di bawah 1 ohm. Angka ini wajib diukur dengan earth tester, bukan diperkirakan dari kedalaman rod yang ditanam."
  - question: "Apakah kamera yang sudah rusak karena petir masih bisa diklaim garansi?"
    answer: "Kerusakan akibat induksi petir berbeda dengan kegagalan unit karena cacat produksi. Produsen umumnya menggolongkan kerusakan akibat petir sebagai bencana alam di luar cakupan garansi. Karena itu proteksi dipasang saat instalasi, bukan setelah unit mati. Untuk pelanggan kami, teknisi tetap datang memeriksa dan melaporkan hasil diagnosa sebelum Anda memutuskan penggantian."
  - question: "Apakah adaptor atau power supply yang tulisannya anti petir sudah cukup?"
    answer: "Tidak cukup. Label anti petir pada adaptor biasanya hanya merujuk pada proteksi surja kecil di sisi output, biasanya berkapasitas beberapa ratus joule. Jalur coaxial dan kabel LAN tetap tidak terlindungi, padahal dua jalur inilah yang paling sering menghantar induksi ke perekam. Proteksi harus dipasang di setiap titik masuk kabel, bukan hanya di adaptor."
  - question: "Apakah grounding CCTV boleh disatukan dengan grounding instalasi listrik rumah?"
    answer: "Boleh, dan justru dianjurkan sebagai satu titik pembumian atau single point grounding yang dibonding dengan grounding listrik bangunan. Yang berbahaya adalah memiliki dua titik pembumian terpisah dengan potensi berbeda, karena arus petir akan mencari jalur dengan impedansi terendah dan melewati kabel coaxial atau kabel data, lalu merusak port perekam."
  - question: "Seberapa sering grounding dan surge arrester perlu diperiksa?"
    answer: "Pengukuran tahanan pembumian sebaiknya dilakukan setahun sekali, idealnya pada musim kemarau saat tanah paling kering karena nilai pada kondisi itu yang paling kritis. Surge arrester tidak perlu diukur, tetapi harus diganti setelah menyerap satu sambaran besar. Ciri arrester yang sudah jenuh adalah indikator jendela berubah warna atau perangkat di belakangnya mati berulang meski grounding sudah bagus."
---

Hujan petir di Palembang bukan sekadar gangguan sinyal. Setiap kali awan konvektif tumbuh di atas kota, ada peluang pulsa tegangan tinggi masuk ke instalasi CCTV lewat kabel yang panjang di luar rumah. Prakiraan BMKG untuk Kota Palembang sendiri pada 19 dan 20 November 2026 mencantumkan potensi hujan disertai petir, dan pola serupa berulang sepanjang musim hujan.

Pertanyaan yang paling sering masuk ke WhatsApp kami setelah badai sore bukan soal gambar buram, melainkan soal semua kamera mati dan DVR tidak menyala. Kerusakan CCTV akibat petir hampir selalu datang dari induksi elektromagnetik, bukan sambaran langsung ke atap. Kabel coaxial 20 meter yang menggantung di dinding, kabel LAN yang menyeberang ke pagar, dan jalur adaptor dari stop kontak semuanya bekerja seperti antena. Begitu pulsa masuk ke port perekam, kerusakan terjadi dalam hitungan mikrodetik, lebih cepat daripada reaksi sekring atau MCB.

Karena itu urutan penanganannya bukan mengganti kamera lebih dulu. Yang dibenahi adalah jalur masuk tegangan lebih, titik pembumian, lalu perangkat peredam surja. Tanpa itu, kamera baru akan bernasib sama pada badai berikutnya.

## Tiga jalur masuk tegangan lebih yang paling sering kami temui

Sistem CCTV punya lebih banyak pintu masuk daripada yang diasumsikan pemiliknya. Selain kabel listrik, ada jalur data yang menghubungkan perangkat di dalam rumah dengan perangkat di luar rumah, dan jalur inilah yang paling rentan.

| Jalur masuk | Gejala yang muncul | Komponen yang biasanya mati |
| :--- | :--- | :--- |
| Kabel coaxial kamera outdoor | Satu atau beberapa kamera video loss, gambar bergaris sesaat lalu hilang permanen | Port BNC pada DVR, modul video kamera, konektor |
| Kabel LAN PoE | Semua kamera hilang serentak, lampu port switch mati | Port PoE pada NVR atau switch, kamera terjauh |
| Adaptor dan power supply sentral | DVR restart berulang, adaptor panas, LED indikator redup | Adaptor, modul catu daya di dalam DVR |
| Kabel internet dari modem atau ONT | DVR menyala normal tetapi tidak bisa dibuka dari HP | Port LAN DVR, modem, kabel UTP ke router |
| Beda potensial antar titik pembumian | DVR mati total, harddisk korup, rekaman tidak terbaca | Mainboard DVR, harddisk surveillance |

Jalur terakhir yang paling sering terlewat. Rumah yang baru memasang grounding penangkal petir, sementara instalasi listriknya memakai grounding lama dari PLN, bisa memiliki dua titik bumi dengan potensi berbeda. Saat petir menyambar, arus mencari jalur impedansi terendah dan melewati coaxial yang menghubungkan kamera di luar dengan DVR di dalam, sehingga yang rusak justru perekamnya.

## Lapisan pertama: grounding satu titik yang benar

Pembumian CCTV bukan pekerjaan menancapkan sepotong besi ke tanah lalu mengencangkan kabel. Yang dibutuhkan adalah satu titik pembumian utama yang dibonding dengan grounding instalasi listrik bangunan, dihubungkan ke busbar tembaga, lalu didistribusikan ke semua perangkat dan ke setiap surge arrester.

Bahan yang kami pakai untuk rumah dan ruko: elektroda batang tembaga pejal diameter 5/8 inci dengan panjang 1,5 sampai 2,4 meter, kabel BC atau BCC minimal 6 mm persegi untuk jalur perangkat, dan bak kontrol agar sambungan bisa dibuka saat pengukuran tahunan. Untuk bangunan yang juga memiliki penangkal petir, penampang penghantar mengikuti SNI 03-7015-2004 dan tidak boleh lebih kecil dari 50 mm persegi untuk tembaga pada jalur penyalur utama.

Nilai yang dikejar bukan sekadar "ada ground". Ada ambang yang bisa diperiksa dengan alat ukur.

| Objek yang dibumikan | Tahanan pembumian | Rujukan praktik |
| :--- | :--- | :--- |
| Instalasi listrik bangunan | Maksimal 5 ohm | PUIL dan SNI 0225 |
| Perangkat elektronik (DVR, NVR, switch) | Di bawah 3 ohm | Turunan PUIL untuk peralatan elektronik |
| Perangkat sangat sensitif arus kejut | Di bawah 1 ohm | Turunan PUIL untuk peralatan sensitif |
| Sistem proteksi petir bangunan | Maksimal 5 ohm, makin rendah makin baik | SNI 03-7015-2004 |

Angka 5 ohm adalah batas atas yang masih ditoleransi, bukan target ideal. Semakin rendah tahanannya, semakin cepat arus petir dilepas ke tanah sebelum sempat naik ke jalur data. Pengukuran wajib memakai earth tester tiga titik, bukan ohmmeter biasa, dan sebaiknya dilakukan pada musim kemarau karena tanah basah setelah hujan membuat hasil terlihat bagus padahal kondisi terburuk terjadi saat tanah mengering.

Karakter tanah di Palembang sangat menentukan berapa rod yang dibutuhkan. Ini yang membuat hasil pemasangan di satu kecamatan tidak bisa disamakan dengan kecamatan lain.

| Kondisi tanah | Tahanan jenis (ohm meter) | Cara capai target |
| :--- | :--- | :--- |
| Tanah rawa, tepi Sungai Musi (Kertapati, Plaju, Seberang Ulu) | Sekitar 30 | Satu rod 2 meter umumnya sudah memenuhi |
| Tanah liat dan ladang (Ilir Barat, Alang-Alang Lebar) | Sekitar 100 | Satu sampai dua rod, ukur dulu sebelum menambah |
| Pasir basah | Sekitar 200 | Dua sampai tiga rod dengan jarak minimal 2 meter |
| Pasir dan kerikil kering, area timbunan (Gandus, lahan bekas rawa yang diuruk) | 500 sampai 1000 | Rod lebih panjang atau perlakuan tanah di sekitar elektroda |

Kesalahan yang sering kami temukan di lokasi pelanggan: tiga rod ditanam berdekatan kurang dari satu meter. Rod yang terlalu rapat saling mempengaruhi dan penurunannya tidak sebanding dengan biaya yang dikeluarkan. Jarak antar rod minimal dua kali panjang rod yang ditanam.

## Lapisan kedua: surge arrester di setiap titik masuk

Grounding menurunkan potensi, tetapi tidak memotong pulsa yang datang lebih cepat dari kemampuan sistem untuk melepasnya. Di sinilah surge protective device bekerja. Ada tiga jenis yang relevan untuk CCTV, dan ketiganya punya tempat masing-masing.

| Perangkat | Fungsi | Lokasi pasang | Kisaran harga pasar |
| :--- | :--- | :--- | :--- |
| SPD AC tipe 2 | Meredam lonjakan dari jaringan listrik | Box MCB atau panel distribusi | Rp 300.000 sampai Rp 600.000 |
| SPD coaxial BNC | Meredam induksi pada jalur video analog | Jalur coaxial, sebelum masuk DVR | Rp 100.000 sampai Rp 250.000 per kanal |
| SPD PoE atau SPD LAN | Meredam induksi pada jalur data IP camera | Jalur UTP sebelum masuk NVR atau switch | Rp 200.000 sampai Rp 450.000 per port |
| Ground rod, kabel BC, bak kontrol | Jalur pelepasan ke tanah | Halaman, di luar ruang terproteksi | Rp 500.000 sampai Rp 1.200.000 per titik |

Angka pada tabel adalah kisaran pasar komponen di Palembang, bukan harga paket layanan kami. Perlu dipahami, surge arrester tanpa jalur pembumian yang baik hanya menjadi beban tambahan, karena sisa tegangan tetap masuk ke perekam.

Untuk IP camera, SPD PoE dipasang di sisi dalam sebelum kabel masuk ke switch. Untuk sistem analog yang kamera terjauhnya menempel di pagar besi, SPD BNC di sisi DVR sudah menutup sebagian besar risiko. Kombinasi yang paling kami sarankan untuk rumah dan ruko: SPD AC tipe 2 di panel ditambah SPD pada jalur data kamera outdoor, bukan SPD di semua kanal.

## Lapisan ketiga: detail instalasi yang menentukan

Tiga lapisan di atas bisa gagal karena detail pemasangan. Beberapa hal yang kami terapkan pada setiap instalasi:

- Drip loop. Kabel yang masuk ke kamera dibuat melengkung ke bawah sebelum masuk konektor, sehingga air hujan menetes di titik terendah lengkungan.
- Junction box IP66. Semua sambungan BNC dan jack DC diletakkan di dalam kotak tertutup. Sambungan terbuka adalah pintu masuk air sekaligus titik lemah terhadap induksi.
- Kabel dalam pipa conduit. Pipa PVC high impact melindungi kabel dari gigitan tikus, panas atap, dan gesekan pada pagar logam. Perbandingan rating IP66 dan IP67 kami bahas di artikel [penjelasan teknis IP66, IP67, dan WDR untuk cuaca Palembang](/blog/penjelasan-teknis-ip66-ip67-wdr-cuaca-palembang/).
- Jalur kabel data dijauhkan dari kabel power. Coaxial dan UTP yang menempel sejajar kabel listrik 220 volt sepanjang belasan meter akan menangkap noise dan memperbesar peluang kopling induksi.
- Kamera tidak dipasang di titik tertinggi bangunan. Kamera di puncak tiang atau pagar besi tertinggi adalah target pertama sambaran samping. Menurunkannya 30 sampai 50 sentimeter ke bawah overstek atap sudah mengurangi risiko.

## Yang harus dilakukan setelah petir menyambar

Reaksi pertama biasanya mencabut semua kabel lalu membeli kamera baru. Urutan yang lebih hemat biaya adalah memisahkan kerusakan per komponen, karena tidak semua perangkat mati bersamaan.

| Gejala | Tersangka utama | Tindakan pertama |
| :--- | :--- | :--- |
| DVR tidak menyala sama sekali | Adaptor atau modul catu daya | Ukur tegangan adaptor dengan multimeter sebelum menyentuh DVR |
| DVR menyala, semua kamera video loss | Port video atau kabel coaxial | Tes satu kamera pada port lain yang masih berfungsi |
| Sebagian kamera mati, sebagian normal | Kamera atau konektor di titik tersebut | Tukar kamera dengan kanal yang normal untuk memastikan |
| Kamera hidup, gambar bergaris atau buram | Modul video kamera atau konektor teroksidasi | Periksa konektor dan panjang kabel dulu sebelum ganti unit |
| DVR hidup tetapi tidak bisa online di HP | Port LAN DVR atau modem | Cek lampu indikator port, tes kabel UTP lain |
| DVR bunyi beep dan meminta format | Harddisk korup | Jangan format sebelum data penting disalin, cek status S.M.A.R.T. |

Satu hal yang perlu diingat, jangan menyalakan ulang perangkat berulang kali setelah mati karena petir. Kalau ada komponen catu daya yang korsleting, percobaan berulang bisa merambat ke mainboard. Matikan dan ukur dulu.

## Tiga kasus yang kami tangani musim hujan lalu

Ruko dua lantai di Jakabaring memakai 8 kamera IP dengan NVR PoE. Setelah hujan petir, NVR menyala tetapi tiga port PoE mati dan semua kamera lantai dua hilang. Grounding-nya terukur 14 ohm karena hanya memakai satu rod 1,5 meter di tanah urukan. Setelah ditambah dua rod berjarak 2 meter, tahanan turun ke 3,1 ohm dan jalur PoE dipasangi SPD. Port yang terbakar tidak bisa diperbaiki, jadi NVR diganti.

Rumah di Sukarami lain lagi: DVR hidup dan harddisk terbaca, tetapi dua dari empat kamera gelap total. Induksi masuk lewat coaxial yang sejajar kabel listrik pagar sepanjang 12 meter. Di gudang area Kertapati, grounding justru bagus (2,4 ohm), yang bermasalah konektor outdoor terbuka tanpa junction box selama dua tahun sehingga air masuk dan arus merambat lewat jalur basah.

## Soal garansi dan kerusakan akibat petir

Kami membedakan dua hal yang sering dicampur. Garansi resmi 1 tahun ganti baru berlaku untuk kegagalan unit akibat cacat produksi, misalnya port rusak tanpa sebab, harddisk bad sector, atau kamera mati sendiri. Kerusakan karena induksi petir digolongkan produsen sebagai bencana alam dan umumnya di luar cakupan garansi.

Karena itu pendekatan kami sederhana: proteksi dipasang sejak instalasi. Untuk pelanggan yang sudah mengalami kerusakan, teknisi datang memeriksa, mengukur grounding, dan melaporkan bagian mana yang perlu diganti sebelum Anda memutuskan. Prosedur klaim untuk kerusakan di dalam cakupan garansi ada di artikel [cara klaim garansi CCTV 1 tahun di Palembang](/blog/cara-klaim-garansi-cctv-1-tahun-palembang/).

Kalau sistem Anda sudah sering mati setiap kali hujan, pemeriksaan menyeluruh ada di layanan [jasa servis dan maintenance CCTV Palembang](/layanan/jasa-servis-maintenance-cctv-palembang/). Biaya kunjungan awal untuk pengecekan dan pengukuran berada di rentang Rp 100.000 sampai Rp 200.000, dan hasil ukurnya kami tunjukkan langsung di lokasi.

## Checklist menilai vendor sebelum percaya klaim proteksi petir

Banyak penawaran mencantumkan "anti petir" tanpa penjelasan teknis. Tujuh pertanyaan berikut cukup untuk memisahkan klaim dari pekerjaan nyata.

1. Apakah ada pengukuran tahanan pembumian dengan earth tester, dan berapa hasilnya sebelum serta sesudah pemasangan?
2. Berapa jumlah titik pembumian, dan apakah dibonding menjadi satu titik atau dibiarkan terpisah?
3. Apakah surge arrester dipasang di jalur data (coaxial atau PoE), atau hanya mengandalkan adaptor berlabel anti petir?
4. Apakah semua sambungan konektor diletakkan di dalam junction box IP66?
5. Apakah jalur kabel data dipisahkan dari kabel listrik 220 volt?
6. Apakah ada bak kontrol pada elektroda supaya bisa diperiksa setahun kemudian?
7. Apakah vendor bersedia menyerahkan catatan hasil pengukuran sebagai dokumen serah terima?

Kalau empat dari tujuh pertanyaan itu tidak bisa dijawab, kemungkinan besar yang Anda beli hanya penambahan rod tanpa sistem.

Untuk rumah atau ruko yang akan dipasang baru, proteksi ini paling murah dikerjakan bersamaan dengan instalasi awal karena jalur kabel masih dibuka. Paket yang sudah termasuk grounding dan pemasangan rapi berstandar pipa conduit ada di halaman [paket pasang CCTV Palembang murah terima beres](/layanan/paket-cctv-palembang-murah/). Kalau Anda membandingkan sistem kabel dan sistem jaringan, perbedaan kebutuhan proteksinya kami bahas di artikel [perbedaan CCTV analog dan IP camera](/blog/perbedaan-cctv-analog-vs-ip-camera/).

Kirimkan jumlah kamera, jenis sistem (analog atau IP), dan kondisi tanah di lokasi Anda ke WhatsApp resmi kami di 0851-0171-8690. Tim teknisi akan menghitung kebutuhan grounding dan surge arrester yang sepadan, bukan menjual sebanyak mungkin komponen. Pembayaran dilakukan setelah sistem terpasang, menyala normal, dan Anda sudah bisa memantau dari HP. Garansi resmi 1 tahun ganti baru berlaku untuk unit kamera, DVR atau NVR, dan harddisk surveillance.
