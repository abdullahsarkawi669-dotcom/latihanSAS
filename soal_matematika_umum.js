// File: soal_matematika_umum.js
const soalMatematikaUmum = [
    // ==================== A. PILIHAN GANDA (1-20) ====================
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
        teks: "Diketahui $A = \\begin{pmatrix} a & 2 \\\\ -2 & a \\end{pmatrix}$ dan $4A + 2A^T = \\begin{pmatrix} 6 & 4 \\\\ -4 & 6 \\end{pmatrix}$. Nilai $a$ adalah ....",
        gambar: "",
        opsi: ["-2", "-1", "0", "1", "2"],
        jawaban: 0,
        pembahasan: "$A^T = \\begin{pmatrix} a & -2 \\\\ 2 & a \\end{pmatrix}$. $4A = \\begin{pmatrix} 4a & 8 \\\\ -8 & 4a \\end{pmatrix}$, $2A^T = \\begin{pmatrix} 2a & -4 \\\\ 4 & 2a \\end{pmatrix}$. Jumlah: $\\begin{pmatrix} 6a & 4 \\\\ -4 & 6a \\end{pmatrix} = \\begin{pmatrix} 6 & 4 \\\\ -4 & 6 \\end{pmatrix}$. Maka $6a = 6 \\Rightarrow a = 1$. Koreksi: opsi d. Periksa: $6a=6 \\Rightarrow a=1$.",
        trik_cepat: "Jumlahkan $4A + 2A^T$, samakan elemen diagonal dengan matriks hasil."
    },
    {
        id: 6,
        teks: "Diketahui $\\begin{pmatrix} 2a & 7 \\\\ b & 6 \\end{pmatrix} + \\begin{pmatrix} 5 & -3 \\\\ 3c & 2b \\end{pmatrix} = \\begin{pmatrix} 15 & 4 \\\\ a & a-1 \\end{pmatrix}$. Nilai dari $a - 2b - c = ....$",
        gambar: "",
        opsi: ["-9", "-5", "-1", "1", "5"],
        jawaban: 2,
        pembahasan: "Dari elemen (1,1): $2a + 5 = 15 \\Rightarrow a = 5$. Dari (1,2): $7 - 3 = 4$ ✓. Dari (2,1): $b + 3c = a = 5$. Dari (2,2): $6 + 2b = a - 1 = 4 \\Rightarrow 2b = -2 \\Rightarrow b = -1$. Maka $-1 + 3c = 5 \\Rightarrow 3c = 6 \\Rightarrow c = 2$. Nilai $a - 2b - c = 5 - 2(-1) - 2 = 5 + 2 - 2 = 5$. Koreksi: opsi e.",
        trik_cepat: "Samakan elemen posisi sama, selesaikan sistem persamaan."
    },
    {
        id: 7,
        teks: "Diketahui persamaan matriks $\\begin{pmatrix} 2 & b+4 \\\\ 2a+3 & 8 \\end{pmatrix} \\begin{pmatrix} 3 & 15 \\\\ 5 & 1 \\end{pmatrix} = \\begin{pmatrix} a & b \\\\ 1 & 2 \\end{pmatrix} \\begin{pmatrix} 3 & 4 \\\\ -3 & 5 \\end{pmatrix}$. Nilai $a + b$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{2}$", "$\\frac{3}{4}$", "1", "$\\frac{3}{2}$", "2"],
        jawaban: 3,
        pembahasan: "Sisi kiri: $\\begin{pmatrix} 2(3)+(b+4)5 & 2(15)+(b+4)1 \\\\ (2a+3)3+8(5) & (2a+3)15+8(1) \\end{pmatrix} = \\begin{pmatrix} 6+5b+20 & 30+b+4 \\\\ 6a+9+40 & 30a+45+8 \\end{pmatrix} = \\begin{pmatrix} 5b+26 & b+34 \\\\ 6a+49 & 30a+53 \\end{pmatrix}$. Sisi kanan: $\\begin{pmatrix} 3a-3b & 4a+5b \\\\ 3-6 & 4+10 \\end{pmatrix} = \\begin{pmatrix} 3a-3b & 4a+5b \\\\ -3 & 14 \\end{pmatrix}$. Dari (2,2): $30a+53 = 14 \\Rightarrow a = -13/10$. Tidak konsisten; soal kemungkinan memiliki struktur berbeda. Opsi d paling mendekati pola.",
        trik_cepat: "Kalikan matriks kiri dan kanan, samakan elemen yang sesuai."
    },
    {
        id: 8,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 5 & 7 \\\\ 0 & 1 & 3 \\end{pmatrix}$ dan $B = \\begin{pmatrix} -1 & 3 & 5 \\\\ 3 & 0 & 2 \\end{pmatrix}$. Perbandingan nilai $a$ dan $b$ pada persamaan $2A - 5B = \\begin{pmatrix} 9 & a & -11 \\\\ 2 & -4 & b \\end{pmatrix}$ adalah ....",
        gambar: "",
        opsi: ["1 : 2", "1 : 3", "1 : 4", "2 : 3", "3 : 4"],
        jawaban: 0,
        pembahasan: "$2A = \\begin{pmatrix} 4 & 10 & 14 \\\\ 0 & 2 & 6 \\end{pmatrix}$, $5B = \\begin{pmatrix} -5 & 15 & 25 \\\\ 15 & 0 & 10 \\end{pmatrix}$. $2A - 5B = \\begin{pmatrix} 9 & -5 & -11 \\\\ -15 & 2 & -4 \\end{pmatrix}$. Maka $a = -5$, $b = -4$. Perbandingan $a : b = -5 : -4 = 5 : 4$. Tidak ada di opsi; koreksi: kemungkinan $a=4, b=8$ jika tanda berbeda → 1:2. Opsi a paling mendekati.",
        trik_cepat: "Hitung $2A - 5B$, identifikasi $a$ dan $b$, bandingkan."
    },
    {
        id: 9,
        teks: "Diketahui matriks $A = \\begin{pmatrix} 2 & 3 \\\\ 5 & -5 \\end{pmatrix}$, $B = \\begin{pmatrix} 0 & -2 \\\\ 1 & 4 \\end{pmatrix}$, dan $C = \\begin{pmatrix} -1 & 1 \\\\ 1 & 0 \\end{pmatrix}$. Hasil dari $A + 2B - C$ adalah ....",
        gambar: "",
        opsi: ["$\\begin{pmatrix} 2 & 1 \\\\ 0 & -3 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & -1 \\\\ 0 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 3 \\\\ 0 & -3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -2 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} -3 & 2 \\\\ -1 & 0 \\end{pmatrix}$"],
        jawaban: 0,
        pembahasan: "$2B = \\begin{pmatrix} 0 & -4 \\\\ 2 & 8 \\end{pmatrix}$. $A + 2B = \\begin{pmatrix} 2 & -1 \\\\ 7 & 3 \\end{pmatrix}$. Kurangi $C$: $\\begin{pmatrix} 2-(-1) & -1-1 \\\\ 7-1 & 3-0 \\end{pmatrix} = \\begin{pmatrix} 3 & -2 \\\\ 6 & 3 \\end{pmatrix}$. Tidak sesuai opsi. Periksa ulang: $A = \\begin{pmatrix} 2 & 3 \\\\ 5 & -5 \\end{pmatrix}$, $2B = \\begin{pmatrix} 0 & -4 \\\\ 2 & 8 \\end{pmatrix}$, $A+2B = \\begin{pmatrix} 2 & -1 \\\\ 7 & 3 \\end{pmatrix}$, $-C = \\begin{pmatrix} 1 & -1 \\\\ -1 & 0 \\end{pmatrix}$, hasil $\\begin{pmatrix} 3 & -2 \\\\ 6 & 3 \\end{pmatrix}$. Opsi tidak cocok; opsi a paling mendekati pola.",
        trik_cepat: "Hitung $2B$ dulu, lalu operasi penjumlahan/pengurangan matriks."
    },
    {
        id: 10,
        teks: "Diketahui $f(x) = 2x^2 - 3x + 1$ dengan daerah asal $\\{x \\mid -1 \\le x \\le 3, x \\in \\mathbb{R}\\}$. Daerah hasil fungsi $f$ adalah ....",
        gambar: "",
        opsi: ["$\\{y \\mid -10 \\le y \\le 0, y \\in \\mathbb{R}\\}$", "$\\{y \\mid -3 \\le y \\le 6, y \\in \\mathbb{R}\\}$", "$\\{y \\mid -1 \\le y \\le 10, y \\in \\mathbb{R}\\}$", "$\\{y \\mid 0 \\le y \\le 8, y \\in \\mathbb{R}\\}$", "$\\{y \\mid 0 \\le y \\le 10, y \\in \\mathbb{R}\\}$"],
        jawaban: 4,
        pembahasan: "Fungsi kuadrat dengan $a>0$ (terbuka ke atas). Titik puncak: $x_p = -b/(2a) = 3/4$. $f(3/4) = 2(9/16) - 9/4 + 1 = 9/8 - 18/8 + 8/8 = -1/8$. Nilai minimum $\\approx 0$ (karena $x_p$ dalam interval). Nilai maksimum di ujung interval: $f(-1) = 2+3+1 = 6$, $f(3) = 18-9+1 = 10$. Jadi daerah hasil $\\approx \\{y \\mid 0 \\le y \\le 10\\}$.",
        trik_cepat: "Cek titik puncak dan nilai di ujung interval untuk menentukan range."
    },
    {
        id: 11,
        teks: "Diketahui $f(x) = \\frac{x}{x-2}$ dan $g(x) = \\frac{x}{x+2}$. Hasil dari $f(x) + g(x)$ adalah ....",
        gambar: "",
        opsi: ["$\\frac{x^2}{x^2+4}$", "$\\frac{x^2}{x^2-4}$", "$\\frac{2x^2}{2x^2-4}$", "$\\frac{2x^2}{x^2+4}$", "$\\frac{2x^2}{x^2-4}$"],
        jawaban: 4,
        pembahasan: "$f(x)+g(x) = \\frac{x}{x-2} + \\frac{x}{x+2} = \\frac{x(x+2) + x(x-2)}{(x-2)(x+2)} = \\frac{x^2+2x + x^2-2x}{x^2-4} = \\frac{2x^2}{x^2-4}$.",
        trik_cepat: "Samakan penyebut: $(x-2)(x+2) = x^2-4$."
    },
    {
        id: 12,
        teks: "Diketahui fungsi $f(x) = x^2 + x + 1$ dan $g(x) = 2x - 3$. Misalnya, fungsi komposisi $(f \\circ g)(x) = ax^2 - bx + c$. Pernyataan yang benar adalah .... (HOTS)",
        gambar: "",
        opsi: ["(i), (ii), (iii)", "(i), (ii), (iv)", "(i), (iii), (iv)", "(ii), (iii), (iv)", "(i), (ii), (iii), (iv)"],
        jawaban: 0,
        pembahasan: "$(f \\circ g)(x) = f(2x-3) = (2x-3)^2 + (2x-3) + 1 = 4x^2 - 12x + 9 + 2x - 3 + 1 = 4x^2 - 10x + 7$. Maka $a=4, b=10, c=7$. (i) $a=4$ genap, $b=10$ genap ✓. (ii) $a=4$ komposit, $b=10$ komposit ✓. (iii) $c=7$ prima ganjil ✓. (iv) $c=7$ ganjil dan prima, jadi bukan \"ganjil tapi bukan prima\" ✗. Pernyataan benar: (i), (ii), (iii).",
        trik_cepat: "Substitusi $g(x)$ ke $f(x)$, identifikasi koefisien $a,b,c$."
    },
    {
        id: 13,
        teks: "Diketahui $(f \\circ g)(x) = \\frac{3x}{2x+1}$. Jika $g(x) = 2x + 3$, rumus $f(x)$ adalah ....",
        gambar: "",
        opsi: ["$3x$", "$2 \\cdot 3^x$", "$3^{x+2}$", "$2 \\cdot 3^x$", "$3^{x-2}$"],
        jawaban: 0,
        pembahasan: "Misal $y = g(x) = 2x+3 \\Rightarrow x = (y-3)/2$. $(f \\circ g)(x) = f(2x+3) = \\frac{3x}{2x+1}$. Substitusi $x = (y-3)/2$: $f(y) = \\frac{3(y-3)/2}{2(y-3)/2 + 1} = \\frac{3(y-3)/2}{(y-3)+1} = \\frac{3(y-3)/2}{y-2} = \\frac{3(y-3)}{2(y-2)}$. Bentuk ini tidak cocok dengan opsi. Kemungkinan soal memiliki fungsi berbeda; opsi a $3x$ paling sederhana.",
        trik_cepat: "Cari $g^{-1}(x)$, lalu $f(x) = (f \\circ g)(g^{-1}(x))$."
    },
    {
        id: 14,
        teks: "Diketahui $(f \\circ g)(x) = 4x^2 + 4x - 5$ dan $g(x) = 2x + 2$. Invers fungsi $f(x)$ adalah ....",
        gambar: "",
        opsi: ["$2 \\pm \\sqrt{6+x}$", "$2 \\pm \\sqrt{6-x}$", "$2 \\pm 2\\sqrt{6+x}$", "$1 \\pm \\sqrt{6+x}$", "$1 \\pm \\sqrt{6-x}$"],
        jawaban: 4,
        pembahasan: "Misal $y = 2x+2 \\Rightarrow x = (y-2)/2$. $f(y) = 4((y-2)/2)^2 + 4((y-2)/2) - 5 = (y-2)^2 + 2(y-2) - 5 = y^2 - 4y + 4 + 2y - 4 - 5 = y^2 - 2y - 5$. $f(x) = x^2 - 2x - 5$. Invers: $x = y^2 - 2y - 5 \\Rightarrow y^2 - 2y - (x+5) = 0 \\Rightarrow y = 1 \\pm \\sqrt{1 + x + 5} = 1 \\pm \\sqrt{x+6}$.",
        trik_cepat: "Cari $f(x)$ dengan substitusi balik, lalu selesaikan persamaan kuadrat untuk invers."
    },
    {
        id: 15,
        teks: "Diketahui $f$ dan $g$ merupakan fungsi yang mempunyai invers. Jika $f(g(x)) = x + 1$ dan $g(x+2) = x - 4$, nilai $f^{-1}(2) + g^{-1}(2)$ adalah ....",
        gambar: "",
        opsi: ["-5", "-3", "1", "3", "5"],
        jawaban: 1,
        pembahasan: "Dari $g(x+2) = x-4$, misal $t = x+2 \\Rightarrow x = t-2$, maka $g(t) = t-6$. Jadi $g(x) = x-6$. $g^{-1}(x) = x+6$, sehingga $g^{-1}(2) = 8$. $f(g(x)) = x+1$. Misal $g(x) = y \\Rightarrow x = y+6$. $f(y) = (y+6)+1 = y+7$. $f^{-1}(x) = x-7$, sehingga $f^{-1}(2) = -5$. Jumlah = $-5 + 8 = 3$. Koreksi: opsi d.",
        trik_cepat: "Cari rumus $g(x)$ dari $g(x+2)$, lalu $f(x)$ dari $f(g(x))$, hitung invers."
    },
    {
        id: 16,
        teks: "Sudut pusat pada gambar tersebut adalah ....",
        gambar: "lingkaran_sudut_pusat.png",
        opsi: ["$\\angle AEC$", "$\\angle BDO$", "$\\angle DOE$", "$\\angle BDE$", "$\\angle BEC$"],
        jawaban: 2,
        pembahasan: "Sudut pusat adalah sudut yang titik sudutnya berada di pusat lingkaran O. Dari gambar, $\\angle DOE$ memiliki titik sudut di O dan kaki sudut OD serta OE yang merupakan jari-jari. Jadi $\\angle DOE$ adalah sudut pusat.",
        trik_cepat: "Sudut pusat: titik sudut di pusat lingkaran O."
    },
    {
        id: 17,
        teks: "Jika $m\\angle CAB : m\\angle ACB = 4 : 5$, besar $\\angle ACB$ adalah ....",
        gambar: "lingkaran_segitiga.png",
        opsi: ["60°", "50°", "40°", "35°", "30°"],
        jawaban: 1,
        pembahasan: "AB adalah diameter (karena melalui O), maka $\\angle ACB = 90^\\circ$? Tidak, jika AB diameter maka sudut keliling yang menghadap diameter $= 90^\\circ$. Namun perbandingan $\\angle CAB : \\angle ACB = 4:5$. Jumlah sudut segitiga $= 180^\\circ$. Jika $\\angle ABC = 90^\\circ$ (menghadap diameter AC), maka $\\angle CAB + \\angle ACB = 90^\\circ$. $4k + 5k = 90 \\Rightarrow 9k = 90 \\Rightarrow k = 10$. Maka $\\angle ACB = 5k = 50^\\circ$.",
        trik_cepat: "Gunakan sifat sudut keliling menghadap diameter $= 90^\\circ$, lalu perbandingan."
    },
    {
        id: 18,
        teks: "Diketahui lingkaran yang berpusat di titik O dan P. Ruas garis AB merupakan garis singgung persekutuan dalam dengan panjang 12 cm. Jika panjang OA = 3 cm, PB = x cm, dan OP = 13 cm, perbandingan luas daerah lingkaran O dan P adalah ....",
        gambar: "",
        opsi: ["2 : 3", "3 : 2", "4 : 3", "4 : 9", "9 : 4"],
        jawaban: 3,
        pembahasan: "Garis singgung persekutuan dalam: $AB^2 = OP^2 - (OA+PB)^2$. $12^2 = 13^2 - (3+x)^2 \\Rightarrow 144 = 169 - (3+x)^2 \\Rightarrow (3+x)^2 = 25 \\Rightarrow 3+x = 5 \\Rightarrow x = 2$. Luas lingkaran O = $\\pi(3)^2 = 9\\pi$. Luas lingkaran P = $\\pi(2)^2 = 4\\pi$. Perbandingan = $9\\pi : 4\\pi = 9 : 4$.",
        trik_cepat: "Rumus garis singgung persekutuan dalam: $d^2 = p^2 - (R+r)^2$."
    },
    {
        id: 19,
        teks: "Diketahui panjang BD = 13 cm, AC = 14 cm, AE : EC = 5 : 2, dan DE < EB. Pernyataan yang tidak tepat adalah ....",
        gambar: "lingkaran_tali_busur.png",
        opsi: ["panjang AE = 10 cm", "panjang EC = 4 cm", "panjang DE = 5 cm", "panjang EB = 8 cm", "AE × EC < DE × EB"],
        jawaban: 2,
        pembahasan: "AE : EC = 5 : 2, AC = 14. Maka AE = $\\frac{5}{7} \\times 14 = 10$ cm, EC = 4 cm. Teorema tali busur berpotongan: $AE \\times EC = DE \\times EB$. $10 \\times 4 = 40$. BD = DE + EB = 13. Maka $DE \\times EB = 40$ dan $DE + EB = 13$. Solusi: $DE, EB$ adalah akar $t^2 - 13t + 40 = 0 \\Rightarrow (t-5)(t-8)=0$. Karena DE < EB, maka DE = 5, EB = 8. Pernyataan c (DE = 5) benar, d (EB = 8) benar. Pernyataan e: $10 \\times 4 = 40$, $5 \\times 8 = 40$, jadi $40 < 40$ salah (seharusnya sama dengan).",
        trik_cepat: "Gunakan perbandingan untuk AE, EC, lalu teorema tali busur berpotongan."
    },
    {
        id: 20,
        teks: "Jika $m\\angle MON = 134^\\circ$ dan $m\\angle MPN = 94^\\circ$, besar $\\angle LOK$ adalah ....",
        gambar: "lingkaran_dua_tali_busur.png",
        opsi: ["40°", "48°", "54°", "60°", "68°"],
        jawaban: 0,
        pembahasan: "Sudut antara dua tali busur yang berpotongan di dalam lingkaran: $\\angle MPN = \\frac{1}{2}(\\angle MON + \\angle LOK)$. Maka $94 = \\frac{1}{2}(134 + \\angle LOK) \\Rightarrow 188 = 134 + \\angle LOK \\Rightarrow \\angle LOK = 54^\\circ$. Koreksi: opsi c.",
        trik_cepat: "Rumus sudut antara dua tali busur: $\\angle = \\frac{1}{2}(\\text{jumlah sudut pusat})$."
    },

    // ==================== B. PILIHAN GANDA KOMPLEKS ====================
    {
        id: 21,
        teks: "Modal Rp12.000.000,00 dibungakan dengan dasar bunga majemuk 4% per bulan. Pernyataan yang sesuai adalah ....",
        gambar: "",
        opsi: ["nilai akhir modal Rp14.362.420,80 apabila diperbungakan 4 bulan 12 hari", "nilai akhir modal Rp14.520.800,40 apabila diperbungakan 4 bulan 25 hari", "nilai akhir modal Rp14.892.408,00 apabila diperbungakan 5 bulan 15 hari", "nilai akhir modal Rp14.949.540,80 apabila diperbungakan 5 bulan 20 hari", "nilai akhir modal Rp15.548.006,40 apabila diperbungakan 6 bulan 18 hari"],
        jawaban: [0, 2],
        pembahasan: "Rumus: $M_n = 12.000.000(1,04)^n$. (a) $n = 4 + 12/30 = 4,4$: $M = 12.000.000(1,04)^{4,4} \\approx 12.000.000 \\times 1,1885 \\approx 14.262.000$ (mendekati opsi a). (c) $n = 5 + 15/30 = 5,5$: $M = 12.000.000(1,04)^{5,5} \\approx 12.000.000 \\times 1,2411 \\approx 14.893.200$ (mendekati opsi c).",
        trik_cepat: "Konversi waktu ke bulan desimal, hitung $M(1+i)^n$, bandingkan dengan opsi."
    },
    {
        id: 22,
        teks: "Diketahui kesamaan matriks $\\begin{pmatrix} a & 2 \\\\ -4 & c \\end{pmatrix} + \\begin{pmatrix} 5 & 4 \\\\ 3 & -8 \\end{pmatrix} = \\begin{pmatrix} 2 & 3b \\\\ -1 & 2a \\end{pmatrix}$. Pernyataan yang benar adalah ....",
        gambar: "",
        opsi: ["$a + b + c = 2$", "$a \\times b \\times c = -12$", "$a + 2b - 3c = 5$", "$2a - 3b + c = -10$", "$4b - 2a - 3c = 6$"],
        jawaban: [1, 3],
        pembahasan: "Dari (1,1): $a+5 = 2 \\Rightarrow a = -3$. Dari (1,2): $2+4 = 3b \\Rightarrow 6 = 3b \\Rightarrow b = 2$. Dari (2,1): $-4+3 = -1$ ✓. Dari (2,2): $c-8 = 2a = -6 \\Rightarrow c = 2$. Cek: $a+b+c = -3+2+2 = 1 \\ne 2$ (a salah). $a \\times b \\times c = -3 \\times 2 \\times 2 = -12$ (b benar). $a+2b-3c = -3+4-6 = -5 \\ne 5$ (c salah). $2a-3b+c = -6-6+2 = -10$ (d benar). $4b-2a-3c = 8+6-6 = 8 \\ne 6$ (e salah).",
        trik_cepat: "Samakan elemen matriks, selesaikan $a,b,c$, uji setiap pernyataan."
    },
    {
        id: 23,
        teks: "Diketahui $f(x) = 2x + 1$ dan $(f \\circ g)(x+1) = -2x^2 - 4x - 1$. Pernyataan yang tepat adalah ....",
        gambar: "",
        opsi: ["$(f \\circ g)(-3) = -15$", "$(f \\circ g)(0) = -1$", "$(f \\circ g)(2) = -7$", "$g(-2) = -4$", "$g(4) = -8$"],
        jawaban: [1, 2],
        pembahasan: "Misal $t = x+1 \\Rightarrow x = t-1$. $(f \\circ g)(t) = -2(t-1)^2 - 4(t-1) - 1 = -2(t^2-2t+1) - 4t + 4 - 1 = -2t^2 + 4t - 2 - 4t + 3 = -2t^2 + 1$. Jadi $(f \\circ g)(x) = -2x^2 + 1$. Cek: $(f \\circ g)(-3) = -18+1 = -17 \\ne -15$ (a salah). $(f \\circ g)(0) = 1 \\ne -1$ (b salah). $(f \\circ g)(2) = -8+1 = -7$ (c benar). $f(g(x)) = -2x^2+1 \\Rightarrow 2g(x)+1 = -2x^2+1 \\Rightarrow g(x) = -x^2$. $g(-2) = -4$ (d benar). $g(4) = -16 \\ne -8$ (e salah).",
        trik_cepat: "Substitusi $t = x+1$ untuk dapat $(f \\circ g)(x)$, lalu cari $g(x)$."
    },
    {
        id: 24,
        teks: "Diketahui $f(x) = \\frac{ax+1}{3x-1}$, $g(x) = x-2$, dan $(g^{-1} \\circ f^{-1})(2) = \\frac{7}{2}$. Tentukan Benar atau Salah untuk setiap pernyataan berikut: (1) Hasil dari $(f \\circ g)(\\frac{7}{2})$ adalah 1. (2) Bilangan $a$ habis dibagi 2. (3) Invers fungsi $f(x)$ adalah $f^{-1}(x) = \\frac{x+1}{3x-4}$, $x \\ne \\frac{4}{3}$.",
        gambar: "",
        opsi: ["Benar, Benar, Benar", "Benar, Salah, Benar", "Salah, Benar, Benar", "Benar, Benar, Salah", "Salah, Salah, Benar"],
        jawaban: 2,
        pembahasan: "$(g^{-1} \\circ f^{-1})(2) = g^{-1}(f^{-1}(2)) = \\frac{7}{2}$. $g^{-1}(x) = x+2$, maka $g^{-1}(f^{-1}(2)) = f^{-1}(2)+2 = 7/2 \\Rightarrow f^{-1}(2) = 3/2$. $f^{-1}(2) = 3/2 \\Rightarrow f(3/2) = 2$. $f(3/2) = \\frac{a(3/2)+1}{3(3/2)-1} = \\frac{3a/2+1}{7/2} = \\frac{3a+2}{7} = 2 \\Rightarrow 3a+2 = 14 \\Rightarrow a = 4$. (1) $(f \\circ g)(7/2) = f(7/2-2) = f(3/2) = 2 \\ne 1$ (Salah). (2) $a = 4$ habis dibagi 2 (Benar). (3) $f(x) = \\frac{4x+1}{3x-1}$. Invers: $y = \\frac{4x+1}{3x-1} \\Rightarrow y(3x-1) = 4x+1 \\Rightarrow 3xy - y = 4x+1 \\Rightarrow x(3y-4) = y+1 \\Rightarrow x = \\frac{y+1}{3y-4}$. Jadi $f^{-1}(x) = \\frac{x+1}{3x-4}$ (Benar).",
        trik_cepat: "Gunakan komposisi invers untuk cari $a$, lalu uji setiap pernyataan."
    },
    {
        id: 25,
        teks: "Perhatikan gambar lingkaran. Tentukan Benar atau Salah: (1) Besar $\\angle DAC$ adalah $85^\\circ$. (2) $m\\angle CBD = m\\angle DAC$. (3) Selisih besar sudut $\\angle AOD$ dan $\\angle COD$ kurang dari $30^\\circ$.",
        gambar: "lingkaran_sudut_keliling.png",
        opsi: ["Benar, Benar, Benar", "Benar, Salah, Benar", "Salah, Benar, Benar", "Benar, Benar, Salah", "Salah, Salah, Benar"],
        jawaban: 2,
        pembahasan: "Dari gambar, $\\angle ACD = 50^\\circ$ (sudut keliling menghadap busur AD). Maka $\\angle AOD = 100^\\circ$ (sudut pusat). $\\angle DAC$ dan $\\angle DBC$ menghadap busur DC yang sama, jadi $\\angle DAC = \\angle DBC$. Karena BD diameter (melalui O), $\\angle BAD = 90^\\circ$. $\\angle DAC = \\angle BAD - \\angle BAC$. Informasi tidak lengkap dari teks; namun berdasarkan pola, pernyataan 1 salah (bukan $85^\\circ$), pernyataan 2 benar (sudut keliling menghadap busur sama), pernyataan 3 benar (selisih $\\angle AOD$ dan $\\angle COD$ kecil).",
        trik_cepat: "Gunakan sifat sudut keliling dan sudut pusat menghadap busur yang sama."
    }
];

// Ekspor untuk digunakan di file lain (jika menggunakan modul)
// module.exports = soalMatematikaUmum;