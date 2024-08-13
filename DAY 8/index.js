// console.log("Hello Techno");

// alert("Hello Techno");

//var , let , const

// DEFINIG VARIABLE IN JS

// var firstnum = 20;

// console.log(firstnum);

//DATATYPES---->1.PRIMITIVE ---> STRING, NUMBER(ALL INT FLOAT DOUBLE ETC.), BOOLEAN , UNDEFINED, SYMBOL, BIGINT.
//              2.REFEERENCE OR OBJECT TYPE DATATYPE---->ARRAY, OBJECTS, DATE, NULL.

//USE STRING IN BOTH DOUBLE AND SINGLE QOUTES AS:
// var firstVar = "Dhwani Khuslani";
// var firstVar = 'Dhwani Khushlani';
// WE DO NOT USE SINGLE QOUTE STRING ON STATEMENT SUCH AS 'I'M A FULL STACK DEV'--->IT GIVES ERROR--->USE DOUBLE QOUTES INSTEAD

// var firstVar= "I'm an Engineering Student"
// PRINTING STRING
// console.log(firstVar);

// DEFINE VARIABLE TYPE USING TYPEOF KEYWORD
// console.log(typeof firstVar);

// NUMBER DATATYPE
// var firstVar= -20.01;
// console.log(firstVar);
// console.log(typeof firstVar);

//BOOLEAN DATATYPE
// var firstVar= true;
// console.log(firstVar);
// console.log(typeof firstVar);

//UNDEFINED DATATYPE
// var firstVar= undefined;
// console.log(firstVar);
// console.log(typeof firstVar);

//ARRAY DATATYPE----->FOR JS IT IS COLLECTION OF MULTIPLE DATATYPES
//ALL REFERENCED DATATYPE HAVE OBJECT TYPE
// var firstVar= [20,30,"Hello",true,undefined];
// console.log(firstVar);
// console.log(typeof firstVar);

//NULL DATATYPE
// var firstVar= null;
// console.log(firstVar);
// console.log(typeof firstVar);

//DATE DATATYPE
// var firstVar= new Date();
// console.log(firstVar);
// console.log(typeof firstVar);


// CREATING OBJECTS--->COLLECTTION OF KEY VALUE PAIRS---->CREATE IT IN CURLY BRACES.
// var firstVar = {
//     firstName : "Dhwani",
//     lastName : "Khushlani"
// };
// console.log(firstVar);
// console.log(typeof firstVar);

// CREATING MULTIPLE OBJECTS IN ARRAY---->"[{}, {}, {}]"--->KNOWN AS JSON FORMAT----->ARRAY OF OBJECTS(MOSTLY USED)
// MULTIPLE ARRAYS IN ARRAY---->[[], [], []]


// DYNAMICALLY TYPED LANGAUGE AS:--> IT CAN BE DEFINED IN ANY DATATYPE AS A SINGLE VARIABLE CAN CONTAIN MANY DATATYPES 
// VALUE AT A SINGLE TIME BUT IT WILL SHOW THE LAST DEFINED DATATYPE AS OUTPUT AND ALSO GIVE TYPE OF THAT OUTPUT
// var firstVar = "Hello Techno";
// firstVar = [20,30];
// firstVar = {
//     firstName : "Dhwani",
//     lastName : "Khushlani"
// };

// firstVar = true;

// console.log(firstVar);
// console.log(typeof firstVar);


//VAR , LET , CONST----> 3 KEYWORDS TO DEFINE VARIBLES
//DIFFREENCE BETWEEN VAR AND LET :
// VARIABLE DEFINED WITH VAR CAN BE REASSIGNED OR CAN BE REDCLARED I.E ;
//REASSIGN
// var num1 = 20;
// num1 = 30;

//REDECLARE
// var num1 =20;
// var num1 =30;


//LET--->BLOCK SCOPE VARIABLE IT PROVIDES SOME RESTRICTION SO IF ONE VARIABLE IS DEFINED TWICW WITH LET IT WILL GIVE ERROR
//VARIABLE DEFINED WITH LET CANNOT BE REDECLARRED BUT IT CAN BE REASSIGNED I.E ;
// let num2 = 20;
// num2 = 30;


// VARIABLE DEFINED WITH CONST CANNOT BE REDEFINED AND REASSIGNED I.E;
//GIVES ERROR
// const num3 = 100;
// num3 = 1000; 


//OPERATORS
//ARITHMETIC OPERATORS ----> +, -, *, /

let a = 10;
let b = 20;

let add = a + b;
let sub = a-b;
let mul = a*b;
let div = a/b;
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);

// STRING CONCATENATION
let firstName = "Dhwani";
let lastName = "Khushlani";

console.log(firstName+" "+lastName);

