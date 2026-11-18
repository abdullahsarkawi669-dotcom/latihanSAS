// File: soal_matematika_lanjut.js
// Total: 125 Soal (Terurut per Bab dari Level Mudah ke HOTS, Kunci Merata, Wrap Mobile-Friendly)
const soalMatematikaLanjut = [
    // ==================== A. MATRIKS (49 SOAL) ====================
    // --- Level 1: Dasar (Jenis, Ordo, & Elemen Matriks) ---
    {
        id: 1,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$. Matriks $A$ disebut ....",
        gambar: "",
        opsi: ["Matriks identitas", "Matriks nol", "Matriks diagonal", "Matriks skalar", "Matriks transpose"],
        jawaban: 0,
        pembahasan: "Matriks persegi dengan elemen diagonal utama bernilai 1 dan elemen lainnya 0 disebut matriks identitas (ordo 2×2).",
        trik_cepat: "Diagonal utama 1, lainnya 0 → identitas."
    },
    {
        id: 2,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$. Matriks $A$ disebut ....",
        gambar: "",
        opsi: ["Matriks identitas", "Matriks nol", "Matriks diagonal", "Matriks skalar", "Matriks transpose"],
        jawaban: 1,
        pembahasan: "Matriks yang seluruh elemennya bernilai 0 disebut matriks nol.",
        trik_cepat: "Semua elemen 0 → matriks nol."
    },
    {
        id: 3,
        teks: "Diketahui $A_{3 \\times 3} = (a_{ij})$ dengan $a_{ij} = 1$ untuk $i = j$ dan $a_{ij} = 0$ untuk $i \\neq j$. Pernyataan yang **tidak tepat** adalah ....",
        gambar: "",
        opsi: ["A matriks segitiga atas", "A matriks segitiga bawah", "A matriks nol", "A matriks skalar", "A matriks identitas"],
        jawaban: 2,
        pembahasan: "Matriks tersebut adalah matriks identitas (sekaligus segitiga atas, segitiga bawah, dan skalar).\nMatriks ini bukan matriks nol karena elemen diagonalnya 1.",
        trik_cepat: "Matriks identitas bukan matriks nol."
    },
    {
        id: 4,
        teks: "Amati matriks berikut!\n$M = \\begin{pmatrix} -2 & 3 \\\\ 1 & 8 \\\\ 7 & -5 \\end{pmatrix}$\nPernyataan berikut yang sesuai dengan matriks $M$ adalah ....",
        gambar: "",
        opsi: ["matriks M terdiri atas 3 kolom", "ordo matriks M adalah 2 × 3", "matriks M merupakan matriks persegi", "elemen baris ketiga kolom kedua ditempati angka -5", "hasil penjumlahan semua elemen baris ke-1 adalah 5"],
        jawaban: 3,
        pembahasan: "Matriks M memiliki 3 baris dan 2 kolom (ordo 3 × 2).\nBaris ke-3 kolom ke-2 ditempati oleh angka -5.",
        trik_cepat: "Cek ordo (baris × kolom) dan posisi elemen."
    },
    {
        id: 5,
        teks: "Diketahui matriks $P = \\begin{pmatrix} -4 & -2 & -4 \\\\ 4 & -5 & 6 \\\\ 6 & 10 & 3 \\end{pmatrix}$. Pernyataan berikut yang **tidak benar** adalah ....",
        gambar: "",
        opsi: ["-5 adalah elemen baris ke-2 dan kolom ke-2", "10 adalah elemen baris ke-3 dan kolom ke-2", "6 adalah elemen baris ke-2 dan kolom ke-3", "-2 adalah elemen baris ke-1 dan kolom ke-2", "-4 adalah elemen baris ke-2 dan kolom ke-1"],
        jawaban: 4,
        pembahasan: "Pada matriks P, elemen baris ke-2 kolom ke-1 adalah 4, bukan -4.\nJadi pernyataan terakhir tidak benar.",
        trik_cepat: "Cek posisi (baris, kolom) satu per satu."
    },
    {
        id: 6,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 4 & -2 & 1 & -1 & 0 \\\\ 1 & 3 & -2 & 3 & 2 \\\\ 3 & 2 & 1 & 5 & -8 \\end{pmatrix}$. Jika $a_{ij}$ menyatakan elemen matriks $A$ pada baris ke-$i$ dan kolom ke-$j$, nilai $a_{12} + a_{23}$ adalah ....",
        gambar: "",
        opsi: ["-4", "-2", "2", "4", "6"],
        jawaban: 0,
        pembahasan: "• $a_{12} = -2$ (baris 1, kolom 2)\n• $a_{23} = -2$ (baris 2, kolom 3)\nJumlah = $-2 + (-2) = -4$.",
        trik_cepat: "Baca posisi (baris, kolom): $a_{12} = -2$, $a_{23} = -2$."
    },

    // --- Level 2: Transpose, Penjumlahan, & Pengurangan Matriks ---
    {
        id: 7,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$. Nilai $A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 4 \\\\ 3 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 1 \\\\ 3 & 2 \\end{pmatrix}$"],
        jawaban: 1,
        pembahasan: "Transpose menukar baris menjadi kolom:\n$A^T = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$.",
        trik_cepat: "Tukar baris $i$ dengan kolom $i$."
    },
    {
        id: 8,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 4 & -1 \\\\ 2 & 3 \\end{pmatrix}$. Nilai $A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 4 & -1 \\\\ 2 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 2 \\\\ -1 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 2 \\\\ 1 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} -4 & -2 \\\\ 1 & -3 \\end{pmatrix}$"],
        jawaban: 2,
        pembahasan: "Baris pertama menjadi kolom pertama dan baris kedua menjadi kolom kedua:\n$A^T = \\begin{pmatrix} 4 & 2 \\\\ -1 & 3 \\end{pmatrix}$.",
        trik_cepat: "Tukar baris dan kolom."
    },
    {
        id: 9,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}$. Hasil $A + B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 3 & 3 \\\\ 7 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 3 \\\\ 6 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 7 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 3 \\\\ 7 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 2 \\\\ 7 & 7 \\end{pmatrix}$"],
        jawaban: 3,
        pembahasan: "$A+B = \\begin{pmatrix} 1+2 & 2+1 \\\\ 3+4 & 4+3 \\end{pmatrix}$\n$= \\begin{pmatrix} 3 & 3 \\\\ 7 & 7 \\end{pmatrix}$.",
        trik_cepat: "Jumlahkan elemen seposisi."
    },
    {
        id: 10,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$. Hasil $A - B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} -1 & 2 \\\\ 1 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & -2 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & -2 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & 2 \\\\ 2 & 1 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$A-B = \\begin{pmatrix} 1-2 & 2-0 \\\\ 3-1 & 4-3 \\end{pmatrix}$\n$= \\begin{pmatrix} -1 & 2 \\\\ 2 & 1 \\end{pmatrix}$.",
        trik_cepat: "Kurangkan elemen seposisi."
    },
    {
        id: 11,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Nilai $A + A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 5 \\\\ 5 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 5 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 5 \\\\ 3 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 5 \\\\ 5 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 5 \\\\ 5 & 4 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$A^T = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$\n$A+A^T = \\begin{pmatrix} 1+1 & 2+3 \\\\ 3+2 & 4+4 \\end{pmatrix} = \\begin{pmatrix} 2 & 5 \\\\ 5 & 8 \\end{pmatrix}$.",
        trik_cepat: "Jumlahkan matriks dengan transposenya."
    },
    {
        id: 12,
        teks: "Diketahui penjumlahan matriks $\\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix} + Z = \\begin{pmatrix} 6 & 2 \\\\ -2 & -2 \\end{pmatrix}$. Pernyataan berikut yang benar mengenai matriks $Z$ adalah ....",
        gambar: "",
        opsi: ["matriks Z berordo 2 × 3", "selisih $Z_{11}$ dengan $Z_{22}$ adalah 6", "jumlah elemen baris pertama Z adalah 4", "$Z_{11}$ merupakan kelipatan dari $Z_{21}$", "diagonal utama matriks Z adalah 1 dan 3"],
        jawaban: 1,
        pembahasan: "$Z = \\begin{pmatrix} 6-1 & 2-1 \\\\ -2-1 & -2-(-1) \\end{pmatrix} = \\begin{pmatrix} 5 & 1 \\\\ -3 & -1 \\end{pmatrix}$\nSelisih $Z_{11} - Z_{22} = 5 - (-1) = 6$.",
        trik_cepat: "Hitung matriks Z terlebih dahulu."
    },
    {
        id: 13,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 5 \\\\ 7 & 3 \\end{pmatrix}$ dan $B = \\begin{pmatrix} -1 & 3 \\\\ 5 & 2 \\end{pmatrix}$. Hasil dari $2A - 5B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 9 & 5 \\\\ -11 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} -9 & -5 \\\\ 11 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & -5 \\\\ -11 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & -5 \\\\ 11 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} -9 & 5 \\\\ -11 & 4 \\end{pmatrix}$"],
        jawaban: 2,
        pembahasan: "$2A = \\begin{pmatrix} 4 & 10 \\\\ 14 & 6 \\end{pmatrix}$ dan $5B = \\begin{pmatrix} -5 & 15 \\\\ 25 & 10 \\end{pmatrix}$\n$2A - 5B = \\begin{pmatrix} 9 & -5 \\\\ -11 & -4 \\end{pmatrix}$.",
        trik_cepat: "Kalikan skalar dulu, lalu kurangkan."
    },
    {
        id: 14,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 5 & -5 \\end{pmatrix}$, $B = \\begin{pmatrix} 0 & -2 \\\\ 1 & 4 \\end{pmatrix}$, dan $C = \\begin{pmatrix} -1 & 1 \\\\ 1 & 0 \\end{pmatrix}$. Hasil dari $A + 2B - C$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & -1 \\\\ 0 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 3 \\\\ 0 & -3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -2 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -2 \\\\ 6 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} -3 & 2 \\\\ -1 & 0 \\end{pmatrix}$"],
        jawaban: 3,
        pembahasan: "$2B = \\begin{pmatrix} 0 & -4 \\\\ 2 & 8 \\end{pmatrix}$\n$A + 2B = \\begin{pmatrix} 2 & -1 \\\\ 7 & 3 \\end{pmatrix}$\nKurangi $C$: $\\begin{pmatrix} 3 & -2 \\\\ 6 & 3 \\end{pmatrix}$.",
        trik_cepat: "Hitung $2B$ dulu, lalu jumlah dan kurangkan."
    },
    {
        id: 15,
        teks: "Diketahui matriks $P = \\begin{pmatrix} -2 & 4 & 6 \\\\ -6 & -4 & 2 \\end{pmatrix}$ dan $Q = \\begin{pmatrix} -4 & 0 & -8 \\\\ 1 & -4 & -2 \\end{pmatrix}$. Jika $2R = 4(P + Q)$, matriks $R$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} -12 & 8 & 4 \\\\ -10 & 16 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 12 & 8 & 4 \\\\ -10 & -16 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} -12 & -8 & -4 \\\\ -10 & -16 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} -12 & 8 & -4 \\\\ 10 & -16 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} -12 & 8 & -4 \\\\ -10 & -16 & 0 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$2R = 4(P+Q) \\Rightarrow R = 2(P+Q)$\n$P+Q = \\begin{pmatrix} -6 & 4 & -2 \\\\ -5 & -8 & 0 \\end{pmatrix}$\n$R = \\begin{pmatrix} -12 & 8 & -4 \\\\ -10 & -16 & 0 \\end{pmatrix}$.",
        trik_cepat: "Bagi kedua ruas dengan 2, $R = 2(P+Q)$."
    },

    // --- Level 3: Perkalian Matriks, Determinan 2x2, & Invers 2x2 ---
    {
        id: 16,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["5", "6", "7", "8", "11"],
        jawaban: 0,
        pembahasan: "$\\det(A) = (2)(4) - (3)(1)$\n$= 8 - 3 = 5$.",
        trik_cepat: "$\\det = ad - bc$."
    },
    {
        id: 17,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["6", "10", "8", "12", "14"],
        jawaban: 1,
        pembahasan: "$\\det(A) = 3(4) - 1(2)$\n$= 12 - 2 = 10$.",
        trik_cepat: "$\\det = ad - bc$."
    },
    {
        id: 18,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["6", "9", "8", "10", "12"],
        jawaban: 2,
        pembahasan: "$\\det(A) = 3(3) - 1(1)$\n$= 9 - 1 = 8$.",
        trik_cepat: "$\\det = ad - bc$."
    },
    {
        id: 19,
        teks: "Jika $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 1 & 0 \\\\ 2 & 3 \\end{pmatrix}$, hasil $A \\cdot B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 4 & 3 \\\\ 10 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 4 \\\\ 12 & 11 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 2 \\\\ 11 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 11 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 11 & 12 \\end{pmatrix}$"],
        jawaban: 3,
        pembahasan: "• $(1,1): 2(1)+1(2) = 4$\n• $(1,2): 2(0)+1(3) = 3$\n• $(2,1): 3(1)+4(2) = 11$\n• $(2,2): 3(0)+4(3) = 12$",
        trik_cepat: "Kalikan baris × kolom."
    },
    {
        id: 20,
        teks: "Hasil dari $\\begin{pmatrix} 3 & 2 \\\\ 5 & -7 \\end{pmatrix} \\begin{pmatrix} 3 & 2 \\\\ 4 & 3 \\end{pmatrix}$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} -1 & -20 \\\\ 14 & -3 \\end{pmatrix}$", "$\\begin{pmatrix} 13 & -8 \\\\ 2 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 15 \\\\ 18 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & -15 \\\\ 7 & -8 \\end{pmatrix}$", "$\\begin{pmatrix} 17 & 12 \\\\ -13 & -11 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "• $(1,1): 3(3)+2(4) = 17$\n• $(1,2): 3(2)+2(3) = 12$\n• $(2,1): 5(3)+(-7)(4) = -13$\n• $(2,2): 5(2)+(-7)(3) = -11$",
        trik_cepat: "Kalikan baris × kolom."
    },
    {
        id: 21,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$. Hasil $A \\cdot B^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 7 \\\\ 6 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 6 \\\\ 7 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 7 \\\\ 6 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 7 \\\\ 6 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 7 \\\\ 6 & 15 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$B^T = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$\n$A \\cdot B^T = \\begin{pmatrix} 2+0 & 1+6 \\\\ 6+0 & 3+12 \\end{pmatrix} = \\begin{pmatrix} 2 & 7 \\\\ 6 & 15 \\end{pmatrix}$.",
        trik_cepat: "Transpose dulu $B$, lalu kalikan."
    },
    {
        id: 22,
        teks: "Jika $A = \\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}$, maka $A^2$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 7 & 7 \\\\ 14 & 14 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & -7 \\\\ 14 & 14 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & -7 \\\\ -14 & 14 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & -7 \\\\ 14 & -14 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & 1 \\\\ 4 & 16 \\end{pmatrix}$"],
        jawaban: 1,
        pembahasan: "$A^2 = \\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}\\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}$\n$= \\begin{pmatrix} 9-2 & -3-4 \\\\ 6+8 & -2+16 \\end{pmatrix} = \\begin{pmatrix} 7 & -7 \\\\ 14 & 14 \\end{pmatrix}$.",
        trik_cepat: "Kalikan matriks dengan dirinya sendiri."
    },
    {
        id: 23,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}$. Nilai $A^{-1}$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & 3 \\\\ 1 & -2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & -1 \\\\ -3 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & -3 \\\\ -1 & -2 \\end{pmatrix}$"],
        jawaban: 2,
        pembahasan: "$\\det(A) = 4 - 3 = 1$\n$A^{-1} = \\frac{1}{1}\\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix} = \\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$.",
        trik_cepat: "$\\det = 1$, tukar diagonal utama & beri minus diagonal lain."
    },
    {
        id: 24,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$. Invers matriks $A$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{5}\\begin{pmatrix} 4 & 1 \\\\ 3 & 2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} -4 & 1 \\\\ 3 & -2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} 4 & -1 \\\\ 3 & 2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} 4 & -1 \\\\ -3 & 2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} -4 & -1 \\\\ -3 & -2 \\end{pmatrix}$"],
        jawaban: 3,
        pembahasan: "$\\det(A) = 8 - 3 = 5$\n$A^{-1} = \\frac{1}{5}\\begin{pmatrix} 4 & -1 \\\\ -3 & 2 \\end{pmatrix}$.",
        trik_cepat: "$A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$."
    },
    {
        id: 25,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix}$. Invers matriks $A$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{7}\\begin{pmatrix} 3 & -1 \\\\ 1 & 2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} -3 & 1 \\\\ -1 & -2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} 3 & 1 \\\\ 1 & 2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} -3 & -1 \\\\ 1 & -2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} 3 & 1 \\\\ -1 & 2 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$\\det(A) = 2(3) - (-1)(1) = 7$\n$A^{-1} = \\frac{1}{7}\\begin{pmatrix} 3 & 1 \\\\ -1 & 2 \\end{pmatrix}$.",
        trik_cepat: "$A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$."
    },

    // --- Level 4: Persamaan Matriks, Sifat Invers, & Matriks 3x3 ---
    {
        id: 26,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2p-1 & 2q+3 \\\\ 5 & 7 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 11 & -9 \\\\ 2r+1 & 7 \\end{pmatrix}$. Jika $A = B$, pernyataan yang benar adalah ....",
        gambar: "",
        opsi: ["r adalah bilangan prima genap", "nilai p sama dengan q", "p kebalikan dari q", "r bilangan ganjil", "nilai p + q + r = 4"],
        jawaban: 0,
        pembahasan: "• $2p - 1 = 11 \\Rightarrow p = 6$\n• $2q + 3 = -9 \\Rightarrow q = -6$\n• $2r + 1 = 5 \\Rightarrow r = 2$\nBilangan 2 adalah bilangan prima genap.",
        trik_cepat: "Samakan elemen seposisi, cari p, q, r."
    },
    {
        id: 27,
        teks: "Diketahui $A = \\begin{pmatrix} a & 2 \\\\ -2 & a \\end{pmatrix}$ dan $4A + 2A^T = \\begin{pmatrix} 6 & 4 \\\\ -4 & 6 \\end{pmatrix}$. Nilai $a$ adalah ....",
        gambar: "",
        opsi: ["-2", "1", "-1", "0", "2"],
        jawaban: 1,
        pembahasan: "$A^T = \\begin{pmatrix} a & -2 \\\\ 2 & a \\end{pmatrix}$\n$4A + 2A^T = \\begin{pmatrix} 6a & 4 \\\\ -4 & 6a \\end{pmatrix}$\nMaka $6a = 6 \\Rightarrow a = 1$.",
        trik_cepat: "Jumlahkan, samakan elemen diagonal."
    },
    {
        id: 28,
        teks: "Diketahui $\\begin{pmatrix} 2a & 7 \\\\ b & 6 \\end{pmatrix} + \\begin{pmatrix} 5 & -3 \\\\ 3c & 2b \\end{pmatrix} = \\begin{pmatrix} 15 & 4 \\\\ a & a-1 \\end{pmatrix}$. Nilai dari $a - 2b - c = ....$",
        gambar: "",
        opsi: ["-9", "-5", "5", "-1", "1"],
        jawaban: 2,
        pembahasan: "• $2a + 5 = 15 \\Rightarrow a = 5$\n• $6 + 2b = 5 - 1 \\Rightarrow b = -1$\n• $-1 + 3c = 5 \\Rightarrow c = 2$\nHasil: $5 - 2(-1) - 2 = 5$.",
        trik_cepat: "Samakan elemen seposisi secara berurutan."
    },
    {
        id: 29,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 3 & -1 \\\\ 2m & -3 \\end{pmatrix}$, $B = \\begin{pmatrix} n+1 & 3 \\\\ m-n & 0 \\end{pmatrix}$, dan $C = \\begin{pmatrix} 5 & -4 \\\\ 2 & -3 \\end{pmatrix}$. Jika $C^t$ adalah transpos $C$ dan $A + B = C^t$, nilai $3m + 2n$ adalah ....",
        gambar: "",
        opsi: ["-25", "-14", "-11", "-1", "-7"],
        jawaban: 3,
        pembahasan: "$C^t = \\begin{pmatrix} 5 & 2 \\\\ -4 & -3 \\end{pmatrix}$\n• $3 + n + 1 = 5 \\Rightarrow n = 1$\n• $3m - n = -4 \\Rightarrow 3m - 1 = -4 \\Rightarrow m = -1$\nNilai $3(-1) + 2(1) = -1$.",
        trik_cepat: "Samakan elemen, selesaikan sistem."
    },
    {
        id: 30,
        teks: "Diketahui $A = \\begin{pmatrix} 1 & 4 \\\\ 3 & -2 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & -2 \\\\ 4 & 0 \\end{pmatrix}$. Jika $A^2 + C = AB$, matriks $C$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 5 & 2 \\\\ 1 & 22 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & -2 \\\\ -1 & 22 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & -6 \\\\ -5 & 10 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 6 \\\\ -5 & -10 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 2 \\\\ 1 & -22 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$A^2 = \\begin{pmatrix} 13 & -4 \\\\ -3 & 16 \\end{pmatrix}$\n$AB = \\begin{pmatrix} 18 & -2 \\\\ -2 & -6 \\end{pmatrix}$\n$C = AB - A^2 = \\begin{pmatrix} 5 & 2 \\\\ 1 & -22 \\end{pmatrix}$.",
        trik_cepat: "Gunakan $C = AB - A^2$."
    },
    {
        id: 31,
        teks: "Matriks $X$ berordo $3 \\times 3$ memenuhi persamaan:\n$\\begin{pmatrix} 4 & -7 & -5 \\\\ 3 & 2 & -1 \\\\ 4 & 2 & 1 \\end{pmatrix} - \\frac{1}{2}X = \\begin{pmatrix} 3 & 4 & 4 \\\\ -1 & 2 & 1 \\\\ 0 & 4 & 0 \\end{pmatrix}$\nPernyataan yang benar ditunjukkan oleh nomor ....\n(1) $x_{11} = x_{33}$, $x_{21} = x_{31}$, dan $x_{23} = x_{32}$\n(2) $x_{11}$ faktor dari $x_{21}$\n(3) $x_{12} < x_{13}$\n(4) $x_{13} + x_{22} + x_{31} = 10$",
        gambar: "",
        opsi: ["(1), (2), dan (3)", "(1), (2), dan (4)", "(1), (3), dan (4)", "(2), (3), dan (4)", "(1), (2), (3), dan (4)"],
        jawaban: 0,
        pembahasan: "$\\frac{1}{2}X = \\begin{pmatrix} 1 & -11 & -9 \\\\ 4 & 0 & -2 \\\\ 4 & -2 & 1 \\end{pmatrix}$\n$X = \\begin{pmatrix} 2 & -22 & -18 \\\\ 8 & 0 & -4 \\\\ 8 & -4 & 2 \\end{pmatrix}$\nPernyataan (1), (2), (3) benar; (4) salah karena $-18+0+8 = -10$.",
        trik_cepat: "Hitung matriks X, lalu cek tiap pernyataan."
    },
    {
        id: 32,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 5+x & x \\\\ 5 & 3x \\end{pmatrix}$ dan $B = \\begin{pmatrix} 9-x & -11 \\\\ x & 4 \\end{pmatrix}$. Jika $|A| = |B|$, nilai $x$ yang memenuhi adalah ....",
        gambar: "",
        opsi: ["3 atau 4", "3 atau -4", "-3 atau 4", "-4 atau 5", "3 atau -5"],
        jawaban: 1,
        pembahasan: "$|A| = 3x(5+x) - 5x = 3x^2 + 10x$\n$|B| = 4(9-x) - (-11x) = 36 + 7x$\n$3x^2 + 3x - 36 = 0 \\Rightarrow x^2 + x - 12 = 0$\n$(x - 3)(x + 4) = 0 \\Rightarrow x = 3$ atau $x = -4$.",
        trik_cepat: "Samakan determinan kedua matriks."
    },
    {
        id: 33,
        teks: "Jumlah akar-akar dari persamaan $\\begin{vmatrix} 2x-1 & 2 \\\\ x+2 & x+2 \\end{vmatrix} = 0$ adalah ....",
        gambar: "",
        opsi: ["$-\\frac{7}{2}$", "0", "$-\\frac{1}{2}$", "$\\frac{1}{2}$", "$\\frac{7}{2}$"],
        jawaban: 2,
        pembahasan: "$(2x-1)(x+2) - 2(x+2) = 0$\n$(x+2)(2x-3) = 0 \\Rightarrow x_1 = -2, x_2 = \\frac{3}{2}$\nJumlah = $-2 + \\frac{3}{2} = -\\frac{1}{2}$.",
        trik_cepat: "Faktorkan $(x+2)$ keluar."
    },
    {
        id: 34,
        teks: "Matriks $A = \\begin{pmatrix} 3 & 1 \\\\ 5 & 2 \\end{pmatrix}$ dan $B = \\begin{pmatrix} -2 & -3 \\\\ 3 & 4 \\end{pmatrix}$. Matriks $(AB)^{-1}$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 11 & 8 \\\\ -29 & -21 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 4 \\\\ -5 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} -3 & 4 \\\\ 5 & -7 \\end{pmatrix}$", "$\\begin{pmatrix} -7 & 5 \\\\ 4 & -3 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & 5 \\\\ -4 & 3 \\end{pmatrix}$"],
        jawaban: 3,
        pembahasan: "$AB = \\begin{pmatrix} -3 & -5 \\\\ -4 & -7 \\end{pmatrix}$\n$\\det(AB) = 21 - 20 = 1$\n$(AB)^{-1} = \\begin{pmatrix} -7 & 5 \\\\ 4 & -3 \\end{pmatrix}$.",
        trik_cepat: "Hitung $AB$, lalu invers 2×2."
    },
    {
        id: 35,
        teks: "Jika matriks $P = \\begin{pmatrix} 2 & 3 \\\\ 4 & 5 \\end{pmatrix}$ dan $Q = \\begin{pmatrix} 6 & 4 \\\\ 3 & 1 \\end{pmatrix}$, matriks $X$ yang memenuhi kesamaan $PX = Q^t$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 9 & 6 \\\\ -8 & -5 \\end{pmatrix}$", "$\\begin{pmatrix} -9 & 6 \\\\ -8 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 18 & -12 \\\\ 16 & -10 \\end{pmatrix}$", "$\\begin{pmatrix} 18 & 12 \\\\ -16 & -10 \\end{pmatrix}$", "$\\begin{pmatrix} -9 & -6 \\\\ 8 & 5 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$Q^t = \\begin{pmatrix} 6 & 3 \\\\ 4 & 1 \\end{pmatrix}$, $P^{-1} = -\\frac{1}{2}\\begin{pmatrix} 5 & -3 \\\\ -4 & 2 \\end{pmatrix}$\n$X = P^{-1}Q^t = -\\frac{1}{2}\\begin{pmatrix} 18 & 12 \\\\ -16 & -10 \\end{pmatrix} = \\begin{pmatrix} -9 & -6 \\\\ 8 & 5 \\end{pmatrix}$.",
        trik_cepat: "Gunakan $X = P^{-1} Q^t$."
    },
    {
        id: 36,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 7 & -2 \\\\ -3 & 1 \\end{pmatrix}$, $B = \\begin{pmatrix} 1 & 2 \\\\ 3 & 7 \\end{pmatrix}$, dan $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$. Tentukan Benar atau Salah: Hasil operasi $BA = I$.",
        gambar: "",
        opsi: ["Benar", "Salah"],
        jawaban: 0,
        pembahasan: "$BA = \\begin{pmatrix} 1 & 2 \\\\ 3 & 7 \\end{pmatrix}\\begin{pmatrix} 7 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = I$.\nJadi pernyataan Benar.",
        trik_cepat: "Kalikan matriks B dan A."
    },
    {
        id: 37,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 7 & -2 \\\\ -3 & 1 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 1 & 2 \\\\ 3 & 7 \\end{pmatrix}$. Tentukan Benar atau Salah: Hasil dari $ABB = B$.",
        gambar: "",
        opsi: ["Benar", "Salah"],
        jawaban: 0,
        pembahasan: "Karena $AB = I$, maka $ABB = (AB)B = I \\cdot B = B$.\nJadi pernyataan Benar.",
        trik_cepat: "Gunakan sifat asosiatif."
    },
    {
        id: 38,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 7 & -2 \\\\ -3 & 1 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 1 & 2 \\\\ 3 & 7 \\end{pmatrix}$. Tentukan Benar atau Salah: Hasil dari $ABBA = A$.",
        gambar: "",
        opsi: ["Benar", "Salah"],
        jawaban: 1,
        pembahasan: "Karena $AB = I$ dan $BA = I$, maka $ABBA = (AB)(BA) = I \\cdot I = I \\neq A$.\nJadi pernyataan Salah.",
        trik_cepat: "Gunakan $AB=I$ dan $BA=I$."
    },
    {
        id: 39,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 3 & 0 \\\\ 1 & 0 & 1 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["-3", "-1", "1", "3", "9"],
        jawaban: 0,
        pembahasan: "Ekspansi baris kedua:\n$\\det(A) = 3 \\cdot \\det\\begin{pmatrix} 1 & 2 \\\\ 1 & 1 \\end{pmatrix}$\n$= 3(1 - 2) = -3$.",
        trik_cepat: "Ekspansi baris/kolom dengan nol terbanyak."
    },
    {
        id: 40,
        teks: "Jika matriks $H = \\begin{pmatrix} -1 & 3 & 4 \\\\ 2 & -2 & 1 \\\\ 0 & 3 & 3 \\end{pmatrix}$, kofaktor baris ke-2 dan kolom ke-3 dari matriks $H$ adalah ....",
        gambar: "",
        opsi: ["1", "3", "2", "4", "5"],
        jawaban: 1,
        pembahasan: "$C_{23} = (-1)^{2+3} M_{23}$\n$= -\\det\\begin{pmatrix} -1 & 3 \\\\ 0 & 3 \\end{pmatrix} = -(-3) = 3$.",
        trik_cepat: "Gunakan rumus kofaktor $(-1)^{i+j} M_{ij}$."
    },
    {
        id: 41,
        teks: "Adjoin matriks $A = \\begin{pmatrix} 2 & 0 & 3 \\\\ 1 & 4 & 5 \\\\ 0 & 2 & -1 \\end{pmatrix}$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix}-14 & 6 & -12 \\\\ -1 & -2 & -7 \\\\ 2 & 4 & -8 \\end{pmatrix}$", "$\\begin{pmatrix}-14 & -6 & -12 \\\\ -1 & 2 & 5 \\\\ -2 & 4 & 8 \\end{pmatrix}$", "$\\begin{pmatrix}-14 & 6 & -12 \\\\ 1 & -2 & -7 \\\\ 2 & -4 & 8 \\end{pmatrix}$", "$\\begin{pmatrix}-14 & 1 & 2 \\\\ -6 & -2 & 4 \\\\ 12 & 5 & 8 \\end{pmatrix}$", "$\\begin{pmatrix}-14 & 1 & -2 \\\\ 6 & 2 & 4 \\\\ 12 & -5 & -8 \\end{pmatrix}$"],
        jawaban: 2,
        pembahasan: "Kofaktor: $C_{11}=-14, C_{12}=1, C_{13}=2$, $C_{21}=6, C_{22}=-2, C_{23}=-4$, $C_{31}=-12, C_{32}=-7, C_{33}=8$.\nTranspose kofaktor menghasilkan adjoin pada opsi C.",
        trik_cepat: "Hitung kofaktor, lalu transpose."
    },
    {
        id: 42,
        teks: "Diketahui matriks $C = \\begin{pmatrix} 2 & 0 & 3 \\\\ 1 & 4 & 5 \\\\ 0 & 2 & -1 \\end{pmatrix}$. Misalkan $c_{ij}$ menyatakan elemen adjoin matriks $C$. Tentukan Benar atau Salah: Nilai dari $c_{11} + c_{33}$ dan $c_{12} + c_{13}$ sama besar.",
        gambar: "",
        opsi: ["Benar", "Salah"],
        jawaban: 0,
        pembahasan: "Dari adjoin C: $c_{11}=-14, c_{33}=8, c_{12}=6, c_{13}=-12$.\n$c_{11}+c_{33} = -6$ dan $c_{12}+c_{13} = -6$.\nKeduanya sama besar (Benar).",
        trik_cepat: "Hitung elemen adjoin yang diminta."
    },
    {
        id: 43,
        teks: "Diketahui matriks $C = \\begin{pmatrix} 2 & 0 & 3 \\\\ 1 & 4 & 5 \\\\ 0 & 2 & -1 \\end{pmatrix}$. Misalkan $c_{ij}$ menyatakan elemen adjoin matriks $C$. Tentukan Benar atau Salah: Hasil dari $c_{21} + c_{31}$ lebih dari 3.",
        gambar: "",
        opsi: ["Benar", "Salah"],
        jawaban: 1,
        pembahasan: "Dari adjoin C: $c_{21}=1$ dan $c_{31}=2$.\n$c_{21} + c_{31} = 1 + 2 = 3$ (tidak lebih dari 3).\nJadi pernyataan Salah.",
        trik_cepat: "Cek nilai elemen adjoin."
    },

    // --- Level 5: Nilai Eigen & Soal Cerita Aplikasi (HOTS) ---
    {
        id: 44,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$. Nilai eigen dari matriks $A$ adalah ....",
        gambar: "",
        opsi: ["2 dan 2", "0 dan 4", "1 dan 2", "1 dan 3", "3 dan 3"],
        jawaban: 3,
        pembahasan: "$\\det(A-\\lambda I) = (2-\\lambda)^2 - 1 = 0$\n$\\lambda^2 - 4\\lambda + 3 = 0 \\Rightarrow (\\lambda-1)(\\lambda-3)=0$\nNilai eigen: $\\lambda = 1$ dan $\\lambda = 3$.",
        trik_cepat: "Selesaikan $\\det(A-\\lambda I)=0$."
    },
    {
        id: 45,
        teks: "Lembaga amil zakat menerima donasi dalam matriks $D = \\begin{pmatrix} 10 & 5 \\\\ 8 & 12 \\end{pmatrix}$ (juta rupiah). Jika setiap donasi dikalikan 2,5 untuk program pendidikan, matriks hasilnya adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 20 & 10 \\\\ 16 & 24 \\end{pmatrix}$", "$\\begin{pmatrix} 12{,}5 & 7{,}5 \\\\ 10{,}5 & 14{,}5 \\end{pmatrix}$", "$\\begin{pmatrix} 25 & 20 \\\\ 12{,}5 & 30 \\end{pmatrix}$", "$\\begin{pmatrix} 30 & 15 \\\\ 24 & 36 \\end{pmatrix}$", "$\\begin{pmatrix} 25 & 12{,}5 \\\\ 20 & 30 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$2{,}5 \\times \\begin{pmatrix} 10 & 5 \\\\ 8 & 12 \\end{pmatrix} = \\begin{pmatrix} 25 & 12{,}5 \\\\ 20 & 30 \\end{pmatrix}$.",
        trik_cepat: "Perkalian skalar: kalikan setiap elemen."
    },
    {
        id: 46,
        teks: "Sebuah masjid memiliki dua kotak amal A dan B. Pekan pertama: A Rp200.000, B Rp150.000. Pekan kedua: A Rp250.000, B Rp180.000. Data disusun matriks $P = \\begin{pmatrix} 200 & 150 \\\\ 250 & 180 \\end{pmatrix}$ (ribu rupiah) dan dikalikan $Q = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$. Hasil $P \\cdot Q$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 500 \\\\ 610 \\end{pmatrix}$", "$\\begin{pmatrix} 550 \\\\ 610 \\end{pmatrix}$", "$\\begin{pmatrix} 500 \\\\ 680 \\end{pmatrix}$", "$\\begin{pmatrix} 450 \\\\ 610 \\end{pmatrix}$", "$\\begin{pmatrix} 500 \\\\ 590 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$P \\cdot Q = \\begin{pmatrix} 200(1)+150(2) \\\\ 250(1)+180(2) \\end{pmatrix}$\n$= \\begin{pmatrix} 500 \\\\ 610 \\end{pmatrix}$.",
        trik_cepat: "Perkalian matriks 2×2 dengan 2×1."
    },
    {
        id: 47,
        teks: "Panitia zakat mencatat penerimaan zakat fitrah dari tiga RT dalam matriks $Z = \\begin{pmatrix} 120 & 80 \\\\ 90 & 110 \\\\ 100 & 95 \\end{pmatrix}$ kg (kolom 1 beras A, kolom 2 beras B). Total beras A dan B secara terpisah sebagai vektor baris adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 285 & 310 \\end{pmatrix}$", "$\\begin{pmatrix} 310 & 285 \\end{pmatrix}$", "$\\begin{pmatrix} 310 \\\\ 285 \\end{pmatrix}$", "$\\begin{pmatrix} 200 & 190 \\\\ 220 & 190 \\end{pmatrix}$", "$\\begin{pmatrix} 120 & 80 \\\\ 90 & 110 \\\\ 100 & 95 \\end{pmatrix}\\begin{pmatrix}1\\\\1\\end{pmatrix}$"],
        jawaban: 1,
        pembahasan: "• Total A = $120 + 90 + 100 = 310$\n• Total B = $80 + 110 + 95 = 285$\nVektor baris: $\\begin{pmatrix} 310 & 285 \\end{pmatrix}$.",
        trik_cepat: "Jumlahkan masing-masing kolom."
    },
    {
        id: 48,
        teks: "Jumlah umur Kakak dan dua kali umur Adik adalah 27 tahun. Selisih umur Kakak dan Adik adalah 3 tahun. Jika umur Kakak $x$ tahun dan umur Adik $y$ tahun, penyelesaian matriks $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ yang sesuai adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 1 \\\\ 1 & -1 \\end{pmatrix} \\begin{pmatrix} 9 \\\\ 1 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & -1 \\\\ 1 & 1 \\end{pmatrix} \\begin{pmatrix} 9 \\\\ 1 \\end{pmatrix}$", "$\\frac{1}{3}\\begin{pmatrix} 1 & 2 \\\\ 1 & -1 \\end{pmatrix} \\begin{pmatrix} 27 \\\\ 3 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & 2 \\\\ 1 & 1 \\end{pmatrix} \\begin{pmatrix} 9 \\\\ 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & -2 \\\\ 1 & -1 \\end{pmatrix} \\begin{pmatrix} 9 \\\\ 1 \\end{pmatrix}$"],
        jawaban: 2,
        pembahasan: "Sistem: $\\begin{pmatrix} 1 & 2 \\\\ 1 & -1 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} 27 \\\\ 3 \\end{pmatrix}$\nInvers koefisien: $\\frac{1}{-3}\\begin{pmatrix} -1 & -2 \\\\ -1 & 1 \\end{pmatrix} = \\frac{1}{3}\\begin{pmatrix} 1 & 2 \\\\ 1 & -1 \\end{pmatrix}$.",
        trik_cepat: "Susun SPLDV, lalu kalikan dengan invers matriks koefisien."
    },
    {
        id: 49,
        teks: "Diketahui keliling segitiga ABC adalah 70 cm. Panjang AC adalah 2 cm lebihnya dari panjang AB. Panjang BC adalah 6 cm kurangnya dari panjang AC. Panjang sisi AC, AB, dan BC berturut-turut adalah ....",
        gambar: "",
        opsi: ["28 cm, 26 cm, dan 22 cm", "24 cm, 26 cm, dan 20 cm", "26 cm, 28 cm, dan 22 cm", "26 cm, 24 cm, dan 20 cm", "24 cm, 20 cm, dan 26 cm"],
        jawaban: 3,
        pembahasan: "Misal AB = $x$, AC = $x+2$, BC = $x-4$.\n$x + (x+2) + (x-4) = 70 \\Rightarrow 3x = 72 \\Rightarrow x = 24$.\nUrutan AC, AB, BC = 26 cm, 24 cm, dan 20 cm.",
        trik_cepat: "Nyatakan semua sisi dalam AB, lalu jumlahkan."
    },

    // ==================== B. POLINOMIAL (26 SOAL) ====================
    // --- Level 1: Dasar (Derajat, Koefisien, & Substitusi) ---
    {
        id: 50,
        teks: "Derajat polinomial $3x^4 - 2x^3 + x^2 - 5x + 7$ adalah ....",
        gambar: "",
        opsi: ["2", "3", "5", "7", "4"],
        jawaban: 4,
        pembahasan: "Derajat polinomial ditentukan oleh pangkat tertinggi variabelnya, yaitu 4.",
        trik_cepat: "Lihat pangkat tertinggi variabel."
    },
    {
        id: 51,
        teks: "Koefisien $x^2$ pada polinomial $2x^3 - 4x^2 + 3x - 1$ adalah ....",
        gambar: "",
        opsi: ["-4", "2", "3", "-1", "4"],
        jawaban: 0,
        pembahasan: "Suku yang memuat $x^2$ adalah $-4x^2$, sehingga koefisiennya adalah -4.",
        trik_cepat: "Lihat angka dan tanda di depan $x^2$."
    },
    {
        id: 52,
        teks: "Jika $P(x) = 2x^3 - 3x^2 + 4x - 5$, nilai $P(1)$ adalah ....",
        gambar: "",
        opsi: ["-1", "-2", "0", "1", "2"],
        jawaban: 1,
        pembahasan: "$P(1) = 2(1)^3 - 3(1)^2 + 4(1) - 5$\n$= 2 - 3 + 4 - 5 = -2$.",
        trik_cepat: "Substitusi $x=1$ (jumlahkan semua koefisien)."
    },
    {
        id: 53,
        teks: "Jika $P(x) = x^3 + 2x^2 - 5x + 1$, nilai $P(-2)$ adalah ....",
        gambar: "",
        opsi: ["9", "7", "11", "5", "3"],
        jawaban: 2,
        pembahasan: "$P(-2) = (-2)^3 + 2(-2)^2 - 5(-2) + 1$\n$= -8 + 8 + 10 + 1 = 11$.",
        trik_cepat: "Substitusi $x=-2$."
    },

    // --- Level 2: Perkalian Polinomial & Kuadrat Sempurna ---
    {
        id: 54,
        teks: "Hasil dari $(2x - 1)(x^2 + 3x - 2)$ adalah ....",
        gambar: "",
        opsi: ["$2x^3 + 5x^2 - 7x - 2$", "$2x^3 - 5x^2 + 7x + 2$", "$2x^3 + 5x^2 + 7x + 2$", "$2x^3 + 5x^2 - 7x + 2$", "$2x^3 - 5x^2 - 7x - 2$"],
        jawaban: 3,
        pembahasan: "$2x(x^2+3x-2) - 1(x^2+3x-2)$\n$= 2x^3 + 6x^2 - 4x - x^2 - 3x + 2$\n$= 2x^3 + 5x^2 - 7x + 2$.",
        trik_cepat: "Gunakan sifat distributif."
    },
    {
        id: 55,
        teks: "Hasil dari $(x^2 - 2x + 1)(x + 3)$ adalah ....",
        gambar: "",
        opsi: ["$x^3 + x^2 + 5x + 3$", "$x^3 - x^2 - 5x + 3$", "$x^3 + x^2 - 5x - 3$", "$x^3 - x^2 + 5x + 3$", "$x^3 + x^2 - 5x + 3$"],
        jawaban: 4,
        pembahasan: "$x^2(x+3) - 2x(x+3) + 1(x+3)$\n$= x^3 + 3x^2 - 2x^2 - 6x + x + 3$\n$= x^3 + x^2 - 5x + 3$.",
        trik_cepat: "Kalikan tiap suku secara distributif."
    },
    {
        id: 56,
        teks: "Luas daerah persegi adalah $(9x^2 + 12x + 4)$ cm$^2$. Panjang sisi persegi tersebut adalah ... cm.",
        gambar: "",
        opsi: ["$3x + 2$", "$3x - 2$", "$-3x + 2$", "$2x + 3$", "$2x - 3$"],
        jawaban: 0,
        pembahasan: "$9x^2 + 12x + 4 = (3x + 2)^2$\nJadi panjang sisi persegi adalah $3x + 2$ cm.",
        trik_cepat: "Kenali bentuk kuadrat sempurna $(a+b)^2$."
    },

    // --- Level 3: Teorema Sisa & Pembagian Sintetik ---
    {
        id: 57,
        teks: "Sisa pembagian $x^3 - 2x^2 + 3x - 4$ oleh $x - 1$ adalah ....",
        gambar: "",
        opsi: ["-1", "-2", "0", "1", "2"],
        jawaban: 1,
        pembahasan: "Teorema sisa untuk pembagi $(x - 1)$:\n$P(1) = 1^3 - 2(1)^2 + 3(1) - 4 = -2$.",
        trik_cepat: "Substitusi $x=1$."
    },
    {
        id: 58,
        teks: "Sisa pembagian $x^4 - 3x^3 + 2x^2 - x + 5$ oleh $x + 1$ adalah ....",
        gambar: "",
        opsi: ["10", "8", "12", "6", "4"],
        jawaban: 2,
        pembahasan: "Teorema sisa untuk pembagi $(x + 1)$:\n$P(-1) = 1 + 3 + 2 + 1 + 5 = 12$.",
        trik_cepat: "Substitusi $x=-1$."
    },
    {
        id: 59,
        teks: "Sisa pembagian $2x^3 - 4x^2 + 3x - 6$ oleh $x - 2$ adalah ....",
        gambar: "",
        opsi: ["1", "2", "3", "0", "4"],
        jawaban: 3,
        pembahasan: "$P(2) = 2(8) - 4(4) + 3(2) - 6$\n$= 16 - 16 + 6 - 6 = 0$.",
        trik_cepat: "Substitusi $x=2$."
    },
    {
        id: 60,
        teks: "Hasil bagi dan sisa pembagian $2x^3 - 5x^2 + 3x - 1$ oleh $x - 2$ adalah ....",
        gambar: "",
        opsi: ["$2x^2 + x - 1$, sisa 1", "$2x^2 - x - 1$, sisa 1", "$2x^2 + x + 1$, sisa 1", "$2x^2 - x + 1$, sisa 2", "$2x^2 - x + 1$, sisa 1"],
        jawaban: 4,
        pembahasan: "Horner $x=2$ pada $(2, -5, 3, -1)$:\nKoefisien hasil: $2, -1, 1$ dan sisa $1$.\nHasil bagi: $2x^2 - x + 1$, sisa $1$.",
        trik_cepat: "Gunakan skema Horner $x=2$."
    },
    {
        id: 61,
        teks: "Hasil bagi $x^3 + 3x^2 - 4$ oleh $x - 1$ adalah ....",
        gambar: "",
        opsi: ["$x^2 + 4x + 4$", "$x^2 + 4x - 4$", "$x^2 - 4x + 4$", "$x^2 + 2x + 4$", "$x^2 - 2x - 4$"],
        jawaban: 0,
        pembahasan: "Horner $x=1$ pada $(1, 3, 0, -4)$:\nKoefisien hasil: $1, 4, 4$, sisa $0$.\nHasil bagi: $x^2 + 4x + 4$.",
        trik_cepat: "Gunakan skema Horner $x=1$."
    },
    {
        id: 62,
        teks: "Hasil dari pembagian $x^4 - 2x^3 - x + 5$ oleh $x - 2$ adalah ....",
        gambar: "",
        opsi: ["$x^3 + 1$", "$x^3 - 1$", "$x^3 + x + 1$", "$x^3 - x + 1$", "$x^3 - x - 1$"],
        jawaban: 1,
        pembahasan: "Horner $x=2$ pada $(1, -2, 0, -1, 5)$:\nKoefisien hasil: $1, 0, 0, -1$, sisa $3$.\nHasil bagi: $x^3 - 1$.",
        trik_cepat: "Gunakan skema Horner $x=2$."
    },

    // --- Level 4: Pembagian (ax+b), Kuadratik, Faktor, & Akar ---
    {
        id: 63,
        teks: "Hasil dari $2x^3 + x^2 - 4x + 5$ dibagi $2x - 3$ adalah ....",
        gambar: "",
        opsi: ["$x^2 + 2x - 1$", "$x^2 - 2x + 1$", "$x^2 + 2x + 1$", "$x^2 + x + 2$", "$x^2 - x - 2$"],
        jawaban: 2,
        pembahasan: "Horner $x = \\frac{3}{2}$ menghasilkan $(2, 4, 2)$, sisa $8$.\nBagi koefisien hasil dengan 2:\n$x^2 + 2x + 1$.",
        trik_cepat: "Horner $x = 3/2$, lalu bagi hasil dengan 2."
    },
    {
        id: 64,
        teks: "Jika polinomial $x^3 + 6x^2 - 12x - 40$ dibagi $x^2 - 9$, sisanya adalah ....",
        gambar: "",
        opsi: ["$3x + 14$", "$3x - 14$", "$4x - 24$", "$-3x + 14$", "$-4x + 24$"],
        jawaban: 3,
        pembahasan: "Pembagian bersusun:\n$x^3 + 6x^2 - 12x - 40$\n$= (x^2 - 9)(x + 6) + (-3x + 14)$.\nSisanya adalah $-3x + 14$.",
        trik_cepat: "Substitusi $x^2 = 9$ ke polinomial."
    },
    {
        id: 65,
        teks: "Jika $P(x)$ dibagi $(x-1)$ bersisa 3 dan dibagi $(x+1)$ bersisa -1, sisa pembagian $P(x)$ oleh $(x^2-1)$ adalah ....",
        gambar: "",
        opsi: ["$2x - 1$", "$x + 2$", "$x - 2$", "$-2x + 1$", "$2x + 1$"],
        jawaban: 4,
        pembahasan: "Misal sisa $S(x) = ax + b$.\n• $P(1) = a + b = 3$\n• $P(-1) = -a + b = -1$\nDiperoleh $a = 2, b = 1$, sisa $2x + 1$.",
        trik_cepat: "Gunakan sisa $ax+b$ pada $x=1$ dan $x=-1$."
    },
    {
        id: 66,
        teks: "Polinomial $x^3 - 3x^2 + 4$ memiliki faktor ....",
        gambar: "",
        opsi: ["$(x-2)$", "$(x-1)$", "$(x+1)$", "$(x+2)$", "$(x-3)$"],
        jawaban: 0,
        pembahasan: "Uji akar: $P(2) = 2^3 - 3(2)^2 + 4$\n$= 8 - 12 + 4 = 0$.\nMaka $(x - 2)$ adalah faktornya.",
        trik_cepat: "Cek akar dengan substitusi."
    },
    {
        id: 67,
        teks: "Faktor dari polinomial $x^3 - x^2 - 4x + 4$ adalah ....",
        gambar: "",
        opsi: ["$(x-1), (x-1), (x-4)$", "$(x-1), (x-2), (x+2)$", "$(x+1), (x-1), (x-2)$", "$(x+1), (x-2), (x+3)$", "$(x+1), (x+1), (x+2)$"],
        jawaban: 1,
        pembahasan: "$x^3 - x^2 - 4x + 4$\n$= x^2(x - 1) - 4(x - 1)$\n$= (x - 1)(x^2 - 4) = (x - 1)(x - 2)(x + 2)$.",
        trik_cepat: "Kelompokkan suku dua-dua."
    },
    {
        id: 68,
        teks: "Polinomial $6x^3 + 13x^2 + qx + 12$ mempunyai faktor $(3x-1)$. Faktor linear yang lain adalah ....",
        gambar: "",
        opsi: ["$2x - 1$", "$2x + 3$", "$x + 4$", "$x - 4$", "$x + 2$"],
        jawaban: 2,
        pembahasan: "$P(\\frac{1}{3}) = 0 \\Rightarrow q = -41$.\nBagi oleh $(3x-1)$ menghasilkan $2x^2 + 5x - 12$\n$= (2x - 3)(x + 4)$.",
        trik_cepat: "Cari $q$ dari $P(1/3)=0$, lalu faktorkan."
    },
    {
        id: 69,
        teks: "Jika $x^3 - 6x^2 + 11x - 6 = 0$, akar-akarnya adalah ....",
        gambar: "",
        opsi: ["1, 2, 4", "1, 3, 4", "2, 3, 4", "1, 2, 3", "1, 2, 5"],
        jawaban: 3,
        pembahasan: "Uji pembagi 6: $P(1)=0, P(2)=0, P(3)=0$.\nJadi akar-akarnya adalah 1, 2, dan 3.",
        trik_cepat: "Cek jumlah akar $= -b/a = 6$ dan hasil kali $= 6$."
    },
    {
        id: 70,
        teks: "Polinomial $P(x)$ berderajat 3. Jika $P(1)=0$, $P(2)=0$, $P(3)=0$, dan $P(0)=6$, maka $P(x)$ adalah ....",
        gambar: "",
        opsi: ["$x^3 - 6x^2 + 11x - 6$", "$x^3 + 6x^2 + 11x + 6$", "$x^3 - 6x^2 - 11x + 6$", "$x^3 - 6x^2 + 11x + 6$", "$-x^3 + 6x^2 - 11x + 6$"],
        jawaban: 4,
        pembahasan: "$P(x) = a(x-1)(x-2)(x-3)$\n$P(0) = -6a = 6 \\Rightarrow a = -1$\n$P(x) = -x^3 + 6x^2 - 11x + 6$.",
        trik_cepat: "Bentuk faktor + substitusi $P(0)$."
    },

    // --- Level 5: Polinomial Resiprokal & Soal Cerita HOTS ---
    {
        id: 71,
        teks: "Polinomial yang memenuhi hubungan $P(x) = x^n P\\left(\\frac{1}{x}\\right)$ disebut polinomial ....",
        gambar: "",
        opsi: ["Resiprokal", "Primitif", "Irreducible", "Monik", "Homogen"],
        jawaban: 0,
        pembahasan: "Hubungan $P(x) = x^n P(1/x)$ adalah definisi formal dari polinomial resiprokal (palindromik).",
        trik_cepat: "Bentuk $P(x) = x^n P(1/x)$ adalah ciri resiprokal."
    },
    {
        id: 72,
        teks: "Polinomial $x^2 + 5x + 1$ merupakan contoh polinomial resiprokal karena ....",
        gambar: "",
        opsi: ["Derajatnya genap", "Koefisiennya simetris (1, 5, 1)", "Memiliki dua akar real", "Konstantanya bernilai 1", "Grafiknya simetris terhadap sumbu Y"],
        jawaban: 1,
        pembahasan: "Ciri utama polinomial resiprokal adalah susunan koefisiennya yang simetris (palindromik) dari depan dan belakang.",
        trik_cepat: "Lihat pola koefisien dari depan ke belakang."
    },
    {
        id: 73,
        teks: "Diketahui polinomial $2x^4 - 3x^3 + 7x^2 - 3x + 2$. Jika $q$ adalah akar dari polinomial tersebut, maka ....",
        gambar: "",
        opsi: ["$q^2$ juga akar", "$-q$ juga akar", "$\\frac{1}{q}$ juga akar", "$q+1$ juga akar", "tidak ada akar lain yang berhubungan"],
        jawaban: 2,
        pembahasan: "Sifat akar pada polinomial resiprokal: jika $q$ adalah akar ($q \\neq 0$), maka kebalikannya $\\frac{1}{q}$ juga merupakan akar.",
        trik_cepat: "Ingat arti 'resiprokal' = berkebalikan."
    },
    {
        id: 74,
        teks: "Panitia zakat pertanian mencatat hasil panen padi seorang petani mengikuti polinomial $P(x) = x^3 - 4x^2 + x + 6$ (dalam kuintal) dengan $x$ menyatakan jumlah petak. Jika petani memiliki 1 petak, hasil panennya adalah ....",
        gambar: "",
        opsi: ["6 kuintal", "8 kuintal", "10 kuintal", "4 kuintal", "12 kuintal"],
        jawaban: 3,
        pembahasan: "Substitusi $x = 1$:\n$P(1) = 1^3 - 4(1)^2 + 1 + 6 = 4$ kuintal.",
        trik_cepat: "Substitusi $x=1$."
    },
    {
        id: 75,
        teks: "Seorang imam membagi harta warisan. Ahli waris terdiri dari 3 orang dengan bagian masing-masing membentuk akar polinomial $x^3 - 6x^2 + 11x - 6 = 0$ (dalam bagian). Jika total harta Rp60.000.000, bagian terkecil adalah ....",
        gambar: "",
        opsi: ["Rp15.000.000", "Rp20.000.000", "Rp25.000.000", "Rp30.000.000", "Rp10.000.000"],
        jawaban: 4,
        pembahasan: "Akar-akarnya: 1, 2, dan 3 (total = 6 bagian).\nBagian terkecil = $\\frac{1}{6} \\times \\text{Rp}60.000.000 = \\text{Rp}10.000.000$.",
        trik_cepat: "Cari akar, jumlahkan, ambil bagian terkecil."
    },

    // ==================== C. TRIGONOMETRI (34 SOAL) ====================
    // --- Level 1: Dasar (Sudut Istimewa & Konversi Radian) ---
    {
        id: 76,
        teks: "Nilai dari $\\tan 60^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$\\sqrt{3}$", "$\\frac{1}{\\sqrt{3}}$", "1", "$\\sqrt{2}$", "2"],
        jawaban: 0,
        pembahasan: "$\\tan 60^\\circ = \\frac{\\sin 60^\\circ}{\\cos 60^\\circ} = \\frac{\\sqrt{3}/2}{1/2} = \\sqrt{3}$.",
        trik_cepat: "Hafalkan nilai sudut istimewa."
    },
    {
        id: 77,
        teks: "Nilai dari $\\sin 30^\\circ + \\cos 60^\\circ$ adalah ....",
        gambar: "",
        opsi: ["0", "1", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "2"],
        jawaban: 1,
        pembahasan: "$\\sin 30^\\circ = \\frac{1}{2}$ dan $\\cos 60^\\circ = \\frac{1}{2}$.\nJumlah = $\\frac{1}{2} + \\frac{1}{2} = 1$.",
        trik_cepat: "$\\sin 30^\\circ = \\cos 60^\\circ = \\frac{1}{2}$."
    },
    {
        id: 78,
        teks: "Nilai dari $\\cos 0^\\circ + \\sin 90^\\circ$ adalah ....",
        gambar: "",
        opsi: ["0", "1", "2", "$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{2}$"],
        jawaban: 2,
        pembahasan: "$\\cos 0^\\circ = 1$ dan $\\sin 90^\\circ = 1$.\nJumlah = $1 + 1 = 2$.",
        trik_cepat: "Nilai sudut batas kuadran."
    },
    {
        id: 79,
        teks: "Nilai dari $\\sin 45^\\circ + \\cos 45^\\circ$ adalah ....",
        gambar: "",
        opsi: ["1", "$\\frac{\\sqrt{2}}{2}$", "2", "$\\sqrt{2}$", "$\\frac{1}{2}$"],
        jawaban: 3,
        pembahasan: "$\\sin 45^\\circ + \\cos 45^\\circ = \\frac{\\sqrt{2}}{2} + \\frac{\\sqrt{2}}{2} = \\sqrt{2}$.",
        trik_cepat: "Dua kali $\\frac{\\sqrt{2}}{2}$."
    },
    {
        id: 80,
        teks: "Seorang penderita skoliosis memiliki kelengkungan tulang belakang sebesar $40^\\circ$. Jika dinyatakan dalam satuan radian, sudut tersebut adalah ....",
        gambar: "",
        opsi: ["$\\frac{\\pi}{9}$ rad", "$\\frac{\\pi}{3}$ rad", "$\\frac{4\\pi}{9}$ rad", "$\\frac{2\\pi}{3}$ rad", "$\\frac{2\\pi}{9}$ rad"],
        jawaban: 4,
        pembahasan: "$40^\\circ = 40 \\times \\frac{\\pi}{180}\\text{ rad} = \\frac{2\\pi}{9}\\text{ rad}$.",
        trik_cepat: "Kalikan derajat dengan $\\pi/180$."
    },

    // --- Level 2: Sudut Berelasi & Kuadran ---
    {
        id: 81,
        teks: "Nilai dari $\\cos 120^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$-\\frac{1}{2}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "1"],
        jawaban: 0,
        pembahasan: "$\\cos 120^\\circ = \\cos(180^\\circ - 60^\\circ)$\n$= -\\cos 60^\\circ = -\\frac{1}{2}$.",
        trik_cepat: "Kuadran II: cos negatif."
    },
    {
        id: 82,
        teks: "Nilai dari $\\sin 240^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "$-\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "1"],
        jawaban: 1,
        pembahasan: "$\\sin 240^\\circ = \\sin(180^\\circ + 60^\\circ)$\n$= -\\sin 60^\\circ = -\\frac{\\sqrt{3}}{2}$.",
        trik_cepat: "Kuadran III: sin negatif."
    },
    {
        id: 83,
        teks: "Nilai dari $\\cos 150^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{2}$", "$-\\frac{1}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "$\\frac{\\sqrt{3}}{2}$", "1"],
        jawaban: 2,
        pembahasan: "$\\cos 150^\\circ = \\cos(180^\\circ - 30^\\circ)$\n$= -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$.",
        trik_cepat: "Kuadran II: cos negatif."
    },
    {
        id: 84,
        teks: "Nilai dari $\\tan 65^\\circ$ senilai dengan ....",
        gambar: "",
        opsi: ["$\\tan 25^\\circ$", "$-\\cot 25^\\circ$", "$-\\tan 25^\\circ$", "$\\cot 25^\\circ$", "$\\sec 25^\\circ$"],
        jawaban: 3,
        pembahasan: "$\\tan 65^\\circ = \\tan(90^\\circ - 25^\\circ) = \\cot 25^\\circ$.",
        trik_cepat: "Sudut berkomplemen: $\\tan(90-\\alpha) = \\cot\\alpha$."
    },
    {
        id: 85,
        teks: "Nilai dari $\\sec 158^\\circ$ senilai dengan ....",
        gambar: "",
        opsi: ["$\\sec 22^\\circ$", "$\\csc 22^\\circ$", "$-\\csc 22^\\circ$", "$\\cos 22^\\circ$", "$-\\sec 22^\\circ$"],
        jawaban: 4,
        pembahasan: "$\\sec 158^\\circ = \\sec(180^\\circ - 22^\\circ) = -\\sec 22^\\circ$.",
        trik_cepat: "Kuadran II: sec negatif."
    },
    {
        id: 86,
        teks: "Nilai dari $\\cos 215^\\circ$ senilai dengan ....",
        gambar: "",
        opsi: ["$-\\cos 35^\\circ$", "$\\cos 35^\\circ$", "$\\sin 35^\\circ$", "$-\\sin 35^\\circ$", "$\\tan 35^\\circ$"],
        jawaban: 0,
        pembahasan: "$\\cos 215^\\circ = \\cos(180^\\circ + 35^\\circ) = -\\cos 35^\\circ$.",
        trik_cepat: "Kuadran III: cos negatif."
    },
    {
        id: 87,
        teks: "Nilai dari $\\csc 298^\\circ$ senilai dengan ....",
        gambar: "",
        opsi: ["$\\csc 62^\\circ$", "$-\\csc 62^\\circ$", "$\\sec 62^\\circ$", "$-\\sec 62^\\circ$", "$\\sin 62^\\circ$"],
        jawaban: 1,
        pembahasan: "$\\csc 298^\\circ = \\csc(360^\\circ - 62^\\circ) = -\\csc 62^\\circ$.",
        trik_cepat: "Kuadran IV: csc negatif."
    },
    {
        id: 88,
        teks: "Jika $x = \\frac{5}{3}\\pi$, fungsi yang bernilai positif adalah ....",
        gambar: "",
        opsi: ["$f(x) = \\sin x$", "$f(x) = \\tan x$", "$f(x) = \\cos x$", "$f(x) = \\cot x$", "$f(x) = \\sin 2x$"],
        jawaban: 2,
        pembahasan: "$x = \\frac{5}{3}(180^\\circ) = 300^\\circ$ (kuadran IV).\nDi kuadran IV hanya cos dan sec yang bernilai positif.",
        trik_cepat: "Tentukan kuadran, cek tanda (Semua-Sin-Tan-Cos)."
    },

    // --- Level 3: Perbandingan Trigonometri & Identitas Dasar ---
    {
        id: 89,
        teks: "Jika $\\sin\\theta = \\frac{3}{5}$ dan $\\theta$ di kuadran I, maka $\\cos\\theta = ....$",
        gambar: "",
        opsi: ["$\\frac{3}{4}$", "$\\frac{5}{4}$", "$\\frac{2}{5}$", "$\\frac{4}{5}$", "$\\frac{1}{5}$"],
        jawaban: 3,
        pembahasan: "$\\cos^2\\theta = 1 - \\left(\\frac{3}{5}\\right)^2 = \\frac{16}{25}$\nDi kuadran I cos positif, maka $\\cos\\theta = \\frac{4}{5}$.",
        trik_cepat: "Tripel Pythagoras 3-4-5."
    },
    {
        id: 90,
        teks: "Jika $\\tan\\theta = \\frac{4}{3}$ dan $\\theta$ di kuadran III, maka $\\sin\\theta = ....$",
        gambar: "",
        opsi: ["$\\frac{4}{5}$", "$\\frac{3}{5}$", "$-\\frac{3}{5}$", "$-\\frac{5}{4}$", "$-\\frac{4}{5}$"],
        jawaban: 4,
        pembahasan: "Tripel 3-4-5 dengan sisi miring 5.\nDi kuadran III nilai sin negatif, maka $\\sin\\theta = -\\frac{4}{5}$.",
        trik_cepat: "Kuadran III: $\\sin < 0$."
    },
    {
        id: 91,
        teks: "Jika $\\cos\\theta = \\frac{5}{13}$ dan $\\theta$ di kuadran IV, maka $\\sin\\theta = ....$",
        gambar: "",
        opsi: ["$-\\frac{12}{13}$", "$\\frac{12}{13}$", "$\\frac{5}{12}$", "$-\\frac{5}{12}$", "$\\frac{13}{12}$"],
        jawaban: 0,
        pembahasan: "Tripel 5-12-13.\nDi kuadran IV nilai sin negatif, maka $\\sin\\theta = -\\frac{12}{13}$.",
        trik_cepat: "Kuadran IV: $\\sin < 0$."
    },
    {
        id: 92,
        teks: "Nilai dari $\\sin^2 30^\\circ + \\cos^2 30^\\circ$ adalah ....",
        gambar: "",
        opsi: ["0", "1", "$\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "2"],
        jawaban: 1,
        pembahasan: "Berdasarkan identitas Pythagoras:\n$\\sin^2\\theta + \\cos^2\\theta = 1$ untuk setiap sudut $\\theta$.",
        trik_cepat: "Identitas dasar $\\sin^2 x + \\cos^2 x = 1$."
    },
    {
        id: 93,
        teks: "Bentuk $\\frac{\\sin x \\cos x}{\\tan x}$ ekuivalen dengan ....",
        gambar: "",
        opsi: ["$\\sin^2 x$", "$\\sin x$", "$\\cos^2 x$", "$\\cos x$", "$\\frac{1}{\\sin x}$"],
        jawaban: 2,
        pembahasan: "$\\frac{\\sin x \\cos x}{\\sin x / \\cos x} = \\sin x \\cos x \\cdot \\frac{\\cos x}{\\sin x} = \\cos^2 x$.",
        trik_cepat: "Ubah $\\tan x = \\sin x / \\cos x$."
    },
    {
        id: 94,
        teks: "Bentuk sederhana dari $1 - \\cot^2 A \\sin^2 A$ adalah ....",
        gambar: "",
        opsi: ["$\\cos^2 A$", "$\\sec^2 A$", "$\\csc^2 A$", "$\\sin^2 A$", "$\\tan^2 A$"],
        jawaban: 3,
        pembahasan: "$1 - \\left(\\frac{\\cos^2 A}{\\sin^2 A}\\right)\\sin^2 A$\n$= 1 - \\cos^2 A = \\sin^2 A$.",
        trik_cepat: "Sederhanakan $\\cot^2 A \\sin^2 A = \\cos^2 A$."
    },

    // --- Level 4: Persamaan Sederhana & Jumlah/Selisih Sudut ---
    {
        id: 95,
        teks: "Jika $\\sin x = \\frac{1}{2}$ dan $0^\\circ < x < 90^\\circ$, maka nilai $x$ adalah ....",
        gambar: "",
        opsi: ["45°", "60°", "90°", "120°", "30°"],
        jawaban: 4,
        pembahasan: "Pada interval $0^\\circ < x < 90^\\circ$, sudut yang memenuhi $\\sin x = \\frac{1}{2}$ adalah $30^\\circ$.",
        trik_cepat: "Ingat nilai sudut istimewa kuadran I."
    },
    {
        id: 96,
        teks: "Jika $\\tan x = 1$ dan $0^\\circ < x < 90^\\circ$, maka $x = ....$",
        gambar: "",
        opsi: ["45°", "30°", "60°", "90°", "135°"],
        jawaban: 0,
        pembahasan: "Pada kuadran I, nilai $\\tan x = 1$ dipenuhi saat $x = 45^\\circ$.",
        trik_cepat: "$\\tan 45^\\circ = 1$."
    },
    {
        id: 97,
        teks: "Nilai dari $\\sin 15^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$", "$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$", "$\\frac{\\sqrt{3}-1}{2}$", "$\\frac{\\sqrt{3}+1}{2}$", "$\\frac{\\sqrt{2}}{4}$"],
        jawaban: 1,
        pembahasan: "$\\sin(45^\\circ - 30^\\circ) = \\sin 45^\\circ\\cos 30^\\circ - \\cos 45^\\circ\\sin 30^\\circ$\n$= \\frac{\\sqrt{6} - \\sqrt{2}}{4}$.",
        trik_cepat: "Gunakan $\\sin(45^\\circ - 30^\\circ)$."
    },
    {
        id: 98,
        teks: "Jika $\\alpha + \\beta = 90^\\circ$, maka $\\sin\\alpha \\cos\\beta + \\cos\\alpha \\sin\\beta = ....$",
        gambar: "",
        opsi: ["0", "$\\frac{1}{2}$", "1", "$\\frac{\\sqrt{2}}{2}$", "$\\sqrt{3}$"],
        jawaban: 2,
        pembahasan: "$\\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta = \\sin(\\alpha + \\beta)$\n$= \\sin 90^\\circ = 1$.",
        trik_cepat: "Identitas $\\sin(A+B)$."
    },
    {
        id: 99,
        teks: "Bentuk sederhana dari $\\frac{\\sin(A - B)}{\\tan A - \\tan B}$ adalah ....",
        gambar: "",
        opsi: ["$-\\sin A \\sin B$", "$-\\cos A \\sin B$", "$\\sin A \\sin B$", "$\\cos A \\cos B$", "$\\cos(A - B)$"],
        jawaban: 3,
        pembahasan: "$\\tan A - \\tan B = \\frac{\\sin(A-B)}{\\cos A \\cos B}$\nMaka $\\frac{\\sin(A-B)}{\\frac{\\sin(A-B)}{\\cos A \\cos B}} = \\cos A \\cos B$.",
        trik_cepat: "Ubah $\\tan A - \\tan B$ ke bentuk sin/cos."
    },
    {
        id: 100,
        teks: "Jika $\\cos \\alpha \\cos \\beta = \\frac{3}{4}$ dan $\\cos(\\alpha + \\beta) = \\frac{1}{2}$, nilai dari $\\tan(\\alpha - \\beta)$ adalah ....",
        gambar: "",
        opsi: ["$-\\frac{1}{3}\\sqrt{3}$", "$\\frac{1}{3}\\sqrt{3}$", "1", "$\\sqrt{3}$", "0"],
        jawaban: 4,
        pembahasan: "$\\cos(\\alpha+\\beta) = \\frac{3}{4} - \\sin\\alpha\\sin\\beta = \\frac{1}{2} \\Rightarrow \\sin\\alpha\\sin\\beta = \\frac{1}{4}$\n$\\cos(\\alpha-\\beta) = \\frac{3}{4} + \\frac{1}{4} = 1 \\Rightarrow \\alpha - \\beta = 0$\nMaka $\\tan(0) = 0$.",
        trik_cepat: "Cari $\\sin\\alpha\\sin\\beta$, lalu hitung $\\cos(\\alpha-\\beta)$."
    },

    // --- Level 5: Grafik Fungsi Trigonometri & Soal Cerita HOTS ---
    {
        id: 101,
        teks: "Periode dari grafik fungsi $f(x) = 2\\cos(3x + \\pi)$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{2}{3}\\pi$", "$\\frac{8}{3}\\pi$", "$\\frac{3}{2}\\pi$", "$\\frac{4}{3}\\pi$", "$\\frac{1}{3}\\pi$"],
        jawaban: 0,
        pembahasan: "Untuk fungsi $f(x) = A\\cos(kx + c) + d$, periodenya adalah:\n$T = \\frac{2\\pi}{|k|} = \\frac{2\\pi}{3}$.",
        trik_cepat: "$T = 2\\pi/|k|$."
    },
    {
        id: 102,
        teks: "Grafik fungsi $y = \\cos x$ diperoleh dengan cara menggeser grafik fungsi $y = \\sin x$ ke ....",
        gambar: "",
        opsi: ["kanan sejauh $\\frac{\\pi}{2}$", "kiri sejauh $\\frac{\\pi}{2}$", "kanan sejauh $\\frac{\\pi}{3}$", "kanan sejauh $\\frac{\\pi}{4}$", "kiri sejauh $\\frac{\\pi}{3}$"],
        jawaban: 1,
        pembahasan: "Karena $\\cos x = \\sin\\left(x + \\frac{\\pi}{2}\\right)$, grafik $y = \\sin x$ digeser ke kiri sejauh $\\frac{\\pi}{2}$.",
        trik_cepat: "$\\cos x = \\sin(x + 90^\\circ)$ → geser kiri."
    },
    {
        id: 103,
        teks: "Jika periode fungsi $f(x) = 2 \\cos(ax) + a$ adalah $\\frac{\\pi}{3}$, nilai minimum fungsi $f(x)$ adalah ....",
        gambar: "",
        opsi: ["1", "2", "4", "6", "8"],
        jawaban: 2,
        pembahasan: "Periode $= \\frac{2\\pi}{a} = \\frac{\\pi}{3} \\Rightarrow a = 6$\n$f(x) = 2\\cos(6x) + 6$\nNilai minimum $= 2(-1) + 6 = 4$.",
        trik_cepat: "Cari $a$ dari periode, lalu substitusi $\\cos = -1$."
    },
    {
        id: 104,
        teks: "Diketahui fungsi $y = -2 - \\cos\\left(\\frac{x}{2}\\right)$. Pernyataan yang benar mengenai grafik fungsi $y$ adalah ....",
        gambar: "",
        opsi: ["terletak di atas sumbu X", "tidak memotong sumbu Y", "memotong sumbu X di banyak titik", "terletak di bawah sumbu X", "menyinggung sumbu X di banyak titik"],
        jawaban: 3,
        pembahasan: "Rentang nilai $\\cos(x/2)$ adalah $[-1, 1]$.\nMaka rentang $y$ adalah $[-3, -1]$.\nKarena selalu negatif, grafik terletak di bawah sumbu X.",
        trik_cepat: "Cek nilai maksimum dan minimum fungsi."
    },
    {
        id: 105,
        teks: "Tekanan darah seseorang mengikuti fungsi $P(t) = 20\\sin(160\\pi t) + 100$. Tekanan maksimum (sistolik) orang tersebut adalah ....",
        gambar: "",
        opsi: ["80", "100", "110", "140", "120"],
        jawaban: 4,
        pembahasan: "Nilai maksimum $\\sin$ adalah 1.\n$P_{\\max} = 20(1) + 100 = 120$.",
        trik_cepat: "Amplitudo 20 + nilai tengah 100."
    },
    {
        id: 106,
        teks: "Arah kiblat dari suatu kota diukur dengan sudut $295^\\circ$ dari utara searah jarum jam. Nilai $\\cos 295^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$\\cos 65^\\circ$", "$-\\cos 65^\\circ$", "$\\sin 65^\\circ$", "$-\\sin 65^\\circ$", "$\\cos 25^\\circ$"],
        jawaban: 0,
        pembahasan: "$\\cos 295^\\circ = \\cos(360^\\circ - 65^\\circ) = \\cos 65^\\circ$.",
        trik_cepat: "Kuadran IV: cos bernilai positif."
    },
    {
        id: 107,
        teks: "Jadwal salat Asar di suatu kota dinyatakan dengan fungsi $h(t) = 3\\cos(15^\\circ t) + 12$ (dalam jam). Nilai maksimum pada fungsi tersebut adalah ....",
        gambar: "",
        opsi: ["9 jam", "15 jam", "12 jam", "18 jam", "21 jam"],
        jawaban: 1,
        pembahasan: "Nilai maksimum $\\cos(15^\\circ t) = 1$.\n$h_{\\max} = 3(1) + 12 = 15$ jam.",
        trik_cepat: "Nilai maksimum cos = 1."
    },
    {
        id: 108,
        teks: "Sebuah menara masjid diamati dari titik A dengan sudut elevasi $30^\\circ$. Jika jarak titik A ke kaki menara 30 m, tinggi menara tersebut adalah ....",
        gambar: "",
        opsi: ["$15\\sqrt{3}$ m", "$20\\sqrt{3}$ m", "$10\\sqrt{3}$ m", "$30\\sqrt{3}$ m", "$40\\sqrt{3}$ m"],
        jawaban: 2,
        pembahasan: "$\\tan 30^\\circ = \\frac{t}{30}$\n$t = 30 \\cdot \\frac{\\sqrt{3}}{3} = 10\\sqrt{3}$ m.",
        trik_cepat: "$\\tan\\theta = \\frac{\\text{tinggi}}{\\text{jarak}}$."
    },
    {
        id: 109,
        teks: "Panjang sisi-sisi segitiga ABC berturut-turut adalah AB = 4 cm, BC = 6 cm, dan AC = 5 cm. Nilai $\\sin A : \\sin B : \\sin C$ adalah ....",
        gambar: "",
        opsi: ["4 : 5 : 6", "5 : 6 : 4", "4 : 6 : 5", "6 : 5 : 4", "6 : 4 : 5"],
        jawaban: 3,
        pembahasan: "Berdasarkan aturan sinus, perbandingan sinus sudut sebanding dengan sisi di depannya:\n$\\sin A : \\sin B : \\sin C = BC : AC : AB = 6 : 5 : 4$.",
        trik_cepat: "Sisi depan sudut $A$ adalah $BC$, sudut $B$ adalah $AC$, sudut $C$ adalah $AB$."
    },

    // ==================== D. ATURAN SINUS & KOSINUS (16 SOAL) ====================
    // --- Level 1: Dasar (Jenis Segitiga & Luas Segitiga) ---
    {
        id: 110,
        teks: "Diketahui segitiga ABC dengan sisi $a = 6$ cm, $b = 8$ cm, dan $c = 10$ cm. Jenis segitiga tersebut adalah ....",
        gambar: "",
        opsi: ["Segitiga lancip", "Segitiga tumpul", "Segitiga sama sisi", "Segitiga sama kaki", "Segitiga siku-siku"],
        jawaban: 4,
        pembahasan: "$c^2 = 10^2 = 100$ dan $a^2 + b^2 = 6^2 + 8^2 = 100$.\nKarena $c^2 = a^2 + b^2$, segitiga tersebut siku-siku.",
        trik_cepat: "Cek teorema Pythagoras ($6-8-10$)."
    },
    {
        id: 111,
        teks: "Luas segitiga dengan sisi $a = 8$ cm, $b = 10$ cm, dan sudut $C = 30^\\circ$ adalah ....",
        gambar: "",
        opsi: ["20 cm²", "10 cm²", "30 cm²", "40 cm²", "50 cm²"],
        jawaban: 0,
        pembahasan: "$L = \\frac{1}{2}ab\\sin C$\n$= \\frac{1}{2}(8)(10)\\sin 30^\\circ = 40 \\cdot \\frac{1}{2} = 20$ cm².",
        trik_cepat: "$L = \\frac{1}{2}ab\\sin C$."
    },
    {
        id: 112,
        teks: "Diketahui segitiga ABC dengan $\\angle A = 30^\\circ$, sisi $b = 10$ cm, dan sisi $c = 12$ cm. Luas segitiga adalah ....",
        gambar: "",
        opsi: ["40 cm²", "30 cm²", "50 cm²", "60 cm²", "70 cm²"],
        jawaban: 1,
        pembahasan: "$L = \\frac{1}{2}bc\\sin A$\n$= \\frac{1}{2}(10)(12)\\sin 30^\\circ = 60 \\cdot \\frac{1}{2} = 30$ cm².",
        trik_cepat: "$L = \\frac{1}{2}bc\\sin A$."
    },
    {
        id: 113,
        teks: "Diketahui segitiga ABC dengan sisi $a = 5$ cm, $b = 6$ cm, dan $\\angle C = 45^\\circ$. Luas segitiga adalah ....",
        gambar: "",
        opsi: ["$15\\sqrt{2}$ cm²", "$\\frac{15}{4}\\sqrt{2}$ cm²", "$\\frac{15}{2}\\sqrt{2}$ cm²", "$30\\sqrt{2}$ cm²", "$\\frac{15}{2}$ cm²"],
        jawaban: 2,
        pembahasan: "$L = \\frac{1}{2}(5)(6)\\sin 45^\\circ$\n$= 15 \\cdot \\frac{\\sqrt{2}}{2} = \\frac{15}{2}\\sqrt{2}$ cm².",
        trik_cepat: "$L = \\frac{1}{2}ab\\sin C$."
    },

    // --- Level 2: Aturan Sinus ---
    {
        id: 114,
        teks: "Diketahui segitiga ABC dengan $\\angle A = 30^\\circ$, $\\angle B = 60^\\circ$, dan sisi $a = 4$ cm. Panjang sisi $b$ adalah ....",
        gambar: "",
        opsi: ["$2\\sqrt{3}$ cm", "$4\\sqrt{2}$ cm", "$2\\sqrt{2}$ cm", "$4\\sqrt{3}$ cm", "$4$ cm"],
        jawaban: 3,
        pembahasan: "$\\frac{4}{\\sin 30^\\circ} = \\frac{b}{\\sin 60^\\circ}$\n$8 = \\frac{b}{\\sqrt{3}/2} \\Rightarrow b = 4\\sqrt{3}$ cm.",
        trik_cepat: "Gunakan perbandingan aturan sinus."
    },
    {
        id: 115,
        teks: "Diketahui segitiga ABC dengan $\\angle A = 30^\\circ$, $\\angle B = 45^\\circ$, dan sisi $a = 6$ cm. Panjang sisi $b$ adalah ....",
        gambar: "",
        opsi: ["$3\\sqrt{2}$ cm", "$3\\sqrt{3}$ cm", "$6\\sqrt{3}$ cm", "$12$ cm", "$6\\sqrt{2}$ cm"],
        jawaban: 4,
        pembahasan: "$\\frac{6}{\\sin 30^\\circ} = \\frac{b}{\\sin 45^\\circ}$\n$12 = \\frac{b}{\\sqrt{2}/2} \\Rightarrow b = 6\\sqrt{2}$ cm.",
        trik_cepat: "Gunakan perbandingan aturan sinus."
    },
    {
        id: 116,
        teks: "Diketahui segitiga ABC dengan $\\angle A = 60^\\circ$, $\\angle B = 45^\\circ$, dan sisi $b = 6$ cm. Panjang sisi $a$ adalah ....",
        gambar: "",
        opsi: ["$3\\sqrt{6}$ cm", "$6\\sqrt{6}$ cm", "$3\\sqrt{2}$ cm", "$6\\sqrt{2}$ cm", "$6\\sqrt{3}$ cm"],
        jawaban: 0,
        pembahasan: "$\\frac{a}{\\sin 60^\\circ} = \\frac{6}{\\sin 45^\\circ}$\n$a = \\frac{6 \\cdot (\\sqrt{3}/2)}{\\sqrt{2}/2} = \\frac{3\\sqrt{3}}{\\sqrt{2}} = 3\\sqrt{6}$ cm.",
        trik_cepat: "Rasionalkan penyebut $\\sqrt{2}$."
    },

    // --- Level 3: Aturan Kosinus & Rumus Heron ---
    {
        id: 117,
        teks: "Diketahui segitiga ABC dengan sisi $a = 4$ cm, $b = 5$ cm, dan $\\angle C = 60^\\circ$. Panjang sisi $c$ adalah ....",
        gambar: "",
        opsi: ["$\\sqrt{19}$ cm", "$\\sqrt{21}$ cm", "$\\sqrt{23}$ cm", "$\\sqrt{25}$ cm", "$\\sqrt{27}$ cm"],
        jawaban: 1,
        pembahasan: "$c^2 = 4^2 + 5^2 - 2(4)(5)\\cos 60^\\circ$\n$= 16 + 25 - 20 = 21 \\Rightarrow c = \\sqrt{21}$ cm.",
        trik_cepat: "Aturan kosinus $c^2 = a^2+b^2-2ab\\cos C$."
    },
    {
        id: 118,
        teks: "Diketahui segitiga ABC dengan panjang sisi $a = 8$ cm, $b = 6$ cm, dan sudut $C = 60^\\circ$. Panjang sisi $c$ adalah ....",
        gambar: "",
        opsi: ["$2\\sqrt{7}$ cm", "$2\\sqrt{19}$ cm", "$2\\sqrt{13}$ cm", "$2\\sqrt{21}$ cm", "$2\\sqrt{23}$ cm"],
        jawaban: 2,
        pembahasan: "$c^2 = 8^2 + 6^2 - 2(8)(6)\\cos 60^\\circ$\n$= 64 + 36 - 48 = 52 \\Rightarrow c = 2\\sqrt{13}$ cm.",
        trik_cepat: "Aturan kosinus."
    },
    {
        id: 119,
        teks: "Diketahui segitiga ABC dengan sisi $a = 9$ cm, $b = 12$ cm, dan $c = 15$ cm. Nilai $\\sin A$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{4}{5}$", "$\\frac{5}{13}$", "$\\frac{12}{13}$", "$\\frac{3}{5}$", "$\\frac{3}{4}$"],
        jawaban: 3,
        pembahasan: "Karena $9^2 + 12^2 = 15^2$, segitiga siku-siku di C.\n$\\sin A = \\frac{a}{c} = \\frac{9}{15} = \\frac{3}{5}$.",
        trik_cepat: "Tripel Pythagoras 9-12-15."
    },
    {
        id: 120,
        teks: "Diketahui segitiga ABC dengan sisi $a = 7$ cm, $b = 8$ cm, dan $c = 9$ cm. Nilai $\\cos C$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{3}$", "$\\frac{1}{4}$", "$\\frac{3}{8}$", "$\\frac{5}{12}$", "$\\frac{2}{7}$"],
        jawaban: 4,
        pembahasan: "$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$\n$= \\frac{49 + 64 - 81}{2(7)(8)} = \\frac{32}{112} = \\frac{2}{7}$.",
        trik_cepat: "Aturan kosinus untuk mencari sudut."
    },
    {
        id: 121,
        teks: "Diketahui segitiga ABC dengan sisi $a = 5$ cm, $b = 7$ cm, dan $c = 8$ cm. Luas segitiga tersebut adalah ....",
        gambar: "",
        opsi: ["$10\\sqrt{3}$ cm²", "$12\\sqrt{3}$ cm²", "$14\\sqrt{3}$ cm²", "$16\\sqrt{3}$ cm²", "$18\\sqrt{3}$ cm²"],
        jawaban: 0,
        pembahasan: "$s = \\frac{5+7+8}{2} = 10$\n$L = \\sqrt{10(10-5)(10-7)(10-8)}$\n$= \\sqrt{10 \\cdot 5 \\cdot 3 \\cdot 2} = \\sqrt{300} = 10\\sqrt{3}$ cm².",
        trik_cepat: "Gunakan rumus Heron."
    },

    // --- Level 4 & 5: Persamaan Kuadrat Kosinus & Soal Cerita HOTS ---
    {
        id: 122,
        teks: "Diketahui segitiga ABC dengan panjang AC = 5 cm, AB = 7 cm, dan $m\\angle BCA = 120^\\circ$. Keliling segitiga ABC adalah ... cm.",
        gambar: "",
        opsi: ["14", "15", "16", "17", "18"],
        jawaban: 1,
        pembahasan: "$AB^2 = AC^2 + BC^2 - 2(AC)(BC)\\cos 120^\\circ$\n$49 = 25 + BC^2 + 5BC$\n$BC^2 + 5BC - 24 = 0 \\Rightarrow BC = 3$\nKeliling = $5 + 7 + 3 = 15$ cm.",
        trik_cepat: "Aturan kosinus membentuk persamaan kuadrat."
    },
    {
        id: 123,
        teks: "Sebidang tanah wakaf berbentuk segitiga dengan dua sisi 10 m dan 12 m serta sudut apit $30^\\circ$. Luas tanah wakaf tersebut adalah ....",
        gambar: "",
        opsi: ["40 m²", "50 m²", "30 m²", "60 m²", "70 m²"],
        jawaban: 2,
        pembahasan: "$L = \\frac{1}{2}(10)(12)\\sin 30^\\circ$\n$= 60 \\cdot \\frac{1}{2} = 30$ m².",
        trik_cepat: "$L = \\frac{1}{2}ab\\sin C$."
    },
    {
        id: 124,
        teks: "Seorang surveyor mengukur jarak dua menara masjid. Dari titik pengamatan, menara A berjarak 8 m dan menara B berjarak 5 m dengan sudut antara keduanya $60^\\circ$. Jarak antara kedua menara adalah ....",
        gambar: "",
        opsi: ["5 m", "6 m", "8 m", "7 m", "9 m"],
        jawaban: 3,
        pembahasan: "$d^2 = 8^2 + 5^2 - 2(8)(5)\\cos 60^\\circ$\n$= 64 + 25 - 40 = 49 \\Rightarrow d = 7$ m.",
        trik_cepat: "Aturan kosinus."
    },
    {
        id: 125,
        teks: "Dua masjid A dan B berjarak 7 km. Dari titik C yang berjarak 5 km dari A dan 6 km dari B, nilai $\\cos\\angle ACB$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{4}$", "$\\frac{3}{20}$", "$\\frac{7}{20}$", "$\\frac{2}{5}$", "$\\frac{1}{5}$"],
        jawaban: 4,
        pembahasan: "$\\cos\\angle ACB = \\frac{5^2 + 6^2 - 7^2}{2(5)(6)}$\n$= \\frac{25 + 36 - 49}{60} = \\frac{12}{60} = \\frac{1}{5}$.",
        trik_cepat: "Aturan kosinus untuk sudut apit."
    }
];

// module.exports = soalMatematikaLanjut;