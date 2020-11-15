const IS_HEAD=0;
let toss = Math.floor(Math.random()*10)%3;
if(toss==IS_HEAD){
    console.log("Head");
}
else{
    console.log("Tail");
}