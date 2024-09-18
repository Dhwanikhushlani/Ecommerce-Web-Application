// ! USE COMMAND IN TERMINAL FIRST --> NPM INIT TO INSTALL PACKAGE.JSON
// !USE COMMAND 2 IN TERMINAL SECOND ---> NPM I EXPRESS TO INSTALL PACKAGE-LOCK.JSON

// const express = require("express");

// const app = express();


// todo ---> TO RUN IT GO TO TERMINAL AND RUN "NPM START" WHEN SERVER IS RUN 
// TODO---> GO TO POSTMAN AND WRITE "HTTP://127.0.0.1:3000" AND NO CONTENT IS ADDED USE GET METHOD AND SEND REQUEST
// TODO ---> YOU WILL GET OUTPUT AS BELOW :

// app.get("/",(req,res)=>{
    // ! IN EXPRESS WE USE "SEND" INSTEAD OF "END"
//     res.send("Hello from / route");
// })


// app.listen(3000,()=>{
//     console.log("Server is running at 3000");
// })


// TODO---> OPERATIONS PERFORMED ON PRODUCT IN BACKEND SERVER:
// ? 1. CREATE
// ? 2. READ
// ? 3. UPDATE
// ? 4. DELETE
// TODO ---> THIS IS KNOWN AS CRUD OPERATION


// ! FETCHING/READING OF DATA ---> ALWAYS CALL BY "GET" METHOD
// TODO---> ADD NEW PRODUCT/ORDER/USER ---? USE "POST" METHOD
// ?UPDATE PRICE OF PRODUCT ---> USE "PUT" METHOD
// * TO DELETE PRODUCT----> USE "DELETE" METHOD.

//!NOTE --->WHY THESE METHODS USING?---> AS TO DEFINE WHAT IS API USING FOR AS WHICH API IS USED FOR WHICH OPERATION


// todo----------------------------------------------------------------------------------------------------------------------------------------------
//! 07 SEPTEMBER 2024:

    // const express = require("express");

    // const app = express();


    // todo ---> USING MIDDLEWARE TO CONVERT BODY DATA INTO JSON FORMAT AS :
    // app.use(express.json());


    


    // app.get("/",(req,res)=>{
    //     res.send("Hello from / route");
    // });

    
    // ! NODE IS "MIDDLEWARE" OF FRONTEND AND DATABASE
    // TODO ---> WHAT IS MIDDLEWARE IN NODE ---> REQUEST AND RESPONSE ARE MIDDLEWARES IN NODE.


    // app.post("/createUser",(req,res)=>{
    //     const data = req.data;
    //     console.log(data);        //* GIVES UNDEFINED AS OUTPUT AS IN EXPRESS DATA IN BODY HAS TO BE 
    //                               //* CONVERTED IN JSON FORMAT USING MIDDLEWARE INSTEAD IT GIVES "UNDEFINED" ALWAYS.
    //     res.send({message :"User Created" , user : data});
    // });
    

    // ! API CREATION :---> USE HTTP://SERVER-ADDREESS:PORTNO./ROUTEMETHOD.
    //? http://localhost:3000/routemethods--->e.g http://localhost:3000/createUser
    //* "OR"
    //? http://127.0.0.1:3000/routemethods
    // ? USE ABOVE STATEMENTS IN POSTMAN USING POST METHOD AND THEN GO TO BODY --> RAW AND WRITE :-
    
    //* "USERNAME" :"",
    //* "EMAIL" : "",
    //* "CONTACTNUMBER" : ""
    

    // app.listen(3000,()=>{
    //     console.log("Server is running at 3000");
    // })

    
    // todo --> INSTALL NPM I NODEMON --> THEN IN PACKAGE.JSON START : NODEMON INDEX.JS---> NOW SEREVER RUN THROUGH 
    // TODO --->NODEMON AS WHEN WE DO ANY CHANGES IN CODENIT DIRECTLY RUN NO NEED TO WRITE COMMAND AGAIN AND AGAIN

    // ----------------------------------------------------------------------------------------------------------------------------------

    // todo --> 09 SEPTEMBER 2024

    // const express = require("express");

    // const app = express();

    // const users = [
    //     {
    //         userName : "Dhwani",
    //         email : "dhwanikhush05@gmail.com",
    //         contactDetails :"1233445565"
    //     }
    // ]

    // app.use(express.json());

    // const middleware1 = (req,res,next)=>{
    //     console.log("Middleware 1 called");

        // todo---> TO APPLY SECURITY AS TO DEFINED UNAUTHORIZED AS IT DIDNT GO TO BELOW PART AND DIRECT RETURNS UNAUTTORIZED
        // res.send({message :"Unauthorized"});
    //     next();
    // }

    // const middleware2 = (req,res,next)=>{
    //     console.log("Middleware 2 called");
    //     next();
    // }
    
    // app.use(middleware1);

    // app.use("",userRouters);

    // app.get("/",(req,res)=>{
    //     res.send({message : "User Fetched",users : users});
    // });


    // app.post("/createUser",middleware2,(req,res)=>{
    //     const data = req.body;
    //     console.log(data);

    //     users.push(data);    
    //     res.send({message :"User Created" , user : data});
    // });
    
    // app.put("/updateUser",(req,res)=>{

    // })

    // app.listen(5000,()=>{
    //     console.log("Server is running at 5000");
    // })

