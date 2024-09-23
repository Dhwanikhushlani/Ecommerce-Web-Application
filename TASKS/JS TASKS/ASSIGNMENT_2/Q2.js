// Write a JavaScript program that checks if a number is positive, negative, or zero. Print 'Positive', 'Negative', or
// 'Zero' accordingly.

const prompt = require("prompt-sync")()

const num = prompt("Enter a number");
if(num>0){
    console.log("Number is Positive");
}
else if(num==0){
    console.log("Number is Zero");
}
else{
    console.log("Number is Negative");
}
