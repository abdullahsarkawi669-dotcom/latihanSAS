// File: soal_matematika_umum.js
const soalMatematikaUmum = [
    // ==================== A. MATRIKS ====================
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
        opsi: ["Matriks identitas", "Matriks nol", "Matriks diagonal", "Matriks skalar", "Matriks transpose"],
        jawaban: 1,
        pembahasan: "Matriks yang semua elemennya nol disebut matriks nol.",
        trik_cepat: "Semua elemen 0 → matriks nol."
    },
    {
        id: 3,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Nilai $A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 4 \\\\ 3 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 1 \\\\ 3 & 2 \\end{pmatrix}$"],
        jawaban: 3,
        pembahasan: "Transpose menukar baris dan kolom: $A^T = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$.",
        trik_cepat: "Tukar baris $i$ dengan kolom $i$."
    },
    {
        id: 4,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$. Nilai $A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 4 \\\\ 3 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 1 \\\\ 3 & 2 \\end{pmatrix}$"],
        jawaban: 2,
        pembahasan: "$A^T = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$.",
        trik_cepat: "Tukar baris dan kolom."
    },
    {
        id: 5,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 4 & -1 \\\\ 2 & 3 \\end{pmatrix}$. Nilai $A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 4 & -1 \\\\ 2 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 2 \\\\ 1 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} -4 & -2 \\\\ 1 & -3 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 2 \\\\ -1 & 3 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$A^T = \\begin{pmatrix} 4 & 2 \\\\ -1 & 3 \\end{pmatrix}$.",
        trik_cepat: "Tukar baris dan kolom."
    },
    {
        id: 6,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["5", "6", "7", "8", "11"],
        jawaban: 0,
        pembahasan: "$\\det = 2(4) - 3(1) = 8 - 3 = 5$.",
        trik_cepat: "$\\det = ad - bc$."
    },
    {
        id: 7,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["12", "8", "6", "10", "14"],
        jawaban: 3,
        pembahasan: "$\\det = 3(4) - 1(2) = 12 - 2 = 10$.",
        trik_cepat: "$\\det = ad - bc$."
    },
    {
        id: 8,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["-1", "0", "1", "-2", "2"],
        jawaban: 3,
        pembahasan: "$\\det(A) = (1)(4) - (2)(3) = 4 - 6 = -2$.",
        trik_cepat: "$\\det = ad - bc$."
    },
    {
        id: 9,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}$. Hasil $A + B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 3 & 3 \\\\ 7 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 3 \\\\ 6 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 7 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 2 \\\\ 7 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 3 \\\\ 7 & 7 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$A+B = \\begin{pmatrix} 3 & 3 \\\\ 7 & 7 \\end{pmatrix}$.",
        trik_cepat: "Jumlahkan elemen seposisi."
    },
    {
        id: 10,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$. Hasil $A - B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} -1 & 2 \\\\ 1 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & -2 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & -2 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & 2 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$"],
        jawaban: 3,
        pembahasan: "$A-B = \\begin{pmatrix} -1 & 2 \\\\ 2 & 1 \\end{pmatrix}$.",
        trik_cepat: "Kurangkan elemen seposisi."
    },
    {
        id: 11,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 5 & -5 \\end{pmatrix}$, $B = \\begin{pmatrix} 0 & -2 \\\\ 1 & 4 \\end{pmatrix}$, dan $C = \\begin{pmatrix} -1 & 1 \\\\ 1 & 0 \\end{pmatrix}$. Hasil dari $A + 2B - C$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & -1 \\\\ 0 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 3 \\\\ 0 & -3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -2 \\\\ 6 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -2 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} -3 & 2 \\\\ -1 & 0 \\end{pmatrix}$"],
        jawaban: 2,
        pembahasan: "$2B = \\begin{pmatrix} 0 & -4 \\\\ 2 & 8 \\end{pmatrix}$. $A+2B = \\begin{pmatrix} 2 & -1 \\\\ 7 & 3 \\end{pmatrix}$. Kurangi $C$: $\\begin{pmatrix} 3 & -2 \\\\ 6 & 3 \\end{pmatrix}$.",
        trik_cepat: "Hitung $2B$ dulu, lalu operasi penjumlahan/pengurangan matriks."
    },
    {
        id: 12,
        teks: "Jika $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 1 & 0 \\\\ 2 & 3 \\end{pmatrix}$, hasil $A \\cdot B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 4 & 3 \\\\ 10 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 4 \\\\ 12 & 11 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 11 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 2 \\\\ 11 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 11 & 12 \\end{pmatrix}$"],
        jawaban: 2,
        pembahasan: "$(1,1): 2(1)+1(2)=4$, $(1,2):2(0)+1(3)=3$, $(2,1):3(1)+4(2)=11$, $(2,2):3(0)+4(3)=12$.",
        trik_cepat: "Baris × kolom."
    },
    {
        id: 13,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 1 & 2 \\\\ 3 & 1 \\end{pmatrix}$. Hasil $AB$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 5 & 5 \\\\ 10 & 6 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 4 \\\\ 10 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 5 \\\\ 9 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 5 \\\\ 10 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 5 \\\\ 10 & 5 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$AB = \\begin{pmatrix} 5 & 5 \\\\ 10 & 5 \\end{pmatrix}$.",
        trik_cepat: "Baris × kolom."
    },
    {
        id: 14,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$. Hasil $A \\cdot B^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 6 \\\\ 7 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 7 \\\\ 6 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 7 \\\\ 6 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 7 \\\\ 6 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 7 \\\\ 6 & 15 \\end{pmatrix}$"],
        jawaban: 2,
        pembahasan: "$B^T = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$. $A \\cdot B^T = \\begin{pmatrix} 2 & 7 \\\\ 6 & 15 \\end{pmatrix}$.",
        trik_cepat: "Transpose dulu $B$, lalu kalikan."
    },
    {
        id: 15,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Nilai $A + A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 3 \\\\ 5 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 5 \\\\ 3 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 5 \\\\ 5 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 5 \\\\ 5 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 5 \\\\ 5 & 4 \\end{pmatrix}$"],
        jawaban: 3,
        pembahasan: "$A^T = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$. $A+A^T = \\begin{pmatrix} 2 & 5 \\\\ 5 & 8 \\end{pmatrix}$.",
        trik_cepat: "Jumlahkan matriks dengan transposenya."
    },
    {
        id: 16,
        teks: "Jika $A = \\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}$, maka $A^2$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 7 & 7 \\\\ 14 & 14 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & -7 \\\\ -14 & 14 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & -7 \\\\ 14 & -14 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & 1 \\\\ 4 & 16 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & -7 \\\\ 14 & 14 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$A^2 = \\begin{pmatrix} 7 & -7 \\\\ 14 & 14 \\end{pmatrix}$.",
        trik_cepat: "Kalikan matriks dengan dirinya sendiri."
    },
    {
        id: 17,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}$. Nilai $A^{-1}$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & 3 \\\\ 1 & -2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & -1 \\\\ -3 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & -3 \\\\ -1 & -2 \\end{pmatrix}$"],
        jawaban: 3,
        pembahasan: "$\\det = 4-3 = 1$. $A^{-1} = \\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$.",
        trik_cepat: "$\\det = 1$, invers langsung."
    },
    {
        id: 18,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$. Invers matriks $A$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{5}\\begin{pmatrix} 4 & 1 \\\\ 3 & 2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} -4 & 1 \\\\ 3 & -2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} 4 & -1 \\\\ 3 & 2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} -4 & -1 \\\\ -3 & -2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} 4 & -1 \\\\ -3 & 2 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$\\det = 8-3 = 5$. $A^{-1} = \\frac{1}{5}\\begin{pmatrix} 4 & -1 \\\\ -3 & 2 \\end{pmatrix}$.",
        trik_cepat: "$A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$."
    },
    {
        id: 19,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix}$. Invers matriks $A$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{7}\\begin{pmatrix} 3 & -1 \\\\ 1 & 2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} -3 & 1 \\\\ -1 & -2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} 3 & 1 \\\\ 1 & 2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} -3 & -1 \\\\ 1 & -2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} 3 & 1 \\\\ -1 & 2 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$\\det = 6+1 = 7$. $A^{-1} = \\frac{1}{7}\\begin{pmatrix} 3 & 1 \\\\ -1 & 2 \\end{pmatrix}$.",
        trik_cepat: "$A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$."
    },
    {
        id: 20,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 5 \\\\ 7 & 3 \\end{pmatrix}$ dan $B = \\begin{pmatrix} -1 & 3 \\\\ 5 & 2 \\end{pmatrix}$. Hasil dari $2A - 5B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 9 & -5 \\\\ -11 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & 5 \\\\ -11 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} -9 & -5 \\\\ 11 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & -5 \\\\ 11 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} -9 & 5 \\\\ -11 & 4 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$2A = \\begin{pmatrix} 4 & 10 \\\\ 14 & 6 \\end{pmatrix}$, $5B = \\begin{pmatrix} -5 & 15 \\\\ 25 & 10 \\end{pmatrix}$. $2A-5B = \\begin{pmatrix} 9 & -5 \\\\ -11 & -4 \\end{pmatrix}$.",
        trik_cepat: "Kalikan skalar dulu, lalu kurangkan."
    },
    {
        id: 21,
        teks: "Diketahui $\\begin{pmatrix} 2a & 7 \\\\ b & 6 \\end{pmatrix} + \\begin{pmatrix} 5 & -3 \\\\ 3c & 2b \\end{pmatrix} = \\begin{pmatrix} 15 & 4 \\\\ a & a-1 \\end{pmatrix}$. Nilai dari $a - 2b - c = ....$",
        gambar: "",
        opsi: ["-9", "-5", "-1", "1", "5"],
        jawaban: 4,
        pembahasan: "Dari (1,1): $2a + 5 = 15 \\Rightarrow a = 5$. Dari (2,2): $6 + 2b = a - 1 = 4 \\Rightarrow 2b = -2 \\Rightarrow b = -1$. Dari (2,1): $b + 3c = a = 5 \\Rightarrow -1 + 3c = 5 \\Rightarrow c = 2$. Nilai $a - 2b - c = 5 - 2(-1) - 2 = 5$.",
        trik_cepat: "Samakan elemen posisi sama, selesaikan sistem persamaan."
    },
    {
        id: 22,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$. Nilai eigen dari matriks $A$ adalah ....",
        gambar: "",
        opsi: ["2 dan 2", "0 dan 4", "1 dan 3", "1 dan 2", "3 dan 3"],
        jawaban: 2,
        pembahasan: "$\\det(A-\\lambda I) = (2-\\lambda)^2 - 1 = \\lambda^2 - 4\\lambda + 3 = 0 \\Rightarrow \\lambda = 1$ atau $\\lambda = 3$.",
        trik_cepat: "Selesaikan $\\det(A-\\lambda I)=0$."
    },
    {
        id: 23,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 3 & 0 \\\\ 1 & 0 & 1 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["-3", "-1", "1", "3", "9"],
        jawaban: 0,
        pembahasan: "Ekspansi baris kedua: $\\det(A) = 3 \\cdot \\det\\begin{pmatrix} 1 & 2 \\\\ 1 & 1 \\end{pmatrix} = 3(1 - 2) = 3(-1) = -3$.",
        trik_cepat: "Ekspansi baris/kolom yang paling banyak nol."
    },
    {
        id: 24,
        teks: "Dalam pencatatan zakat, sebuah lembaga menerima tiga jenis donasi yang disusun dalam matriks $D = \\begin{pmatrix} 10 & 5 \\\\ 8 & 12 \\end{pmatrix}$ (dalam juta rupiah). Jika setiap donasi dikalikan 2,5 untuk program pendidikan, matriks hasilnya adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 20 & 10 \\\\ 16 & 24 \\end{pmatrix}$", "$\\begin{pmatrix} 12{,}5 & 7{,}5 \\\\ 10{,}5 & 14{,}5 \\end{pmatrix}$", "$\\begin{pmatrix} 25 & 20 \\\\ 12{,}5 & 30 \\end{pmatrix}$", "$\\begin{pmatrix} 30 & 15 \\\\ 24 & 36 \\end{pmatrix}$", "$\\begin{pmatrix} 25 & 12{,}5 \\\\ 20 & 30 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "Setiap elemen dikalikan 2,5: $2{,}5 \\times \\begin{pmatrix} 10 & 5 \\\\ 8 & 12 \\end{pmatrix} = \\begin{pmatrix} 25 & 12{,}5 \\\\ 20 & 30 \\end{pmatrix}$.",
        trik_cepat: "Perkalian skalar: kalikan setiap elemen dengan skalar."
    },
    {
        id: 25,
        teks: "Sebuah masjid memiliki dua jenis kotak amal: kotak A dan kotak B. Pada pekan pertama, kotak A terkumpul Rp200.000 dan kotak B Rp150.000. Pada pekan kedua, kotak A terkumpul Rp250.000 dan kotak B Rp180.000. Jika data disusun dalam matriks $P = \\begin{pmatrix} 200 & 150 \\\\ 250 & 180 \\end{pmatrix}$ (dalam ribuan rupiah), dan dikalikan dengan matriks $Q = \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ untuk menghitung total dengan bobot 1 untuk pekan pertama dan 2 untuk pekan kedua, hasil $P \\cdot Q$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 500 \\\\ 610 \\end{pmatrix}$", "$\\begin{pmatrix} 550 \\\\ 610 \\end{pmatrix}$", "$\\begin{pmatrix} 500 \\\\ 680 \\end{pmatrix}$", "$\\begin{pmatrix} 450 \\\\ 610 \\end{pmatrix}$", "$\\begin{pmatrix} 500 \\\\ 590 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$P \\cdot Q = \\begin{pmatrix} 200 & 150 \\\\ 250 & 180 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 200(1) + 150(2) \\\\ 250(1) + 180(2) \\end{pmatrix} = \\begin{pmatrix} 500 \\\\ 610 \\end{pmatrix}$.",
        trik_cepat: "Perkalian matriks 2×2 dengan matriks 2×1: baris × kolom."
    },
    {
        id: 26,
        teks: "Panitia zakat fitrah di sebuah desa mencatat beras yang terkumpul dari tiga dusun dalam matriks $Z = \\begin{pmatrix} 120 & 80 \\\\ 90 & 110 \\\\ 100 & 95 \\end{pmatrix}$ kg, dengan kolom pertama beras kualitas A dan kolom kedua kualitas B. Total beras kualitas A dan B secara terpisah, jika dinyatakan sebagai vektor baris, adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 285 & 310 \\end{pmatrix}$", "$\\begin{pmatrix} 200 & 190 \\\\ 220 & 190 \\end{pmatrix}$", "$\\begin{pmatrix} 310 \\\\ 285 \\end{pmatrix}$", "$\\begin{pmatrix} 310 & 285 \\end{pmatrix}$", "$\\begin{pmatrix} 120 & 80 \\\\ 90 & 110 \\\\ 100 & 95 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\begin{pmatrix} 200 \\\\ 200 \\\\ 195 \\end{pmatrix}$"],
        jawaban: 3,
        pembahasan: "Total kualitas A = $120+90+100=310$; total kualitas B = $80+110+95=285$. Dalam notasi matriks: $\\begin{pmatrix} 1 & 1 & 1 \\end{pmatrix} Z = \\begin{pmatrix} 310 & 285 \\end{pmatrix}$.",
        trik_cepat: "Jumlahkan kolom dengan vektor baris satuan."
    },

    // ==================== B. FUNGSI & KOMPOSISI ====================
    {
        id: 27,
        teks: "Diketahui $f(x) = x^2 - 2x + 3$. Nilai $f(2)$ adalah ....",
        gambar: "",
        opsi: ["1", "2", "4", "3", "5"],
        jawaban: 3,
        pembahasan: "$f(2) = 4 - 4 + 3 = 3$.",
        trik_cepat: "Substitusi $x=2$."
    },
    {
        id: 28,
        teks: "Jika $f(x) = x^2 + 2x + 1$, maka $f(-1)$ adalah ....",
        gambar: "",
        opsi: ["-1", "1", "0", "2", "4"],
        jawaban: 2,
        pembahasan: "$f(-1) = 1 - 2 + 1 = 0$.",
        trik_cepat: "Substitusi $x=-1$."
    },
    {
        id: 29,
        teks: "Jika $f(x) = x^2 - 4$, maka $f(f(2))$ adalah ....",
        gambar: "",
        opsi: ["0", "4", "12", "-4", "16"],
        jawaban: 3,
        pembahasan: "$f(2)=4-4=0$, $f(0)=0-4=-4$.",
        trik_cepat: "Hitung dalam: $f(2)=0$, lalu $f(0)=-4$."
    },
    {
        id: 30,
        teks: "Jika $f(x) = 2x + 3$, maka $f^{-1}(7)$ adalah ....",
        gambar: "",
        opsi: ["3", "2", "4", "5", "6"],
        jawaban: 1,
        pembahasan: "$2x+3=7 \\Rightarrow 2x=4 \\Rightarrow x=2$.",
        trik_cepat: "Cari $x$ sehingga $f(x)=7$."
    },
    {
        id: 31,
        teks: "Diketahui $f(x) = 3x - 2$. Nilai $f^{-1}(4)$ adalah ....",
        gambar: "",
        opsi: ["1", "3", "2", "4", "5"],
        jawaban: 2,
        pembahasan: "$3x-2=4 \\Rightarrow 3x=6 \\Rightarrow x=2$.",
        trik_cepat: "Cari $x$ sehingga $f(x)=4$."
    },
    {
        id: 32,
        teks: "Diketahui $f(x) = \\frac{2x}{x-1}$. Nilai $f^{-1}(4)$ adalah ....",
        gambar: "",
        opsi: ["0", "1", "2", "3", "4"],
        jawaban: 2,
        pembahasan: "Cari $x$ sehingga $f(x) = 4$: $\\frac{2x}{x-1} = 4 \\Rightarrow 2x = 4(x-1) \\Rightarrow 2x = 4x - 4 \\Rightarrow 2x = 4 \\Rightarrow x = 2$.",
        trik_cepat: "Cari $x$ sehingga $f(x) = 4$, atau gunakan rumus $f^{-1}(x) = \\frac{x}{x-2}$."
    },
    {
        id: 33,
        teks: "Jika $f(x) = 2x + 1$ dan $g(x) = x^2$, maka $(g \\circ f)(2) = ...$",
        gambar: "",
        opsi: ["9", "16", "25", "36", "49"],
        jawaban: 2,
        pembahasan: "$f(2)=5$, $g(5)=25$.",
        trik_cepat: "Hitung dalam dulu: $f(2)=5$, lalu $g(5)=25$."
    },
    {
        id: 34,
        teks: "Diketahui $f(x) = x + 3$ dan $g(x) = x^2 - 1$. Nilai $(g \\circ f)(-1)$ adalah ....",
        gambar: "",
        opsi: ["4", "3", "5", "6", "7"],
        jawaban: 1,
        pembahasan: "$f(-1)=-1+3=2$, $g(2)=4-1=3$.",
        trik_cepat: "Hitung dalam dulu: $f(-1)=2$, lalu $g(2)=3$."
    },
    {
        id: 35,
        teks: "Diketahui $f(x) = 2x + 1$ dan $g(x) = x^2 - 3$. Nilai $(f \\circ g)(2)$ adalah ....",
        gambar: "",
        opsi: ["1", "2", "3", "4", "5"],
        jawaban: 2,
        pembahasan: "$g(2)=4-3=1$, $f(1)=2(1)+1=3$.",
        trik_cepat: "Hitung $g(2)$ dulu, lalu $f(g(2))$."
    },
    {
        id: 36,
        teks: "Jika $f(x) = 2x - 1$, maka $f^{-1}(x)$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{x-1}{2}$", "$\\frac{x+1}{2}$", "$2x+1$", "$2x-1$", "$\\frac{1}{2x-1}$"],
        jawaban: 1,
        pembahasan: "$y = 2x-1 \\Rightarrow x = \\frac{y+1}{2}$. $f^{-1}(x) = \\frac{x+1}{2}$.",
        trik_cepat: "Tukar $x$ dan $y$, selesaikan untuk $y$."
    },
    {
        id: 37,
        teks: "Jika $f(x) = \\frac{x+1}{x-2}$, maka $f^{-1}(x)$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{2x-1}{x-1}$", "$\\frac{x+1}{x-2}$", "$\\frac{2x+1}{x-1}$", "$\\frac{x-1}{2x+1}$", "$\\frac{x+2}{x-1}$"],
        jawaban: 2,
        pembahasan: "$y = \\frac{x+1}{x-2} \\Rightarrow y(x-2) = x+1 \\Rightarrow xy-2y = x+1 \\Rightarrow xy-x = 2y+1 \\Rightarrow x(y-1) = 2y+1 \\Rightarrow x = \\frac{2y+1}{y-1}$. Jadi $f^{-1}(x) = \\frac{2x+1}{x-1}$.",
        trik_cepat: "Tukar $x$ dan $y$, selesaikan untuk $y$."
    },
    {
        id: 38,
        teks: "Jika $f(x) = x^2 + 1$ dan $g(x) = 2x$, maka $(f \\circ g)(x)$ adalah ....",
        gambar: "",
        opsi: ["$2x^2 + 1$", "$4x^2 + 1$", "$4x^2 + 2$", "$2x^2 + 2$", "$x^2 + 2x + 1$"],
        jawaban: 1,
        pembahasan: "$(f \\circ g)(x) = f(2x) = (2x)^2 + 1 = 4x^2 + 1$.",
        trik_cepat: "Substitusi $g(x)$ ke $f(x)$."
    },
    {
        id: 39,
        teks: "Jika $f(x) = \\frac{1}{x}$ dan $g(x) = 2x + 1$, maka $(f \\circ g)(x)$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{2}{x} + 1$", "$\\frac{1}{2x+1}$", "$\\frac{1}{2x} + 1$", "$\\frac{2x+1}{x}$", "$\\frac{x}{2x+1}$"],
        jawaban: 1,
        pembahasan: "$(f \\circ g)(x) = f(2x+1) = \\frac{1}{2x+1}$.",
        trik_cepat: "Substitusi $g(x)$ ke $f(x)$."
    },
    {
        id: 40,
        teks: "Diketahui fungsi $f(x) = x^2 + x + 1$ dan $g(x) = 2x - 3$. Hasil dari $(f \\circ g)(x)$ adalah ....",
        gambar: "",
        opsi: ["$4x^2 + 10x + 7$", "$4x^2 - 10x - 7$", "$2x^2 - 10x + 7$", "$4x^2 - 12x + 7$", "$4x^2 - 10x + 7$"],
        jawaban: 4,
        pembahasan: "$(f \\circ g)(x) = f(2x-3) = (2x-3)^2 + (2x-3) + 1 = 4x^2 - 12x + 9 + 2x - 3 + 1 = 4x^2 - 10x + 7$.",
        trik_cepat: "Substitusi $g(x)$ ke $f(x)$, lalu sederhanakan."
    },
    {
        id: 41,
        teks: "Diketahui $(f \\circ g)(x) = 3^{2x+3}$ dan $g(x) = 2x + 3$. Rumus $f(x)$ adalah ....",
        gambar: "",
        opsi: ["$2 \\cdot 3^x$", "$3^{x+2}$", "$3^x$", "$3^{x-2}$", "$3^{2x}$"],
        jawaban: 2,
        pembahasan: "$(f \\circ g)(x) = f(g(x)) = f(2x+3) = 3^{2x+3}$. Jika $f(x) = 3^x$, maka $f(2x+3) = 3^{2x+3}$. Jadi $f(x) = 3^x$.",
        trik_cepat: "Misalkan $u = g(x) = 2x+3$, maka $f(u) = 3^u$, sehingga $f(x) = 3^x$."
    },
    {
        id: 42,
        teks: "Diketahui $(f \\circ g)(x) = 4x^2 + 4x - 5$ dan $g(x) = 2x + 2$. Invers fungsi $f(x)$ adalah ....",
        gambar: "",
        opsi: ["$2 \\pm \\sqrt{6+x}$", "$2 \\pm \\sqrt{6-x}$", "$2 \\pm 2\\sqrt{6+x}$", "$1 \\pm \\sqrt{6+x}$", "$1 \\pm \\sqrt{6-x}$"],
        jawaban: 3,
        pembahasan: "Misalkan $u = g(x) = 2x+2$, maka $x = \\frac{u-2}{2}$. $f(u) = 4\\left(\\frac{u-2}{2}\\right)^2 + 4\\left(\\frac{u-2}{2}\\right) - 5 = u^2 - 2u - 5$. Invers: $y = x^2-2x-5 \\Rightarrow x = 1 \\pm \\sqrt{6+y}$. Jadi $f^{-1}(x) = 1 \\pm \\sqrt{6+x}$.",
        trik_cepat: "Cari $f(x)$ dengan substitusi balik $g^{-1}(x)$, lalu selesaikan persamaan kuadrat untuk invers."
    },
    {
        id: 43,
        teks: "Diketahui $f(x) = x^2 - 4x + 5$ dengan daerah asal $\\{x \\mid -1 \\le x \\le 3, x \\in \\mathbb{R}\\}$. Daerah hasil fungsi $f$ adalah ....",
        gambar: "",
        opsi: ["$\\{y \\mid -1 \\le y \\le 10, y \\in \\mathbb{R}\\}$", "$\\{y \\mid 1 \\le y \\le 10, y \\in \\mathbb{R}\\}$", "$\\{y \\mid 0 \\le y \\le 10, y \\in \\mathbb{R}\\}$", "$\\{y \\mid 2 \\le y \\le 10, y \\in \\mathbb{R}\\}$", "$\\{y \\mid 1 \\le y \\le 12, y \\in \\mathbb{R}\\}$"],
        jawaban: 1,
        pembahasan: "Titik puncak: $x_p = 2$. $f(2) = 1$ (minimum). $f(-1)=10$, $f(3)=2$. Maksimum = 10. Daerah hasil $= \\{y \\mid 1 \\le y \\le 10, y \\in \\mathbb{R}\\}$.",
        trik_cepat: "Cek titik puncak dan nilai di ujung interval."
    },
    {
        id: 44,
        teks: "Diketahui $f(x) = 2x + 1$ dan $g(x) = x - 1$. Nilai $(f^{-1} \\circ g^{-1})(4)$ adalah ....",
        gambar: "",
        opsi: ["1", "2", "3", "4", "5"],
        jawaban: 1,
        pembahasan: "$g^{-1}(x) = x + 1 \\Rightarrow g^{-1}(4) = 5$. $f^{-1}(x) = \\frac{x-1}{2} \\Rightarrow f^{-1}(5) = 2$. Jadi $(f^{-1} \\circ g^{-1})(4) = 2$.",
        trik_cepat: "Hitung $g^{-1}(4)$ dulu, lalu $f^{-1}$ dari hasilnya."
    },
    {
        id: 45,
        teks: "Diketahui $f(x) = 2x + 3$ dan $(f \\circ g)(x) = 4x + 7$. Rumus $g(x)$ adalah ....",
        gambar: "",
        opsi: ["$2x + 4$", "$2x - 2$", "$2x + 2$", "$4x + 4$", "$4x - 2$"],
        jawaban: 2,
        pembahasan: "$f(g(x)) = 2g(x) + 3 = 4x + 7 \\Rightarrow 2g(x) = 4x + 4 \\Rightarrow g(x) = 2x + 2$.",
        trik_cepat: "Substitusi $f$ ke komposisi, selesaikan untuk $g(x)$."
    },
    {
        id: 46,
        teks: "Seorang santri menghafal Al-Qur'an dengan target harian. Fungsi $f(t) = 2t + 1$ menyatakan jumlah halaman yang dihafal setelah $t$ jam belajar, dan fungsi $g(x) = 3x$ menyatakan jumlah halaman yang diulang (murajaah) berdasarkan jumlah halaman yang dihafal. Jika santri belajar selama 2 jam, maka jumlah halaman yang diulang adalah ....",
        gambar: "",
        opsi: ["18 halaman", "21 halaman", "15 halaman", "24 halaman", "27 halaman"],
        jawaban: 2,
        pembahasan: "Halaman dihafal: $f(2) = 2(2)+1 = 5$. Halaman diulang: $g(5) = 3(5) = 15$. Jadi $(g \\circ f)(2) = 15$ halaman.",
        trik_cepat: "Hitung $f(2)$ dulu, lalu masukkan ke $g$."
    },
    {
        id: 47,
        teks: "Biaya konsumsi sebuah kajian dinyatakan dengan fungsi $f(x) = 15.000x$ (dalam rupiah) untuk $x$ peserta, dan biaya tambahan (sewa ruangan) dinyatakan dengan $g(y) = y + 50.000$. Total biaya untuk 10 peserta adalah ....",
        gambar: "",
        opsi: ["Rp150.000", "Rp180.000", "Rp220.000", "Rp200.000", "Rp250.000"],
        jawaban: 3,
        pembahasan: "$f(10) = 15.000 \\times 10 = 150.000$. $g(150.000) = 150.000 + 50.000 = 200.000$. Jadi $(g \\circ f)(10) = 200.000$.",
        trik_cepat: "Hitung $f(10)$ dulu, lalu $g(f(10))$."
    },
    {
        id: 48,
        teks: "Seorang muzakki menunaikan zakat melalui lembaga amil. Lembaga menyalurkan zakat dengan fungsi $f(x) = 0{,}8x$ (80% disalurkan) dan biaya operasional $g(y) = y - 10.000$. Jika zakat yang terkumpul Rp1.000.000, dana yang sampai kepada mustahik setelah dipotong biaya operasional adalah ....",
        gambar: "",
        opsi: ["Rp800.000", "Rp810.000", "Rp790.000", "Rp820.000", "Rp850.000"],
        jawaban: 2,
        pembahasan: "$f(1.000.000) = 0{,}8 \\times 1.000.000 = 800.000$. $g(800.000) = 800.000 - 10.000 = 790.000$. Jadi $(g \\circ f)(1.000.000) = 790.000$.",
        trik_cepat: "Hitung penyaluran dulu, lalu kurangi biaya operasional."
    },

    // ==================== C. LINGKARAN ====================
    {
        id: 49,
        teks: "Diketahui lingkaran dengan pusat O dan jari-jari 10 cm. Panjang diameter lingkaran tersebut adalah ....",
        gambar: "",
        opsi: ["5 cm", "10 cm", "15 cm", "20 cm", "25 cm"],
        jawaban: 3,
        pembahasan: "$d = 2r = 2 \\times 10 = 20$ cm.",
        trik_cepat: "$d = 2r$."
    },
    {
        id: 50,
        teks: "Sebuah lingkaran memiliki diameter 14 cm. Keliling lingkaran tersebut adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["22 cm", "44 cm", "66 cm", "88 cm", "154 cm"],
        jawaban: 1,
        pembahasan: "$K = \\pi d = \\frac{22}{7} \\times 14 = 44$ cm.",
        trik_cepat: "$K = \\pi d$."
    },
    {
        id: 51,
        teks: "Sebuah lingkaran memiliki jari-jari 7 cm. Luas lingkaran tersebut adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["144 cm²", "154 cm²", "134 cm²", "124 cm²", "114 cm²"],
        jawaban: 1,
        pembahasan: "$L = \\pi r^2 = \\frac{22}{7} \\times 49 = 154$ cm².",
        trik_cepat: "$L = \\pi r^2$."
    },
    {
        id: 52,
        teks: "Sebuah lingkaran memiliki keliling 44 cm. Jari-jari lingkaran tersebut adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["5 cm", "6 cm", "7 cm", "8 cm", "9 cm"],
        jawaban: 2,
        pembahasan: "$K = 2\\pi r \\Rightarrow 44 = 2 \\times \\frac{22}{7} \\times r \\Rightarrow r = 7$ cm.",
        trik_cepat: "$r = \\frac{K}{2\\pi}$."
    },
    {
        id: 53,
        teks: "Sebuah lingkaran memiliki luas 154 cm². Jari-jari lingkaran tersebut adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["6 cm", "5 cm", "7 cm", "8 cm", "9 cm"],
        jawaban: 2,
        pembahasan: "$L = \\pi r^2 \\Rightarrow 154 = \\frac{22}{7} \\times r^2 \\Rightarrow r^2 = 49 \\Rightarrow r = 7$ cm.",
        trik_cepat: "$r = \\sqrt{\\frac{L}{\\pi}}$."
    },
    {
        id: 54,
        teks: "Sudut keliling yang menghadap diameter lingkaran besarnya ....",
        gambar: "",
        opsi: ["30°", "45°", "60°", "90°", "180°"],
        jawaban: 3,
        pembahasan: "Sudut keliling yang menghadap diameter = $90^\\circ$ (Teorema Thales).",
        trik_cepat: "Sudut keliling menghadap diameter = 90°."
    },
    {
        id: 55,
        teks: "Jika sudut pusat suatu lingkaran $120^\\circ$, maka sudut keliling yang menghadap busur yang sama adalah ....",
        gambar: "",
        opsi: ["30°", "60°", "90°", "120°", "240°"],
        jawaban: 1,
        pembahasan: "Sudut keliling = $\\frac{1}{2} \\times 120^\\circ = 60^\\circ$.",
        trik_cepat: "Sudut keliling = ½ sudut pusat."
    },
    {
        id: 56,
        teks: "Jika sudut keliling suatu lingkaran $40^\\circ$, maka sudut pusat yang menghadap busur yang sama adalah ....",
        gambar: "",
        opsi: ["20°", "40°", "60°", "80°", "100°"],
        jawaban: 3,
        pembahasan: "Sudut pusat = $2 \\times 40^\\circ = 80^\\circ$.",
        trik_cepat: "Sudut pusat = 2 × sudut keliling."
    },
    {
        id: 57,
        teks: "Diketahui lingkaran dengan pusat O. Titik A, B, C berada pada lingkaran. Jika $\\angle ABC = 60^\\circ$, besar $\\angle AOC$ adalah ....",
        gambar: "",
        opsi: ["30°", "60°", "90°", "120°", "180°"],
        jawaban: 3,
        pembahasan: "Sudut pusat = $2 \\times 60^\\circ = 120^\\circ$.",
        trik_cepat: "Sudut pusat = 2 × sudut keliling."
    },
    {
        id: 58,
        teks: "Diketahui lingkaran dengan jari-jari 10 cm. Panjang tali busur terpanjang adalah ....",
        gambar: "",
        opsi: ["5 cm", "10 cm", "15 cm", "20 cm", "25 cm"],
        jawaban: 3,
        pembahasan: "Tali busur terpanjang = diameter = $2r = 20$ cm.",
        trik_cepat: "Tali busur terpanjang = diameter."
    },
    {
        id: 59,
        teks: "Sebuah lingkaran dengan pusat O memiliki titik A dan B pada lingkaran. Jika $\\angle AOB = 80^\\circ$, besar $\\angle OAB$ adalah ....",
        gambar: "",
        opsi: ["40°", "50°", "60°", "70°", "80°"],
        jawaban: 1,
        pembahasan: "Segitiga OAB sama kaki. $\\angle OAB = \\frac{180^\\circ - 80^\\circ}{2} = 50^\\circ$.",
        trik_cepat: "Segitiga sama kaki, jumlah sudut 180°."
    },
    {
        id: 60,
        teks: "Diketahui dua lingkaran bersinggungan luar. Jika jari-jari lingkaran pertama 8 cm dan jari-jari lingkaran kedua 4 cm, jarak pusat kedua lingkaran adalah ....",
        gambar: "",
        opsi: ["4 cm", "8 cm", "12 cm", "16 cm", "20 cm"],
        jawaban: 2,
        pembahasan: "Jarak pusat = $R + r = 8 + 4 = 12$ cm.",
        trik_cepat: "Bersinggungan luar: $p = R + r$."
    },
    {
        id: 61,
        teks: "Diketahui dua lingkaran bersinggungan dalam. Jika jari-jari lingkaran besar 10 cm dan jari-jari lingkaran kecil 4 cm, jarak pusat kedua lingkaran adalah ....",
        gambar: "",
        opsi: ["4 cm", "6 cm", "8 cm", "10 cm", "14 cm"],
        jawaban: 1,
        pembahasan: "Jarak pusat = $R - r = 10 - 4 = 6$ cm.",
        trik_cepat: "Bersinggungan dalam: $p = R - r$."
    },
    {
        id: 62,
        teks: "Diketahui lingkaran dengan jari-jari 14 cm. Panjang busur yang menghadap sudut pusat $45^\\circ$ adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["22 cm", "33 cm", "44 cm", "55 cm", "11 cm"],
        jawaban: 4,
        pembahasan: "Panjang busur = $\\frac{45}{360} \\times 2 \\times \\frac{22}{7} \\times 14 = \\frac{1}{8} \\times 88 = 11$ cm.",
        trik_cepat: "$\\frac{\\theta}{360} \\times 2\\pi r$."
    },
    {
        id: 63,
        teks: "Sebuah lingkaran memiliki sudut pusat $90^\\circ$ dan jari-jari 14 cm. Panjang busur yang menghadap sudut tersebut adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["11 cm", "22 cm", "33 cm", "44 cm", "55 cm"],
        jawaban: 1,
        pembahasan: "$\\frac{90}{360} \\times 2\\pi r = \\frac{1}{4} \\times 88 = 22$ cm.",
        trik_cepat: "$\\frac{\\theta}{360} \\times 2\\pi r$."
    },
    {
        id: 64,
        teks: "Diketahui lingkaran dengan jari-jari 21 cm. Luas juring yang menghadap sudut pusat $60^\\circ$ adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["241 cm²", "231 cm²", "251 cm²", "261 cm²", "271 cm²"],
        jawaban: 1,
        pembahasan: "$\\frac{60}{360} \\times \\frac{22}{7} \\times 441 = \\frac{1}{6} \\times 1386 = 231$ cm².",
        trik_cepat: "$\\frac{\\theta}{360} \\times \\pi r^2$."
    },
    {
        id: 65,
        teks: "Diketahui lingkaran dengan jari-jari 7 cm. Panjang garis singgung dari titik di luar lingkaran yang berjarak 25 cm dari pusat adalah ....",
        gambar: "",
        opsi: ["20 cm", "22 cm", "24 cm", "26 cm", "28 cm"],
        jawaban: 2,
        pembahasan: "$d = \\sqrt{25^2 - 7^2} = \\sqrt{576} = 24$ cm.",
        trik_cepat: "$d = \\sqrt{p^2 - r^2}$."
    },
    {
        id: 66,
        teks: "Dua lingkaran dengan jari-jari 5 cm dan 3 cm. Jika jarak pusat kedua lingkaran 10 cm, panjang garis singgung persekutuan luar adalah ....",
        gambar: "",
        opsi: ["$4\\sqrt{6}$ cm", "$4\\sqrt{5}$ cm", "$4\\sqrt{3}$ cm", "$4\\sqrt{2}$ cm", "$4$ cm"],
        jawaban: 0,
        pembahasan: "$d_{luar} = \\sqrt{10^2 - (5-3)^2} = \\sqrt{96} = 4\\sqrt{6}$ cm.",
        trik_cepat: "$d = \\sqrt{p^2 - (R-r)^2}$."
    },
    {
        id: 67,
        teks: "Dua lingkaran dengan jari-jari 3 cm dan 1 cm. Jika jarak pusat kedua lingkaran 10 cm, panjang garis singgung persekutuan dalam adalah ....",
        gambar: "",
        opsi: ["$2\\sqrt{19}$ cm", "$2\\sqrt{17}$ cm", "$2\\sqrt{21}$ cm", "$2\\sqrt{15}$ cm", "$2\\sqrt{13}$ cm"],
        jawaban: 2,
        pembahasan: "$d_{dalam} = \\sqrt{10^2 - (3+1)^2} = \\sqrt{84} = 2\\sqrt{21}$ cm.",
        trik_cepat: "$d = \\sqrt{p^2 - (R+r)^2}$."
    },
    {
        id: 68,
        teks: "Sudut pusat pada gambar tersebut adalah ....",
        gambar: "lingkaran_sudut_pusat.png",
        opsi: ["$\\angle AEC$", "$\\angle BDO$", "$\\angle DOE$", "$\\angle BDE$", "$\\angle BEC$"],
        jawaban: 2,
        pembahasan: "Sudut pusat memiliki titik sudut di pusat lingkaran O. Dari gambar, $\\angle DOE$ memiliki titik sudut di O.",
        trik_cepat: "Sudut pusat: titik sudut di pusat lingkaran O."
    },
    {
        id: 69,
        teks: "Jika $m\\angle MON = 134^\\circ$ dan $m\\angle MPN = 94^\\circ$, besar $\\angle LOK$ adalah ....",
        gambar: "lingkaran_dua_tali_busur.png",
        opsi: ["40°", "48°", "54°", "60°", "68°"],
        jawaban: 2,
        pembahasan: "$94 = \\frac{1}{2}(134 + \\angle LOK) \\Rightarrow 188 = 134 + \\angle LOK \\Rightarrow \\angle LOK = 54^\\circ$.",
        trik_cepat: "Rumus sudut antara dua tali busur: $\\angle = \\frac{1}{2}(\\text{busur}_1 + \\text{busur}_2)$."
    },
    {
        id: 70,
        teks: "Diketahui lingkaran yang berpusat di titik O dan P. Ruas garis AB merupakan garis singgung persekutuan dalam dengan panjang 12 cm. Jika panjang OA = 3 cm, PB = x cm, dan OP = 13 cm, perbandingan luas daerah lingkaran O dan P adalah ....",
        gambar: "",
        opsi: ["2 : 3", "3 : 2", "4 : 3", "9 : 4", "4 : 9"],
        jawaban: 3,
        pembahasan: "$12^2 = 13^2 - (3+x)^2 \\Rightarrow (3+x)^2 = 25 \\Rightarrow x = 2$. Luas O : P = $9\\pi : 4\\pi = 9 : 4$.",
        trik_cepat: "$l = \\sqrt{p^2 - (R+r)^2}$."
    },
    {
        id: 71,
        teks: "Pada segitiga ABC yang berada di dalam lingkaran dengan AC sebagai diameter, jika $m\\angle CAB : m\\angle ACB = 4 : 5$, besar $\\angle ACB$ adalah ....",
        gambar: "lingkaran_segitiga.png",
        opsi: ["60°", "50°", "40°", "35°", "30°"],
        jawaban: 1,
        pembahasan: "$\\angle ABC = 90^\\circ$. $4k + 5k = 90 \\Rightarrow k = 10$. $\\angle ACB = 5(10) = 50^\\circ$.",
        trik_cepat: "Sudut keliling menghadap diameter = 90°, lalu perbandingan."
    },
    {
        id: 72,
        teks: "Diketahui panjang BD = 13 cm, AC = 14 cm, AE : EC = 5 : 2, dan DE < EB. Pernyataan yang tidak tepat adalah ....",
        gambar: "lingkaran_tali_busur.png",
        opsi: ["panjang AE = 10 cm", "panjang EC = 4 cm", "panjang DE = 5 cm", "panjang EB = 8 cm", "AE × EC < DE × EB"],
        jawaban: 4,
        pembahasan: "AE = 10, EC = 4, DE × EB = 40, DE + EB = 13 → DE = 5, EB = 8. Jadi AE × EC = 40 = DE × EB, bukan kurang dari.",
        trik_cepat: "Teorema tali busur berpotongan: $AE \\times EC = DE \\times EB$."
    },
    {
        id: 73,
        teks: "Diketahui lingkaran dengan jari-jari 14 cm. Luas tembereng yang dibatasi tali busur AB dan busur AB dengan sudut pusat $90^\\circ$ adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["154 cm²", "56 cm²", "98 cm²", "42 cm²", "112 cm²"],
        jawaban: 1,
        pembahasan: "Luas juring = 154 cm², luas segitiga = 98 cm². Tembereng = $154 - 98 = 56$ cm².",
        trik_cepat: "Luas tembereng = luas juring − luas segitiga."
    },
    {
        id: 74,
        teks: "Diketahui segiempat tali busur ABCD pada lingkaran. Jika $\\angle A = 80^\\circ$ dan $\\angle B = 70^\\circ$, besar $\\angle D$ adalah ....",
        gambar: "",
        opsi: ["100°", "110°", "120°", "130°", "140°"],
        jawaban: 1,
        pembahasan: "$\\angle B + \\angle D = 180^\\circ \\Rightarrow 70^\\circ + \\angle D = 180^\\circ \\Rightarrow \\angle D = 110^\\circ$.",
        trik_cepat: "Sudut berhadapan segiempat tali busur berjumlah 180°."
    },
    {
        id: 75,
        teks: "Sebuah masjid memiliki kubah berbentuk setengah bola dengan diameter 14 m. Bagian luar kubah akan dicat. Jika satu kaleng cat dapat menutupi 50 m², banyak kaleng cat minimum yang diperlukan untuk mengecat kubah tersebut adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["5 kaleng", "6 kaleng", "7 kaleng", "8 kaleng", "9 kaleng"],
        jawaban: 2,
        pembahasan: "Luas = $2\\pi r^2 = 2 \\times \\frac{22}{7} \\times 49 = 308$ m². Banyak kaleng = $\\lceil 308/50 \\rceil = 7$.",
        trik_cepat: "Luas setengah bola $2\\pi r^2$, bagi daya tutup cat, bulatkan ke atas."
    },
    {
        id: 76,
        teks: "Seorang petani memiliki lahan berbentuk lingkaran dengan diameter 28 m. Ia ingin menanam pohon di sepanjang tepi lahan dengan jarak antar pohon 4 m. Banyak pohon maksimum yang dapat ditanam adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["20 pohon", "21 pohon", "22 pohon", "23 pohon", "24 pohon"],
        jawaban: 2,
        pembahasan: "Keliling = $\\frac{22}{7} \\times 28 = 88$ m. Banyak pohon = $88 / 4 = 22$.",
        trik_cepat: "Keliling $\\pi d$, bagi jarak tanam."
    },
    {
        id: 77,
        teks: "Panitia pembangunan masjid merancang taman berbentuk juring lingkaran dengan sudut pusat $120^\\circ$ dan jari-jari 21 m. Di sepanjang busur taman akan dipasang lampu hias dengan jarak 2 m antar lampu. Banyak lampu yang diperlukan adalah .... ($\\pi = 22/7$)",
        gambar: "",
        opsi: ["20 lampu", "21 lampu", "22 lampu", "23 lampu", "24 lampu"],
        jawaban: 2,
        pembahasan: "Panjang busur = $\\frac{120}{360} \\times 2 \\times \\frac{22}{7} \\times 21 = 44$ m. Banyak lampu = $44 / 2 = 22$.",
        trik_cepat: "Panjang busur, bagi jarak antar lampu."
    }
];

// module.exports = soalMatematikaUmum;