var jumlahAngkot = 10;
    angkotBeroperasi = 6;
    noAngkot = 1;

for (noAngkot; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
        console.log('Angkot No. ' + noAngkot + ' Beroperasi dengan baik');
    } else if (noAngkot === 5 || noAngkot === 8 || noAngkot ===10 ) {
        console.log( 'Angkot No. ' + noAngkot + ' sedang lembur ' );
    } else {
        console.log('Angkot No. ' + noAngkot +  ' sedang tidak dapat beroperasi ');
    }
}

