function shoppingTime(memberId, money) {
     var listItem = [['Sepatu Brand Stacattu', 1500000], ['Baju Brand Zoro', 500000], ['Baju Brand H&M', 250000], ['Sweater Brand Unikloh', 175000], ['Casing Handphone', 50000]];
     var belanja = [];
     var report = {};
     var saldo = money;

     for(var i = 0; i < listItem.length; i++){
         if(saldo >= listItem[i][1]){
            saldo = saldo - listItem[i][1];
            belanja.push(listItem[i][0]);
         }
         report.memberId = memberId;
         report.money = money;
         report.listPurchased = belanja;
         report.changeMoney = saldo;

         if (memberId === undefined || memberId === '') {
         return 'Mohon maaf, toko X hanya berlaku untuk member saja';
         }
         if (money < listItem[4][1]) {
         return 'Mohon maaf, uang tidak cukup';
        } 
     }
     return report;
    }

     // TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja