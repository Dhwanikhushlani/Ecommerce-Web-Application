// EVENT LOOP , TIMERS FUNCTIONS, CALL BACK HELL, PROMISES, ASYNC AWAIT, CONSTRUCTOR, CLASSES

// 1]. EVENT LOOP : 

// console.log(a);   //GIVES UNDEFINED AS OUTPUT FOR A WHEN A IS DEFINED AS VAR 
// AS HERE IN CALLSTACK WHEN WE GO A IS NOT IN AREA OF EXECUTE/ ENVIRONMENT SO IT/
//  GOES TO  VARIABLE ENVIRONMENT WHERE ALL VARIABLES ARE DEFINED AS UNDEFINED FIRST SO
//   IT GIVES OUTPUTAS UNDEIFNED
// BUT USING LET IT GIVES ERROR 
// LET AND CONST ALSO SUPPORT HOISTING BUT VARIABLE DEFINED BY LET AND CONST STORE IN SNOTHER
//  SPACE THAT IS IN VARIABLE ENVIRONMENT THIS AREA IS KNOWN AS TIMER DEAD ZONE
// HERE LET SHOULD BE INITALIZE WITH SOME VLUE THEN IT WILL BE CONSOLED.

// console.log(sum());   //IT RETURNNS VALUE AS IN VARIABLE EXNVIRONMENT FUNCITON IS DEFINED

// IF ANY VARIABLE OR FUNCTION IS ACCESSED BEFORE DECLARATION IS KNOWN AS HOISTING


// var a=20;
// let a=20;
// let b=1000;

// function sum(){
//     let x = 200;
//     let y = 300;
//     // return x+y;
//     function add(){
//         return x+y;
//     }
//     return add();
// }


// var sum = function(){
//     let x=200;
//     let y=300;
//     function add(){
//     return  x+y;
//     }
//     return add();
// }

// let c = 100;

// console.log(a, b, c);

// sum();


// -------------------------------------------------------------------------------------------------------------------

// 2]. TIMERS FUNCTION : 


// 1. SETTIMEOUT ---> JS INBUILT FUNCTION -->USES ARROW FUNCTIION
// HERE WE HAV TO GIVE DELAY AT LAST OFF FUNCTION WHERE IT ENDS AS LIKE 2000 ---> IT MEANS DELAY = 2SECONDS

// let timeout = setTimeout(() => {
//     console.log("Hello Techno");
// }, 5000);



// 2. SETINTERVAL---> AFTER EVERY INTERVAL OUTPUT PRINTS CONTINOUSLY UNTIL IT STOPS IT STOPS MANUALLY ONLY
// let interval = setInterval(() => {
    // console.log("Hello Techno");
//     console.log(Math.random());
// }, 2000);    //TIMER ALWAYS BE IN MILISECONDS

// TO STOP INTERVAL WE SHOULD USE HTML FILE WE CREATE A BUTTON TO STOP AND IN CSS USE LIKE THIS

// document.getElementById("button").addEventListener("click",function(){
//     console.log("Stop Button Clicked");
    // CLEARINTERVAL ----> USED TO CLEAR INTERVAL PASS VARIABLE IN IT TO WHICH CLEAR INERVAL IS APPLIED
//     clearInterval(interval);
// })


// HERE TIMEOUT TAKES TOTAL 5 SECONDS AS 2 SECND FOR 1 NUMBER + 2 SECONDS FOR ANOTHER NUMBER 
// + 1 SECTION FOR TIMEOUT ---> THIS CAN ALSO BE STOPPED USING CLEAR TIMEOUT AS GIVEN BELOW:

// document.getElementById("timeout").addEventListener("click",function(){
//     console.log("Stop Timeout Button Clicked");
    // CLEARINTERVAL ----> USED TO CLEAR INTERVAL PASS VARIABLE IN IT TO WHICH CLEAR INERVAL IS APPLIED
//     clearTimeout(timeout);
// })

// ---------------------------------------------------------------------------------------------------------------------------------

// 3]. ASYNCHRONUS JAVASCRIPT : 

