// todo -->1. FS MODULE===> FILE SYSTEM --> MODULE OF NODEJS--> IT CAN BE IMPORTED AS BELOW AS IN NODE IMPORTING IS LIKE AS:

const fs = require("fs");

// TODO --> 2. OS MODULE
// todo--> GIVES INFORMATION ABOUT CURRENT OS:
const os = require("os");


// todo ---> 3. PATH MODULE
// todo--> GIVES INFORMATION ABOUT PATH:
const path = require("path");



// todo ---> SYNCHRONOUS NODE:
// todo--> PROCESS OBJECT ==> GIVES ALL PROCESSES/MODULES PERFORMED IN NODE AS OUTPUT ON CONSOLE
// * console.log(process);
// * console.log(this);

// ! READ.TXT FILE IS CREATED USING GIVEN COMMAND AND TEXT IS WRITTEN IN IT.
//* fs.writeFileSync("read.txt","Welcome to text file");


// ! GIVES BIFFER DATA WHEN CONSOLED AS HERE WE ARE READING A FILE AND STORED IN VARIABLE WHEN THIS VARIABLE
// ! IS CONSOLED THEN IT GIVES BUFFER DATA
// todo ---> TO CONVERT THIS BUFFER DATA INTO READABLE FORM WE ADD A FUNCTION TOSTRING TO THIS VARIABLE AS :

//* let data = fs.readFileSync("read.txt");
//* console.log(data);
//* console.log(data.toString());



// ? REPLACES DATA OF EXISTING FILE TO NEW DATA AS IT REMOVES EXISTING DATA NOT APPEND NEW ONE 
//* fs.writeFileSync("read.txt","Hello Techno");



// ? TO APPEND NEW DATA BUT TH EXISTING DATA SHOULD BE THERE AND NOT REMPVED THEN USE APPEND:
//* fs.appendFileSync("read.txt"," Welcome to read.txt file");


// ? RENAME FILE NAME : USE RENAMESYNC AS ---->
// * fs.renameSync("read.txt","readwrite.txt");



// ? SYNNCHRONUS NODE :
//  let data = fs.readFileSync("readwrite.txt");
//  console.log(data.toString());
//  console.log("Reading File");




// ?ASYNCHRONUS NATURE OF NODE :
// ?AFTER WRITE STATEMENT CONSOLED FIRST AND THEN FILE CREATED IS CONSOLED --> IT IS ASYNCHRONUS NATURE.

//* fs.writeFileSync("read.txt","Hello TR1, Welcome Back !",(err)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log("File Created");
// });
// console.log("After write file sync");



// todo ---> IN SYNCHRONUS NATURE REQUESTS ARE PENDING TILL FIRST REQUEST IS NOT FULFILED
// TODO---> IT TAKES MORE TIME--> WE CAN PERFOEM ONLY ONE OPERATION AT A TIME IN IT

// ?WHILE IN ASYNCHRONUS IT TAKES ALL REQUESTS AND PROCESS IT NO ONE IS IN PENDING AND PERFORM AMNY OPERATIONS
// ?AT A SINGLE TIME



// ! HERE BUFFER DATA IS ALSO DECODED USING "UTF-8" AND WE CAN ALSO USE TOSTRING METHOD:
// ?CALLBACK FUNCTION IN ASYNCHRONUS NATURE :
// fs.readFile("read.txt","UTF-8",(err,data)=>{
//     console.log(data);
// })



// ? CALLBACK FUNCTION IN APPENDFILE :
// fs.appendFile("read.txt","This is FSD Session",(err)=>{
//     console.log("File Created");
// })


// ?CREATE NEW FOLDER
// fs.mkdir("./Folder1",(err)=>{
//     console.log("folder created");
// })


// ?CREATE NEW FILE IN THAT FOLDER
// fs.writeFile("./Folder1/read.txt","Hello This is read file",(err)=>{
//     console.log("file created");
// })


// ? TO DELLETE FOLDER WE HAVE TO REMOVE FILE AS :
// fs.unlink("./Folder1/read.txt",(err)=>{
//     console.log("File deleted");
// })


// ? DELETE OR REMOVE FOLDER :
// fs.rmdir("./Folder1",(err)=>{
//     console.log("Folder deleted");
// })


// ? -----------------------------------------------------------------------------------------------------------------------------------------

// todo ---> OS MODULE:

//* console.log(os.arch());
// console.log(os.platform());
// console.log(os.hostname());
// console.log(os.freemem());
// todo ---> CONVERSION FROM BYTE T KILOBUTE TO MEGABYTE AND THEN TO GIGABYTE
// console.log(os.freemem()/1024/1024/1024);   //todo ---> gives size in gb as 2 gb is remaining free
// console.log(os.totalmem()/1024/1024/1024);


// !-------------------------------------------------------------------------------------------------------------------------------------------

// ! 3. PATH MODULE :

// TODO---> DEFINE YOUR FILE'S PATH:
// todo---> PUT THE PATH WITH FORWARD SLASH AS BY REMOVING BACKWARD SLASH "\"(GIVEM ALREADY)--> REPLACE BY "/"
// console.log(path.dirname("C:/Users/gungun/Desktop/FULL STACK WEB DEVELOPMENT/NODE-JS/index.js"));


// TODO --> FIND EXTENSION NAME OF PATH:
// console.log(path.extname("C:/Users/gungun/Desktop/FULL STACK WEB DEVELOPMENT/NODE-JS/index.js"));


// TODO ---> FIND BASE NAME OF PATH :
// console.log(path.basename("C:/Users/gungun/Desktop/FULL STACK WEB DEVELOPMENT/NODE-JS/index.js"));


// todo---> CREATE YOUR OWN PATH
// const fullPath = path.join("user","local","bin","script")
// console.log(fullPath);


// TODO---> ADD DIRECTOIES TO EXISITING PATH AS:
// const absPath = path.resolve("user","local","bin","script")
// console.log(absPath);