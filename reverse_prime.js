//Checking reverse of a prime number is prime or not 
const prompt = require('prompt-sync')({sigint: true});
let number = prompt("Enter the number ");
number = Number(number);
function isPrime(num){
    num=parseInt(num);
    let count =0;
    for(let i=1;i<=num;i++){
        if(num%i==0)
        count++;
    }
   return count;
}

let result= isPrime(number);
if(result==2){
    console.log("Prime");
    let result_reverse = Reverse(result);
    let check = isPrime(result_reverse);
    if(check==2){
        console.log("Reverse is also prime");
    }
    else{
        console.log("Reverse is not prime");
    }
    
}
else{
    console.log("Not prime");
}
function Reverse(num){
    let temp=0;
    let result=0;
    while(num>0){
        temp=num%10;
        result=result*10+temp;
        num=parseInt(num/10);
    }
    return result;
}