var jumlahAngkot = prompt('masukan jumlah angkot');
angkotBeroperasi = prompt('angkot yang beroperasi dengan baik');
noAngkot = 1;

for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    } else {
        console.log('Angkot No. ' + noAngkot + ' tidak beroperasi');
    }
}