const prompt = require('prompt-sync')({sigint: true});
let year = prompt("Enter the year");
year = Number(year);
if(year%400==0 || year%4==0){
    console.log("leap year");
}
else{
    console.log("Not leap year");
}