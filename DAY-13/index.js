// DATE , REST , SPREAD , DOM

let date = new Date();


// TYPE OF DATE IS OBJECT
// console.log(typeof date);


// GIVES CURRENT DATE NUMBER 
// console.log(date.getDate());


// TO COUNT PRESENT DAY NUMBER RANGES FROM 1-7
// console.log(date.getDay());


// TO COUNT PRESENT MONTH NUMBER RANGES FROM 0-11
// console.log(date.getMonth());


// GIVES CURRENT YEAR
// console.log(date.getFullYear());



// GET TIME ---> THIS TIME IS IN MILISECONDS 
// TO FIND GENERATE UNIQUE AND RANDOM NUMBER WE USE GETTIME FUNCTTION AS TIME IN MILISECONDS ONCE GO NEVER BE BACK
console.log(date.getTime());



// GET HOURS ---> GIVES CURRENT HOURS
console.log(date.getHours());



// GET MINUTES ---> GIVE MINUTES
console.log(date.getMinutes());



// GET SECONDS --> GIVE SECONDS
console.log(date.getSeconds());



// TODATESTRING----> GIVES CURRENT DATE FORMAT IN STRING
console.log(date.toDateString());



// TOTIMESTRING ----> GIVES CURRENT TIME IN STRING AS GMT
console.log(date.toTimeString());




// TO LOCALE DATE STRING ----> GIVES DATE IN DIFFRENT FORMAT ACCORDING TO LOCALS AS IN ASIA DD--MM--YY 
// FOLLOWS SO IT WILL GIVE IN IT
console.log(date.toLocaleDateString());


// SAME AS DATE ONE ABOVE
console.log(date.toLocaleTimeString());


// let firstName = "vinay";

// *DESTRUCTURING*

// let arr =[10,20,30,50,60,80];

// TO ACCESS THIRD ELEMENT OF ARRAY
// let num = arr[2];


// DESTRUCTURE
// let[num]=arr;
// console.log(num);


// HERE WE CAN STORE ANY NUMBER OF ARRAYS IN NEW ARRAY

// let[num1, num2]= arr;
// console.log(num1, num2);



// HERE WE CAN SKIP ONE ELEMENT ALSO IN NEW ARRAY AS FOLLOWS:

// let[num1, , num3]= arr;
// console.log(num1, num3);




// TO KEEP ALL ELEMENTS RATHER THAN ANY ONE OR TWO ELEMENTS CAN BE WRITE WITH REST OPERATOR
// IF "..." 3 DOTS IS USED IN LHS THEN IT IS REST OPERATOR MOSTLY USED IN DESTUCTOR
// IF "..." 3 DOTS USED IN RHS THEN IT IS SPREAD OPERATOR

// let[num1, ...newArr]= arr;
// console.log(newArr);




// TO GIVE VALUES TO ELEMENT IN DESTRUCTOR

// let arr = 10;

// IT GIVES OUTPUT OF NUM2 AS UNDDEFINED
// let[num1, num2] = arr;

// SET DEFAULT VALUE OF NUM2 TO GET OUTPUT
//  let[num1, num2 =100] = arr;
//  console.log(num1, num2);




//*OBJECT DESTRUCTURING*
// IN OBJECT VALUES CAN BE ACCESSED BY KEYS BUT IN ARRAY IT IS ACCESED BY INDEXING 

// let obj = {
//     firstName : "Dhwani",
//     lastName : "Khushlani",
//     // address : "Dungarpur",
//     gender : "Female"
// }

// HERE FIRSTNAM IS TREATED OR ACT AS GLOBAL VARIABLE WHICH CAN BE USED IN FILE ANYWHERE
// let {firstName} = obj;

// let {firstName , address} = obj;

// let {firstName , address = "Udaipur"} = obj;

// console.log(firstName, address);


// let obj1 ={};

// HERE AN EMPTY OBJECT IS CREATED IN WHICH WE WANT KEY AS THE VALUE OF FIRST OBJECT AS DHWANI SHOULD BE KEY CONTAINING XYZ 
// VALUE IN IT SO IT CAN BE WRITTEN WITH SQUARE BRACES AS BELOW:
// obj1[firstName] = "xyz";

