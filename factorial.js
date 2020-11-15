//Prints the factorial of a number
const prompt = require('prompt-sync')({sigint: true});
let number = prompt("Enter the number ");
number = Number(number);
let fact=1;
for(let i=1;i<=number;i++){
fact=fact*1;
}
console.log("Factorial "+fact);