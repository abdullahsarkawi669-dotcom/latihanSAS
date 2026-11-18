// File: soal_matematika_umum.js
// Diurutkan per bab dari level termudah hingga menantang:
// A. Matriks, B. Matriks Idempoten, C. Fungsi & Komposisi,
// D. Fungsi Iterasi, E. Lingkaran, F. Lingkaran dalam Segitiga
const soalMatematikaUmum = [
    // ==================== A. MATRIKS ====================
    {
        id: 1,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$.<br>Matriks $A$ disebut ....",
        gambar: "",
        opsi: ["Matriks identitas", "Matriks nol", "Matriks diagonal", "Matriks skalar", "Matriks transpose"],
        jawaban: 0,
        pembahasan: "Matriks $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ memiliki elemen diagonal utama bernilai $1$ dan elemen lainnya $0$, sehingga disebut matriks identitas ordo $2 \\times 2$.",
        trik_cepat: "Diagonal utama $1$, elemen lainnya $0$ $\\rightarrow$ matriks identitas."
    },
    {
        id: 2,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$.<br>Matriks $A$ disebut ....",
        gambar: "",
        opsi: ["Matriks identitas", "Matriks diagonal", "Matriks nol", "Matriks skalar", "Matriks transpose"],
        jawaban: 2,
        pembahasan: "Matriks yang seluruh elemennya bernilai $0$ disebut matriks nol.",
        trik_cepat: "Semua elemen bernilai $0$ $\\rightarrow$ matriks nol."
    },
    {
        id: 3,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$.<br>Nilai $A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 1 \\\\ 3 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 4 \\\\ 3 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "Transpose matriks diperoleh dengan menukar baris menjadi kolom:<br>$A^T = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$.",
        trik_cepat: "Tukar elemen baris ke-$i$ menjadi kolom ke-$i$."
    },
    {
        id: 4,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$.<br>Nilai $A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 4 \\\\ 3 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 1 \\\\ 3 & 2 \\end{pmatrix}$"],
        jawaban: 1,
        pembahasan: "Baris pertama $(2\\ \\ 3)$ menjadi kolom pertama, dan baris kedua $(1\\ \\ 4)$ menjadi kolom kedua:<br>$A^T = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$.",
        trik_cepat: "Tukar posisi baris dan kolom."
    },
    {
        id: 5,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 4 & -1 \\\\ 2 & 3 \\end{pmatrix}$.<br>Nilai $A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 4 & -1 \\\\ 2 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 2 \\\\ 1 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 2 \\\\ -1 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} -4 & -2 \\\\ 1 & -3 \\end{pmatrix}$"],
        jawaban: 3,
        pembahasan: "Dengan menukar baris dan kolom diperoleh:<br>$A^T = \\begin{pmatrix} 4 & 2 \\\\ -1 & 3 \\end{pmatrix}$.",
        trik_cepat: "Tukar baris dan kolom, tanda elemen tetap."
    },
    {
        id: 6,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B$<br>$= \\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}$.<br>Hasil $A + B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 3 & 3 \\\\ 7 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 3 \\\\ 6 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 7 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 2 \\\\ 7 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 3 \\\\ 7 & 8 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "Jumlahkan elemen yang seletak:<br>$A + B = \\begin{pmatrix} 1+2 & 2+1 \\\\ 3+4 & 4+3 \\end{pmatrix}$<br>$= \\begin{pmatrix} 3 & 3 \\\\ 7 & 7 \\end{pmatrix}$.",
        trik_cepat: "Jumlahkan elemen pada posisi yang sama."
    },
    {
        id: 7,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B$<br>$= \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$.<br>Hasil $A - B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} -1 & 2 \\\\ 1 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & -2 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & 2 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & -2 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$"],
        jawaban: 2,
        pembahasan: "Kurangkan elemen yang seletak:<br>$A - B = \\begin{pmatrix} 1-2 & 2-0 \\\\ 3-1 & 4-3 \\end{pmatrix}$<br>$= \\begin{pmatrix} -1 & 2 \\\\ 2 & 1 \\end{pmatrix}$.",
        trik_cepat: "Kurangkan elemen pada posisi yang sama."
    },
    {
        id: 8,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$.<br>Nilai $A + A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 3 \\\\ 5 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 5 \\\\ 3 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 5 \\\\ 5 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 5 \\\\ 5 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 5 \\\\ 5 & 8 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "Transpose matriks $A$ adalah $A^T = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$.<br>Maka $A + A^T = \\begin{pmatrix} 1+1 & 2+3 \\\\ 3+2 & 4+4 \\end{pmatrix}$<br>$= \\begin{pmatrix} 2 & 5 \\\\ 5 & 8 \\end{pmatrix}$.",
        trik_cepat: "Jumlahkan matriks $A$ dengan transposenya."
    },
    {
        id: 9,
        teks: "Dalam pencatatan zakat, sebuah lembaga menerima donasi yang disusun dalam matriks $D = \\begin{pmatrix} 10 & 5 \\\\ 8 & 12 \\end{pmatrix}$ (dalam juta rupiah).<br>Jika setiap donasi dikalikan $2{,}5$ untuk program pendidikan, matriks hasilnya adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 20 & 10 \\\\ 16 & 24 \\end{pmatrix}$", "$\\begin{pmatrix} 25 & 12{,}5 \\\\ 20 & 30 \\end{pmatrix}$", "$\\begin{pmatrix} 25 & 20 \\\\ 12{,}5 & 30 \\end{pmatrix}$", "$\\begin{pmatrix} 12{,}5 & 7{,}5 \\\\ 10{,}5 & 14{,}5 \\end{pmatrix}$", "$\\begin{pmatrix} 30 & 15 \\\\ 24 & 36 \\end{pmatrix}$"],
        jawaban: 1,
        pembahasan: "Kalikan setiap elemen matriks dengan skalar $2{,}5$:<br>$2{,}5 \\times \\begin{pmatrix} 10 & 5 \\\\ 8 & 12 \\end{pmatrix} = \\begin{pmatrix} 25 & 12{,}5 \\\\ 20 & 30 \\end{pmatrix}$.",
        trik_cepat: "Perkalian skalar: kalikan semua elemen dengan $2{,}5$."
    },
    {
        id: 10,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$.<br>Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["6", "7", "8", "5", "11"],
        jawaban: 3,
        pembahasan: "Determinan matriks $2 \\times 2$ adalah $ad - bc$:<br>$\\det(A) = 2(4) - 3(1)$<br>$= 8 - 3 = 5$.",
        trik_cepat: "$\\det = ad - bc$."
    },
    {
        id: 11,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$.<br>Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["10", "12", "8", "6", "14"],
        jawaban: 0,
        pembahasan: "$\\det(A) = 3(4) - 1(2)$<br>$= 12 - 2 = 10$.",
        trik_cepat: "$\\det = ad - bc$."
    },
    {
        id: 12,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$.<br>Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["-1", "0", "-2", "1", "2"],
        jawaban: 2,
        pembahasan: "$\\det(A) = (1)(4) - (2)(3)$<br>$= 4 - 6 = -2$.",
        trik_cepat: "$\\det = ad - bc$."
    },
    {
        id: 13,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 5 & -5 \\end{pmatrix}$, $B$<br>$= \\begin{pmatrix} 0 & -2 \\\\ 1 & 4 \\end{pmatrix}$, dan $C = \\begin{pmatrix} -1 & 1 \\\\ 1 & 0 \\end{pmatrix}$.<br>Hasil dari $A + 2B - C$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & -1 \\\\ 0 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 3 \\\\ 0 & -3 \\end{pmatrix}$", "$\\begin{pmatrix} -3 & 2 \\\\ -1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -2 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -2 \\\\ 6 & 3 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$2B = \\begin{pmatrix} 0 & -4 \\\\ 2 & 8 \\end{pmatrix}$.<br>$A + 2B = \\begin{pmatrix} 2 & -1 \\\\ 7 & 3 \\end{pmatrix}$.<br>Kurangi $C$: $\\begin{pmatrix} 2-(-1) & -1-1 \\\\ 7-1 & 3-0 \\end{pmatrix} = \\begin{pmatrix} 3 & -2 \\\\ 6 & 3 \\end{pmatrix}$.",
        trik_cepat: "Hitung $2B$ terlebih dahulu, lalu operasikan tiap elemen seletak."
    },
    {
        id: 14,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 5 \\\\ 7 & 3 \\end{pmatrix}$ dan $B$<br>$= \\begin{pmatrix} -1 & 3 \\\\ 5 & 2 \\end{pmatrix}$.<br>Hasil dari $2A - 5B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 9 & 5 \\\\ -11 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & -5 \\\\ -11 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & -5 \\\\ 11 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} -9 & -5 \\\\ 11 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} -9 & 5 \\\\ -11 & 4 \\end{pmatrix}$"],
        jawaban: 1,
        pembahasan: "$2A = \\begin{pmatrix} 4 & 10 \\\\ 14 & 6 \\end{pmatrix}$ dan $5B$<br>$= \\begin{pmatrix} -5 & 15 \\\\ 25 & 10 \\end{pmatrix}$.<br>$2A - 5B = \\begin{pmatrix} 4-(-5) & 10-15 \\\\ 14-25 & 6-10 \\end{pmatrix}$<br>$= \\begin{pmatrix} 9 & -5 \\\\ -11 & -4 \\end{pmatrix}$.",
        trik_cepat: "Kalikan masing-masing matriks dengan skalar, lalu kurangkan."
    },
    {
        id: 15,
        teks: "Jika $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$ dan $B$<br>$= \\begin{pmatrix} 1 & 0 \\\\ 2 & 3 \\end{pmatrix}$, hasil $A \\cdot B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 4 & 3 \\\\ 10 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 4 \\\\ 12 & 11 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 2 \\\\ 11 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 11 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 11 & 12 \\end{pmatrix}$"],
        jawaban: 3,
        pembahasan: "Kalikan baris matriks $A$ dengan kolom matriks $B$:<br>• $(1,1): 2(1) + 1(2) = 4$<br>• $(1,2): 2(0) + 1(3) = 3$<br>• $(2,1): 3(1) + 4(2) = 11$<br>• $(2,2): 3(0) + 4(3) = 12$<br>Jadi $A \\cdot B = \\begin{pmatrix} 4 & 3 \\\\ 11 & 12 \\end{pmatrix}$.",
        trik_cepat: "Perkalian matriks: baris $\\times$ kolom."
    },
    {
        id: 16,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix}$ dan $B$<br>$= \\begin{pmatrix} 1 & 2 \\\\ 3 & 1 \\end{pmatrix}$.<br>Hasil $AB$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 5 & 5 \\\\ 10 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 5 \\\\ 10 & 6 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 4 \\\\ 10 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 5 \\\\ 9 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 5 \\\\ 10 & 4 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$AB = \\begin{pmatrix} 2(1)+1(3) & 2(2)+1(1) \\\\ 1(1)+3(3) & 1(2)+3(1) \\end{pmatrix}$<br>$= \\begin{pmatrix} 5 & 5 \\\\ 10 & 5 \\end{pmatrix}$.",
        trik_cepat: "Perkalian baris $\\times$ kolom."
    },
    {
        id: 17,
        teks: "Sebuah masjid memiliki dua kotak amal: A dan B. Pekan pertama terkumpul Rp200.000 (A) dan Rp150.000 (B). Pekan kedua terkumpul Rp250.000 (A) dan Rp180.000 (B).<br>Jika data disusun dalam $P = \\begin{pmatrix} 200 & 150 \\\\ 250 & 180 \\end{pmatrix}$ (ribuan rupiah) dan dikalikan $Q$<br>$= \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$, hasil $P \\cdot Q$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 550 \\\\ 610 \\end{pmatrix}$", "$\\begin{pmatrix} 500 \\\\ 680 \\end{pmatrix}$", "$\\begin{pmatrix} 500 \\\\ 610 \\end{pmatrix}$", "$\\begin{pmatrix} 450 \\\\ 610 \\end{pmatrix}$", "$\\begin{pmatrix} 500 \\\\ 590 \\end{pmatrix}$"],
        jawaban: 2,
        pembahasan: "$P \\cdot Q = \\begin{pmatrix} 200 & 150 \\\\ 250 & 180 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$<br>$= \\begin{pmatrix} 200(1) + 150(2) \\\\ 250(1) + 180(2) \\end{pmatrix} = \\begin{pmatrix} 500 \\\\ 610 \\end{pmatrix}$.",
        trik_cepat: "Perkalian matriks $2\\times 2$ dengan $2\\times 1$: baris $\\times$ kolom."
    },
    {
        id: 18,
        teks: "Panitia zakat mencatat beras dari tiga dusun dalam $Z = \\begin{pmatrix} 120 & 80 \\\\ 90 & 110 \\\\ 100 & 95 \\end{pmatrix}$ kg (kolom 1 kualitas A, kolom 2 kualitas B).<br>Total beras kualitas A dan B secara berurutan dalam vektor baris adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 285 & 310 \\end{pmatrix}$", "$\\begin{pmatrix} 310 \\\\ 285 \\end{pmatrix}$", "$\\begin{pmatrix} 200 & 190 \\\\ 220 & 190 \\end{pmatrix}$", "$\\begin{pmatrix} 200 & 200 \\\\ 195 & 285 \\end{pmatrix}$", "$\\begin{pmatrix} 310 & 285 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "Total kualitas A $= 120 + 90 + 100 = 310$ kg.<br>Total kualitas B $= 80 + 110 + 95 = 285$ kg.<br>Dalam bentuk vektor baris: $\\begin{pmatrix} 1 & 1 & 1 \\end{pmatrix} Z = \\begin{pmatrix} 310 & 285 \\end{pmatrix}$.",
        trik_cepat: "Kalikan matriks $Z$ dari kiri dengan vektor baris $\\begin{pmatrix} 1 & 1 & 1 \\end{pmatrix}$."
    },
    {
        id: 19,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B$<br>$= \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$.<br>Hasil $A \\cdot B^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 6 \\\\ 7 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 7 \\\\ 6 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 7 \\\\ 6 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 7 \\\\ 6 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 7 \\\\ 6 & 15 \\end{pmatrix}$"],
        jawaban: 1,
        pembahasan: "Transpose $B$: $B^T = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$.<br>$A \\cdot B^T = \\begin{pmatrix} 1(2)+2(0) & 1(1)+2(3) \\\\ 3(2)+4(0) & 3(1)+4(3) \\end{pmatrix}$<br>$= \\begin{pmatrix} 2 & 7 \\\\ 6 & 15 \\end{pmatrix}$.",
        trik_cepat: "Cari $B^T$ terlebih dahulu, lalu kalikan dengan $A$."
    },
    {
        id: 20,
        teks: "Jika $A = \\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}$, maka $A^2$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 7 & 7 \\\\ 14 & 14 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & -7 \\\\ -14 & 14 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & -7 \\\\ 14 & -14 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & -7 \\\\ 14 & 14 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & 1 \\\\ 4 & 16 \\end{pmatrix}$"],
        jawaban: 3,
        pembahasan: "$A^2 = A \\cdot A$<br>$= \\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix} \\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}$<br>$= \\begin{pmatrix} 9-2 & -3-4 \\\\ 6+8 & -2+16 \\end{pmatrix} = \\begin{pmatrix} 7 & -7 \\\\ 14 & 14 \\end{pmatrix}$.",
        trik_cepat: "Hitung $A \\times A$ (bukan mengkuadratkan tiap elemen)."
    },
    {
        id: 21,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}$.<br>Nilai $A^{-1}$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & 3 \\\\ 1 & -2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & -1 \\\\ -3 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & -3 \\\\ -1 & -2 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$\\det(A) = 2(2) - 3(1)$<br>$= 4 - 3 = 1$.<br>$A^{-1} = \\frac{1}{1} \\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$<br>$= \\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$.",
        trik_cepat: "Karena $\\det(A) = 1$, tukar diagonal utama dan beri tanda minus pada diagonal samping."
    },
    {
        id: 22,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$.<br>Invers matriks $A$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{5}\\begin{pmatrix} 4 & 1 \\\\ 3 & 2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} -4 & 1 \\\\ 3 & -2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} 4 & -1 \\\\ -3 & 2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} 4 & -1 \\\\ 3 & 2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} -4 & -1 \\\\ -3 & -2 \\end{pmatrix}$"],
        jawaban: 2,
        pembahasan: "$\\det(A) = 2(4) - 1(3)$<br>$= 8 - 3 = 5$.<br>$A^{-1} = \\frac{1}{5}\\begin{pmatrix} 4 & -1 \\\\ -3 & 2 \\end{pmatrix}$.",
        trik_cepat: "$A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$."
    },
    {
        id: 23,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix}$.<br>Invers matriks $A$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{7}\\begin{pmatrix} 3 & -1 \\\\ 1 & 2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} -3 & 1 \\\\ -1 & -2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} -3 & -1 \\\\ 1 & -2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} 3 & 1 \\\\ 1 & 2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} 3 & 1 \\\\ -1 & 2 \\end{pmatrix}$"],
        jawaban: 4,
        pembahasan: "$\\det(A) = 2(3) - (-1)(1)$<br>$= 6 + 1 = 7$.<br>$A^{-1} = \\frac{1}{7}\\begin{pmatrix} 3 & 1 \\\\ -1 & 2 \\end{pmatrix}$.",
        trik_cepat: "$A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$."
    },
    {
        id: 24,
        teks: "Diketahui persamaan matriks:<br>$\\begin{pmatrix} 2a & 7 \\\\ b & 6 \\end{pmatrix} + \\begin{pmatrix} 5 & -3 \\\\ 3c & 2b \\end{pmatrix} = \\begin{pmatrix} 15 & 4 \\\\ a & a-1 \\end{pmatrix}$<br>Nilai dari $a - 2b - c$ adalah ....",
        gambar: "",
        opsi: ["-9", "5", "-1", "-5", "1"],
        jawaban: 1,
        pembahasan: "• Posisi $(1,1)$: $2a + 5 = 15 \\Rightarrow 2a$<br>$= 10 \\Rightarrow a = 5$.<br>• Posisi $(2,2)$: $6 + 2b = a - 1$<br>$= 4$<br>$\\Rightarrow 2b = -2 \\Rightarrow b = -1$.<br>• Posisi $(2,1)$: $b + 3c = a$<br>$\\Rightarrow -1 + 3c$<br>$= 5 \\Rightarrow c = 2$.<br>Maka $a - 2b - c = 5 - 2(-1) - 2$<br>$= 5$.",
        trik_cepat: "Samakan elemen pada posisi yang bersesuaian untuk mencari $a, b, c$."
    },
    {
        id: 25,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 0 & 2 \\\\ 0 & 3 & 0 \\\\ 1 & 0 & 1 \\end{pmatrix}$.<br>Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["3", "-1", "1", "-3", "9"],
        jawaban: 3,
        pembahasan: "Gunakan ekspansi kofaktor pada baris kedua karena memiliki dua angka nol:<br>$\\det(A) = 3 \\cdot \\det\\begin{pmatrix} 1 & 2 \\\\ 1 & 1 \\end{pmatrix}$<br>$= 3(1 - 2) = 3(-1) = -3$.",
        trik_cepat: "Ekspansi melalui baris atau kolom yang paling banyak elemen nol."
    },
    {
        id: 26,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$.<br>Nilai eigen dari matriks $A$ adalah ....",
        gambar: "",
        opsi: ["1 dan 3", "2 dan 2", "0 dan 4", "1 dan 2", "3 dan 3"],
        jawaban: 0,
        pembahasan: "Persamaan karakteristik $\\det(A - \\lambda I) = 0$:<br>$(2 - \\lambda)^2 - 1 = 0$<br>$\\lambda^2 - 4\\lambda + 3 = 0$<br>$(\\lambda - 1)(\\lambda - 3) = 0$<br>$\\Rightarrow \\lambda$<br>$= 1$ atau $\\lambda = 3$.",
        trik_cepat: "Jumlah nilai eigen $=$ trace ($2+2=4$), hasil kali $=$ determinan ($4-1=3$)."
    },

    // ==================== B. MATRIKS IDEMPOTEN ====================
    {
        id: 27,
        teks: "Sebuah matriks persegi $A$ dikatakan idempoten jika dan hanya jika memenuhi persamaan ....",
        gambar: "",
        opsi: ["$A^2 = I$", "$A^2 = 0$", "$A^2 = A$", "$A^T = A$", "$A^{-1} = A$"],
        jawaban: 2,
        pembahasan: "Menurut definisi aljabar matriks, matriks persegi $A$ bersifat idempoten apabila $A^2 = A \\times A$<br>$= A$.",
        trik_cepat: "Idempoten artinya dikuadratkan hasilnya tetap matriks itu sendiri ($A^2 = A$)."
    },
    {
        id: 28,
        teks: "Diketahui matriks $C = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$.<br>Matriks $C$ merupakan matriks idempoten karena ....",
        gambar: "",
        opsi: ["$C^2 = I$", "$C^T = C$", "$C^{-1} = C$", "$C^2 = 0$", "$C^2 = C$"],
        jawaban: 4,
        pembahasan: "$C^2 = \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix} \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix}$<br>$= \\begin{pmatrix} 1 & 0 \\\\ 0 & 0 \\end{pmatrix} = C$.<br>Karena $C^2 = C$, matriks $C$ bersifat idempoten.",
        trik_cepat: "Syarat idempoten adalah $C^2 = C$."
    },
    {
        id: 29,
        teks: "Diketahui matriks $B = \\begin{pmatrix} 3 & -6 \\\\ 1 & -2 \\end{pmatrix}$.<br>Matriks $B$ merupakan matriks idempoten karena hasil $B^2 = B \\times B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 9 & -6 \\\\ 1 & -2 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -6 \\\\ 1 & -2 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & -18 \\\\ 3 & -6 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -6 \\\\ -1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 6 \\\\ 1 & 2 \\end{pmatrix}$"],
        jawaban: 1,
        pembahasan: "$B^2 = \\begin{pmatrix} 3 & -6 \\\\ 1 & -2 \\end{pmatrix} \\begin{pmatrix} 3 & -6 \\\\ 1 & -2 \\end{pmatrix}$<br>$= \\begin{pmatrix} 9-6 & -18+12 \\\\ 3-2 & -6+4 \\end{pmatrix} = \\begin{pmatrix} 3 & -6 \\\\ 1 & -2 \\end{pmatrix}$<br>$= B$.",
        trik_cepat: "Matriks idempoten memenuhi $B^2 = B$, sehingga hasilnya sama persis dengan $B$."
    },
    {
        id: 30,
        teks: "Manakah di antara matriks berikut yang merupakan matriks idempoten?",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 0 \\\\ 1 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$"],
        jawaban: 3,
        pembahasan: "Uji perkalian $A^2 = A$:<br>$\\begin{pmatrix} 0 & 0 \\\\ 1 & 1 \\end{pmatrix} \\begin{pmatrix} 0 & 0 \\\\ 1 & 1 \\end{pmatrix} = \\begin{pmatrix} 0+0 & 0+0 \\\\ 0+1 & 0+1 \\end{pmatrix}$<br>$= \\begin{pmatrix} 0 & 0 \\\\ 1 & 1 \\end{pmatrix}$.<br>Matriks ini memenuhi $A^2 = A$, sehingga merupakan matriks idempoten.",
        trik_cepat: "Uji $A^2 = A$ pada tiap opsi; hanya $\\begin{pmatrix} 0 & 0 \\\\ 1 & 1 \\end{pmatrix}$ yang menghasilkan dirinya sendiri."
    },

    // ==================== C. FUNGSI & KOMPOSISI ====================
    {
        id: 31,
        teks: "Diketahui $f(x) = x^2 - 2x + 3$.<br>Nilai $f(2)$ adalah ....",
        gambar: "",
        opsi: ["3", "1", "2", "4", "5"],
        jawaban: 0,
        pembahasan: "Substitusikan $x = 2$:<br>$f(2) = (2)^2 - 2(2) + 3$<br>$= 4 - 4 + 3 = 3$.",
        trik_cepat: "Substitusi langsung $x = 2$."
    },
    {
        id: 32,
        teks: "Jika $f(x) = x^2 + 2x + 1$, maka nilai $f(-1)$ adalah ....",
        gambar: "",
        opsi: ["-1", "1", "0", "2", "4"],
        jawaban: 2,
        pembahasan: "Substitusikan $x = -1$:<br>$f(-1) = (-1)^2 + 2(-1) + 1$<br>$= 1 - 2 + 1 = 0$.",
        trik_cepat: "Perhatikan $f(x) = (x+1)^2$, sehingga $f(-1) = 0$."
    },
    {
        id: 33,
        teks: "Jika $f(x) = x^2 - 4$, maka nilai $f(f(2))$ adalah ....",
        gambar: "",
        opsi: ["0", "4", "12", "16", "-4"],
        jawaban: 4,
        pembahasan: "Hitung dari fungsi bagian dalam:<br>$f(2) = 2^2 - 4$<br>$= 0$.<br>$f(f(2)) = f(0)$<br>$= 0^2 - 4 = -4$.",
        trik_cepat: "Hitung $f(2) = 0$ terlebih dahulu, lalu $f(0) = -4$."
    },
    {
        id: 34,
        teks: "Jika $f(x) = 2x + 3$, maka nilai $f^{-1}(7)$ adalah ....",
        gambar: "",
        opsi: ["3", "2", "5", "6", "4"],
        jawaban: 1,
        pembahasan: "$f^{-1}(7) = x \\Leftrightarrow f(x)$<br>$= 7$.<br>$2x + 3 = 7 \\Rightarrow 2x$<br>$= 4 \\Rightarrow x = 2$.",
        trik_cepat: "Cari nilai $x$ yang membuat $2x + 3 = 7$."
    },
    {
        id: 35,
        teks: "Diketahui $f(x) = 3x - 2$.<br>Nilai $f^{-1}(4)$ adalah ....",
        gambar: "",
        opsi: ["4", "1", "3", "2", "5"],
        jawaban: 3,
        pembahasan: "$f^{-1}(4) = x \\Leftrightarrow f(x)$<br>$= 4$.<br>$3x - 2 = 4 \\Rightarrow 3x$<br>$= 6 \\Rightarrow x = 2$.",
        trik_cepat: "Cari nilai $x$ sehingga $3x - 2 = 4$."
    },
    {
        id: 36,
        teks: "Jika $f(x) = 2x - 1$, maka rumus $f^{-1}(x)$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{x+1}{2}$", "$\\frac{x-1}{2}$", "$2x+1$", "$2x-1$", "$\\frac{1}{2x-1}$"],
        jawaban: 0,
        pembahasan: "Misalkan $y = 2x - 1$<br>$\\Rightarrow y + 1$<br>$= 2x \\Rightarrow x = \\frac{y+1}{2}$.<br>Jadi $f^{-1}(x) = \\frac{x+1}{2}$.",
        trik_cepat: "Kebalikan dari kali $2$ lalu kurang $1$ adalah tambah $1$ lalu bagi $2$."
    },
    {
        id: 37,
        teks: "Jika $f(x) = 2x + 1$ dan $g(x)$<br>$= x^2$, maka nilai $(g \\circ f)(2)$ adalah ....",
        gambar: "",
        opsi: ["9", "16", "25", "36", "49"],
        jawaban: 2,
        pembahasan: "$(g \\circ f)(2) = g(f(2))$.<br>$f(2) = 2(2) + 1$<br>$= 5$.<br>$g(5) = 5^2$<br>$= 25$.",
        trik_cepat: "Hitung fungsi kanan dulu: $f(2) = 5$, lalu $g(5) = 25$."
    },
    {
        id: 38,
        teks: "Diketahui $f(x) = x + 3$ dan $g(x)$<br>$= x^2 - 1$.<br>Nilai $(g \\circ f)(-1)$ adalah ....",
        gambar: "",
        opsi: ["4", "5", "6", "7", "3"],
        jawaban: 4,
        pembahasan: "$f(-1) = -1 + 3$<br>$= 2$.<br>$(g \\circ f)(-1) = g(2)$<br>$= 2^2 - 1 = 3$.",
        trik_cepat: "Hitung $f(-1) = 2$, lalu substitusikan ke $g(2)$."
    },
    {
        id: 39,
        teks: "Diketahui $f(x) = 2x + 1$ dan $g(x)$<br>$= x^2 - 3$.<br>Nilai $(f \\circ g)(2)$ adalah ....",
        gambar: "",
        opsi: ["1", "3", "4", "5", "2"],
        jawaban: 1,
        pembahasan: "$g(2) = 2^2 - 3$<br>$= 1$.<br>$(f \\circ g)(2) = f(1)$<br>$= 2(1) + 1 = 3$.",
        trik_cepat: "Hitung $g(2) = 1$, lalu masukkan ke $f(1)$."
    },
    {
        id: 40,
        teks: "Diketahui $f(x) = \\frac{2x}{x-1}$.<br>Nilai $f^{-1}(4)$ adalah ....",
        gambar: "",
        opsi: ["3", "0", "1", "2", "4"],
        jawaban: 3,
        pembahasan: "$f(x) = 4 \\Rightarrow \\frac{2x}{x-1}$<br>$= 4$.<br>$2x = 4x - 4 \\Rightarrow 2x$<br>$= 4 \\Rightarrow x = 2$.",
        trik_cepat: "Langsung selesaikan persamaan $f(x) = 4$."
    },
    {
        id: 41,
        teks: "Jika $f(x) = x^2 + 1$ dan $g(x)$<br>$= 2x$, maka $(f \\circ g)(x)$ adalah ....",
        gambar: "",
        opsi: ["$4x^2 + 1$", "$2x^2 + 1$", "$4x^2 + 2$", "$2x^2 + 2$", "$x^2 + 2x + 1$"],
        jawaban: 0,
        pembahasan: "$(f \\circ g)(x) = f(g(x))$<br>$= f(2x) = (2x)^2 + 1 = 4x^2 + 1$.",
        trik_cepat: "Substitusikan $g(x) = 2x$ menggantikan $x$ di $f(x)$."
    },
    {
        id: 42,
        teks: "Jika $f(x) = \\frac{1}{x}$ dan $g(x)$<br>$= 2x + 1$, maka $(f \\circ g)(x)$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{2}{x} + 1$", "$\\frac{1}{2x} + 1$", "$\\frac{1}{2x+1}$", "$\\frac{2x+1}{x}$", "$\\frac{x}{2x+1}$"],
        jawaban: 2,
        pembahasan: "$(f \\circ g)(x) = f(2x+1)$<br>$= \\frac{1}{2x+1}$.",
        trik_cepat: "Ganti $x$ pada $f(x)$ dengan $2x+1$."
    },
    {
        id: 43,
        teks: "Diketahui fungsi $f(x) = x^2 + x + 1$ dan $g(x)$<br>$= 2x - 3$.<br>Hasil dari $(f \\circ g)(x)$ adalah ....",
        gambar: "",
        opsi: ["$4x^2 + 10x + 7$", "$4x^2 - 10x - 7$", "$2x^2 - 10x + 7$", "$4x^2 - 12x + 7$", "$4x^2 - 10x + 7$"],
        jawaban: 4,
        pembahasan: "$(f \\circ g)(x) = (2x-3)^2 + (2x-3) + 1$<br>$= (4x^2 - 12x + 9) + 2x - 2$<br>$= 4x^2 - 10x + 7$.",
        trik_cepat: "Jabarkan $(2x-3)^2$ lalu jumlahkan dengan $(2x-3) + 1$."
    },
    {
        id: 44,
        teks: "Jika $f(x) = \\frac{x+1}{x-2}$, maka rumus $f^{-1}(x)$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{2x-1}{x-1}$", "$\\frac{2x+1}{x-1}$", "$\\frac{x-1}{2x+1}$", "$\\frac{x+2}{x-1}$", "$\\frac{x+1}{x-2}$"],
        jawaban: 1,
        pembahasan: "Gunakan rumus cepat invers fungsi pecahan $f(x) = \\frac{ax+b}{cx+d}$<br>$\\Rightarrow f^{-1}(x)$<br>$= \\frac{-dx+b}{cx-a}$.<br>Dengan $a=1, b=1, c=1, d=-2$:<br>$f^{-1}(x) = \\frac{2x+1}{x-1}$.",
        trik_cepat: "Tukar posisi dan tanda $a$ dan $d$: $\\frac{2x+1}{x-1}$."
    },
    {
        id: 45,
        teks: "Diketahui $f(x) = 2x + 3$ dan $(f \\circ g)(x)$<br>$= 4x + 7$.<br>Rumus $g(x)$ adalah ....",
        gambar: "",
        opsi: ["$4x + 4$", "$2x + 4$", "$2x - 2$", "$2x + 2$", "$4x - 2$"],
        jawaban: 3,
        pembahasan: "$f(g(x)) = 4x + 7 \\Rightarrow 2g(x) + 3$<br>$= 4x + 7$.<br>$2g(x) = 4x + 4 \\Rightarrow g(x)$<br>$= 2x + 2$.",
        trik_cepat: "Substitusikan $g(x)$ ke fungsi luar $f$, lalu isolasi $g(x)$."
    },
    {
        id: 46,
        teks: "Diketahui $f(x) = 2x + 1$ dan $g(x)$<br>$= x - 1$.<br>Nilai $(f^{-1} \\circ g^{-1})(4)$ adalah ....",
        gambar: "",
        opsi: ["2", "1", "3", "4", "5"],
        jawaban: 0,
        pembahasan: "$g^{-1}(x) = x + 1 \\Rightarrow g^{-1}(4)$<br>$= 5$.<br>$f^{-1}(x) = \\frac{x-1}{2} \\Rightarrow f^{-1}(5)$<br>$= \\frac{5-1}{2} = 2$.",
        trik_cepat: "Cari $g^{-1}(4) = 5$, lalu masukkan ke $f^{-1}(5)$."
    },
    {
        id: 47,
        teks: "Diketahui $(f \\circ g)(x) = 3^{2x+3}$ dan $g(x)$<br>$= 2x + 3$.<br>Rumus $f(x)$ adalah ....",
        gambar: "",
        opsi: ["$2 \\cdot 3^x$", "$3^{x+2}$", "$3^x$", "$3^{x-2}$", "$3^{2x}$"],
        jawaban: 2,
        pembahasan: "$f(g(x)) = 3^{2x+3} \\Rightarrow f(2x+3)$<br>$= 3^{2x+3}$.<br>Misalkan $u = 2x + 3$, maka $f(u)$<br>$= 3^u$, sehingga $f(x) = 3^x$.",
        trik_cepat: "Ganti bentuk $2x+3$ pada ruas kanan dengan variabel $x$."
    },
    {
        id: 48,
        teks: "Diketahui $f(x) = x^2 - 4x + 5$ dengan daerah asal $\\{x \\mid -1 \\le x \\le 3, x \\in \\mathbb{R}\\}$.<br>Daerah hasil fungsi $f$ adalah ....",
        gambar: "",
        opsi: ["$\\{y \\mid -1 \\le y \\le 10, y \\in \\mathbb{R}\\}$", "$\\{y \\mid 0 \\le y \\le 10, y \\in \\mathbb{R}\\}$", "$\\{y \\mid 2 \\le y \\le 10, y \\in \\mathbb{R}\\}$", "$\\{y \\mid 1 \\le y \\le 12, y \\in \\mathbb{R}\\}$", "$\\{y \\mid 1 \\le y \\le 10, y \\in \\mathbb{R}\\}$"],
        jawaban: 4,
        pembahasan: "Sumbu simetri: $x_p = -\\frac{-4}{2(1)}$<br>$= 2$ (berada dalam interval).<br>• Nilai minimum: $f(2) = 4 - 8 + 5$<br>$= 1$.<br>• Ujung interval: $f(-1) = 1 + 4 + 5$<br>$= 10$ dan $f(3) = 9 - 12 + 5 = 2$.<br>Jadi daerah hasilnya $1 \\le y \\le 10$.",
        trik_cepat: "Bandingkan nilai fungsi di titik puncak dan kedua ujung interval."
    },
    {
        id: 49,
        teks: "Diketahui $(f \\circ g)(x) = 4x^2 + 4x - 5$ dan $g(x)$<br>$= 2x + 2$.<br>Invers fungsi $f(x)$ adalah ....",
        gambar: "",
        opsi: ["$2 \\pm \\sqrt{6+x}$", "$1 \\pm \\sqrt{6+x}$", "$2 \\pm 2\\sqrt{6+x}$", "$1 \\pm \\sqrt{6-x}$", "$2 \\pm \\sqrt{6-x}$"],
        jawaban: 1,
        pembahasan: "Misalkan $u = 2x + 2 \\Rightarrow x$<br>$= \\frac{u-2}{2}$.<br>$f(u) = 4\\left(\\frac{u-2}{2}\\right)^2 + 4\\left(\\frac{u-2}{2}\\right) - 5$<br>$= (u^2 - 4u + 4) + (2u - 4) - 5 = u^2 - 2u - 5$.<br>Cari invers $y = x^2 - 2x - 5$<br>$= (x-1)^2 - 6$:<br>$(x-1)^2 = y + 6 \\Rightarrow x$<br>$= 1 \\pm \\sqrt{6+y}$.",
        trik_cepat: "Nyatakan $f(x)$ dalam bentuk kuadrat sempurna $(x-1)^2 - 6$ lalu balikkan."
    },
    {
        id: 50,
        teks: "Seorang santri menghafal Al-Qur'an. Fungsi $f(t) = 2t + 1$ menyatakan jumlah halaman dihafal setelah $t$ jam, dan $g(x)$<br>$= 3x$ menyatakan halaman yang dimurajaah.<br>Jika santri belajar selama $2$ jam, jumlah halaman yang dimurajaah adalah ....",
        gambar: "",
        opsi: ["24 halaman", "18 halaman", "21 halaman", "15 halaman", "27 halaman"],
        jawaban: 3,
        pembahasan: "Halaman dihafal: $f(2) = 2(2) + 1$<br>$= 5$ halaman.<br>Halaman dimurajaah: $g(5) = 3(5)$<br>$= 15$ halaman.",
        trik_cepat: "Hitung $f(2) = 5$ dulu, lalu kalikan $3$."
    },
    {
        id: 51,
        teks: "Biaya konsumsi kajian adalah $f(x) = 15.000x$ rupiah untuk $x$ peserta, dan biaya sewa ruangan adalah $g(y)$<br>$= y + 50.000$.<br>Total biaya untuk $10$ peserta adalah ....",
        gambar: "",
        opsi: ["Rp200.000", "Rp150.000", "Rp180.000", "Rp220.000", "Rp250.000"],
        jawaban: 0,
        pembahasan: "Biaya konsumsi: $f(10) = 15.000 \\times 10$<br>$= 150.000$.<br>Total biaya: $g(150.000) = 150.000 + 50.000$<br>$= \\text{Rp}200.000$.",
        trik_cepat: "Hitung biaya konsumsi $10$ peserta lalu tambah Rp50.000."
    },
    {
        id: 52,
        teks: "Lembaga amil menyalurkan zakat dengan fungsi $f(x) = 0{,}8x$ dan biaya operasional $g(y)$<br>$= y - 10.000$.<br>Jika zakat terkumpul Rp1.000.000, dana bersih yang diterima mustahik adalah ....",
        gambar: "",
        opsi: ["Rp800.000", "Rp810.000", "Rp790.000", "Rp820.000", "Rp850.000"],
        jawaban: 2,
        pembahasan: "Dana tersalurkan: $f(1.000.000) = 0{,}8 \\times 1.000.000$<br>$= 800.000$.<br>Setelah biaya operasional: $g(800.000) = 800.000 - 10.000$<br>$= \\text{Rp}790.000$.",
        trik_cepat: "Hitung $80\\%$ dari Rp1.000.000 lalu kurangi Rp10.000."
    },

    // ==================== D. FUNGSI ITERASI ====================
    {
        id: 53,
        teks: "Fungsi iterasi adalah fungsi yang didapatkan dengan mengomposisikan suatu fungsi dengan dirinya sendiri ....",
        gambar: "",
        opsi: ["satu kali", "tepat tiga kali", "tak hingga", "nol kali", "dua kali atau lebih"],
        jawaban: 4,
        pembahasan: "Fungsi iterasi diperoleh dengan melakukan komposisi berulang terhadap fungsi itu sendiri sebanyak dua kali atau lebih.",
        trik_cepat: "Iterasi $=$ pengulangan komposisi diri sendiri ($\\ge 2$ kali)."
    },
    {
        id: 54,
        teks: "Jika $f$ adalah suatu fungsi, iterasi ke-$2$ dinotasikan dengan $f^2(x)$ dan didefinisikan sebagai ....",
        gambar: "",
        opsi: ["$f(x) \\times f(x)$", "$f(f(x))$", "$f(x) + f(x)$", "$f(x^2)$", "$2f(x)$"],
        jawaban: 1,
        pembahasan: "Notasi $f^2(x)$ pada fungsi iterasi menyatakan komposisi fungsi $(f \\circ f)(x) = f(f(x))$.",
        trik_cepat: "Iterasi ke-$2$ berarti fungsi dikomposisikan dua kali: $f(f(x))$."
    },
    {
        id: 55,
        teks: "Diketahui fungsi $f(x) = x + 4$.<br>Iterasi ke-$2$ dari fungsi tersebut adalah ....",
        gambar: "",
        opsi: ["$2x + 4$", "$x + 4$", "$x + 12$", "$x + 8$", "$2x + 8$"],
        jawaban: 3,
        pembahasan: "$f^2(x) = f(f(x))$<br>$= f(x + 4) = (x + 4) + 4 = x + 8$.",
        trik_cepat: "Setiap iterasi menambah $4$, sehingga $2$ iterasi menambah $8$."
    },
    {
        id: 56,
        teks: "Diketahui fungsi $f(x) = x + 4$.<br>Rumus iterasi ke-$n$ dari fungsi tersebut adalah ....",
        gambar: "",
        opsi: ["$f^n(x) = x + 4n$", "$f^n(x) = x + 4$", "$f^n(x) = 4x + n$", "$f^n(x) = nx + 4$", "$f^n(x) = 4^n x$"],
        jawaban: 0,
        pembahasan: "$f^1(x) = x + 4$, $f^2(x)$<br>$= x + 8$, $f^3(x) = x + 12$, sehingga pola ke-$n$ adalah $f^n(x) = x + 4n$.",
        trik_cepat: "Iterasi ke-$n$ dari $f(x) = x + a$ adalah $x + an$."
    },
    {
        id: 57,
        teks: "Diketahui fungsi $f(x) = 2x$.<br>Iterasi ke-$3$ dari fungsi tersebut adalah ....",
        gambar: "",
        opsi: ["$2x$", "$4x$", "$8x$", "$6x$", "$16x$"],
        jawaban: 2,
        pembahasan: "$f^1(x) = 2x$, $f^2(x)$<br>$= 2(2x) = 4x$, dan $f^3(x) = 2(4x) = 8x$.",
        trik_cepat: "Iterasi ke-$n$ dari $f(x) = ax$ adalah $a^n x = 2^3 x = 8x$."
    },
    {
        id: 58,
        teks: "Diketahui fungsi $f(x) = x - 3$.<br>Nilai $f^4(10)$ adalah ....",
        gambar: "",
        opsi: ["1", "4", "7", "10", "-2"],
        jawaban: 4,
        pembahasan: "Rumus iterasi ke-$n$: $f^n(x) = x - 3n$.<br>Untuk $n = 4$ dan $x$<br>$= 10$: $f^4(10) = 10 - 3(4) = 10 - 12 = -2$.",
        trik_cepat: "Kurangkan $10$ dengan $4 \\times 3 = 12$."
    },

    // ==================== E. LINGKARAN ====================
    {
        id: 59,
        teks: "Diketahui lingkaran dengan pusat $O$ dan jari-jari $10$ cm.<br>Panjang diameter lingkaran tersebut adalah ....",
        gambar: "",
        opsi: ["5 cm", "20 cm", "15 cm", "25 cm", "10 cm"],
        jawaban: 1,
        pembahasan: "Diameter adalah dua kali jari-jari: $d = 2r$<br>$= 2 \\times 10 = 20$ cm.",
        trik_cepat: "$d = 2r$."
    },
    {
        id: 60,
        teks: "Diketahui lingkaran dengan jari-jari $10$ cm.<br>Panjang tali busur terpanjang pada lingkaran tersebut adalah ....",
        gambar: "",
        opsi: ["15 cm", "5 cm", "10 cm", "20 cm", "25 cm"],
        jawaban: 3,
        pembahasan: "Tali busur terpanjang pada lingkaran adalah diameternya: $d = 2r$<br>$= 20$ cm.",
        trik_cepat: "Tali busur terpanjang $=$ diameter."
    },
    {
        id: 61,
        teks: "Sebuah lingkaran memiliki diameter $14$ cm.<br>Keliling lingkaran tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
        gambar: "",
        opsi: ["44 cm", "22 cm", "66 cm", "88 cm", "154 cm"],
        jawaban: 0,
        pembahasan: "$K = \\pi d$<br>$= \\frac{22}{7} \\times 14 = 44$ cm.",
        trik_cepat: "$K = \\pi d$."
    },
    {
        id: 62,
        teks: "Sebuah lingkaran memiliki jari-jari $7$ cm.<br>Luas lingkaran tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
        gambar: "",
        opsi: ["144 cm²", "134 cm²", "154 cm²", "124 cm²", "114 cm²"],
        jawaban: 2,
        pembahasan: "$L = \\pi r^2$<br>$= \\frac{22}{7} \\times 7^2 = 22 \\times 7 = 154$ cm².",
        trik_cepat: "$L = \\pi r^2$."
    },
    {
        id: 63,
        teks: "Sebuah lingkaran memiliki keliling $44$ cm.<br>Panjang jari-jari lingkaran tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
        gambar: "",
        opsi: ["5 cm", "6 cm", "8 cm", "9 cm", "7 cm"],
        jawaban: 4,
        pembahasan: "$K = 2\\pi r$<br>$\\Rightarrow 44$<br>$= 2 \\times \\frac{22}{7} \\times r \\Rightarrow r = 7$ cm.",
        trik_cepat: "$r = \\frac{K}{2\\pi}$."
    },
    {
        id: 64,
        teks: "Sebuah lingkaran memiliki luas $154$ cm².<br>Panjang jari-jari lingkaran tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
        gambar: "",
        opsi: ["6 cm", "7 cm", "8 cm", "9 cm", "5 cm"],
        jawaban: 1,
        pembahasan: "$L = \\pi r^2$<br>$\\Rightarrow 154$<br>$= \\frac{22}{7} r^2 \\Rightarrow r^2 = 49 \\Rightarrow r = 7$ cm.",
        trik_cepat: "$r = \\sqrt{\\frac{L}{\\pi}}$."
    },
    {
        id: 65,
        teks: "Besar sudut keliling yang menghadap diameter lingkaran adalah ....",
        gambar: "",
        opsi: ["60°", "30°", "45°", "90°", "180°"],
        jawaban: 3,
        pembahasan: "Menurut Teorema Thales, sudut keliling yang menghadap diameter lingkaran selalu siku-siku ($90^\\circ$).",
        trik_cepat: "Sudut keliling menghadap diameter $= 90^\\circ$."
    },
    {
        id: 66,
        teks: "Jika sudut pusat suatu lingkaran besarnya $120^\\circ$, maka sudut keliling yang menghadap busur yang sama adalah ....",
        gambar: "",
        opsi: ["60°", "30°", "90°", "120°", "240°"],
        jawaban: 0,
        pembahasan: "Sudut keliling $= \\frac{1}{2} \\times \\text{sudut pusat} = \\frac{1}{2} \\times 120^\\circ$<br>$= 60^\\circ$.",
        trik_cepat: "Sudut keliling $= \\frac{1}{2}$ sudut pusat."
    },
    {
        id: 67,
        teks: "Jika sudut keliling suatu lingkaran besarnya $40^\\circ$, maka sudut pusat yang menghadap busur yang sama adalah ....",
        gambar: "",
        opsi: ["20°", "40°", "80°", "60°", "100°"],
        jawaban: 2,
        pembahasan: "Sudut pusat $= 2 \\times \\text{sudut keliling} = 2 \\times 40^\\circ$<br>$= 80^\\circ$.",
        trik_cepat: "Sudut pusat $= 2 \\times$ sudut keliling."
    },
    {
        id: 68,
        teks: "Diketahui lingkaran berpusat di $O$ dengan titik $A, B, C$ terletak pada keliling lingkaran.<br>Jika $\\angle ABC = 60^\\circ$ adalah sudut keliling yang menghadap busur $AC$, besar sudut pusat $\\angle AOC$ adalah ....",
        gambar: "",
        opsi: ["30°", "60°", "90°", "180°", "120°"],
        jawaban: 4,
        pembahasan: "$\\angle AOC$ dan $\\angle ABC$ menghadap busur $AC$ yang sama, sehingga $\\angle AOC = 2 \\times 60^\\circ$<br>$= 120^\\circ$.",
        trik_cepat: "Sudut pusat $= 2 \\times$ sudut keliling."
    },
    {
        id: 69,
        teks: "Sebuah lingkaran berpusat di $O$ memiliki titik $A$ dan $B$ pada lingkaran.<br>Jika $\\angle AOB = 80^\\circ$, besar $\\angle OAB$ adalah ....",
        gambar: "",
        opsi: ["40°", "50°", "70°", "80°", "60°"],
        jawaban: 1,
        pembahasan: "Karena $OA = OB$<br>$= r$, segitiga $OAB$ sama kaki sehingga $\\angle OAB = \\angle OBA$.<br>$\\angle OAB = \\frac{180^\\circ - 80^\\circ}{2}$<br>$= 50^\\circ$.",
        trik_cepat: "Segitiga $OAB$ sama kaki, sisa sudut dibagi dua."
    },
    {
        id: 70,
        teks: "Diketahui dua lingkaran bersinggungan luar dengan jari-jari masing-masing $8$ cm dan $4$ cm.<br>Jarak pusat kedua lingkaran tersebut adalah ....",
        gambar: "",
        opsi: ["16 cm", "4 cm", "8 cm", "12 cm", "20 cm"],
        jawaban: 3,
        pembahasan: "Untuk dua lingkaran yang bersinggungan luar, jarak kedua pusatnya adalah $p = R + r$<br>$= 8 + 4 = 12$ cm.",
        trik_cepat: "Bersinggungan luar: $p = R + r$."
    },
    {
        id: 71,
        teks: "Diketahui dua lingkaran bersinggungan dalam dengan jari-jari masing-masing $10$ cm dan $4$ cm.<br>Jarak pusat kedua lingkaran tersebut adalah ....",
        gambar: "",
        opsi: ["6 cm", "4 cm", "8 cm", "10 cm", "14 cm"],
        jawaban: 0,
        pembahasan: "Untuk dua lingkaran yang bersinggungan dalam, jarak kedua pusatnya adalah $p = R - r$<br>$= 10 - 4 = 6$ cm.",
        trik_cepat: "Bersinggungan dalam: $p = R - r$."
    },
    {
        id: 72,
        teks: "Diketahui segiempat tali busur $ABCD$ terletak pada sebuah lingkaran.<br>Jika $\\angle A = 80^\\circ$ dan $\\angle B$<br>$= 70^\\circ$, besar $\\angle D$ adalah ....",
        gambar: "",
        opsi: ["100°", "120°", "110°", "130°", "140°"],
        jawaban: 2,
        pembahasan: "Sudut yang berhadapan pada segiempat tali busur berjumlah $180^\\circ$:<br>$\\angle B + \\angle D = 180^\\circ$<br>$\\Rightarrow 70^\\circ + \\angle D$<br>$= 180^\\circ$<br>$\\Rightarrow \\angle D = 110^\\circ$.",
        trik_cepat: "Sudut berhadapan pada segiempat tali busur berjumlah $180^\\circ$."
    },
    {
        id: 73,
        teks: "Pada segitiga $ABC$ yang titik-titik sudutnya berada pada lingkaran dengan $AC$ sebagai diameter, diketahui perbandingan $\\angle CAB : \\angle ACB = 4 : 5$.<br>Besar $\\angle ACB$ adalah ....",
        gambar: "",
        opsi: ["60°", "40°", "35°", "30°", "50°"],
        jawaban: 4,
        pembahasan: "Karena $AC$ diameter, maka $\\angle ABC = 90^\\circ$.<br>Jumlah dua sudut lancipnya adalah $90^\\circ$:<br>$4k + 5k = 90^\\circ$<br>$\\Rightarrow 9k$<br>$= 90^\\circ \\Rightarrow k = 10^\\circ$.<br>Jadi $\\angle ACB = 5(10^\\circ)$<br>$= 50^\\circ$.",
        trik_cepat: "$\\angle ABC = 90^\\circ$, maka $\\angle ACB = \\frac{5}{4+5} \\times 90^\\circ = 50^\\circ$."
    },
    {
        id: 74,
        teks: "Diketahui lingkaran berpusat di $O$ dan garis $AB$ menyinggung lingkaran di titik $A$.<br>Jika jari-jari $OA = 6$ cm dan jarak $OB$<br>$= 10$ cm, besar $\\angle OAB$ dan panjang $AB$ berturut-turut adalah ....",
        gambar: "",
        opsi: ["$60^\\circ$ dan $8$ cm", "$90^\\circ$ dan $8$ cm", "$90^\\circ$ dan $6$ cm", "$45^\\circ$ dan $8$ cm", "$90^\\circ$ dan $10$ cm"],
        jawaban: 1,
        pembahasan: "Garis singgung selalu tegak lurus dengan jari-jari di titik singgung, sehingga $\\angle OAB = 90^\\circ$.<br>Dengan Pythagoras: $AB = \\sqrt{10^2 - 6^2}$<br>$= \\sqrt{64} = 8$ cm.",
        trik_cepat: "Garis singgung $\\perp$ jari-jari ($90^\\circ$), gunakan tripel Pythagoras $6, 8, 10$."
    },
    {
        id: 75,
        teks: "Diketahui lingkaran dengan jari-jari $14$ cm.<br>Panjang busur yang menghadap sudut pusat $45^\\circ$ adalah .... ($\\pi = \\frac{22}{7}$)",
        gambar: "",
        opsi: ["22 cm", "44 cm", "33 cm", "11 cm", "55 cm"],
        jawaban: 3,
        pembahasan: "Panjang busur $= \\frac{45^\\circ}{360^\\circ} \\times 2 \\times \\frac{22}{7} \\times 14 = \\frac{1}{8} \\times 88$<br>$= 11$ cm.",
        trik_cepat: "$\\text{Busur} = \\frac{\\theta}{360^\\circ} \\times 2\\pi r$."
    },
    {
        id: 76,
        teks: "Sebuah lingkaran memiliki sudut pusat $90^\\circ$ dan jari-jari $14$ cm.<br>Panjang busur yang menghadap sudut tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
        gambar: "",
        opsi: ["22 cm", "33 cm", "11 cm", "44 cm", "55 cm"],
        jawaban: 0,
        pembahasan: "Panjang busur $= \\frac{90^\\circ}{360^\\circ} \\times 2 \\times \\frac{22}{7} \\times 14 = \\frac{1}{4} \\times 88$<br>$= 22$ cm.",
        trik_cepat: "Sudut $90^\\circ$ berarti $\\frac{1}{4}$ keliling lingkaran."
    },
    {
        id: 77,
        teks: "Diketahui lingkaran dengan jari-jari $21$ cm.<br>Luas juring yang menghadap sudut pusat $60^\\circ$ adalah .... ($\\pi = \\frac{22}{7}$)",
        gambar: "",
        opsi: ["241 cm²", "251 cm²", "231 cm²", "261 cm²", "271 cm²"],
        jawaban: 2,
        pembahasan: "Luas juring $= \\frac{60^\\circ}{360^\\circ} \\times \\frac{22}{7} \\times 21^2 = \\frac{1}{6} \\times 1386$<br>$= 231$ cm².",
        trik_cepat: "$\\text{Juring} = \\frac{\\theta}{360^\\circ} \\times \\pi r^2$."
    },
    {
        id: 78,
        teks: "Diketahui lingkaran dengan jari-jari $7$ cm.<br>Panjang garis singgung dari titik di luar lingkaran yang berjarak $25$ cm dari pusat adalah ....",
        gambar: "",
        opsi: ["20 cm", "22 cm", "26 cm", "28 cm", "24 cm"],
        jawaban: 4,
        pembahasan: "$d = \\sqrt{p^2 - r^2}$<br>$= \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$ cm.",
        trik_cepat: "Gunakan tripel Pythagoras $7, 24, 25$."
    },
    {
        id: 79,
        teks: "Dua lingkaran memiliki jari-jari $5$ cm dan $3$ cm.<br>Jika jarak pusat kedua lingkaran $10$ cm, panjang garis singgung persekutuan luar adalah ....",
        gambar: "",
        opsi: ["$4\\sqrt{5}$ cm", "$4\\sqrt{6}$ cm", "$4\\sqrt{3}$ cm", "$4\\sqrt{2}$ cm", "$4$ cm"],
        jawaban: 1,
        pembahasan: "$d_{\\text{luar}} = \\sqrt{p^2 - (R - r)^2}$<br>$= \\sqrt{10^2 - (5 - 3)^2} = \\sqrt{100 - 4} = \\sqrt{96} = 4\\sqrt{6}$ cm.",
        trik_cepat: "$d_{\\text{luar}} = \\sqrt{p^2 - (R-r)^2}$."
    },
    {
        id: 80,
        teks: "Dua lingkaran memiliki jari-jari $3$ cm dan $1$ cm.<br>Jika jarak pusat kedua lingkaran $10$ cm, panjang garis singgung persekutuan dalam adalah ....",
        gambar: "",
        opsi: ["$2\\sqrt{19}$ cm", "$2\\sqrt{15}$ cm", "$2\\sqrt{17}$ cm", "$2\\sqrt{21}$ cm", "$2\\sqrt{13}$ cm"],
        jawaban: 3,
        pembahasan: "$d_{\\text{dalam}} = \\sqrt{p^2 - (R + r)^2}$<br>$= \\sqrt{10^2 - (3 + 1)^2} = \\sqrt{100 - 16} = \\sqrt{84} = 2\\sqrt{21}$ cm.",
        trik_cepat: "$d_{\\text{dalam}} = \\sqrt{p^2 - (R+r)^2}$."
    },
    {
        id: 81,
        teks: "Dua tali busur $AC$ dan $BD$ berpotongan di titik $E$ di dalam lingkaran.<br>Diketahui panjang $AC = 14$ cm dengan perbandingan $AE : EC$<br>$= 5 : 2$, serta panjang $BD = 13$ cm dan $DE < EB$.<br>Pernyataan berikut yang tepat adalah ....",
        gambar: "",
        opsi: ["$AE \\times EC = DE \\times EB = 40$", "$DE = 8$ cm dan $EB = 5$ cm", "$AE \\times EC < DE \\times EB$", "$AE = 8$ cm dan $EC = 6$ cm", "$DE = 4$ cm dan $EB = 9$ cm"],
        jawaban: 0,
        pembahasan: "$AE = \\frac{5}{7} \\times 14$<br>$= 10$ cm dan $EC = \\frac{2}{7} \\times 14 = 4$ cm.<br>Menurut teorema daya titik, $AE \\times EC = DE \\times EB$<br>$= 10 \\times 4 = 40$.<br>Karena $DE + EB = 13$ dan $DE < EB$, maka $DE$<br>$= 5$ cm dan $EB = 8$ cm.",
        trik_cepat: "Teorema dua tali busur berpotongan di dalam lingkaran: $AE \\times EC = DE \\times EB$."
    },
    {
        id: 82,
        teks: "Dua tali busur $KL$ dan $MN$ berpotongan di titik $P$ di dalam lingkaran berpusat di $O$.<br>Jika besar sudut tumpul $\\angle MPN = 94^\\circ$ dan sudut pusat $\\angle MON$<br>$= 134^\\circ$, besar sudut pusat $\\angle LOK$ adalah ....",
        gambar: "",
        opsi: ["40°", "48°", "54°", "60°", "68°"],
        jawaban: 2,
        pembahasan: "Sudut antara dua tali busur yang berpotongan di dalam lingkaran sama dengan setengah jumlah kedua sudut pusat yang menghadap busurnya:<br>$\\angle MPN = \\frac{1}{2}(\\angle MON + \\angle LOK)$<br>$94^\\circ = \\frac{1}{2}(134^\\circ + \\angle LOK)$<br>$\\Rightarrow 188^\\circ$<br>$= 134^\\circ + \\angle LOK$<br>$\\Rightarrow \\angle LOK = 54^\\circ$.",
        trik_cepat: "$\\angle \\text{dalam} = \\frac{1}{2}(\\text{busur}_1 + \\text{busur}_2)$."
    },
    {
        id: 83,
        teks: "Diketahui lingkaran berpusat di $O$ dan $P$ dengan jarak pusat $OP = 13$ cm.<br>Panjang garis singgung persekutuan dalam $AB = 12$ cm dan jari-jari $OA$<br>$= 3$ cm.<br>Perbandingan luas daerah lingkaran $O$ dan lingkaran $P$ adalah ....",
        gambar: "",
        opsi: ["2 : 3", "3 : 2", "4 : 3", "4 : 9", "9 : 4"],
        jawaban: 4,
        pembahasan: "$AB^2 = OP^2 - (R + r)^2 \\Rightarrow 12^2$<br>$= 13^2 - (3 + r)^2$<br>$\\Rightarrow (3 + r)^2 = 25 \\Rightarrow r$<br>$= 2$ cm.<br>Perbandingan luas $= R^2 : r^2 = 3^2 : 2^2$<br>$= 9 : 4$.",
        trik_cepat: "Gunakan tripel Pythagoras $5, 12, 13$ sehingga $R + r = 5 \\Rightarrow r = 2$."
    },
    {
        id: 84,
        teks: "Diketahui lingkaran dengan jari-jari $14$ cm.<br>Luas tembereng yang dibatasi tali busur $AB$ dan busur $AB$ dengan sudut pusat $90^\\circ$ adalah .... ($\\pi = \\frac{22}{7}$)",
        gambar: "",
        opsi: ["154 cm²", "56 cm²", "98 cm²", "42 cm²", "112 cm²"],
        jawaban: 1,
        pembahasan: "• Luas juring $= \\frac{1}{4} \\times \\frac{22}{7} \\times 14^2 = 154$ cm².<br>• Luas segitiga siku-siku $= \\frac{1}{2} \\times 14 \\times 14 = 98$ cm².<br>• Luas tembereng $= 154 - 98 = 56$ cm².",
        trik_cepat: "Untuk sudut $90^\\circ$, luas tembereng $= \\frac{2}{7} r^2 = \\frac{2}{7} \\times 196 = 56$ cm²."
    },
    {
        id: 85,
        teks: "Sebuah masjid memiliki kubah berbentuk setengah bola dengan diameter $14$ m.<br>Bagian luar kubah akan dicat. Jika satu kaleng cat dapat menutupi $50$ m², banyak kaleng cat minimum yang diperlukan adalah .... ($\\pi = \\frac{22}{7}$)",
        gambar: "",
        opsi: ["5 kaleng", "8 kaleng", "6 kaleng", "7 kaleng", "9 kaleng"],
        jawaban: 3,
        pembahasan: "Jari-jari $r = 7$ m.<br>Luas permukaan setengah bola $= 2\\pi r^2 = 2 \\times \\frac{22}{7} \\times 49$<br>$= 308$ m².<br>Banyak cat $= \\frac{308}{50} = 6{,}16 \\rightarrow$ dibulatkan ke atas menjadi $7$ kaleng.",
        trik_cepat: "Luas setengah bola $= 2\\pi r^2$, bagi daya sebar cat lalu bulatkan ke atas."
    },
    {
        id: 86,
        teks: "Seorang petani memiliki lahan berbentuk lingkaran dengan diameter $28$ m.<br>Di sepanjang tepi lahan akan ditanami pohon dengan jarak antar pohon $4$ m. Banyak pohon maksimum yang dapat ditanam adalah .... ($\\pi = \\frac{22}{7}$)",
        gambar: "",
        opsi: ["22 pohon", "21 pohon", "20 pohon", "23 pohon", "24 pohon"],
        jawaban: 0,
        pembahasan: "Keliling lahan $= \\pi d = \\frac{22}{7} \\times 28$<br>$= 88$ m.<br>Banyak pohon $= \\frac{88}{4} = 22$ pohon.",
        trik_cepat: "Lintasan tertutup melingkar: banyak pohon $= \\frac{\\text{Keliling}}{\\text{jarak}}$."
    },
    {
        id: 87,
        teks: "Panitia masjid merancang taman berbentuk juring lingkaran dengan sudut pusat $120^\\circ$ dan jari-jari $21$ m.<br>Di sepanjang busur taman dipasang lampu hias dengan jarak $2$ m antar lampu. Banyak lampu yang diperlukan pada busur tersebut adalah .... ($\\pi = \\frac{22}{7}$)",
        gambar: "",
        opsi: ["20 lampu", "21 lampu", "22 lampu", "23 lampu", "24 lampu"],
        jawaban: 2,
        pembahasan: "Panjang busur $= \\frac{120^\\circ}{360^\\circ} \\times 2 \\times \\frac{22}{7} \\times 21 = \\frac{1}{3} \\times 132$<br>$= 44$ m.<br>Banyak lampu $= \\frac{44}{2} = 22$ lampu.",
        trik_cepat: "Hitung panjang busur lalu bagi jarak antar lampu."
    },

    // ==================== F. LINGKARAN DALAM SEGITIGA ====================
    {
        id: 88,
        teks: "Lingkaran dalam suatu segitiga adalah lingkaran yang menyinggung ketiga sisi segitiga dari dalam dan berpusat di titik potong ....",
        gambar: "",
        opsi: ["ketiga garis tinggi", "ketiga garis berat", "ketiga garis sumbu", "ketiga garis singgung", "ketiga garis bagi sudut"],
        jawaban: 4,
        pembahasan: "Titik pusat lingkaran dalam segitiga (incenter) merupakan titik potong ketiga garis bagi sudut dalam segitiga tersebut.",
        trik_cepat: "Lingkaran dalam $\\rightarrow$ titik potong garis bagi sudut."
    },
    {
        id: 89,
        teks: "Panjang jari-jari lingkaran dalam segitiga dirumuskan sebagai ....",
        gambar: "",
        opsi: ["$r = \\frac{s}{L}$", "$r = \\frac{L}{s}$", "$r = L \\times s$", "$r = \\frac{L}{2s}$", "$r = \\sqrt{L \\times s}$"],
        jawaban: 1,
        pembahasan: "Jari-jari lingkaran dalam segitiga dirumuskan dengan $r = \\frac{L}{s}$, di mana $L$ adalah luas segitiga dan $s$<br>$= \\frac{a+b+c}{2}$ adalah setengah keliling segitiga.",
        trik_cepat: "$r = \\frac{\\text{Luas segitiga}}{\\text{setengah keliling}}$."
    },
    {
        id: 90,
        teks: "Diketahui segitiga $ABC$ dengan panjang sisi $AB = 6$ cm, $BC$<br>$= 8$ cm, dan $AC = 10$ cm.<br>Jika luas segitiga tersebut $24$ cm², jari-jari lingkaran dalam segitiga adalah ....",
        gambar: "",
        opsi: ["1 cm", "4 cm", "3 cm", "2 cm", "5 cm"],
        jawaban: 3,
        pembahasan: "Setengah keliling: $s = \\frac{6 + 8 + 10}{2}$<br>$= 12$ cm.<br>Jari-jari lingkaran dalam: $r = \\frac{L}{s}$<br>$= \\frac{24}{12} = 2$ cm.",
        trik_cepat: "Hitung $s = \\frac{a+b+c}{2}$, lalu bagi luas $L$ dengan $s$."
    },
    {
        id: 91,
        teks: "Diketahui segitiga siku-siku dengan panjang sisi $a = 5$ cm, $b$<br>$= 12$ cm, dan $c = 13$ cm.<br>Panjang jari-jari lingkaran dalam segitiga tersebut adalah ....",
        gambar: "",
        opsi: ["2 cm", "3 cm", "1 cm", "4 cm", "5 cm"],
        jawaban: 0,
        pembahasan: "Luas segitiga siku-siku: $L = \\frac{1}{2} \\times 5 \\times 12$<br>$= 30$ cm².<br>Setengah keliling: $s = \\frac{5 + 12 + 13}{2}$<br>$= 15$ cm.<br>Jari-jari lingkaran dalam: $r = \\frac{30}{15}$<br>$= 2$ cm.",
        trik_cepat: "Khusus segitiga siku-siku, berlaku rumus cepat $r = \\frac{a + b - c}{2} = \\frac{5 + 12 - 13}{2} = 2$ cm."
    }
];

// module.exports = soalMatematikaUmum;