// HERE FIRST A+B VALUE EXECUTE THEN A AND B VALUE EXECUTE AND THEN TIMER EXECUTE ---> IS IN ASYNCHRONUS
//  AS IN SYNCHRONUS FIRST TIMEOUT SHOULD BE EXECUTED AND THEN A AND B SHOUKD BE CONSOLED

// TIMEOUT AALWAYS GOES IN WORKER THREAAD IN STACK SO TIMEOUT ALWAYS EXECCUTE AT LAST UNTIL THE WHOLE 
// CODE INSTEAD TIMEOUT EXECUTED

// LESS TIMER TIMEOUT WOULD EXECUTE FIRST AND THEN MORE TIMER TIMEOUT WILL EXECUTE
// let a = 20;
// let b = 30;
// console.log(a+b);

// STILL TIMER IS ZRO YET TIMEOUT ALWAYS EXECUTE AT LAST
// setTimeout(()=>{
//     console.log("Hello Techno");
// },0);

// console.log(a);

// setTimeout(()=>{
//     console.log("Second Timeout");
// },1000);

// console.log(b);


// ----------------------------------------------------------------------------------------------------------------------------

// CALL BACKS : 

// function step1(callback){
//     setTimeout(()=>{
//         console.log("Step 1 Completed");
//         callback();
//     },1000)
// }

// function step2(callback){
//     setTimeout(()=>{
//         console.log("Step 2 Completed");
//         callback();
//     },1000)
// }

// function step3(callback){
//     setTimeout(()=>{
//         console.log("Step 3 Completed");
//         callback();
//     },1000)
// }

// Calling of functions with callbacks:
// THESE NESTED CALLBACK METHOD IS KNOWN AS CALL BACK HELL ---> IT IS NOT GOOD TO EXECUTE AS IT 
// GIVES COMPLEXITY AND REDUCE READABILITY AND SCALABILITY OF CODE

// SO TO OVERCOME IT PROMISES LAUNCH TO DEAL WITH ASYNCHRONUS BEHAVIOUR OF CALL BACK

// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             console.log("All Steps Completed");
//         })
//     })
// })

// PROMISES : 

// IT IS AN OBJECT CONTAINS MULTIPLE VALUES ---> CONSIST OF PROMISE STATE---> IF IT IS NOT 
// COMPLETED YET IT IS IN PENDING STATE.

// OBJECT --> CONTAINS PROMISE STATE ---> IF DATA COMES TO FRONTEND FROM BACKEND SIDE THEN PROMISE STATE 
// IS FULLFILLED IF NOT DUE TO ANY SERVER ISSUE THEN THE STATE IS CONSIDER AS REJECTED STATE.

// TO FETCH DATA FROM ANY BACKEND SERVER SUPPOSE 
// IT BY DEFAUKT RETURNS PROMISE ---> IT IS CONSTRUCTOE FUNCTION IN WHICH TWO PARAMETERS RAE TAKEN AS 
// RESOLVE AND REJECT
// HERE WE ARE CREATING PROMISE AS WE HAVE NO BACKEND DATA AS FOLLOWS :


// 1. RESOLVE ---> WHEN PROMISE IS IN FULFILLEDD STATE 

// function fetchData (){
//     return new Promise ((resolve , reject)=>{
//         let data = {
//             firstName : "Dhwani",
//             lastName : "Khushlani"
//         };
//         return resolve(data);
//     })
// }
// let fetchedData = fetchData();
// console.log(fetchedData);



// 2. REJECT ---> WHEN PROMISE IS IN REJECTED STATE--> MEANS ERROR

// function fetchData (){
//     return new Promise ((resolve , reject)=>{
//         let data = {
//             firstName : "Dhwani",
//             lastName : "Khushlani"
//         };
//         return reject(data);
//     })
// }
// let fetchedData = fetchData();
// console.log(fetchedData);



// 3. TIMEOUT + RESOLVE ---> PROMISE IS IN PENDING STATE BUT YET FULFILLED TOO ---> SO PENDING + FULFILLED BOTH

