// STRICT MODE INTIALISING AS
"use strict"

// LOOPS , STRICT MODE, CONSOLE TYPES, ARRAY METHODS
// FOR , EHILE, DO WHILE

// let count = 11;

//1. WHILE LOOP
// IF COUNT++ IS NOT THERE THEN IT WILL B INFINITE LOOP
// while(count<=10){
//     console.log(count);
//     count++;
// }


//2. DO WHILE LOOP
// IF COUNT = 11 THEN IN DO WHILE IT WILL EXECUTE ONE TIME AND PRINT 11 THEN CONDITION APPLIED 
// BUT IN WHILE IT WILL NOT RUN AS CONDITION DOESNT SATISFY
// do{
//     console.log(count);
//     count++;
// }while(count<=5);


//3. FOR LOOP
// IN NORMAL MODE I CAN BE INITIALISED WITHOUT LET AND IT WILL NOT GIVE ANY ERROR BUT IN STRICT MODE IT GIVES ERROR
// for(let i=0;i<=10;i++){
//     console.log(i);
// }


// LOOPS IN ARRAY
// let arr= [10,20,30,40,50,60,70,80,90];


// for (let i=0; i < arr.length ; i++){
//     console.log(arr[i]);
// }


// 4. FOR OF AND FOR IN LOOP

// let items = ["first","second",3,4,"fifth"];

// HERE IN FOR OF LOOP IT PRINTS ELEMENTS OF AARRAY IN WHICH ITEM CAN BE DENOTED BY ANY VARIABLE NAME I.E, A, B ETC.
// for (let item of items){
//     console.log(item);
// }

// HERE IN FOR IN LOOP IT PRINTS INDEX NUMBER OF ARRAY IN WHICH INDEX CAN BE DENOTED BY ANY VARIABLE NAME I.E, A, B ETC.
// for(let index in items){
//     console.log(index);
//     console.log(items[index]);
// }


// STRICT MODE---> USE "use dtrict" IN STARTING OF FILE --->GLOBAL LBVEL
// IT CAN ALSO BE DEFINED IN PARTICULAR SCOPE OR IN FUNCTION
// IN STRICT MODE NO VARIABLE CAN BE ACCESSED IF IT IS NOT DEFFINED BY LET CONST OR VAR
// let a= 20;
// b=30;

// HERE IF B IS DEFINED AS IN NORMAL FORM IT WILL EXECUTE AND GIVE OUTPUT
// NUT HERE IT WILL GIVE ERROR AS IN STRICT MODE WE HAVE TO DEFINE VARIABLE

// console.log(b);


// IN THIS FUNCTION IF IT IS IN NORMAL MODE THEN IT TAKES BOTH SAME ARGUMENTS BUT IN STRICT MODE IT 
// GIVES ERROR AS SAME ARGUMENT
// function sum(a,a){
    // WE CAN ALSO USE STRICT MODE IN SCOPE OR IN FUNNCTION AS
    // "use strict"
//     console.log("Sum fuction");
// }

// sum();



// TYPES OF CONSOLE ---> RUN IN BROWSER

// 1. CONSOLE.LOG
// console.log("Log statement");


// 2. CONSOLE.ERROR----> SHOW ERROR IN RED COLOR
// console.error("This is an error console");


// 3. CONSOLE.WARN--->SHOW WARNING
// console.warn("This is a warning console");


// 4. CONSOLE.ASSERT-----> TAKES TWO PARAMETERS ONE IS EXPPRESSION THE COMPRING PART AND ONE IS 
// STATEMENT PART TO BE PRINT
// IF CONSITION IS FALSE ONLY THEN STATEMENT OF CONSOLE IS PRINT OTHERWISE IT NOT PRINTS AS IN 
// SECOND LINE OF ASSERRT IT TIS TRUE SO IT CANNOT PRINT
// console.assert(5>10,"5 is not greater than 10");
// console.assert(10>5,"10 is not greater than 5");



// 5. CONSOLE.DIR---> MAKE A DIRECTORY
// let  person = {
//     name : "Dhwani",
//     age :"**",
//     address:{
//         city:"Udaipur",
//         zipCode:"302018"
//     },
//     hobbues :["Riding","Travelling"]
// }
// console.dir(person);



