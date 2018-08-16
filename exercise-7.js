function digitPerkalianMinimum(angka) {
  // you can only write your code here!
  var arr= [];
  for(var i = 1; i< angka; i++){
    if(angka % i === 0){
      arr.push(String(i).length + String(angka/i).length)
    }
  }
  if(arr.sort()[0] === undefined) return 2;
  return arr.sort()[0];
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2