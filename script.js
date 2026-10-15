// Mengambil elemen-elemen dari DOM
const inputAngkaA = document.getElementById("angka-a");
const inputAngkaB = document.getElementById("angka-b");
const tombolTambah = document.getElementById("tombol-tambah");
const tombolKurang = document.getElementById("tombol-kurang");
const tombolKali = document.getElementById("tombol-kali");
const tombolBagi = document.getElementById("tombol-bagi");
const tombolHapus = document.getElementById("tombol-hapus");
const hasilElement = document.getElementById("hasil");
const statistikElement = document.getElementById("statistik");
const sifatHasilElement = document.getElementById("sifat-hasil");
const tombolPanduan = document.getElementById("tombol-panduan");
const sectionPanduan = document.getElementById("panduan");
const infoPembuat = document.getElementById("info-pembuat");

// Variabel untuk statistik dan status panduan
let jumlahPerhitungan = 0;
let panduanTampil = false;

// Informasi pembuat (menggunakan const sesuai modul)
const namaPembuat = "Praktikum Pemrograman Web Dasar 2026";
infoPembuat.textContent = "© 2026 " + namaPembuat;

// Function utama untuk melakukan perhitungan
function hitung(operator) {
    const nilaiA = inputAngkaA.value;
    const nilaiB = inputAngkaB.value;

    // Validasi: Cek apakah input kosong
    if (nilaiA === "" || nilaiB === "") {
        hasilElement.textContent = "Error: Masukkan kedua angka!";
        sifatHasilElement.textContent = "Sifat hasil: -";
        return;
    }

    // Ubah tipe data dari String (input) ke Number
    const a = Number(nilaiA);
    const b = Number(nilaiB);
    let hasil = 0;

    // Percabangan untuk menentukan jenis operasi
    if (operator === "+") {
        hasil = a + b;
    } else if (operator === "-") {
        hasil = a - b;
    } else if (operator === "x") {
        hasil = a * b;
    } else if (operator === "/") {
        // Validasi: Cek pembagian dengan angka nol
        if (b === 0) {
            hasilElement.textContent = "Error: Tidak bisa membagi dengan 0!";
            sifatHasilElement.textContent = "Sifat hasil: -";
            return;
        }
        hasil = a / b;
    }

    // Tampilkan hasil perhitungan
    hasilElement.textContent = "Hasil: " + hasil;

    // Menentukan sifat hasil (Positif, Negatif, atau Nol)
    let sifat = "";
    if (hasil > 0) {
        sifat = "Positif";
    } else if (hasil < 0) {
        sifat = "Negatif";
    } else {
        sifat = "Nol";
    }
    sifatHasilElement.textContent = "Sifat hasil: " + sifat;

    // Tambah jumlah statistik perhitungan sukses
    jumlahPerhitungan = jumlahPerhitungan + 1;
    statistikElement.textContent = "Jumlah perhitungan: " + jumlahPerhitungan;
}

// Event Listener untuk tombol-tombol operasi aritmatika
tombolTambah.addEventListener("click", function () {
    hitung("+");
});

tombolKurang.addEventListener("click", function () {
    hitung("-");
});

tombolKali.addEventListener("click", function () {
    hitung("x");
});

tombolBagi.addEventListener("click", function () {
    hitung("/");
});

// Event Listener untuk Tombol Hapus (Mengosongkan input dan mereset teks)
tombolHapus.addEventListener("click", function () {
    inputAngkaA.value = "";
    inputAngkaB.value = "";
    hasilElement.textContent = "Hasil: 0";
    sifatHasilElement.textContent = "Sifat hasil: -";
});

// Event Listener untuk Fitur Tampil / Sembunyi Panduan
tombolPanduan.addEventListener("click", function () {
    panduanTampil = !panduanTampil; // Membalik nilai boolean (true/false)
    if (panduanTampil) {
        sectionPanduan.style.display = "block";
        tombolPanduan.textContent = "Sembunyikan Panduan";
    } else {
        sectionPanduan.style.display = "none";
        tombolPanduan.textContent = "Tampilkan Panduan";
    }
});