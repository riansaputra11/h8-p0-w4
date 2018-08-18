// function angkaPrima(angka) {
//   // buat var pembanding
//   var hasil = true;

//   if (angka < 2) {
//     return false;
// }
//   // cek angka, dimulai dari 2 karna bilangan prima tidak perlu di mod 0/1
//   for(var i = 2; i < angka; i++){
//     // cek apakah angka di mod i = 0 atau tidak
//     if (angka % i == 0){
//       // jika di mod i = 0, maka bukan bilangan prima
//       hasil = false
//     }
//   }
//   return hasil
// }

function angkaPrima(angka) {
  if (angka > 1) {
    var count = 0; 
    for (var i=angka; i>0; i--) {
       // prime number: angka % faktornya = 0
      if (angka%i === 0) { 
        count += 1;
      }
    }
  return count === 2; // hanya ada 2, bisa dibagi diri sendiri & bagi 1
  }
  else if (angka <= 1) {
    return false;
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(1)); // false