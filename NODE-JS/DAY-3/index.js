//todo ----> 5. EVENT MODULE

// const { Socket } = require("dgram");
const EventEmitter = require("events");



const event = new EventEmitter();


// TODO---> DEFINING MYNAME VARIABLE AS :
// ! DEFINING EVENT USING ---> EVENT ON

// event.on("myName",()=>{
//     console.log("Hello my name is Dhwani");
// })



// TODO ---> CAN ALSO PASS PARAMETERS IN EVENT BLOCK AS :
// !DEFINING EVENT WITH PARAMETERS AS :

// event.on("myName",(name, age)=>{
//     console.log(`Hello my name is ${name} and age is ${age}, First Event called`);
// });


// event.on("myName",(name, age)=>{
//     console.log(`Hello my name is ${name} and age is ${age}, Second Event called`);
// });



// ? SEARCHES FOR MYNAME AND RUN COMMAND WITH IT 
// ? IN OUR CODE THERE IS NO VARIABLE AS MYNAME SO FIRST DEFINE IT


// ! CALLING OF EVENT ---> USE EMIT
// event.emit("myName");


// !CALLING OF EVENT WITH PARAMETER AS BY PASSING VALUES IN IT:
// event.emit("myName","Dhwani",20);



// todo---> CREATING HTTP SERVER AND USING EVENT WITH IT

const http = require("http");

// const server = http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.end("Home Page");
//         event.emit("homePageAccessed");
//     }else if(req.url==="/about"){
//         res.end("About Page");
//         event.emit("aboutPageAccessed");
//     }else{
//         res.end("Unknown Page");
//         event.emit("unknownPageAccessed");
//     }
// });



// const server = http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.end("Home Page");
//         // event.emit("homePageAccessed");
//     }else if(req.url==="/about"){
//         res.end("About Page");
//         // event.emit("aboutPageAccessed");
//     }else{
//         res.end("Unknown Page");
//         // event.emit("unknownPageAccessed");
//     }
// });


// ? CALLING EVENT:
// event.on("homePageAccessed",()=>{
//     console.log("Home Api Called");
// })

// event.on("aboutPageAccessed",()=>{
//     console.log("About Api Called");
// })

// event.on("unknownPageAccessed",(url)=>{
//     console.log("Unknown Api Called",url);
// })


// !RUN SERVER:
// server.listen(3000,"127.0.0.1",()=>{
//     console.log("Server is running on 3000");
// })




// server.on("request",(req,res)=>{
//     console.log(`Request Called , url : ${req,url}`);
// })







// todo---> USED IN MAINLY CHAT APPLICATION AS SOCKET HELPS TO CREATE CONNECTION BETWEEN 
// TODO---->USER AND SERVER RECEIVER ALREADY GETS PACKETS THAT USER IS TYPING OR SENDING SOME INFO LIKE 
// TODO --->IN WHATSAPP TYPING SHOWN IN CHAT

// server.on("connection",(Socket)=>{
//     console.log("New Connnection Made");
// })


// server.on("close",()=>{
//     console.log("Server closed");
// });


// setTimeout(() => {
//     server.close();
// }, 5000);



let storedData;


// ! RUN SERVER ON POSTMAN AS USING POST METHOD BY COPYING SERVER URL IN REQUEST IN POSTMAN
// ! THEN WRITE CODE IN BODY PART AS SELECT RAW AND THE WRITE:
//? {"userName" : "Dhwani"} 
// ! THEN SEND REQUEST AND YOU GET OUTPUT IN TERMINAL OF CODE USING CONSOLE THE VARIABLE.


const server = http.createServer((req,res)=>{
    if(req.method === "POST"){
        let body ="";
        req.on("data",(chunk)=>{
            body+= chunk.toString();
        });

        // todo---> WHEN DATA IS END 
        req.on("end",()=>{
            // todo --->JSON.PARSE==> CONVERTS STRING DATA INTO OBJECT TYPE DATA
            storedData = JSON.parse(body);

            // todo --> CONVERTS OBJECT TO STRING TYPE USE STRINGIFY:
            //* JSON.stringify

            console.log(storedData);

            // todo ---> GIVES THE STATEMENT AFTER REQUESTING IN BODY PART USING PARSE:
            // res.end("Post req clicked");

            //? HEADERS :
            // res.writeHead(200, {"Content-Type":"text/plain"});
            // res.end("req Processed");

            // TODO ---> GIVES USERNAME OR RAW DATA OF BODY AS OUTPUT USING STRINGIFY :
            res.end(JSON.stringify(storedData));
        })
    }
})

server.listen(5000,"127.0.0.1",()=>{
    console.log("Server is running on 5000");
})