// 6. CONSOLE.TABLE ---> SHOWS DATA IN TABULAR FORMAT
// let data =[
//     {
//     name :"Dhwani", address : "Udaipur", dept:"FSD"
//     },
//     {
//     name :"Kevali", address : "Udaipur", dept:"FSD"
//     },
//     {
//     name :"Roshni", address : "Udaipur", dept:"CIVIL"
//     }
// ]
// console.table(data);



// 7. CONSOLE.GROUP---> GROUPS OF LOG--->END OF GROUPS END BY --->CONDOLE.GROUPEND
// console.group("Group");
// console.log("Message 1");
// console.log("Message 2");
// console.groupEnd();



// 8. CONSOLE.COUNT---> COUNTS THR NUMBER OF CONSOLE COUNT USED I.E, 3 NO. OF COUNTERS 
// console.count("Counter");
// console.count("Counter");
// console.count("Counter");



// ARRAY METHODS---->

// 1. ARRAY PUSH()-->RETURN LENGTH OF ARRAY AND CHANGES ORIGINAL ARRAY
// Q. IF ANY ARRAY RETURN ANY VALUE OR NOT IF RETURN THEN WHAT IT RETURN AND IF IT CHANGES ARRAY OR NOT?
// let arr = [10,20,30,40,50,60];

// PUSH 1000 AT LAST OF ARRAY
// IT CHAMGES ORIGINAL ARRAY
// arr.push(1000);

// IT RETURNS LENGTH OF ARRAY AS
// OUTPUT IS 7 
// let result= arr.push(1000);
// console.log(result);

// OUTPUT IS ARRAY AFTER CHANGE
// console.log(arr);


// 2.. ARRAY.POP()--->
// POP LAST ELEMENT OF ARRAY HERE 1000 IS LAST WHICH IS POPED
// console.log(arr.pop());

// PRINT ARRAY AFTER POP
// console.log(arr);



// 3.ARRAY.UNSHIFT---->GIVES RETURN AS LENGTH OF ARRAY AND CHANGES IN ORIGINAL ARRAY --->INSERT ELEMENT ON 
// FIRST SPACE OR INSTART OR 0TH INDEX OF ARRAY
// let arr=[10,20,30,40,50,60];

// console.log(arr.unshift(1000));
// console.log(arr);


// 4. ARRAY.SHIFT()---->SAME AS UNSHIFT HERE--->THE UNSHIFTED ELEMENT THAT IS ADDED IS BEING REMOVED IN SHIFT
// console.log(arr.shift());
// console.log(arr);


// 5. ARRAY.CONCAT--->CONCAT TWO ARRAYS AS BOTH SAME ARRAYS AND TWO DIFF ARRAYS CAN ALSO BE CONCATE
// IT DOESN CHANGES ORIGINAL ARRAY IT RETURNS NEW ARRAY

// let arr1 = [10,20];
// let arr2 = [30,40];

// let result= arr2.concat(arr2);

// console.log(arr1);
// console.log(arr2);
// console.log(result);




//6. ARRAY.SLICE ---> SLICE OR SPLITS ARRAY---->IT RETURNS NEW ARRAY
// SLICE(START"NUMBER , END:NUMBER)--->HERE END NUMBER IS NOT INCLUDED START WITH START NUMBER AND END BEFORE 
// END NUMBER

// let arr=[10,20,30,40,50,60];

// HERE IT PRINTS OUTPUT AS START ROM 2 INDEX AND PRINT TILL 4 INDEX WHERE 5 INDEX IS NOT INCLUDED
// let slicedArr = arr.slice(2,5);
// console.log(slicedArr);




//7. ARRAY.SPLICE()---> IN ARRAY AT ANY POSITION IF WE WANT TO ADD OR DELETE ANY ELEMENT THAT IS
// HERE ARR.SPICE(START :INDEX NUMBER , DELETE COUNT:NUMBER)---->FIRST IS INDEX NUMBER AND SECOND IS COUNT NUMBER
// IT CHANGES ORIGINAL ARRAY 

// **PUSH POP SHIFT UNSHIFT SPLICE---->CHANGES ARRAY**

