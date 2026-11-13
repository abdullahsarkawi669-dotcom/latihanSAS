// File: soal_matematika_lanjut.js
const soalMatematikaLanjut = [
    // ==================== A. MATRIKS ====================
    // --- Jenis matriks (2 soal) ---
    {
        id: 1,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$. Matriks $A$ disebut ....",
        gambar: "",
        opsi: ["Matriks nol", "Matriks diagonal", "Matriks identitas", "Matriks skalar", "Matriks transpose"],
        jawaban: 2,
        pembahasan: "Matriks $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ adalah matriks identitas ordo 2×2.",
        trik_cepat: "Diagonal utama 1, lainnya 0 → identitas."
    },
    {
        id: 2,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$. Matriks $A$ disebut ....",
        gambar: "",
        opsi: ["Matriks identitas", "Matriks diagonal", "Matriks nol", "Matriks skalar", "Matriks transpose"],
        jawaban: 2,
        pembahasan: "Matriks yang semua elemennya nol disebut matriks nol.",
        trik_cepat: "Semua elemen 0 → matriks nol."
    },
    // --- Elemen matriks (1 soal) ---
    {
        id: 3,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 4 & -2 & 1 & -1 & 0 \\\\ 1 & 3 & -2 & 3 & 2 \\\\ 3 & 2 & 1 & 5 & -8 \\end{pmatrix}$. Jika $a_{ij}$ menyatakan elemen matriks A pada baris ke-$i$ dan kolom ke-$j$, nilai $a_{12} + a_{23}$ adalah ....",
        gambar: "",
        opsi: ["6", "4", "2", "-2", "-4"],
        jawaban: 4,
        pembahasan: "$a_{12} = -2$ (baris 1 kolom 2), $a_{23} = -2$ (baris 2 kolom 3). Jumlah = $-2 + (-2) = -4$.",
        trik_cepat: "Baca posisi (baris, kolom): $a_{12} = -2$, $a_{23} = -2$."
    },
    // --- Transpose (2 soal berdekatan) ---
    {
        id: 4,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$. Nilai $A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 4 \\\\ 3 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 1 \\\\ 3 & 2 \\end{pmatrix}$"],
        jawaban: 1,
        pembahasan: "Transpose menukar baris dan kolom: $A^T = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$.",
        trik_cepat: "Tukar baris $i$ dengan kolom $i$."
    },
    {
        id: 5,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 4 & -1 \\\\ 2 & 3 \\end{pmatrix}$. Nilai $A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 4 & -1 \\\\ 2 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 2 \\\\ 1 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 2 \\\\ -1 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} -4 & -2 \\\\ 1 & -3 \\end{pmatrix}$"],
        jawaban: 3,
        pembahasan: "$A^T = \\begin{pmatrix} 4 & 2 \\\\ -1 & 3 \\end{pmatrix}$.",
        trik_cepat: "Tukar baris dan kolom."
    },
    // --- Determinan 2x2 (3 soal berdekatan) ---
    {
        id: 6,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["6", "5", "7", "8", "11"],
        jawaban: 1,
        pembahasan: "$\\det(A) = (2)(4) - (3)(1) = 8 - 3 = 5$.",
        trik_cepat: "$\\det = ad - bc$."
    },
    {
        id: 7,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["12", "8", "6", "14", "10"],
        jawaban: 4,
        pembahasan: "$\\det = 3(4) - 1(2) = 12 - 2 = 10$.",
        trik_cepat: "$\\det = ad - bc$."
    },
    {
        id: 8,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["9", "10", "11", "8", "12"],
        jawaban: 3,
        pembahasan: "$\\det = 9 - 1 = 8$.",
        trik_cepat: "$\\det = ad - bc$."
    },
    // --- Penjumlahan/pengurangan (3 soal berdekatan) ---
    {
        id: 9,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}$. Hasil $A + B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 3 & 3 \\\\ 7 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 3 \\\\ 6 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 7 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 2 \\\\ 7 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 3 \\\\ 7 & 7 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$A+B = \\begin{pmatrix} 1+2 & 2+1 \\\\ 3+4 & 4+3 \\end{pmatrix} = \\begin{pmatrix} 3 & 3 \\\\ 7 & 7 \\end{pmatrix}$.",
        trik_cepat: "Jumlahkan elemen seposisi."
    },
    {
        id: 10,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$. Hasil $A - B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} -1 & 2 \\\\ 1 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & -2 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & -2 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & 2 \\\\ 2 & 1 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$A-B = \\begin{pmatrix} 1-2 & 2-0 \\\\ 3-1 & 4-3 \\end{pmatrix} = \\begin{pmatrix} -1 & 2 \\\\ 2 & 1 \\end{pmatrix}$.",
        trik_cepat: "Kurangkan elemen seposisi."
    },
    {
        id: 11,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 5 & -5 \\end{pmatrix}$, $B = \\begin{pmatrix} 0 & -2 \\\\ 1 & 4 \\end{pmatrix}$, dan $C = \\begin{pmatrix} -1 & 1 \\\\ 1 & 0 \\end{pmatrix}$. Hasil dari $A + 2B - C$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & -1 \\\\ 0 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 3 \\\\ 0 & -3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -2 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -2 \\\\ 6 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} -3 & 2 \\\\ -1 & 0 \\end{pmatrix}$"],
        jawaban: 3,
        pembahasan: "$2B = \\begin{pmatrix} 0 & -4 \\\\ 2 & 8 \\end{pmatrix}$. $A+2B = \\begin{pmatrix} 2 & -1 \\\\ 7 & 3 \\end{pmatrix}$. Kurangi $C$: $\\begin{pmatrix} 3 & -2 \\\\ 6 & 3 \\end{pmatrix}$.",
        trik_cepat: "Hitung $2B$ dulu, lalu operasi penjumlahan/pengurangan."
    },
    // --- Perkalian matriks (3 soal berdekatan) ---
    {
        id: 12,
        teks: "Hasil dari $\\begin{pmatrix} 3 & 2 \\\\ 5 & -7 \\end{pmatrix} \\begin{pmatrix} 3 & 2 \\\\ 4 & 3 \\end{pmatrix}$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} -1 & -20 \\\\ 14 & -3 \\end{pmatrix}$", "$\\begin{pmatrix} 13 & -8 \\\\ 2 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 15 \\\\ 18 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & -15 \\\\ 7 & -8 \\end{pmatrix}$", "$\\begin{pmatrix} 17 & 12 \\\\ -13 & -11 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$(1,1):3(3)+2(4)=17$, $(1,2):3(2)+2(3)=12$, $(2,1):5(3)+(-7)(4)=-13$, $(2,2):5(2)+(-7)(3)=-11$.",
        trik_cepat: "Baris × kolom."
    },
    {
        id: 13,
        teks: "Jika $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 1 & 0 \\\\ 2 & 3 \\end{pmatrix}$, hasil $A \\cdot B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 4 & 3 \\\\ 10 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 4 \\\\ 12 & 11 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 2 \\\\ 11 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 11 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 11 & 12 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$(1,1):2(1)+1(2)=4$, $(1,2):2(0)+1(3)=3$, $(2,1):3(1)+4(2)=11$, $(2,2):3(0)+4(3)=12$.",
        trik_cepat: "Baris × kolom."
    },
    {
        id: 14,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$. Hasil $A \\cdot B^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 6 \\\\ 7 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 7 \\\\ 6 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 7 \\\\ 6 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 7 \\\\ 6 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 7 \\\\ 6 & 15 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$B^T = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$. $A \\cdot B^T = \\begin{pmatrix} 2 & 7 \\\\ 6 & 15 \\end{pmatrix}$.",
        trik_cepat: "Transpose dulu $B$, lalu kalikan."
    },
    // --- Sifat matriks & pangkat (2 soal) ---
    {
        id: 15,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Nilai $A + A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 3 \\\\ 5 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 5 \\\\ 3 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 5 \\\\ 5 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 5 \\\\ 5 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 5 \\\\ 5 & 4 \\end{pmatrix}$"],
        jawaban: 2,
        pembahasan: "$A^T = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$. $A+A^T = \\begin{pmatrix} 2 & 5 \\\\ 5 & 8 \\end{pmatrix}$.",
        trik_cepat: "Jumlahkan matriks dengan transposenya."
    },
    {
        id: 16,
        teks: "Jika $A = \\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}$, maka $A^2$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 7 & 7 \\\\ 14 & 14 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & -7 \\\\ -14 & 14 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & -7 \\\\ 14 & -14 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & 1 \\\\ 4 & 16 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & -7 \\\\ 14 & 14 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$A^2 = \\begin{pmatrix} 9-2 & -3-4 \\\\ 6+8 & -2+16 \\end{pmatrix} = \\begin{pmatrix} 7 & -7 \\\\ 14 & 14 \\end{pmatrix}$.",
        trik_cepat: "Kalikan matriks dengan dirinya sendiri."
    },
    // --- Invers (3 soal berdekatan) ---
    {
        id: 17,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$. Invers matriks $A$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{5}\\begin{pmatrix} 4 & 1 \\\\ 3 & 2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} -4 & 1 \\\\ 3 & -2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} 4 & -1 \\\\ 3 & 2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} -4 & -1 \\\\ -3 & -2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} 4 & -1 \\\\ -3 & 2 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$\\det = 8-3 = 5$. $A^{-1} = \\frac{1}{5}\\begin{pmatrix} 4 & -1 \\\\ -3 & 2 \\end{pmatrix}$.",
        trik_cepat: "$A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$."
    },
    {
        id: 18,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix}$. Invers matriks $A$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{7}\\begin{pmatrix} 3 & -1 \\\\ 1 & 2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} -3 & 1 \\\\ -1 & -2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} 3 & 1 \\\\ 1 & 2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} -3 & -1 \\\\ 1 & -2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} 3 & 1 \\\\ -1 & 2 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$\\det = 6+1 = 7$. $A^{-1} = \\frac{1}{7}\\begin{pmatrix} 3 & 1 \\\\ -1 & 2 \\end{pmatrix}$.",
        trik_cepat: "$A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$."
    },
    {
        id: 19,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}$. Nilai $A^{-1}$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & 3 \\\\ 1 & -2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & -1 \\\\ -3 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & -3 \\\\ -1 & -2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$\\det = 4-3 = 1$. $A^{-1} = \\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$.",
        trik_cepat: "$\\det = 1$, invers langsung."
    },
    // --- Kombinasi skalar (1 soal) ---
    {
        id: 20,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 5 \\\\ 7 & 3 \\end{pmatrix}$ dan $B = \\begin{pmatrix} -1 & 3 \\\\ 5 & 2 \\end{pmatrix}$. Hasil dari $2A - 5B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 9 & 5 \\\\ -11 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} -9 & -5 \\\\ 11 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & -5 \\\\ 11 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} -9 & 5 \\\\ -11 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & -5 \\\\ -11 & -4 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$2A = \\begin{pmatrix} 4 & 10 \\\\ 14 & 6 \\end{pmatrix}$, $5B = \\begin{pmatrix} -5 & 15 \\\\ 25 & 10 \\end{pmatrix}$. $2A-5B = \\begin{pmatrix} 9 & -5 \\\\ -11 & -4 \\end{pmatrix}$.",
        trik_cepat: "Kalikan skalar dulu, lalu kurangkan."
    },
    // --- Persamaan matriks (2 soal) ---
    {
        id: 21,
        teks: "Diketahui $\\begin{pmatrix} 2a & 7 \\\\ b & 6 \\end{pmatrix} + \\begin{pmatrix} 5 & -3 \\\\ 3c & 2b \\end{pmatrix} = \\begin{pmatrix} 15 & 4 \\\\ a & a-1 \\end{pmatrix}$. Nilai dari $a - 2b - c = ....$",
        gambar: "",
        opsi: ["-9", "-5", "-1", "1", "5"],
        jawaban: 4,
        pembahasan: "(1,1): $2a+5=15 \\Rightarrow a=5$. (2,2): $6+2b=4 \\Rightarrow b=-1$. (2,1): $b+3c=5 \\Rightarrow c=2$. $a-2b-c = 5+2-2=5$.",
        trik_cepat: "Samakan elemen posisi sama, selesaikan sistem."
    },
    {
        id: 22,
        teks: "Diketahui $A = \\begin{pmatrix} a & 2 \\\\ -2 & a \\end{pmatrix}$ dan $4A + 2A^T = \\begin{pmatrix} 6 & 4 \\\\ -4 & 6 \\end{pmatrix}$. Nilai $a$ adalah ....",
        gambar: "",
        opsi: ["-2", "-1", "0", "1", "2"],
        jawaban: 3,
        pembahasan: "$A^T = \\begin{pmatrix} a & -2 \\\\ 2 & a \\end{pmatrix}$. $4A+2A^T = \\begin{pmatrix} 6a & 4 \\\\ -4 & 6a \\end{pmatrix}$. Maka $6a=6 \\Rightarrow a=1$.",
        trik_cepat: "Jumlahkan, samakan elemen diagonal."
    },
    // --- Determinan 3x3 (1 soal) ---
    {
        id: 23,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 3 & 0 \\\\ 1 & 0 & 1 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["-1", "1", "3", "9", "-3"],
        jawaban: 4,
        pembahasan: "Ekspansi baris kedua: $\\det(A) = 3 \\cdot \\det\\begin{pmatrix} 1 & 2 \\\\ 1 & 1 \\end{pmatrix} = 3(1-2) = -3$.",
        trik_cepat: "Ekspansi baris/kolom paling banyak nol."
    },
    // --- Nilai eigen (1 soal) ---
    {
        id: 24,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$. Nilai eigen dari matriks $A$ adalah ....",
        gambar: "",
        opsi: ["2 dan 2", "0 dan 4", "1 dan 2", "3 dan 3", "1 dan 3"],
        jawaban: 4,
        pembahasan: "$\\det(A-\\lambda I) = (2-\\lambda)^2-1 = \\lambda^2-4\\lambda+3 = 0 \\Rightarrow \\lambda=1$ atau $\\lambda=3$.",
        trik_cepat: "Selesaikan $\\det(A-\\lambda I)=0$."
    },
    // --- Soal cerita islami: Matriks (HOTS) ---
    {
        id: 25,
        teks: "Panitia zakat sebuah masjid mencatat penerimaan zakat fitrah dari tiga RT dalam matriks $Z = \\begin{pmatrix} 120 & 80 \\\\ 90 & 110 \\\\ 100 & 95 \\end{pmatrix}$ kg, kolom pertama beras kualitas A dan kolom kedua kualitas B. Total beras kualitas A dan B secara terpisah (sebagai vektor baris) adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 285 & 310 \\end{pmatrix}$", "$\\begin{pmatrix} 310 \\\\ 285 \\end{pmatrix}$", "$\\begin{pmatrix} 200 & 190 \\\\ 220 & 190 \\end{pmatrix}$", "$\\begin{pmatrix} 310 & 285 \\end{pmatrix}$", "$\\begin{pmatrix} 120 & 80 \\\\ 90 & 110 \\\\ 100 & 95 \\end{pmatrix}\\begin{pmatrix}1\\\\1\\end{pmatrix}$"],
        jawaban: 3,
        pembahasan: "Total A = $120+90+100=310$; total B = $80+110+95=285$. Notasi: $\\begin{pmatrix}1&1&1\\end{pmatrix}Z = \\begin{pmatrix}310&285\\end{pmatrix}$.",
        trik_cepat: "Jumlahkan kolom dengan vektor baris satuan."
    },
    {
        id: 26,
        teks: "Sebuah masjid memiliki dua kotak amal A dan B. Pekan pertama: A Rp200.000, B Rp150.000. Pekan kedua: A Rp250.000, B Rp180.000. Data disusun matriks $P = \\begin{pmatrix} 200 & 150 \\\\ 250 & 180 \\end{pmatrix}$ (ribu rupiah) dan dikalikan $Q = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ (bobot pekan 1 dan 2). Hasil $P \\cdot Q$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 550 \\\\ 610 \\end{pmatrix}$", "$\\begin{pmatrix} 500 \\\\ 680 \\end{pmatrix}$", "$\\begin{pmatrix} 450 \\\\ 610 \\end{pmatrix}$", "$\\begin{pmatrix} 500 \\\\ 590 \\end{pmatrix}$", "$\\begin{pmatrix} 500 \\\\ 610 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$P \\cdot Q = \\begin{pmatrix} 200+300 \\\\ 250+360 \\end{pmatrix} = \\begin{pmatrix} 500 \\\\ 610 \\end{pmatrix}$.",
        trik_cepat: "Perkalian matriks 2×2 dengan 2×1: baris × kolom."
    },
    {
        id: 27,
        teks: "Lembaga amil zakat menerima donasi dalam matriks $D = \\begin{pmatrix} 10 & 5 \\\\ 8 & 12 \\end{pmatrix}$ (juta rupiah). Jika setiap donasi dikalikan 2,5 untuk program pendidikan, matriks hasilnya adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 20 & 10 \\\\ 16 & 24 \\end{pmatrix}$", "$\\begin{pmatrix} 12{,}5 & 7{,}5 \\\\ 10{,}5 & 14{,}5 \\end{pmatrix}$", "$\\begin{pmatrix} 25 & 20 \\\\ 12{,}5 & 30 \\end{pmatrix}$", "$\\begin{pmatrix} 25 & 12{,}5 \\\\ 20 & 30 \\end{pmatrix}$", "$\\begin{pmatrix} 30 & 15 \\\\ 24 & 36 \\end{pmatrix}$"],
        jawaban: 3,
        pembahasan: "$2{,}5 \\times \\begin{pmatrix} 10 & 5 \\\\ 8 & 12 \\end{pmatrix} = \\begin{pmatrix} 25 & 12{,}5 \\\\ 20 & 30 \\end{pmatrix}$.",
        trik_cepat: "Perkalian skalar: kalikan setiap elemen."
    },

    // ==================== B. POLINOMIAL ====================
    // --- Derajat & koefisien (2 soal) ---
    {
        id: 28,
        teks: "Derajat polinomial $3x^4 - 2x^3 + x^2 - 5x + 7$ adalah ....",
        gambar: "",
        opsi: ["2", "3", "4", "5", "7"],
        jawaban: 2,
        pembahasan: "Derajat = pangkat tertinggi = 4.",
        trik_cepat: "Lihat pangkat tertinggi variabel."
    },
    {
        id: 29,
        teks: "Koefisien $x^2$ pada polinomial $2x^3 - 4x^2 + 3x - 1$ adalah ....",
        gambar: "",
        opsi: ["2", "-4", "3", "-1", "4"],
        jawaban: 1,
        pembahasan: "Koefisien $x^2$ adalah -4.",
        trik_cepat: "Lihat angka di depan $x^2$."
    },
    // --- Substitusi nilai polinomial (2 soal) ---
    {
        id: 30,
        teks: "Jika $P(x) = x^3 + 2x^2 - 5x + 1$, nilai $P(-2)$ adalah ....",
        gambar: "",
        opsi: ["9", "7", "5", "3", "11"],
        jawaban: 4,
        pembahasan: "$P(-2) = -8 + 8 + 10 + 1 = 11$.",
        trik_cepat: "Substitusi $x=-2$."
    },
    {
        id: 31,
        teks: "Jika $P(x) = 2x^3 - 3x^2 + 4x - 5$, nilai $P(1)$ adalah ....",
        gambar: "",
        opsi: ["-1", "0", "1", "2", "-2"],
        jawaban: 4,
        pembahasan: "$P(1) = 2 - 3 + 4 - 5 = -2$.",
        trik_cepat: "Substitusi $x=1$."
    },
    // --- Teorema sisa (3 soal berdekatan) ---
    {
        id: 32,
        teks: "Sisa pembagian $x^3 - 2x^2 + 3x - 4$ oleh $x - 1$ adalah ....",
        gambar: "",
        opsi: ["-1", "0", "1", "2", "-2"],
        jawaban: 4,
        pembahasan: "Teorema sisa: $P(1) = 1 - 2 + 3 - 4 = -2$.",
        trik_cepat: "Substitusi $x=1$."
    },
    {
        id: 33,
        teks: "Sisa pembagian $x^4 - 3x^3 + 2x^2 - x + 5$ oleh $x + 1$ adalah ....",
        gambar: "",
        opsi: ["10", "8", "6", "4", "12"],
        jawaban: 4,
        pembahasan: "$P(-1) = 1 + 3 + 2 + 1 + 5 = 12$.",
        trik_cepat: "Substitusi $x=-1$."
    },
    {
        id: 34,
        teks: "Sisa pembagian $2x^3 - 4x^2 + 3x - 6$ oleh $x - 2$ adalah ....",
        gambar: "",
        opsi: ["1", "2", "3", "4", "0"],
        jawaban: 4,
        pembahasan: "$P(2) = 16 - 16 + 6 - 6 = 0$.",
        trik_cepat: "Substitusi $x=2$."
    },
    // --- Pembagian sintetik (3 soal berdekatan) ---
    {
        id: 35,
        teks: "Hasil bagi dan sisa pembagian $2x^3 - 5x^2 + 3x - 1$ oleh $x - 2$ adalah ....",
        gambar: "",
        opsi: ["$2x^2 + x - 1$, sisa 1", "$2x^2 - x - 1$, sisa 1", "$2x^2 + x + 1$, sisa 1", "$2x^2 - x + 1$, sisa 2", "$2x^2 - x + 1$, sisa 1"],
        jawaban: 4,
        pembahasan: "Sintetik $x=2$: koefisien $2,-5,3,-1$. Hasil: $2,-1,1$, sisa $1$. Hasil bagi $2x^2-x+1$.",
        trik_cepat: "Pembagian sintetik."
    },
    {
        id: 36,
        teks: "Hasil bagi $x^3 + 3x^2 - 4$ oleh $x - 1$ adalah ....",
        gambar: "",
        opsi: ["$x^2 + 4x - 4$", "$x^2 - 4x + 4$", "$x^2 + 2x + 4$", "$x^2 - 2x - 4$", "$x^2 + 4x + 4$"],
        jawaban: 4,
        pembahasan: "Sintetik $x=1$: koefisien $1,3,0,-4$. Hasil: $1,4,4$, sisa 0. Hasil bagi $x^2+4x+4$.",
        trik_cepat: "Pembagian sintetik."
    },
    {
        id: 37,
        teks: "Hasil dari pembagian $x^4 - 2x^3 - x + 5$ oleh $x - 2$ adalah ....",
        gambar: "",
        opsi: ["$x^3 + 1$", "$x^3 + x + 1$", "$x^3 - x + 1$", "$x^3 - x - 1$", "$x^3 - 1$"],
        jawaban: 4,
        pembahasan: "Sintetik $x=2$: koefisien $1,-2,0,-1,5$. Hasil bagi $x^3-1$, sisa 3.",
        trik_cepat: "Pembagian sintetik."
    },
    // --- Pembagian oleh ax+b (2 soal) ---
    {
        id: 38,
        teks: "Hasil dari $2x^3 + x^2 - 4x + 5$ dibagi $2x - 3$ adalah ....",
        gambar: "",
        opsi: ["$x^2 + 2x - 1$", "$x^2 - 2x + 1$", "$x^2 + x + 2$", "$x^2 - x - 2$", "$x^2 + 2x + 1$"],
        jawaban: 4,
        pembahasan: "Bagi bertahap: hasil $x^2+2x+1$, sisa 8.",
        trik_cepat: "Pembagian polinomial bertahap."
    },
    {
        id: 39,
        teks: "Jika polinomial $x^3 + 6x^2 - 12x - 40$ dibagi $x^2 - 9$, sisanya adalah ....",
        gambar: "",
        opsi: ["$3x + 14$", "$3x - 14$", "$4x - 24$", "$-4x + 24$", "$-3x + 14$"],
        jawaban: 4,
        pembahasan: "$x^3+6x^2-12x-40 = (x^2-9)(x+6) + (-3x+14)$.",
        trik_cepat: "Bagi bertahap, sisa derajat < 2."
    },
    // --- Teorema sisa lanjutan (1 soal) ---
    {
        id: 40,
        teks: "Jika $P(x)$ dibagi $(x-1)$ bersisa 3 dan dibagi $(x+1)$ bersisa -1, sisa pembagian $P(x)$ oleh $(x^2-1)$ adalah ....",
        gambar: "",
        opsi: ["$2x - 1$", "$x + 2$", "$x - 2$", "$-2x + 1$", "$2x + 1$"],
        jawaban: 4,
        pembahasan: "Sisa $ax+b$. $P(1)=a+b=3$, $P(-1)=-a+b=-1$. $a=2$, $b=1$. Sisa $2x+1$.",
        trik_cepat: "Teorema sisa dua titik."
    },
    // --- Faktor polinomial (3 soal berdekatan) ---
    {
        id: 41,
        teks: "Faktor dari polinomial $x^3 - x^2 - 4x + 4$ adalah ....",
        gambar: "",
        opsi: ["$(x-1), (x-1), (x-4)$", "$(x+1), (x-1), (x-2)$", "$(x+1), (x-2), (x+3)$", "$(x+1), (x+1), (x+2)$", "$(x-1), (x-2), (x+2)$"],
        jawaban: 4,
        pembahasan: "$x^3-x^2-4x+4 = x^2(x-1)-4(x-1) = (x-1)(x^2-4) = (x-1)(x-2)(x+2)$.",
        trik_cepat: "Kelompokkan."
    },
    {
        id: 42,
        teks: "Polinomial $x^3 - 3x^2 + 4$ memiliki faktor ....",
        gambar: "",
        opsi: ["$(x-1)$", "$(x+1)$", "$(x-2)$", "$(x+2)$", "$(x-3)$"],
        jawaban: 2,
        pembahasan: "$P(2) = 8-12+4 = 0$, jadi $(x-2)$ faktor.",
        trik_cepat: "Cek akar dengan substitusi."
    },
    {
        id: 43,
        teks: "Polinomial $6x^3 + 13x^2 + qx + 12$ mempunyai faktor $(3x-1)$. Faktor linear yang lain adalah ....",
        gambar: "",
        opsi: ["$2x-1$", "$2x+3$", "$x-4$", "$x+4$", "$x+2$"],
        jawaban: 3,
        pembahasan: "$P(1/3)=0 \\Rightarrow q=-41$. Bagi oleh $3x-1$: hasil $2x^2+5x-12 = (2x-3)(x+4)$.",
        trik_cepat: "Substitusi $x=1/3$ untuk cari $q$, lalu faktorkan."
    },
    // --- Akar-akar polinomial (2 soal) ---
    {
        id: 44,
        teks: "Jika $x^3 - 6x^2 + 11x - 6 = 0$, akar-akarnya adalah ....",
        gambar: "",
        opsi: ["1, 2, 4", "1, 3, 4", "2, 3, 4", "1, 2, 5", "1, 2, 3"],
        jawaban: 4,
        pembahasan: "$P(1)=0, P(2)=0, P(3)=0$. Akar: 1, 2, 3.",
        trik_cepat: "Coba nilai $x$ sederhana."
    },
    {
        id: 45,
        teks: "Polinomial $P(x)$ berderajat 3. Jika $P(1)=0$, $P(2)=0$, $P(3)=0$, dan $P(0)=6$, maka $P(x)$ adalah ....",
        gambar: "",
        opsi: ["$x^3 - 6x^2 + 11x - 6$", "$x^3 + 6x^2 + 11x + 6$", "$x^3 - 6x^2 - 11x + 6$", "$x^3 - 6x^2 + 11x + 6$", "$-x^3 + 6x^2 - 11x + 6$"],
        jawaban: 4,
        pembahasan: "$P(x)=a(x-1)(x-2)(x-3)$. $P(0)=-6a=6 \\Rightarrow a=-1$. $P(x) = -x^3+6x^2-11x+6$.",
        trik_cepat: "Bentuk faktor + substitusi $P(0)$."
    },
    // --- Perkalian polinomial (2 soal) ---
    {
        id: 46,
        teks: "Hasil dari $(2x - 1)(x^2 + 3x - 2)$ adalah ....",
        gambar: "",
        opsi: ["$2x^3 + 5x^2 - 7x - 2$", "$2x^3 - 5x^2 + 7x + 2$", "$2x^3 + 5x^2 + 7x + 2$", "$2x^3 - 5x^2 - 7x - 2$", "$2x^3 + 5x^2 - 7x + 2$"],
        jawaban: 4,
        pembahasan: "$2x(x^2+3x-2) - 1(x^2+3x-2) = 2x^3+5x^2-7x+2$.",
        trik_cepat: "Distributif."
    },
    {
        id: 47,
        teks: "Hasil dari $(x^2 - 2x + 1)(x + 3)$ adalah ....",
        gambar: "",
        opsi: ["$x^3 + x^2 + 5x + 3$", "$x^3 - x^2 - 5x + 3$", "$x^3 + x^2 - 5x - 3$", "$x^3 - x^2 + 5x + 3$", "$x^3 + x^2 - 5x + 3$"],
        jawaban: 4,
        pembahasan: "$x^2(x+3) - 2x(x+3) + 1(x+3) = x^3+x^2-5x+3$.",
        trik_cepat: "Distributif."
    },
    // --- Kuadrat sempurna (1 soal) ---
    {
        id: 48,
        teks: "Luas daerah persegi adalah $(9x^2 + 12x + 4)$ cm$^2$. Panjang sisi persegi tersebut adalah ... cm.",
        gambar: "",
        opsi: ["$3x - 2$", "$-3x + 2$", "$2x + 3$", "$2x - 3$", "$3x + 2$"],
        jawaban: 4,
        pembahasan: "$9x^2+12x+4 = (3x+2)^2$. Sisi = $3x+2$.",
        trik_cepat: "Kenali kuadrat sempurna."
    },
    // --- Soal cerita islami: Polinomial (HOTS) ---
    {
        id: 49,
        teks: "Seorang imam membagi harta warisan. Ahli waris terdiri dari 3 orang dengan bagian masing-masing membentuk akar polinomial $x^3 - 6x^2 + 11x - 6 = 0$ (dalam bagian). Jika total harta Rp60.000.000, bagian terkecil adalah ....",
        gambar: "",
        opsi: ["Rp15.000.000", "Rp20.000.000", "Rp25.000.000", "Rp30.000.000", "Rp10.000.000"],
        jawaban: 4,
        pembahasan: "Akar: 1, 2, 3. Jumlah = 6 bagian. Bagian terkecil = $\\frac{1}{6} \\times 60.000.000 = 10.000.000$.",
        trik_cepat: "Cari akar, jumlahkan, ambil bagian terkecil."
    },
    {
        id: 50,
        teks: "Panitia zakat pertanian mencatat hasil panen padi seorang petani mengikuti polinomial $P(x) = x^3 - 4x^2 + x + 6$ (dalam kuintal) dengan $x$ menyatakan jumlah petak. Jika petani memiliki 1 petak, hasil panennya adalah ....",
        gambar: "",
        opsi: ["6 kuintal", "8 kuintal", "10 kuintal", "12 kuintal", "4 kuintal"],
        jawaban: 4,
        pembahasan: "$P(1) = 1 - 4 + 1 + 6 = 4$ kuintal.",
        trik_cepat: "Substitusi $x=1$."
    },

    // ==================== C. TRIGONOMETRI ====================
    // --- Nilai sudut istimewa (3 soal berdekatan) ---
    {
        id: 51,
        teks: "Nilai dari $\\sin 30^\\circ + \\cos 60^\\circ$ adalah ....",
        gambar: "",
        opsi: ["0", "$\\frac{1}{2}$", "1", "$\\frac{\\sqrt{3}}{2}$", "2"],
        jawaban: 2,
        pembahasan: "$\\sin 30^\\circ = \\frac{1}{2}$, $\\cos 60^\\circ = \\frac{1}{2}$. Jumlah = 1.",
        trik_cepat: "$\\sin 30^\\circ = \\cos 60^\\circ = \\frac{1}{2}$."
    },
    {
        id: 52,
        teks: "Nilai dari $\\tan 60^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{\\sqrt{3}}$", "1", "$\\sqrt{3}$", "$\\sqrt{2}$", "2"],
        jawaban: 2,
        pembahasan: "$\\tan 60^\\circ = \\sqrt{3}$.",
        trik_cepat: "Hafalkan nilai sudut istimewa."
    },
    {
        id: 53,
        teks: "Nilai dari $\\cos 0^\\circ + \\sin 90^\\circ$ adalah ....",
        gambar: "",
        opsi: ["0", "1", "2", "$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{2}$"],
        jawaban: 2,
        pembahasan: "$\\cos 0^\\circ = 1$, $\\sin 90^\\circ = 1$. Jumlah = 2.",
        trik_cepat: "Nilai sudut istimewa."
    },
    // --- Sudut di berbagai kuadran (3 soal berdekatan) ---
    {
        id: 54,
        teks: "Nilai dari $\\cos 120^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{2}$", "$-\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "1"],
        jawaban: 1,
        pembahasan: "$\\cos 120^\\circ = \\cos(180-60) = -\\cos 60^\\circ = -\\frac{1}{2}$.",
        trik_cepat: "Kuadran II: cos negatif."
    },
    {
        id: 55,
        teks: "Nilai dari $\\sin 240^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{2}$", "$-\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "1"],
        jawaban: 3,
        pembahasan: "$\\sin 240^\\circ = \\sin(180+60) = -\\sin 60^\\circ = -\\frac{\\sqrt{3}}{2}$.",
        trik_cepat: "Kuadran III: sin negatif."
    },
    {
        id: 56,
        teks: "Nilai dari $\\cos 150^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{2}$", "$-\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "1"],
        jawaban: 3,
        pembahasan: "$\\cos 150^\\circ = \\cos(180-30) = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$.",
        trik_cepat: "Kuadran II: cos negatif."
    },
    // --- Identitas trigonometri (2 soal) ---
    {
        id: 57,
        teks: "Nilai dari $\\sin^2 30^\\circ + \\cos^2 30^\\circ$ adalah ....",
        gambar: "",
        opsi: ["0", "$\\frac{1}{2}$", "1", "$\\frac{\\sqrt{3}}{2}$", "2"],
        jawaban: 2,
        pembahasan: "Identitas Pythagoras: $\\sin^2\\theta + \\cos^2\\theta = 1$.",
        trik_cepat: "Identitas dasar."
    },
    {
        id: 58,
        teks: "Jika $\\alpha + \\beta = 90^\\circ$, maka $\\sin\\alpha \\cos\\beta + \\cos\\alpha \\sin\\beta = ....$",
        gambar: "",
        opsi: ["0", "$\\frac{1}{2}$", "1", "$\\frac{\\sqrt{2}}{2}$", "$\\sqrt{3}$"],
        jawaban: 2,
        pembahasan: "$\\sin(\\alpha+\\beta) = \\sin 90^\\circ = 1$.",
        trik_cepat: "Identitas $\\sin(A+B)$."
    },
    // --- Perbandingan trigonometri (3 soal berdekatan) ---
    {
        id: 59,
        teks: "Jika $\\sin\\theta = \\frac{3}{5}$ dan $\\theta$ di kuadran I, maka $\\cos\\theta = ....$",
        gambar: "",
        opsi: ["$\\frac{3}{4}$", "$\\frac{5}{4}$", "$\\frac{2}{5}$", "$\\frac{1}{5}$", "$\\frac{4}{5}$"],
        jawaban: 4,
        pembahasan: "$\\cos^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25} \\Rightarrow \\cos\\theta = \\frac{4}{5}$.",
        trik_cepat: "Tripel 3-4-5."
    },
    {
        id: 60,
        teks: "Jika $\\tan\\theta = \\frac{4}{3}$ dan $\\theta$ di kuadran III, maka $\\sin\\theta = ....$",
        gambar: "",
        opsi: ["$\\frac{4}{5}$", "$\\frac{3}{5}$", "$-\\frac{3}{5}$", "$-\\frac{5}{4}$", "$-\\frac{4}{5}$"],
        jawaban: 4,
        pembahasan: "Kuadran III: sin negatif. Tripel 3-4-5: $\\sin\\theta = -\\frac{4}{5}$.",
        trik_cepat: "Kuadran III: $\\sin < 0$."
    },
    {
        id: 61,
        teks: "Jika $\\cos\\theta = \\frac{5}{13}$ dan $\\theta$ di kuadran IV, maka $\\sin\\theta = ....$",
        gambar: "",
        opsi: ["$\\frac{12}{13}$", "$\\frac{5}{12}$", "$-\\frac{5}{12}$", "$\\frac{13}{12}$", "$-\\frac{12}{13}$"],
        jawaban: 4,
        pembahasan: "Kuadran IV: sin negatif. Tripel 5-12-13: $\\sin\\theta = -\\frac{12}{13}$.",
        trik_cepat: "Kuadran IV: $\\sin < 0$."
    },
    // --- Nilai sudut non-istimewa (2 soal) ---
    {
        id: 62,
        teks: "Nilai dari $\\sin 15^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$", "$\\frac{\\sqrt{3}-1}{2}$", "$\\frac{\\sqrt{3}+1}{2}$", "$\\frac{\\sqrt{2}}{4}$", "$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$"],
        jawaban: 4,
        pembahasan: "$\\sin 15^\\circ = \\sin(45-30) = \\frac{\\sqrt{6}-\\sqrt{2}}{4}$.",
        trik_cepat: "Hafalkan nilai $\\sin 15^\\circ$."
    },
    {
        id: 63,
        teks: "Nilai dari $\\sin 45^\\circ + \\cos 45^\\circ$ adalah ....",
        gambar: "",
        opsi: ["1", "$\\frac{\\sqrt{2}}{2}$", "2", "$\\frac{1}{2}$", "$\\sqrt{2}$"],
        jawaban: 4,
        pembahasan: "$\\sin 45^\\circ = \\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$. Jumlah = $\\sqrt{2}$.",
        trik_cepat: "Dua kali $\\frac{\\sqrt{2}}{2}$."
    },
    // --- Persamaan trigonometri sederhana (2 soal) ---
    {
        id: 64,
        teks: "Jika $\\sin x = \\frac{1}{2}$ dan $0^\\circ < x < 90^\\circ$, maka nilai $x$ adalah ....",
        gambar: "",
        opsi: ["30°", "45°", "60°", "90°", "120°"],
        jawaban: 0,
        pembahasan: "$\\sin 30^\\circ = \\frac{1}{2}$, jadi $x=30^\\circ$.",
        trik_cepat: "Nilai sudut istimewa."
    },
    {
        id: 65,
        teks: "Jika $\\tan x = 1$ dan $0^\\circ < x < 90^\\circ$, maka $x = ....$",
        gambar: "",
        opsi: ["30°", "45°", "60°", "90°", "135°"],
        jawaban: 1,
        pembahasan: "$\\tan 45^\\circ = 1$.",
        trik_cepat: "Nilai sudut istimewa."
    },
    // --- Periode & amplitudo (2 soal) ---
    {
        id: 66,
        teks: "Periode dari grafik fungsi $f(x) = 2\\cos(3x + \\pi)$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{8}{3}\\pi$", "$\\frac{3}{2}\\pi$", "$\\frac{4}{3}\\pi$", "$\\frac{2}{3}\\pi$", "$\\frac{1}{3}\\pi$"],
        jawaban: 3,
        pembahasan: "Periode $\\cos(kx)$: $T = 2\\pi/|k| = 2\\pi/3$.",
        trik_cepat: "$T = 2\\pi/|k|$."
    },
    {
        id: 67,
        teks: "Tekanan darah seseorang mengikuti fungsi $P(t) = 20\\sin(160\\pi t) + 100$. Tekanan maksimum (sistolik) orang tersebut adalah ....",
        gambar: "",
        opsi: ["80", "100", "110", "120", "140"],
        jawaban: 3,
        pembahasan: "$P_{\\max} = 20(1) + 100 = 120$.",
        trik_cepat: "Amplitudo 20, nilai tengah 100."
    },
    // --- Soal cerita islami: Trigonometri (HOTS) ---
    {
        id: 68,
        teks: "Sebuah menara masjid diamati dari titik A dengan sudut elevasi $30^\\circ$. Jika jarak titik A ke kaki menara 30 m, tinggi menara tersebut adalah ....",
        gambar: "",
        opsi: ["$15\\sqrt{3}$ m", "$20\\sqrt{3}$ m", "$30\\sqrt{3}$ m", "$40\\sqrt{3}$ m", "$10\\sqrt{3}$ m"],
        jawaban: 4,
        pembahasan: "$\\tan 30^\\circ = \\frac{t}{30} \\Rightarrow t = 30 \\cdot \\frac{\\sqrt{3}}{3} = 10\\sqrt{3}$ m.",
        trik_cepat: "$\\tan\\theta = \\frac{\\text{tinggi}}{\\text{jarak}}$."
    },
    {
        id: 69,
        teks: "Arah kiblat dari suatu kota diukur dengan sudut $295^\\circ$ dari utara searah jarum jam. Nilai $\\cos 295^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$-\\cos 65^\\circ$", "$\\sin 65^\\circ$", "$-\\sin 65^\\circ$", "$\\cos 25^\\circ$", "$\\cos 65^\\circ$"],
        jawaban: 4,
        pembahasan: "$\\cos 295^\\circ = \\cos(360-65) = \\cos 65^\\circ$.",
        trik_cepat: "Kuadran IV: cos positif."
    },
    {
        id: 70,
        teks: "Jadwal salat Asar di suatu kota dinyatakan dengan fungsi $h(t) = 3\\cos(15^\\circ t) + 12$ (dalam jam). Ketinggian matahari maksimum pada fungsi tersebut adalah ....",
        gambar: "",
        opsi: ["9 jam", "12 jam", "15 jam", "18 jam", "21 jam"],
        jawaban: 2,
        pembahasan: "$h_{\\max} = 3(1) + 12 = 15$ jam.",
        trik_cepat: "Nilai maksimum cos = 1."
    },

    // ==================== D. ATURAN SINUS & KOSINUS ====================
    // --- Aturan kosinus (3 soal berdekatan) ---
    {
        id: 71,
        teks: "Diketahui segitiga ABC dengan panjang AC = 5 cm, AB = 7 cm, dan $m\\angle BCA = 120^\\circ$. Keliling segitiga ABC adalah ... cm.",
        gambar: "",
        opsi: ["14", "15", "16", "17", "18"],
        jawaban: 1,
        pembahasan: "$AB^2 = AC^2+BC^2-2(AC)(BC)\\cos 120^\\circ$. $49 = 25+BC^2+5BC$. $BC^2+5BC-24=0 \\Rightarrow BC=3$. Keliling = 15 cm.",
        trik_cepat: "Aturan kosinus."
    },
    {
        id: 72,
        teks: "Diketahui segitiga ABC dengan panjang sisi $a = 8$ cm, $b = 6$ cm, dan sudut $C = 60^\\circ$. Panjang sisi $c$ adalah ....",
        gambar: "",
        opsi: ["$2\\sqrt{7}$ cm", "$2\\sqrt{13}$ cm", "$2\\sqrt{19}$ cm", "$2\\sqrt{21}$ cm", "$2\\sqrt{23}$ cm"],
        jawaban: 1,
        pembahasan: "$c^2 = 64+36-2(8)(6)(1/2) = 52$. $c = 2\\sqrt{13}$.",
        trik_cepat: "Aturan kosinus."
    },
    {
        id: 73,
        teks: "Diketahui segitiga ABC dengan sisi $a = 4$ cm, $b = 5$ cm, dan $\\angle C = 60^\\circ$. Panjang sisi $c$ adalah ....",
        gambar: "",
        opsi: ["$\\sqrt{19}$ cm", "$\\sqrt{21}$ cm", "$\\sqrt{23}$ cm", "$\\sqrt{25}$ cm", "$\\sqrt{27}$ cm"],
        jawaban: 1,
        pembahasan: "$c^2 = 16+25-20 = 21$. $c = \\sqrt{21}$.",
        trik_cepat: "Aturan kosinus."
    },
    // --- Aturan sinus (3 soal berdekatan) ---
    {
        id: 74,
        teks: "Diketahui segitiga ABC dengan $\\angle A = 30^\\circ$, $\\angle B = 45^\\circ$, dan sisi $a = 6$ cm. Panjang sisi $b$ adalah ....",
        gambar: "",
        opsi: ["$3\\sqrt{2}$ cm", "$6\\sqrt{2}$ cm", "$3\\sqrt{3}$ cm", "$6\\sqrt{3}$ cm", "$12$ cm"],
        jawaban: 1,
        pembahasan: "$\\frac{6}{\\sin 30} = \\frac{b}{\\sin 45} \\Rightarrow 12 = b\\sqrt{2} \\Rightarrow b = 6\\sqrt{2}$.",
        trik_cepat: "Aturan sinus."
    },
    {
        id: 75,
        teks: "Diketahui segitiga ABC dengan $\\angle A = 60^\\circ$, $\\angle B = 45^\\circ$, dan sisi $b = 6$ cm. Panjang sisi $a$ adalah ....",
        gambar: "",
        opsi: ["$3\\sqrt{6}$ cm", "$6\\sqrt{6}$ cm", "$3\\sqrt{2}$ cm", "$6\\sqrt{2}$ cm", "$6\\sqrt{3}$ cm"],
        jawaban: 0,
        pembahasan: "$\\frac{a}{\\sin 60} = \\frac{6}{\\sin 45} \\Rightarrow a = 3\\sqrt{6}$.",
        trik_cepat: "Aturan sinus."
    },
    {
        id: 76,
        teks: "Diketahui segitiga ABC dengan $\\angle A = 30^\\circ$, $\\angle B = 60^\\circ$, dan sisi $a = 4$ cm. Panjang sisi $b$ adalah ....",
        gambar: "",
        opsi: ["$4\\sqrt{3}$ cm", "$2\\sqrt{3}$ cm", "$4\\sqrt{2}$ cm", "$2\\sqrt{2}$ cm", "$4$ cm"],
        jawaban: 0,
        pembahasan: "$\\frac{4}{\\sin 30} = \\frac{b}{\\sin 60} \\Rightarrow 8 = \\frac{b}{\\sqrt{3}/2} \\Rightarrow b = 4\\sqrt{3}$.",
        trik_cepat: "Aturan sinus."
    },
    // --- Luas segitiga (3 soal berdekatan) ---
    {
        id: 77,
        teks: "Luas segitiga dengan sisi $a = 8$ cm, $b = 10$ cm, dan sudut $C = 30^\\circ$ adalah ....",
        gambar: "",
        opsi: ["10 cm²", "20 cm²", "30 cm²", "40 cm²", "50 cm²"],
        jawaban: 1,
        pembahasan: "$L = \\frac{1}{2}(8)(10)(1/2) = 20$ cm².",
        trik_cepat: "$L = \\frac{1}{2}ab\\sin C$."
    },
    {
        id: 78,
        teks: "Diketahui segitiga ABC dengan $\\angle A = 30^\\circ$, sisi $b = 10$ cm, dan sisi $c = 12$ cm. Luas segitiga adalah ....",
        gambar: "",
        opsi: ["30 cm²", "40 cm²", "50 cm²", "60 cm²", "70 cm²"],
        jawaban: 0,
        pembahasan: "$L = \\frac{1}{2}(10)(12)(1/2) = 30$ cm².",
        trik_cepat: "$L = \\frac{1}{2}bc\\sin A$."
    },
    {
        id: 79,
        teks: "Diketahui segitiga ABC dengan sisi $a = 5$ cm, $b = 6$ cm, dan $\\angle C = 45^\\circ$. Luas segitiga adalah ....",
        gambar: "",
        opsi: ["$\\frac{15}{2}\\sqrt{2}$ cm²", "$15\\sqrt{2}$ cm²", "$\\frac{15}{4}\\sqrt{2}$ cm²", "$30\\sqrt{2}$ cm²", "$\\frac{15}{2}$ cm²"],
        jawaban: 0,
        pembahasan: "$L = \\frac{1}{2}(5)(6)\\frac{\\sqrt{2}}{2} = \\frac{15}{2}\\sqrt{2}$.",
        trik_cepat: "$L = \\frac{1}{2}ab\\sin C$."
    },
    // --- Rumus Heron (1 soal) ---
    {
        id: 80,
        teks: "Diketahui segitiga ABC dengan sisi $a = 5$ cm, $b = 7$ cm, dan $c = 8$ cm. Luas segitiga tersebut adalah ....",
        gambar: "",
        opsi: ["$10\\sqrt{3}$ cm²", "$12\\sqrt{3}$ cm²", "$14\\sqrt{3}$ cm²", "$16\\sqrt{3}$ cm²", "$18\\sqrt{3}$ cm²"],
        jawaban: 0,
        pembahasan: "$s=10$. $L = \\sqrt{10 \\cdot 5 \\cdot 3 \\cdot 2} = \\sqrt{300} = 10\\sqrt{3}$.",
        trik_cepat: "Rumus Heron."
    },
    // --- Jenis segitiga (1 soal) ---
    {
        id: 81,
        teks: "Diketahui segitiga ABC dengan sisi $a = 6$ cm, $b = 8$ cm, dan $c = 10$ cm. Jenis segitiga tersebut adalah ....",
        gambar: "",
        opsi: ["Segitiga lancip", "Segitiga tumpul", "Segitiga siku-siku", "Segitiga sama sisi", "Segitiga sama kaki"],
        jawaban: 2,
        pembahasan: "$c^2 = 100 = a^2+b^2 = 36+64$. Segitiga siku-siku.",
        trik_cepat: "Cek Pythagoras."
    },
    // --- Sudut dengan aturan kosinus (2 soal) ---
    {
        id: 82,
        teks: "Diketahui segitiga ABC dengan sisi $a = 7$ cm, $b = 8$ cm, dan $c = 9$ cm. Nilai $\\cos C$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{3}$", "$\\frac{2}{7}$", "$\\frac{1}{4}$", "$\\frac{3}{8}$", "$\\frac{5}{12}$"],
        jawaban: 1,
        pembahasan: "$\\cos C = \\frac{49+64-81}{2(7)(8)} = \\frac{32}{112} = \\frac{2}{7}$.",
        trik_cepat: "Aturan kosinus untuk sudut C."
    },
    {
        id: 83,
        teks: "Diketahui segitiga ABC dengan sisi $a = 9$ cm, $b = 12$ cm, dan $c = 15$ cm. Nilai $\\sin A$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{3}{5}$", "$\\frac{4}{5}$", "$\\frac{5}{13}$", "$\\frac{12}{13}$", "$\\frac{3}{4}$"],
        jawaban: 0,
        pembahasan: "Segitiga siku-siku ($9^2+12^2=15^2$). $\\sin A = \\frac{9}{15} = \\frac{3}{5}$.",
        trik_cepat: "Tripel Pythagoras 9-12-15."
    },
    // --- Soal cerita islami: Aturan Sinus/Kosinus (HOTS) ---
    {
        id: 84,
        teks: "Dua masjid A dan B berjarak 7 km. Dari titik C yang berjarak 5 km dari A dan 6 km dari B, nilai $\\cos\\angle ACB$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{4}$", "$\\frac{3}{20}$", "$\\frac{1}{5}$", "$\\frac{7}{20}$", "$\\frac{2}{5}$"],
        jawaban: 2,
        pembahasan: "$\\cos C = \\frac{5^2+6^2-7^2}{2(5)(6)} = \\frac{25+36-49}{60} = \\frac{12}{60} = \\frac{1}{5}$.",
        trik_cepat: "Aturan kosinus."
    },
    {
        id: 85,
        teks: "Seorang surveyor mengukur jarak dua menara masjid. Dari titik pengamatan, menara A berjarak 8 m dan menara B berjarak 5 m dengan sudut antara keduanya $60^\\circ$. Jarak antara kedua menara adalah ....",
        gambar: "",
        opsi: ["5 m", "6 m", "7 m", "8 m", "9 m"],
        jawaban: 2,
        pembahasan: "$d^2 = 8^2+5^2-2(8)(5)\\cos 60^\\circ = 64+25-40 = 49$. $d = 7$ m.",
        trik_cepat: "Aturan kosinus."
    },
    {
        id: 86,
        teks: "Sebidang tanah wakaf berbentuk segitiga dengan dua sisi 10 m dan 12 m serta sudut apit $30^\\circ$. Luas tanah wakaf tersebut adalah ....",
        gambar: "",
        opsi: ["30 m²", "40 m²", "50 m²", "60 m²", "70 m²"],
        jawaban: 0,
        pembahasan: "$L = \\frac{1}{2}(10)(12)\\sin 30^\\circ = 60 \\cdot \\frac{1}{2} = 30$ m².",
        trik_cepat: "$L = \\frac{1}{2}ab\\sin C$."
    }
];

// module.exports = soalMatematikaLanjut;