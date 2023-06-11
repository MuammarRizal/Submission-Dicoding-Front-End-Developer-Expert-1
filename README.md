# Submission Front-end Developer Expert 1

### Fitur yang harus ada / Kriteria yang harus dipenuhi

<details>
  <summary>Syarat</summary>
  <ol>
    <li>
      App Bar (Navigation Bar)
      <ul>
        <li>Menampilkan nama aplikasi atau brand logo dari aplikasi katalog restoran (tentukan sendiri nama aplikasi atau brand logonya).</li>
        <li> Terdapat navigation menu:
            <ul>
                <li>Home → mengarah ke root domain.</li>
                <li>Favorite → target URL cukup bernilai “#” (Sebagai placeholder untuk digunakan pada submission selanjutnya). </li>
                <li>About Us → arahkan ke profil LinkedIn/Github/Social Media Anda, atau boleh juga ke personal web/blog.</li>
            </ul>
        </li>
        <li>Terdapat fitur navigation drawer yang berfungsi dengan baik bila diakses pada layar seluler.</li>
      </ul>
    </li>
    <li>
      Hero Element (Jumbotron Element)
      <ul>
        <li>Menampilkan hero element dengan gambar yang sudah ditentukan, silakan pilih salah satu aset yang disediakan di dalam starter proyek, src → public → images → hero. Gambar yang tidak digunakan, bisa Anda hapus.</li>
        <li>
        Gambar hero element yang ditampilkan haruslah full-width atau memenuhi persyaratan sebagai berikut: 
            <ul>
                <li>Tampilkanlah minimal width 1000px pada  viewport width >= 1200px.</li>
                <li>Jika ukuran viewport width < 1200px, maka hero element ditampilkan full-width.</li>
            </ul>
        </li>
      </ul>
    </li>
    <li>
    Daftar Restoran
        <ul>
            <li>Menampilkan daftar restoran berdasarkan data yang sudah disediakan di dalam project starter (src → DATA.json), untuk menampilkannya boleh melalui cara hardcoded di berkas HTML, atau menggunakan DOM manipulation menggunakan JavaScript.</li>
            <li>Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.</li>
        </ul>
    </li>
    <li>
    Footer
        <ul>
            <li>Terdapat footer yang ditampilkan di bawah halaman.</li>
            <li>Terdapat konten teks bebas sesuai dengan kreatifitas Anda. Misalnya, konten copyright yang mencangkup tahun dan nama aplikasi. Contoh: “Copyright © 2020 - Hunger Apps”.</li>
        </ul>
    </li>
    <li>
    Responsibilitas Tampilan
        <ul>
            <li>Tampilan web app harus responsif pada seluruh ukuran layar (mobile - tablet - desktop). Utamakan tampilan mobile terlebih dahulu.</li>
            <li>Gunakan teknik Grid CSS atau Flexbox dalam menyusun layout. Bila terdapat float, submission akan ditolak.</li>
            <li>Menetapkan ukuran viewport secara dinamis berdasarkan layar device yang digunakan.</li>
        </ul>
    </li>
    <li>Aksesibilitas Website
        <ul>
            <li>Seluruh fungsionalitas website dapat dilakukan dengan menggunakan keyboard. Contohnya mengakses tombol hamburger button, mengakses tautan yang ada.</li>
            <li>Menerapkan teknik skip to content untuk melewati focus pada menu navigasi.</li>
            <li>Terdapat alternative teks pada seluruh gambar yang ditampilkan. Bila hanya gambar tidak memiliki arti apapun, cukup berikan atribut alt dengan nilai kosong. </li>
            <li>Dimensi touch target pada elemen yang diinteraksikan dengan touch harus memilliki ukuran minimal 44x44px. Adapun beberapa contoh elemen tersebut ialah button, anchor, input text, dan textarea. 
            <br>
            Pastikan juga terdapat jarak antar elemen tersebut supaya dimensi touch target tidak menumpuk.</li>
            <li>Menggunakan semantic element dalam menyusun struktur dan landmarking HTML.</li>
        </ul>
    </li>
  </ol>

- Perhatian
  <ul>
    <li>Dalam mengerjakan submission ini, Anda tidak diperkenankan menggunakan css framework (seperti Bootstrap, Materialize, Tailwind, dll) yang dapat membantu dalam menyusun tampilan yang responsif. Tuliskan kode CSS from scratch, sistem layouting CSS murni saat ini sudah cukup powerful untuk membuat tampilan website responsif.</li>
  </ul>
</details>

### Pada aplikasi Katalog restoran ini saya menerapkan dan telah menerapkan semua kriteria

    1. Mobile First Approach
    2. dasar responsibilitas tampilan pada perangkat seluler
    3. layout yang responsif menggunakan @media query dan grid css
    4. Optimisasi elemen UI seperti menerapkan navigation drawer, dan menetapkan jarak teks yang sesuai
    5. Menggunakan focus dan screen reader untuk menginput data di website

### Dokumentasi

1. Clone repository ini

```bash
    git clone https://github.com/MuammarRizal/Submission-Dicoding-Front-End-Developer-Expert-1.git
```

2. Masuk ke folder Dicoding-blog

```bash
    cd Submission-Front-end-Developer-Expert-1
```

3. Install Dependencies

```bash
    $ npm install
```

4. Build App

```bash
    $ npm run build
```

5. Jalankan dalam mode Development

```bash
    $ npm run start-dev
```
