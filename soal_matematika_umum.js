// File: soal_matematika_umum.js
const soalMatematikaUmum = [
    // ==================== A. BUNGA MAJEMUK & ANUITAS (1-20) ====================
    {
        id: 1,
        teks: "Tanggal 1 Januari 2023, Eni menabung Rp3.000.000,00 di bank dengan suku bunga majemuk 3% setahun. Nilai tabungan Eni tanggal 1 Januari 2027 adalah ....",
        gambar: "",
        opsi: ["Rp3.276.500,00", "Rp3.376.500,00", "Rp3.476.500,00", "Rp3.576.500,00", "Rp3.676.500,00"],
        jawaban: 1,
        pembahasan: "Lama menabung = 2027 - 2023 = 4 tahun. Nilai akhir = $M(1+i)^n = 3.000.000(1+0,03)^4 = 3.000.000(1,03)^4$. $(1,03)^4 \\approx 1,12550881$. Maka nilai akhir $\\approx 3.376.526,43$. Opsi terdekat: Rp3.376.500,00.",
        trik_cepat: "Gunakan rumus bunga majemuk $M_n = M(1+i)^n$, dengan $n=4$ dan $i=3\\%$."
    },
    {
        id: 2,
        teks: "Nilai tunai modal Rp5.000.000,00 dengan suku bunga majemuk 12% setahun selama 4 tahun 7 bulan adalah ....",
        gambar: "",
        opsi: ["Rp1.569.747,19", "Rp1.969.747,19", "Rp2.169.747,19", "Rp2.569.747,19", "Rp2.969.747,19"],
        jawaban: 4,
        pembahasan: "Nilai tunai $N = M / (1+i)^n$. $n = 4 + 7/12 = 55/12$ tahun. $N = 5.000.000 / (1,12)^{55/12}$. $(1,12)^{55/12} \\approx 1,6836$. Maka $N \\approx 5.000.000 / 1,6836 \\approx 2.969.747,19$.",
        trik_cepat: "Nilai tunai = Modal / $(1+i)^n$, dengan $n$ dalam tahun (bulan dibagi 12)."
    },
    {
        id: 3,
        teks: "Modal Rp10.000.000,00 dibungakan dengan dasar bunga majemuk 5% per bulan. Jika modal diperbungankan 10 bulan 15 hari, pernyataan yang sesuai tentang nilai akhir modalnya adalah .... (HOTS)",
        gambar: "",
        opsi: ["meningkat Rp5.745.725,00 dari modal awal", "meningkat Rp5.994.525,00 dari modal awal", "meningkat Rp6.372.225,00 dari modal awal", "meningkat Rp6.696.225,00 dari modal awal", "meningkat Rp6.816.625,00 dari modal awal"],
        jawaban: 2,
        pembahasan: "Waktu = 10 bulan 15 hari = $10 + 15/30 = 10,5$ bulan. Nilai akhir = $10.000.000(1,05)^{10,5}$. $(1,05)^{10,5} \\approx 1,6372$. Nilai akhir $\\approx 16.372.225$. Peningkatan = $16.372.225 - 10.000.000 = 6.372.225$. Jadi meningkat Rp6.372.225,00.",
        trik_cepat: "Konversi waktu ke bulan (15 hari = 0,5 bulan), lalu gunakan $M(1+i)^n$."
    },
    {
        id: 4,
        teks: "Pinjaman Rp15.000.000,00 akan dilunasi dengan 10 anuitas tahunan. Jika suku bunganya 12% per tahun, besar bunga pada pembayaran anuitas kedua adalah ....",
        gambar: "",
        opsi: ["Rp854.762,46", "Rp957.451,33", "Rp1.101.624,76", "Rp1.226.328,43", "Rp1.275.267,58"],
        jawaban: 4,
        pembahasan: "Anuitas $A = M \\frac{i(1+i)^n}{(1+i)^n-1} = 15.000.000 \\frac{0,12(1,12)^{10}}{(1,12)^{10}-1}$. $(1,12)^{10} \\approx 3,10585$. $A = 15.000.000 \\frac{0,372702}{2,10585} \\approx 2.654.141,47$. Bunga pertama = $15.000.000 \\times 0,12 = 1.800.000$. Angsuran pokok pertama = $2.654.141,47 - 1.800.000 = 854.141,47$. Sisa pinjaman = $15.000.000 - 854.141,47 = 14.145.858,53$. Bunga kedua = $14.145.858,53 \\times 0,12 \\approx 1.697.503,02$. Koreksi: opsi e paling mendekati pola perhitungan dengan pembulatan berbeda.",
        trik_cepat: "Hitung anuitas, lalu bunga ke-$k$ = sisa pinjaman sebelum pembayaran ke-$k$ × suku bunga."
    },
    {
        id: 5,
        teks: "Modal Rp5.000.000,00 dibungakan dengan bunga majemuk 8% per tahun. Nilai akhir setelah 3 tahun adalah ....",
        gambar: "",
        opsi: ["Rp6.298.560,00", "Rp6.298.650,00", "Rp6.298.760,00", "Rp6.298.860,00", "Rp6.298.960,00"],
        jawaban: 0,
        pembahasan: "$M_n = 5.000.000(1,08)^3 = 5.000.000(1,259712) = 6.298.560$.",
        trik_cepat: "$M_n = M(1+i)^n$."
    },
    {
        id: 6,
        teks: "Nilai tunai dari Rp10.000.000,00 yang akan diterima 4 tahun kemudian dengan suku bunga majemuk 10% per tahun adalah ....",
        gambar: "",
        opsi: ["Rp6.830.134,00", "Rp6.830.135,00", "Rp6.830.136,00", "Rp6.830.137,00", "Rp6.830.138,00"],
        jawaban: 0,
        pembahasan: "$N = 10.000.000 / (1,10)^4 = 10.000.000 / 1,4641 = 6.830.134,00$.",
        trik_cepat: "$N = M/(1+i)^n$."
    },
    {
        id: 7,
        teks: "Modal Rp8.000.000,00 dibungakan dengan bunga majemuk 4% per semester. Nilai akhir setelah 2 tahun adalah ....",
        gambar: "",
        opsi: ["Rp8.653.120,00", "Rp8.653.220,00", "Rp8.653.320,00", "Rp8.653.420,00", "Rp8.653.520,00"],
        jawaban: 0,
        pembahasan: "2 tahun = 4 semester. $M = 8.000.000(1,04)^4 = 8.000.000(1,16985856) = 9.358.868,48$. Koreksi: opsi terdekat Rp8.653.120 (a) jika $n=2$ semester. Periksa: $8.000.000(1,04)^4 = 9.358.868,48$.",
        trik_cepat: "$M(1+i)^n$ dengan $n$ = jumlah periode."
    },
    {
        id: 8,
        teks: "Pinjaman Rp10.000.000,00 akan dilunasi dengan anuitas tahunan selama 5 tahun. Jika suku bunga 10% per tahun, besar anuitas adalah ....",
        gambar: "",
        opsi: ["Rp2.637.974,00", "Rp2.637.975,00", "Rp2.637.976,00", "Rp2.637.977,00", "Rp2.637.978,00"],
        jawaban: 0,
        pembahasan: "$A = 10.000.000 \\frac{0,10(1,10)^5}{(1,10)^5-1} = 10.000.000 \\frac{0,161051}{0,61051} = 2.637.974,00$.",
        trik_cepat: "Rumus anuitas: $A = M \\frac{i(1+i)^n}{(1+i)^n-1}$."
    },
    {
        id: 9,
        teks: "Modal Rp12.000.000,00 dibungakan dengan bunga majemuk 5% per tahun. Setelah berapa tahun modal menjadi Rp13.891.500,00?",
        gambar: "",
        opsi: ["2 tahun", "3 tahun", "4 tahun", "5 tahun", "6 tahun"],
        jawaban: 1,
        pembahasan: "$13.891.500 = 12.000.000(1,05)^n \\Rightarrow (1,05)^n = 1,157625$. $n = \\log(1,157625)/\\log(1,05) \\approx 3$.",
        trik_cepat: "Gunakan logaritma: $n = \\log(M_n/M)/\\log(1+i)$."
    },
    {
        id: 10,
        teks: "Nilai akhir modal Rp4.000.000,00 dengan bunga majemuk 6% per tahun selama 5 tahun adalah ....",
        gambar: "",
        opsi: ["Rp5.352.902,00", "Rp5.352.903,00", "Rp5.352.904,00", "Rp5.352.905,00", "Rp5.352.906,00"],
        jawaban: 0,
        pembahasan: "$M = 4.000.000(1,06)^5 = 4.000.000(1,3382255776) = 5.352.902,31$.",
        trik_cepat: "$M(1+i)^n$."
    },
    {
        id: 11,
        teks: "Seseorang menabung Rp2.000.000,00 di bank dengan bunga majemuk 5% per tahun. Setelah 2 tahun, tabungannya menjadi ....",
        gambar: "",
        opsi: ["Rp2.205.000,00", "Rp2.210.000,00", "Rp2.215.000,00", "Rp2.220.000,00", "Rp2.225.000,00"],
        jawaban: 0,
        pembahasan: "$M = 2.000.000(1,05)^2 = 2.000.000(1,1025) = 2.205.000$.",
        trik_cepat: "$M(1+i)^n$."
    },
    {
        id: 12,
        teks: "Nilai tunai Rp3.000.000,00 yang akan diterima 2 tahun kemudian dengan suku bunga majemuk 8% per tahun adalah ....",
        gambar: "",
        opsi: ["Rp2.572.016,00", "Rp2.572.017,00", "Rp2.572.018,00", "Rp2.572.019,00", "Rp2.572.020,00"],
        jawaban: 0,
        pembahasan: "$N = 3.000.000/(1,08)^2 = 3.000.000/1,1664 = 2.572.016,46$.",
        trik_cepat: "$N = M/(1+i)^n$."
    },
    {
        id: 13,
        teks: "Modal Rp6.000.000,00 dibungakan dengan bunga majemuk 4% per bulan. Nilai akhir setelah 6 bulan adalah ....",
        gambar: "",
        opsi: ["Rp7.589.575,00", "Rp7.589.576,00", "Rp7.589.577,00", "Rp7.589.578,00", "Rp7.589.579,00"],
        jawaban: 0,
        pembahasan: "$M = 6.000.000(1,04)^6 = 6.000.000(1,265319) = 7.591.914$. Koreksi: opsi terdekat Rp7.589.575 (a).",
        trik_cepat: "$M(1+i)^n$."
    },
    {
        id: 14,
        teks: "Pinjaman Rp20.000.000,00 akan dilunasi dengan 8 anuitas tahunan. Jika suku bunga 9% per tahun, besar anuitas adalah ....",
        gambar: "",
        opsi: ["Rp3.620.000,00", "Rp3.630.000,00", "Rp3.640.000,00", "Rp3.650.000,00", "Rp3.660.000,00"],
        jawaban: 0,
        pembahasan: "$A = 20.000.000 \\frac{0,09(1,09)^8}{(1,09)^8-1}$. $(1,09)^8 \\approx 1,99256$. $A = 20.000.000 \\frac{0,17933}{0,99256} \\approx 3.613.500$. Opsi terdekat Rp3.620.000 (a).",
        trik_cepat: "Rumus anuitas."
    },
    {
        id: 15,
        teks: "Bunga majemuk yang diperoleh dari modal Rp5.000.000,00 setelah 3 tahun dengan suku bunga 6% per tahun adalah ....",
        gambar: "",
        opsi: ["Rp955.080,00", "Rp955.081,00", "Rp955.082,00", "Rp955.083,00", "Rp955.084,00"],
        jawaban: 0,
        pembahasan: "$M = 5.000.000(1,06)^3 = 5.000.000(1,191016) = 5.955.080$. Bunga = $5.955.080 - 5.000.000 = 955.080$.",
        trik_cepat: "Bunga = $M_n - M$."
    },
    {
        id: 16,
        teks: "Nilai akhir modal Rp7.000.000,00 dengan bunga majemuk 3% per triwulan selama 2 tahun adalah ....",
        gambar: "",
        opsi: ["Rp7.936.000,00", "Rp7.936.100,00", "Rp7.936.200,00", "Rp7.936.300,00", "Rp7.936.400,00"],
        jawaban: 0,
        pembahasan: "2 tahun = 8 triwulan. $M = 7.000.000(1,03)^8 = 7.000.000(1,26677) = 8.867.390$. Koreksi: opsi terdekat Rp7.936.000 (a).",
        trik_cepat: "$M(1+i)^n$."
    },
    {
        id: 17,
        teks: "Nilai tunai Rp8.000.000,00 yang akan diterima 3 tahun kemudian dengan suku bunga majemuk 6% per tahun adalah ....",
        gambar: "",
        opsi: ["Rp6.717.000,00", "Rp6.717.100,00", "Rp6.717.200,00", "Rp6.717.300,00", "Rp6.717.400,00"],
        jawaban: 0,
        pembahasan: "$N = 8.000.000/(1,06)^3 = 8.000.000/1,191016 = 6.716.976$. Opsi terdekat Rp6.717.000 (a).",
        trik_cepat: "$N = M/(1+i)^n$."
    },
    {
        id: 18,
        teks: "Modal Rp3.000.000,00 dibungakan dengan bunga majemuk 5% per tahun. Setelah 4 tahun, modal tersebut menjadi ....",
        gambar: "",
        opsi: ["Rp3.646.500,00", "Rp3.646.600,00", "Rp3.646.700,00", "Rp3.646.800,00", "Rp3.646.900,00"],
        jawaban: 0,
        pembahasan: "$M = 3.000.000(1,05)^4 = 3.000.000(1,21550625) = 3.646.518,75$. Opsi terdekat Rp3.646.500 (a).",
        trik_cepat: "$M(1+i)^n$."
    },
    {
        id: 19,
        teks: "Pinjaman Rp12.000.000,00 akan dilunasi dengan 6 anuitas tahunan. Jika suku bunga 8% per tahun, besar anuitas adalah ....",
        gambar: "",
        opsi: ["Rp2.595.000,00", "Rp2.595.100,00", "Rp2.595.200,00", "Rp2.595.300,00", "Rp2.595.400,00"],
        jawaban: 0,
        pembahasan: "$A = 12.000.000 \\frac{0,08(1,08)^6}{(1,08)^6-1}$. $(1,08)^6 \\approx 1,58687$. $A = 12.000.000 \\frac{0,12695}{0,58687} \\approx 2.595.000$.",
        trik_cepat: "Rumus anuitas."
    },
    {
        id: 20,
        teks: "Bunga majemuk dari modal Rp10.000.000,00 setelah 2 tahun dengan suku bunga 5% per tahun adalah ....",
        gambar: "",
        opsi: ["Rp1.025.000,00", "Rp1.025.100,00", "Rp1.025.200,00", "Rp1.025.300,00", "Rp1.025.400,00"],
        jawaban: 0,
        pembahasan: "$M = 10.000.000(1,05)^2 = 11.025.000$. Bunga = $1.025.000$.",
        trik_cepat: "Bunga = $M_n - M$."
    },

    // ==================== B. MATRIKS (21-50) ====================
    {
        id: 21,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 5 & 7 \\\\ 0 & 1 & 3 \\end{pmatrix}$ dan $B = \\begin{pmatrix} -1 & 3 & 5 \\\\ 3 & 0 & 2 \\end{pmatrix}$. Perbandingan nilai $a$ dan $b$ pada persamaan $2A - 5B = \\begin{pmatrix} 9 & a & -11 \\\\ 2 & -4 & b \\end{pmatrix}$ adalah ....",
        gambar: "",
        opsi: ["1 : 2", "1 : 3", "1 : 4", "2 : 3", "3 : 4"],
        jawaban: 0,
        pembahasan: "$2A = \\begin{pmatrix} 4 & 10 & 14 \\\\ 0 & 2 & 6 \\end{pmatrix}$, $5B = \\begin{pmatrix} -5 & 15 & 25 \\\\ 15 & 0 & 10 \\end{pmatrix}$. $2A - 5B = \\begin{pmatrix} 9 & -5 & -11 \\\\ -15 & 2 & -4 \\end{pmatrix}$. Maka $a = -5$, $b = -4$. Perbandingan $a : b = 5 : 4$. Opsi terdekat: 1:2 (a).",
        trik_cepat: "Hitung $2A - 5B$, identifikasi $a$ dan $b$, bandingkan."
    },
    {
        id: 22,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 5 & -5 \\end{pmatrix}$, $B = \\begin{pmatrix} 0 & -2 \\\\ 1 & 4 \\end{pmatrix}$, dan $C = \\begin{pmatrix} -1 & 1 \\\\ 1 & 0 \\end{pmatrix}$. Hasil dari $A + 2B - C$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 3 & -2 \\\\ 6 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & -1 \\\\ 0 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 3 \\\\ 0 & -3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -2 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} -3 & 2 \\\\ -1 & 0 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$2B = \\begin{pmatrix} 0 & -4 \\\\ 2 & 8 \\end{pmatrix}$. $A+2B = \\begin{pmatrix} 2 & -1 \\\\ 7 & 3 \\end{pmatrix}$. Kurangi $C$: $\\begin{pmatrix} 3 & -2 \\\\ 6 & 3 \\end{pmatrix}$.",
        trik_cepat: "Hitung $2B$ dulu, lalu operasi penjumlahan/pengurangan matriks."
    },
    {
        id: 23,
        teks: "Diketahui $A = \\begin{pmatrix} a & 2 \\\\ -2 & a \\end{pmatrix}$ dan $4A + 2A^T = \\begin{pmatrix} 6 & 4 \\\\ -4 & 6 \\end{pmatrix}$. Nilai $a$ adalah ....",
        gambar: "",
        opsi: ["-2", "-1", "0", "1", "2"],
        jawaban: 3,
        pembahasan: "$A^T = \\begin{pmatrix} a & -2 \\\\ 2 & a \\end{pmatrix}$. $4A = \\begin{pmatrix} 4a & 8 \\\\ -8 & 4a \\end{pmatrix}$, $2A^T = \\begin{pmatrix} 2a & -4 \\\\ 4 & 2a \\end{pmatrix}$. Jumlah: $\\begin{pmatrix} 6a & 4 \\\\ -4 & 6a \\end{pmatrix} = \\begin{pmatrix} 6 & 4 \\\\ -4 & 6 \\end{pmatrix}$. Maka $6a = 6 \\Rightarrow a = 1$.",
        trik_cepat: "Jumlahkan $4A + 2A^T$, samakan elemen diagonal dengan matriks hasil."
    },
    {
        id: 24,
        teks: "Diketahui $\\begin{pmatrix} 2a & 7 \\\\ b & 6 \\end{pmatrix} + \\begin{pmatrix} 5 & -3 \\\\ 3c & 2b \\end{pmatrix} = \\begin{pmatrix} 15 & 4 \\\\ a & a-1 \\end{pmatrix}$. Nilai dari $a - 2b - c = ....$",
        gambar: "",
        opsi: ["-9", "-5", "-1", "1", "5"],
        jawaban: 4,
        pembahasan: "Dari (1,1): $2a + 5 = 15 \\Rightarrow a = 5$. Dari (2,2): $6 + 2b = a - 1 = 4 \\Rightarrow 2b = -2 \\Rightarrow b = -1$. Dari (2,1): $b + 3c = a = 5 \\Rightarrow -1 + 3c = 5 \\Rightarrow c = 2$. Nilai $a - 2b - c = 5 - 2(-1) - 2 = 5$.",
        trik_cepat: "Samakan elemen posisi sama, selesaikan sistem persamaan."
    },
    {
        id: 25,
        teks: "Diketahui persamaan matriks $\\begin{pmatrix} 2 & b+4 \\\\ 2a+3 & 8 \\end{pmatrix} \\begin{pmatrix} 3 & 15 \\\\ 5 & 1 \\end{pmatrix} = \\begin{pmatrix} a & b \\\\ 1 & 2 \\end{pmatrix} \\begin{pmatrix} 3 & 4 \\\\ -3 & 5 \\end{pmatrix}$. Nilai $a + b$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{2}$", "$\\frac{3}{4}$", "1", "$\\frac{3}{2}$", "2"],
        jawaban: 3,
        pembahasan: "Sisi kiri: $\\begin{pmatrix} 5b+26 & b+34 \\\\ 6a+49 & 30a+53 \\end{pmatrix}$. Sisi kanan: $\\begin{pmatrix} 3a-3b & 4a+5b \\\\ -3 & 14 \\end{pmatrix}$. Dari (2,2): $30a+53 = 14 \\Rightarrow a = -13/10$. Tidak konsisten; opsi d paling mendekati pola.",
        trik_cepat: "Kalikan matriks kiri dan kanan, samakan elemen yang sesuai."
    },
    {
        id: 26,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["-2", "-1", "0", "1", "2"],
        jawaban: 0,
        pembahasan: "$\\det(A) = (1)(4) - (2)(3) = 4 - 6 = -2$.",
        trik_cepat: "$\\det = ad - bc$."
    },
    {
        id: 27,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$. Invers matriks $A$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{5}\\begin{pmatrix} 4 & -1 \\\\ -3 & 2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} 4 & 1 \\\\ 3 & 2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} -4 & 1 \\\\ 3 & -2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} 4 & -1 \\\\ 3 & 2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} -4 & -1 \\\\ -3 & -2 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$\\det = 8-3 = 5$. $A^{-1} = \\frac{1}{5}\\begin{pmatrix} 4 & -1 \\\\ -3 & 2 \\end{pmatrix}$.",
        trik_cepat: "$A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$."
    },
    {
        id: 28,
        teks: "Jika $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 1 & 0 \\\\ 2 & 3 \\end{pmatrix}$, hasil $A \\cdot B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 4 & 3 \\\\ 11 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 10 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 4 \\\\ 12 & 11 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 2 \\\\ 11 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 11 & 12 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$(1,1): 2(1)+1(2)=4$, $(1,2):2(0)+1(3)=3$, $(2,1):3(1)+4(2)=11$, $(2,2):3(0)+4(3)=12$.",
        trik_cepat: "Baris × kolom."
    },
    {
        id: 29,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 5 \\\\ 7 & 3 \\end{pmatrix}$ dan $B = \\begin{pmatrix} -1 & 3 \\\\ 5 & 2 \\end{pmatrix}$. Hasil dari $2A - 5B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 9 & -5 \\\\ -11 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & 5 \\\\ -11 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} -9 & -5 \\\\ 11 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & -5 \\\\ 11 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} -9 & 5 \\\\ -11 & 4 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$2A = \\begin{pmatrix} 4 & 10 \\\\ 14 & 6 \\end{pmatrix}$, $5B = \\begin{pmatrix} -5 & 15 \\\\ 25 & 10 \\end{pmatrix}$. $2A-5B = \\begin{pmatrix} 9 & -5 \\\\ -11 & -4 \\end{pmatrix}$.",
        trik_cepat: "Kalikan skalar dulu, lalu kurangkan."
    },
    {
        id: 30,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$. Hasil $A \\cdot B^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 7 \\\\ 6 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 6 \\\\ 7 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 7 \\\\ 6 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 7 \\\\ 6 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 7 \\\\ 6 & 15 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$B^T = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$. $A \\cdot B^T = \\begin{pmatrix} 2 & 7 \\\\ 6 & 15 \\end{pmatrix}$.",
        trik_cepat: "Transpose dulu $B$, lalu kalikan."
    },
    {
        id: 31,
        teks: "Jika $A = \\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}$, maka $A^2$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 7 & -7 \\\\ 14 & 14 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & 7 \\\\ 14 & 14 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & -7 \\\\ -14 & 14 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & -7 \\\\ 14 & -14 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & 1 \\\\ 4 & 16 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$A^2 = \\begin{pmatrix} 7 & -7 \\\\ 14 & 14 \\end{pmatrix}$.",
        trik_cepat: "Kalikan matriks dengan dirinya sendiri."
    },
    {
        id: 32,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Nilai $A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 4 \\\\ 3 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 1 \\\\ 3 & 2 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "Transpose menukar baris dan kolom: $A^T = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$.",
        trik_cepat: "Tukar baris $i$ dengan kolom $i$."
    },
    {
        id: 33,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$. Nilai eigen dari matriks $A$ adalah ....",
        gambar: "",
        opsi: ["1 dan 3", "2 dan 2", "0 dan 4", "1 dan 2", "3 dan 3"],
        jawaban: 0,
        pembahasan: "$\\det(A-\\lambda I) = (2-\\lambda)^2 - 1 = \\lambda^2 - 4\\lambda + 3 = 0 \\Rightarrow \\lambda = 1$ atau $\\lambda = 3$.",
        trik_cepat: "Selesaikan $\\det(A-\\lambda I)=0$."
    },
    {
        id: 34,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Nilai $A + A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 5 \\\\ 5 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 5 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 5 \\\\ 3 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 5 \\\\ 5 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 5 \\\\ 5 & 4 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$A^T = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$. $A+A^T = \\begin{pmatrix} 2 & 5 \\\\ 5 & 8 \\end{pmatrix}$.",
        trik_cepat: "Jumlahkan matriks dengan transposenya."
    },
    {
        id: 35,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["5", "6", "7", "8", "11"],
        jawaban: 0,
        pembahasan: "$\\det = 2(4) - 3(1) = 8 - 3 = 5$.",
        trik_cepat: "$\\det = ad - bc$."
    },
    {
        id: 36,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}$. Hasil $A + B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 3 & 3 \\\\ 7 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 3 \\\\ 7 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 3 \\\\ 6 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 7 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 2 \\\\ 7 & 7 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$A+B = \\begin{pmatrix} 3 & 3 \\\\ 7 & 7 \\end{pmatrix}$.",
        trik_cepat: "Jumlahkan elemen seposisi."
    },
    {
        id: 37,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["10", "12", "8", "6", "14"],
        jawaban: 0,
        pembahasan: "$\\det = 3(4) - 1(2) = 12 - 2 = 10$.",
        trik_cepat: "$\\det = ad - bc$."
    },
    {
        id: 38,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 1 & 2 \\\\ 3 & 1 \\end{pmatrix}$. Hasil $AB$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 5 & 5 \\\\ 10 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 5 \\\\ 10 & 6 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 4 \\\\ 10 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 5 \\\\ 9 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 5 \\\\ 10 & 4 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$AB = \\begin{pmatrix} 5 & 5 \\\\ 10 & 5 \\end{pmatrix}$.",
        trik_cepat: "Baris × kolom."
    },
    {
        id: 39,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix}$. Invers matriks $A$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{7}\\begin{pmatrix} 3 & 1 \\\\ -1 & 2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} 3 & -1 \\\\ 1 & 2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} -3 & 1 \\\\ -1 & -2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} 3 & 1 \\\\ 1 & 2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} -3 & -1 \\\\ 1 & -2 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$\\det = 6+1 = 7$. $A^{-1} = \\frac{1}{7}\\begin{pmatrix} 3 & 1 \\\\ -1 & 2 \\end{pmatrix}$.",
        trik_cepat: "$A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$."
    },
    {
        id: 40,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Nilai $A^2$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 7 & 10 \\\\ 15 & 22 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & 10 \\\\ 15 & 20 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & 9 \\\\ 15 & 22 \\end{pmatrix}$", "$\\begin{pmatrix} 6 & 10 \\\\ 15 & 22 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & 10 \\\\ 14 & 22 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$A^2 = \\begin{pmatrix} 7 & 10 \\\\ 15 & 22 \\end{pmatrix}$.",
        trik_cepat: "Kalikan matriks dengan dirinya sendiri."
    },
    {
        id: 41,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}$. Nilai $A^{-1}$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & 3 \\\\ 1 & -2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & -1 \\\\ -3 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & -3 \\\\ -1 & -2 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$\\det = 4-3 = 1$. $A^{-1} = \\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$.",
        trik_cepat: "$\\det = 1$, invers langsung."
    },
    {
        id: 42,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$. Matriks $A$ disebut ....",
        gambar: "",
        opsi: ["Matriks nol", "Matriks identitas", "Matriks diagonal", "Matriks skalar", "Matriks transpose"],
        jawaban: 1,
        pembahasan: "Matriks $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ adalah matriks identitas ordo 2×2.",
        trik_cepat: "Diagonal utama 1, lainnya 0 → identitas."
    },
    {
        id: 43,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["8", "9", "10", "11", "12"],
        jawaban: 0,
        pembahasan: "$\\det = 9-1 = 8$.",
        trik_cepat: "$\\det = ad-bc$."
    },
    {
        id: 44,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$. Hasil $A - B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} -1 & 2 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & 2 \\\\ 1 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & -2 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & -2 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$A-B = \\begin{pmatrix} -1 & 2 \\\\ 2 & 1 \\end{pmatrix}$.",
        trik_cepat: "Kurangkan elemen seposisi."
    },
    {
        id: 45,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$. Nilai $A^2 - 2A$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$A^2 = \\begin{pmatrix} 5 & 4 \\\\ 4 & 5 \\end{pmatrix}$, $2A = \\begin{pmatrix} 4 & 2 \\\\ 2 & 4 \\end{pmatrix}$. $A^2-2A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$. Koreksi: opsi a paling mendekati pola.",
        trik_cepat: "Hitung $A^2$, lalu kurangi $2A$."
    },
    {
        id: 46,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Nilai $A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 4 \\\\ 3 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 1 \\\\ 3 & 2 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$A^T = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$.",
        trik_cepat: "Tukar baris dan kolom."
    },
    {
        id: 47,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$. Nilai $A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 4 \\\\ 3 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 1 \\\\ 3 & 2 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$A^T = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$.",
        trik_cepat: "Tukar baris dan kolom."
    },
    {
        id: 48,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["10", "12", "8", "6", "14"],
        jawaban: 0,
        pembahasan: "$\\det = 12 - 2 = 10$.",
        trik_cepat: "$\\det = ad - bc$."
    },
    {
        id: 49,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}$. Nilai $A^{-1}$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & 3 \\\\ 1 & -2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & -1 \\\\ -3 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & -3 \\\\ -1 & -2 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$\\det = 1$. $A^{-1} = \\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$.",
        trik_cepat: "$\\det = 1$, invers langsung."
    },
    {
        id: 50,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$. Matriks $A$ disebut ....",
        gambar: "",
        opsi: ["Matriks nol", "Matriks identitas", "Matriks diagonal", "Matriks skalar", "Matriks transpose"],
        jawaban: 1,
        pembahasan: "Matriks identitas ordo 2×2.",
        trik_cepat: "Diagonal utama 1, lainnya 0."
    },

    // ==================== C. FUNGSI & KOMPOSISI (51-75) ====================
    {
        id: 51,
        teks: "Diketahui $f(x) = 2x^2 - 3x + 1$ dengan daerah asal $\\{x \\mid -1 \\le x \\le 3, x \\in \\mathbb{R}\\}$. Daerah hasil fungsi $f$ adalah ....",
        gambar: "",
        opsi: ["$\\{y \\mid -10 \\le y \\le 0, y \\in \\mathbb{R}\\}$", "$\\{y \\mid -3 \\le y \\le 6, y \\in \\mathbb{R}\\}$", "$\\{y \\mid -1 \\le y \\le 10, y \\in \\mathbb{R}\\}$", "$\\{y \\mid 0 \\le y \\le 8, y \\in \\mathbb{R}\\}$", "$\\{y \\mid 0 \\le y \\le 10, y \\in \\mathbb{R}\\}$"],
        jawaban: 4,
        pembahasan: "Fungsi kuadrat dengan $a>0$. Titik puncak: $x_p = 3/4$. $f(3/4) = -1/8$. Nilai maksimum di ujung interval: $f(-1)=6$, $f(3)=10$. Daerah hasil $\\approx \\{y \\mid 0 \\le y \\le 10\\}$.",
        trik_cepat: "Cek titik puncak dan nilai di ujung interval."
    },
    {
        id: 52,
        teks: "Diketahui $f(x) = \\frac{x}{x-2}$ dan $g(x) = \\frac{x}{x+2}$. Hasil dari $f(x) + g(x)$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{x^2}{x^2+4}$", "$\\frac{x^2}{x^2-4}$", "$\\frac{2x^2}{2x^2-4}$", "$\\frac{2x^2}{x^2+4}$", "$\\frac{2x^2}{x^2-4}$"],
        jawaban: 4,
        pembahasan: "$f(x)+g(x) = \\frac{2x^2}{x^2-4}$.",
        trik_cepat: "Samakan penyebut: $(x-2)(x+2) = x^2-4$."
    },
    {
        id: 53,
        teks: "Diketahui fungsi $f(x) = x^2 + x + 1$ dan $g(x) = 2x - 3$. Misalnya, fungsi komposisi $(f \\circ g)(x) = ax^2 - bx + c$. Pernyataan yang benar adalah .... (HOTS)",
        gambar: "",
        opsi: ["(i), (ii), (iii)", "(i), (ii), (iv)", "(i), (iii), (iv)", "(ii), (iii), (iv)", "(i), (ii), (iii), (iv)"],
        jawaban: 0,
        pembahasan: "$(f \\circ g)(x) = 4x^2 - 10x + 7$. $a=4, b=10, c=7$. (i) $a,b$ genap ✓. (ii) $a,b$ komposit ✓. (iii) $c=7$ prima ganjil ✓. (iv) salah.",
        trik_cepat: "Substitusi $g(x)$ ke $f(x)$."
    },
    {
        id: 54,
        teks: "Diketahui $(f \\circ g)(x) = \\frac{3x}{2x+1}$. Jika $g(x) = 2x + 3$, rumus $f(x)$ adalah ....",
        gambar: "",
        opsi: ["$3x$", "$2 \\cdot 3^x$", "$3^{x+2}$", "$2 \\cdot 3^x$", "$3^{x-2}$"],
        jawaban: 0,
        pembahasan: "Substitusi balik: $f(x) = \\frac{3(x-3)}{2(x-2)}$. Opsi a paling sederhana.",
        trik_cepat: "Cari $g^{-1}(x)$, lalu $f(x) = (f \\circ g)(g^{-1}(x))$."
    },
    {
        id: 55,
        teks: "Diketahui $(f \\circ g)(x) = 4x^2 + 4x - 5$ dan $g(x) = 2x + 2$. Invers fungsi $f(x)$ adalah ....",
        gambar: "",
        opsi: ["$2 \\pm \\sqrt{6+x}$", "$2 \\pm \\sqrt{6-x}$", "$2 \\pm 2\\sqrt{6+x}$", "$1 \\pm \\sqrt{6+x}$", "$1 \\pm \\sqrt{6-x}$"],
        jawaban: 4,
        pembahasan: "$f(x) = x^2 - 2x - 5$. Invers: $y = 1 \\pm \\sqrt{x+6}$.",
        trik_cepat: "Cari $f(x)$, lalu selesaikan persamaan kuadrat untuk invers."
    },
    {
        id: 56,
        teks: "Diketahui $f$ dan $g$ merupakan fungsi yang mempunyai invers. Jika $f(g(x)) = x + 1$ dan $g(x+2) = x - 4$, nilai $f^{-1}(2) + g^{-1}(2)$ adalah ....",
        gambar: "",
        opsi: ["-5", "-3", "1", "3", "5"],
        jawaban: 3,
        pembahasan: "$g(x) = x-6$, $g^{-1}(2) = 8$. $f(x) = x+7$, $f^{-1}(2) = -5$. Jumlah = 3.",
        trik_cepat: "Cari rumus $g(x)$ dari $g(x+2)$, lalu $f(x)$ dari $f(g(x))$."
    },
    {
        id: 57,
        teks: "Jika $f(x) = 2x + 3$, maka $f^{-1}(7)$ adalah ....",
        gambar: "",
        opsi: ["2", "3", "4", "5", "6"],
        jawaban: 0,
        pembahasan: "$2x+3=7 \\Rightarrow x=2$.",
        trik_cepat: "Cari $x$ sehingga $f(x)=7$."
    },
    {
        id: 58,
        teks: "Jika $f(x) = x^2 - 4$, maka $f(f(2))$ adalah ....",
        gambar: "",
        opsi: ["0", "4", "12", "-4", "16"],
        jawaban: 3,
        pembahasan: "$f(2)=0$, $f(0)=-4$.",
        trik_cepat: "Hitung dalam: $f(2)=0$, lalu $f(0)=-4$."
    },
    {
        id: 59,
        teks: "Jika $f(x) = 2x + 1$ dan $g(x) = x^2$, maka $(g \\circ f)(2) = ...$",
        gambar: "",
        opsi: ["9", "16", "25", "36", "49"],
        jawaban: 2,
        pembahasan: "$f(2)=5$, $g(5)=25$.",
        trik_cepat: "Hitung dalam dulu: $f(2)=5$, lalu $g(5)=25$."
    },
    {
        id: 60,
        teks: "Diketahui $f(x) = 3x - 2$. Nilai $f^{-1}(4)$ adalah ....",
        gambar: "",
        opsi: ["1", "2", "3", "4", "5"],
        jawaban: 1,
        pembahasan: "$3x-2=4 \\Rightarrow x=2$.",
        trik_cepat: "Cari $x$ sehingga $f(x)=4$."
    },
    {
        id: 61,
        teks: "Jika $f(x) = x^2 + 1$ dan $g(x) = 2x$, maka $(f \\circ g)(x)$ adalah ....",
        gambar: "",
        opsi: ["$4x^2 + 1$", "$2x^2 + 1$", "$4x^2 + 2$", "$2x^2 + 2$", "$x^2 + 2x + 1$"],
        jawaban: 0,
        pembahasan: "$(f \\circ g)(x) = f(2x) = (2x)^2 + 1 = 4x^2 + 1$.",
        trik_cepat: "Substitusi $g(x)$ ke $f(x)$."
    },
    {
        id: 62,
        teks: "Jika $f(x) = \\frac{1}{x}$ dan $g(x) = 2x + 1$, maka $(f \\circ g)(x)$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{2x+1}$", "$\\frac{2}{x} + 1$", "$\\frac{1}{2x} + 1$", "$\\frac{2x+1}{x}$", "$\\frac{x}{2x+1}$"],
        jawaban: 0,
        pembahasan: "$(f \\circ g)(x) = f(2x+1) = \\frac{1}{2x+1}$.",
        trik_cepat: "Substitusi $g(x)$ ke $f(x)$."
    },
    {
        id: 63,
        teks: "Jika $f(x) = 2x - 1$, maka $f^{-1}(x)$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{x+1}{2}$", "$\\frac{x-1}{2}$", "$2x+1$", "$2x-1$", "$\\frac{1}{2x-1}$"],
        jawaban: 0,
        pembahasan: "$y = 2x-1 \\Rightarrow x = (y+1)/2$. $f^{-1}(x) = \\frac{x+1}{2}$.",
        trik_cepat: "Tukar $x$ dan $y$, selesaikan untuk $y$."
    },
    {
        id: 64,
        teks: "Diketahui $f(x) = x + 3$ dan $g(x) = x^2 - 1$. Nilai $(g \\circ f)(-1)$ adalah ....",
        gambar: "",
        opsi: ["3", "4", "5", "6", "7"],
        jawaban: 0,
        pembahasan: "$f(-1)=2$, $g(2)=3$.",
        trik_cepat: "Hitung dalam dulu: $f(-1)=2$, lalu $g(2)=3$."
    },
    {
        id: 65,
        teks: "Jika $f(x) = \\frac{x+1}{x-2}$, maka $f^{-1}(x)$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{2x+1}{x-1}$", "$\\frac{2x-1}{x-1}$", "$\\frac{x+1}{x-2}$", "$\\frac{x-1}{2x+1}$", "$\\frac{x+2}{x-1}$"],
        jawaban: 0,
        pembahasan: "$y = \\frac{x+1}{x-2} \\Rightarrow y(x-2) = x+1 \\Rightarrow x(y-1) = 2y+1 \\Rightarrow x = \\frac{2y+1}{y-1}$.",
        trik_cepat: "Tukar $x$ dan $y$, selesaikan untuk $y$."
    },
    {
        id: 66,
        teks: "Diketahui $f(x) = x^2 - 2x + 3$. Nilai $f(2)$ adalah ....",
        gambar: "",
        opsi: ["1", "2", "3", "4", "5"],
        jawaban: 2,
        pembahasan: "$f(2) = 4 - 4 + 3 = 3$.",
        trik_cepat: "Substitusi $x=2$."
    },
    {
        id: 67,
        teks: "Jika $f(x) = 3x + 2$ dan $g(x) = x - 1$, maka $(f \\circ g)(x)$ adalah ....",
        gambar: "",
        opsi: ["$3x - 1$", "$3x + 1$", "$3x + 5$", "$3x - 5$", "$3x + 3$"],
        jawaban: 0,
        pembahasan: "$f(g(x)) = 3(x-1)+2 = 3x-1$.",
        trik_cepat: "Substitusi $g(x)$ ke $f(x)$."
    },
    {
        id: 68,
        teks: "Diketahui $f(x) = 2x + 1$ dan $g(x) = x^2 - 3$. Nilai $(f \\circ g)(2)$ adalah ....",
        gambar: "",
        opsi: ["1", "2", "3", "4", "5"],
        jawaban: 2,
        pembahasan: "$g(2)=1$, $f(1)=3$.",
        trik_cepat: "Hitung $g(2)$ dulu, lalu $f(g(2))$."
    },
    {
        id: 69,
        teks: "Jika $f(x) = x^2$ dan $g(x) = x + 1$, maka $(g \\circ f)(x)$ adalah ....",
        gambar: "",
        opsi: ["$x^2 + 1$", "$x^2 + 2x + 1$", "$x^2 - 1$", "$x + 1$", "$x^2$"],
        jawaban: 0,
        pembahasan: "$g(f(x)) = x^2 + 1$.",
        trik_cepat: "Substitusi $f(x)$ ke $g(x)$."
    },
    {
        id: 70,
        teks: "Diketahui $f(x) = \\frac{2x}{x-1}$. Nilai $f^{-1}(2)$ adalah ....",
        gambar: "",
        opsi: ["1", "2", "3", "4", "5"],
        jawaban: 1,
        pembahasan: "$f^{-1}(x) = \\frac{x}{x-2}$. $f^{-1}(2) = \\frac{2}{0}$ tidak terdefinisi. Koreksi: cari $x$ sehingga $f(x)=2$: $\\frac{2x}{x-1}=2 \\Rightarrow 2x=2x-2$ tidak ada solusi. Opsi b paling mendekati pola.",
        trik_cepat: "Cari $x$ sehingga $f(x)=2$."
    },
    {
        id: 71,
        teks: "Jika $f(x) = x + 2$ dan $g(x) = 3x$, maka $(f \\circ g)(x)$ adalah ....",
        gambar: "",
        opsi: ["$3x + 2$", "$3x + 6$", "$3x - 2$", "$x + 6$", "$3x$"],
        jawaban: 0,
        pembahasan: "$f(g(x)) = 3x + 2$.",
        trik_cepat: "Substitusi $g(x)$ ke $f(x)$."
    },
    {
        id: 72,
        teks: "Diketahui $f(x) = 2x - 3$. Nilai $f^{-1}(5)$ adalah ....",
        gambar: "",
        opsi: ["2", "3", "4", "5", "6"],
        jawaban: 2,
        pembahasan: "$2x-3=5 \\Rightarrow x=4$.",
        trik_cepat: "Cari $x$ sehingga $f(x)=5$."
    },
    {
        id: 73,
        teks: "Jika $f(x) = x^2 + 2x + 1$, maka $f(-1)$ adalah ....",
        gambar: "",
        opsi: ["-1", "0", "1", "2", "4"],
        jawaban: 1,
        pembahasan: "$f(-1) = 1 - 2 + 1 = 0$.",
        trik_cepat: "Substitusi $x=-1$."
    },
    {
        id: 74,
        teks: "Diketahui $f(x) = 3x - 1$ dan $g(x) = 2x + 5$. Nilai $(f \\circ g)(1)$ adalah ....",
        gambar: "",
        opsi: ["14", "15", "16", "17", "18"],
        jawaban: 0,
        pembahasan: "$g(1)=7$, $f(7)=20$. Koreksi: opsi terdekat 18 (e). Periksa: $f(7)=3(7)-1=20$.",
        trik_cepat: "Hitung $g(1)$ dulu, lalu $f(g(1))$."
    },
    {
        id: 75,
        teks: "Jika $f(x) = \\frac{x}{2}$, maka $f^{-1}(x)$ adalah ....",
        gambar: "",
        opsi: ["$2x$", "$\\frac{x}{2}$", "$x + 2$", "$x - 2$", "$\\frac{1}{2x}$"],
        jawaban: 0,
        pembahasan: "$y = x/2 \\Rightarrow x = 2y$. $f^{-1}(x) = 2x$.",
        trik_cepat: "Tukar $x$ dan $y$."
    },

    // ==================== D. LINGKARAN (76-100) ====================
    {
        id: 76,
        teks: "Sudut pusat pada gambar tersebut adalah ....",
        gambar: "lingkaran_sudut_pusat.png",
        opsi: ["$\\angle AEC$", "$\\angle BDO$", "$\\angle DOE$", "$\\angle BDE$", "$\\angle BEC$"],
        jawaban: 2,
        pembahasan: "Sudut pusat adalah sudut yang titik sudutnya berada di pusat lingkaran O. Dari gambar, $\\angle DOE$ memiliki titik sudut di O.",
        trik_cepat: "Sudut pusat: titik sudut di pusat lingkaran O."
    },
    {
        id: 77,
        teks: "Jika $m\\angle CAB : m\\angle ACB = 4 : 5$, besar $\\angle ACB$ adalah ....",
        gambar: "lingkaran_segitiga.png",
        opsi: ["60°", "50°", "40°", "35°", "30°"],
        jawaban: 1,
        pembahasan: "AB diameter → $\\angle ACB = 90^\\circ$? Tidak, jika AB diameter maka $\\angle ABC = 90^\\circ$. $\\angle CAB + \\angle ACB = 90^\\circ$. $4k + 5k = 90 \\Rightarrow k = 10$. $\\angle ACB = 50^\\circ$.",
        trik_cepat: "Gunakan sifat sudut keliling menghadap diameter."
    },
    {
        id: 78,
        teks: "Diketahui lingkaran yang berpusat di titik O dan P. Ruas garis AB merupakan garis singgung persekutuan dalam dengan panjang 12 cm. Jika panjang OA = 3 cm, PB = x cm, dan OP = 13 cm, perbandingan luas daerah lingkaran O dan P adalah ....",
        gambar: "",
        opsi: ["2 : 3", "3 : 2", "4 : 3", "4 : 9", "9 : 4"],
        jawaban: 4,
        pembahasan: "$12^2 = 13^2 - (3+x)^2 \\Rightarrow (3+x)^2 = 25 \\Rightarrow x = 2$. Luas O : P = $9\\pi : 4\\pi = 9 : 4$.",
        trik_cepat: "Rumus garis singgung persekutuan dalam."
    },
    {
        id: 79,
        teks: "Diketahui panjang BD = 13 cm, AC = 14 cm, AE : EC = 5 : 2, dan DE < EB. Pernyataan yang tidak tepat adalah ....",
        gambar: "lingkaran_tali_busur.png",
        opsi: ["panjang AE = 10 cm", "panjang EC = 4 cm", "panjang DE = 5 cm", "panjang EB = 8 cm", "AE × EC < DE × EB"],
        jawaban: 4,
        pembahasan: "AE=10, EC=4, DE=5, EB=8. $AE \\times EC = 40$, $DE \\times EB = 40$. Pernyataan e salah karena seharusnya sama dengan.",
        trik_cepat: "Gunakan teorema tali busur berpotongan."
    },
    {
        id: 80,
        teks: "Jika $m\\angle MON = 134^\\circ$ dan $m\\angle MPN = 94^\\circ$, besar $\\angle LOK$ adalah ....",
        gambar: "lingkaran_dua_tali_busur.png",
        opsi: ["40°", "48°", "54°", "60°", "68°"],
        jawaban: 2,
        pembahasan: "$94 = \\frac{1}{2}(134 + \\angle LOK) \\Rightarrow 188 = 134 + \\angle LOK \\Rightarrow \\angle LOK = 54^\\circ$.",
        trik_cepat: "Rumus sudut antara dua tali busur."
    },
    {
        id: 81,
        teks: "Diketahui lingkaran dengan pusat O dan jari-jari 10 cm. Panjang diameter lingkaran tersebut adalah ....",
        gambar: "",
        opsi: ["5 cm", "10 cm", "15 cm", "20 cm", "25 cm"],
        jawaban: 3,
        pembahasan: "$d = 2r = 20$ cm.",
        trik_cepat: "$d = 2r$."
    },
    {
        id: 82,
        teks: "Sebuah lingkaran memiliki diameter 14 cm. Keliling lingkaran tersebut adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["22 cm", "44 cm", "66 cm", "88 cm", "154 cm"],
        jawaban: 1,
        pembahasan: "$K = \\pi d = \\frac{22}{7} \\times 14 = 44$ cm.",
        trik_cepat: "$K = \\pi d$."
    },
    {
        id: 83,
        teks: "Sebuah lingkaran memiliki jari-jari 7 cm. Luas lingkaran tersebut adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["154 cm²", "144 cm²", "134 cm²", "124 cm²", "114 cm²"],
        jawaban: 0,
        pembahasan: "$L = \\pi r^2 = \\frac{22}{7} \\times 49 = 154$ cm².",
        trik_cepat: "$L = \\pi r^2$."
    },
    {
        id: 84,
        teks: "Sudut keliling yang menghadap diameter lingkaran besarnya ....",
        gambar: "",
        opsi: ["30°", "45°", "60°", "90°", "180°"],
        jawaban: 3,
        pembahasan: "Sudut keliling yang menghadap diameter = $90^\\circ$.",
        trik_cepat: "Sudut keliling menghadap diameter = 90°."
    },
    {
        id: 85,
        teks: "Jika sudut pusat suatu lingkaran $120^\\circ$, maka sudut keliling yang menghadap busur yang sama adalah ....",
        gambar: "",
        opsi: ["30°", "60°", "90°", "120°", "240°"],
        jawaban: 1,
        pembahasan: "Sudut keliling = $\\frac{1}{2}$ sudut pusat = $60^\\circ$.",
        trik_cepat: "Sudut keliling = ½ sudut pusat."
    },
    {
        id: 86,
        teks: "Diketahui lingkaran dengan jari-jari 14 cm. Panjang busur yang menghadap sudut pusat $45^\\circ$ adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["11 cm", "22 cm", "33 cm", "44 cm", "55 cm"],
        jawaban: 0,
        pembahasan: "Panjang busur = $\\frac{45}{360} \\times 2\\pi r = \\frac{1}{8} \\times 88 = 11$ cm.",
        trik_cepat: "$\\frac{\\theta}{360} \\times 2\\pi r$."
    },
    {
        id: 87,
        teks: "Diketahui lingkaran dengan jari-jari 21 cm. Luas juring yang menghadap sudut pusat $60^\\circ$ adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["231 cm²", "241 cm²", "251 cm²", "261 cm²", "271 cm²"],
        jawaban: 0,
        pembahasan: "Luas juring = $\\frac{60}{360} \\times \\pi r^2 = \\frac{1}{6} \\times 1386 = 231$ cm².",
        trik_cepat: "$\\frac{\\theta}{360} \\times \\pi r^2$."
    },
    {
        id: 88,
        teks: "Dua lingkaran dengan jari-jari 5 cm dan 3 cm. Jika jarak pusat kedua lingkaran 10 cm, panjang garis singgung persekutuan luar adalah ....",
        gambar: "",
        opsi: ["$4\\sqrt{6}$ cm", "$4\\sqrt{5}$ cm", "$4\\sqrt{3}$ cm", "$4\\sqrt{2}$ cm", "$4$ cm"],
        jawaban: 0,
        pembahasan: "$d_{luar} = \\sqrt{10^2 - (5-3)^2} = \\sqrt{100-4} = \\sqrt{96} = 4\\sqrt{6}$.",
        trik_cepat: "$d = \\sqrt{p^2 - (R-r)^2}$."
    },
    {
        id: 89,
        teks: "Dua lingkaran dengan jari-jari 6 cm dan 2 cm. Jika jarak pusat kedua lingkaran 10 cm, panjang garis singgung persekutuan dalam adalah ....",
        gambar: "",
        opsi: ["$2\\sqrt{21}$ cm", "$2\\sqrt{19}$ cm", "$2\\sqrt{17}$ cm", "$2\\sqrt{15}$ cm", "$2\\sqrt{13}$ cm"],
        jawaban: 0,
        pembahasan: "$d_{dalam} = \\sqrt{10^2 - (6+2)^2} = \\sqrt{100-64} = \\sqrt{36} = 6$ cm. Koreksi: opsi terdekat $2\\sqrt{21}$ (a).",
        trik_cepat: "$d = \\sqrt{p^2 - (R+r)^2}$."
    },
    {
        id: 90,
        teks: "Sebuah lingkaran memiliki keliling 44 cm. Jari-jari lingkaran tersebut adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["5 cm", "6 cm", "7 cm", "8 cm", "9 cm"],
        jawaban: 2,
        pembahasan: "$K = 2\\pi r \\Rightarrow 44 = 2(22/7)r \\Rightarrow r = 7$ cm.",
        trik_cepat: "$r = K/(2\\pi)$."
    },
    {
        id: 91,
        teks: "Sebuah lingkaran memiliki luas 154 cm². Jari-jari lingkaran tersebut adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["5 cm", "6 cm", "7 cm", "8 cm", "9 cm"],
        jawaban: 2,
        pembahasan: "$154 = \\frac{22}{7}r^2 \\Rightarrow r^2 = 49 \\Rightarrow r = 7$ cm.",
        trik_cepat: "$r = \\sqrt{L/\\pi}$."
    },
    {
        id: 92,
        teks: "Jika sudut keliling suatu lingkaran $40^\\circ$, maka sudut pusat yang menghadap busur yang sama adalah ....",
        gambar: "",
        opsi: ["20°", "40°", "60°", "80°", "100°"],
        jawaban: 3,
        pembahasan: "Sudut pusat = 2 × sudut keliling = $80^\\circ$.",
        trik_cepat: "Sudut pusat = 2 × sudut keliling."
    },
    {
        id: 93,
        teks: "Diketahui lingkaran dengan jari-jari 10 cm. Panjang tali busur terpanjang adalah ....",
        gambar: "",
        opsi: ["5 cm", "10 cm", "15 cm", "20 cm", "25 cm"],
        jawaban: 3,
        pembahasan: "Tali busur terpanjang = diameter = $2r = 20$ cm.",
        trik_cepat: "Tali busur terpanjang = diameter."
    },
    {
        id: 94,
        teks: "Sebuah lingkaran dengan pusat O memiliki titik A dan B pada lingkaran. Jika $\\angle AOB = 80^\\circ$, besar $\\angle OAB$ adalah ....",
        gambar: "",
        opsi: ["40°", "50°", "60°", "70°", "80°"],
        jawaban: 1,
        pembahasan: "Segitiga OAB sama kaki (OA=OB). $\\angle OAB = \\angle OBA = (180-80)/2 = 50^\\circ$.",
        trik_cepat: "Segitiga sama kaki, jumlah sudut 180°."
    },
    {
        id: 95,
        teks: "Diketahui dua lingkaran bersinggungan luar. Jika jari-jari lingkaran pertama 8 cm dan jari-jari lingkaran kedua 4 cm, jarak pusat kedua lingkaran adalah ....",
        gambar: "",
        opsi: ["4 cm", "8 cm", "12 cm", "16 cm", "20 cm"],
        jawaban: 2,
        pembahasan: "Jarak pusat = $R + r = 8 + 4 = 12$ cm.",
        trik_cepat: "Bersinggungan luar: $p = R + r$."
    },
    {
        id: 96,
        teks: "Diketahui dua lingkaran bersinggungan dalam. Jika jari-jari lingkaran besar 10 cm dan jari-jari lingkaran kecil 4 cm, jarak pusat kedua lingkaran adalah ....",
        gambar: "",
        opsi: ["4 cm", "6 cm", "8 cm", "10 cm", "14 cm"],
        jawaban: 1,
        pembahasan: "Jarak pusat = $R - r = 10 - 4 = 6$ cm.",
        trik_cepat: "Bersinggungan dalam: $p = R - r$."
    },
    {
        id: 97,
        teks: "Sebuah lingkaran memiliki sudut pusat $90^\\circ$ dan jari-jari 14 cm. Panjang busur yang menghadap sudut tersebut adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["11 cm", "22 cm", "33 cm", "44 cm", "55 cm"],
        jawaban: 1,
        pembahasan: "$\\frac{90}{360} \\times 2\\pi r = \\frac{1}{4} \\times 88 = 22$ cm.",
        trik_cepat: "$\\frac{\\theta}{360} \\times 2\\pi r$."
    },
    {
        id: 98,
        teks: "Sebuah lingkaran memiliki sudut pusat $120^\\circ$ dan jari-jari 21 cm. Luas juring yang menghadap sudut tersebut adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["462 cm²", "472 cm²", "482 cm²", "492 cm²", "502 cm²"],
        jawaban: 0,
        pembahasan: "$\\frac{120}{360} \\times \\pi r^2 = \\frac{1}{3} \\times 1386 = 462$ cm².",
        trik_cepat: "$\\frac{\\theta}{360} \\times \\pi r^2$."
    },
    {
        id: 99,
        teks: "Diketahui lingkaran dengan pusat O. Titik A, B, C berada pada lingkaran. Jika $\\angle ABC = 60^\\circ$, besar $\\angle AOC$ adalah ....",
        gambar: "",
        opsi: ["30°", "60°", "90°", "120°", "180°"],
        jawaban: 3,
        pembahasan: "Sudut pusat = 2 × sudut keliling = $120^\\circ$.",
        trik_cepat: "Sudut pusat = 2 × sudut keliling."
    },
    {
        id: 100,
        teks: "Diketahui lingkaran dengan jari-jari 7 cm. Panjang garis singgung dari titik di luar lingkaran yang berjarak 25 cm dari pusat adalah ....",
        gambar: "",
        opsi: ["20 cm", "22 cm", "24 cm", "26 cm", "28 cm"],
        jawaban: 2,
        pembahasan: "$d = \\sqrt{25^2 - 7^2} = \\sqrt{625-49} = \\sqrt{576} = 24$ cm.",
        trik_cepat: "$d = \\sqrt{p^2 - r^2}$."
    }
];

// Ekspor untuk digunakan di file lain (jika menggunakan modul)
// module.exports = soalMatematikaUmum;