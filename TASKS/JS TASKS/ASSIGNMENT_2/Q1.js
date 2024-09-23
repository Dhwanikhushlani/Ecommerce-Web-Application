// Write a JavaScript program that takes a first name and a last name as input, concatenates them to form a full
// name, and then prints the full name.
const prompt = require("prompt-sync")()

const firstName = prompt("Enter your firstname : ");
const lastName = prompt("Enter your lastname : ");
const fullName = firstName.concat(" "+lastName);

console.log("Full name is : ",fullName);