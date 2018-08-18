// function fpb(angka1, angka2) {
//   // you can only write your code here!
//   var hasil = 0;
//   for (var i = 0; i < angka1; i++){
//       if (angka1 % i == 0 && angka2 % i == 0){
//           hasil = i;
//       }
//   }return hasil;
// }

function fpb(angka1, angka2) {
    // bikin array1 terdiri dari faktor2nya angka1, start dari faktor terbesar
    var array1 = [];
    for (var i=angka1; i>0; i--) {
      // console.log(angka1/i);
      if (angka1 % i === 0) {
        array1.push(i);
      }
    }
  
    // bikin array2 terdiri dari faktor2nya angka2, start dari faktor terbesar
    var array2 = [];
    for (var i=angka2; i>0; i--) {
      if (angka2 % i === 0) {
        array2.push(i);
      }
    }
  
    // looping pengecekan satu2, disaat ketemu fpb, return resultnya,
    // jd akan brenti disaat ktemu faktor ygs sama terbesar
    for (var j=0; j<array1.length; j++) {
      for (var k=0; k<array2.length; k++) {
        if (array1[j] === array2[k]) {
          return array1[j];
        }
      }
    }
  }

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1