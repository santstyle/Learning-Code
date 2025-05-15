// Menangkap pilihan player
var p = prompt(' pilih : gajah, semut, orang');

// Menangkap pilihan computer

// Membangkitkan bilangan random
var comp = Math.random();

if (comp < 0.34) {
    comp = 'semut';
} else if (comp >= 0.34 && comp < 0.67) {
    comp = 'orang'
} else {
    comp = 'gajah'
}

// Menentukan rules
var hasil = '';
if (p == comp) {
    hasil = 'SERI !';
} else if (p === 'gajah') {
    if (comp == 'semut') {
        hasil = 'KALAH !';
    } else {
        hasil = 'MENANG !';
    }
} else if (p === 'semut') {
    if (comp == 'gajah') {
        hasil = 'MENANG !';
    } else {
        hasil = 'KALAH !';
    }
} else if (p === 'orang') {
    if (comp == 'gajah') {
        hasil = 'KALAH!';
    } else {
        hasil = 'MENANG !';
    } 
} else {
    hasil = "memilih pilihan yang tidak sesuai !!";
}

// Tampilkan hasilnya 
alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya adalah : kamu ' + hasil);