function angkaPrima(angka) {
  // buat var pembanding
  var hasil = true;
  // cek angka, dimulai dari 2 karna bilangan prima tidak perlu di mod 0/1
  for(var i = 2; i < angka; i++){
    // cek apakah angka di mod i = 0 atau tidak
    if (angka % i == 0){
      // jika di mod i = 0, maka bukan bilangan prima
      hasil = false
    }
  }
  return hasil
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false