//todo -->4.HTTP MODULE ---> TO CREATE SERVER IN NODE WE USE HTTP MODULE AND CAN ALSO TRANSFER DATA TO DERVER WITH IT.

const http = require("http");

// todo --> IT ACEEPTS TWO PARAMETERS REQUEST AND RESPONSE.
// todo --> DATA SEND BY USER STORES IN REQ AND DATA SENDS BY RECEIVER OR SERVER STORES IN RES.

//* const server = http.createServer((req,res)=>{
//     res.end("Hello Techno, Welcome to http server of nodejs");
// });


// ! CONDITIONS TO RUN ON BROWSER BY ADDING / AND THEN GIVE ANY REQUEST AND IT WILL GIVE OUTPUT ACCORDINGLY.

const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Welcome to home route");
    }else if(req.url=="/about"){
        res.end("Welcome to about route");
    }else{
        res.end("Unknown route");
    }
});



// TODO---> NOW THIS SERVER SHOULD BE RUN SO IT IS LISTENED AS :
// TODO--->HERE IN PARENTHESIS WE HAVE TO DEFINE PORTS AS WHERE IT SHOULD BE RUN AND ALSO IP ADDRESS OF LOCALHOST.
// TODO --> IP OF LOCALHOST === "127.0.0.1"
// TODO---> LOCAL HOST HAS PORT NO.=5173 --> IN REACT EXECUTION
// TODO ---> FIRST REQUEST GOES ON PUBLIC IP IT IS IP WHICH IS PUBLIC WHICH TELLS THAT SERVER IS REQUESTING AND 
// TODO      GIVES PORT NO. OF LOCAL HOST.



// ? TEST THIS ON BROWSER BY GIVING :PORT NO.

server.listen(3000,"127.0.0.1",()=>{
    console.log("Server is running on port 3000");
});