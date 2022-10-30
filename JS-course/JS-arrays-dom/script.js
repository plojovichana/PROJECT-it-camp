var niz = [0,1];
var iPrviSabirak = 0;
var iDrugiSabirak = 1;
var brojeviDeljiviSaTri = [];
for(var i=1; i < 20; i++){
  var num = niz[iPrviSabirak] + niz[iDrugiSabirak];
  niz.push(num);
  iPrviSabirak++;
  iDrugiSabirak++;
  if (num % 3 == 0){
        brojeviDeljiviSaTri ++;
  }
}
console.log(niz)
console.log("Brojeva koji su deljivi sa 3 ima: ",brojeviDeljiviSaTri)  //5

/*
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765]
             1            2                3                    4                        5

*/