function sorting(arrNumber) {
    // code di sini

    var kondisi = false;
    while (!kondisi){
        kondisi = true;
        for (var i = 0; i < arrNumber.length; i++){
            if(arrNumber[i-1]<arrNumber[i]){
                kondisi = false;
                var temp = arrNumber[i-1];
                arrNumber[i-1] = arrNumber[i];
                arrNumber[i] = temp;
            } 
        }
    } //console.log(arrNumber);
      return arrNumber;
  }
  
  function getTotal(arrNumber) {
    // code di sini
    var count = 0;
    for (var j = 0; j < arrNumber.length; j++){
        if(arrNumber[j]==arrNumber[0]){
            var high = arrNumber[0];
            count++;
        }
    } 
    return "angka paling besar adalah "+high+" dan jumlah kemunculan sebanyak "+count+" kali" ;
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''