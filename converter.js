//Converts feet to inches and meter
const prompt = require('prompt-sync')({sigint: true});
let feet = prompt("Enter the length  in feet ");
feet = Number(feet);
let choice= prompt("Enter 1.Feet to inch conversion 2. Feet to meter conversion");
choice=Number(choice);
switch(choice){
    case 1: console.log((feet*0.0083)+" inches");
    break;
    case 2: console.log((feet*0.3048)+" meters");
    break;
    default: console.log("Invalid number");
    break;
}