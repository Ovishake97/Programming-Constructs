//Checking palindrome 
const prompt = require('prompt-sync')({sigint: true});
let number = prompt("Enter the number ");
number = Number(number);
let palindrome= Palindrome(number);
if(number==palindrome){
    console.log("Palindrome");
}
else{
    console.log("Mot palindrome");
}
function Palindrome(num){
    let temp=0;
    let result=0;
    while(num>0){
        temp=num%10;
        result=result*10+temp;
        num=parseInt(num/10);
    }
    console.log(result);
}