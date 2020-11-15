//Flipping coins till eleven heads or tails are reached
const IS_HEAD=0;
const UPPER_LIMIT=11;
let headcount=0;
let tailcount=0;
while(headcount!=UPPER_LIMIT || tailcount!=UPPER_LIMIT){
    let toss = Math.floor(Math.random()*10)%2;
    if(toss==IS_HEAD){
        headcount++;
    }
    else{
        tailcount++;
    }
}
console.log("Number of tails "+tailcount);
console.log("Number of heads "+headcount);

