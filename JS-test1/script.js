// Zadatak 1. 



'use strict'
var numbersOfPairs = 0;
var ar = [1,2,3,4,5,6,7,8,9,10,11,12,13];
var k = 5 ;
var i;
var j;
var f =[];

// 

for (i = 0;i <= ar.length - 2;i++){
    for(j = 0;j <= ar.length - 1;j++){
        if(i < j && (ar[i]+ar[j]) % 5 === 0){
            if(!f.includes(ar[i]) &&  !f.includes(ar[j])){
              f.push(ar[i]);
              f.push(ar[j]);
              console.log("parovi:",i,j,f);
              numbersOfPairs++;
            }
            
        }
    }
  }
console.log("broj parova koji su deljivi sa k =  5 kod kojih je i < j je:  ", numbersOfPairs)

