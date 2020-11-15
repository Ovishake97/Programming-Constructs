//Prints the harmonic number
const prompt = require('prompt-sync')({sigint: true});
let number = prompt("Enter the number ");
number = Number(number);
let count =0;
for(let i=1;i<=number;i++){
    if(number%i==0)
    count++;
}
if(count==2){
    console.log("Prime");
}
else{
    console.log("Not prime");
}