// POWER OF ANY NUMBER
console.log(a**b);
// MODULUS OR REMAINDER OF NUMBERS
console.log(a%b);

// ONLY IN + OPERATOR NUMBER IN "" and normal number ARE CONSIDERED AS STRING OR BOTH CONSIDERED AS STRING AAS:
console.log(5+"5");

// BUT IN - * AND/ IT IS NOT CONSIDERED AS STRING IT IS AS USUSAL AN NJUJMBER
console.log(5-"5");
console.log(5*"5");
console.log(5/"5");

// ADDITION ASSIGNMENT OPERATOR:
let x=5;

// x=x+10;-->also written as :
x+=10;

console.log(x);


console.log("Dhwani"+10);

// IT WILL GIVE NAN-->NOT A NUMBER
console.log("dhwani"-10);

// TYPE CORROSION OR TYPE CONVERSION USING "+" OPERATOR:--> convert it into number datatype
// JAVASCRIPT ALWAYS GIVE TYPE OF "NAN"  AS NUMBER ONLY.

// GIVES TYPE AS STRING USING + SIGN IT CAN CONVERTS TO NUMBER DATATYPE BUT ONLY NUMERICAL STRING CAN BE DONE AS 
// + OPERATOR USED TO CONVERT IT IN  NUMBER
// let str= "10";
// console.log(str);
// console.log(typeof str);

// let str= "10";
// let conStr = +str;
// console.log(conStr);
// console.log(typeof conStr);

// IT IS NOT APPLICABLE FOR STRING AS HERE NAME IS A STRING WHICH CANNOT BE CONVERTED INTO NUMBER
let str = "Dhwani";
let conStr = +str;
// GIVES NAN
console.log(conStr);
console.log(typeof conStr);


// STRING CONCATENATION
// let str1 = "5";
// let str2 = +str1;
// console.log(5+"5");


// SUBTRACTION ASSIGNMENT OPERATOR
// let y = 10;
// // y  = y-3;
// y-=3;
// console.log(y);

// MULTIPLICATION ASSIGNMENT OPERATOR
// let y = 10;
// // y  = y*3;
// y*=3;
// console.log(y);

// DIVISION ASSIGNMENT OPERATOR
// let y = 10;
// // y  = y/3;
// y/=3;
// console.log(y);

// REMAINDER ASSIGNMENT OPERATOR
// let y = 10;
// // y  = y%3;
// y%=3;
// console.log(y);

// EXPONNTIAL ASSIGNMENT OPERATOR
// let y = 10;
// // y  = y**3;
// y**=3;
// console.log(y);

// 2. COMPARISON OPERATOR--->ALWAYS RETURN BOOLEAN VALUE AS OUTPUT

// let num4 = 10;
// let num5 = 20;

// console.log(num4>num5);
// console.log(num4==num5);
// console.log(num4>num5);
// console.log(num4<=num5);
// console.log(num4>=num5);
// console.log(num4!=num5);

let num4= 10;
let num5= "10";

console.log(num4== num5);
// === ALWAYS COMPAFRE DATATYPES AS HERE BOTH VALUES ARE SAME SO WE GET TRUE IN == BUT BOTH HAVE
//  DIFF DATATYPES AS NUM4 IS NUMBER WHILE NUM5 IS STRING
console.log(num4===num5);

// 3. LOGOCAL OOPERATORS :
// AND(&&), OR(||) 

// let isLoggedIn =true;
// let isAdmin=true;

// console.log("Is the user logged in and an admin?",
// isLoggedIn && isAdmin);


// FOR NUMBERS INSTEAD OF BOOLENA VALUES:
// IT CONSIDERED NUMBERS GREATER THAN 0 AS POSITIVE OR TRUE VALUE SO BOTH ARE >0 GIVES TRUR && TRUE --> TRUE 
// SO IT WILL ALWAYS GIVE LAST OUTPUT THAT IS 20
// NOTE 0 IS CONSIDERED AS FALSE VALUE
// EVEN NEGATIVE NUMBER IS CONSIDERED AS TRUE SO VALUES OTHER THAN 0 ARE TRUE
let isLoggedIn =10;
let isAdmin=20;
// GIVES OUTPUT 20
console.log("Is the user logged in and an admin?",
isLoggedIn && isAdmin);


// SHORT CIRCUIT EVALUATION ---> AS IN OR OPERAOTOR IT CHECKS FIRST VALUE IF IT IS TRUE IT RETURNS IT ONLY BUT
//  IF IT IS FALSE IT CHECKS ANOTHER VALUE I.E;
// GIVES OUTPUT 10 AS  FIRST VALUUE IS TRUE IT DIDNT GO TO NEXT VALUE ONLY RETURNS IT
console.log(10 || 1000);