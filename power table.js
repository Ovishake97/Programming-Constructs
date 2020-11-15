//Prints the table of power raised to 2^n 
const prompt = require('prompt-sync')({sigint: true});
let number = prompt("Enter the number ");
number = Number(number);
let temp=1;
for(let i=0;i<number;i++){
    console.log("2^"+i+"="+temp);
    temp=temp*number;
}