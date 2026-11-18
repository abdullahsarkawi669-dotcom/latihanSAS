// File: soal_fisika.js
// Kurikulum Merdeka - Fisika Kelas XI (Fase F / Peminatan SainsTek - SMAN 3 Mataram)
// Disusun urut per bab (Semester 1 & Semester 2)

const soalFisika = [
    // =========================================================================
    // BAB 1: VEKTOR (1-10)
    // =========================================================================
    {
        id: 1,
        teks: "Besaran berikut yang seluruhnya merupakan besaran vektor adalah ....",
        gambar: "",
        opsi: [
            "Massa, waktu, dan suhu",
            "Perpindahan, kecepatan, dan gaya",
            "Jarak, kelajuan, dan usaha",
            "Energi, daya, dan tekanan",
            "Volume, massa jenis, dan momentum"
        ],
        jawaban: 1,
        pembahasan: "Besaran vektor memiliki besar (nilai) dan arah.<br>Perpindahan, kecepatan, dan gaya memiliki arah sehingga termasuk besaran vektor.<br>Massa, waktu, suhu, jarak, kelajuan, usaha, energi, daya, tekanan, volume, dan massa jenis adalah besaran skalar.",
        trik_cepat: "Ingat arah: gerak (perpindahan, kecepatan, percepatan) dan dorongan/tarikan (gaya, momentum, impuls) pasti vektor."
    },
    {
        id: 2,
        teks: "Dua vektor $\\vec{A} = 4\\hat{i} - 2\\hat{j}$ dan $\\vec{B} = -1\\hat{i} + 6\\hat{j}$. Besar resultan vektor $\\vec{R} = \\vec{A} + \\vec{B}$ adalah ....",
        gambar: "",
        opsi: ["3 satuan", "4 satuan", "5 satuan", "7 satuan", "25 satuan"],
        jawaban: 2,
        pembahasan: "$\\vec{R} = (4 + (-1))\\hat{i} + (-2 + 6)\\hat{j}$<br>$= 3\\hat{i} + 4\\hat{j}$.<br>Besar vektor resultan: $|\\vec{R}| = \\sqrt{3^2 + 4^2}$<br>$= \\sqrt{9 + 16}$<br>$= 5$ satuan.",
        trik_cepat: "Jumlahkan komponen sejenis ($\\hat{i}$ dengan $\\hat{i}$, $\\hat{j}$ dengan $\\hat{j}$), lalu pakai Tripel Pythagoras 3-4-5."
    },
    {
        id: 3,
        teks: "Sebuah vektor gaya $F = 20$ N membentuk sudut $37^\\circ$ terhadap sumbu-$x$ positif. Komponen vektor pada sumbu-$x$ dan sumbu-$y$ berturut-turut adalah .... ($\\sin 37^\\circ = 0,6$; $\\cos 37^\\circ = 0,8$)",
        gambar: "",
        opsi: [
            "$12$ N dan $16$ N",
            "$16$ N dan $12$ N",
            "$10$ N dan $10\\sqrt{3}$ N",
            "$10\\sqrt{3}$ N dan $10$ N",
            "$16$ N dan $20$ N"
        ],
        jawaban: 1,
        pembahasan: "$F_x = F \\cos 37^\\circ = 20 \\times 0,8 = 16$ N.<br>$F_y = F \\sin 37^\\circ = 20 \\times 0,6 = 12$ N.",
        trik_cepat: "Samping sudut pakai $\\cos$, depan sudut pakai $\\sin$."
    },
    {
        id: 4,
        teks: "Dua buah vektor gaya masing-masing besarnya $6$ N dan $8$ N bertitik tangkap sama dan saling mengapit sudut $60^\\circ$. Besar resultan kedua vektor tersebut adalah ....",
        gambar: "",
        opsi: ["$2\\sqrt{13}$ N", "$2\\sqrt{37}$ N", "$10$ N", "$14$ N", "$2\\sqrt{19}$ N"],
        jawaban: 1,
        pembahasan: "$R = \\sqrt{F_1^2 + F_2^2 + 2 F_1 F_2 \\cos 60^\\circ}$<br>$= \\sqrt{6^2 + 8^2 + 2(6)(8)(0,5)}$<br>$= \\sqrt{36 + 64 + 48}$<br>$= \\sqrt{148}$<br>$= 2\\sqrt{37}$ N.",
        trik_cepat: "Gunakan rumus kosinus: $R = \\sqrt{A^2 + B^2 + 2AB\\cos\\theta}$."
    },
    {
        id: 5,
        teks: "Diketahui dua vektor $\\vec{P} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$ dan $\\vec{Q} = 4\\hat{i} - 2\\hat{j} + 2\\hat{k}$. Hasil perkalian titik (dot product) $\\vec{P} \\cdot \\vec{Q}$ adalah ....",
        gambar: "",
        opsi: ["0", "2", "4", "12", "16"],
        jawaban: 0,
        pembahasan: "$\\vec{P} \\cdot \\vec{Q} = (2)(4) + (3)(-2) + (-1)(2)$<br>$= 8 - 6 - 2$<br>$= 0$. (Karena hasilnya 0, kedua vektor saling tegak lurus).",
        trik_cepat: "Dot product menghasilkan skalar: kalikan koefisien sejenis lalu jumlahkan."
    },
    {
        id: 6,
        teks: "Hasil perkalian silang (cross product) antara vektor $\\vec{A} = 3\\hat{i} + 2\\hat{j}$ dan $\\vec{B} = 2\\hat{i} - 4\\hat{j}$ adalah ....",
        gambar: "",
        opsi: ["$-16\\hat{k}$", "$-8\\hat{k}$", "$-2\\hat{k}$", "$8\\hat{k}$", "$16\\hat{k}$"],
        jawaban: 0,
        pembahasan: "$\\vec{A} \\times \\vec{B} = (A_x B_y - A_y B_x)\\hat{k}$<br>$= ((3)(-4) - (2)(2))\\hat{k}$<br>$= (-12 - 4)\\hat{k}$<br>$= -16\\hat{k}$.",
        trik_cepat: "Cross product 2D: $(x_1 y_2 - y_1 x_2)\\hat{k}$."
    },
    {
        id: 7,
        teks: "Tiga buah vektor gaya setitik tangkap berada dalam kesetimbangan seperti pada bidang koordinat: $F_1 = 10$ N berarah ke timur ($+x$), $F_2 = 10$ N membentuk sudut $120^\\circ$ terhadap $+x$, dan $F_3$ membentuk sudut $240^\\circ$ terhadap $+x$. Besar $F_3$ agar sistem seimbang adalah ....",
        gambar: "",
        opsi: ["$5$ N", "$5\\sqrt{3}$ N", "$10$ N", "$10\\sqrt{3}$ N", "$20$ N"],
        jawaban: 2,
        pembahasan: "Sudut antarketiga vektor masing-masing $120^\\circ$ (simetris membentuk $360^\\circ$).<br>Agar resultan nol (setimbang), besar ketiga vektor harus sama, yaitu $F_3 = 10$ N.",
        trik_cepat: "Tiga vektor bersudut $120^\\circ$ sama besar selalu menghasilkan resultan = 0."
    },
    {
        id: 8,
        teks: "Seorang siswa SMAN 3 Mataram berjalan lurus ke arah timur sejauh $80$ m, kemudian berbelok ke utara sejauh $60$ m. Perbandingan jarak yang ditempuh dan besar perpindahannya adalah ....",
        gambar: "",
        opsi: ["$5 : 7$", "$7 : 5$", "$4 : 3$", "$3 : 4$", "$1 : 1$"],
        jawaban: 1,
        pembahasan: "Jarak (skalar) = $80 + 60 = 140$ m.<br>Perpindahan (vektor) = $\\sqrt{80^2 + 60^2} = 100$ m.<br>Perbandingan = $140 : 100 = 7 : 5$.",
        trik_cepat: "Jarak = total lintasan; Perpindahan = garis lurus awal ke akhir (Tripel 60-80-100)."
    },
    {
        id: 9,
        teks: "Dua vektor $\\vec{A}$ dan $\\vec{B}$ memiliki besar yang sama, yaitu $F$. Jika besar resultan kedua vektor sama dengan $F$, sudut apit antara kedua vektor tersebut adalah ....",
        gambar: "",
        opsi: ["$30^\\circ$", "$60^\\circ$", "$90^\\circ$", "$120^\\circ$", "$150^\\circ$"],
        jawaban: 3,
        pembahasan: "$R^2 = A^2 + B^2 + 2AB\\cos\\theta$<br>$\\Rightarrow F^2 = F^2 + F^2 + 2F^2\\cos\\theta$<br>$\\Rightarrow -F^2 = 2F^2\\cos\\theta$<br>$\\Rightarrow \\cos\\theta = -\\frac{1}{2}$<br>$\\Rightarrow \\theta = 120^\\circ$.",
        trik_cepat: "Jika $A = B = R = F$, sudut apitnya pasti $120^\\circ$."
    },
    {
        id: 10,
        teks: "Vektor posisi sebuah partikel dinyatakan dengan $\\vec{r} = 6\\hat{i} - 8\\hat{j}$ meter. Vektor satuan yang searah dengan $\\vec{r}$ adalah ....",
        gambar: "",
        opsi: [
            "$0,6\\hat{i} - 0,8\\hat{j}$",
            "$0,8\\hat{i} - 0,6\\hat{j}$",
            "$6\\hat{i} - 8\\hat{j}$",
            "$-0,6\\hat{i} + 0,8\\hat{j}$",
            "$0,3\\hat{i} - 0,4\\hat{j}$"
        ],
        jawaban: 0,
        pembahasan: "Besar $|\\vec{r}| = \\sqrt{6^2 + (-8)^2} = 10$.<br>Vektor satuan $\\hat{u} = \\frac{\\vec{r}}{|\\vec{r}|}$<br>$= \\frac{6\\hat{i} - 8\\hat{j}}{10}$<br>$= 0,6\\hat{i} - 0,8\\hat{j}$.",
        trik_cepat: "Vektor satuan = vektor dibagi besarnya."
    },

    // =========================================================================
    // BAB 2: KINEMATIKA GERAK (11-22)
    // =========================================================================
    {
        id: 11,
        teks: "Sebuah partikel bergerak sepanjang sumbu-$x$ dengan persamaan posisi $x(t) = 2t^3 - 6t^2 + 5t + 4$ ($x$ dalam meter dan $t$ dalam sekon). Kecepatan sesaat partikel pada $t = 2$ s adalah ....",
        gambar: "",
        opsi: ["$5$ m/s", "$9$ m/s", "$13$ m/s", "$17$ m/s", "$21$ m/s"],
        jawaban: 0,
        pembahasan: "$v(t) = \\frac{dx}{dt} = 6t^2 - 12t + 5$.<br>Pada $t = 2$ s: $v(2) = 6(2)^2 - 12(2) + 5 = 24 - 24 + 5 = 5$ m/s.",
        trik_cepat: "Kecepatan = turunan pertama posisi ($v = dx/dt$)."
    },
    {
        id: 12,
        teks: "Sebuah mobil bergerak dengan kelajuan awal $10$ m/s dipercepat beraturan sebesar $2$ m/s$^2$ selama $6$ sekon. Jarak yang ditempuh mobil selama selang waktu tersebut adalah ....",
        gambar: "",
        opsi: ["$60$ m", "$72$ m", "$84$ m", "$96$ m", "$120$ m"],
        jawaban: 3,
        pembahasan: "$s = v_0 t + \\frac{1}{2} a t^2$<br>$= (10)(6) + \\frac{1}{2}(2)(6)^2$<br>$= 60 + 36$<br>$= 96$ m.",
        trik_cepat: "Gunakan $s = v_0 t + \\frac{1}{2}at^2$."
    },
    {
        id: 13,
        teks: "Sebuah bola dilempar vertikal ke atas dari tanah dengan kelajuan awal $30$ m/s. Jika percepatan gravitasi $g = 10$ m/s$^2$, tinggi maksimum yang dicapai bola dan waktu total di udara adalah ....",
        gambar: "",
        opsi: [
            "$30$ m dan $3$ s",
            "$45$ m dan $3$ s",
            "$45$ m dan $6$ s",
            "$90$ m dan $6$ s",
            "$90$ m dan $3$ s"
        ],
        jawaban: 2,
        pembahasan: "$h_{max} = \\frac{v_0^2}{2g}$<br>$= \\frac{30^2}{2(10)}$<br>$= \\frac{900}{20}$<br>$= 45$ m.<br>Waktu naik $t_{naik} = \\frac{v_0}{g} = \\frac{30}{10} = 3$ s, sehingga waktu total di udara $t_{total} = 2 \\times 3 = 6$ s.",
        trik_cepat: "$h_{max} = v_0^2/(2g)$ dan $t_{udara} = 2v_0/g$."
    },
    {
        id: 14,
        teks: "Sebuah peluru ditembakkan dengan kecepatan awal $40$ m/s dan sudut elevasi $30^\\circ$ terhadap horizontal. Jika $g = 10$ m/s$^2$, jangkauan horizontal maksimum peluru adalah ....",
        gambar: "",
        opsi: ["$40\\sqrt{3}$ m", "$80$ m", "$80\\sqrt{3}$ m", "$120$ m", "$160\\sqrt{3}$ m"],
        jawaban: 2,
        pembahasan: "$X_{max} = \\frac{v_0^2 \\sin 2\\theta}{g}$<br>$= \\frac{40^2 \\sin 60^\\circ}{10}$<br>$= 160 \\times \\frac{\\sqrt{3}}{2}$<br>$= 80\\sqrt{3}$ m.",
        trik_cepat: "$X_{max} = \\frac{v_0^2 \\sin 2\\theta}{g}$."
    },
    {
        id: 15,
        teks: "Pada gerak parabola, pernyataan yang paling tepat mengenai kecepatan benda di titik tertinggi adalah ....",
        gambar: "",
        opsi: [
            "Kecepatan total benda bernilai nol",
            "Komponen kecepatan horizontal bernilai nol",
            "Komponen kecepatan vertikal bernilai nol dan percepatan bernilai $g$ ke bawah",
            "Percepatan benda di titik tertinggi bernilai nol",
            "Kecepatan vertikal maksimum dan kecepatan horizontal tetap"
        ],
        jawaban: 2,
        pembahasan: "Di titik tertinggi gerak parabola, $v_y = 0$, tetapi $v_x = v_0\\cos\\theta \\neq 0$.<br>Percepatan gravitasi $g$ selalu bekerja ke bawah sepanjang lintasan.",
        trik_cepat: "Puncak parabola: $v_y = 0$, $v_x$ tetap, $a = g$ ke bawah."
    },
    {
        id: 16,
        teks: "Sebuah roda berputar dengan frekuensi $5$ Hz. Jika jari-jari roda $20$ cm, kelajuan linear sebuah titik di tepi roda adalah ....",
        gambar: "",
        opsi: ["$\\pi$ m/s", "$2\\pi$ m/s", "$4\\pi$ m/s", "$10\\pi$ m/s", "$20\\pi$ m/s"],
        jawaban: 1,
        pembahasan: "$\\omega = 2\\pi f = 2\\pi(5) = 10\\pi$ rad/s.<br>$r = 20$ cm $= 0,2$ m.<br>Maka $v = \\omega r = 10\\pi \\times 0,2 = 2\\pi$ m/s.",
        trik_cepat: "$v = 2\\pi f r$ (ubah cm ke meter dulu)."
    },
    {
        id: 17,
        teks: "Dua buah roda A dan B dihubungkan dengan sabuk (rantai). Jari-jari roda A adalah $10$ cm dan roda B adalah $25$ cm. Jika roda A berputar dengan kecepatan sudut $50$ rad/s, kecepatan sudut roda B adalah ....",
        gambar: "",
        opsi: ["$10$ rad/s", "$20$ rad/s", "$25$ rad/s", "$50$ rad/s", "$125$ rad/s"],
        jawaban: 1,
        pembahasan: "Roda dihubungkan sabuk memiliki kelajuan linear sama ($v_A = v_B$): $\\omega_A R_A = \\omega_B R_B$<br>$\\Rightarrow 50(10) = \\omega_B(25)$<br>$\\Rightarrow \\omega_B = 20$ rad/s.",
        trik_cepat: "Dihubungkan sabuk/bersinggungan: $\\omega_1 R_1 = \\omega_2 R_2$."
    },
    {
        id: 18,
        teks: "Sebuah benda bergerak lurus dengan grafik kecepatan terhadap waktu ($v$-$t$) berupa trapesium: dari $t=0$ ke $t=4$ s kecepatan naik dari $0$ menjadi $10$ m/s, lalu konstan $10$ m/s hingga $t=10$ s. Jarak total yang ditempuh benda adalah ....",
        gambar: "",
        opsi: ["$60$ m", "$70$ m", "$80$ m", "$90$ m", "$100$ m"],
        jawaban: 2,
        pembahasan: "Jarak = luas di bawah grafik $v$-$t$.<br>Luas segitiga ($0$–$4$ s) = $\\frac{1}{2}(4)(10) = 20$ m.<br>Luas persegi panjang ($4$–$10$ s) = $(6)(10) = 60$ m.<br>Total = $20 + 60 = 80$ m.",
        trik_cepat: "Jarak pada grafik $v$-$t$ = Luas daerah di bawah kurva."
    },
    {
        id: 19,
        teks: "Sebuah benda bergerak melingkar beraturan dengan jari-jari lintasan $0,5$ m dan kelajuan linear $4$ m/s. Besar percepatan sentripetalnya adalah ....",
        gambar: "",
        opsi: ["$2$ m/s$^2$", "$8$ m/s$^2$", "$16$ m/s$^2$", "$32$ m/s$^2$", "$64$ m/s$^2$"],
        jawaban: 3,
        pembahasan: "$a_s = \\frac{v^2}{r}$<br>$= \\frac{4^2}{0,5}$<br>$= \\frac{16}{0,5}$<br>$= 32$ m/s$^2$.",
        trik_cepat: "$a_s = v^2 / r$."
    },
    {
        id: 20,
        teks: "Percepatan sebuah partikel dinyatakan oleh fungsi $a(t) = 6t - 2$ m/s$^2$. Jika pada saat $t = 0$ partikel bergerak dengan kecepatan $v_0 = 3$ m/s, kecepatan partikel pada $t = 2$ s adalah ....",
        gambar: "",
        opsi: ["$8$ m/s", "$11$ m/s", "$12$ m/s", "$15$ m/s", "$19$ m/s"],
        jawaban: 1,
        pembahasan: "$v(t) = v_0 + \\int_0^t (6t - 2)dt$<br>$= 3 + [3t^2 - 2t]_0^2$<br>$= 3 + (12 - 4)$<br>$= 11$ m/s.",
        trik_cepat: "Integralkan percepatan terhadap waktu lalu tambahkan $v_0$."
    },
    {
        id: 21,
        teks: "Sebuah pesawat terbang mendatar pada ketinggian $500$ m dengan kecepatan $100$ m/s menjatuhkan paket bantuan. Jika $g = 10$ m/s$^2$, jarak mendatar jatuhnya paket diukur dari titik tepat di bawah pesawat saat paket dilepaskan adalah ....",
        gambar: "",
        opsi: ["$100$ m", "$500$ m", "$1.000$ m", "$1.500$ m", "$2.000$ m"],
        jawaban: 2,
        pembahasan: "Waktu jatuh: $t = \\sqrt{\\frac{2h}{g}}$<br>$= \\sqrt{\\frac{2(500)}{10}}$<br>$= \\sqrt{100}$<br>$= 10$ s.<br>Jarak mendatar: $x = v_x \\cdot t = 100 \\times 10 = 1.000$ m.",
        trik_cepat: "$x = v_0 \\sqrt{2h/g}$."
    },
    {
        id: 22,
        teks: "Mobil A dan mobil B terpisah sejauh $200$ m dan bergerak saling mendekat pada lintasan lurus dengan kecepatan tetap masing-masing $15$ m/s dan $25$ m/s. Keduanya akan berpapasan setelah bergerak selama ....",
        gambar: "",
        opsi: ["$4$ s", "$5$ s", "$8$ s", "$10$ s", "$20$ s"],
        jawaban: 1,
        pembahasan: "$s_A + s_B = 200$<br>$\\Rightarrow 15t + 25t = 200$<br>$\\Rightarrow 40t = 200$<br>$\\Rightarrow t = 5$ s.",
        trik_cepat: "Saling mendekat (GLB): $t = \\frac{\\Delta s}{v_A + v_B}$."
    },

    // =========================================================================
    // BAB 3: DINAMIKA GERAK PARTIKEL, MOMENTUM & ROTASI (23-38)
    // =========================================================================
    {
        id: 23,
        teks: "Sebuah balok bermassa $5$ kg ditarik pada lantai datar licin dengan gaya mendatar $20$ N. Percepatan yang dialami balok adalah ....",
        gambar: "",
        opsi: ["$0,25$ m/s$^2$", "$2$ m/s$^2$", "$4$ m/s$^2$", "$25$ m/s$^2$", "$100$ m/s$^2$"],
        jawaban: 2,
        pembahasan: "Hukum II Newton: $a = \\frac{\\Sigma F}{m} = \\frac{20}{5} = 4$ m/s$^2$.",
        trik_cepat: "$a = F / m$."
    },
    {
        id: 24,
        teks: "Seseorang bermassa $60$ kg berada di dalam lift yang sedang bergerak ke atas dengan percepatan $2$ m/s$^2$. Jika $g = 10$ m/s$^2$, gaya normal lantai lift terhadap orang tersebut adalah ....",
        gambar: "",
        opsi: ["$120$ N", "$480$ N", "$600$ N", "$720$ N", "$840$ N"],
        jawaban: 3,
        pembahasan: "Lift dipercepat ke atas: $N - w = m a$<br>$\\Rightarrow N = m(g + a) = 60(10 + 2) = 720$ N.",
        trik_cepat: "Lift naik dipercepat: $N = m(g+a)$; turun dipercepat: $N = m(g-a)$."
    },
    {
        id: 25,
        teks: "Dua balok bermassa $m_1 = 2$ kg dan $m_2 = 3$ kg dihubungkan dengan tali ringan melalui katrol licin (pesawat Atwood). Jika $g = 10$ m/s$^2$, percepatan sistem adalah ....",
        gambar: "",
        opsi: ["$1$ m/s$^2$", "$2$ m/s$^2$", "$4$ m/s$^2$", "$5$ m/s$^2$", "$10$ m/s$^2$"],
        jawaban: 1,
        pembahasan: "$a = \\frac{(m_2 - m_1)g}{m_1 + m_2}$<br>$= \\frac{(3 - 2)(10)}{2 + 3}$<br>$= \\frac{10}{5}$<br>$= 2$ m/s$^2$.",
        trik_cepat: "Katrol licin dua beban: $a = \\frac{\\Delta m}{\\Sigma m} g$."
    },
    {
        id: 26,
        teks: "Sebuah balok bermassa $4$ kg berada di atas lantai kasar dengan koefisien gesek statis $\\mu_s = 0,4$ dan koefisien gesek kinetis $\\mu_k = 0,2$. Jika balok ditarik gaya horizontal $12$ N dan $g = 10$ m/s$^2$, besar gaya gesek yang bekerja pada balok adalah ....",
        gambar: "",
        opsi: ["$8$ N", "$12$ N", "$16$ N", "$20$ N", "$40$ N"],
        jawaban: 1,
        pembahasan: "$f_{s,\\text{max}} = \\mu_s m g = 0,4(4)(10) = 16$ N.<br>Karena gaya tarik $F = 12\\text{ N} < f_{s,\\text{max}}$, balok tetap diam dan gaya gesek statis sama dengan gaya tarik, yaitu $12$ N.",
        trik_cepat: "Cek $f_{s,\\text{max}}$ dulu! Jika $F < f_{s,\\text{max}}$, benda diam dan $f = F$."
    },
    {
        id: 27,
        teks: "Sebuah benda bermassa $2$ kg meluncur menuruni bidang miring licin dengan sudut kemiringan $30^\\circ$. Jika $g = 10$ m/s$^2$, percepatan benda menuruni bidang miring adalah ....",
        gambar: "",
        opsi: ["$2,5$ m/s$^2$", "$5$ m/s$^2$", "$5\\sqrt{3}$ m/s$^2$", "$10$ m/s$^2$", "$20$ m/s$^2$"],
        jawaban: 1,
        pembahasan: "$a = g \\sin 30^\\circ = 10 \\times 0,5 = 5$ m/s$^2$.",
        trik_cepat: "Bidang miring licin: $a = g\\sin\\theta$ (tidak bergantung massa)."
    },
    {
        id: 28,
        teks: "Sebuah bola kasti bermassa $0,2$ kg dilempar mendatar ke dinding dengan kelajuan $15$ m/s dan memantul kembali dengan kelajuan $10$ m/s. Besar impuls yang diberikan dinding pada bola adalah ....",
        gambar: "",
        opsi: ["$1$ N·s", "$2$ N·s", "$3$ N·s", "$5$ N·s", "$25$ N·s"],
        jawaban: 3,
        pembahasan: "$I = \\Delta p = m(v_2 - v_1)$.<br>Misal arah pantul positif ($+10$ m/s) dan arah datang negatif ($-15$ m/s): $I = 0,2(10 - (-15)) = 0,2(25) = 5$ N·s.",
        trik_cepat: "Benda memantul: jumlahkan kelajuannya lalu kalikan massa, $I = m(v_1 + v_2)$."
    },
    {
        id: 29,
        teks: "Bola A bermassa $2$ kg bergerak ke kanan dengan kecepatan $6$ m/s menumbuk bola B bermassa $4$ kg yang diam di atas lantai licin. Jika setelah tumbukan kedua bola menyatu (tidak lenting sama sekali), kecepatan keduanya setelah tumbukan adalah ....",
        gambar: "",
        opsi: ["$1$ m/s", "$2$ m/s", "$3$ m/s", "$4$ m/s", "$6$ m/s"],
        jawaban: 1,
        pembahasan: "Kekekalan momentum: $m_A v_A + m_B v_B = (m_A + m_B)v'$<br>$\\Rightarrow 2(6) + 4(0) = (2 + 4)v'$<br>$\\Rightarrow 12 = 6v'$<br>$\\Rightarrow v' = 2$ m/s.",
        trik_cepat: "Menyatu: $v' = \\frac{m_1 v_1 + m_2 v_2}{m_1 + m_2}$."
    },
    {
        id: 30,
        teks: "Sebuah bola jatuh bebas dari ketinggian $9$ m di atas lantai dan memantul pertama kali setinggi $4$ m. Koefisien restitusi antara bola dan lantai adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{3}$", "$\\frac{4}{9}$", "$\\frac{2}{3}$", "$\\frac{3}{4}$", "$\\frac{9}{4}$"],
        jawaban: 2,
        pembahasan: "$e = \\sqrt{\\frac{h_2}{h_1}}$<br>$= \\sqrt{\\frac{4}{9}}$<br>$= \\frac{2}{3}$.",
        trik_cepat: "Bola memantul di lantai: $e = \\sqrt{h_{\\text{pantul}} / h_{\\text{awal}}}$."
    },
    {
        id: 31,
        teks: "Sebuah batang homogen ringan panjang $2$ m diporoskan di salah satu ujungnya. Pada ujung lainnya diberikan gaya $10$ N membentuk sudut $30^\\circ$ terhadap batang. Besar momen gaya (torsi) terhadap poros adalah ....",
        gambar: "",
        opsi: ["$5$ N·m", "$10$ N·m", "$10\\sqrt{3}$ N·m", "$20$ N·m", "$40$ N·m"],
        jawaban: 1,
        pembahasan: "$\\tau = F \\cdot L \\sin 30^\\circ$<br>$= 10 \\times 2 \\times 0,5$<br>$= 10$ N·m.",
        trik_cepat: "$\\tau = r F \\sin\\theta$."
    },
    {
        id: 32,
        teks: "Empat buah partikel masing-masing bermassa $2$ kg terletak pada sudut-sudut persegi dengan panjang sisi $2$ m. Momen inersia sistem jika diputar terhadap sumbu yang melalui pusat persegi dan tegak lurus bidang persegi adalah ....",
        gambar: "",
        opsi: ["$4$ kg·m$^2$", "$8$ kg·m$^2$", "$16$ kg·m$^2$", "$32$ kg·m$^2$", "$64$ kg·m$^2$"],
        jawaban: 2,
        pembahasan: "Diagonal persegi $= 2\\sqrt{2}$ m, sehingga jarak tiap partikel ke pusat $r = \\sqrt{2}$ m ($r^2 = 2$ m$^2$).<br>$I = \\Sigma m_i r_i^2$<br>$= 4 \\times (2 \\times 2)$<br>$= 16$ kg·m$^2$.",
        trik_cepat: "$I = \\Sigma m r^2$; kuadrat setengah diagonal persegi = $\\frac{1}{2}s^2$."
    },
    {
        id: 33,
        teks: "Sebuah silinder pejal ($I = \\frac{1}{2}mR^2$) bermassa $4$ kg dan jari-jari $0,2$ m menggelinding tanpa slip dengan kelajuan linear pusat massa $5$ m/s. Energi kinetik total silinder tersebut adalah ....",
        gambar: "",
        opsi: ["$25$ J", "$50$ J", "$75$ J", "$100$ J", "$150$ J"],
        jawaban: 2,
        pembahasan: "$E_{k,\\text{total}} = E_{k,\\text{trans}} + E_{k,\\text{rot}}$<br>$= \\frac{1}{2}mv^2(1 + k)$.<br>Untuk silinder pejal $k = \\frac{1}{2}$: $E_{k,\\text{total}} = \\frac{1}{2}(4)(5^2)\\left(1 + \\frac{1}{2}\\right)$<br>$= 50 \\times 1,5$<br>$= 75$ J.",
        trik_cepat: "Menggelinding: $E_{k,\\text{total}} = \\frac{1}{2}mv^2(1 + k)$."
    },
    {
        id: 34,
        teks: "Seorang penari balet berputar dengan tangan terentang memiliki momen inersia $4$ kg·m$^2$ dan kecepatan sudut $3$ rad/s. Ketika tangannya dilipat ke dada, momen inersianya menjadi $1,5$ kg·m$^2$. Kecepatan sudut penari sekarang adalah ....",
        gambar: "",
        opsi: ["$4,5$ rad/s", "$6$ rad/s", "$8$ rad/s", "$9$ rad/s", "$12$ rad/s"],
        jawaban: 2,
        pembahasan: "Kekekalan momentum sudut: $I_1 \\omega_1 = I_2 \\omega_2$<br>$\\Rightarrow 4 \\times 3 = 1,5 \\times \\omega_2$<br>$\\Rightarrow \\omega_2 = \\frac{12}{1,5} = 8$ rad/s.",
        trik_cepat: "$I_1 \\omega_1 = I_2 \\omega_2$."
    },
    {
        id: 35,
        teks: "Sebuah bidang homogen berbentuk huruf T terdiri atas batang horizontal ($6\\text{ cm} \\times 2\\text{ cm}$) di bagian atas dan batang vertikal ($2\\text{ cm} \\times 6\\text{ cm}$) tepat di tengah bawahnya. Letak titik berat bidang diukur dari alas paling bawah adalah ....",
        gambar: "",
        opsi: ["$4,0$ cm", "$4,5$ cm", "$5,0$ cm", "$5,5$ cm", "$6,0$ cm"],
        jawaban: 2,
        pembahasan: "Luas 1 (bawah, $2\\times 6$): $A_1 = 12\\text{ cm}^2$, $y_1 = 3$ cm.<br>Luas 2 (atas, $6\\times 2$): $A_2 = 12\\text{ cm}^2$, $y_2 = 6 + 1 = 7$ cm.<br>Karena $A_1 = A_2$, maka $y_0 = \\frac{y_1 + y_2}{2}$<br>$= \\frac{3 + 7}{2}$<br>$= 5,0$ cm.",
        trik_cepat: "Jika luas dua bagian sama ($A_1 = A_2$), titik berat tinggal rata-rata koordinatnya."
    },
    {
        id: 36,
        teks: "Sebuah mobil menikung pada jalan datar kasar dengan jari-jari kelengkungan $40$ m. Jika koefisien gesek statis antara ban dan aspal $0,4$ dan $g = 10$ m/s$^2$, kelajuan maksimum mobil agar tidak tergelincir adalah ....",
        gambar: "",
        opsi: ["$4\\sqrt{10}$ m/s", "$10$ m/s", "$16$ m/s", "$20$ m/s", "$40$ m/s"],
        jawaban: 0,
        pembahasan: "Gaya gesek statis berperan sebagai gaya sentripetal: $\\mu_s m g = \\frac{m v_{max}^2}{R}$<br>$\\Rightarrow v_{max} = \\sqrt{\\mu_s g R}$<br>$= \\sqrt{0,4 \\times 10 \\times 40}$<br>$= \\sqrt{160}$<br>$= 4\\sqrt{10}$ m/s.",
        trik_cepat: "Tikungan datar: $v_{max} = \\sqrt{\\mu_s g R}$."
    },
    {
        id: 37,
        teks: "Sebuah katrol silinder pejal ($I = \\frac{1}{2}MR^2$) bermassa $2$ kg ditarik pada tepinya dengan gaya konstan $10$ N. Percepatan tangensial tepi katrol adalah ....",
        gambar: "",
        opsi: ["$2,5$ m/s$^2$", "$5$ m/s$^2$", "$10$ m/s$^2$", "$15$ m/s$^2$", "$20$ m/s$^2$"],
        jawaban: 2,
        pembahasan: "$\\tau = I \\alpha$<br>$\\Rightarrow F R = \\left(\\frac{1}{2}MR^2\\right)\\left(\\frac{a}{R}\\right)$<br>$\\Rightarrow F = \\frac{1}{2}M a$<br>$\\Rightarrow 10 = \\frac{1}{2}(2)a$<br>$\\Rightarrow a = 10$ m/s$^2$.",
        trik_cepat: "Silinder pejal ditarik tepinya: $a = \\frac{F}{\\frac{1}{2}M} = \\frac{2F}{M}$."
    },
    {
        id: 38,
        teks: "Gaya gravitasi antara dua benda bermassa $m_1$ dan $m_2$ yang berjarak $r$ adalah $F$. Jika jarak kedua benda dijauhkan menjadi $2r$, gaya gravitasinya menjadi ....",
        gambar: "",
        opsi: ["$\\frac{1}{4}F$", "$\\frac{1}{2}F$", "$F$", "$2F$", "$4F$"],
        jawaban: 0,
        pembahasan: "$F \\propto \\frac{1}{r^2}$.<br>Jika $r' = 2r$, maka $F' = \\frac{F}{(2)^2} = \\frac{1}{4}F$.",
        trik_cepat: "Gaya gravitasi berbanding terbalik dengan kuadrat jarak ($1/r^2$)."
    },

    // =========================================================================
    // BAB 4: FLUIDA STATIS & DINAMIS (39-50)
    // =========================================================================
    {
        id: 39,
        teks: "Seekor ikan berenang pada kedalaman $4$ m di bawah permukaan danau air tawar ($\\rho = 1.000$ kg/m$^3$). Jika tekanan atmosfer $10^5$ Pa dan $g = 10$ m/s$^2$, tekanan mutlak yang dialami ikan adalah ....",
        gambar: "",
        opsi: ["$4 \\times 10^4$ Pa", "$6 \\times 10^4$ Pa", "$1,04 \\times 10^5$ Pa", "$1,4 \\times 10^5$ Pa", "$5 \\times 10^5$ Pa"],
        jawaban: 3,
        pembahasan: "$P = P_0 + \\rho g h$<br>$= 10^5 + (1.000)(10)(4)$<br>$= 100.000 + 40.000$<br>$= 1,4 \\times 10^5$ Pa.",
        trik_cepat: "Tekanan mutlak = $P_0 + \\rho g h$; tekanan hidrostatis saja = $\\rho g h$."
    },
    {
        id: 40,
        teks: "Pipa U diisi air ($\\rho_1 = 1$ g/cm$^3$) dan minyak ($\\rho_2 = 0,8$ g/cm$^3$). Jika tinggi kolom minyak $10$ cm, selisih tinggi permukaan air dan minyak di kedua kaki pipa U adalah ....",
        gambar: "",
        opsi: ["$2$ cm", "$4$ cm", "$6$ cm", "$8$ cm", "$10$ cm"],
        jawaban: 0,
        pembahasan: "$\\rho_1 h_1 = \\rho_2 h_2$<br>$\\Rightarrow (1)h_1 = (0,8)(10)$<br>$\\Rightarrow h_1 = 8$ cm.<br>Selisih tinggi $\\Delta h = h_2 - h_1 = 10 - 8 = 2$ cm.",
        trik_cepat: "Hitung tinggi air $h_{\\text{air}} = \\rho_{\\text{minyak}} h_{\\text{minyak}}$, lalu kurangkan."
    },
    {
        id: 41,
        teks: "Sebuah mesin pengangkat mobil hidrolik memiliki luas penampang penghisap kecil $20$ cm$^2$ dan penghisap besar $0,4$ m$^2$. Gaya minimal pada penghisap kecil untuk mengangkat mobil bermassa $1.600$ kg ($g = 10$ m/s$^2$) adalah ....",
        gambar: "",
        opsi: ["$40$ N", "$80$ N", "$160$ N", "$320$ N", "$800$ N"],
        jawaban: 1,
        pembahasan: "$A_1 = 20$ cm$^2 = 2 \\times 10^{-3}$ m$^2$, $A_2 = 0,4$ m$^2$, $F_2 = mg = 16.000$ N.<br>$\\frac{F_1}{A_1} = \\frac{F_2}{A_2}$<br>$\\Rightarrow F_1 = 16.000 \\times \\frac{2 \\times 10^{-3}}{0,4}$<br>$= 80$ N.",
        trik_cepat: "Samakan satuan luas ($1\\text{ m}^2 = 10^4\\text{ cm}^2$), lalu $F_1 = F_2 (A_1/A_2)$."
    },
    {
        id: 42,
        teks: "Sebuah balok kayu terapung di air dengan $75\\%$ volumenya tercelup. Jika balok tersebut dipindahkan ke dalam minyak bermassa jenis $0,8$ g/cm$^3$, persentase volume balok yang tercelup di minyak adalah ....",
        gambar: "",
        opsi: ["$60\\%$", "$75\\%$", "$80\\%$", "$90\\%$", "$93,75\\%$"],
        jawaban: 4,
        pembahasan: "Di air: $\\rho_b = 0,75 \\times 1 = 0,75$ g/cm$^3$.<br>Di minyak: $\\frac{V_{tc}}{V_b} = \\frac{\\rho_b}{\\rho_{\\text{minyak}}}$<br>$= \\frac{0,75}{0,8}$<br>$= 0,9375$<br>$= 93,75\\%$.",
        trik_cepat: "$\\%V_{\\text{minyak}} = \\frac{\\%V_{\\text{air}}}{\\rho_{\\text{minyak}}}$ (dalam g/cm$^3$)."
    },
    {
        id: 43,
        teks: "Sebuah benda di udara beratnya $50$ N. Ketika dicelupkan seluruhnya ke dalam air ($\\rho = 1.000$ kg/m$^3$), beratnya seolah-olah menjadi $30$ N. Massa jenis benda tersebut adalah .... ($g = 10$ m/s$^2$)",
        gambar: "",
        opsi: ["$1.500$ kg/m$^3$", "$2.000$ kg/m$^3$", "$2.500$ kg/m$^3$", "$3.000$ kg/m$^3$", "$5.000$ kg/m$^3$"],
        jawaban: 2,
        pembahasan: "$F_A = 50 - 30 = 20$ N.<br>$\\frac{\\rho_b}{\\rho_{\\text{air}}} = \\frac{w_{\\text{udara}}}{F_A}$<br>$\\Rightarrow \\rho_b = 1.000 \\times \\frac{50}{20}$<br>$= 2.500$ kg/m$^3$.",
        trik_cepat: "Tenggelam penuh: $\\rho_b = \\rho_f \\times \\frac{w_{\\text{udara}}}{w_{\\text{udara}} - w_{\\text{fluida}}}$."
    },
    {
        id: 44,
        teks: "Kenaikan permukaan air di dalam pipa kapiler berbanding terbalik dengan ....",
        gambar: "",
        opsi: [
            "Tegangan permukaan zat cair",
            "Kosinus sudut kontak",
            "Jari-jari pipa kapiler",
            "Percepatan gravitasi saja",
            "Konstanta kapilaritas"
        ],
        jawaban: 2,
        pembahasan: "Rumus kapilaritas: $h = \\frac{2\\gamma \\cos\\theta}{\\rho g r}$.<br>Tinggi kenaikan $h$ berbanding terbalik dengan massa jenis $\\rho$, gravitasi $g$, dan jari-jari pipa $r$.",
        trik_cepat: "Makin sempit pipa ($r$ kecil), makin tinggi air naik ($h$ besar)."
    },
    {
        id: 45,
        teks: "Air mengalir melalui pipa berdiameter $4$ cm dengan kecepatan $2$ m/s menuju pipa berdiameter $2$ cm. Kecepatan aliran air pada pipa berdiameter $2$ cm adalah ....",
        gambar: "",
        opsi: ["$1$ m/s", "$4$ m/s", "$8$ m/s", "$16$ m/s", "$32$ m/s"],
        jawaban: 2,
        pembahasan: "Asas kontinuitas: $A_1 v_1 = A_2 v_2$<br>$\\Rightarrow d_1^2 v_1 = d_2^2 v_2$<br>$\\Rightarrow 4^2(2) = 2^2 v_2$<br>$\\Rightarrow 32 = 4 v_2$<br>$\\Rightarrow v_2 = 8$ m/s.",
        trik_cepat: "Kecepatan berbanding terbalik dengan kuadrat diameter: $v_2 = v_1 (d_1/d_2)^2$."
    },
    {
        id: 46,
        teks: "Sebuah tangki terbuka berisi air setinggi $3,2$ m. Pada ketinggian $1,4$ m dari dasar tangki terdapat lubang kebocoran kecil. Jika $g = 10$ m/s$^2$, kelajuan air yang memancar keluar dari lubang adalah ....",
        gambar: "",
        opsi: ["$4$ m/s", "$6$ m/s", "$8$ m/s", "$10$ m/s", "$12$ m/s"],
        jawaban: 1,
        pembahasan: "Kedalaman lubang dari permukaan air $h = 3,2 - 1,4 = 1,8$ m.<br>Teorema Torricelli: $v = \\sqrt{2gh}$<br>$= \\sqrt{2(10)(1,8)}$<br>$= \\sqrt{36}$<br>$= 6$ m/s.",
        trik_cepat: "$v = \\sqrt{2g h_{\\text{dari permukaan}}}$."
    },
    {
        id: 47,
        teks: "Sebuah tangki berisi air setinggi $5$ m memiliki lubang kebocoran kecil pada ketinggian $1,8$ m dari dasar tangki. Jarak mendatar pancaran air menyentuh tanah diukur dari dinding tangki adalah ....",
        gambar: "",
        opsi: ["$2,4$ m", "$3,2$ m", "$3,6$ m", "$4,8$ m", "$6,4$ m"],
        jawaban: 3,
        pembahasan: "Tinggi permukaan air di atas lubang $h_1 = 5 - 1,8 = 3,2$ m dan tinggi lubang dari dasar $h_2 = 1,8$ m.<br>$x = 2\\sqrt{h_1 \\cdot h_2}$<br>$= 2\\sqrt{3,2 \\times 1,8}$<br>$x = 2\\sqrt{5,76} = 2(2,4) = 4,8$ m.",
        trik_cepat: "Jarak pancaran tangki bocor: $x = 2\\sqrt{h_{\\text{atas}} \\cdot h_{\\text{bawah}}}$."
    },
    {
        id: 48,
        teks: "Sayap pesawat terbang dirancang agar dapat menghasilkan gaya angkat ke atas. Syarat agar pesawat dapat terangkat adalah ....",
        gambar: "",
        opsi: [
            "$v_{\\text{atas}} < v_{\\text{bawah}}$ dan $P_{\\text{atas}} > P_{\\text{bawah}}$",
            "$v_{\\text{atas}} > v_{\\text{bawah}}$ dan $P_{\\text{atas}} < P_{\\text{bawah}}$",
            "$v_{\\text{atas}} > v_{\\text{bawah}}$ dan $P_{\\text{atas}} > P_{\\text{bawah}}$",
            "$v_{\\text{atas}} = v_{\\text{bawah}}$ dan $P_{\\text{atas}} < P_{\\text{bawah}}$",
            "$v_{\\text{atas}} < v_{\\text{bawah}}$ dan $P_{\\text{atas}} < P_{\\text{bawah}}$"
        ],
        jawaban: 1,
        pembahasan: "Menurut Asas Bernoulli, aliran udara di atas sayap harus lebih cepat ($v_{\\text{atas}} > v_{\\text{bawah}}$) sehingga tekanannya lebih kecil ($P_{\\text{atas}} < P_{\\text{bawah}}$), menimbulkan selisih tekanan yang mendorong sayap ke atas.",
        trik_cepat: "Bernoulli: Kecepatan tinggi $\\rightarrow$ Tekanan rendah."
    },
    {
        id: 49,
        teks: "Sebuah sayap pesawat memiliki luas total $40$ m$^2$. Kelajuan udara di atas sayap $250$ m/s dan di bawah sayap $200$ m/s. Jika massa jenis udara $1,2$ kg/m$^3$, gaya angkat yang bekerja pada sayap tersebut adalah ....",
        gambar: "",
        opsi: ["$270$ kN", "$450$ kN", "$540$ kN", "$900$ kN", "$1.080$ kN"],
        jawaban: 2,
        pembahasan: "$F_{\\text{angkat}} = \\frac{1}{2}\\rho (v_{\\text{atas}}^2 - v_{\\text{bawah}}^2) A$<br>$= \\frac{1}{2}(1,2)(250^2 - 200^2)(40)$<br>$= 0,6(62.500 - 40.000)(40)$<br>$= 0,6(22.500)(40)$<br>$= 540.000\\text{ N}$<br>$= 540$ kN.",
        trik_cepat: "$F = \\frac{1}{2}\\rho (v_2^2 - v_1^2) A$."
    },
    {
        id: 50,
        teks: "Air mengalir di dalam pipa horizontal dari bagian berpenampang besar ($v_1 = 2$ m/s, $P_1 = 1,5 \\times 10^5$ Pa) menuju bagian sempit ($v_2 = 6$ m/s). Jika $\\rho_{\\text{air}} = 1.000$ kg/m$^3$, tekanan air di bagian sempit adalah ....",
        gambar: "",
        opsi: ["$1,18 \\times 10^5$ Pa", "$1,34 \\times 10^5$ Pa", "$1,50 \\times 10^5$ Pa", "$1,66 \\times 10^5$ Pa", "$1,82 \\times 10^5$ Pa"],
        jawaban: 1,
        pembahasan: "$P_2 = P_1 - \\frac{1}{2}\\rho(v_2^2 - v_1^2)$<br>$= 150.000 - \\frac{1}{2}(1.000)(36 - 4)$<br>$= 150.000 - 16.000$<br>$= 134.000\\text{ Pa}$<br>$= 1,34 \\times 10^5$ Pa.",
        trik_cepat: "Pipa mendatar: $P_2 = P_1 - \\frac{1}{2}\\rho(v_2^2 - v_1^2)$."
    },

    // =========================================================================
    // BAB 5: GELOMBANG, BUNYI, DAN CAHAYA (51-68)
    // =========================================================================
    {
        id: 51,
        teks: "Persamaan gelombang berjalan pada tali dinyatakan oleh $y = 0,04 \\sin(20\\pi t - 0,5\\pi x)$ dengan $x$ dan $y$ dalam meter serta $t$ dalam sekon. Cepat rambat gelombang tersebut adalah ....",
        gambar: "",
        opsi: ["$10$ m/s", "$20$ m/s", "$40$ m/s", "$50$ m/s", "$100$ m/s"],
        jawaban: 2,
        pembahasan: "$\\omega = 20\\pi$ rad/s dan $k = 0,5\\pi$ m$^{-1}$.<br>Cepat rambat $v = \\frac{\\omega}{k}$<br>$= \\frac{20\\pi}{0,5\\pi}$<br>$= 40$ m/s.",
        trik_cepat: "Cepat rambat gelombang berjalan: $v = \\frac{\\text{koefisien } t}{\\text{koefisien } x}$."
    },
    {
        id: 52,
        teks: "Sebuah gelombang merambat dengan kecepatan $340$ m/s dan frekuensi $170$ Hz. Jarak antara dua titik berdekatan yang memiliki beda fase $90^\\circ$ adalah ....",
        gambar: "",
        opsi: ["$0,25$ m", "$0,50$ m", "$1,00$ m", "$1,50$ m", "$2,00$ m"],
        jawaban: 1,
        pembahasan: "$\\lambda = \\frac{v}{f} = \\frac{340}{170} = 2$ m.<br>Beda fase $90^\\circ = \\frac{1}{4}$ gelombang, sehingga $\\Delta x = \\frac{1}{4}\\lambda$<br>$= \\frac{1}{4}(2)$<br>$= 0,50$ m.",
        trik_cepat: "$\\Delta \\varphi = \\frac{\\Delta x}{\\lambda}$; $90^\\circ = \\frac{1}{4}\\lambda$."
    },
    {
        id: 53,
        teks: "Seutas tali panjang $2$ m digetarkan sehingga membentuk $5$ simpul gelombang stasioner ujung terikat. Panjang gelombang yang terbentuk pada tali adalah ....",
        gambar: "",
        opsi: ["$0,4$ m", "$0,5$ m", "$0,8$ m", "$1,0$ m", "$2,0$ m"],
        jawaban: 3,
        pembahasan: "Pada gelombang stasioner, $5$ simpul berarti terbentuk $4$ perut ($2$ gelombang penuh): $2\\lambda = 2\\text{ m}$<br>$\\Rightarrow \\lambda = 1,0$ m.",
        trik_cepat: "Jumlah gelombang = $\\frac{\\text{jumlah simpul} - 1}{2}$."
    },
    {
        id: 54,
        teks: "Seutas dawai panjang $1$ m dan massa $20$ gram ditegangkan dengan gaya $200$ N. Cepat rambat gelombang transversal pada dawai tersebut adalah ....",
        gambar: "",
        opsi: ["$10$ m/s", "$50$ m/s", "$100$ m/s", "$200$ m/s", "$1.000$ m/s"],
        jawaban: 2,
        pembahasan: "Hukum Melde: $\\mu = \\frac{m}{L}$<br>$= \\frac{0,02\\text{ kg}}{1\\text{ m}}$<br>$= 0,02$ kg/m.<br>$v = \\sqrt{\\frac{F}{\\mu}}$<br>$= \\sqrt{\\frac{200}{0,02}}$<br>$= \\sqrt{10.000}$<br>$= 100$ m/s.",
        trik_cepat: "Melde: $v = \\sqrt{\\frac{F \\cdot L}{m}}$ (ubah gram ke kg)."
    },
    {
        id: 55,
        teks: "Sebuah pipa organa terbuka panjang $40$ cm ditiup hingga menghasilkan nada atas pertama. Jika cepat rambat bunyi di udara $320$ m/s, frekuensi nada yang dihasilkan adalah ....",
        gambar: "",
        opsi: ["$200$ Hz", "$400$ Hz", "$600$ Hz", "$800$ Hz", "$1.200$ Hz"],
        jawaban: 3,
        pembahasan: "Pipa organa terbuka: $f_n = \\frac{(n + 1)v}{2L}$.<br>Nada atas pertama ($n = 1$): $f_1 = \\frac{(1 + 1)(320)}{2(0,4)}$<br>$= \\frac{640}{0,8}$<br>$= 800$ Hz.",
        trik_cepat: "Pipa terbuka: $f_0 : f_1 : f_2 = 1 : 2 : 3$ dengan $f_0 = v/(2L)$."
    },
    {
        id: 56,
        teks: "Sebuah pipa organa tertutup memiliki panjang $25$ cm. Jika cepat rambat bunyi $340$ m/s, frekuensi nada dasar pipa organa tersebut adalah ....",
        gambar: "",
        opsi: ["$170$ Hz", "$340$ Hz", "$510$ Hz", "$680$ Hz", "$1.020$ Hz"],
        jawaban: 1,
        pembahasan: "Pipa organa tertutup nada dasar ($n=0$): $f_0 = \\frac{v}{4L}$<br>$= \\frac{340}{4(0,25)}$<br>$= \\frac{340}{1}$<br>$= 340$ Hz.",
        trik_cepat: "Pipa tertutup: $f_0 = v/(4L)$, harmoniknya ganjil ($1 : 3 : 5$)."
    },
    {
        id: 57,
        teks: "Mobil ambulans bergerak dengan kelajuan $20$ m/s sambil membunyikan sirene berfrekuensi $640$ Hz mendekati seorang pengamat yang diam di tepi jalan. Jika cepat rambat bunyi di udara $340$ m/s, frekuensi bunyi yang didengar pengamat adalah ....",
        gambar: "",
        opsi: ["$600$ Hz", "$604$ Hz", "$680$ Hz", "$700$ Hz", "$720$ Hz"],
        jawaban: 2,
        pembahasan: "Efek Doppler ($v_p = 0$, sumber mendekat $v_s = -20$ m/s): $f_p = \\frac{v}{v - v_s} f_s$<br>$= \\frac{340}{340 - 20}(640)$<br>$= \\frac{340}{320}(640)$<br>$= 680$ Hz.",
        trik_cepat: "Sumber mendekat $\\rightarrow$ frekuensi terdengar lebih tinggi (penyebut dikurang)."
    },
    {
        id: 58,
        teks: "Taraf intensitas sebuah mesin adalah $60$ dB. Jika $100$ mesin yang identik dibunyikan secara bersamaan, taraf intensitas bunyinya menjadi ....",
        gambar: "",
        opsi: ["$62$ dB", "$70$ dB", "$80$ dB", "$160$ dB", "$6.000$ dB"],
        jawaban: 2,
        pembahasan: "$TI_n = TI_1 + 10 \\log n$<br>$= 60 + 10 \\log(100)$<br>$= 60 + 10(2)$<br>$= 80$ dB.",
        trik_cepat: "$TI_n = TI_1 + 10 \\log n$."
    },
    {
        id: 59,
        teks: "Taraf intensitas bunyi pada jarak $2$ m dari sumber bunyi adalah $70$ dB. Pada jarak $20$ m dari sumber bunyi tersebut, taraf intensitasnya menjadi ....",
        gambar: "",
        opsi: ["$35$ dB", "$50$ dB", "$60$ dB", "$68$ dB", "$90$ dB"],
        jawaban: 1,
        pembahasan: "$TI_2 = TI_1 - 20 \\log\\left(\\frac{r_2}{r_1}\\right)$<br>$= 70 - 20 \\log\\left(\\frac{20}{2}\\right)$<br>$= 70 - 20(1)$<br>$= 50$ dB.",
        trik_cepat: "Jarak menjauh $10\\times$ lipat $\\rightarrow$ TI berkurang $20$ dB."
    },
    {
        id: 60,
        teks: "Dua garpu tala berfrekuensi $440$ Hz dan $444$ Hz dibunyikan bersamaan. Jumlah layangan bunyi yang terdengar dalam waktu $5$ sekon adalah ....",
        gambar: "",
        opsi: ["$4$ layangan", "$8$ layangan", "$10$ layangan", "$20$ layangan", "$40$ layangan"],
        jawaban: 3,
        pembahasan: "Frekuensi pelayangan $f_L = |f_1 - f_2| = |440 - 444| = 4$ Hz ($4$ layangan per sekon).<br>Dalam $5$ sekon = $4 \\times 5 = 20$ layangan.",
        trik_cepat: "$f_{\\text{layangan}} = |f_1 - f_2|$, lalu kalikan waktu."
    },
    {
        id: 61,
        teks: "Pada percobaan interferensi celah ganda Young, jarak antarkedua celah $0,2$ mm dan layar diletakkan sejauh $1$ m dari celah. Jika panjang gelombang cahaya yang digunakan $500$ nm, jarak antara terang pusat dan terang kedua adalah ....",
        gambar: "",
        opsi: ["$1,25$ mm", "$2,5$ mm", "$5,0$ mm", "$7,5$ mm", "$10$ mm"],
        jawaban: 2,
        pembahasan: "$\\frac{d \\cdot p}{L} = n \\lambda$<br>$\\Rightarrow p = \\frac{n \\lambda L}{d}$<br>$= \\frac{2 \\times (5 \\times 10^{-7}) \\times 1}{2 \\times 10^{-4}}$<br>$= 5 \\times 10^{-3}\\text{ m}$<br>$= 5,0$ mm.",
        trik_cepat: "$p = \\frac{n \\lambda L}{d}$ (ubah mm ke m dan nm ke $10^{-9}$ m)."
    },
    {
        id: 62,
        teks: "Seberkas cahaya monokromatik dengan panjang gelombang $600$ nm jatuh tegak lurus pada kisi difraksi yang memiliki $500$ goresan/mm. Orde maksimum terang yang dapat diamati pada layar adalah ....",
        gambar: "",
        opsi: ["Orde ke-2", "Orde ke-3", "Orde ke-4", "Orde ke-5", "Orde ke-6"],
        jawaban: 1,
        pembahasan: "$d = \\frac{1\\text{ mm}}{500} = 2 \\times 10^{-6}$ m.<br>Syarat orde maksimum $\\sin\\theta = 1$: $n_{max} = \\frac{d}{\\lambda}$<br>$= \\frac{2 \\times 10^{-6}}{6 \\times 10^{-7}}$<br>$= 3,33$.<br>Maka orde maksimum yang terlihat adalah orde ke-3.",
        trik_cepat: "$n_{max} = \\lfloor d / \\lambda \\rfloor$ (pembulatan ke bawah)."
    },
    {
        id: 63,
        teks: "Cahaya alami (tak terpolarisasi) dengan intensitas $I_0$ dilewatkan melalui dua buah polarisator yang sumbu transmisinya membentuk sudut $60^\\circ$ satu sama lain. Intensitas cahaya yang keluar dari polarisator kedua adalah ....",
        gambar: "",
        opsi: ["$\\frac{1}{8}I_0$", "$\\frac{1}{4}I_0$", "$\\frac{3}{8}I_0$", "$\\frac{1}{2}I_0$", "$\\frac{3}{4}I_0$"],
        jawaban: 0,
        pembahasan: "Setelah polarisator pertama: $I_1 = \\frac{1}{2}I_0$.<br>Setelah analisator (Hukum Malus): $I_2 = I_1 \\cos^2 60^\\circ$<br>$= \\frac{1}{2}I_0 \\left(\\frac{1}{2}\\right)^2$<br>$= \\frac{1}{8}I_0$.",
        trik_cepat: "$I_2 = \\frac{1}{2}I_0 \\cos^2\\theta$."
    },
    {
        id: 64,
        teks: "Cahaya merambat dari udara ($n_1 = 1$) menuju kaca ($n_2 = 1,5$). Jika cepat rambat cahaya di udara $3 \\times 10^8$ m/s, cepat rambat cahaya di dalam kaca adalah ....",
        gambar: "",
        opsi: [
            "$1,5 \\times 10^8$ m/s",
            "$2,0 \\times 10^8$ m/s",
            "$2,5 \\times 10^8$ m/s",
            "$3,0 \\times 10^8$ m/s",
            "$4,5 \\times 10^8$ m/s"
        ],
        jawaban: 1,
        pembahasan: "$v_2 = \\frac{c}{n_2}$<br>$= \\frac{3 \\times 10^8}{1,5}$<br>$= 2,0 \\times 10^8$ m/s.",
        trik_cepat: "$v = c / n$."
    },
    {
        id: 65,
        teks: "Peristiwa pembelokan cahaya saat melewati celah sempit atau tepi penghalang tajam disebut ....",
        gambar: "",
        opsi: ["Refleksi", "Refraksi", "Interferensi", "Difraksi", "Dispersi"],
        jawaban: 3,
        pembahasan: "Difraksi adalah pelenturan atau pembelokan gelombang cahaya ketika melewati celah sempit atau penghalang.<br>Refleksi = pemantulan, refraksi = pembiasan, interferensi = perpaduan, dispersi = penguraian warna.",
        trik_cepat: "Celah sempit $\\rightarrow$ Difraksi; Gabungan dua gelombang $\\rightarrow$ Interferensi."
    },
    {
        id: 66,
        teks: "Sebuah celah tunggal selebar $0,1$ mm disinari cahaya monokromatik dengan panjang gelombang $500$ nm. Pola difraksi ditangkap pada layar berjarak $2$ m. Lebar terang pusat pada layar adalah ....",
        gambar: "",
        opsi: ["$5$ mm", "$10$ mm", "$15$ mm", "$20$ mm", "$25$ mm"],
        jawaban: 3,
        pembahasan: "Jarak gelap pertama dari terang pusat: $p_1 = \\frac{\\lambda L}{d}$<br>$= \\frac{(5 \\times 10^{-7})(2)}{10^{-4}}$<br>$= 10^{-2}\\text{ m}$<br>$= 10$ mm.<br>Lebar terang pusat = $2 p_1 = 20$ mm.",
        trik_cepat: "Lebar terang pusat difraksi celah tunggal = $\\frac{2\\lambda L}{d}$."
    },
    {
        id: 67,
        teks: "Sudut polarisasi (sudut Brewster) suatu medium transparan di udara adalah $53^\\circ$. Indeks bias medium tersebut adalah .... ($\\tan 53^\\circ = \\frac{4}{3}$)",
        gambar: "",
        opsi: ["$0,75$", "$1,25$", "$1,33$", "$1,50$", "$1,67$"],
        jawaban: 2,
        pembahasan: "Hukum Brewster: $\\tan i_p = \\frac{n_2}{n_1}$<br>$\\Rightarrow n_2 = 1 \\times \\tan 53^\\circ$<br>$= \\frac{4}{3} \\approx 1,33$.",
        trik_cepat: "$n = \\tan i_p$ (jika dari udara)."
    },
    {
        id: 68,
        teks: "Gelombang elektromagnetik yang memiliki frekuensi paling besar dan daya tembus paling kuat adalah ....",
        gambar: "",
        opsi: ["Gelombang radio", "Sinar inframerah", "Cahaya tampak", "Sinar-X", "Sinar gamma"],
        jawaban: 4,
        pembahasan: "Urutan spektrum gelombang elektromagnetik dari frekuensi rendah ke tinggi: Radio $\\rightarrow$ Mikro $\\rightarrow$ Inframerah $\\rightarrow$ Cahaya tampak $\\rightarrow$ Ultraviolet $\\rightarrow$ Sinar-X $\\rightarrow$ Sinar gamma.",
        trik_cepat: "Frekuensi tertinggi = panjang gelombang terpendek = Sinar gamma."
    },

    // =========================================================================
    // BAB 6: SUHU DAN KALOR (69-82)
    // =========================================================================
    {
        id: 69,
        teks: "Suhu suatu ruangan di Mataram terukur $30^\\circ\\text{C}$. Jika dinyatakan dalam skala Fahrenheit dan Kelvin berturut-turut adalah ....",
        gambar: "",
        opsi: [
            "$54^\\circ\\text{F}$ dan $303$ K",
            "$86^\\circ\\text{F}$ dan $303$ K",
            "$86^\\circ\\text{F}$ dan $243$ K",
            "$62^\\circ\\text{F}$ dan $303$ K",
            "$78^\\circ\\text{F}$ dan $300$ K"
        ],
        jawaban: 1,
        pembahasan: "$T_F = \\frac{9}{5}(30) + 32$<br>$= 54 + 32$<br>$= 86^\\circ\\text{F}$.<br>$T_K = 30 + 273 = 303$ K.",
        trik_cepat: "$F = 1,8C + 32$ dan $K = C + 273$."
    },
    {
        id: 70,
        teks: "Sebuah termometer X menunjukkan titik beku air pada $-20^\\circ\\text{X}$ dan titik didih air pada $130^\\circ\\text{X}$. Jika suhu suatu benda $40^\\circ\\text{C}$, termometer X akan menunjukkan angka ....",
        gambar: "",
        opsi: ["$30^\\circ\\text{X}$", "$40^\\circ\\text{X}$", "$50^\\circ\\text{X}$", "$60^\\circ\\text{X}$", "$80^\\circ\\text{X}$"],
        jawaban: 1,
        pembahasan: "$\\frac{X - (-20)}{130 - (-20)} = \\frac{40 - 0}{100 - 0}$<br>$\\Rightarrow \\frac{X + 20}{150} = \\frac{40}{100}$<br>$\\Rightarrow X + 20 = 60$<br>$\\Rightarrow X = 40^\\circ\\text{X}$.",
        trik_cepat: "Perbandingan skala: $\\frac{T_X - T_{bX}}{T_{dX} - T_{bX}} = \\frac{T_C}{100}$."
    },
    {
        id: 71,
        teks: "Sebatang rel kereta api dari baja memiliki panjang $20$ m pada suhu $25^\\circ\\text{C}$. Jika koefisien muai panjang baja $1,2 \\times 10^{-5}\\text{ /}^\\circ\\text{C}$, pertambahan panjang rel saat suhu naik menjadi $45^\\circ\\text{C}$ adalah ....",
        gambar: "",
        opsi: ["$2,4$ mm", "$4,8$ mm", "$6,0$ mm", "$9,6$ mm", "$48$ mm"],
        jawaban: 1,
        pembahasan: "$\\Delta L = L_0 \\alpha \\Delta T$<br>$= 20 \\times (1,2 \\times 10^{-5}) \\times (45 - 25)$<br>$= 20 \\times 1,2 \\times 10^{-5} \\times 20$<br>$= 4,8 \\times 10^{-3}\\text{ m}$<br>$= 4,8$ mm.",
        trik_cepat: "$\\Delta L = L_0 \\alpha \\Delta T$."
    },
    {
        id: 72,
        teks: "Kalor yang diperlukan untuk mengubah $200$ gram es bersuhu $-5^\\circ\\text{C}$ menjadi air bersuhu $20^\\circ\\text{C}$ adalah .... ($c_{\\text{es}} = 0,5$ kal/g$^\\circ$C, $L_{\\text{es}} = 80$ kal/g, $c_{\\text{air}} = 1$ kal/g$^\\circ$C)",
        gambar: "",
        opsi: ["$4.500$ kal", "$16.500$ kal", "$20.000$ kal", "$20.500$ kal", "$24.500$ kal"],
        jawaban: 3,
        pembahasan: "$Q_1$ (es $-5^\\circ\\text{C} \\rightarrow 0^\\circ\\text{C}$) = $200(0,5)(5) = 500$ kal.<br>$Q_2$ (melebur) = $200(80) = 16.000$ kal.<br>$Q_3$ (air $0^\\circ\\text{C} \\rightarrow 20^\\circ\\text{C}$) = $200(1)(20) = 4.000$ kal.<br>Total = $20.500$ kal.",
        trik_cepat: "Pecah 3 tahap: naikkan suhu es + leburkan es + naikkan suhu air."
    },
    {
        id: 73,
        teks: "Air bermassa $100$ gram bersuhu $80^\\circ\\text{C}$ dicampur dengan $200$ gram air bersuhu $20^\\circ\\text{C}$ dalam wadah terisolasi. Suhu akhir campuran adalah ....",
        gambar: "",
        opsi: ["$30^\\circ\\text{C}$", "$40^\\circ\\text{C}$", "$50^\\circ\\text{C}$", "$60^\\circ\\text{C}$", "$70^\\circ\\text{C}$"],
        jawaban: 1,
        pembahasan: "Asas Black ($c$ sama): $m_1(T_1 - T_c) = m_2(T_c - T_2)$<br>$\\Rightarrow 100(80 - T_c) = 200(T_c - 20)$<br>$\\Rightarrow 80 - T_c = 2T_c - 40$<br>$\\Rightarrow 3T_c = 120$<br>$\\Rightarrow T_c = 40^\\circ\\text{C}$.",
        trik_cepat: "Zat sejenis: $T_c = \\frac{m_1 T_1 + m_2 T_2}{m_1 + m_2}$."
    },
    {
        id: 74,
        teks: "Dua batang logam P dan Q yang memiliki ukuran sama tetapi jenis logam berbeda disambungkan ujungnya. Ujung bebas P bersuhu $100^\\circ\\text{C}$ dan ujung bebas Q bersuhu $0^\\circ\\text{C}$. Jika koefisien konduktivitas termal P tiga kali Q ($k_P = 3k_Q$), suhu pada sambungan kedua logam adalah ....",
        gambar: "",
        opsi: ["$25^\\circ\\text{C}$", "$50^\\circ\\text{C}$", "$60^\\circ\\text{C}$", "$75^\\circ\\text{C}$", "$80^\\circ\\text{C}$"],
        jawaban: 3,
        pembahasan: "Laju konduksi sama ($H_P = H_Q$): $k_P (100 - T) = k_Q (T - 0)$<br>$\\Rightarrow 3(100 - T) = T$<br>$\\Rightarrow 300 - 3T = T$<br>$\\Rightarrow 4T = 300$<br>$\\Rightarrow T = 75^\\circ\\text{C}$.",
        trik_cepat: "Suhu sambungan selalu lebih dekat ke logam yang konduktivitasnya ($k$) lebih besar."
    },
    {
        id: 75,
        teks: "Sebuah benda hitam sempurna bersuhu $27^\\circ\\text{C}$ memancarkan energi radiasi dengan laju $P$. Jika suhu benda dinaikkan menjadi $327^\\circ\\text{C}$, laju energi radiasinya menjadi ....",
        gambar: "",
        opsi: ["$2P$", "$4P$", "$8P$", "$16P$", "$32P$"],
        jawaban: 3,
        pembahasan: "Ubah ke Kelvin: $T_1 = 27 + 273 = 300$ K, $T_2 = 327 + 273 = 600$ K ($2\\times$ lipat).<br>Hukum Stefan-Boltzmann: $P \\propto T^4$<br>$\\Rightarrow \\frac{P_2}{P_1} = \\left(\\frac{600}{300}\\right)^4$<br>$= 2^4$<br>$= 16$<br>$\\Rightarrow P_2 = 16P$.",
        trik_cepat: "Wajib ubah ke Kelvin dulu, lalu pangkatkan 4 ($P \\propto T^4$)."
    },
    {
        id: 76,
        teks: "Perpindahan kalor yang disertai dengan perpindahan partikel-partikel zat perantaranya (seperti pada peristiwa angin darat dan angin laut) disebut ....",
        gambar: "",
        opsi: ["Konduksi", "Konveksi", "Radiasi", "Evaporasi", "Kondensasi"],
        jawaban: 1,
        pembahasan: "Konveksi terjadi pada fluida (zat cair dan gas) karena perbedaan massa jenis sehingga partikel zat ikut berpindah membawa kalor.",
        trik_cepat: "Konduksi = zat padat (tanpa pindah partikel); Konveksi = fluida (partikel pindah); Radiasi = tanpa medium."
    },
    {
        id: 77,
        teks: "Sebuah jendela kaca memiliki luas $1,5$ m$^2$ dan ketebalan $5$ mm. Jika suhu di luar ruangan $35^\\circ\\text{C}$, suhu di dalam ruangan ber-AC $25^\\circ\\text{C}$, dan konduktivitas termal kaca $0,8$ W/(m·K), laju kalor yang merambat melalui kaca adalah ....",
        gambar: "",
        opsi: ["$1.200$ W", "$2.400$ W", "$3.600$ W", "$4.800$ W", "$6.000$ W"],
        jawaban: 1,
        pembahasan: "$H = \\frac{k A \\Delta T}{d}$<br>$= \\frac{0,8 \\times 1,5 \\times (35 - 25)}{5 \\times 10^{-3}}$<br>$= \\frac{12}{5 \\times 10^{-3}}$<br>$= 2.400$ W.",
        trik_cepat: "$H = \\frac{k A \\Delta T}{d}$."
    },
    {
        id: 78,
        teks: "Sebuah pelat logam memiliki luas $200$ cm$^2$ pada suhu $20^\\circ\\text{C}$. Jika koefisien muai panjang logam $1,5 \\times 10^{-5}\\text{ /}^\\circ\\text{C}$, pertambahan luas pelat saat dipanaskan hingga $120^\\circ\\text{C}$ adalah ....",
        gambar: "",
        opsi: ["$0,3$ cm$^2$", "$0,6$ cm$^2$", "$1,2$ cm$^2$", "$3,0$ cm$^2$", "$6,0$ cm$^2$"],
        jawaban: 1,
        pembahasan: "Koefisien muai luas $\\beta = 2\\alpha$<br>$= 3 \\times 10^{-5}\\text{ /}^\\circ\\text{C}$.<br>$\\Delta A = A_0 \\beta \\Delta T$<br>$= 200 \\times (3 \\times 10^{-5}) \\times 100$<br>$= 0,6$ cm$^2$.",
        trik_cepat: "Muai luas pakai $\\beta = 2\\alpha$; muai volume pakai $\\gamma = 3\\alpha$."
    },
    {
        id: 79,
        teks: "Sebuah pemanas listrik berdaya $420$ W digunakan untuk memanaskan $1$ kg air dari suhu $20^\\circ\\text{C}$ hingga $70^\\circ\\text{C}$. Jika kalor jenis air $4.200$ J/(kg·$^\\circ$C) dan efisiensi pemanas $100\\%$, waktu yang diperlukan adalah ....",
        gambar: "",
        opsi: ["$250$ s", "$400$ s", "$500$ s", "$600$ s", "$1.000$ s"],
        jawaban: 2,
        pembahasan: "$P \\cdot t = m c \\Delta T$<br>$\\Rightarrow 420 \\cdot t = 1 \\times 4.200 \\times (70 - 20)$<br>$\\Rightarrow 420 t = 210.000$<br>$\\Rightarrow t = 500$ s.",
        trik_cepat: "$t = \\frac{m c \\Delta T}{P}$."
    },
    {
        id: 80,
        teks: "Benda yang memiliki permukaan hitam kusam merupakan penyerap sekaligus pemancar kalor radiasi yang baik karena memiliki nilai emisivitas ($e$) sebesar ....",
        gambar: "",
        opsi: ["$0$", "$0,25$", "$0,5$", "$0,75$", "$1$"],
        jawaban: 4,
        pembahasan: "Nilai emisivitas $e$ berkisar antara $0$ (pemantul sempurna/putih mengilap) hingga $1$ (penyerap/pemancar sempurna atau benda hitam sempurna).",
        trik_cepat: "Hitam sempurna $\\rightarrow e = 1$; Putih mengilap $\\rightarrow e = 0$."
    },
    {
        id: 81,
        teks: "Pada peristiwa anomali air, ketika air dipanaskan dari suhu $0^\\circ\\text{C}$ hingga $4^\\circ\\text{C}$, sifat fisis air yang terjadi adalah ....",
        gambar: "",
        opsi: [
            "Volumenya memuai dan massa jenisnya mengecil",
            "Volumenya menyusut dan massa jenisnya membesar",
            "Volume dan massa jenisnya tetap",
            "Volumenya menyusut dan massa jenisnya mengecil",
            "Air langsung mendidih"
        ],
        jawaban: 1,
        pembahasan: "Anomali air terjadi pada rentang $0^\\circ\\text{C}$–$4^\\circ\\text{C}$: saat dipanaskan volumenya justru menyusut sehingga pada suhu $4^\\circ\\text{C}$ air memiliki volume minimum dan massa jenis maksimum ($1$ g/cm$^3$).",
        trik_cepat: "Suhu $4^\\circ\\text{C}$ = volume air paling kecil, massa jenis paling besar."
    },
    {
        id: 82,
        teks: "Sebuah logam bermassa $0,5$ kg bersuhu $100^\\circ\\text{C}$ dimasukkan ke dalam $1$ kg air bersuhu $20^\\circ\\text{C}$. Jika suhu akhir campuran $25^\\circ\\text{C}$ dan kalor jenis air $4.200$ J/(kg·$^\\circ$C), kalor jenis logam tersebut adalah ....",
        gambar: "",
        opsi: [
            "$280$ J/(kg·$^\\circ$C)",
            "$420$ J/(kg·$^\\circ$C)",
            "$560$ J/(kg·$^\\circ$C)",
            "$840$ J/(kg·$^\\circ$C)",
            "$1.120$ J/(kg·$^\\circ$C)"
        ],
        jawaban: 2,
        pembahasan: "$m_L c_L (100 - 25) = m_a c_a (25 - 20)$<br>$\\Rightarrow 0,5 \\cdot c_L (75) = 1(4.200)(5)$<br>$\\Rightarrow 37,5 c_L = 21.000$<br>$\\Rightarrow c_L = 560$ J/(kg·$^\\circ$C).",
        trik_cepat: "$Q_{\\text{lepas}} = Q_{\\text{terima}}$."
    },

    // =========================================================================
    // BAB 7: TEORI KINETIK GAS & TERMODINAMIKA (83-100)
    // =========================================================================
    {
        id: 83,
        teks: "Sebuah tabung tertutup berisi gas ideal pada suhu $27^\\circ\\text{C}$ dan tekanan $2$ atm. Jika gas dipanaskan pada volume tetap hingga suhunya menjadi $177^\\circ\\text{C}$, tekanan gas sekarang adalah ....",
        gambar: "",
        opsi: ["$1,5$ atm", "$2,5$ atm", "$3,0$ atm", "$4,0$ atm", "$13,1$ atm"],
        jawaban: 2,
        pembahasan: "Proses isokhorik ($T_1 = 300$ K, $T_2 = 450$ K): $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$<br>$\\Rightarrow \\frac{2}{300} = \\frac{P_2}{450}$<br>$\\Rightarrow P_2 = 3,0$ atm.",
        trik_cepat: "Volume tetap: $P$ sebanding dengan $T$ (dalam Kelvin)."
    },
    {
        id: 84,
        teks: "Sebanyak $2$ mol gas ideal berada dalam wadah bervolume $8,314$ liter pada suhu $27^\\circ\\text{C}$. Jika tetapan umum gas $R = 8,314$ J/(mol·K), tekanan gas tersebut adalah ....",
        gambar: "",
        opsi: ["$3 \\times 10^5$ Pa", "$4,5 \\times 10^5$ Pa", "$6 \\times 10^5$ Pa", "$9 \\times 10^5$ Pa", "$1,2 \\times 10^6$ Pa"],
        jawaban: 2,
        pembahasan: "$V = 8,314\\text{ L} = 8,314 \\times 10^{-3}$ m$^3$, $T = 300$ K.<br>$P = \\frac{n R T}{V}$<br>$= \\frac{2 \\times 8,314 \\times 300}{8,314 \\times 10^{-3}}$<br>$= 600 \\times 10^3$<br>$= 6 \\times 10^5$ Pa.",
        trik_cepat: "$PV = nRT$ (ingat $1\\text{ liter} = 10^{-3}\\text{ m}^3$)."
    },
    {
        id: 85,
        teks: "Energi kinetik rata-rata molekul gas ideal monoatomik hanya bergantung pada ....",
        gambar: "",
        opsi: ["Tekanan gas", "Volume wadah", "Massa molekul gas", "Suhu mutlak gas", "Jumlah partikel gas"],
        jawaban: 3,
        pembahasan: "$\\bar{E}_k = \\frac{3}{2} k T$.<br>Energi kinetik rata-rata molekul gas ideal hanya bergantung pada suhu mutlak ($T$ dalam Kelvin).",
        trik_cepat: "Suhu sama $\\rightarrow$ Energi kinetik rata-rata molekul sama."
    },
    {
        id: 86,
        teks: "Jika suhu mutlak suatu gas ideal dinaikkan menjadi $4$ kali semula, kelajuan efektif ($v_{\\text{rms}}$) partikel-partikel gas menjadi ....",
        gambar: "",
        opsi: ["$\\frac{1}{2}$ kali semula", "$2$ kali semula", "$4$ kali semula", "$8$ kali semula", "$16$ kali semula"],
        jawaban: 1,
        pembahasan: "$v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M}} \\propto \\sqrt{T}$.<br>Jika $T' = 4T$, maka $v'_{\\text{rms}} = \\sqrt{4} = 2$ kali semula.",
        trik_cepat: "$v_{\\text{rms}}$ sebanding dengan akar suhu mutlak ($\\sqrt{T}$)."
    },
    {
        id: 87,
        teks: "Energi dalam ($U$) dari $2$ mol gas ideal monoatomik pada suhu $300$ K adalah .... ($R = 8,31$ J/(mol·K))",
        gambar: "",
        opsi: ["$2.493$ J", "$4.986$ J", "$7.479$ J", "$12.465$ J", "$14.958$ J"],
        jawaban: 2,
        pembahasan: "Gas monoatomik memiliki $3$ derajat kebebasan ($f = 3$): $U = \\frac{3}{2} n R T$<br>$= \\frac{3}{2}(2)(8,31)(300)$<br>$= 3 \\times 8,31 \\times 300$<br>$= 7.479$ J.",
        trik_cepat: "Monoatomik: $U = \\frac{3}{2}nRT$; Diatomik suhu sedang: $U = \\frac{5}{2}nRT$."
    },
    {
        id: 88,
        teks: "Gas ideal mengalami proses isobarik pada tekanan tetap $2 \\times 10^5$ Pa sehingga volumenya memuai dari $1,5$ liter menjadi $4,0$ liter. Usaha yang dilakukan oleh gas tersebut adalah ....",
        gambar: "",
        opsi: ["$250$ J", "$300$ J", "$500$ J", "$800$ J", "$5.000$ J"],
        jawaban: 2,
        pembahasan: "$\\Delta V = (4,0 - 1,5)\\text{ L}$<br>$= 2,5 \\times 10^{-3}$ m$^3$.<br>$W = P \\Delta V$<br>$= (2 \\times 10^5)(2,5 \\times 10^{-3})$<br>$= 500$ J.",
        trik_cepat: "Isobarik: $W = P(V_2 - V_1)$."
    },
    {
        id: 89,
        teks: "Suatu gas ideal mengalami proses termodinamika yang berlangsung tanpa adanya pertukaran kalor antara sistem dan lingkungan ($Q = 0$). Proses ini disebut ....",
        gambar: "",
        opsi: ["Isotermal", "Isobarik", "Isokhorik", "Adiabatik", "Isoentropik"],
        jawaban: 3,
        pembahasan: "Adiabatik adalah proses termodinamika di mana tidak ada kalor yang masuk maupun keluar sistem ($Q = 0$), sehingga $\\Delta U = -W$.",
        trik_cepat: "Isotermal ($\\Delta T = 0$); Isobarik ($\\Delta P = 0$); Isokhorik ($\\Delta V = 0$); Adiabatik ($Q = 0$)."
    },
    {
        id: 90,
        teks: "Dalam sebuah proses termodinamika, suatu sistem gas menyerap kalor sebesar $1.500$ J dan melakukan usaha luar sebesar $600$ J. Perubahan energi dalam sistem gas tersebut adalah ....",
        gambar: "",
        opsi: ["$-2.100$ J", "$-900$ J", "$600$ J", "$900$ J", "$2.100$ J"],
        jawaban: 3,
        pembahasan: "Hukum I Termodinamika: $Q = \\Delta U + W$<br>$\\Rightarrow +1.500 = \\Delta U + (+600)$<br>$\\Rightarrow \\Delta U = 900$ J.",
        trik_cepat: "Menyerap kalor ($Q+$), melakukan usaha ($W+$): $\\Delta U = Q - W$."
    },
    {
        id: 91,
        teks: "Pada proses isokhorik (volume tetap), pernyataan yang benar menurut Hukum I Termodinamika adalah ....",
        gambar: "",
        opsi: [
            "Usaha sistem bernilai maksimum",
            "Perubahan energi dalam sama dengan nol",
            "Seluruh kalor yang diserap digunakan untuk menaikkan energi dalam sistem",
            "Suhu sistem selalu tetap",
            "Tidak ada kalor yang masuk ke sistem"
        ],
        jawaban: 2,
        pembahasan: "Karena $\\Delta V = 0$, maka usaha $W = 0$.<br>Dari $Q = \\Delta U + W$, diperoleh $Q = \\Delta U$.",
        trik_cepat: "Isokhorik $\\rightarrow \\Delta V = 0 \\rightarrow W$<br>$= 0 \\rightarrow Q$<br>$= \\Delta U$."
    },
    {
        id: 92,
        teks: "Sebuah mesin Carnot bekerja di antara reservoir suhu tinggi $527^\\circ\\text{C}$ dan reservoir suhu rendah $127^\\circ\\text{C}$. Efisiensi maksimum mesin Carnot tersebut adalah ....",
        gambar: "",
        opsi: ["$25\\%$", "$40\\%$", "$50\\%$", "$75\\%$", "$76\\%$"],
        jawaban: 2,
        pembahasan: "$T_1 = 527 + 273 = 800$ K dan $T_2 = 127 + 273 = 400$ K.<br>$\\eta = \\left(1 - \\frac{T_2}{T_1}\\right) \\times 100\\%$<br>$= \\left(1 - \\frac{400}{800}\\right) \\times 100\\%$<br>$= 50\\%$.",
        trik_cepat: "Ubah suhu ke Kelvin! $\\eta = (1 - T_{\\text{rendah}}/T_{\\text{tinggi}}) \\times 100\\%$."
    },
    {
        id: 93,
        teks: "Sebuah mesin Carnot menyerap kalor $2.000$ J dari reservoir panas bersuhu $600$ K dan membuang sebagian kalor ke reservoir dingin bersuhu $300$ K. Usaha yang dihasilkan mesin dalam satu siklus adalah ....",
        gambar: "",
        opsi: ["$500$ J", "$1.000$ J", "$1.500$ J", "$2.000$ J", "$3.000$ J"],
        jawaban: 1,
        pembahasan: "$\\eta = 1 - \\frac{300}{600} = 0,5$.<br>Usaha $W = \\eta \\cdot Q_1 = 0,5 \\times 2.000 = 1.000$ J.",
        trik_cepat: "$W = \\eta Q_1$."
    },
    {
        id: 94,
        teks: "Sebuah mesin Carnot memiliki efisiensi $40\\%$ ketika reservoir dinginnya bersuhu $27^\\circ\\text{C}$. Agar efisiensinya meningkat menjadi $60\\%$ dengan suhu reservoir dingin tetap, suhu reservoir panas harus dinaikkan menjadi ....",
        gambar: "",
        opsi: ["$450$ K", "$500$ K", "$600$ K", "$750$ K", "$900$ K"],
        jawaban: 3,
        pembahasan: "$T_2 = 27 + 273 = 300$ K.<br>Kondisi baru: $0,6 = 1 - \\frac{300}{T_1'}$<br>$\\Rightarrow \\frac{300}{T_1'} = 0,4$<br>$\\Rightarrow T_1' = \\frac{300}{0,4} = 750$ K.",
        trik_cepat: "$T_1 = \\frac{T_2}{1 - \\eta}$."
    },
    {
        id: 95,
        teks: "Sebuah mesin pendingin (kulkas) memiliki koefisien performansi ($K_p$) sebesar $5$. Jika mesin mengambil kalor dari ruang pembeku sebesar $1.500$ J setiap siklus, usaha listrik yang diperlukan mesin tersebut adalah ....",
        gambar: "",
        opsi: ["$250$ J", "$300$ J", "$500$ J", "$1.200$ J", "$7.500$ J"],
        jawaban: 1,
        pembahasan: "$K_p = \\frac{Q_2}{W}$<br>$\\Rightarrow 5 = \\frac{1.500}{W}$<br>$\\Rightarrow W = \\frac{1.500}{5} = 300$ J.",
        trik_cepat: "Kulkas: $K_p = \\frac{Q_{\\text{dingin}}}{W}$."
    },
    {
        id: 96,
        teks: "Gas ideal mengalami proses ekspansi isotermal pada suhu tetap. Pernyataan yang tepat mengenai usaha dan kalor pada proses ini adalah ....",
        gambar: "",
        opsi: [
            "Usaha gas bernilai nol dan kalor masuk seluruhnya menaikkan suhu",
            "Perubahan energi dalam bernilai nol sehingga kalor yang diserap sama dengan usaha yang dilakukan gas",
            "Tekanan gas tetap selama volume bertambah",
            "Tidak ada kalor yang diserap maupun dilepas sistem",
            "Suhu gas turun sebanding dengan pertambahan volume"
        ],
        jawaban: 1,
        pembahasan: "Pada proses isotermal ($\\Delta T = 0$), perubahan energi dalam $\\Delta U = 0$.<br>Sesuai Hukum I Termodinamika ($Q = \\Delta U + W$), maka $Q = W$.",
        trik_cepat: "Isotermal $\\rightarrow \\Delta T = 0 \\rightarrow \\Delta U$<br>$= 0 \\rightarrow Q$<br>$= W$."
    },
    {
        id: 97,
        teks: "Dalam sebuah siklus termodinamika pada diagram $P$-$V$, luas daerah yang dilingkupi oleh kurva siklus tertutup menyatakan ....",
        gambar: "",
        opsi: [
            "Perubahan energi dalam total siklus",
            "Kalor total yang dibuang ke lingkungan",
            "Usaha bersih yang dilakukan sistem dalam satu siklus",
            "Efisiensi termal mesin",
            "Kapasitas kalor molar gas"
        ],
        jawaban: 2,
        pembahasan: "Pada siklus tertutup, keadaan awal sama dengan keadaan akhir sehingga $\\Delta U_{\\text{siklus}} = 0$.<br>Luas kurva tertutup pada diagram $P$-$V$ menyatakan usaha bersih ($W_{\\text{siklus}}$).",
        trik_cepat: "Luas siklus $P$-$V$ = Usaha bersih ($W$); $\\Delta U_{\\text{siklus}} = 0$."
    },
    {
        id: 98,
        teks: "Sebuah siklus termodinamika berbentuk persegi panjang pada diagram $P$-$V$ memiliki batas tekanan $P_1 = 2 \\times 10^5$ Pa hingga $P_2 = 5 \\times 10^5$ Pa, dan batas volume $V_1 = 0,02$ m$^3$ hingga $V_2 = 0,06$ m$^3$. Jika siklus berjalan searah jarum jam, usaha bersih yang dihasilkan adalah ....",
        gambar: "",
        opsi: ["$6.000$ J", "$12.000$ J", "$18.000$ J", "$20.000$ J", "$30.000$ J"],
        jawaban: 1,
        pembahasan: "Searah jarum jam berarti $W$ bernilai positif.<br>$W = \\text{Luas persegi panjang}$<br>$= \\Delta P \\cdot \\Delta V$<br>$= (5 - 2)\\times 10^5 \\times (0,06 - 0,02)$<br>$= (3 \\times 10^5)(0,04)$<br>$= 12.000$ J.",
        trik_cepat: "Siklus persegi panjang: $W = \\pm \\Delta P \\cdot \\Delta V$ ($+$ searah jarum jam, $-$ berlawanan)."
    },
    {
        id: 99,
        teks: "Bunyi Hukum II Termodinamika menurut rumusan Clausius menyatakan bahwa ....",
        gambar: "",
        opsi: [
            "Energi tidak dapat diciptakan maupun dimusnahkan",
            "Tidak mungkin membuat mesin yang mengubah seluruh kalor menjadi usaha tanpa membuang kalor",
            "Kalor tidak dapat mengalir secara spontan dari benda bersuhu rendah ke benda bersuhu tinggi tanpa usaha luar",
            "Entropi alam semesta selalu berkurang pada proses spontan",
            "Tekanan gas ideal berbanding lurus dengan suhu mutlaknya"
        ],
        jawaban: 2,
        pembahasan: "Rumusan Clausius membahas arah aliran kalor (dasar mesin pendingin): kalor tidak dapat mengalir spontan dari suhu dingin ke suhu panas.<br>Pilihan B adalah rumusan Kelvin-Planck (mesin kalor).",
        trik_cepat: "Clausius = arah aliran kalor (kulkas); Kelvin-Planck = efisiensi mesin kalor $< 100\\%$."
    },
    {
        id: 100,
        teks: "Sebanyak $1$ mol gas ideal mengalami pemuaian isotermal pada suhu $300$ K sehingga volumenya menjadi $2$ kali volume semula. Jika $R = 8,31$ J/(mol·K) dan $\\ln 2 = 0,693$, usaha yang dilakukan gas adalah ....",
        gambar: "",
        opsi: ["$864$ J", "$1.246$ J", "$1.728$ J", "$2.493$ J", "$3.456$ J"],
        jawaban: 2,
        pembahasan: "$W = n R T \\ln\\left(\\frac{V_2}{V_1}\\right)$<br>$= 1 \\times 8,31 \\times 300 \\times \\ln(2)$<br>$= 2.493 \\times 0,693 \\approx 1.728$ J.",
        trik_cepat: "Usaha isotermal: $W = n R T \\ln(V_2 / V_1)$."
    }
];

// Ekspor untuk digunakan di file lain (jika menggunakan modul)
// module.exports = soalFisika;