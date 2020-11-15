//Gambling and printing the number of successfull bets
const WON=0;
let won=0;
let pocket_money=100;
while(pocket_money>0 && pocket_money<200){
    let bet = Math.floor(Math.random()*10)%2;
    if(bet==WON){
        won++;
        pocket_money++
    }
    else{
        pocket_money--;
    }
}
console.log("Number of bet won "+won);
console.log("Amount in hand "+pocket_money);

