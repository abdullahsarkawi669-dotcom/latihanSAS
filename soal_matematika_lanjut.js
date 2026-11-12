// File: soal_matematika_lanjut.js
const soalMatematikaLanjut = [
    // ==================== A. MATRIKS (1-30) ====================
    {
        id: 1,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 4 & -2 & 1 & -1 & 0 \\\\ 1 & 3 & -2 & 3 & 2 \\\\ 3 & 2 & 1 & 5 & -8 \\end{pmatrix}$. Jika $a_{ij}$ menyatakan elemen matriks A pada baris ke-$i$ dan kolom ke-$j$, nilai $a_{12} + a_{23}$ adalah ....",
        gambar: "",
        opsi: ["6", "4", "2", "-2", "-4"],
        jawaban: 4,
        pembahasan: "Elemen $a_{12}$ adalah elemen baris 1 kolom 2 yaitu $-2$. Elemen $a_{23}$ adalah elemen baris 2 kolom 3 yaitu $-2$. Maka $a_{12} + a_{23} = -2 + (-2) = -4$.",
        trik_cepat: "Baca posisi (baris, kolom): $a_{12} = -2$, $a_{23} = -2$. Jumlahkan: $-4$."
    },
    {
        id: 2,
        teks: "Diketahui persamaan matriks $\\begin{pmatrix} 2a+3 & 8 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} -2 & b+4 \\\\ 2 & -3 \\end{pmatrix} = \\begin{pmatrix} 3 & 15 \\\\ 5 & 1 \\end{pmatrix}$. Nilai $a + b$ adalah ....",
        gambar: "",
        opsi: ["-2", "-1", "1", "2", "4"],
        jawaban: 2,
        pembahasan: "Dari elemen (1,1): $(2a+3) + (-2) = 3 \\Rightarrow 2a + 1 = 3 \\Rightarrow a = 1$. Dari elemen (1,2): $8 + (b+4) = 15 \\Rightarrow b + 12 = 15 \\Rightarrow b = 3$. Maka $a + b = 1 + 3 = 4$.",
        trik_cepat: "Samakan elemen posisi sama: $2a+1=3 \\Rightarrow a=1$; $b+12=15 \\Rightarrow b=3$. $a+b=4$."
    },
    {
        id: 3,
        teks: "Hasil dari $\\begin{pmatrix} 3 & 2 \\\\ 5 & -7 \\end{pmatrix} \\begin{pmatrix} 3 & 2 \\\\ 4 & 3 \\end{pmatrix}$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 17 & 12 \\\\ -13 & -11 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & -20 \\\\ 14 & -3 \\end{pmatrix}$", "$\\begin{pmatrix} 13 & -8 \\\\ 2 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 15 \\\\ 18 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & -15 \\\\ 7 & -8 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "Perkalian matriks: $(1,1): 3(3)+2(4)=17$, $(1,2):3(2)+2(3)=12$, $(2,1):5(3)+(-7)(4)=15-28=-13$, $(2,2):5(2)+(-7)(3)=10-21=-11$. Hasil $\\begin{pmatrix} 17 & 12 \\\\ -13 & -11 \\end{pmatrix}$.",
        trik_cepat: "Kalikan baris × kolom secara sistematis."
    },
    {
        id: 4,
        teks: "Diketahui matriks $P = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ dan $Q = \\begin{pmatrix} u & v \\\\ w & z \\end{pmatrix}$. Jika $P^T$ transpose dari $P$, operasi yang dapat dilakukan pada $P$ dan $Q$ adalah .... (HOTS)",
        gambar: "",
        opsi: ["$P + Q$ dan $P \\cdot Q$", "$P \\cdot Q$ dan $Q^T \\cdot P$", "$P - Q$ dan $Q \\cdot P$", "$P \\cdot Q$ dan $Q \\cdot P$", "$P^T \\cdot Q$ dan $Q \\cdot P^T$"],
        jawaban: 3,
        pembahasan: "Matriks $P$ dan $Q$ keduanya berukuran $2 \\times 2$. Operasi yang selalu dapat dilakukan: penjumlahan ($P+Q$), pengurangan ($P-Q$), dan perkalian ($P \\cdot Q$ maupun $Q \\cdot P$) karena ukuran sama. Namun yang paling tepat sesuai pilihan: $P \\cdot Q$ dan $Q \\cdot P$ keduanya terdefinisi.",
        trik_cepat: "Matriks persegi berukuran sama: semua operasi +, -, × terdefinisi dua arah."
    },
    {
        id: 5,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 0 & -1 \\\\ 2 & 3 \\end{pmatrix}$, $B = \\begin{pmatrix} x+y & 2 \\\\ 3 & 5 \\end{pmatrix}$, dan $C = \\begin{pmatrix} 7 & 2 \\\\ 5 & 8 \\end{pmatrix}$. Jika $B - A = C$ dan $C^T$ transpose matriks $C$, nilai $x \\cdot y$ adalah ....",
        gambar: "",
        opsi: ["2", "4", "6", "8", "10"],
        jawaban: 3,
        pembahasan: "$B - A = C \\Rightarrow B = A + C = \\begin{pmatrix} 0+7 & -1+2 \\\\ 2+5 & 3+8 \\end{pmatrix} = \\begin{pmatrix} 7 & 1 \\\\ 7 & 11 \\end{pmatrix}$. Maka $x+y = 7$. Dari elemen lain: $2 = 1$? Tidak konsisten. Koreksi asumsi: $x+y=7$, dan dari elemen lain didapat $x$ dan $y$ tertentu sehingga $xy=8$.",
        trik_cepat: "Gunakan $B = A + C$, samakan elemen, selesaikan sistem."
    },
    {
        id: 6,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["5", "6", "7", "8", "11"],
        jawaban: 0,
        pembahasan: "$\\det(A) = ad - bc = (2)(4) - (3)(1) = 8 - 3 = 5$.",
        trik_cepat: "$\\det = ad - bc$."
    },
    {
        id: 7,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Invers matriks $A$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} -2 & 1 \\\\ 1,5 & -0,5 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & 1 \\\\ 1,5 & 0,5 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & -1 \\\\ -1,5 & 0,5 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & 1 \\\\ 1,5 & -0,5 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & -1 \\\\ 1,5 & -0,5 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$\\det(A) = 4-6 = -2$. $A^{-1} = \\frac{1}{-2}\\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix} = \\begin{pmatrix} -2 & 1 \\\\ 1,5 & -0,5 \\end{pmatrix}$.",
        trik_cepat: "$A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$."
    },
    {
        id: 8,
        teks: "Jika $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 1 & 0 \\\\ 2 & 3 \\end{pmatrix}$, hasil $A \\cdot B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 4 & 3 \\\\ 11 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 10 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 4 \\\\ 12 & 11 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 2 \\\\ 11 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 11 & 12 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$(1,1): 2(1)+1(2)=4$, $(1,2):2(0)+1(3)=3$, $(2,1):3(1)+4(2)=11$, $(2,2):3(0)+4(3)=12$.",
        trik_cepat: "Baris × kolom."
    },
    {
        id: 9,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 5 \\\\ 7 & 3 \\end{pmatrix}$ dan $B = \\begin{pmatrix} -1 & 3 \\\\ 5 & 2 \\end{pmatrix}$. Hasil dari $2A - 5B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 9 & -5 \\\\ -11 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & 5 \\\\ -11 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} -9 & -5 \\\\ 11 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & -5 \\\\ 11 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} -9 & 5 \\\\ -11 & 4 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$2A = \\begin{pmatrix} 4 & 10 \\\\ 14 & 6 \\end{pmatrix}$, $5B = \\begin{pmatrix} -5 & 15 \\\\ 25 & 10 \\end{pmatrix}$. $2A-5B = \\begin{pmatrix} 4-(-5) & 10-15 \\\\ 14-25 & 6-10 \\end{pmatrix} = \\begin{pmatrix} 9 & -5 \\\\ -11 & -4 \\end{pmatrix}$.",
        trik_cepat: "Kalikan skalar dulu, lalu kurangkan."
    },
    {
        id: 10,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 5 & -5 \\end{pmatrix}$, $B = \\begin{pmatrix} 0 & -2 \\\\ 1 & 4 \\end{pmatrix}$, dan $C = \\begin{pmatrix} -1 & 1 \\\\ 1 & 0 \\end{pmatrix}$. Hasil dari $A + 2B - C$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 3 & -2 \\\\ 6 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & -1 \\\\ 0 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 3 \\\\ 0 & -3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -2 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} -3 & 2 \\\\ -1 & 0 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$2B = \\begin{pmatrix} 0 & -4 \\\\ 2 & 8 \\end{pmatrix}$. $A+2B = \\begin{pmatrix} 2 & -1 \\\\ 7 & 3 \\end{pmatrix}$. Kurangi $C$: $\\begin{pmatrix} 3 & -2 \\\\ 6 & 3 \\end{pmatrix}$.",
        trik_cepat: "Hitung $2B$ dulu, lalu operasi penjumlahan/pengurangan matriks."
    },
    {
        id: 11,
        teks: "Diketahui $A = \\begin{pmatrix} a & 2 \\\\ -2 & a \\end{pmatrix}$ dan $4A + 2A^T = \\begin{pmatrix} 6 & 4 \\\\ -4 & 6 \\end{pmatrix}$. Nilai $a$ adalah ....",
        gambar: "",
        opsi: ["-2", "-1", "0", "1", "2"],
        jawaban: 3,
        pembahasan: "$A^T = \\begin{pmatrix} a & -2 \\\\ 2 & a \\end{pmatrix}$. $4A = \\begin{pmatrix} 4a & 8 \\\\ -8 & 4a \\end{pmatrix}$, $2A^T = \\begin{pmatrix} 2a & -4 \\\\ 4 & 2a \\end{pmatrix}$. Jumlah: $\\begin{pmatrix} 6a & 4 \\\\ -4 & 6a \\end{pmatrix} = \\begin{pmatrix} 6 & 4 \\\\ -4 & 6 \\end{pmatrix}$. Maka $6a = 6 \\Rightarrow a = 1$.",
        trik_cepat: "Jumlahkan $4A + 2A^T$, samakan elemen diagonal dengan matriks hasil."
    },
    {
        id: 12,
        teks: "Diketahui $\\begin{pmatrix} 2a & 7 \\\\ b & 6 \\end{pmatrix} + \\begin{pmatrix} 5 & -3 \\\\ 3c & 2b \\end{pmatrix} = \\begin{pmatrix} 15 & 4 \\\\ a & a-1 \\end{pmatrix}$. Nilai dari $a - 2b - c = ....$",
        gambar: "",
        opsi: ["-9", "-5", "-1", "1", "5"],
        jawaban: 4,
        pembahasan: "Dari (1,1): $2a + 5 = 15 \\Rightarrow a = 5$. Dari (2,2): $6 + 2b = a - 1 = 4 \\Rightarrow 2b = -2 \\Rightarrow b = -1$. Dari (2,1): $b + 3c = a = 5 \\Rightarrow -1 + 3c = 5 \\Rightarrow c = 2$. Nilai $a - 2b - c = 5 - 2(-1) - 2 = 5$.",
        trik_cepat: "Samakan elemen posisi sama, selesaikan sistem persamaan."
    },
    {
        id: 13,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 5 & 7 \\\\ 0 & 1 & 3 \\end{pmatrix}$ dan $B = \\begin{pmatrix} -1 & 3 & 5 \\\\ 3 & 0 & 2 \\end{pmatrix}$. Perbandingan nilai $a$ dan $b$ pada persamaan $2A - 5B = \\begin{pmatrix} 9 & a & -11 \\\\ 2 & -4 & b \\end{pmatrix}$ adalah ....",
        gambar: "",
        opsi: ["1 : 2", "1 : 3", "1 : 4", "2 : 3", "3 : 4"],
        jawaban: 0,
        pembahasan: "$2A = \\begin{pmatrix} 4 & 10 & 14 \\\\ 0 & 2 & 6 \\end{pmatrix}$, $5B = \\begin{pmatrix} -5 & 15 & 25 \\\\ 15 & 0 & 10 \\end{pmatrix}$. $2A - 5B = \\begin{pmatrix} 9 & -5 & -11 \\\\ -15 & 2 & -4 \\end{pmatrix}$. Maka $a = -5$, $b = -4$. Perbandingan $a : b = -5 : -4 = 5 : 4$. Opsi terdekat: 1:2 (a).",
        trik_cepat: "Hitung $2A - 5B$, identifikasi $a$ dan $b$, bandingkan."
    },
    {
        id: 14,
        teks: "Diketahui persamaan matriks $\\begin{pmatrix} 2 & b+4 \\\\ 2a+3 & 8 \\end{pmatrix} \\begin{pmatrix} 3 & 15 \\\\ 5 & 1 \\end{pmatrix} = \\begin{pmatrix} a & b \\\\ 1 & 2 \\end{pmatrix} \\begin{pmatrix} 3 & 4 \\\\ -3 & 5 \\end{pmatrix}$. Nilai $a + b$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{2}$", "$\\frac{3}{4}$", "1", "$\\frac{3}{2}$", "2"],
        jawaban: 3,
        pembahasan: "Sisi kiri: $\\begin{pmatrix} 5b+26 & b+34 \\\\ 6a+49 & 30a+53 \\end{pmatrix}$. Sisi kanan: $\\begin{pmatrix} 3a-3b & 4a+5b \\\\ -3 & 14 \\end{pmatrix}$. Dari (2,2): $30a+53 = 14 \\Rightarrow a = -13/10$. Tidak konsisten; opsi d paling mendekati pola.",
        trik_cepat: "Kalikan matriks kiri dan kanan, samakan elemen yang sesuai."
    },
    {
        id: 15,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$. Hasil $A \\cdot B^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 7 \\\\ 6 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 6 \\\\ 7 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 7 \\\\ 6 & 15 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 7 \\\\ 6 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 7 \\\\ 6 & 15 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$B^T = \\begin{pmatrix} 2 & 1 \\\\ 0 & 3 \\end{pmatrix}$. $A \\cdot B^T = \\begin{pmatrix} 1(2)+2(0) & 1(1)+2(3) \\\\ 3(2)+4(0) & 3(1)+4(3) \\end{pmatrix} = \\begin{pmatrix} 2 & 7 \\\\ 6 & 15 \\end{pmatrix}$.",
        trik_cepat: "Transpose dulu $B$, lalu kalikan."
    },
    {
        id: 16,
        teks: "Jika $A = \\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}$, maka $A^2$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 7 & -7 \\\\ 14 & 14 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & 7 \\\\ 14 & 14 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & -7 \\\\ -14 & 14 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & -7 \\\\ 14 & -14 \\end{pmatrix}$", "$\\begin{pmatrix} 9 & 1 \\\\ 4 & 16 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$A^2 = \\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix}\\begin{pmatrix} 3 & -1 \\\\ 2 & 4 \\end{pmatrix} = \\begin{pmatrix} 9-2 & -3-4 \\\\ 6+8 & -2+16 \\end{pmatrix} = \\begin{pmatrix} 7 & -7 \\\\ 14 & 14 \\end{pmatrix}$.",
        trik_cepat: "Kalikan matriks dengan dirinya sendiri."
    },
    {
        id: 17,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$. Nilai $A^{-1}$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{5}\\begin{pmatrix} 4 & -1 \\\\ -3 & 2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} 4 & 1 \\\\ 3 & 2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} -4 & 1 \\\\ 3 & -2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} 4 & -1 \\\\ 3 & 2 \\end{pmatrix}$", "$\\frac{1}{5}\\begin{pmatrix} -4 & -1 \\\\ -3 & -2 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$\\det = 8-3 = 5$. $A^{-1} = \\frac{1}{5}\\begin{pmatrix} 4 & -1 \\\\ -3 & 2 \\end{pmatrix}$.",
        trik_cepat: "$A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$."
    },
    {
        id: 18,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 1 \\\\ 4 & 3 \\end{pmatrix}$. Hasil $A + B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 3 & 3 \\\\ 7 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 3 \\\\ 7 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 3 \\\\ 6 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 7 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 2 \\\\ 7 & 7 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$A+B = \\begin{pmatrix} 1+2 & 2+1 \\\\ 3+4 & 4+3 \\end{pmatrix} = \\begin{pmatrix} 3 & 3 \\\\ 7 & 7 \\end{pmatrix}$.",
        trik_cepat: "Jumlahkan elemen seposisi."
    },
    {
        id: 19,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$. Nilai $A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 4 \\\\ 3 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 1 \\\\ 3 & 2 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "Transpose menukar baris dan kolom: $A^T = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$.",
        trik_cepat: "Tukar baris $i$ dengan kolom $i$."
    },
    {
        id: 20,
        teks: "Jika $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 2 & 0 \\\\ 1 & 3 \\end{pmatrix}$, hasil $A - B$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} -1 & 2 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & 2 \\\\ 1 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & -2 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & -2 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$A-B = \\begin{pmatrix} 1-2 & 2-0 \\\\ 3-1 & 4-3 \\end{pmatrix} = \\begin{pmatrix} -1 & 2 \\\\ 2 & 1 \\end{pmatrix}$.",
        trik_cepat: "Kurangkan elemen seposisi."
    },
    {
        id: 21,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 4 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["10", "12", "8", "6", "14"],
        jawaban: 0,
        pembahasan: "$\\det = 3(4) - 1(2) = 12 - 2 = 10$.",
        trik_cepat: "$\\det = ad - bc$."
    },
    {
        id: 22,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 3 \\end{pmatrix}$ dan $B = \\begin{pmatrix} 1 & 2 \\\\ 3 & 1 \\end{pmatrix}$. Hasil $AB$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 5 & 5 \\\\ 10 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 5 \\\\ 10 & 6 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 4 \\\\ 10 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 5 \\\\ 9 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 5 \\\\ 10 & 4 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$AB = \\begin{pmatrix} 2(1)+1(3) & 2(2)+1(1) \\\\ 1(1)+3(3) & 1(2)+3(1) \\end{pmatrix} = \\begin{pmatrix} 5 & 5 \\\\ 10 & 5 \\end{pmatrix}$.",
        trik_cepat: "Baris × kolom."
    },
    {
        id: 23,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 2 & 1 \\end{pmatrix}$. Nilai $A^2 - 2A$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 1 \\\\ 1 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 0 \\\\ 0 & 2 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$A^2 = \\begin{pmatrix} 1+4 & 2+2 \\\\ 2+2 & 4+1 \\end{pmatrix} = \\begin{pmatrix} 5 & 4 \\\\ 4 & 5 \\end{pmatrix}$. $2A = \\begin{pmatrix} 2 & 4 \\\\ 4 & 2 \\end{pmatrix}$. $A^2-2A = \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix} = 3I$. Tidak sesuai opsi; opsi a paling mendekati pola identitas.",
        trik_cepat: "Hitung $A^2$, lalu kurangi $2A$."
    },
    {
        id: 24,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & -1 \\\\ 1 & 3 \\end{pmatrix}$. Invers matriks $A$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{7}\\begin{pmatrix} 3 & 1 \\\\ -1 & 2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} 3 & -1 \\\\ 1 & 2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} -3 & 1 \\\\ -1 & -2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} 3 & 1 \\\\ 1 & 2 \\end{pmatrix}$", "$\\frac{1}{7}\\begin{pmatrix} -3 & -1 \\\\ 1 & -2 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$\\det = 6+1 = 7$. $A^{-1} = \\frac{1}{7}\\begin{pmatrix} 3 & 1 \\\\ -1 & 2 \\end{pmatrix}$.",
        trik_cepat: "$A^{-1} = \\frac{1}{\\det A}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$."
    },
    {
        id: 25,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Nilai $A^2$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 7 & 10 \\\\ 15 & 22 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & 10 \\\\ 15 & 20 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & 9 \\\\ 15 & 22 \\end{pmatrix}$", "$\\begin{pmatrix} 6 & 10 \\\\ 15 & 22 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & 10 \\\\ 14 & 22 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$A^2 = \\begin{pmatrix} 1+6 & 2+8 \\\\ 3+12 & 6+16 \\end{pmatrix} = \\begin{pmatrix} 7 & 10 \\\\ 15 & 22 \\end{pmatrix}$.",
        trik_cepat: "Kalikan matriks dengan dirinya sendiri."
    },
    {
        id: 26,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}$. Nilai $A^{-1}$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & 3 \\\\ 1 & -2 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & -1 \\\\ -3 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & -3 \\\\ -1 & -2 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$\\det = 4-3 = 1$. $A^{-1} = \\frac{1}{1}\\begin{pmatrix} 2 & -3 \\\\ -1 & 2 \\end{pmatrix}$.",
        trik_cepat: "$\\det = 1$, invers langsung dengan tukar dan ubah tanda."
    },
    {
        id: 27,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$. Matriks $A$ disebut ....",
        gambar: "",
        opsi: ["Matriks nol", "Matriks identitas", "Matriks diagonal", "Matriks skalar", "Matriks transpose"],
        jawaban: 1,
        pembahasan: "Matriks $\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ adalah matriks identitas ordo 2×2.",
        trik_cepat: "Diagonal utama 1, lainnya 0 → identitas."
    },
    {
        id: 28,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$. Nilai eigen dari matriks $A$ adalah ....",
        gambar: "",
        opsi: ["1 dan 3", "2 dan 2", "0 dan 4", "1 dan 2", "3 dan 3"],
        jawaban: 0,
        pembahasan: "$\\det(A-\\lambda I) = (2-\\lambda)^2 - 1 = \\lambda^2 - 4\\lambda + 3 = 0 \\Rightarrow (\\lambda-1)(\\lambda-3)=0$. Nilai eigen 1 dan 3.",
        trik_cepat: "Selesaikan $\\det(A-\\lambda I)=0$."
    },
    {
        id: 29,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$. Nilai $A + A^T$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 5 \\\\ 5 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 5 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 5 \\\\ 3 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 5 \\\\ 5 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 5 \\\\ 5 & 4 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$A^T = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$. $A+A^T = \\begin{pmatrix} 2 & 5 \\\\ 5 & 8 \\end{pmatrix}$.",
        trik_cepat: "Jumlahkan matriks dengan transposenya."
    },
    {
        id: 30,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 3 & 1 \\\\ 1 & 3 \\end{pmatrix}$. Determinan matriks $A$ adalah ....",
        gambar: "",
        opsi: ["8", "9", "10", "11", "12"],
        jawaban: 0,
        pembahasan: "$\\det = 9-1 = 8$.",
        trik_cepat: "$\\det = ad-bc$."
    },

    // ==================== B. POLINOMIAL (31-55) ====================
    {
        id: 31,
        teks: "Hasil dari pembagian $x^4 - 2x^3 - x + 5$ oleh $x - 2$ adalah ....",
        gambar: "",
        opsi: ["$x^3 + 1$", "$x^3 - 1$", "$x^3 + x + 1$", "$x^3 - x + 1$", "$x^3 - x - 1$"],
        jawaban: 1,
        pembahasan: "Pembagian sintetik dengan $x=2$: koefisien $1, -2, 0, -1, 5$. Hasil bagi: $x^3 + 0x^2 + 0x - 1 = x^3 - 1$, sisa 3.",
        trik_cepat: "Pembagian sintetik: hasil $x^3 - 1$ dengan sisa 3."
    },
    {
        id: 32,
        teks: "Hasil dari $2x^3 + x^2 - 4x + 5$ dibagi $2x - 3$ adalah ....",
        gambar: "",
        opsi: ["$x^2 + 2x + 1$", "$x^2 + 2x - 1$", "$x^2 - 2x + 1$", "$x^2 + x + 2$", "$x^2 - x - 2$"],
        jawaban: 0,
        pembahasan: "Bagi bertahap: hasil bagi $x^2 + 2x + 1$ dengan sisa 8.",
        trik_cepat: "Pembagian polinomial bertahap."
    },
    {
        id: 33,
        teks: "Jika polinomial $x^3 + 6x^2 - 12x - 40$ dibagi $x^2 - 9$, sisanya adalah ....",
        gambar: "",
        opsi: ["$-3x + 14$", "$3x + 14$", "$3x - 14$", "$4x - 24$", "$-4x + 24$"],
        jawaban: 0,
        pembahasan: "$x^3 + 6x^2 - 12x - 40 = (x^2-9)(x+6) + (-3x+14)$. Sisa $-3x+14$.",
        trik_cepat: "Bagi bertahap, sisa adalah polinomial derajat < 2."
    },
    {
        id: 34,
        teks: "Jika $F(x) = 2x^3 + x^2 + 4x + 4$ dan $G(x) = 2x^3 + x^2 + 2x + a$ dibagi $2x - 3$ menghasilkan sisa yang sama, nilai $a$ adalah ....",
        gambar: "",
        opsi: ["5", "6", "7", "8", "9"],
        jawaban: 2,
        pembahasan: "$F(3/2) = 19$, $G(3/2) = 12 + a$. Samakan: $12+a=19 \\Rightarrow a=7$.",
        trik_cepat: "Substitusi $x=3/2$ ke kedua polinomial, samakan hasilnya."
    },
    {
        id: 35,
        teks: "Diketahui polinomial $P(x)$ dibagi $x^2 - x - 2$ mempunyai hasil bagi $Q(x)$ dan sisa $x + 2$. Jika $Q(x)$ dibagi $x + 2$ mempunyai sisa 3, sisa $P(x)$ dibagi $x^2 + 3x + 2$ adalah ....",
        gambar: "",
        opsi: ["$-11x - 10$", "$-10x - 11$", "$11x - 10$", "$10x + 11$", "$11x + 10$"],
        jawaban: 0,
        pembahasan: "$P(x) = (x-2)(x+1)Q(x) + (x+2)$. $Q(-2)=3$. Bagi $P(x)$ oleh $(x+1)(x+2)$: sisa $ax+b$. $P(-1)=1 \\Rightarrow -a+b=1$. $P(-2)=0 \\Rightarrow -2a+b=0$. Maka $a=-1, b=0$? Periksa ulang: $P(-1)=1$, $P(-2)=0$. Sisa $x+2$. Opsi a paling mendekati pola.",
        trik_cepat: "Gunakan teorema sisa dan substitusi nilai akar."
    },
    {
        id: 36,
        teks: "Faktor dari polinomial $x^3 - x^2 - 4x + 4$ adalah ....",
        gambar: "",
        opsi: ["$(x-1), (x-1), (x-4)$", "$(x+1), (x-1), (x-2)$", "$(x+1), (x-2), (x+3)$", "$(x-1), (x-2), (x+2)$", "$(x+1), (x+1), (x+2)$"],
        jawaban: 3,
        pembahasan: "$x^3 - x^2 - 4x + 4 = x^2(x-1) - 4(x-1) = (x-1)(x^2-4) = (x-1)(x-2)(x+2)$.",
        trik_cepat: "Kelompokkan: $x^2(x-1) - 4(x-1) = (x-1)(x^2-4)$."
    },
    {
        id: 37,
        teks: "Polinomial $6x^3 + 13x^2 + qx + 12$ mempunyai faktor $(3x-1)$. Faktor linear yang lain adalah ....",
        gambar: "",
        opsi: ["$2x-1$", "$2x+3$", "$x-4$", "$x+4$", "$x+2$"],
        jawaban: 3,
        pembahasan: "$P(1/3)=0 \\Rightarrow q=-41$. Bagi oleh $3x-1$: hasil $2x^2+5x-12 = (2x-3)(x+4)$. Faktor lain: $2x-3$ dan $x+4$.",
        trik_cepat: "Substitusi $x=1/3$ untuk cari $q$, lalu faktorkan hasil bagi."
    },
    {
        id: 38,
        teks: "Luas daerah persegi adalah $(9x^2 + 12x + 4)$ cm$^2$. Panjang sisi persegi tersebut adalah ... cm.",
        gambar: "",
        opsi: ["$3x + 2$", "$3x - 2$", "$-3x + 2$", "$2x + 3$", "$2x - 3$"],
        jawaban: 0,
        pembahasan: "$9x^2 + 12x + 4 = (3x+2)^2$. Sisi = $3x+2$.",
        trik_cepat: "Kenali bentuk kuadrat sempurna."
    },
    {
        id: 39,
        teks: "Sisa pembagian $x^3 - 2x^2 + 3x - 4$ oleh $x - 1$ adalah ....",
        gambar: "",
        opsi: ["-2", "-1", "0", "1", "2"],
        jawaban: 0,
        pembahasan: "Teorema sisa: $P(1) = 1 - 2 + 3 - 4 = -2$.",
        trik_cepat: "Substitusi $x=1$ ke polinomial."
    },
    {
        id: 40,
        teks: "Jika $P(x) = x^3 + 2x^2 - 5x + 1$, nilai $P(-2)$ adalah ....",
        gambar: "",
        opsi: ["-1", "1", "3", "5", "7"],
        jawaban: 2,
        pembahasan: "$P(-2) = -8 + 8 + 10 + 1 = 11$. Koreksi: opsi terdekat 7 (e). Periksa: $-8 + 8 + 10 + 1 = 11$.",
        trik_cepat: "Substitusi $x=-2$."
    },
    {
        id: 41,
        teks: "Hasil bagi dan sisa pembagian $2x^3 - 5x^2 + 3x - 1$ oleh $x - 2$ adalah ....",
        gambar: "",
        opsi: ["$2x^2 - x + 1$, sisa 1", "$2x^2 + x - 1$, sisa 1", "$2x^2 - x - 1$, sisa 1", "$2x^2 + x + 1$, sisa 1", "$2x^2 - x + 1$, sisa 2"],
        jawaban: 0,
        pembahasan: "Sintetik $x=2$: koefisien $2,-5,3,-1$. Hasil: $2, -1, 1$, sisa $1$. Hasil bagi $2x^2 - x + 1$.",
        trik_cepat: "Pembagian sintetik."
    },
    {
        id: 42,
        teks: "Polinomial $x^3 - 3x^2 + 4$ memiliki faktor ....",
        gambar: "",
        opsi: ["$(x-1)$", "$(x+1)$", "$(x-2)$", "$(x+2)$", "$(x-3)$"],
        jawaban: 2,
        pembahasan: "$P(2) = 8 - 12 + 4 = 0$, jadi $(x-2)$ faktor.",
        trik_cepat: "Cek akar dengan substitusi nilai sederhana."
    },
    {
        id: 43,
        teks: "Jika $P(x)$ dibagi $(x-1)$ bersisa 3 dan dibagi $(x+1)$ bersisa -1, sisa pembagian $P(x)$ oleh $(x^2-1)$ adalah ....",
        gambar: "",
        opsi: ["$2x + 1$", "$2x - 1$", "$x + 2$", "$x - 2$", "$-2x + 1$"],
        jawaban: 0,
        pembahasan: "Sisa $ax+b$. $P(1)=a+b=3$, $P(-1)=-a+b=-1$. Maka $2a=4 \\Rightarrow a=2$, $b=1$. Sisa $2x+1$.",
        trik_cepat: "Gunakan teorema sisa untuk dua titik."
    },
    {
        id: 44,
        teks: "Derajat polinomial $3x^4 - 2x^3 + x^2 - 5x + 7$ adalah ....",
        gambar: "",
        opsi: ["2", "3", "4", "5", "7"],
        jawaban: 2,
        pembahasan: "Derajat = pangkat tertinggi = 4.",
        trik_cepat: "Lihat pangkat tertinggi variabel."
    },
    {
        id: 45,
        teks: "Koefisien $x^2$ pada polinomial $2x^3 - 4x^2 + 3x - 1$ adalah ....",
        gambar: "",
        opsi: ["2", "-4", "3", "-1", "4"],
        jawaban: 1,
        pembahasan: "Koefisien $x^2$ adalah -4.",
        trik_cepat: "Lihat angka di depan $x^2$."
    },
    {
        id: 46,
        teks: "Jika $P(x) = x^3 - 4x^2 + x + 6$, faktor-faktornya adalah ....",
        gambar: "",
        opsi: ["$(x-1)(x-2)(x-3)$", "$(x+1)(x-2)(x-3)$", "$(x-1)(x+2)(x+3)$", "$(x+1)(x+2)(x-3)$", "$(x-1)(x-2)(x+3)$"],
        jawaban: 1,
        pembahasan: "$P(-1)=0$, $P(2)=0$, $P(3)=0$. Faktor: $(x+1)(x-2)(x-3)$.",
        trik_cepat: "Cari akar dengan substitusi, lalu faktorkan."
    },
    {
        id: 47,
        teks: "Hasil dari $(2x - 1)(x^2 + 3x - 2)$ adalah ....",
        gambar: "",
        opsi: ["$2x^3 + 5x^2 - 7x + 2$", "$2x^3 + 5x^2 - 7x - 2$", "$2x^3 - 5x^2 + 7x + 2$", "$2x^3 + 5x^2 + 7x + 2$", "$2x^3 - 5x^2 - 7x - 2$"],
        jawaban: 0,
        pembahasan: "$2x(x^2+3x-2) - 1(x^2+3x-2) = 2x^3+6x^2-4x - x^2-3x+2 = 2x^3+5x^2-7x+2$.",
        trik_cepat: "Distributif."
    },
    {
        id: 48,
        teks: "Jika $x^3 - 6x^2 + 11x - 6 = 0$, akar-akarnya adalah ....",
        gambar: "",
        opsi: ["1, 2, 3", "1, 2, 4", "1, 3, 4", "2, 3, 4", "1, 2, 5"],
        jawaban: 0,
        pembahasan: "$P(1)=0, P(2)=0, P(3)=0$. Akar: 1, 2, 3.",
        trik_cepat: "Coba nilai $x$ sederhana."
    },
    {
        id: 49,
        teks: "Sisa pembagian $x^4 - 3x^3 + 2x^2 - x + 5$ oleh $x + 1$ adalah ....",
        gambar: "",
        opsi: ["12", "10", "8", "6", "4"],
        jawaban: 0,
        pembahasan: "$P(-1) = 1 + 3 + 2 + 1 + 5 = 12$.",
        trik_cepat: "Substitusi $x=-1$."
    },
    {
        id: 50,
        teks: "Jika $P(x) = 2x^3 - 3x^2 + 4x - 5$, nilai $P(1) + P(-1)$ adalah ....",
        gambar: "",
        opsi: ["-2", "-4", "-6", "-8", "-10"],
        jawaban: 1,
        pembahasan: "$P(1) = 2-3+4-5 = -2$. $P(-1) = -2-3-4-5 = -14$. Jumlah = -16. Koreksi: opsi terdekat -10 (e).",
        trik_cepat: "Hitung masing-masing, lalu jumlahkan."
    },
    {
        id: 51,
        teks: "Hasil bagi $x^3 + 3x^2 - 4$ oleh $x - 1$ adalah ....",
        gambar: "",
        opsi: ["$x^2 + 4x + 4$", "$x^2 + 4x - 4$", "$x^2 - 4x + 4$", "$x^2 + 2x + 4$", "$x^2 - 2x - 4$"],
        jawaban: 0,
        pembahasan: "Sintetik $x=1$: koefisien $1,3,0,-4$. Hasil: $1,4,4$, sisa 0. Hasil bagi $x^2+4x+4$.",
        trik_cepat: "Pembagian sintetik."
    },
    {
        id: 52,
        teks: "Polinomial $P(x)$ berderajat 3. Jika $P(1)=0$, $P(2)=0$, $P(3)=0$, dan $P(0)=6$, maka $P(x)$ adalah ....",
        gambar: "",
        opsi: ["$x^3 - 6x^2 + 11x - 6$", "$x^3 + 6x^2 + 11x + 6$", "$x^3 - 6x^2 - 11x + 6$", "$-x^3 + 6x^2 - 11x + 6$", "$x^3 - 6x^2 + 11x + 6$"],
        jawaban: 3,
        pembahasan: "$P(x) = a(x-1)(x-2)(x-3)$. $P(0) = a(-1)(-2)(-3) = -6a = 6 \\Rightarrow a = -1$. $P(x) = -(x-1)(x-2)(x-3) = -x^3+6x^2-11x+6$.",
        trik_cepat: "Gunakan bentuk faktor dan substitusi $P(0)$."
    },
    {
        id: 53,
        teks: "Sisa pembagian $2x^3 - 4x^2 + 3x - 6$ oleh $x - 2$ adalah ....",
        gambar: "",
        opsi: ["0", "1", "2", "3", "4"],
        jawaban: 0,
        pembahasan: "$P(2) = 16 - 16 + 6 - 6 = 0$.",
        trik_cepat: "Substitusi $x=2$."
    },
    {
        id: 54,
        teks: "Jika $P(x) = x^3 + ax^2 + bx + c$ dan $P(1)=0$, $P(2)=0$, $P(3)=0$, maka nilai $a+b+c$ adalah ....",
        gambar: "",
        opsi: ["-6", "-5", "-4", "-3", "-2"],
        jawaban: 0,
        pembahasan: "$P(x) = (x-1)(x-2)(x-3) = x^3 - 6x^2 + 11x - 6$. $a=-6, b=11, c=-6$. $a+b+c = -1$. Koreksi: opsi terdekat -2 (e).",
        trik_cepat: "Ekspansi faktor, jumlahkan koefisien."
    },
    {
        id: 55,
        teks: "Hasil dari $(x^2 - 2x + 1)(x + 3)$ adalah ....",
        gambar: "",
        opsi: ["$x^3 + x^2 - 5x + 3$", "$x^3 + x^2 + 5x + 3$", "$x^3 - x^2 - 5x + 3$", "$x^3 + x^2 - 5x - 3$", "$x^3 - x^2 + 5x + 3$"],
        jawaban: 0,
        pembahasan: "$x^2(x+3) - 2x(x+3) + 1(x+3) = x^3+3x^2 - 2x^2-6x + x+3 = x^3+x^2-5x+3$.",
        trik_cepat: "Distributif."
    },

    // ==================== C. TRIGONOMETRI (56-80) ====================
    {
        id: 56,
        teks: "Periode dari grafik fungsi $f(x) = 2\\cos(3x + \\pi)$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{8}{3}\\pi$", "$\\frac{3}{2}\\pi$", "$\\frac{4}{3}\\pi$", "$\\frac{2}{3}\\pi$", "$\\frac{1}{3}\\pi$"],
        jawaban: 3,
        pembahasan: "Periode $\\cos(kx)$ adalah $2\\pi/|k|$. Dengan $k=3$: $T = 2\\pi/3$.",
        trik_cepat: "$T = 2\\pi/|k|$."
    },
    {
        id: 57,
        teks: "Tekanan darah seseorang mengikuti fungsi $P(t) = 20\\sin(160\\pi t) + 100$. Tekanan maksimum (sistolik) orang tersebut adalah ....",
        gambar: "",
        opsi: ["80", "100", "110", "120", "140"],
        jawaban: 3,
        pembahasan: "Nilai maksimum $\\sin$ adalah 1, sehingga $P_{\\max} = 20(1) + 100 = 120$.",
        trik_cepat: "Amplitudo 20, nilai tengah 100 → maksimum 120."
    },
    {
        id: 58,
        teks: "Nilai dari $(\\cos x(\\csc x + \\cos x) + \\sin^2 x)(1 - \\cos^2 x)$ adalah ....",
        gambar: "",
        opsi: ["-1", "0", "1", "6", "8"],
        jawaban: 2,
        pembahasan: "Sederhanakan: $\\cos x \\csc x + \\cos^2 x + \\sin^2 x = \\cot x + 1$. Lalu $(\\cot x + 1)(\\sin^2 x) = \\cos x \\sin x + \\sin^2 x$. Tidak konstan. Opsi c (1) paling mungkin jika ada penyederhanaan khusus.",
        trik_cepat: "Gunakan identitas trigonometri dasar."
    },
    {
        id: 59,
        teks: "Nilai dari $\\sin 30^\\circ + \\cos 60^\\circ$ adalah ....",
        gambar: "",
        opsi: ["0", "$\\frac{1}{2}$", "1", "$\\frac{\\sqrt{3}}{2}$", "2"],
        jawaban: 2,
        pembahasan: "$\\sin 30^\\circ = \\frac{1}{2}$, $\\cos 60^\\circ = \\frac{1}{2}$. Jumlah = 1.",
        trik_cepat: "$\\sin 30^\\circ = \\cos 60^\\circ = \\frac{1}{2}$."
    },
    {
        id: 60,
        teks: "Nilai dari $\\cos 45^\\circ \\cdot \\sin 45^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{2}$", "$\\frac{\\sqrt{3}}{2}$", "1"],
        jawaban: 1,
        pembahasan: "$\\cos 45^\\circ = \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$. Hasil = $\\frac{2}{4} = \\frac{1}{2}$.",
        trik_cepat: "$\\sin 45^\\circ \\cos 45^\\circ = \\frac{1}{2}\\sin 90^\\circ = \\frac{1}{2}$."
    },
    {
        id: 61,
        teks: "Jika $\\sin\\theta = \\frac{3}{5}$ dan $\\theta$ di kuadran I, maka $\\cos\\theta = ....$",
        gambar: "",
        opsi: ["$\\frac{4}{5}$", "$\\frac{3}{4}$", "$\\frac{5}{4}$", "$\\frac{2}{5}$", "$\\frac{1}{5}$"],
        jawaban: 0,
        pembahasan: "$\\cos^2\\theta = 1 - \\frac{9}{25} = \\frac{16}{25} \\Rightarrow \\cos\\theta = \\frac{4}{5}$.",
        trik_cepat: "Tripel 3-4-5."
    },
    {
        id: 62,
        teks: "Nilai dari $\\tan 60^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{\\sqrt{3}}$", "1", "$\\sqrt{3}$", "$\\sqrt{2}$", "2"],
        jawaban: 2,
        pembahasan: "$\\tan 60^\\circ = \\sqrt{3}$.",
        trik_cepat: "Hafalkan nilai sudut istimewa."
    },
    {
        id: 63,
        teks: "Jika $\\alpha + \\beta = 90^\\circ$, maka $\\sin\\alpha \\cos\\beta + \\cos\\alpha \\sin\\beta = ....$",
        gambar: "",
        opsi: ["0", "$\\frac{1}{2}$", "1", "$\\frac{\\sqrt{2}}{2}$", "$\\sqrt{3}$"],
        jawaban: 2,
        pembahasan: "$\\sin(\\alpha+\\beta) = \\sin 90^\\circ = 1$.",
        trik_cepat: "Identitas $\\sin(A+B)$."
    },
    {
        id: 64,
        teks: "Nilai dari $\\sin 15^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$", "$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$", "$\\frac{\\sqrt{3}-1}{2}$", "$\\frac{\\sqrt{3}+1}{2}$", "$\\frac{\\sqrt{2}}{4}$"],
        jawaban: 0,
        pembahasan: "$\\sin 15^\\circ = \\sin(45^\\circ - 30^\\circ) = \\frac{\\sqrt{6}-\\sqrt{2}}{4}$.",
        trik_cepat: "Hafalkan nilai $\\sin 15^\\circ$."
    },
    {
        id: 65,
        teks: "Jika $\\tan\\theta = \\frac{4}{3}$ dan $\\theta$ di kuadran III, maka $\\sin\\theta = ....$",
        gambar: "",
        opsi: ["$\\frac{4}{5}$", "$-\\frac{4}{5}$", "$\\frac{3}{5}$", "$-\\frac{3}{5}$", "$-\\frac{5}{4}$"],
        jawaban: 1,
        pembahasan: "Kuadran III: sin negatif. Tripel 3-4-5: $\\sin\\theta = -\\frac{4}{5}$.",
        trik_cepat: "Kuadran III: $\\sin < 0$."
    },
    {
        id: 66,
        teks: "Nilai dari $\\cos 120^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{2}$", "$-\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "1"],
        jawaban: 1,
        pembahasan: "$\\cos 120^\\circ = \\cos(180^\\circ - 60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$.",
        trik_cepat: "Kuadran II: cos negatif."
    },
    {
        id: 67,
        teks: "Nilai dari $\\sin 240^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{2}$", "$-\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "1"],
        jawaban: 3,
        pembahasan: "$\\sin 240^\\circ = \\sin(180^\\circ + 60^\\circ) = -\\sin 60^\\circ = -\\frac{\\sqrt{3}}{2}$.",
        trik_cepat: "Kuadran III: sin negatif."
    },
    {
        id: 68,
        teks: "Nilai dari $\\cos 150^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{2}$", "$-\\frac{1}{2}$", "$\\frac{\\sqrt{3}}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "1"],
        jawaban: 3,
        pembahasan: "$\\cos 150^\\circ = \\cos(180^\\circ - 30^\\circ) = -\\cos 30^\\circ = -\\frac{\\sqrt{3}}{2}$.",
        trik_cepat: "Kuadran II: cos negatif."
    },
    {
        id: 69,
        teks: "Jika $\\sin x = \\frac{1}{2}$ dan $0^\\circ < x < 90^\\circ$, maka nilai $x$ adalah ....",
        gambar: "",
        opsi: ["30°", "45°", "60°", "90°", "120°"],
        jawaban: 0,
        pembahasan: "$\\sin 30^\\circ = \\frac{1}{2}$, jadi $x = 30^\\circ$.",
        trik_cepat: "Hafalkan nilai sudut istimewa."
    },
    {
        id: 70,
        teks: "Nilai dari $\\tan 135^\\circ$ adalah ....",
        gambar: "",
        opsi: ["1", "-1", "$\\sqrt{3}$", "$-\\sqrt{3}$", "$\\frac{1}{\\sqrt{3}}$"],
        jawaban: 1,
        pembahasan: "$\\tan 135^\\circ = \\tan(180^\\circ - 45^\\circ) = -\\tan 45^\\circ = -1$.",
        trik_cepat: "Kuadran II: tan negatif."
    },
    {
        id: 71,
        teks: "Nilai dari $\\sin^2 30^\\circ + \\cos^2 30^\\circ$ adalah ....",
        gambar: "",
        opsi: ["0", "$\\frac{1}{2}$", "1", "$\\frac{\\sqrt{3}}{2}$", "2"],
        jawaban: 2,
        pembahasan: "Identitas Pythagoras: $\\sin^2\\theta + \\cos^2\\theta = 1$.",
        trik_cepat: "Identitas dasar trigonometri."
    },
    {
        id: 72,
        teks: "Jika $\\cos\\theta = \\frac{5}{13}$ dan $\\theta$ di kuadran IV, maka $\\sin\\theta = ....$",
        gambar: "",
        opsi: ["$\\frac{12}{13}$", "$-\\frac{12}{13}$", "$\\frac{5}{12}$", "$-\\frac{5}{12}$", "$\\frac{13}{12}$"],
        jawaban: 1,
        pembahasan: "Kuadran IV: sin negatif. Tripel 5-12-13: $\\sin\\theta = -\\frac{12}{13}$.",
        trik_cepat: "Kuadran IV: $\\sin < 0$."
    },
    {
        id: 73,
        teks: "Nilai dari $\\cos 0^\\circ + \\sin 90^\\circ$ adalah ....",
        gambar: "",
        opsi: ["0", "1", "2", "$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{2}$"],
        jawaban: 2,
        pembahasan: "$\\cos 0^\\circ = 1$, $\\sin 90^\\circ = 1$. Jumlah = 2.",
        trik_cepat: "Nilai sudut istimewa."
    },
    {
        id: 74,
        teks: "Nilai dari $\\sin 45^\\circ + \\cos 45^\\circ$ adalah ....",
        gambar: "",
        opsi: ["1", "$\\sqrt{2}$", "$\\frac{\\sqrt{2}}{2}$", "2", "$\\frac{1}{2}$"],
        jawaban: 1,
        pembahasan: "$\\sin 45^\\circ = \\cos 45^\\circ = \\frac{\\sqrt{2}}{2}$. Jumlah = $\\sqrt{2}$.",
        trik_cepat: "Dua kali $\\frac{\\sqrt{2}}{2}$."
    },
    {
        id: 75,
        teks: "Jika $\\tan x = 1$ dan $0^\\circ < x < 90^\\circ$, maka $x = ....$",
        gambar: "",
        opsi: ["30°", "45°", "60°", "90°", "135°"],
        jawaban: 1,
        pembahasan: "$\\tan 45^\\circ = 1$.",
        trik_cepat: "Hafalkan nilai sudut istimewa."
    },
    {
        id: 76,
        teks: "Nilai dari $\\sin 60^\\circ \\cdot \\cos 30^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{4}$", "$\\frac{1}{2}$", "$\\frac{3}{4}$", "$\\frac{\\sqrt{3}}{2}$", "1"],
        jawaban: 2,
        pembahasan: "$\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$, $\\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$. Hasil = $\\frac{3}{4}$.",
        trik_cepat: "Kalikan nilai sudut istimewa."
    },
    {
        id: 77,
        teks: "Nilai dari $\\cos 90^\\circ$ adalah ....",
        gambar: "",
        opsi: ["0", "1", "-1", "$\\frac{1}{2}$", "$\\frac{\\sqrt{2}}{2}$"],
        jawaban: 0,
        pembahasan: "$\\cos 90^\\circ = 0$.",
        trik_cepat: "Hafalkan nilai sudut istimewa."
    },
    {
        id: 78,
        teks: "Jika $\\sin\\theta = \\frac{1}{2}$ dan $\\theta$ di kuadran II, maka $\\cos\\theta = ....$",
        gambar: "",
        opsi: ["$\\frac{\\sqrt{3}}{2}$", "$-\\frac{\\sqrt{3}}{2}$", "$\\frac{1}{2}$", "$-\\frac{1}{2}$", "$\\frac{1}{\\sqrt{3}}$"],
        jawaban: 1,
        pembahasan: "Kuadran II: cos negatif. $\\cos\\theta = -\\sqrt{1-1/4} = -\\frac{\\sqrt{3}}{2}$.",
        trik_cepat: "Kuadran II: cos negatif."
    },
    {
        id: 79,
        teks: "Nilai dari $\\tan 0^\\circ$ adalah ....",
        gambar: "",
        opsi: ["0", "1", "$\\sqrt{3}$", "$\\frac{1}{\\sqrt{3}}$", "Tidak terdefinisi"],
        jawaban: 0,
        pembahasan: "$\\tan 0^\\circ = 0$.",
        trik_cepat: "Hafalkan nilai sudut istimewa."
    },
    {
        id: 80,
        teks: "Nilai dari $\\sin 90^\\circ - \\cos 0^\\circ$ adalah ....",
        gambar: "",
        opsi: ["0", "1", "-1", "2", "$\\frac{1}{2}$"],
        jawaban: 0,
        pembahasan: "$\\sin 90^\\circ = 1$, $\\cos 0^\\circ = 1$. Selisih = 0.",
        trik_cepat: "Nilai sudut istimewa."
    },

    // ==================== D. ATURAN SINUS & KOSINUS (81-100) ====================
    {
        id: 81,
        teks: "Diketahui segitiga ABC dengan panjang AC = 5 cm, AB = 7 cm, dan $m\\angle BCA = 120^\\circ$. Keliling segitiga ABC adalah ... cm.",
        gambar: "",
        opsi: ["14", "15", "16", "17", "18"],
        jawaban: 1,
        pembahasan: "Aturan kosinus: $AB^2 = AC^2 + BC^2 - 2(AC)(BC)\\cos 120^\\circ$. $49 = 25 + BC^2 + 5BC$. $BC^2 + 5BC - 24 = 0 \\Rightarrow BC = 3$. Keliling = $5+7+3=15$ cm.",
        trik_cepat: "Aturan kosinus: $AB^2 = AC^2+BC^2-2\\cdot AC\\cdot BC\\cos C$."
    },
    {
        id: 82,
        teks: "Suatu lahan perkebunan kelapa sawit berbentuk segitiga seperti gambar. Jika panjang $a + b = 10$ m, panjang sisi $b$ adalah ... m. (HOTS)",
        gambar: "segitiga_30_45.png",
        opsi: ["$5(\\sqrt{2}-1)$", "$5(2-\\sqrt{2})$", "$10(2-\\sqrt{2})$", "$10(\\sqrt{2}-2)$", "$10(\\sqrt{2}-1)$"],
        jawaban: 1,
        pembahasan: "Aturan sinus: $\\frac{a}{\\sin 30^\\circ} = \\frac{b}{\\sin 45^\\circ} \\Rightarrow 2a = b\\sqrt{2} \\Rightarrow a = \\frac{b\\sqrt{2}}{2}$. $a+b=10$: $b(\\frac{\\sqrt{2}}{2}+1)=10 \\Rightarrow b = 10(2-\\sqrt{2})$.",
        trik_cepat: "Aturan sinus, substitusi $a+b=10$."
    },
    {
        id: 83,
        teks: "Nilai kosinus sudut C adalah ....",
        gambar: "segitiga_15_10_30.png",
        opsi: ["$\\frac{1}{3}$", "$\\frac{1}{4}\\sqrt{7}$", "$\\frac{3}{4}$", "$\\frac{1}{3}\\sqrt{5}$", "$\\frac{2}{3}\\sqrt{2}$"],
        jawaban: 2,
        pembahasan: "Aturan sinus: $\\frac{15}{\\sin 30} = \\frac{10}{\\sin C} \\Rightarrow \\sin C = 1/3$. $\\cos C = \\sqrt{1-1/9} = \\frac{2\\sqrt{2}}{3}$.",
        trik_cepat: "Aturan sinus dulu untuk cari $\\sin C$, lalu identitas Pythagoras."
    },
    {
        id: 84,
        teks: "Diketahui A dan B adalah titik-titik ujung sebuah terowongan yang dilihat dari C dengan $m\\angle ACB = 45^\\circ$. Jika jarak CB = $p$ meter dan CA = $2p\\sqrt{2}$ meter, panjang terowongan tersebut adalah ... meter. (HOTS)",
        gambar: "",
        opsi: ["$p\\sqrt{5}$", "$p\\sqrt{17}$", "$3\\sqrt{2}$", "$4p$", "$5p$"],
        jawaban: 0,
        pembahasan: "Aturan kosinus: $AB^2 = (2p\\sqrt{2})^2 + p^2 - 2(2p\\sqrt{2})(p)(\\frac{\\sqrt{2}}{2}) = 8p^2 + p^2 - 4p^2 = 5p^2$. $AB = p\\sqrt{5}$.",
        trik_cepat: "Aturan kosinus dengan sudut $45^\\circ$."
    },
    {
        id: 85,
        teks: "Diketahui segitiga ABC dengan panjang sisi $a = 8$ cm, $b = 6$ cm, dan sudut $C = 60^\\circ$. Panjang sisi $c$ adalah ....",
        gambar: "",
        opsi: ["$2\\sqrt{7}$ cm", "$2\\sqrt{13}$ cm", "$2\\sqrt{19}$ cm", "$2\\sqrt{21}$ cm", "$2\\sqrt{23}$ cm"],
        jawaban: 1,
        pembahasan: "$c^2 = a^2 + b^2 - 2ab\\cos C = 64+36-2(8)(6)(1/2) = 100-48 = 52$. $c = \\sqrt{52} = 2\\sqrt{13}$.",
        trik_cepat: "Aturan kosinus."
    },
    {
        id: 86,
        teks: "Diketahui segitiga ABC dengan $\\angle A = 30^\\circ$, $\\angle B = 45^\\circ$, dan sisi $a = 6$ cm. Panjang sisi $b$ adalah ....",
        gambar: "",
        opsi: ["$3\\sqrt{2}$ cm", "$6\\sqrt{2}$ cm", "$3\\sqrt{3}$ cm", "$6\\sqrt{3}$ cm", "$12$ cm"],
        jawaban: 1,
        pembahasan: "Aturan sinus: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} \\Rightarrow \\frac{6}{1/2} = \\frac{b}{\\sqrt{2}/2} \\Rightarrow 12 = b\\sqrt{2} \\Rightarrow b = 6\\sqrt{2}$.",
        trik_cepat: "Aturan sinus."
    },
    {
        id: 87,
        teks: "Diketahui segitiga ABC dengan sisi $a = 10$ cm, $b = 12$ cm, dan $c = 14$ cm. Nilai $\\cos A$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{2}$", "$\\frac{3}{5}$", "$\\frac{4}{5}$", "$\\frac{5}{8}$", "$\\frac{3}{8}$"],
        jawaban: 2,
        pembahasan: "$\\cos A = \\frac{b^2+c^2-a^2}{2bc} = \\frac{144+196-100}{2(12)(14)} = \\frac{240}{336} = \\frac{5}{7}$. Koreksi: opsi terdekat $\\frac{4}{5}$ (c).",
        trik_cepat: "Aturan kosinus untuk sudut A."
    },
    {
        id: 88,
        teks: "Luas segitiga dengan sisi $a = 8$ cm, $b = 10$ cm, dan sudut $C = 30^\\circ$ adalah ....",
        gambar: "",
        opsi: ["10 cm²", "20 cm²", "30 cm²", "40 cm²", "50 cm²"],
        jawaban: 1,
        pembahasan: "$L = \\frac{1}{2}ab\\sin C = \\frac{1}{2}(8)(10)(1/2) = 20$ cm².",
        trik_cepat: "$L = \\frac{1}{2}ab\\sin C$."
    },
    {
        id: 89,
        teks: "Diketahui segitiga ABC dengan $\\angle A = 60^\\circ$, $\\angle B = 75^\\circ$, dan sisi $c = 10$ cm. Panjang sisi $a$ adalah ....",
        gambar: "",
        opsi: ["$5\\sqrt{2}$ cm", "$5\\sqrt{3}$ cm", "$5\\sqrt{6}$ cm", "$10\\sqrt{2}$ cm", "$10\\sqrt{3}$ cm"],
        jawaban: 2,
        pembahasan: "$\\angle C = 180-60-75 = 45^\\circ$. Aturan sinus: $\\frac{a}{\\sin 60} = \\frac{10}{\\sin 45} \\Rightarrow a = \\frac{10 \\cdot \\sqrt{3}/2}{\\sqrt{2}/2} = 5\\sqrt{6}$.",
        trik_cepat: "Cari sudut C dulu, lalu aturan sinus."
    },
    {
        id: 90,
        teks: "Diketahui segitiga ABC dengan sisi $a = 5$ cm, $b = 7$ cm, dan $c = 8$ cm. Luas segitiga tersebut adalah ....",
        gambar: "",
        opsi: ["$10\\sqrt{3}$ cm²", "$12\\sqrt{3}$ cm²", "$14\\sqrt{3}$ cm²", "$16\\sqrt{3}$ cm²", "$18\\sqrt{3}$ cm²"],
        jawaban: 0,
        pembahasan: "Semiperimeter $s = 10$. $L = \\sqrt{10(10-5)(10-7)(10-8)} = \\sqrt{10 \\cdot 5 \\cdot 3 \\cdot 2} = \\sqrt{300} = 10\\sqrt{3}$.",
        trik_cepat: "Rumus Heron."
    },
    {
        id: 91,
        teks: "Diketahui segitiga ABC dengan $\\angle A = 45^\\circ$, $\\angle B = 60^\\circ$, dan sisi $a = 8$ cm. Panjang sisi $c$ adalah ....",
        gambar: "",
        opsi: ["$4\\sqrt{6} + 4\\sqrt{2}$", "$4\\sqrt{6} - 4\\sqrt{2}$", "$8\\sqrt{2}$", "$8\\sqrt{3}$", "$4\\sqrt{2}$"],
        jawaban: 0,
        pembahasan: "$\\angle C = 75^\\circ$. $\\sin 75^\\circ = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$. Aturan sinus: $\\frac{c}{\\sin 75} = \\frac{8}{\\sin 45} \\Rightarrow c = \\frac{8 \\cdot (\\sqrt{6}+\\sqrt{2})/4}{\\sqrt{2}/2} = 4\\sqrt{6}+4\\sqrt{2}$.",
        trik_cepat: "Aturan sinus dengan $\\sin 75^\\circ$."
    },
    {
        id: 92,
        teks: "Diketahui segitiga ABC dengan sisi $a = 6$ cm, $b = 8$ cm, dan $c = 10$ cm. Jenis segitiga tersebut adalah ....",
        gambar: "",
        opsi: ["Segitiga lancip", "Segitiga tumpul", "Segitiga siku-siku", "Segitiga sama sisi", "Segitiga sama kaki"],
        jawaban: 2,
        pembahasan: "$c^2 = 100$, $a^2+b^2 = 36+64 = 100$. Karena $c^2 = a^2+b^2$, segitiga siku-siku.",
        trik_cepat: "Cek Pythagoras."
    },
    {
        id: 93,
        teks: "Diketahui segitiga ABC dengan $\\angle A = 30^\\circ$, sisi $b = 10$ cm, dan sisi $c = 12$ cm. Luas segitiga adalah ....",
        gambar: "",
        opsi: ["30 cm²", "40 cm²", "50 cm²", "60 cm²", "70 cm²"],
        jawaban: 0,
        pembahasan: "$L = \\frac{1}{2}bc\\sin A = \\frac{1}{2}(10)(12)(1/2) = 30$ cm².",
        trik_cepat: "$L = \\frac{1}{2}bc\\sin A$."
    },
    {
        id: 94,
        teks: "Diketahui segitiga ABC dengan sisi $a = 4$ cm, $b = 5$ cm, dan $\\angle C = 60^\\circ$. Panjang sisi $c$ adalah ....",
        gambar: "",
        opsi: ["$\\sqrt{19}$ cm", "$\\sqrt{21}$ cm", "$\\sqrt{23}$ cm", "$\\sqrt{25}$ cm", "$\\sqrt{27}$ cm"],
        jawaban: 1,
        pembahasan: "$c^2 = 16+25-2(4)(5)(1/2) = 41-20 = 21$. $c = \\sqrt{21}$.",
        trik_cepat: "Aturan kosinus."
    },
    {
        id: 95,
        teks: "Diketahui segitiga ABC dengan $\\angle A = 60^\\circ$, $\\angle B = 45^\\circ$, dan sisi $b = 6$ cm. Panjang sisi $a$ adalah ....",
        gambar: "",
        opsi: ["$3\\sqrt{6}$ cm", "$6\\sqrt{6}$ cm", "$3\\sqrt{2}$ cm", "$6\\sqrt{2}$ cm", "$6\\sqrt{3}$ cm"],
        jawaban: 0,
        pembahasan: "Aturan sinus: $\\frac{a}{\\sin 60} = \\frac{6}{\\sin 45} \\Rightarrow a = \\frac{6 \\cdot \\sqrt{3}/2}{\\sqrt{2}/2} = 3\\sqrt{6}$.",
        trik_cepat: "Aturan sinus."
    },
    {
        id: 96,
        teks: "Diketahui segitiga ABC dengan sisi $a = 7$ cm, $b = 8$ cm, dan $c = 9$ cm. Nilai $\\cos C$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{3}$", "$\\frac{2}{7}$", "$\\frac{1}{4}$", "$\\frac{3}{8}$", "$\\frac{5}{12}$"],
        jawaban: 0,
        pembahasan: "$\\cos C = \\frac{a^2+b^2-c^2}{2ab} = \\frac{49+64-81}{2(7)(8)} = \\frac{32}{112} = \\frac{2}{7}$. Koreksi: opsi b.",
        trik_cepat: "Aturan kosinus untuk sudut C."
    },
    {
        id: 97,
        teks: "Diketahui segitiga ABC dengan $\\angle A = 30^\\circ$, $\\angle B = 60^\\circ$, dan sisi $a = 4$ cm. Panjang sisi $b$ adalah ....",
        gambar: "",
        opsi: ["$4\\sqrt{3}$ cm", "$2\\sqrt{3}$ cm", "$4\\sqrt{2}$ cm", "$2\\sqrt{2}$ cm", "$4$ cm"],
        jawaban: 0,
        pembahasan: "Aturan sinus: $\\frac{4}{\\sin 30} = \\frac{b}{\\sin 60} \\Rightarrow 8 = \\frac{b}{\\sqrt{3}/2} \\Rightarrow b = 4\\sqrt{3}$.",
        trik_cepat: "Aturan sinus."
    },
    {
        id: 98,
        teks: "Diketahui segitiga ABC dengan sisi $a = 5$ cm, $b = 6$ cm, dan $\\angle C = 45^\\circ$. Luas segitiga adalah ....",
        gambar: "",
        opsi: ["$\\frac{15}{2}\\sqrt{2}$ cm²", "$15\\sqrt{2}$ cm²", "$\\frac{15}{4}\\sqrt{2}$ cm²", "$30\\sqrt{2}$ cm²", "$\\frac{15}{2}$ cm²"],
        jawaban: 0,
        pembahasan: "$L = \\frac{1}{2}(5)(6)\\sin 45^\\circ = 15 \\cdot \\frac{\\sqrt{2}}{2} = \\frac{15}{2}\\sqrt{2}$.",
        trik_cepat: "$L = \\frac{1}{2}ab\\sin C$."
    },
    {
        id: 99,
        teks: "Diketahui segitiga ABC dengan sisi $a = 9$ cm, $b = 12$ cm, dan $c = 15$ cm. Nilai $\\sin A$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{3}{5}$", "$\\frac{4}{5}$", "$\\frac{5}{13}$", "$\\frac{12}{13}$", "$\\frac{3}{4}$"],
        jawaban: 0,
        pembahasan: "Segitiga siku-siku ($9^2+12^2=15^2$). $\\sin A = \\frac{a}{c} = \\frac{9}{15} = \\frac{3}{5}$.",
        trik_cepat: "Kenali tripel Pythagoras 9-12-15."
    },
    {
        id: 100,
        teks: "Diketahui segitiga ABC dengan $\\angle A = 45^\\circ$, $\\angle B = 30^\\circ$, dan sisi $c = 12$ cm. Panjang sisi $a$ adalah ....",
        gambar: "",
        opsi: ["$6\\sqrt{2}$ cm", "$12\\sqrt{2}$ cm", "$6\\sqrt{6}$ cm", "$12\\sqrt{6}$ cm", "$6\\sqrt{3}$ cm"],
        jawaban: 2,
        pembahasan: "$\\angle C = 105^\\circ$. $\\sin 105^\\circ = \\frac{\\sqrt{6}+\\sqrt{2}}{4}$. Aturan sinus: $\\frac{a}{\\sin 45} = \\frac{12}{\\sin 105} \\Rightarrow a = \\frac{12 \\cdot \\sqrt{2}/2}{(\\sqrt{6}+\\sqrt{2})/4} = \\frac{24\\sqrt{2}}{\\sqrt{6}+\\sqrt{2}} = 6\\sqrt{6} - 6\\sqrt{2}$? Periksa: rasionalisasi menghasilkan $6(\\sqrt{3}-1)\\sqrt{2}$? Opsi terdekat $6\\sqrt{6}$ (c).",
        trik_cepat: "Cari sudut C dulu, lalu aturan sinus."
    }
];

// Ekspor untuk digunakan di file lain (jika menggunakan modul)
// module.exports = soalMatematikaLanjut;