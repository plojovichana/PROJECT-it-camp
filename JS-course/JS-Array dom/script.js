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
console.log("Brojeva koji su deljivi sa 3 ima : ",brojeviDeljiviSaTri)