// IF IN SQAURE BRACES ABOVE INVERTED COMMAS ARE USED THEN IT TAKES KEYS OF FIRST OBJECT AND IF DOT OPERATOR IS USED IT 
// CHANGES OR MODIFY FIRST OBJECT VALUES AND KEYS REMAIN SAME AS
// obj1.firstName = "vinay";
// obj1[address] = "abc";

// console.log(obj1);


// IF THERE IS CONFLICTIGN VRIABLE AS WITH SAME NAME IN ONE FILE THEN KEY CAN BE RENAMED USING COLON AS :

// let obj = {
//     firstName : "Dhwani",
//     lastName : "Khushlani",
//     // address : "Dungarpur",
//     gender : "Female"
// }

// // FIRSTNAME RENAMED WITH A
// let {firstName:a, address} =obj;

// console.log(a);


// ARRAY ---> REFERENCE TYPR DATATYPE ---> DENOTES REFERENCE--->GIVES PRIORITY TO ADDRESS TAKES VALUES FROM ADDRESS
// ARRAYS AND OBJECT ARE CALL BY REFERENCE
// HERE OUTPUT IS TRUE AS IN  BOTH ARRAY 1000 IS PUSHED
// let arr1 =[10,20,30];


// HERE IT COPIES ADDRESS AS ARR1 COPIES ITS ADDRESS IN ARR2 SO ARR2 GOES TO ADDRESS OF ARR1 AND PUSH VALUE IN IT AND 
// ALSO PUSHES VLUES IN ITS OWN ADDRESS FIRST AND THEN IN ARR1 ADDRESSS AS IT HAS COPIED ADDRESS
// let arr2 = arr1;

// arr2.push(1000);

// console.log(arr1===arr2);



// NUMBER IS PRIMITIVE DATATYPE IT TAKES VALUES DIRECTL OR CALL BY VALUE
// HERE OUTPUT IS FALSE AS HERE BOTH DONT HAVE INCREMENT
// let num1 =20;
// let num2=num1;

// num2=+10;

// console.log(num1===num2);



// let arr1=[10,20,30];
// let arr2=[10,20,30];

// arr2.push(1000);

// console.log(arr1 === arr2);




// SPREAD OPERATOR :

// let arr1 = [10,20,30];

// TAKES SAME REFERENCE
// let arr2 = arr1;



// TO GIVE BOTH DIFFERENT REFERENCE BOTH SHOULD NOT BE SAME SO USE SPREAD OPEERATOR
// HERE VALUES OF ARR1 IS SPREAD AND THEN PUSH INTO ARR2 AS:

// let arr1 = [10,20,30];

// HERE BOTH VALUES ARE DIFFERENT AS NOT TAKING SAME REFERENCE
// let arr2 = [...arr1];

// arr2.push(1000);

// GIVES OUTPUT AS ARR1 ARRAY
// console.log(arr1);

// GIVES OUTPUT AS WITH PUSHED ELEMENT IN IT
// console.log(arr2);



// SPREAD OPERATOR IN ARRAYS

// let arr1 = [10,20,30];
// let arr2 = [10,20,30];

// let arr3 = [...arr1,100,...arr2,20,1000];
// console.log(arr3);




// IN OBJECTS

// let obj1 = {
//     firstName : "Dhwani",
//     lastName : "Khushlani"
// }

// let obj2 = {
//     address : "Udaipur",
//     gender : "Female"
// }

// let obj3 = {...obj1 , ...obj2};

// ADDING NEW PROPERRTY
// let obj3 = {...obj1 , ...obj2 , section : "FSD"};
// console.log(obj3);



// FIRSTNAME TAKEN AGAIN OR KEY ACCESS AGAIN--> KEY IS UNIQUE SO IT DOESNT APPEAR AGAIN IT WILL REPLACE ITS VALUE
let obj1 = {
    firstName : "Dhwani",
    lastName : "Khushlani"
}

let obj2 = {
    firstName : "Himesh",
    address : "Udaipur",
    gender : "Female"
}

// let obj3 = {...obj1 , ...obj2 , section : "FSD"};


// IF SECOND OBJECT IS TAKEN FIRST THEN FIRST ONE REPLACE IT
let obj3 = {...obj2 , ...obj1 , section : "FSD"};
console.log(obj3);



// DOM ----> DOCUMENT OBJECT MODEL
// HTML PAGE ---> DOCUMENT TYPR ---> TREE LIKE STRUCTURE