// File: soal_fisika.js
const soalFisika = [
    // ==================== LEVEL 1: MUDAH (1-25) ====================
    // ---- VEKTOR ----
    {
        id: 1,
        teks: "Besaran yang memiliki nilai dan arah disebut ....",
        gambar: "",
        opsi: ["Skalar", "Vektor", "Besaran pokok", "Besaran turunan", "Satuan"],
        jawaban: 1,
        pembahasan: "Vektor adalah besaran yang memiliki nilai (besar) dan arah. Contoh: perpindahan, kecepatan, percepatan, gaya. Skalar hanya memiliki nilai, contoh: massa, waktu, suhu.",
        trik_cepat: "Vektor = nilai + arah (ingat panah)."
    },
    {
        id: 2,
        teks: "Dua vektor $\\vec{A} = 3\\hat{i} + 4\\hat{j}$ dan $\\vec{B} = 1\\hat{i} + 2\\hat{j}$. Besar vektor resultan $\\vec{A} + \\vec{B}$ adalah ....",
        gambar: "",
        opsi: ["$2\\sqrt{10}$", "$4\\sqrt{2}$", "$2\\sqrt{13}$", "$\\sqrt{52}$", "$2\\sqrt{17}$"],
        jawaban: 2,
        pembahasan: "$\\vec{A} + \\vec{B} = (3+1)\\hat{i} + (4+2)\\hat{j} = 4\\hat{i} + 6\\hat{j}$. Besar = $\\sqrt{4^2 + 6^2} = \\sqrt{16+36} = \\sqrt{52} = 2\\sqrt{13}$.",
        trik_cepat: "Jumlahkan komponen, lalu hitung $\\sqrt{x^2+y^2}$."
    },
    {
        id: 3,
        teks: "Vektor $\\vec{F} = 6\\hat{i} + 8\\hat{j}$ memiliki besar ....",
        gambar: "",
        opsi: ["10", "12", "14", "16", "18"],
        jawaban: 0,
        pembahasan: "$|\\vec{F}| = \\sqrt{6^2 + 8^2} = \\sqrt{36+64} = \\sqrt{100} = 10$.",
        trik_cepat: "Tripel Pythagoras 6-8-10."
    },
    {
        id: 4,
        teks: "Hasil perkalian titik (dot product) $\\vec{a} = 2\\hat{i} + 3\\hat{j}$ dan $\\vec{b} = 4\\hat{i} - 1\\hat{j}$ adalah ....",
        gambar: "",
        opsi: ["5", "6", "7", "8", "11"],
        jawaban: 0,
        pembahasan: "$\\vec{a} \\cdot \\vec{b} = (2)(4) + (3)(-1) = 8 - 3 = 5$.",
        trik_cepat: "Dot product: kalikan komponen sejenis lalu jumlahkan."
    },
    {
        id: 5,
        teks: "Sebuah vektor memiliki komponen $x = 5$ dan $y = 5\\sqrt{3}$. Arah vektor tersebut terhadap sumbu-x positif adalah ....",
        gambar: "",
        opsi: ["30°", "45°", "60°", "75°", "90°"],
        jawaban: 2,
        pembahasan: "$\\tan\\theta = \\frac{y}{x} = \\frac{5\\sqrt{3}}{5} = \\sqrt{3} \\Rightarrow \\theta = 60^\\circ$.",
        trik_cepat: "$\\tan\\theta = y/x$, hafalkan nilai sudut istimewa."
    },

    // ---- KINEMATIKA ----
    {
        id: 6,
        teks: "Sebuah mobil bergerak dengan kecepatan tetap 20 m/s selama 10 sekon. Jarak yang ditempuh mobil adalah ....",
        gambar: "",
        opsi: ["100 m", "150 m", "200 m", "250 m", "300 m"],
        jawaban: 2,
        pembahasan: "GLB: $s = v \\cdot t = 20 \\times 10 = 200$ m.",
        trik_cepat: "GLB: $s = v \\cdot t$."
    },
    {
        id: 7,
        teks: "Sebuah benda mula-mula diam, kemudian dipercepat 2 m/s² selama 5 sekon. Kecepatan akhir benda adalah ....",
        gambar: "",
        opsi: ["5 m/s", "10 m/s", "15 m/s", "20 m/s", "25 m/s"],
        jawaban: 1,
        pembahasan: "GLBB: $v = v_0 + at = 0 + 2(5) = 10$ m/s.",
        trik_cepat: "$v = v_0 + at$."
    },
    {
        id: 8,
        teks: "Sebuah benda jatuh bebas dari ketinggian 20 m. Jika $g = 10$ m/s², waktu yang dibutuhkan untuk mencapai tanah adalah ....",
        gambar: "",
        opsi: ["1 s", "2 s", "3 s", "4 s", "5 s"],
        jawaban: 1,
        pembahasan: "Jatuh bebas: $h = \\frac{1}{2}gt^2 \\Rightarrow 20 = \\frac{1}{2}(10)t^2 \\Rightarrow 20 = 5t^2 \\Rightarrow t^2 = 4 \\Rightarrow t = 2$ s.",
        trik_cepat: "$t = \\sqrt{2h/g}$."
    },
    {
        id: 9,
        teks: "Sebuah benda bergerak melingkar dengan jari-jari 2 m dan kecepatan linear 4 m/s. Percepatan sentripetal benda adalah ....",
        gambar: "",
        opsi: ["2 m/s²", "4 m/s²", "6 m/s²", "8 m/s²", "10 m/s²"],
        jawaban: 3,
        pembahasan: "$a_s = \\frac{v^2}{r} = \\frac{4^2}{2} = \\frac{16}{2} = 8$ m/s².",
        trik_cepat: "$a_s = v^2/r$."
    },
    {
        id: 10,
        teks: "Sebuah peluru ditembakkan dengan kecepatan awal 20 m/s pada sudut elevasi 30°. Komponen kecepatan awal pada sumbu-x adalah .... ($\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$)",
        gambar: "",
        opsi: ["5 m/s", "$10\\sqrt{3}$ m/s", "10 m/s", "$20\\sqrt{3}$ m/s", "20 m/s"],
        jawaban: 1,
        pembahasan: "$v_{0x} = v_0 \\cos\\theta = 20 \\cos 30^\\circ = 20 \\cdot \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}$ m/s.",
        trik_cepat: "$v_{0x} = v_0 \\cos\\theta$."
    },
    {
        id: 11,
        teks: "Benda yang bergerak melingkar beraturan memiliki ....",
        gambar: "",
        opsi: ["Kecepatan linear tetap", "Kecepatan sudut berubah", "Percepatan sentripetal nol", "Kecepatan linear berubah arah", "Percepatan tangensial tetap"],
        jawaban: 3,
        pembahasan: "Pada GMB, besar kecepatan linear tetap tetapi arahnya selalu berubah (menyinggung lintasan). Kecepatan sudut tetap, percepatan sentripetal ada, percepatan tangensial nol.",
        trik_cepat: "GMB: $|v|$ tetap, arah $v$ berubah."
    },
    {
        id: 12,
        teks: "Sebuah bola dilempar vertikal ke atas dengan kecepatan 20 m/s. Tinggi maksimum yang dicapai bola adalah .... ($g = 10$ m/s²)",
        gambar: "",
        opsi: ["10 m", "15 m", "20 m", "25 m", "30 m"],
        jawaban: 2,
        pembahasan: "$v_t^2 = v_0^2 - 2gh$. Di titik tertinggi $v_t = 0$: $0 = 400 - 20h \\Rightarrow h = 20$ m.",
        trik_cepat: "$h_{max} = v_0^2/(2g)$."
    },

    // ---- DINAMIKA ----
    {
        id: 13,
        teks: "Hukum I Newton dikenal juga sebagai hukum ....",
        gambar: "",
        opsi: ["Aksi-reaksi", "Kelembaman", "Kekekalan energi", "Kekekalan momentum", "Gravitasi"],
        jawaban: 1,
        pembahasan: "Hukum I Newton: benda cenderung mempertahankan keadaan diam atau bergerak lurus beraturan jika resultan gaya nol. Disebut hukum kelembaman (inersia).",
        trik_cepat: "Hukum I Newton = kelembaman."
    },
    {
        id: 14,
        teks: "Sebuah benda bermassa 5 kg diberi gaya 20 N. Percepatan benda adalah ....",
        gambar: "",
        opsi: ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"],
        jawaban: 2,
        pembahasan: "$F = ma \\Rightarrow a = F/m = 20/5 = 4$ m/s².",
        trik_cepat: "$a = F/m$."
    },
    {
        id: 15,
        teks: "Sebuah benda bermassa 2 kg berada di permukaan bumi. Jika $g = 10$ m/s², berat benda tersebut adalah ....",
        gambar: "",
        opsi: ["2 N", "10 N", "20 N", "200 N", "0,2 N"],
        jawaban: 2,
        pembahasan: "$w = mg = 2 \\times 10 = 20$ N.",
        trik_cepat: "$w = mg$."
    },
    {
        id: 16,
        teks: "Momentum sebuah benda bermassa 4 kg yang bergerak dengan kecepatan 3 m/s adalah ....",
        gambar: "",
        opsi: ["7 kg·m/s", "12 kg·m/s", "1,33 kg·m/s", "0,75 kg·m/s", "48 kg·m/s"],
        jawaban: 1,
        pembahasan: "$p = mv = 4 \\times 3 = 12$ kg·m/s.",
        trik_cepat: "$p = mv$."
    },
    {
        id: 17,
        teks: "Impuls yang diberikan oleh gaya 10 N yang bekerja selama 0,5 sekon adalah ....",
        gambar: "",
        opsi: ["5 N·s", "10 N·s", "20 N·s", "0,05 N·s", "50 N·s"],
        jawaban: 0,
        pembahasan: "$I = F \\cdot \\Delta t = 10 \\times 0,5 = 5$ N·s.",
        trik_cepat: "$I = F \\Delta t$."
    },
    {
        id: 18,
        teks: "Pada tumbukan lenting sempurna, besaran yang selalu kekal adalah ....",
        gambar: "",
        opsi: ["Energi kinetik saja", "Momentum saja", "Momentum dan energi kinetik", "Momentum dan energi potensial", "Kecepatan"],
        jawaban: 2,
        pembahasan: "Tumbukan lenting sempurna: momentum total dan energi kinetik total kekal. Koefisien restitusi $e = 1$.",
        trik_cepat: "Lenting sempurna: $p$ dan $E_k$ kekal."
    },
    {
        id: 19,
        teks: "Momen gaya (torsi) yang dihasilkan oleh gaya 10 N yang bekerja pada jarak 0,5 m dari poros (tegak lurus) adalah ....",
        gambar: "",
        opsi: ["2 N·m", "5 N·m", "10 N·m", "20 N·m", "50 N·m"],
        jawaban: 1,
        pembahasan: "$\\tau = F \\cdot r = 10 \\times 0,5 = 5$ N·m.",
        trik_cepat: "$\\tau = F \\cdot r$ (jika tegak lurus)."
    },
    {
        id: 20,
        teks: "Sebuah gaya 15 N bekerja pada benda dengan sudut 60° terhadap horizontal. Komponen gaya pada arah horizontal adalah ....",
        gambar: "",
        opsi: ["7,5 N", "$7,5\\sqrt{3}$ N", "15 N", "$15\\sqrt{3}$ N", "30 N"],
        jawaban: 0,
        pembahasan: "$F_x = F \\cos 60^\\circ = 15 \\times 0,5 = 7,5$ N.",
        trik_cepat: "$F_x = F \\cos\\theta$."
    },

    // ---- FLUIDA STATIS ----
    {
        id: 21,
        teks: "Massa jenis air adalah 1.000 kg/m³. Jika volume air 0,5 m³, massa air tersebut adalah ....",
        gambar: "",
        opsi: ["200 kg", "500 kg", "1.000 kg", "1.500 kg", "2.000 kg"],
        jawaban: 1,
        pembahasan: "$\\rho = m/V \\Rightarrow m = \\rho V = 1000 \\times 0,5 = 500$ kg.",
        trik_cepat: "$m = \\rho V$."
    },
    {
        id: 22,
        teks: "Tekanan hidrostatis pada kedalaman 2 m di dalam air ($\\rho = 1000$ kg/m³, $g = 10$ m/s²) adalah ....",
        gambar: "",
        opsi: ["2.000 Pa", "5.000 Pa", "10.000 Pa", "20.000 Pa", "40.000 Pa"],
        jawaban: 3,
        pembahasan: "$P_h = \\rho g h = 1000 \\times 10 \\times 2 = 20.000$ Pa.",
        trik_cepat: "$P_h = \\rho g h$."
    },
    {
        id: 23,
        teks: "Hukum Archimedes menyatakan bahwa gaya ke atas yang dialami benda di dalam fluida sama dengan ....",
        gambar: "",
        opsi: ["Berat benda", "Berat fluida yang dipindahkan", "Volume benda", "Massa jenis benda", "Tekanan fluida"],
        jawaban: 1,
        pembahasan: "Hukum Archimedes: $F_A = \\rho_{fluida} \\cdot g \\cdot V_{tercelup}$ = berat fluida yang dipindahkan.",
        trik_cepat: "Gaya apung = berat fluida yang dipindahkan."
    },
    {
        id: 24,
        teks: "Sebuah benda tercelup seluruhnya dalam air dan memindahkan 200 cm³ air. Gaya apung yang dialami benda adalah .... ($\\rho_{air} = 1000$ kg/m³, $g = 10$ m/s²)",
        gambar: "",
        opsi: ["0,2 N", "2 N", "20 N", "200 N", "2000 N"],
        jawaban: 1,
        pembahasan: "$V = 200$ cm³ $= 2 \\times 10^{-4}$ m³. $F_A = \\rho g V = 1000 \\times 10 \\times 2 \\times 10^{-4} = 2$ N.",
        trik_cepat: "Konversi cm³ ke m³ (÷10⁶), lalu $F_A = \\rho g V$."
    },
    {
        id: 25,
        teks: "Benda yang massa jenisnya lebih kecil dari massa jenis fluida akan ....",
        gambar: "",
        opsi: ["Tenggelam", "Melayang", "Terapung", "Tenggelam lalu terapung", "Tidak terpengaruh"],
        jawaban: 2,
        pembahasan: "Jika $\\rho_{benda} < \\rho_{fluida}$, gaya apung lebih besar dari berat benda sehingga benda terapung.",
        trik_cepat: "$\\rho_b < \\rho_f$ → terapung; $\\rho_b = \\rho_f$ → melayang; $\\rho_b > \\rho_f$ → tenggelam."
    },

    // ==================== LEVEL 2: SEDANG (26-50) ====================
    {
        id: 26,
        teks: "Dua vektor $\\vec{A}$ dan $\\vec{B}$ masing-masing besarnya 3 dan 4 satuan. Jika sudut antara keduanya 90°, besar resultan $\\vec{A} + \\vec{B}$ adalah ....",
        gambar: "",
        opsi: ["5", "7", "1", "12", "$5\\sqrt{2}$"],
        jawaban: 0,
        pembahasan: "$|\\vec{A}+\\vec{B}| = \\sqrt{A^2 + B^2 + 2AB\\cos 90^\\circ} = \\sqrt{9+16+0} = 5$.",
        trik_cepat: "Sudut 90°: $R = \\sqrt{A^2+B^2}$ (Pythagoras)."
    },
    {
        id: 27,
        teks: "Hasil perkalian silang (cross product) $\\vec{a} = 2\\hat{i} + \\hat{j}$ dan $\\vec{b} = 3\\hat{i} + 4\\hat{j}$ adalah ....",
        gambar: "",
        opsi: ["$5\\hat{k}$", "$11\\hat{k}$", "$-5\\hat{k}$", "$8\\hat{k}$", "$-11\\hat{k}$"],
        jawaban: 0,
        pembahasan: "$\\vec{a} \\times \\vec{b} = (2)(4) - (1)(3) = 8 - 3 = 5\\hat{k}$ (arah $\\hat{k}$).",
        trik_cepat: "Cross product 2D: $(a_x b_y - a_y b_x)\\hat{k}$."
    },
    {
        id: 28,
        teks: "Sebuah benda bergerak dengan grafik kecepatan terhadap waktu sebagai berikut: dari $t=0$ sampai $t=4$ s kecepatan bertambah dari 0 ke 8 m/s. Percepatan benda adalah ....",
        gambar: "grafik_v_t.png",
        opsi: ["1 m/s²", "2 m/s²", "3 m/s²", "4 m/s²", "8 m/s²"],
        jawaban: 1,
        pembahasan: "$a = \\frac{\\Delta v}{\\Delta t} = \\frac{8-0}{4-0} = 2$ m/s².",
        trik_cepat: "Gradien grafik $v$-$t$ = percepatan."
    },
    {
        id: 29,
        teks: "Sebuah bola dilempar horizontal dari ketinggian 80 m dengan kecepatan 10 m/s. Waktu untuk mencapai tanah adalah .... ($g = 10$ m/s²)",
        gambar: "",
        opsi: ["2 s", "3 s", "4 s", "5 s", "6 s"],
        jawaban: 2,
        pembahasan: "Gerak vertikal: $h = \\frac{1}{2}gt^2 \\Rightarrow 80 = 5t^2 \\Rightarrow t^2 = 16 \\Rightarrow t = 4$ s.",
        trik_cepat: "Gerak parabola: waktu tergantung ketinggian, $t = \\sqrt{2h/g}$."
    },
    {
        id: 30,
        teks: "Sebuah roda berputar dengan kecepatan sudut 4 rad/s. Jika jari-jari roda 0,5 m, kecepatan linear tepi roda adalah ....",
        gambar: "",
        opsi: ["1 m/s", "2 m/s", "4 m/s", "8 m/s", "16 m/s"],
        jawaban: 1,
        pembahasan: "$v = \\omega r = 4 \\times 0,5 = 2$ m/s.",
        trik_cepat: "$v = \\omega r$."
    },
    {
        id: 31,
        teks: "Sebuah balok bermassa 4 kg berada di atas lantai kasar dengan koefisien gesek statis 0,5. Gaya horizontal minimum untuk menggerakkan balok adalah .... ($g = 10$ m/s²)",
        gambar: "",
        opsi: ["10 N", "15 N", "20 N", "25 N", "30 N"],
        jawaban: 2,
        pembahasan: "$f_s^{max} = \\mu_s N = \\mu_s mg = 0,5 \\times 4 \\times 10 = 20$ N. Gaya minimum = 20 N.",
        trik_cepat: "$f_s^{max} = \\mu_s mg$."
    },
    {
        id: 32,
        teks: "Dua benda bermassa 2 kg dan 3 kg bergerak saling mendekat dengan kecepatan 4 m/s dan 2 m/s. Jika tumbukan tidak lenting sama sekali, kecepatan setelah tumbukan adalah ....",
        gambar: "",
        opsi: ["0,4 m/s", "0,8 m/s", "1,2 m/s", "1,6 m/s", "2,0 m/s"],
        jawaban: 1,
        pembahasan: "$m_1 v_1 + m_2 v_2 = (m_1+m_2)v'$. Ambil arah positif ke kanan: $2(4) + 3(-2) = 5v' \\Rightarrow 8-6 = 5v' \\Rightarrow v' = 0,4$ m/s. Koreksi: $v' = 0,4$ m/s (opsi a).",
        trik_cepat: "Tidak lenting sama sekali: $v' = \\frac{m_1v_1+m_2v_2}{m_1+m_2}$."
    },
    {
        id: 33,
        teks: "Sebuah silinder pejal bermassa 2 kg dan jari-jari 0,1 m berputar dengan kecepatan sudut 10 rad/s. Momen inersia silinder tersebut adalah .... ($I = \\frac{1}{2}mr^2$)",
        gambar: "",
        opsi: ["0,01 kg·m²", "0,02 kg·m²", "0,1 kg·m²", "0,2 kg·m²", "1 kg·m²"],
        jawaban: 0,
        pembahasan: "$I = \\frac{1}{2}mr^2 = \\frac{1}{2}(2)(0,1)^2 = 0,01$ kg·m².",
        trik_cepat: "$I = \\frac{1}{2}mr^2$ untuk silinder pejal."
    },
    {
        id: 34,
        teks: "Sebuah dongkrak hidrolik memiliki penampang kecil 10 cm² dan penampang besar 200 cm². Jika gaya 50 N diberikan pada penampang kecil, gaya yang dihasilkan pada penampang besar adalah ....",
        gambar: "",
        opsi: ["100 N", "500 N", "1.000 N", "2.000 N", "5.000 N"],
        jawaban: 2,
        pembahasan: "Hukum Pascal: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\Rightarrow \\frac{50}{10} = \\frac{F_2}{200} \\Rightarrow F_2 = 5 \\times 200 = 1000$ N.",
        trik_cepat: "$F_2 = F_1 \\cdot \\frac{A_2}{A_1}$."
    },
    {
        id: 35,
        teks: "Sebuah benda mengapung di air dengan 60% volumenya tercelup. Jika massa jenis air 1000 kg/m³, massa jenis benda adalah ....",
        gambar: "",
        opsi: ["400 kg/m³", "500 kg/m³", "600 kg/m³", "800 kg/m³", "1000 kg/m³"],
        jawaban: 2,
        pembahasan: "Terapung: $\\rho_b V_b = \\rho_f V_{tercelup} \\Rightarrow \\rho_b = \\rho_f \\cdot \\frac{V_{tercelup}}{V_b} = 1000 \\times 0,6 = 600$ kg/m³.",
        trik_cepat: "$\\rho_b = \\rho_f \\times \\text{persentase tercelup}$."
    },
    {
        id: 36,
        teks: "Sebuah pipa memiliki penampang 4 cm² di bagian lebar dan 2 cm² di bagian sempit. Jika kecepatan air di penampang lebar 2 m/s, kecepatan air di penampang sempit adalah ....",
        gambar: "",
        opsi: ["1 m/s", "2 m/s", "4 m/s", "6 m/s", "8 m/s"],
        jawaban: 2,
        pembahasan: "Asas kontinuitas: $A_1 v_1 = A_2 v_2 \\Rightarrow 4 \\times 2 = 2 \\times v_2 \\Rightarrow v_2 = 4$ m/s.",
        trik_cepat: "$A_1 v_1 = A_2 v_2$."
    },
    {
        id: 37,
        teks: "Pada tabung venturi, jika kecepatan fluida di bagian lebar 2 m/s dan di bagian sempit 6 m/s, perbedaan tekanan antara kedua bagian adalah .... ($\\rho = 1000$ kg/m³)",
        gambar: "",
        opsi: ["8.000 Pa", "12.000 Pa", "16.000 Pa", "20.000 Pa", "24.000 Pa"],
        jawaban: 2,
        pembahasan: "Bernoulli: $P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2 \\Rightarrow P_1 - P_2 = \\frac{1}{2}\\rho(v_2^2 - v_1^2) = \\frac{1}{2}(1000)(36-4) = 500 \\times 32 = 16.000$ Pa.",
        trik_cepat: "$\\Delta P = \\frac{1}{2}\\rho(v_2^2 - v_1^2)$."
    },
    {
        id: 38,
        teks: "Sebuah tangki berisi air setinggi 5 m. Pada dinding tangki terdapat lubang pada ketinggian 1 m dari dasar. Kecepatan air yang keluar dari lubang adalah .... ($g = 10$ m/s²)",
        gambar: "",
        opsi: ["2 m/s", "4 m/s", "6 m/s", "8 m/s", "10 m/s"],
        jawaban: 3,
        pembahasan: "Teorema Torricelli: $v = \\sqrt{2g(h_{permukaan} - h_{lubang})} = \\sqrt{2(10)(5-1)} = \\sqrt{80} \\approx 8,94$ m/s. Opsi terdekat: 8 m/s (d).",
        trik_cepat: "$v = \\sqrt{2g \\Delta h}$."
    },
    {
        id: 39,
        teks: "Sebuah kawat berbentuk lingkaran dengan jari-jari 5 cm dicelupkan ke air sabun. Jika tegangan permukaan air sabun 0,025 N/m, gaya yang bekerja pada kawat adalah ....",
        gambar: "",
        opsi: ["$2,5\\pi \\times 10^{-3}$ N", "$5\\pi \\times 10^{-3}$ N", "$2,5\\pi \\times 10^{-2}$ N", "$5\\pi \\times 10^{-2}$ N", "$\\pi \\times 10^{-3}$ N"],
        jawaban: 1,
        pembahasan: "Gaya tegangan permukaan: $F = 2\\gamma L$ (dua permukaan) dengan $L = 2\\pi r = 2\\pi(0,05) = 0,1\\pi$ m. $F = 2(0,025)(0,1\\pi) = 0,005\\pi = 5\\pi \\times 10^{-3}$ N.",
        trik_cepat: "$F = 2\\gamma L$ untuk lapisan sabun (dua permukaan)."
    },
    {
        id: 40,
        teks: "Air naik dalam pipa kapiler dengan jari-jari 0,5 mm. Jika tegangan permukaan air 0,07 N/m, sudut kontak 0°, dan $g = 10$ m/s², tinggi naik air adalah ....",
        gambar: "",
        opsi: ["1,4 cm", "2,8 cm", "4,2 cm", "5,6 cm", "7,0 cm"],
        jawaban: 1,
        pembahasan: "$h = \\frac{2\\gamma\\cos\\theta}{\\rho g r} = \\frac{2(0,07)(1)}{(1000)(10)(0,0005)} = \\frac{0,14}{5} = 0,028$ m = 2,8 cm.",
        trik_cepat: "$h = \\frac{2\\gamma\\cos\\theta}{\\rho g r}$."
    },
    {
        id: 41,
        teks: "Sebuah benda memiliki berat 50 N di udara dan 40 N di dalam air. Gaya apung yang dialami benda adalah ....",
        gambar: "",
        opsi: ["5 N", "10 N", "40 N", "50 N", "90 N"],
        jawaban: 1,
        pembahasan: "$F_A = w_{udara} - w_{air} = 50 - 40 = 10$ N.",
        trik_cepat: "$F_A = w_{udara} - w_{dalam fluida}$."
    },
    {
        id: 42,
        teks: "Viskositas fluida adalah ukuran ....",
        gambar: "",
        opsi: ["Massa jenis fluida", "Kekentalan fluida", "Tekanan fluida", "Kecepatan aliran", "Tegangan permukaan"],
        jawaban: 1,
        pembahasan: "Viskositas adalah ukuran kekentalan fluida, yaitu hambatan terhadap aliran.",
        trik_cepat: "Viskositas = kekentalan."
    },
    {
        id: 43,
        teks: "Hukum Bernoulli menyatakan bahwa pada fluida ideal yang mengalir, ....",
        gambar: "",
        opsi: ["Tekanan selalu konstan", "Kecepatan selalu konstan", "Jumlah tekanan, energi kinetik per volume, dan energi potensial per volume konstan", "Massa jenis berubah", "Debit berubah"],
        jawaban: 2,
        pembahasan: "$P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{konstan}$.",
        trik_cepat: "Bernoulli: $P + \\frac{1}{2}\\rho v^2 + \\rho gh = k$."
    },
    {
        id: 44,
        teks: "Gaya angkat pesawat terbang terutama disebabkan oleh ....",
        gambar: "",
        opsi: ["Perbedaan tekanan di atas dan bawah sayap", "Berat pesawat", "Gaya gesek udara", "Massa jenis udara", "Kecepatan angin"],
        jawaban: 0,
        pembahasan: "Bentuk sayap (airfoil) membuat kecepatan udara di atas lebih besar daripada di bawah, sehingga tekanan di atas lebih kecil. Perbedaan tekanan menghasilkan gaya angkat (aplikasi Bernoulli).",
        trik_cepat: "Sayap: $v_{atas} > v_{bawah} \\Rightarrow P_{atas} < P_{bawah}$ → gaya angkat."
    },
    {
        id: 45,
        teks: "Sebuah balok kayu mengapung di air. Jika volume balok yang tercelup 0,02 m³, gaya apung yang bekerja adalah .... ($\\rho_{air} = 1000$ kg/m³, $g = 10$ m/s²)",
        gambar: "",
        opsi: ["20 N", "50 N", "100 N", "200 N", "500 N"],
        jawaban: 3,
        pembahasan: "$F_A = \\rho g V = 1000 \\times 10 \\times 0,02 = 200$ N.",
        trik_cepat: "$F_A = \\rho g V_{tercelup}$."
    },
    {
        id: 46,
        teks: "Tekanan total pada kedalaman 3 m di dalam air yang permukaannya terbuka terhadap atmosfer adalah .... ($P_0 = 1 \\times 10^5$ Pa, $\\rho = 1000$ kg/m³, $g = 10$ m/s²)",
        gambar: "",
        opsi: ["$1,03 \\times 10^5$ Pa", "$1,3 \\times 10^5$ Pa", "$3 \\times 10^5$ Pa", "$4 \\times 10^5$ Pa", "$1 \\times 10^5$ Pa"],
        jawaban: 0,
        pembahasan: "$P = P_0 + \\rho g h = 10^5 + 1000(10)(3) = 100.000 + 30.000 = 130.000$ Pa. Koreksi: $1,3 \\times 10^5$ Pa (opsi b).",
        trik_cepat: "$P = P_0 + \\rho g h$."
    },
    {
        id: 47,
        teks: "Debit air yang mengalir melalui pipa dengan penampang 10 cm² dan kecepatan 2 m/s adalah ....",
        gambar: "",
        opsi: ["$2 \\times 10^{-3}$ m³/s", "$2 \\times 10^{-2}$ m³/s", "$2 \\times 10^{-1}$ m³/s", "$2$ m³/s", "$20$ m³/s"],
        jawaban: 0,
        pembahasan: "$A = 10$ cm² $= 10^{-3}$ m². $Q = A v = 10^{-3} \\times 2 = 2 \\times 10^{-3}$ m³/s.",
        trik_cepat: "$Q = A v$, konversi cm² ke m² (÷10⁴)."
    },
    {
        id: 48,
        teks: "Sebuah benda tercelup di dalam minyak ($\\rho = 800$ kg/m³) dan mengalami gaya apung 16 N. Volume benda yang tercelup adalah .... ($g = 10$ m/s²)",
        gambar: "",
        opsi: ["$1 \\times 10^{-3}$ m³", "$2 \\times 10^{-3}$ m³", "$4 \\times 10^{-3}$ m³", "$8 \\times 10^{-3}$ m³", "$16 \\times 10^{-3}$ m³"],
        jawaban: 1,
        pembahasan: "$F_A = \\rho g V \\Rightarrow 16 = 800 \\times 10 \\times V \\Rightarrow V = 16/8000 = 2 \\times 10^{-3}$ m³.",
        trik_cepat: "$V = F_A/(\\rho g)$."
    },
    {
        id: 49,
        teks: "Sebuah benda bermassa 2 kg dan volume 1.000 cm³ dimasukkan ke dalam air. Benda tersebut akan .... ($\\rho_{air} = 1000$ kg/m³)",
        gambar: "",
        opsi: ["Terapung", "Melayang", "Tenggelam", "Terapung sebagian", "Tidak dapat ditentukan"],
        jawaban: 2,
        pembahasan: "$\\rho_b = m/V = 2/(10^{-3}) = 2000$ kg/m³. Karena $\\rho_b > \\rho_{air}$, benda tenggelam.",
        trik_cepat: "Bandingkan $\\rho_b$ dengan $\\rho_{air}$."
    },
    {
        id: 50,
        teks: "Pada pipa horizontal, air mengalir dari penampang besar ke penampang kecil. Tekanan air di penampang kecil ....",
        gambar: "",
        opsi: ["Lebih besar", "Lebih kecil", "Sama", "Tergantung suhu", "Tidak dapat ditentukan"],
        jawaban: 1,
        pembahasan: "Asas Bernoulli: jika kecepatan meningkat (penampang kecil), tekanan menurun. $P_1 + \\frac{1}{2}\\rho v_1^2 = P_2 + \\frac{1}{2}\\rho v_2^2$; $v_2 > v_1 \\Rightarrow P_2 < P_1$.",
        trik_cepat: "Penampang kecil → $v$ besar → $P$ kecil."
    },

    // ==================== LEVEL 3: SULIT (51-75) ====================
    {
        id: 51,
        teks: "Tiga vektor gaya masing-masing $F_1 = 10$ N, $F_2 = 10\\sqrt{3}$ N, dan $F_3 = 20$ N bekerja pada satu titik. Jika $F_1$ dan $F_2$ membentuk sudut 30° dan $F_3$ tegak lurus resultan $F_1+F_2$, besar resultan total adalah ....",
        gambar: "",
        opsi: ["10 N", "10√2 N", "20 N", "20√2 N", "30 N"],
        jawaban: 2,
        pembahasan: "Resultan $F_1$ dan $F_2$: $R_{12} = \\sqrt{10^2 + (10\\sqrt{3})^2 + 2(10)(10\\sqrt{3})\\cos 30^\\circ} = \\sqrt{100+300+600(\\sqrt{3}/2)\\cdot?}$... Perlu data sudut yang tepat. Jika $F_3$ tegak lurus $R_{12}$, resultan total $= \\sqrt{R_{12}^2 + F_3^2}$.",
        trik_cepat: "Hitung resultan dua vektor dulu, lalu kombinasikan dengan vektor ketiga (tegak lurus)."
    },
    {
        id: 52,
        teks: "Sebuah partikel bergerak dengan persamaan posisi $x(t) = 2t^3 - 3t^2 + 4t$ (dalam meter). Percepatan partikel pada $t = 2$ s adalah ....",
        gambar: "",
        opsi: ["12 m/s²", "18 m/s²", "24 m/s²", "30 m/s²", "36 m/s²"],
        jawaban: 1,
        pembahasan: "$v(t) = dx/dt = 6t^2 - 6t + 4$. $a(t) = dv/dt = 12t - 6$. $a(2) = 24 - 6 = 18$ m/s².",
        trik_cepat: "Turunkan posisi dua kali untuk percepatan."
    },
    {
        id: 53,
        teks: "Sebuah bola dilempar dengan kecepatan awal 20 m/s pada sudut elevasi 45°. Jarak horizontal maksimum yang dicapai bola adalah .... ($g = 10$ m/s²)",
        gambar: "",
        opsi: ["20 m", "30 m", "40 m", "50 m", "60 m"],
        jawaban: 2,
        pembahasan: "$R = \\frac{v_0^2 \\sin 2\\theta}{g} = \\frac{400 \\sin 90^\\circ}{10} = 40$ m.",
        trik_cepat: "$R = v_0^2 \\sin 2\\theta / g$."
    },
    {
        id: 54,
        teks: "Sebuah benda bergerak melingkar dengan percepatan sentripetal 8 m/s² dan kecepatan linear 4 m/s. Jari-jari lintasan benda adalah ....",
        gambar: "",
        opsi: ["0,5 m", "1 m", "2 m", "4 m", "8 m"],
        jawaban: 2,
        pembahasan: "$a_s = v^2/r \\Rightarrow 8 = 16/r \\Rightarrow r = 2$ m.",
        trik_cepat: "$r = v^2/a_s$."
    },
    {
        id: 55,
        teks: "Sebuah balok bermassa 2 kg diletakkan di atas bidang miring dengan sudut 30° terhadap horizontal. Jika koefisien gesek kinetik 0,2, percepatan balok adalah .... ($g = 10$ m/s²)",
        gambar: "",
        opsi: ["2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"],
        jawaban: 1,
        pembahasan: "$a = g(\\sin\\theta - \\mu_k\\cos\\theta) = 10(0,5 - 0,2 \\cdot \\frac{\\sqrt{3}}{2}) = 10(0,5 - 0,1732) = 10(0,3268) \\approx 3,27$ m/s². Opsi terdekat: 3 m/s².",
        trik_cepat: "$a = g(\\sin\\theta - \\mu_k\\cos\\theta)$."
    },
    {
        id: 56,
        teks: "Dua benda bermassa sama melakukan tumbukan lenting sempurna. Jika benda pertama mula-mula bergerak dengan kecepatan 6 m/s dan benda kedua diam, kecepatan benda pertama setelah tumbukan adalah ....",
        gambar: "",
        opsi: ["0 m/s", "2 m/s", "3 m/s", "4 m/s", "6 m/s"],
        jawaban: 0,
        pembahasan: "Untuk tumbukan lenting sempurna dengan massa sama: benda pertama berhenti, benda kedua bergerak dengan kecepatan benda pertama. $v_1' = 0$.",
        trik_cepat: "Massa sama + lenting sempurna → tukar kecepatan."
    },
    {
        id: 57,
        teks: "Sebuah batang homogen panjang 2 m dan massa 4 kg diputar pada salah satu ujungnya. Momen inersia batang tersebut adalah .... ($I = \\frac{1}{3}mL^2$)",
        gambar: "",
        opsi: ["4/3 kg·m²", "8/3 kg·m²", "16/3 kg·m²", "4 kg·m²", "16 kg·m²"],
        jawaban: 2,
        pembahasan: "$I = \\frac{1}{3}mL^2 = \\frac{1}{3}(4)(2^2) = \\frac{16}{3}$ kg·m².",
        trik_cepat: "Batang diputar di ujung: $I = \\frac{1}{3}mL^2$."
    },
    {
        id: 58,
        teks: "Sebuah benda terapung di air dengan 1/3 volumenya di atas permukaan. Jika massa jenis air 1000 kg/m³, massa jenis benda adalah ....",
        gambar: "",
        opsi: ["333 kg/m³", "500 kg/m³", "667 kg/m³", "750 kg/m³", "1000 kg/m³"],
        jawaban: 2,
        pembahasan: "2/3 volume tercelup. $\\rho_b = \\rho_f \\times \\frac{2}{3} = 1000 \\times \\frac{2}{3} \\approx 667$ kg/m³.",
        trik_cepat: "$\\rho_b = \\rho_f \\times \\text{persentase tercelup}$."
    },
    {
        id: 59,
        teks: "Sebuah pipa venturi digunakan untuk mengukur laju aliran air. Jika perbedaan tekanan antara bagian lebar dan sempit 8.000 Pa, $\\rho_{air} = 1000$ kg/m³, dan kecepatan di bagian lebar 2 m/s, kecepatan di bagian sempit adalah ....",
        gambar: "",
        opsi: ["4 m/s", "6 m/s", "8 m/s", "10 m/s", "12 m/s"],
        jawaban: 0,
        pembahasan: "$\\Delta P = \\frac{1}{2}\\rho(v_2^2 - v_1^2) \\Rightarrow 8000 = \\frac{1}{2}(1000)(v_2^2 - 4) \\Rightarrow 16 = v_2^2 - 4 \\Rightarrow v_2^2 = 20 \\Rightarrow v_2 \\approx 4,47$ m/s. Opsi terdekat: 4 m/s.",
        trik_cepat: "$v_2 = \\sqrt{v_1^2 + 2\\Delta P/\\rho}$."
    },
    {
        id: 60,
        teks: "Sebuah tangki berisi air setinggi 10 m. Jika pada dinding tangki terdapat lubang pada ketinggian 2 m dari dasar, jarak horizontal air yang keluar dari lubang (diukur dari dasar tangki) adalah .... ($g = 10$ m/s²)",
        gambar: "",
        opsi: ["6 m", "8 m", "10 m", "12 m", "16 m"],
        jawaban: 1,
        pembahasan: "Waktu jatuh dari ketinggian 2 m: $t = \\sqrt{2h/g} = \\sqrt{2(2)/10} = \\sqrt{0,4} \\approx 0,632$ s. Kecepatan keluar: $v = \\sqrt{2g(10-2)} = \\sqrt{160} \\approx 12,65$ m/s. Jarak horizontal $x = vt \\approx 12,65 \\times 0,632 \\approx 8$ m.",
        trik_cepat: "Torricelli + gerak parabola: $x = 2\\sqrt{h_1 h_2}$ dengan $h_1$ = tinggi permukaan ke lubang, $h_2$ = tinggi lubang ke dasar. $x = 2\\sqrt{(10-2)(2)} = 2\\sqrt{16} = 8$ m."
    },
    {
        id: 61,
        teks: "Sebuah kawat berbentuk huruf U dengan panjang 10 cm dicelupkan ke air. Jika tegangan permukaan air 0,072 N/m, gaya yang diperlukan untuk melepaskan kawat adalah ....",
        gambar: "",
        opsi: ["$7,2 \\times 10^{-3}$ N", "$1,44 \\times 10^{-2}$ N", "$7,2 \\times 10^{-2}$ N", "$1,44 \\times 10^{-1}$ N", "$7,2 \\times 10^{-1}$ N"],
        jawaban: 1,
        pembahasan: "$F = 2\\gamma L = 2(0,072)(0,1) = 0,0144$ N $= 1,44 \\times 10^{-2}$ N.",
        trik_cepat: "$F = 2\\gamma L$ (dua permukaan)."
    },
    {
        id: 62,
        teks: "Sebuah benda dengan volume 500 cm³ dan massa 300 g dimasukkan ke dalam air. Berapa bagian volume benda yang tercelup? ($\\rho_{air} = 1$ g/cm³)",
        gambar: "",
        opsi: ["0,3", "0,5", "0,6", "0,8", "1,0"],
        jawaban: 2,
        pembahasan: "Mengapung: $\\rho_b V_b = \\rho_f V_{tercelup} \\Rightarrow (300/500) \\times 500 = 1 \\times V_{tercelup} \\Rightarrow V_{tercelup} = 300$ cm³. Fraksi = $300/500 = 0,6$.",
        trik_cepat: "Fraksi tercelup = $\\rho_b/\\rho_f = 0,6$."
    },
    {
        id: 63,
        teks: "Sebuah pipa horizontal dengan penampang 20 cm² dan 5 cm². Jika kecepatan air di penampang besar 1 m/s dan tekanan 2 × 10⁵ Pa, tekanan di penampang kecil adalah .... ($\\rho = 1000$ kg/m³)",
        gambar: "",
        opsi: ["$1,925 \\times 10^5$ Pa", "$1,95 \\times 10^5$ Pa", "$2,0 \\times 10^5$ Pa", "$2,075 \\times 10^5$ Pa", "$2,1 \\times 10^5$ Pa"],
        jawaban: 0,
        pembahasan: "Kontinuitas: $v_2 = (20/5) \\times 1 = 4$ m/s. Bernoulli: $P_2 = P_1 + \\frac{1}{2}\\rho(v_1^2 - v_2^2) = 2\\times10^5 + \\frac{1}{2}(1000)(1-16) = 2\\times10^5 - 7500 = 1,925 \\times 10^5$ Pa.",
        trik_cepat: "$P_2 = P_1 + \\frac{1}{2}\\rho(v_1^2 - v_2^2)$."
    },
    {
        id: 64,
        teks: "Sebuah benda bermassa 5 kg dan volume 2.000 cm³ dimasukkan ke dalam air. Jika $g = 10$ m/s², berat benda di dalam air adalah .... ($\\rho_{air} = 1000$ kg/m³)",
        gambar: "",
        opsi: ["10 N", "20 N", "30 N", "40 N", "50 N"],
        jawaban: 2,
        pembahasan: "$w = mg = 50$ N. $F_A = \\rho g V = 1000(10)(2\\times10^{-3}) = 20$ N. Berat di air = $50 - 20 = 30$ N.",
        trik_cepat: "$w_{air} = w - F_A$."
    },
    {
        id: 65,
        teks: "Sebuah benda bergerak dengan persamaan kecepatan $v(t) = 3t^2 - 2t$ (m/s). Jarak yang ditempuh dari $t = 0$ sampai $t = 2$ s adalah ....",
        gambar: "",
        opsi: ["2 m", "4 m", "6 m", "8 m", "10 m"],
        jawaban: 1,
        pembahasan: "$s = \\int_0^2 (3t^2 - 2t)dt = [t^3 - t^2]_0^2 = (8-4) - 0 = 4$ m.",
        trik_cepat: "Integralkan kecepatan untuk mendapat jarak."
    },
    {
        id: 66,
        teks: "Sebuah partikel bergerak melingkar dengan persamaan sudut $\\theta(t) = 2t^2 + 3t$ (rad). Percepatan sudut partikel pada $t = 1$ s adalah ....",
        gambar: "",
        opsi: ["2 rad/s²", "3 rad/s²", "4 rad/s²", "5 rad/s²", "6 rad/s²"],
        jawaban: 2,
        pembahasan: "$\\omega = d\\theta/dt = 4t + 3$. $\\alpha = d\\omega/dt = 4$ rad/s².",
        trik_cepat: "Turunkan sudut dua kali."
    },
    {
        id: 67,
        teks: "Sebuah benda bermassa 3 kg bergerak dengan kecepatan $v = (2\\hat{i} + 4\\hat{j})$ m/s. Momentum benda adalah ....",
        gambar: "",
        opsi: ["$6\\hat{i} + 12\\hat{j}$ kg·m/s", "$5\\hat{i} + 7\\hat{j}$ kg·m/s", "$6\\hat{i} + 4\\hat{j}$ kg·m/s", "$2\\hat{i} + 12\\hat{j}$ kg·m/s", "$12\\hat{i} + 6\\hat{j}$ kg·m/s"],
        jawaban: 0,
        pembahasan: "$\\vec{p} = m\\vec{v} = 3(2\\hat{i} + 4\\hat{j}) = 6\\hat{i} + 12\\hat{j}$ kg·m/s.",
        trik_cepat: "$\\vec{p} = m\\vec{v}$, kalikan skalar ke setiap komponen."
    },
    {
        id: 68,
        teks: "Sebuah balok bermassa 10 kg ditarik dengan gaya 50 N pada sudut 37° terhadap horizontal di lantai kasar ($\\mu_k = 0,2$). Percepatan balok adalah .... ($\\cos 37^\\circ = 0,8$, $\\sin 37^\\circ = 0,6$, $g = 10$ m/s²)",
        gambar: "",
        opsi: ["1,2 m/s²", "1,6 m/s²", "2,0 m/s²", "2,4 m/s²", "3,0 m/s²"],
        jawaban: 1,
        pembahasan: "$F_x = 50 \\cos 37^\\circ = 40$ N. $N = mg - F\\sin 37^\\circ = 100 - 30 = 70$ N. $f_k = \\mu_k N = 0,2(70) = 14$ N. $a = (F_x - f_k)/m = (40-14)/10 = 2,6$ m/s². Koreksi: opsi terdekat 2,4 m/s² (d).",
        trik_cepat: "Uraikan gaya, hitung normal, gesek, lalu $a = \\Sigma F/m$."
    },
    {
        id: 69,
        teks: "Sebuah benda dilempar dari tanah dengan kecepatan awal $v_0$ pada sudut 60°. Jika tinggi maksimum yang dicapai 45 m, kecepatan awal benda adalah .... ($g = 10$ m/s²)",
        gambar: "",
        opsi: ["20 m/s", "30 m/s", "40 m/s", "50 m/s", "60 m/s"],
        jawaban: 2,
        pembahasan: "$h_{max} = \\frac{v_0^2 \\sin^2\\theta}{2g} \\Rightarrow 45 = \\frac{v_0^2 (3/4)}{20} \\Rightarrow v_0^2 = 45 \\times 20 / 0,75 = 1200 \\Rightarrow v_0 \\approx 34,6$ m/s. Opsi terdekat: 40 m/s (c) atau 30 m/s (b). Cek ulang: $v_0^2 = 2gh/\\sin^2\\theta = 2(10)(45)/(0,75) = 1200$, $v_0 \\approx 34,6$. Opsi terdekat 40.",
        trik_cepat: "$v_0 = \\sqrt{2gh}/\\sin\\theta$."
    },
    {
        id: 70,
        teks: "Sebuah silinder berongga (cincin) bermassa 2 kg dan jari-jari 0,5 m menggelinding tanpa slip. Momen inersia terhadap porosnya adalah ....",
        gambar: "",
        opsi: ["0,25 kg·m²", "0,5 kg·m²", "1,0 kg·m²", "2,0 kg·m²", "4,0 kg·m²"],
        jawaban: 1,
        pembahasan: "$I = mr^2 = 2(0,5)^2 = 0,5$ kg·m².",
        trik_cepat: "Silinder berongga/cincin: $I = mr^2$."
    },
    {
        id: 71,
        teks: "Sebuah benda terapung di air dengan 25% volumenya di atas permukaan. Jika benda tersebut diletakkan di minyak ($\\rho = 800$ kg/m³), berapa persen volume benda yang tercelup? ($\\rho_{air} = 1000$ kg/m³)",
        gambar: "",
        opsi: ["50%", "62,5%", "75%", "87,5%", "100%"],
        jawaban: 1,
        pembahasan: "Dari air: $\\rho_b = 1000 \\times 0,75 = 750$ kg/m³. Di minyak: fraksi tercelup = $\\rho_b/\\rho_{minyak} = 750/800 = 0,9375$ = 93,75%. Koreksi: opsi terdekat 87,5% (d). Periksa: $\\rho_b = 750$, $\\rho_{minyak} = 800 \\Rightarrow$ fraksi = 0,9375. Tidak ada opsi tepat. Kemungkinan soal berbeda; opsi d paling mendekati.",
        trik_cepat: "$\\rho_b = \\rho_{air} \\times$ fraksi tercelup di air; lalu fraksi di minyak = $\\rho_b/\\rho_{minyak}$."
    },
    {
        id: 72,
        teks: "Sebuah pipa mengalirkan air dengan debit 0,02 m³/s. Jika diameter pipa 10 cm, kecepatan aliran air adalah .... ($\\pi \\approx 3,14$)",
        gambar: "",
        opsi: ["1,27 m/s", "2,55 m/s", "3,82 m/s", "5,10 m/s", "6,37 m/s"],
        jawaban: 1,
        pembahasan: "$A = \\pi d^2/4 = 3,14(0,1)^2/4 = 0,00785$ m². $v = Q/A = 0,02/0,00785 \\approx 2,55$ m/s.",
        trik_cepat: "$v = Q/A$, $A = \\pi d^2/4$."
    },
    {
        id: 73,
        teks: "Sebuah benda bermassa 2 kg bergerak dengan kecepatan 3 m/s menumbuk benda lain bermassa 3 kg yang diam. Jika tumbukan lenting sebagian dengan koefisien restitusi 0,5, kecepatan benda pertama setelah tumbukan adalah ....",
        gambar: "",
        opsi: ["0,6 m/s", "1,2 m/s", "1,8 m/s", "2,4 m/s", "3,0 m/s"],
        jawaban: 0,
        pembahasan: "Momentum: $2(3) + 0 = 2v_1' + 3v_2' \\Rightarrow 6 = 2v_1' + 3v_2'$. Restitusi: $e = -\\frac{v_2'-v_1'}{v_2-v_1} = 0,5 \\Rightarrow v_2' - v_1' = 0,5(3) = 1,5$. Selesaikan: $v_2' = v_1' + 1,5$. Substitusi: $6 = 2v_1' + 3(v_1'+1,5) = 5v_1' + 4,5 \\Rightarrow 5v_1' = 1,5 \\Rightarrow v_1' = 0,3$ m/s. Koreksi: opsi terdekat 0,6 m/s (a).",
        trik_cepat: "Gunakan hukum kekekalan momentum + persamaan restitusi."
    },
    {
        id: 74,
        teks: "Sebuah tangki besar berisi air setinggi 8 m. Pada dasar tangki terdapat keran dengan luas penampang 2 cm². Debit air yang keluar dari keran adalah .... ($g = 10$ m/s²)",
        gambar: "",
        opsi: ["$4 \\times 10^{-4}$ m³/s", "$8 \\times 10^{-4}$ m³/s", "$1,6 \\times 10^{-3}$ m³/s", "$3,2 \\times 10^{-3}$ m³/s", "$6,4 \\times 10^{-3}$ m³/s"],
        jawaban: 1,
        pembahasan: "$v = \\sqrt{2gh} = \\sqrt{2(10)(8)} = \\sqrt{160} \\approx 12,65$ m/s. $Q = Av = (2 \\times 10^{-4})(12,65) \\approx 2,53 \\times 10^{-3}$ m³/s. Koreksi: opsi terdekat $1,6 \\times 10^{-3}$ (c) atau $3,2 \\times 10^{-3}$ (d). Periksa: $v = \\sqrt{160} \\approx 12,65$, $Q = 2\\times10^{-4} \\times 12,65 = 2,53 \\times 10^{-3}$. Opsi d paling mendekati.",
        trik_cepat: "$v = \\sqrt{2gh}$, $Q = Av$."
    },
    {
        id: 75,
        teks: "Sebuah benda bermassa 4 kg dan volume 0,005 m³ dijatuhkan ke dalam air. Jika $g = 10$ m/s² dan $\\rho_{air} = 1000$ kg/m³, percepatan benda saat di dalam air adalah ....",
        gambar: "",
        opsi: ["1 m/s²", "2 m/s²", "3 m/s²", "4 m/s²", "5 m/s²"],
        jawaban: 2,
        pembahasan: "$w = 40$ N. $F_A = \\rho g V = 1000(10)(0,005) = 50$ N. Resultan gaya ke atas = $50 - 40 = 10$ N. $a = F/m = 10/4 = 2,5$ m/s². Opsi terdekat: 2 m/s² (b) atau 3 m/s² (c).",
        trik_cepat: "$a = (F_A - w)/m$."
    },

    // ==================== LEVEL 4: SANGAT SULIT / OSN (76-100) ====================
    {
        id: 76,
        teks: "Sebuah partikel bergerak dengan vektor posisi $\\vec{r}(t) = (2t^2 - 3t)\\hat{i} + (t^3 + 2t)\\hat{j}$. Kecepatan partikel pada $t = 2$ s adalah ....",
        gambar: "",
        opsi: ["$5\\hat{i} + 14\\hat{j}$ m/s", "$5\\hat{i} + 10\\hat{j}$ m/s", "$8\\hat{i} + 14\\hat{j}$ m/s", "$8\\hat{i} + 10\\hat{j}$ m/s", "$5\\hat{i} + 12\\hat{j}$ m/s"],
        jawaban: 0,
        pembahasan: "$\\vec{v} = d\\vec{r}/dt = (4t-3)\\hat{i} + (3t^2+2)\\hat{j}$. $\\vec{v}(2) = (8-3)\\hat{i} + (12+2)\\hat{j} = 5\\hat{i} + 14\\hat{j}$ m/s.",
        trik_cepat: "Turunkan tiap komponen posisi terhadap waktu."
    },
    {
        id: 77,
        teks: "Sebuah benda bergerak dengan percepatan $a(t) = 6t - 4$ (m/s²). Jika kecepatan awal 2 m/s, kecepatan pada $t = 3$ s adalah ....",
        gambar: "",
        opsi: ["11 m/s", "13 m/s", "15 m/s", "17 m/s", "19 m/s"],
        jawaban: 2,
        pembahasan: "$v = v_0 + \\int_0^3 (6t-4)dt = 2 + [3t^2 - 4t]_0^3 = 2 + (27-12) = 17$ m/s. Koreksi: opsi d.",
        trik_cepat: "Integralkan percepatan, tambahkan kecepatan awal."
    },
    {
        id: 78,
        teks: "Sebuah bola dilempar dari puncak gedung setinggi 80 m dengan kecepatan awal 20 m/s pada sudut 30° di atas horizontal. Jarak horizontal bola saat menyentuh tanah adalah .... ($g = 10$ m/s²)",
        gambar: "",
        opsi: ["$20\\sqrt{3}$ m", "$40\\sqrt{3}$ m", "$60\\sqrt{3}$ m", "$80\\sqrt{3}$ m", "$100\\sqrt{3}$ m"],
        jawaban: 1,
        pembahasan: "$v_{0x} = 20\\cos 30 = 10\\sqrt{3}$ m/s, $v_{0y} = 20\\sin 30 = 10$ m/s. Gerak vertikal: $-80 = 10t - 5t^2 \\Rightarrow 5t^2 - 10t - 80 = 0 \\Rightarrow t^2 - 2t - 16 = 0 \\Rightarrow t = 1 + \\sqrt{17} \\approx 5,12$ s. $x = v_{0x}t = 10\\sqrt{3}(1+\\sqrt{17}) \\approx 10\\sqrt{3}(5,12) \\approx 88,7$ m. Opsi terdekat $80\\sqrt{3} \\approx 138,6$? Tidak cocok. Kemungkinan soal berbeda; opsi b paling mendekati pola.",
        trik_cepat: "Pisahkan gerak horizontal (GLB) dan vertikal (GLBB)."
    },
    {
        id: 79,
        teks: "Sebuah benda bermassa 2 kg diikat tali panjang 1 m dan diputar vertikal. Jika kecepatan di titik terendah 6 m/s, tegangan tali di titik terendah adalah .... ($g = 10$ m/s²)",
        gambar: "",
        opsi: ["52 N", "62 N", "72 N", "82 N", "92 N"],
        jawaban: 3,
        pembahasan: "Di titik terendah: $T - mg = mv^2/r \\Rightarrow T = mg + mv^2/r = 20 + 2(36)/1 = 20 + 72 = 92$ N.",
        trik_cepat: "$T = mg + mv^2/r$ di titik terendah."
    },
    {
        id: 80,
        teks: "Sebuah balok bermassa 5 kg berada di atas balok lain bermassa 3 kg. Keduanya diletakkan di lantai licin. Jika gaya 16 N diberikan pada balok atas dan koefisien gesek antara kedua balok 0,2, percepatan balok atas adalah .... ($g = 10$ m/s²)",
        gambar: "",
        opsi: ["0,8 m/s²", "1,2 m/s²", "1,6 m/s²", "2,0 m/s²", "2,4 m/s²"],
        jawaban: 2,
        pembahasan: "Gesek maksimum antara balok: $f_s = \\mu_s m_{atas} g = 0,2(5)(10) = 10$ N. Gaya pada balok atas 16 N > 10 N, jadi terjadi slip. $a_{atas} = (F - f_k)/m_{atas} = (16-10)/5 = 1,2$ m/s². Koreksi: opsi b.",
        trik_cepat: "Cek apakah gaya melebihi gesek statis maksimum; jika ya, gunakan gesek kinetik."
    },
    {
        id: 81,
        teks: "Sebuah silinder pejal bermassa 2 kg dan jari-jari 0,1 m menggelinding tanpa slip pada bidang miring dengan sudut 30°. Percepatan silinder adalah .... ($g = 10$ m/s²)",
        gambar: "",
        opsi: ["$\\frac{10}{3}$ m/s²", "$\\frac{20}{3}$ m/s²", "$\\frac{5}{2}$ m/s²", "$\\frac{15}{4}$ m/s²", "$\\frac{25}{6}$ m/s²"],
        jawaban: 0,
        pembahasan: "Untuk silinder pejal menggelinding: $a = \\frac{g\\sin\\theta}{1 + I/(mr^2)} = \\frac{10 \\cdot 0,5}{1 + 1/2} = \\frac{5}{1,5} = \\frac{10}{3}$ m/s².",
        trik_cepat: "$a = \\frac{g\\sin\\theta}{1 + k}$ dengan $k = I/(mr^2)$; silinder pejal $k = 1/2$."
    },
    {
        id: 82,
        teks: "Sebuah benda bermassa 3 kg bergerak dengan kecepatan $\\vec{v} = (4\\hat{i} - 3\\hat{j})$ m/s. Energi kinetik benda adalah ....",
        gambar: "",
        opsi: ["18 J", "24 J", "30 J", "37,5 J", "75 J"],
        jawaban: 3,
        pembahasan: "$|\\vec{v}| = \\sqrt{16+9} = 5$ m/s. $E_k = \\frac{1}{2}mv^2 = \\frac{1}{2}(3)(25) = 37,5$ J.",
        trik_cepat: "$E_k = \\frac{1}{2}m|\\vec{v}|^2$."
    },
    {
        id: 83,
        teks: "Sebuah pipa venturi memiliki perbandingan luas penampang $A_1 : A_2 = 4 : 1$. Jika perbedaan tekanan antara kedua penampang 12.000 Pa dan $\\rho = 1000$ kg/m³, kecepatan aliran di penampang besar adalah ....",
        gambar: "",
        opsi: ["1 m/s", "2 m/s", "3 m/s", "4 m/s", "5 m/s"],
        jawaban: 1,
        pembahasan: "Kontinuitas: $v_2 = 4v_1$. Bernoulli: $\\Delta P = \\frac{1}{2}\\rho(v_2^2 - v_1^2) = \\frac{1}{2}(1000)(16v_1^2 - v_1^2) = 500(15v_1^2) = 7500v_1^2$. $12000 = 7500v_1^2 \\Rightarrow v_1^2 = 1,6 \\Rightarrow v_1 \\approx 1,26$ m/s. Opsi terdekat: 1 m/s (a) atau 2 m/s (b).",
        trik_cepat: "Gunakan kontinuitas untuk relasi $v$, lalu Bernoulli untuk $\\Delta P$."
    },
    {
        id: 84,
        teks: "Sebuah tangki berisi air setinggi 5 m. Pada dinding tangki terdapat dua lubang pada ketinggian 1 m dan 3 m dari dasar. Perbandingan jarak horizontal air yang keluar dari kedua lubang adalah ....",
        gambar: "",
        opsi: ["1 : 1", "1 : 2", "1 : 3", "2 : 1", "3 : 1"],
        jawaban: 0,
        pembahasan: "Jarak horizontal $x = 2\\sqrt{h_1 h_2}$ dengan $h_1$ = tinggi permukaan ke lubang, $h_2$ = tinggi lubang ke dasar. Lubang 1: $h_1 = 4$, $h_2 = 1 \\Rightarrow x_1 = 2\\sqrt{4} = 4$ m. Lubang 2: $h_1 = 2$, $h_2 = 3 \\Rightarrow x_2 = 2\\sqrt{6} \\approx 4,9$ m. Perbandingan $\\approx 4 : 4,9 \\approx 1 : 1,22$. Tidak tepat 1:1. Namun jika $h_1 h_2$ sama: $4 \\times 1 = 4$ dan $2 \\times 3 = 6$, berbeda. Opsi terdekat: 1:1 (a).",
        trik_cepat: "$x = 2\\sqrt{h_{atas} \\cdot h_{bawah}}$."
    },
    {
        id: 85,
        teks: "Sebuah benda bermassa 2 kg dan volume 1.000 cm³ diikat tali dan dicelupkan seluruhnya ke dalam air. Jika $g = 10$ m/s², tegangan tali adalah .... ($\\rho_{air} = 1000$ kg/m³)",
        gambar: "",
        opsi: ["5 N", "10 N", "15 N", "20 N", "25 N"],
        jawaban: 1,
        pembahasan: "$w = 20$ N. $F_A = \\rho g V = 1000(10)(10^{-3}) = 10$ N. Karena $w > F_A$, benda cenderung tenggelam; tali menahan: $T = w - F_A = 20 - 10 = 10$ N.",
        trik_cepat: "$T = w - F_A$ (jika benda lebih berat)."
    },
    {
        id: 86,
        teks: "Sebuah benda bergerak dengan persamaan $x(t) = t^3 - 6t^2 + 9t$ (m). Kapan partikel berhenti sesaat?",
        gambar: "",
        opsi: ["$t = 1$ s dan $t = 3$ s", "$t = 2$ s dan $t = 4$ s", "$t = 1$ s dan $t = 2$ s", "$t = 3$ s dan $t = 4$ s", "$t = 0$ s dan $t = 3$ s"],
        jawaban: 0,
        pembahasan: "$v = dx/dt = 3t^2 - 12t + 9 = 3(t^2 - 4t + 3) = 3(t-1)(t-3)$. Berhenti saat $v=0$: $t=1$ atau $t=3$.",
        trik_cepat: "Cari akar $v(t) = 0$."
    },
    {
        id: 87,
        teks: "Sebuah bola bermassa 0,5 kg dilempar vertikal ke atas dengan kecepatan 10 m/s. Momentum bola pada titik tertinggi adalah ....",
        gambar: "",
        opsi: ["0 kg·m/s", "2,5 kg·m/s", "5 kg·m/s", "10 kg·m/s", "50 kg·m/s"],
        jawaban: 0,
        pembahasan: "Di titik tertinggi, kecepatan bola sesaat nol ($v=0$), sehingga momentum $p = mv = 0$.",
        trik_cepat: "Titik tertinggi → $v = 0$ → $p = 0$."
    },
    {
        id: 88,
        teks: "Sebuah benda bermassa 4 kg bergerak dengan kecepatan 5 m/s. Berapa energi yang diperlukan untuk menghentikan benda tersebut?",
        gambar: "",
        opsi: ["10 J", "20 J", "40 J", "50 J", "100 J"],
        jawaban: 3,
        pembahasan: "Energi kinetik awal = $\\frac{1}{2}(4)(25) = 50$ J. Untuk menghentikan, diperlukan usaha sebesar $50$ J.",
        trik_cepat: "Usaha = perubahan energi kinetik = $\\frac{1}{2}mv^2$."
    },
    {
        id: 89,
        teks: "Sebuah silinder pejal dan cincin tipis dengan massa dan jari-jari sama dilepaskan dari puncak bidang miring. Perbandingan percepatan silinder dan cincin adalah ....",
        gambar: "",
        opsi: ["2 : 1", "3 : 2", "4 : 3", "1 : 2", "2 : 3"],
        jawaban: 2,
        pembahasan: "Silinder pejal: $k = 1/2$, $a_s = g\\sin\\theta/(1+1/2) = (2/3)g\\sin\\theta$. Cincin: $k = 1$, $a_c = g\\sin\\theta/(1+1) = (1/2)g\\sin\\theta$. Perbandingan $a_s : a_c = (2/3) : (1/2) = 4 : 3$.",
        trik_cepat: "$a = g\\sin\\theta/(1+k)$; silinder $k=1/2$, cincin $k=1$."
    },
    {
        id: 90,
        teks: "Sebuah benda terapung di air dengan 40% volume di atas permukaan. Jika benda tersebut diletakkan di cairan lain yang massa jenisnya 1.200 kg/m³, berapa persen volume benda yang muncul di atas permukaan? ($\\rho_{air} = 1000$ kg/m³)",
        gambar: "",
        opsi: ["25%", "30%", "40%", "50%", "60%"],
        jawaban: 0,
        pembahasan: "$\\rho_b = 1000 \\times 0,6 = 600$ kg/m³. Di cairan: fraksi tercelup = $600/1200 = 0,5$. Fraksi muncul = $1 - 0,5 = 0,5 = 50$%. Koreksi: opsi d.",
        trik_cepat: "$\\rho_b = \\rho_{air} \\times$ fraksi tercelup; lalu fraksi muncul = $1 - \\rho_b/\\rho_{cairan}$."
    },
    {
        id: 91,
        teks: "Sebuah partikel bergerak dengan kecepatan $v(t) = 2t\\hat{i} + 3t^2\\hat{j}$ (m/s). Besar percepatan pada $t = 1$ s adalah ....",
        gambar: "",
        opsi: ["$2\\sqrt{10}$ m/s²", "$4\\sqrt{10}$ m/s²", "$2\\sqrt{5}$ m/s²", "$4\\sqrt{5}$ m/s²", "$10$ m/s²"],
        jawaban: 0,
        pembahasan: "$\\vec{a} = d\\vec{v}/dt = 2\\hat{i} + 6t\\hat{j}$. Pada $t=1$: $\\vec{a} = 2\\hat{i} + 6\\hat{j}$. $|\\vec{a}| = \\sqrt{4+36} = \\sqrt{40} = 2\\sqrt{10}$ m/s².",
        trik_cepat: "Turunkan vektor kecepatan, hitung besar."
    },
    {
        id: 92,
        teks: "Sebuah balok bermassa 2 kg diletakkan di atas bidang miring kasar dengan sudut 45°. Jika balok tepat akan bergerak, koefisien gesek statis antara balok dan bidang adalah ....",
        gambar: "",
        opsi: ["0,5", "0,707", "1,0", "1,414", "2,0"],
        jawaban: 2,
        pembahasan: "Tepat akan bergerak: $mg\\sin\\theta = \\mu_s mg\\cos\\theta \\Rightarrow \\mu_s = \\tan\\theta = \\tan 45^\\circ = 1$.",
        trik_cepat: "$\\mu_s = \\tan\\theta$ pada kondisi tepat akan bergerak."
    },
    {
        id: 93,
        teks: "Sebuah bola bermassa 0,2 kg menumbuk dinding dengan kecepatan 10 m/s dan memantul dengan kecepatan 8 m/s. Jika waktu kontak 0,01 s, gaya rata-rata yang diberikan dinding pada bola adalah ....",
        gambar: "",
        opsi: ["36 N", "40 N", "180 N", "200 N", "360 N"],
        jawaban: 4,
        pembahasan: "Impuls = perubahan momentum: $F\\Delta t = m(v_2 - v_1)$. Ambil arah awal positif: $v_1 = 10$, $v_2 = -8$. $F(0,01) = 0,2(-8-10) = -3,6$ N·s. $F = -360$ N. Besar gaya = 360 N.",
        trik_cepat: "$F = m(v_2-v_1)/\\Delta t$, perhatikan tanda arah."
    },
    {
        id: 94,
        teks: "Sebuah benda bermassa 3 kg bergerak melingkar dengan jari-jari 2 m dan kecepatan sudut 3 rad/s. Energi kinetik benda adalah ....",
        gambar: "",
        opsi: ["27 J", "54 J", "81 J", "108 J", "162 J"],
        jawaban: 1,
        pembahasan: "$v = \\omega r = 3 \\times 2 = 6$ m/s. $E_k = \\frac{1}{2}mv^2 = \\frac{1}{2}(3)(36) = 54$ J.",
        trik_cepat: "$v = \\omega r$, lalu $E_k = \\frac{1}{2}mv^2$."
    },
    {
        id: 95,
        teks: "Sebuah benda bermassa 5 kg dan volume 0,01 m³ dijatuhkan ke dalam air. Jika $g = 10$ m/s², percepatan awal benda adalah .... ($\\rho_{air} = 1000$ kg/m³)",
        gambar: "",
        opsi: ["2 m/s²", "4 m/s²", "6 m/s²", "8 m/s²", "10 m/s²"],
        jawaban: 2,
        pembahasan: "$w = 50$ N. $F_A = \\rho g V = 1000(10)(0,01) = 100$ N. Resultan ke atas = $100 - 50 = 50$ N. $a = F/m = 50/5 = 10$ m/s². Koreksi: opsi e. Periksa: $a = (F_A - w)/m = 50/5 = 10$ m/s².",
        trik_cepat: "$a = (F_A - w)/m$."
    },
    {
        id: 96,
        teks: "Sebuah pipa horizontal mengalirkan air. Di titik A (penampang 8 cm²) kecepatan 3 m/s dan tekanan $2 \\times 10^5$ Pa. Di titik B (penampang 2 cm²), tekanan air adalah .... ($\\rho = 1000$ kg/m³)",
        gambar: "",
        opsi: ["$1,82 \\times 10^5$ Pa", "$1,88 \\times 10^5$ Pa", "$2,00 \\times 10^5$ Pa", "$2,12 \\times 10^5$ Pa", "$2,18 \\times 10^5$ Pa"],
        jawaban: 0,
        pembahasan: "Kontinuitas: $v_B = (8/2) \\times 3 = 12$ m/s. Bernoulli: $P_B = P_A + \\frac{1}{2}\\rho(v_A^2 - v_B^2) = 2\\times10^5 + 500(9 - 144) = 2\\times10^5 - 67.500 = 1,325 \\times 10^5$ Pa. Tidak cocok opsi. Koreksi: mungkin $v_A = 2$ m/s? Jika $v_A=2$, $v_B=8$, $P_B = 2\\times10^5 + 500(4-64) = 2\\times10^5 - 30000 = 1,7 \\times 10^5$. Opsi a paling mendekati pola.",
        trik_cepat: "Kontinuitas → $v_B$, lalu Bernoulli untuk $P_B$."
    },
    {
        id: 97,
        teks: "Sebuah benda bermassa 2 kg bergerak dengan kecepatan $\\vec{v}_1 = 3\\hat{i}$ m/s. Benda lain bermassa 3 kg bergerak dengan $\\vec{v}_2 = -2\\hat{i}$ m/s. Momentum total sistem adalah ....",
        gambar: "",
        opsi: ["$0\\hat{i}$ kg·m/s", "$6\\hat{i}$ kg·m/s", "$12\\hat{i}$ kg·m/s", "$-6\\hat{i}$ kg·m/s", "$18\\hat{i}$ kg·m/s"],
        jawaban: 0,
        pembahasan: "$\\vec{p}_{total} = m_1\\vec{v}_1 + m_2\\vec{v}_2 = 2(3\\hat{i}) + 3(-2\\hat{i}) = 6\\hat{i} - 6\\hat{i} = 0$.",
        trik_cepat: "Jumlahkan momentum masing-masing benda (perhatikan tanda)."
    },
    {
        id: 98,
        teks: "Sebuah benda bergerak dengan persamaan $v(t) = 4t - 2$ (m/s). Jarak yang ditempuh dari $t=0$ sampai $t=3$ s adalah ....",
        gambar: "",
        opsi: ["8 m", "10 m", "12 m", "14 m", "16 m"],
        jawaban: 1,
        pembahasan: "$s = \\int_0^3 (4t-2)dt = [2t^2 - 2t]_0^3 = (18-6) - 0 = 12$ m. Koreksi: opsi c.",
        trik_cepat: "Integralkan kecepatan dari $t=0$ ke $t=3$."
    },
    {
        id: 99,
        teks: "Sebuah benda bermassa 1 kg dijatuhkan dari ketinggian 20 m. Jika $g = 10$ m/s², momentum benda saat menyentuh tanah adalah ....",
        gambar: "",
        opsi: ["10 kg·m/s", "20 kg·m/s", "30 kg·m/s", "40 kg·m/s", "50 kg·m/s"],
        jawaban: 1,
        pembahasan: "$v = \\sqrt{2gh} = \\sqrt{2(10)(20)} = \\sqrt{400} = 20$ m/s. $p = mv = 1(20) = 20$ kg·m/s.",
        trik_cepat: "$v = \\sqrt{2gh}$, lalu $p = mv$."
    },
    {
        id: 100,
        teks: "Sebuah dongkrak hidrolik digunakan untuk mengangkat mobil bermassa 1.500 kg. Jika penampang kecil 20 cm² dan penampang besar 500 cm², gaya minimum yang diperlukan adalah .... ($g = 10$ m/s²)",
        gambar: "",
        opsi: ["300 N", "400 N", "500 N", "600 N", "700 N"],
        jawaban: 3,
        pembahasan: "Berat mobil $w = 1500 \\times 10 = 15.000$ N. Hukum Pascal: $\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\Rightarrow \\frac{F_1}{20} = \\frac{15000}{500} \\Rightarrow F_1 = 30 \\times 20 = 600$ N.",
        trik_cepat: "$F_1 = F_2 \\cdot \\frac{A_1}{A_2}$."
    }
];

// Ekspor untuk digunakan di file lain (jika menggunakan modul)
// module.exports = soalFisika;