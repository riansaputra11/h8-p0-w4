function tukarBesarKecil(kalimat) {
  var reverseCase = '';
  
  for (var i = 0; i < kalimat.length; ++i) {
    var huruf = kalimat[i];
    if (huruf === huruf.toUpperCase()) {
      reverseCase += huruf.toLowerCase();
    } else if (huruf === huruf.toLowerCase()) {
      reverseCase += huruf.toUpperCase();
    } else {
      reverseCase += huruf;
    }
  } return reverseCase;
}