// let arr=[10,20,30,40,50,60];

// HERE IT DELETES ARRAY AFTER 2 POSITION INCLUDING IT
// arr.splice(2);


// IF WE GIVE NO. OF DELETE COUNT I.E 2 ELEMENTS AFTER 2ND POSITION AS
// arr.splice(2,2);


// TO ADD ELEMENT USING SPLICE AS AFTER 2ND POSITION 2 ELEMENTS DELETED AND ONE INSERTED AS:
// arr.splice(2,2,"dhwani","khushlani");


// IF ONLY ADDITION OF ELEMENT AND NO DELETION THEN GUVE COUNT AS 0 AS GIVE INDEX AFTER WHICH YOU WANT TO INSERT 
// NEW ELEMENT AS
// arr.splice(2,0,"dhwani","khushlani");

// console.log(arr);



//8. ARRAY.INCLUDES(NUMBER OR VALUE)---->IF GIVES TRUE OR FALSE IF THIS VALUES EXISTS IN ARRAY GIVES TRUE 
// ELSE GIVES FALSE

// let arr=[10,20,30,40,50,60];

// let result= arr.includes(40);
// console.log(result);



// 9. ARRAY.REVERSE()---->REVERSE THE ARRAY
// arr.reverse();
// console.log



//10. ARRAY.JOIN() --->JOIN THE WHOLE ARRAY NORMALLY AS A SINGLE NUMBER OR STRING--->ITS TYPE IS STRING
// WE CAN JOIN USING ANY OPERATOR AS IF BLANK INVERTED COMMAS PASSED THEN ALL NUMBERS JOINS A SINGLE NUMBER
// IF WE PASS "+" THEN + SHOWS BETWEEN ALL NUMBERS
// USED TO CHANGE DATE TYPE AS FROM 10-2-24 TO 10/2/24

// let arr=[10,20,30,40,50,60];
// let result=arr.join("");
// let result=arr.join("+");
// let result=arr.join("techno");
// console.log(result);



// 11. ARRAY.FLAT(VALUE)--->FLATS THE VALUE AT LEVELS DEPENDS ON NUMBER AS:
// let arr=[10,20,30,40,50,60];

// let arr1=[10,20,[30,[40]]];
// FLATS ONE ARRAY AS ONE INNER ARRAY IS REMOVED OR FLATTENED
// let result= arr1.flat(1);
// console.log(result);



// MAP , FILTER , REDUCE
// 12. ARRAY.MAP()--->USED TO STORE CALL BACK FUNCTIONS

// HIGHER ORDER FUNCTION ---> FUNCTION WHICH ACCEPTS ANOTHER FUNCTION IN ITS PARAMETER
// CALLBACK OR ANONYMOUS FUNCTION ---> FUNCTION UNDER HIGHER ORDER FUNCTION AS A PARAMETER ARE CALL BACK FUNCTION
let arr=[10,20,30,40,50,60];

// let newArr = arr.map((item)=>{
//     return item*10;
// })
// NEW ARRAY LENGTH IS ALWAYS EQUAL TO EXISTING ARRAY LENGTH
// console.log(newArr);
// console.log(arr);


// let newArr = arr.map((item)=>{
// if (item == 30){
//     return item;
// }
// return item * 100;
// })


// GIVES INDEX NUMBER WITH VALUE OF ITEM
// let newArr = arr.map((item,i)=>{
//     if (item == 30){
//         return item;
//     }
//     return item * i;
//     })

// console.log(newArr);
// console.log(arr);
// NOTE:
// MAP RETURNS A NEW ARR WITH SAME LENGTH AS ORIGINAL



// 13. FOR EACH FUNCTION---->ARRAY.FOREACH()-->
// Q. DIFFERENCE BETWEEN MAP AND FOR EACH FUNCTION
// ANS.
// FOR EACH ALSO ACCEPTS CALL BACK FUNCTION
// MAP RETURN ARRAY WHILE FOR EACH RETURN UNDEFINED OR NOTHING AS-->

let result= arr.forEach((item,i)=>{
    console.log(i);
    // return item;
})

// ORIGINAL ARRAY IS NOT CHANGED IN FOR EACH AS
console.log(arr);

console.log(result);