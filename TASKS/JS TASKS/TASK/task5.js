const prompt = require("prompt-sync")()


const number = prompt("Enter a number");

if(number>0){
    console.log("Number is positive");
}
else if(number==0){
    console.log("Number is Zero");
}
else{
    console.log("Number is negative");
}
