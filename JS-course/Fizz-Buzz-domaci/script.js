
var fizz = 0;
var buzz = 0;
var fizzbuzz = 0;
document.getElementById("button").addEventListener("click",function(){
        var a = document.getElementById("br1").value;
        var b = document.getElementById("br2").value;
        var i;

for (i=a; i < b;i++){
        if(i % 3 == 0 && i % 5 == 0){
                console.log("FizzBuzz");
                fizzbuzz ++
        } 
        else if(i % 3 == 0){
                console.log("Fizz");
                fizz ++
        }
        else if(i % 5 == 0){
                console.log("Buzz");
                buzz ++
        }
        else{
                console.log(i);
        }

}
console.log("_________________________________________")
console.log("Fizz : ",fizz)
console.log("Buzz : ",buzz)
console.log("FizzBuzz : ",fizzbuzz)

})