//Prints the harmonic number
const prompt = require('prompt-sync')({sigint: true});
let number = prompt("Enter the number ");
number = Number(number);
let harmonic=0;
for(let i=1;i<=number;i++){
   harmonic+=(1/i);
}
console.log("Harmonic number is: "+harmonic);