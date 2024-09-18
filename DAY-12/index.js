// 1.FILTER
// RETUEN TYPE OF FILTER IS NEW ARRAY WITH 0 TO ORIGINSL ARRAY LENGTH

// let arr = [10,20,30,40,50];

// let filteredArr = arr.filter((item)=>item>30);
// ((item)=>{return item>30}); SAME AS ABOVE CAN ALSO WRITTEN AS THIS

// let filteredArr = arr.filter((item)=>item!=30);
// console.log(filteredArr);



// 2. REDUCE---->USED TO SHORT ARRAY
// ACC ---->ACCUMULATOR---->BY DEFAULT IT IS ZERO AT INITIAL
// CURR---->CURRENT VALUE

// STEPS OF GIVEN REDUCE CODE:
//          ACC         CURR           SUM
//          0           10              10
//          10          20              30
//          30          30              60
//          60          40              100
//          100         50              150


// let sum= arr.reduce((acc,curr)=>{return acc+curr});---------------->GIVES OUTPUT 150 AS SUM OF ARRAY ELEMENTS

// let sum= arr.reduce((acc,curr)=>{return acc+curr},1000);
// GIVES OUTPUT 1150 AS BY ADDING 1000 TO EXISTING SUM OF ARRAY ELEMENTS

// console.log(sum);



// 3. FIND ---> USED TO RETURN ONLY ONE ELEMENT --> THAT IS FIRST MOST ELEMENT WHICH SATISFY ITS TEST CASES

// let arr = [10,20,30,40,50];
// let foundItem = arr.find((item)=>item>20);

// IF SINGLE PARAMETER IS THERE THEN IT CAN ALSO BE WRITTEN AS:
// let foundItem = arr.find(item=>item>20);

// console.log(foundItem);




// 4. FINDINDEX---> USED TO FIND INDDEX OF FIRST ELEMENT SATISFY TEST CASE :

// let arr = [10,20,30,40,50];

// IT RETURN 3 AS 40 IS FIRST ELEMENT SATISFY CONDITION AD ITS INDEX IS 3
// let foundElementIndex = arr.findIndex(item=>item>30);
// console.log(foundElementIndex);



// 5. SOME ---> IF ANY ONE ELEMENT FOLLOW CONDITION THEN IT IS TRUE ---> SO ATLEAST  ONE
//  SHOULD FOLLOW THEN IT IS TRUE ELSE FALSES

// let arr = [10,20,30,40,50];
// let arr = [11,21,31,41,51];
// let hasEven = arr.some((item)=>item%2===0);

// console.log(hasEven);




// 6. EVERY ----> ALL ELEMEMTS SHOULD SATISFY THE CONDITION IF ONE DIDNT THEN ANS IS FALSE IF ALL FOLLOWS 
// THEN IT IS TRUE

// let arr = [11,21,31,41,51];
// let arr = [10,20,30,40,50];

// let evenArr = arr.every((item)=>item%2===0);
// console.log(evenArr);




// *OBJECT METHODS*



// 1. KEYS ----> GIVES KEYS AS FIRSTNAME AND LASTNAME ONLY NOT ITS VALUES
// let obj ={
//     firstName : "Dhwani",
//     lastName : "Khushlani"
// }

// IN ARRAY WE WRITE ARRAYNAME.FUNCTION
// BUT IN OBJECT--> OBJECT.FUNCTIONNAME(OBJECTNAME)--->HERE OBJECT BEHAVS AS CONSTRUCTOR

// let keys = Object.keys(obj);
// console.log(keys);




// 2. VALUES ---> GIVES VALUES OF KEYS AS YOUR NAME AND SURNAME
// let obj ={
//     firstName : "Dhwani",
//     lastName : "Khushlani"
// }

// let values = Object.values(obj);
// console.log(values);




// 3. ENTRIES ----> GIVES OVERALL ENTIES WITH KEY AND VALUES
// let obj ={
//     firstName : "Dhwani",
//     lastName : "Khushlani"
// }
// let entries = Object.entries(obj);
// console.log(entries);




