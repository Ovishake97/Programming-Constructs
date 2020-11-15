//Prints the nearest prime number for a given number
const prompt = require('prompt-sync')({sigint: true});
let number = prompt("Enter the number ");
number = Number(number);
let count =0;
let primeArr= new Array();
function isPrime(num){
    for(let i=1;i<=num;i++){
        if(num%i==0)
        count++;
    }
    if(count==2){
        return true;
    } 
    else {
        return false;
    }
}
for(let i=1;i<=number;i++){
    let result=false;
    result= isPrime(i);
    if(result==true){
        primeArr.push(i);
    }
}
console.log("Nearest prime number is "+primeArr[primeArr.length-1]);