//!-----------------------------------------------------------------------------------------------------------------------------------

    //? 10 SEPTEMBER 2024

    // todo--->MVC ==> MODEL , VIEW , CONTROLLER ARCHITECTURE


    // const express = require("express");
    // const userRouters = require("./router/user");
    // const productRoute = require("./router/product");


    // const app = express();

    // app.use(express.json());


    // const users = [
    //     {
    //         userName : "Dhwani",
    //         email : "dhwanikhush05@gmail.com",
    //         contactDetails :"1233445565"
    //     }
    // ]

    // app.use(express.json());

    // const middleware1 = (req,res,next)=>{
    //     console.log("Middleware 1 called");

        // todo---> TO APPLY SECURITY AS TO DEFINED UNAUTHORIZED AS IT DIDNT GO TO BELOW PART AND DIRECT RETURNS UNAUTTORIZED
        // res.send({message :"Unauthorized"});
    //     next();
    // }

    // const middleware2 = (req,res,next)=>{
    //     console.log("Middleware 2 called");
    //     next();
    // }
    
    // app.use(middleware1);

    // todo --> HERE API IS PREFIX AND USER IS ROUTE IN WHICH IT IS ACCESSED.
    // app.use("/api",userRouters);    //? http://localhost:3000/api/user
    // app.use("/products",productRoute);


    // app.get("/",(req,res)=>{
    //     res.send({message : "User Fetched",users : users});
    // });


    // app.post("/createUser",middleware2,(req,res)=>{
    //     const data = req.body;
    //     console.log(data);

    //     users.push(data);    
    //     res.send({message :"User Created" , user : data});
    // });
    

    // app.listen(5000,()=>{
    //     console.log("Server is running at 5000");
    // })


    // todo------------------------------------------------------------------------------------------------------------------------------------

     //? 12 SEPTEMBER 2024

    //! DATABASE CONNECTIVITY
    

    const express = require("express");
    const userRouters = require("./router/user");
    const productRoute = require("./router/product");
    const connectDb = require("./config/db");


    const app = express();

    app.use(express.json());

    connectDb();

    const users = [
        {
            userName : "Dhwani",
            email : "dhwanikhush05@gmail.com",
            contactDetails :"1233445565"
        }
    ]

    app.use(express.json());

    const middleware1 = (req,res,next)=>{
        console.log("Middleware 1 called");

        // todo---> TO APPLY SECURITY AS TO DEFINED UNAUTHORIZED AS IT DIDNT GO TO BELOW PART AND DIRECT RETURNS UNAUTTORIZED
        // res.send({message :"Unauthorized"});
        next();
    }

    const middleware2 = (req,res,next)=>{
        console.log("Middleware 2 called");
        next();
    }
    
    app.use(middleware1);

    // todo --> HERE API IS PREFIX AND USER IS ROUTE IN WHICH IT IS ACCESSED.
    app.use("/api",userRouters);    //? http://localhost:3000/api/user
    app.use("/products",productRoute);


    app.get("/",(req,res)=>{
        res.send({message : "User Fetched",users : users});
    });


    app.post("/createUser",middleware2,(req,res)=>{
        const data = req.body;
        console.log(data);

        users.push(data);    
        res.send({message :"User Created" , user : data});
    });
    

    app.listen(5000,()=>{
        console.log("Server is running at 5000");
    })


