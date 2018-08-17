function shoppingTime(memberId, money) {
    if (memberId === undefined || memberId === '') { // bener ga undefined ato '' ????
        return "Mohon maaf, toko X hanya berlaku untuk member saja";
    }
    else {
        // console.log(memberId);
        if (money < 50000) {
            return 'Mohon maaf, uang tidak cukup';
        }
        else {
            var sale = [
                ['Stacattu', 1500000], 
                ['Zoro', 500000], 
                ['H&N', 250000],
                ['Uniklooh', 175000],
                ['Casing Handphone', 50000]
            ];
            var beli = [];
            // console.log(sale);
            var sisaUang = money;
            for (var i=0; i<sale.length; i++) {
                if (sisaUang >= sale[i][1]) {
                    sisaUang -= sale[i][1];
                    beli.push(sale[i][0]);
                    // console.log(sisaUang);
                }
            }

            var product = {
                memberId: memberId,
                money: money,
                listPurchased: beli,
                changeMoney: sisaUang
            }

            return product;
        }
    }
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