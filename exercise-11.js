function changeMe(arr) {
    // you can only write your code here!
    var no = 0;
    var fullName = '';
    var currentTime = new Date();
    for(var i=0; i < arr.length; i++){
      no++;
      fullName = arr[i][0] + ' ' + arr[i][1];
      var MarvelHero = {};
      MarvelHero.firstName = arr[i][0];
      MarvelHero.lastName = arr[i][1];
      MarvelHero.gender = arr[i][2];
      if(arr[i][3] === undefined){
        MarvelHero.age = 'Invalid Birth Year';
      } else {
        var year = currentTime.getFullYear();
        MarvelHero.age = year - arr[i][3];
      }
      console.log(no + '.' + fullName);
      console.log(MarvelHero);
    }
  }

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""