//Reads a number and prints whether its unit,ten,hundred or thousands
const prompt = require('prompt-sync')({sigint: true});
let number = prompt("Enter the number ");
number = Number(number);
let count=0;
while(number!=0){
    number=number/10;
    count++;
}
switch(count){
    case 1: console.log("Unit");
    break;
    case 2: console.log("Ten");
    break;
    case 3: console.log("Hundred");
    break;
    case 4: console.log("Thousand");
    break;
    default: console.log("Invalid number");
    break;
}