// 4. FREEZE----> MADE OBJECT ONSTANT DO NOT ALLOW TO CHANGE VALUE OF OBJECT OR ADD ANY NEW PROPERTY TO IT
// let obj = {
//     firstName : "Dhwani",
//     lastName : "Khushlani"
// }
// Object.freeze(obj);

// obj.firstName = "Himesh";
// obj.address = "Dungarpur";
// console.log(obj);





// GIVES ERROR AS CONST IS USED
// const num =20;
// num = 50;
// console.log(num);




// Q. HOW CONST WORKS DIFFRENTLY IN OBJECCT AND NUMBER?
// Q. WHAT IF LET IS USED INTEAD OF CONST?

// IN OBJECTS IF CONST IS USED WITH OBJECT.OBJECTKEYS THEN IT ENAVLES TO CHANGE VALUE BUT IFF
// INTEAD OF BELOW CODE IF WE DIRECT ENABLE CHANGES TO OBJECTNAME = VALUE THEN IT GIVES ERROR DUE TO CONST USED.
// I.E, object1 = "Himesh"; -----> GIVES ERROR

// const object1 = {
//     firstName : "Dhwani",
//     lastName : "Khushlani"
// }
// object1.firstName = "Himesh";
// console.log(object1);




// 5. SEAL ---> IT IT USED TO CHANGE EXISTING VALUE TO NEW VALUES OF OBJECT BUT DOS NOT ENABL TO ADD NEW PROPERTY 
// TO OBJECT

// let obj ={
//     firstName : "Dhwani",
//     lastName : "Khushlani"
// }
// Object.seal(obj);

// obj.firstName = "Himesh";
// obj.address = "Dungarpur";
// console.log(obj);


// IF THIS PROPERTY EXISTS IN OBJECT THEN IT GIVES TRUE ELSE FALSE
// IT IS ONLY PROPERTU WHICH DIRECT WRITTEN WITH OBJECTNAME.PROPERTY INSTEAD OF ANY CONSTRUCTOR USED

// 6. HASOWNPROPERRTY
// GIVES FALSE AS GENDER IS NOT IN CURRENT OBJECT
// console.log(obj.hasOwnProperty("gender"));




// *STRING METHODS*

// 1. CHARAT ---> GIVES WITH INDEX TELLS AT INDEX GIVEN WHICH CHARACER IS THERE
// HERE IN STRING INDEX STARTS WITH 0 AND SPACE IS ALSO INCLUDED IN IT

// let str = "Hello World";

// let char = str.charAt(6);
// console.log(char);




//2. CONACT ----> MERGES STRINGS

// let str = "Hello World";

// IF SPACE IS NOT GIVEM IT CONCATENATE AS WITHOUT SPACE
// let newStr = str.concat(" Techno");
// console.log(newStr);



// 3. INCLUDES ---> IF GIVEN WORD IS IN STRING THEN TRUE ELSE FALSE
// IT IS CASE SENSITIVE

// let str = "Hello World";
// let hasWorld = str.includes("World");
// console.log(hasWorld);




// 4. INDEXOF ---> TO FIND INDEX OF GIVEN CHARACTER----> RETURN INDEX NUMBER
// IF TWO CHARACTERS ARE SAME THEN PRIORITY GIVEN IS TO FIRST COME 

// let str = "Hello World";
// let index = str.indexOf("o");

// HERE FOR TWO CHARCTERS THE INDEX NUMBER IS AS OR STARTS WITH O SO INDEX NUMBER IS OF "O"
// let index = str.indexOf("or");

// console.log(index);




// 5. LASTINDEXOF ----> GIVES INDEX NUMBER OF CHARARCTER GIVEN USED IN STRING AT LAST NOT FIRST
// let str = "Hello World";
// let index = str.lastIndexOf("o");

