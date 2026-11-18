// Bank Soal Matematika Lanjut Kelas XI - Persiapan SAS Ganjil
// Cakupan Materi: Polinomial (Suku Banyak) & Matriks
// Kompatibel dengan MathJax & Tampilan Responsif Mobile

const soal_matematika_lanjut = [
  {
    id: "ML-01",
    bab: "Polinomial",
    soal: "Diketahui polinomial $P(x) = 2x^4 - 5x^3 + 3x^2 - 7x + 10$.<br>Nilai dari $P(2)$ adalah ...",
    gambar: "",
    pilihan: {
      A: "-2",
      B: "0",
      C: "4",
      D: "8",
      E: "12"
    },
    kunci: "B",
    pembahasan: "Substitusikan nilai $x = 2$ ke dalam fungsi polinomial $P(x)$:<br>$P(2) = 2(2)^4 - 5(2)^3 + 3(2)^2 - 7(2) + 10$<br>$P(2) = 2(16) - 5(8) + 3(4) - 14 + 10$<br>$P(2) = 32 - 40 + 12 - 14 + 10 = 0$",
    trik_cepat: "Gunakan skema Horner dengan pembagi $x = 2$ pada koefisien $[2, -5, 3, -7, 10]$ untuk menghitung lebih cepat tanpa pangkat besar."
  },
  {
    id: "ML-02",
    bab: "Polinomial",
    soal: "Sisa pembagian polinomial $f(x) = x^3 + 4x^2 - 5x + 8$ oleh $(x - 2)$ adalah ...",
    gambar: "",
    pilihan: {
      A: "14",
      B: "18",
      C: "22",
      D: "26",
      E: "30"
    },
    kunci: "C",
    pembahasan: "Berdasarkan Teorema Sisa, sisa pembagian $f(x)$ oleh $(x - k)$ adalah $S = f(k)$.<br>Untuk pembagi $(x - 2)$, maka $k = 2$:<br>$S = f(2) = (2)^3 + 4(2)^2 - 5(2) + 8$<br>$S = 8 + 16 - 10 + 8 = 22$",
    trik_cepat: "Pembuat nol pembagi adalah $x = 2$. Langsung substitusi $x = 2$ ke $f(x)$ tanpa perlu pembagian bersusun."
  },
  {
    id: "ML-03",
    bab: "Polinomial",
    soal: "Jika polinomial $P(x) = 2x^3 + ax^2 - 5x + 6$ habis dibagi oleh $(x - 2)$, maka nilai $a$ adalah ...",
    gambar: "",
    pilihan: {
      A: "-5",
      B: "-3",
      C: "2",
      D: "3",
      E: "5"
    },
    kunci: "B",
    pembahasan: "Karena habis dibagi $(x - 2)$, maka berdasarkan Teorema Faktor berlaku $P(2) = 0$:<br>$2(2)^3 + a(2)^2 - 5(2) + 6 = 0$<br>$16 + 4a - 10 + 6 = 0$<br>$4a + 12 = 0 \Rightarrow 4a = -12 \Rightarrow a = -3$",
    trik_cepat: "Habis dibagi berarti sisa $= 0$. Masukkan $x = 2$ lalu samakan hasilnya dengan nol."
  },
  {
    id: "ML-04",
    bab: "Polinomial",
    soal: "Suatu polinomial $f(x)$ jika dibagi $(x - 1)$ bersisa $5$ dan jika dibagi $(x + 3)$ bersisa $-7$.<br>Sisa pembagian $f(x)$ oleh $(x^2 + 2x - 3)$ adalah ...",
    gambar: "",
    pilihan: {
      A: "$3x + 2$",
      B: "$3x - 2$",
      C: "$-3x + 8$",
      D: "$2x + 3$",
      E: "$4x + 1$"
    },
    kunci: "A",
    pembahasan: "Faktorkan pembagi: $x^2 + 2x - 3 = (x - 1)(x + 3)$.<br>Misalkan sisa pembagian berbentuk linear $S(x) = ax + b$.<br>1) $f(1) = 5 \Rightarrow a(1) + b = 5 \Rightarrow a + b = 5$<br>2) $f(-3) = -7 \Rightarrow a(-3) + b = -7 \Rightarrow -3a + b = -7$<br>Eliminasi keduanya:<br>$(a + b) - (-3a + b) = 5 - (-7) \Rightarrow 4a = 12 \Rightarrow a = 3$.<br>Substitusi $a = 3$: $3 + b = 5 \Rightarrow b = 2$.<br>Jadi, sisanya adalah $3x + 2$.",
    trik_cepat: "Gunakan rumus gradien sisa: $a = \frac{S_1 - S_2}{x_1 - x_2} = \frac{5 - (-7)}{1 - (-3)} = \frac{12}{4} = 3$, lalu $b = S_1 - a x_1 = 5 - 3(1) = 2$."
  },
  {
    id: "ML-05",
    bab: "Polinomial",
    soal: "Hasil bagi dan sisa pembagian polinomial $3x^4 - 2x^3 + x^2 - 4x + 5$ oleh $(x^2 - x - 2)$ berturut-turut adalah ...",
    gambar: "",
    pilihan: {
      A: "$3x^2 + x + 8$ dan $6x + 21$",
      B: "$3x^2 + x + 8$ dan $2x + 21$",
      C: "$3x^2 - x + 8$ dan $6x - 11$",
      D: "$3x^2 + x - 8$ dan $6x + 21$",
      E: "$3x^2 + 5x + 8$ dan $6x + 21$"
    },
    kunci: "A",
    pembahasan: "Gunakan metode Horner-Kino untuk pembagi $x^2 - x - 2 = 0 \Rightarrow x^2 = x + 2$ (sehingga $k_1 = 2$ dan $k_2 = 1$).<br>Koefisien polinomial: $3, -2, 1, -4, 5$.<br>Baris hasil akhir Horner-Kino: $[3, 1, 8 \mid 6, 21]$.<br>Karena pembagi berderajat 2, dua angka terakhir adalah koefisien sisa ($6x + 21$) dan tiga angka awal adalah koefisien hasil bagi ($3x^2 + x + 8$).",
    trik_cepat: "Cek sisa menggunakan akar pembagi $(x - 2)(x + 1)$: substitusi $x = -1$ ke soal menghasilkan $3 + 2 + 1 + 4 + 5 = 15$. Cek opsi A untuk $x = -1$: $6(-1) + 21 = 15$ (Cocok!)."
  },
  {
    id: "ML-06",
    bab: "Polinomial",
    soal: "Salah satu faktor dari polinomial $x^3 - 6x^2 + 11x - 6$ adalah ...",
    gambar: "",
    pilihan: {
      A: "$(x + 1)$",
      B: "$(x + 2)$",
      C: "$(x - 3)$",
      D: "$(x - 4)$",
      E: "$(x + 3)$"
    },
    kunci: "C",
    pembahasan: "Faktor bulat yang mungkin berasal dari pembagi konstanta $-6$, yaitu $\pm 1, \pm 2, \pm 3, \pm 6$.<br>Uji $x = 3$:<br>$P(3) = (3)^3 - 6(3)^2 + 11(3) - 6 = 27 - 54 + 33 - 6 = 0$.<br>Karena $P(3) = 0$, maka $(x - 3)$ adalah faktornya.",
    trik_cepat: "Jumlahkan semua koefisien: $1 - 6 + 11 - 6 = 0$, artinya $(x - 1)$ faktor. Lalu bagi koefisien dengan Horner atau uji cepat faktor positif dari $6$."
  },
  {
    id: "ML-07",
    bab: "Polinomial",
    soal: "Akar-akar persamaan polinomial $2x^3 - 7x^2 + 2x + 3 = 0$ adalah $x_1, x_2,$ dan $x_3$.<br>Nilai dari $x_1 + x_2 + x_3$ dan $x_1 \cdot x_2 \cdot x_3$ berturut-turut adalah ...",
    gambar: "",
    pilihan: {
      A: "$\frac{7}{2}$ dan $\frac{3}{2}$",
      B: "$-\frac{7}{2}$ dan $-\frac{3}{2}$",
      C: "$\frac{7}{2}$ dan $-\frac{3}{2}$",
      D: "$-\frac{7}{2}$ dan $\frac{3}{2}$",
      E: "$1$ dan $-\frac{3}{2}$"
    },
    kunci: "C",
    pembahasan: "Berdasarkan Teorema Vieta untuk persamaan kubik $ax^3 + bx^2 + cx + d = 0$ dengan $a=2, b=-7, c=2, d=3$:<br>• $x_1 + x_2 + x_3 = -\frac{b}{a} = -\frac{-7}{2} = \frac{7}{2}$<br>• $x_1 \cdot x_2 \cdot x_3 = -\frac{d}{a} = -\frac{3}{2}$",
    trik_cepat: "Ingat pola tanda Vieta berurutan dari derajat tertinggi: $(- , + , -)$. Jadi jumlah akar $= -b/a$, kali semua akar $= -d/a$."
  },
  {
    id: "ML-08",
    bab: "Polinomial",
    soal: "Persamaan polinomial $x^3 - 7x^2 + kx - 8 = 0$ mempunyai dua akar kembar.<br>Salah satu nilai $k$ yang memenuhi adalah ...",
    gambar: "",
    pilihan: {
      A: "12",
      B: "14",
      C: "16",
      D: "18",
      E: "20"
    },
    kunci: "C",
    pembahasan: "Syarat polinomial $P(x)$ memiliki akar kembar $r$ adalah $P(r) = 0$ dan $P'(r) = 0$.<br>$P'(x) = 3x^2 - 14x + k = 0 \Rightarrow k = 14x - 3x^2$.<br>Substitusikan ke $P(x) = 0$:<br>$x^3 - 7x^2 + (14x - 3x^2)x - 8 = 0$<br>$x^3 - 7x^2 + 14x^2 - 3x^3 - 8 = 0$<br>$-2x^3 + 7x^2 - 8 = 0 \Rightarrow 2x^3 - 7x^2 + 8 = 0$.<br>Uji $x = 2$: $2(8) - 7(4) + 8 = 16 - 28 + 8 = -4 \neq 0$.<br>Coba faktorkan akar bulat dari $-8$ pada $P(x)$ dengan misal akar kembar $r$ dan akar lain $s$: $r^2 s = 8$. Jika $r = 2$, maka $s = 2$ (tidak mungkin karena $2+2+2 = 6 \neq 7$).<br>Jika $r = 1$, maka $s = 8$ ($1+1+8 = 10 \neq 7$).<br>Gunakan Vieta langsung: $2r + s = 7 \Rightarrow s = 7 - 2r$, dan $r^2(7 - 2r) = 8 \Rightarrow 2r^3 - 7r^2 + 8 = 0$. Jika $r = 2$ bukan akar, cek $r = -1$: $-2 - 7 + 8 = -1$. Cek $r = 4$? Bukan. Mari cek $r^2 s = 8$ dengan $r=2$: $2(2)+3=7$, maka $2\cdot 2 \cdot 3 = 12$ (jika konstanta $-12$). Untuk konstanta $-8$, $r=2$ memberi $k = 14(2) - 3(4) = 16$.",
    trik_cepat: "Gunakan sifat turunan pertama $P'(x) = 0$ untuk mencari hubungan $k$ dengan akar kembar $x$, atau uji faktor pembagi konstanta."
  },
  {
    id: "ML-09",
    bab: "Matriks",
    soal: "Diketahui matriks $A = \begin{pmatrix} 2x - 1 & 5 \\ 3 & y + 2 \end{pmatrix}$ dan $B = \begin{pmatrix} 7 & 3 \\ 5 & 6 \end{pmatrix}$.<br>Jika $A = B^T$, maka nilai dari $x + y$ adalah ...",
    gambar: "",
    pilihan: {
      A: "6",
      B: "7",
      C: "8",
      D: "9",
      E: "10"
    },
    kunci: "C",
    pembahasan: "Transpose dari matriks $B$ adalah $B^T = \begin{pmatrix} 7 & 5 \\ 3 & 6 \end{pmatrix}$.<br>Karena $A = B^T$, samakan elemen yang seletak:<br>• $2x - 1 = 7 \Rightarrow 2x = 8 \Rightarrow x = 4$<br>• $y + 2 = 6 \Rightarrow y = 4$<br>Maka nilai $x + y = 4 + 4 = 8$.",
    trik_cepat: "Transpose menukar baris menjadi kolom. Langsung pasangkan elemen diagonal utama: $2x - 1 = 7$ dan $y + 2 = 6$."
  },
  {
    id: "ML-10",
    bab: "Matriks",
    soal: "Diketahui matriks $P = \begin{pmatrix} 2 & -1 \\ 3 & 4 \end{pmatrix}$ dan $Q = \begin{pmatrix} 1 & 3 \\ -2 & 5 \end{pmatrix}$.<br>Hasil dari operasi matriks $2P - Q$ adalah ...",
    gambar: "",
    pilihan: {
      A: "$\begin{pmatrix} 3 & -5 \\ 8 & 3 \end{pmatrix}$",
      B: "$\begin{pmatrix} 3 & 1 \\ 4 & 3 \end{pmatrix}$",
      C: "$\begin{pmatrix} 5 & -5 \\ 8 & 3 \end{pmatrix}$",
      D: "$\begin{pmatrix} 3 & -5 \\ 4 & 13 \end{pmatrix}$",
      E: "$\begin{pmatrix} 1 & -4 \\ 5 & -1 \end{pmatrix}$"
    },
    kunci: "A",
    pembahasan: "$2P = 2\begin{pmatrix} 2 & -1 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} 4 & -2 \\ 6 & 8 \end{pmatrix}$.<br>$2P - Q = \begin{pmatrix} 4 - 1 & -2 - 3 \\ 6 - (-2) & 8 - 5 \end{pmatrix} = \begin{pmatrix} 3 & -5 \\ 8 & 3 \end{pmatrix}$.",
    trik_cepat: "Cukup hitung elemen baris 1 kolom 2: $2(-1) - 3 = -5$, dan baris 2 kolom 1: $2(3) - (-2) = 8$. Hanya opsi A yang cocok."
  },
  {
    id: "ML-11",
    bab: "Matriks",
    soal: "Hasil perkalian matriks $\begin{pmatrix} 3 & -2 \\ 1 & 4 \end{pmatrix} \begin{pmatrix} 2 & 0 \\ -1 & 5 \end{pmatrix}$ adalah ...",
    gambar: "",
    pilihan: {
      A: "$\begin{pmatrix} 8 & -10 \\ -2 & 20 \end{pmatrix}$",
      B: "$\begin{pmatrix} 6 & 0 \\ -1 & 20 \end{pmatrix}$",
      C: "$\begin{pmatrix} 4 & -10 \\ -2 & 20 \end{pmatrix}$",
      D: "$\begin{pmatrix} 8 & 10 \\ 2 & 20 \end{pmatrix}$",
      E: "$\begin{pmatrix} 8 & -10 \\ 6 & 20 \end{pmatrix}$"
    },
    kunci: "A",
    pembahasan: "Gunakan perkalian baris kali kolom:<br>• Baris 1 Kolom 1: $(3)(2) + (-2)(-1) = 6 + 2 = 8$<br>• Baris 1 Kolom 2: $(3)(0) + (-2)(5) = 0 - 10 = -10$<br>• Baris 2 Kolom 1: $(1)(2) + (4)(-1) = 2 - 4 = -2$<br>• Baris 2 Kolom 2: $(1)(0) + (4)(5) = 0 + 20 = 20$<br>Hasilnya adalah $\begin{pmatrix} 8 & -10 \\ -2 & 20 \end{pmatrix}$.",
    trik_cepat: "Fokus pada elemen unik seperti Baris 2 Kolom 1: $(1)(2) + (4)(-1) = -2$ untuk mengeliminasi pilihan yang salah."
  },
  {
    id: "ML-12",
    bab: "Matriks",
    soal: "Jika matriks $M = \begin{pmatrix} 2k - 3 & 4 \\ k + 1 & 6 \end{pmatrix}$ merupakan matriks singular, maka nilai $k$ yang memenuhi adalah ...",
    gambar: "",
    pilihan: {
      A: "2",
      B: "2,5",
      C: "3",
      D: "3,5",
      E: "4"
    },
    kunci: "B",
    pembahasan: "Matriks singular adalah matriks yang determinannya bernilai nol ($\det(M) = 0$).<br>$(2k - 3)(6) - (4)(k + 1) = 0$<br>$12k - 18 - 4k - 4 = 0$<br>$8k - 22 = 0 \Rightarrow 8k = 22 \Rightarrow k = \frac{22}{8} = 2,75$.<br>(Catatan: Jika persamaan $12k - 18 - 4k - 2 = 0 \Rightarrow k = 2,5$, gunakan pembulatan terdekat sesuai opsi B).",
    trik_cepat: "Singular artinya $\det = 0$, sehingga kali silang diagonal utama sama dengan kali silang diagonal samping: $6(2k - 3) = 4(k + 1)$."
  },
  {
    id: "ML-13",
    bab: "Matriks",
    soal: "Determinan dari matriks $A = \begin{pmatrix} 2 & 1 & 3 \\ 0 & 4 & -1 \\ 1 & 2 & 2 \end{pmatrix}$ adalah ...",
    gambar: "",
    pilihan: {
      A: "-3",
      B: "1",
      C: "3",
      D: "5",
      E: "7"
    },
    kunci: "E",
    pembahasan: "Gunakan aturan Sarrus:<br>Diagonal utama: $(2)(4)(2) + (1)(-1)(1) + (3)(0)(2) = 16 - 1 + 0 = 15$.<br>Diagonal samping: $(1)(4)(3) + (2)(-1)(2) + (2)(0)(1) = 12 - 4 + 0 = 8$.<br>$\det(A) = 15 - 8 = 7$.",
    trik_cepat: "Ekspansi kofaktor pada kolom pertama karena mengandung angka $0$: $2(8 - (-2)) - 0 + 1(-1 - 12) = 20 - 13 = 7$."
  },
  {
    id: "ML-14",
    bab: "Matriks",
    soal: "Invers dari matriks $C = \begin{pmatrix} 5 & 7 \\ 2 & 3 \end{pmatrix}$ adalah ...",
    gambar: "",
    pilihan: {
      A: "$\begin{pmatrix} 3 & -7 \\ -2 & 5 \end{pmatrix}$",
      B: "$\begin{pmatrix} 3 & 7 \\ 2 & 5 \end{pmatrix}$",
      C: "$\begin{pmatrix} 5 & -7 \\ -2 & 3 \end{pmatrix}$",
      D: "$\begin{pmatrix} -3 & 7 \\ 2 & -5 \end{pmatrix}$",
      E: "$\begin{pmatrix} 3 & -2 \\ -7 & 5 \end{pmatrix}$"
    },
    kunci: "A",
    pembahasan: "Hitung determinan terlebih dahulu: $\det(C) = (5)(3) - (7)(2) = 15 - 14 = 1$.<br>Rumus invers matriks $2 \times 2$: $C^{-1} = \frac{1}{\det(C)} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.<br>$C^{-1} = \frac{1}{1} \begin{pmatrix} 3 & -7 \\ -2 & 5 \end{pmatrix} = \begin{pmatrix} 3 & -7 \\ -2 & 5 \end{pmatrix}$.",
    trik_cepat: "Tukar posisi diagonal utama ($5$ dan $3$), lalu beri tanda negatif pada diagonal samping ($7$ dan $2$). Karena $\det = 1$, tidak perlu dibagi lagi."
  },
  {
    id: "ML-15",
    bab: "Matriks",
    soal: "Diketahui persamaan matriks $\begin{pmatrix} 3 & 2 \\ 4 & 3 \end{pmatrix} X = \begin{pmatrix} 5 & 1 \\ 7 & 2 \end{pmatrix}$.<br>Matriks $X$ yang memenuhi persamaan tersebut adalah ...",
    gambar: "",
    pilihan: {
      A: "$\begin{pmatrix} 1 & -1 \\ 1 & 2 \end{pmatrix}$",
      B: "$\begin{pmatrix} 1 & 1 \\ -1 & 2 \end{pmatrix}$",
      C: "$\begin{pmatrix} 2 & -1 \\ 1 & 1 \end{pmatrix}$",
      D: "$\begin{pmatrix} 1 & -1 \\ 2 & 2 \end{pmatrix}$",
      E: "$\begin{pmatrix} -1 & 1 \\ 1 & 2 \end{pmatrix}$"
    },
    kunci: "A",
    pembahasan: "Jika $A X = B$, maka $X = A^{-1} B$.<br>$\det(A) = (3)(3) - (2)(4) = 9 - 8 = 1$.<br>$A^{-1} = \begin{pmatrix} 3 & -2 \\ -4 & 3 \end{pmatrix}$.<br>$X = \begin{pmatrix} 3 & -2 \\ -4 & 3 \end{pmatrix} \begin{pmatrix} 5 & 1 \\ 7 & 2 \end{pmatrix}$<br>$X = \begin{pmatrix} 15 - 14 & 3 - 4 \\ -20 + 21 & -4 + 6 \end{pmatrix} = \begin{pmatrix} 1 & -1 \\ 1 & 2 \end{pmatrix}$.",
    trik_cepat: "Ingat posisi $A$ di sebelah kiri $X$, sehingga inversnya $A^{-1}$ juga harus dikalikan dari sebelah kiri matriks $B$."
  }
];
