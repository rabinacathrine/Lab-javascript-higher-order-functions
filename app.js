const modifiedFood=["pizza", "burger", "fingerChips", "donuts", "springRoll"];
a=modifiedFood.slice(1,4);
console.log(a);

const modifiedFoods=["pizza", "burger", "fingerChips", "donuts", "springRoll"];
//modifiedFoods.push("noodles","icecream");
modifiedFoods.splice( 1, 0, "noodles","icecream");
console.log(modifiedFoods);


const numberArray = [12,324,213,4,2,3,45,4234,23];

var evens = numberArray.filter(function(x) {
    return x % 2 === 0;
 })
console.log(evens);
//PRIME
function isPrime(num) {
    if (num > 2 && num % 2 == 0)
        return false;
    return num > 1;
}

console.log("IS PRIME  "+ numberArray.filter(isPrime));

//var myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray) {
    var arr2 = myArray.map(functn)
}
function functn(num) {
    return num * num; 
}

var myarray = [2, 3, 6, 10];
    
function multiply(myarray) {
    var newarray = myarray.reduce(redc)
}
function redc(t, num) {
    return total * num;
}


//NON PRIME
function nonprime(num) {
    if (num > 2 && num % 2 == 0)
        return false;
    return num > 1;
}
//console.log(numberArray.reduce(isPrime));
//console.log(numberArray.reject(nonprime));

var evens = numberArray.filter(function(x) {
    return x % 2 === 0;
 })
console.log(evens);
numberArray.filter(val=> val%2==0);

const myArray = [11, 34, 20, 5, 53, 16];


function findSquareOfNumbers(myArray){
   // x= myArray.map(Math.sqrt);
   x= myArray.map((val)=>{ return val*val});
   return x;
}
//    console.log(x);
//     return x;
//     }
//     // el.innerHTML = [6, 7, 4, 5].map((val)=>{  
    //     return val*val; 
    // })