// function fetchData (){
//     return new Promise ((resolve , reject)=>{
//         setTimeout(() => {
//             let data = {
//                 firstName : "Dhwani",
//                 lastName : "Khushlani"
//             };
//             return resolve(data);
//         }, 1000);
        
//     })
// }
// let fetchedData = fetchData();
// console.log(fetchedData);




// 4. SET TIMEOUT WITH RESOLVE AND REJECT IN TRY AND CATCH BLOCK

function fetchData (){
    return new Promise ((resolve , reject)=>{
        setTimeout(() => {
            try{
            let data = {
                firstName : "Dhwani",
                lastName : "Khushlani"
            };
            return resolve(data);
        }catch (error) {
            return reject(error);
        }
        }, 2000);
        
    })
}
// let fetchedData = fetchData();
// console.log(fetchedData);


// PROMISE STATES ---> PEMDING , FULFILLED , REJECTED
// STEPS FOLLOWED :
// 1. PENDING ---> FULFILLED
// 2. PENDING ---->REJECTED


// IF PROMISE STATE IS PENDING-->FULFILLEDD THEN IT WORKS IN .
// THEN FUNCTION AND IF STATE IS IN PENDING ---> REJECT STATE THEN IT WORKS WITH .CATCH FUNCTI0ONJ

// fetchedData
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// });



// ** FETCHING API DATA **

// https://fakestoreapi.com/products

// function fetchPoductData(){

    // FUNCTION USED TO FETCH DATA OR API --> WITH PARAMETER --> PUT LINK OF API OR ANY DATA ETC.

    // let data = fetch("https://fakestoreapi.com/products");

    // IT WILL EXECUTE FIRST AND THEN PROMISE WILL EXECCUTE BUT IT IS WRONG AS IF COMMAND EXECUTED BUT 
    // IF FETCHING OF DATA GIVES ERROR THEN IT IS INCORRECT METHPOD SO FOR THAT ASYNCHRONOUS JS IS USED 
    // AS BY UDING.THEN AND .CATCH

    // console.log("Nest Step After Fetching");
//     return data;
// }

// GIVES OUTPUT AS PROMISE --> PENDING NAD FULFILLED

// let fetchedProductData = fetchPoductData();
// console.log(fetchedProductData);

// fetchedProductData
// .then((res)=>{
    // console.log(res);
    // console.log(res.json());
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// });


// TASK ---> SHOW THESE DATA ON BROWSER SCREEN USING CSS AND DOM MANIPULATION WITH LOOP IN IT USING APPEND CHILD
// IMAGE , TITLE DESCRIPTION PRICE 


// MYCODE
// let myDiv = document.getElementById("main");
// console.log(myDiv.id);

// console.log(myDiv.style);

// myDiv.style.backgroundColor = "white";
// myDiv.style.width = "400px";
// myDiv.style.height = "400px";
// myDiv.style.border = "3px solid black";


// SIR CODE;
// document.getElementById("product-Button").addEventListener("click",
//     function(){
        // let data = fetch("");
        // OR 
        // fetch("https://fakestoreapi.com/products")
        // .then((res)=>res.json())
        // .then((data)=>{
        //     data.forEach((item) => {
        //         // console.log(item);
        //         // console.log(item.image);
        //         let newdiv = document.createElement("div");

                // IT IS IN STATIC WAY 
                // newdiv.innerHTML = "<img src=' alt='Product-image'><h3>Title</h3><p>Price</p>" 

                // TO MAKE IT DYNAMIC : 
    //             newdiv.innerHTML = `<img style ='width = 100px' src =${item.image}  alt='Productimage' >
    //             <h3>${item.title}</h3> <p>${item.price}</p>`;
    //             let myDiv = document.getElementById("main");
    //             myDiv.appendChild(newdiv);
    //         });
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // });


    // ---------------------------------------------------------------------------------------------------------------------------

    // DAY-16

    // ASYNC AWAIT : 

    // async function fetchUserData() {
    //     let response =await fetchData();
    //     console.log(response);
    // }

    // fetchUserData();

    async function fetchUserData() {
        try{
        let response =await fetchData();
        console.log(response);       
    } catch(error) {
        console.log(error);
    }
 }

    fetchUserData();