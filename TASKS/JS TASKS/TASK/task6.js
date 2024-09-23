const prompt = require("prompt-sync")()

const number =prompt("Enter a number");

if(number%2==0){
    console.log("Number is even");
}
else{
    console.log("Number is odd");
}