// console.log(index);




// 6. SLICE ---> GIVES RESULT AS CHAR STARTS FROM AND GOES UPO 8 WHRE 8TH CHAR IS NOT INCLUDED
// let str = "Hello World";
// let slicedStr = str.slice(3,8);

// let slicedStr = str.slice(-5);
// console.log(slicedStr);





// 7. SUBSTRING ---> SAME AS SLICE 
// SLICE TOLERATE NEGATIVE VALUES AND GIVES OUTPUT BUT IN SUBSTRING NEGATIEV VALUE IS NOT TOLERATED AND 
// TREATED S ERO ONLY AND RETURNS WHOLE STRING AS IT IS AS SHON BELOW

// let str = "Hello World";
// let subStr = str.substring(4,8);

// let subStr = str.substring(-5);
// console.log(subStr);




// 9. TOUPPERCASE / TOLOWERCASE

// let str = "Hello World";
// let newStr = str.toLowerCase();
// let newStr = str.toUpperCase();

// console.log(newStr);




// 10. TRIM ----> REMOVE ALL EXTRA SPACES BUT DO NOT TRIM SPACE BETWEEN STRING IT ONLY REMOVE SPACES OF SIDE

// let str = "     Hello       World       ";
// console.log(str.length);
// let trimmedStr = str.trim();
// console.log(trimmedStr.length);




// Q MAP ,FILTER ,REDUCE QUESTIONS?
// Q SLICE SPLICE SPLIT
// SLICE --> USED IN BOTH ARRAY AND STRING
// SPLICE ---> USSED ONLY IN ARRAY
// SPLIT USED ONLY IN STRING




// 11. SPLIT ---> USED TO SPLIT OR BREAKS STRING AND RETURN IT IN ARRAY --> BREAKS FROM SPACES AS
// IF NO SPACE IS GIVEN THEN IT RETUEN EVERY SINGLE CHARACTER AS SINGLE ELEMENT OF ARRAY WITH SPACES

// let str = "Hello World";
// let splittedStr = str.split("");

// let splittedStr = str.split("Hello World");
// console.log(splittedStr);




// 12. REPLACE ---> REPLACE EXISTING WORD TO NEW WORD ---> ("EXISTING" , "NEW")
// let str = "Hello World";

// let newStr = str.replace("World" , "Techno");
// console.log(newStr);




// 13. REPEAT
// let str = "Hello World";
// let newStr = str.repeat(2);
// console.log(newStr);




// MATH OBJECT ----> USED TO GENERTAE RANDOM NUMBERS AS OTP
// MATH IS AN OBJECT WITH DIFFERENT METHODS AS FOLLOWS

// 1. RANDOM() :---> ALWAYS GIVE NUMBER BETWEEN 0 TO 1 ONLY NEVER GIVE 0 AND 1 PROPERLY 
// GIVES RANDOM NUMBER EVERRYTIME

// let num = Math.random();
// console.log(num);




// 2. ROUNO / FLOOR / CEIL--->
// let num = 10.4657;
// console.log(Math.round(num));
// GIVES SMAALEST VALUE
// console.log(Math.floor(num));
// GIVES LARGE VALUE
// console.log(Math.ceil(num));




// 3. POW ---> POWER
// console.log(Math.pow(2,3));



// 4. SQRT ---> SQUARE
// console.log(Math.sqrt(16));





// ASSIGNMENT ----> CREATE AN "OTP" OF "4-DIGIT" :
// SOLUTION :

// let otp = Math.random()----> range = 0 - 0.999
// let otp = Math.random()*10000 ----> 0 - 9999.9999
// let otp = Math.random()*9000 -----> range = 0 -8999.9999
// let otp = 1000+Math.random()*9000 ----> range = 1000 - 9999.9999


// RANGE ---> 1000 - 9999 (FOUR DIGIT NUMBERS ONLY)
let otp = Math.floor(1000 + Math.random()*9000);
console.log(otp);