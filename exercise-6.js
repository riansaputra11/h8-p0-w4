function hitungHuruf(kata) {
 // you can only write your code here!
 var satuankata = kata.split(' ');
 var hasilarray=[];
 
 for(var i = 0; i < satuankata.length; i++){
     //console.log('for i: '+j,kataArr[j]);
     for(j = 0; j < satuankata[i].length ; j++){
       var huruf = satuankata[i];
       //console.log('+++++'+hurufk[k]);
        for(k=0; k<satuankata[i].length; k++){
          var hurufsatuan = satuankata[i];
          //console.log('>>>>'+hurufl[l]);
          if(hurufsatuan[j]===huruf[k]&&j!==k){
            //console.log('sama');
            hasilarray.push(hurufsatuan);
            
          }
        }
     }
   
 } 
   var hasil= hasilarray[0];
   return hasil;
}




// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau



function hitungHuruf(kata) {
    // you can only write your code here!
    var arrHitung=[];
    var newKata = kata.split(' ');
    for(var x=0; x<newKata.length;x++){
      var newKata2 = newKata[x].split('').sort();
      for(var i=0; i<newKata2.length; i++){
        if(newKata2[i] === newKata2[i+1]){
          arrHitung.push(newKata[x]);
        }
      } //console.log(newKata);
    }//console.log(newKata2);
    return arrHitung[0];
  }

  // TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau