//CONDITIONAL STATEMENTS
//1. IF ELSE , SWITCH CASES , TERNARY OPERATORS

// FUNCTIONS 
// ARRAY , OBJECT
// LOOPS

// let count = 30;

// IF ELSE:
// if(count==20){
//     console.log("The count is 20");
// }else{
//     console.log("The count is not 20");
// }

// IF ELSEIF ELSE:
// if(count==20){
//     console.log("The count is 20");
// }else if(count>20){
//     console.log("The count is grater than 20");
// }else{
//     console.log("The count is less than 20");
// }

// TAKING INPUT FROM USER ----> USE PROMPT FUNCTION ---> IT IS
//  BROWSER FEATRE NOT A NODE JS FEATUE SO GIVE ERROR IN TERMINAL BUT RUN IN BROWSER CONSOLE
// let firstNumber = prompt("Enter first number");

// console.log(firstNumber);

// TASK -1 
//PROMPT THE USER TO ENTER THEIR USERNAME AND PASSWORD.
//IF USERNAME IS "ADMIN" AND PASSWOORD IS 123 IN NUMBERS
//IF BOTH CONDITION IS TRUE THEN DISPLAY "AUTH SUCCESSFULL" ELSE "AUTH FAILED".

// let username = prompt("Enter the username");
// TYPECAST PASSWORD INTO NUMBER AS IT IS BY DEFAULT IN STRING
// let password = +prompt("Enter the password");

// if(username === "admin" && password === 123){
//     console.log("Auth successfull");
// }
// else{
//     console.log("Auth failed");
// }

// ANOTHER METHOD --->NESTED IF ELSE:
// if(username === "admin"){
//     if(password === 123){
//         console.log("Auth Successfull");
//     }else{
//         console.log("Auth failed");
//     }
// }else{
//     console.log("Auth failed");
// }

// THIRD METHOD -----> TERNARY OPERATORS:
// FOR IF USE "?" FOR ELSE USE ":"

// let count =20;

// count === 20 ? console.log("The count is 20") : console.log("The count is not 20");

// ELSE IF IN TERNARY OPERATOR
// count === 20 ? console.log("The count is 20") : count > 20 ? console.log("The count is greater than 20") 
// : console.log("The count is less than 20");


// USING TERNARY OPERATOR:
// let username = prompt("Enter the username");
// let password = +prompt("Enter the password");

// username === "admin" && password === 123 ? console.log("Auth successfull") : console.log("Auth failed");


// SWITCH CASES :

let dayNumber = 3;
let dayName;

switch(dayNumber){
    case 1 :
        dayName = "Monday";
        break;
    case 2 :
        dayName = "Tuesday";
        break;
    case 3 :
        dayName = "Wednesday";
        break;
    case 4 :
        dayName = "Thursday";
        break;
    case 5 :
        dayName = "MFriday";
        break;
    case 6 :
        dayName = "Saturday";
        break;
    case 7 :
        dayName = "Sunday";
        break;
    default :
        dayName = "Invalid Day Number";
}
console.log(dayName);

// FUNCTIONS
// FUNCTIONS CAN BE DEFINED IN THREE WAYS :
//1, FUNCTION DECLARATION
//2. FUNCTION EXPRESSION
//3. ARROW FUNCTIONS


// 1. FUNCTION DECLARATION
// function sum(){
//     console.log("This is sum dunction");
// }
// sum();


// 2. FUNCTION EXPRESSION

// const sum = function(){//use let also
//     console.log("This is funtion expression");
// }
// sum();

// 3. ARROW FUNCTIONS 

let sum =()=>{
    console.log("This is an arrow function");
}
sum();

// ADDITON FUNCTION :
// let add = (a,b)=>{
//     return a+b;
// }
// let result= add(2,5);
// console.log(result);

//  ANOTHER METHOD
let add = (a,b)=>a+b

let result= add(2,5);
console.log(result);

// ANOTHER METHOD:
// let add = (a,b)=>{
//     console.log(a+b);
// }
// add(2,5);


// SECOND DIFFERENCE BETWEEN VAR , LET AND CONST:
// GLOBAL SCOPE / LOCAL SCOPE OR FUNCTIONAL SCOPE
// IN ES-6 VERSION NEW SCOPE DEINED ---> BLOCK SCOPE---> CURLY BRACES INSTEAD OF MAIN FUNCTION 
// SCOPE I.E IF ELSE SCOPE ARE BLOCK SCOPE

// VAR ----> GLOBAL SCOPE VARIABLE / LOCAL SCOPE VARIABLE(WHEN DEFINED IN FUNCTION)
// VAR IS GLOBAL SCOPE VARIABLE BUT IN CASE OF FUNCTION IT BECOMES LOCAL SCOPE VARIABLE

// LET & CONST ---->BLOCK SCOPE VARIABLE

// GIVES ERROR AS A IS NOT DEFINED AS LET IS BLOCK SCOPE VARIABLE IT CAN ONLY BE ACCESSED AT THIS BLOCK ONLY
// WE CAN ACCESS SAME VARIABLE IN TWO DIFFERENT BLOCKS
// {
//     let a = 20;
// }

// {
//     let a = "shubham";
// }
// console.log(a);


// VAR CAN BE ACCESS ANYWHERE RATHRE THAN FUNCTION BLOCK
// WE CAN ACCESS SAME VARIABLE IN TWO DIFFERENT BLOCKS BUT HERE ONLY SHUBHAM IS PRINTED AS OUTPUT 
// {
//     var a = 20;
// }
// {
//     var a = "shubham";
// }
// console.log(a);



// {
//     var a = 20;
// }
// {
    // let a = "shubham";
    // IF THIS IS COMMENTED IT GIVES OUTPUT 20
//     console.log(a);
// }

// console.log(a);


// VAR IN FUNCTION BLOCK:---> IT WILL GIVER ERROR AS VAR IS NOT LOCAL SCOPE VARIABLE
// function sum(){
//     var a = 20;
//     return a;
// }
// console.log(a);


// VAR IN BLOCK SCOPE VARIABLE
// if(true{
//     var a = 20;
//     return a;
// }
// console.log(a);


// ARRAYS AND OBJECTS :
//INDEXING//0  1  2  3  4
let arr = [10,20,30,40,50];

console.log(arr[0]);
console.log(arr[arr.length - 1]);



// NESTED ARRAY
let nestedArr = [10,20,30,[1,2,3,4],[20,30,40,["aaa","aab",[true , false]]]]
let newArr1 = nestedArr[nestedArr.length-1];
let newArr2 = newArr1[newArr1.length-1];
let newArr3 = newArr2[newArr2.length-1];
// let newArr4 = newArr3[newArr3.length-1];
console.log(newArr3[0]);
// console.log(newArr4);

// OR //

// let newArr = nestedArr[nestedArr.length-1][nestedArr[nestedArr.length-1].length-1]
// [nestedArr[nestedArr.length-1][nestedArr[nestedArr.length-1].length-1].length-1][0];
// console.log(newArr);


// TO ADD SOME ELEMENT AT LAST
// console.log(arr.length);

// arr[arr.length] = "shubham";
// console.log(arr);

// TO REPLACE EXISTING ELEMENT TO NEW ELEMENT
// arr[2] = "shubham";
// console.log(arr);


// OBJECTS :

let obj = {
    //BOTH WAYS ARE CORRECT FIRST IS VARIABLE METHOD
    // firstName : "Dhwani",
    // lastName : "Khushlani"

    //SECOND IS STRING METHOD---> THIS IS KNOWN AS KEY
    "firstName" : "Dhwani",
    "lastName" : "Khushlani"
}
// obj.lastName = "Mittal";
obj.section = "FSD";

// console.log(obj);
// console.log(obj.firstName);

// BOX METHOD TO ACCESS ----> WE CAN ONLY USE STRING IN IT AS VARIABLE NAME ONLY ACCESS 
// VARIABLE BUT HEE WE USE STRING AS FIRST AND LAST NAME SO USE STRING

let firstName = "section";

let keyName = "Address";
// IF WE USE ADDRESS AS VARIABLE INTSEAD OF KEYNAME IT GIVES ERROR AS ADDRESSS IS NOT A VARIABLE as obj[Address] = "Jaipur";
obj[keyName] = "Jaipur";
// obj["Address"] = "Jaipur";

console.log(obj);