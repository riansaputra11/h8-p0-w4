function ubahHuruf(kata) {
  // you can only write your code here!
  var alfabet = 'abcdefghijklmnopqrstuvwxyza';
  var urutan = 0;
  var hurufSelanjutnya = '';
  
  for(var i = 0; i < kata.length; i ++) {
    urutan = alfabet.indexOf(kata[i]);
    hurufSelanjutnya += alfabet[urutan+1];
  }
  return hurufSelanjutnya;
}

// function ubahHuruf(str){
//   var kamus = 'abcdefghijklmnopqrstuvwxyz';
//   var arr = [];
//   var arrBaru = [];
//   var temp = '';
  
//   for(var i = 0; i < str.length; i++){
//       arr.push(str[i]);
//   }

//   for(var i = 0; i < arr.length; i++){
//       for(var j = 0; j < kamus.length; j++){
//           if(arr[i] === kamus[j]){
//               arrBaru.push(j+1);
//           }
//       }
//   }

//   for(var i = 0; i < arrBaru.length; i++){
//       if(arrBaru[i] === 26){
//           arrBaru[i] = 0;
//       }
//       temp += kamus[arrBaru[i]];
//   }

//   return temp;
// }

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangatz')); // tfnbohbu