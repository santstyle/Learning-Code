var jumlahAngkot = prompt('masukan jumlah angkot');
    angkotBeroperasi = prompt('Angkot yang beroperasi');
    noAngkot = 1;

for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik');
    } else if (noAngkot == 8 ) {
        console.log( 'Angkot No. ' + noAngkot + ' Sedang lembur ' );
    }else {
        console.log('Angkot No. ' + noAngkot +  ' sedang tidak beroperasi ');
    }
}