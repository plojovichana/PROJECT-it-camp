// var arr = [1,2,"test",true,"test123",false,10,"a",13];
// var num = [];
// var str = [];
// var booleans = [];
// for (var i = 0;i <= arr.length-1;i++){
//         var izabranielement = arr[i];
//         if (typeof izabranielement === "number"){
//                 num.push(izabranielement);
//         }
//         else if (typeof izabranielement === "boolean"){
//                 booleans.push(izabranielement);
//         }
//         else if (typeof izabranielement === "string"){
//                 str.push(izabranielement);
// }
// }
// console.log(arr);
// console.log("num : ",num);
// console.log("booleans : ",booleans);
// console.log("string : ",str);



// var arr = [1,2,"test",true,undefined,"test123",false,10,"a",13,undefined];
// for (var i = 0;i <= arr.length-1;i++){
//         el = arr[i]
//         if (typeof el === "undefined" ){
//                 console.log("element iz niza koji je undifaind je na indexu : ", i)
//         }
// }




// 


// var arr = ["a","b","c","d"]



// // var results = "";
// // for(var i =0;i<=length-1;i++){
// //         if (i != 0){
// //                 results = results + " - " + arr[i];
// //         }else{
// //                 results = results + arr[i];
// //         }
// // }

// //         


// console.log(arr.join(" - "))







var i;
var text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam blandit, dui nec placerat convallis, velit dui ullamcorper ex, eu porta felis lorem aliquam arcu. Maecenas sagittis purus sed nulla efficitur, vitae commodo dui tincidunt. Cras quis nisi eget nunc sollicitudin accumsan at eget orci. Donec finibus vestibulum mattis. Vestibulum volutpat venenatis finibus. In in scelerisque tortor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras finibus lectus at leo finibus viverra. Integer eros erat, sagittis non malesuada ut, iaculis efficitur nisl. Nulla fringilla neque nulla, a bibendum arcu hendrerit nec.";

var recenice = text.split("."); 
var reci = text.split(" "); 
var karakteri  = text.split("");
var slova = [];
for (i=0; i<= karakteri.length-1; i++){
  if(karakteri[i] !== '' && karakteri[i] !== '.' && karakteri[i] !== ',' && karakteri[i] !== '!' && karakteri[i] !== '?'){
    slova.push(karakteri[i]);
  }
}
console.log("tekst: ",text);
console.log("_______________________________________________________")
console.log("Recenice: ", recenice);
console.log("Reci: ", reci);
console.log("slova: ",slova);

console.log("tekst ima " + recenice.length + " recenica");
console.log("tekst ima " + reci.length + " reci");
console.log("tekst ima " + slova.length + " slova");
