/*function cariModus(arr) {
    // you can only write your code here!
    var result = [];
    // looping panjang datanya
    for(var i = 0; i < arr.length; i++){
        // looping panjang datanya lagi utk perbandingan
        for(var j = 0; j < arr.length; j++){
            // cek indeks dari i dan j, indeks yg sama tdk akan diproses
            if(i !== j){
                // cek nilai dari masing2 data
                // jika sama maka..
                if(arr[i] === arr[j]){
                    // buat variabel kondisi awal
                    // krn kita tdk tau sudah ada blm nilai di result
                    // dengan nilai yg di data arr
                    var cek = false;
                    // lakukan looping dari data result
                    for(var k = 0; k < result.length; k++){
                        // cek apakah nilai yg ada pd result sama dg nilai yg akan dimasukan
                        if(arr[i] === result[k]){
                            // jika iya ubah state cek menjadi true
                            // dan tdk melakukan apa2
                            // cuma naik lagi ke for buat nambah nilai k
                            cek = true;
                        }
                    }
                    // ini dilakukan saat nilai yg ada pd result tidak sama dg nilai yg akan dimasukan
                    // utk menghindari duplikat data
                    if(cek === false){
                        // push data ke result
                        result.push(arr[i]);
                    }
                }
            }
        }
    }
    // kembalikan nilai result
    return result;
}*/

// function cariModus(arr) {
//     // you can only write your code here!
//     var newArr=[];
//     for(var x=0; x<arr.length; x++){
//       for(var i=0; i<arr.length; i++){
//        if(x !== i && arr[x]===arr[i]){
//          newArr.push(arr[i]);
//        }
//       }//console.log(newArr);
//     }
//     if(newArr[0]===undefined) return -1;
//     if(newArr[0]=== arr[0]&&arr[0]===arr[1]&&arr[1]===arr[2])return -1;
//    return newArr[0];
//   }


function cariModus(arr) {
    var max = 0;
    var lokasi = 0;
    // looping array (ex: ambil array[1] = 4)
    for (var i=0; i<arr.length; i++) {
        var jumlah = 0;
        // looping penambahan apabila angka 4 muncul (start from index 0)
        for (var j=0; j<arr.length; j++) {
            if (arr[i] === arr[j]) {
                jumlah += 1;
            } 
        }
        // IF 'jumlah' melebih 'max', maka reassign value max
        if (jumlah > max) {
            max = jumlah;
            lokasi = arr[i];
        } 
    } 
    // IF 1: semua sama, [7, 7, 7, 7, 7] -> klo max === arr.length -> jadi -1. karena max=5, length jg 5
    //IF ELSE: beda semua, [10, 3, 1, 2, 5] -> max akan terus 1
    //IF ELSE: normal (max > 1)
    if (max === arr.length) {
        return -1;
    } else if (max === 1) {
        return -1;
    } else if (max > 1) {
        return lokasi;
        
    }
}

  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1