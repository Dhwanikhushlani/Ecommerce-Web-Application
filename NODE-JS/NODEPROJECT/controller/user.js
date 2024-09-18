//? 10 SEPTEMBER 2024

// const express = require("express");
// const users = require("../user");
// const User = require("../model/user");

// const router = express.Router();

// exports.getUsers("/user",(req,res)=>{            //? http://localhost:3000/api/user
//     res.send({message : "user fetched", data : users});

//     //? TO SHOW ERROR DIFFERENT STATUS CODES ARE SENT AS 404 , 500 ETC.
//     // res.status(400).send({message :"Error"});
// });

// exports.createUser("/user",(req,res)=>{
//     const data = req.body;
//     const modifiedData = {id : users.length+1, ...data};
//     users.push(modifiedData);
//     res.status(201).send({message : "User Created", data : data});
// }); 

// exports.putUser("/user/:id",(req,res)=>{
//     const  id = req.params.id;
//     //! DO NOT USE + BEFORE ID AS IT GIVES ERROR DUE TO TYPE CONVERSION: 
//     const user= users.find(item=>item.id=== id);
//     if(!user){
//         return res.status(404).send({message : "user not found"});
//     }
//     users.contactDetails = req.body.contactDetails;
//     res.status(202).send({message : "User updated"});
// });

// exports.deleteUser("/user/:id",(req,res)=>{
//     const  id = req.params.id;
//     const userIndex = users.findIndex(item=>item.id===id);
//     if(userIndex=== -1){
//         return res.status(401).send({message : "User not found"});
//     }
//     const deletedUser = users.splice(userIndex , 1);
//     res.status(200).send({message : "User deleted" , data:deletedUser});
// });

// module.exports = router;



 //!-----------------------------------------------------------------------------------------------------------------------------
//! 16 SEPTEMBER 2024 
// todo-->USING ASYNC IN GETUSERS AS FOLLOWS UDING DATABASE :

const users = require("../user");
const User = require("../model/user");


exports.getUsers = async(req,res)=>{            //? http://localhost:3000/api/user
    try{
        const users = await User.find();
        res.status(200).send({message : "User Fetched" , data : users});
    }catch(error){
        res.status(500).send(error);;
    }
};


exports.createUser = async (req,res)=>{
    try{
        // todo --> THIS CONST KEYS SHOULD BE SAME AS WE HAVE SENT BY FRONTEND 
    const {firstName , lastName , email , contactDetails} = req.body;


    // ? IF AN EMAIL ALREADY EXISTS THEN IT WILL GIVE ERROR AS :

    const existingUser = await User.find({email : email});      //* WE CAN SET DEFAULT EMAIL MANUALLY ALSO AS 
                                                                // * "XYZ.GMAIL.COM".
    if(existingUser){
        return res.status(400).send({message : "User already exists"});
    }



    // TODO --> AND THIS BELOW KEYS SHOULD BE SAME AS USER.JS CREATED IN MODEL FOLDER AS :
    const user = new User({ firstName : firstName  , lastName : lastName , email : email , contactDetails :
        contactDetails });
        await users.save();
        res.status(201).send({message : "User Created" , data : user});
    }catch(error){
        res.status(500).send({error : error});
    }
}; 


exports.putUser("/user/:id",(req,res)=>{
    const  id = req.params.id;
    //! DO NOT USE + BEFORE ID AS IT GIVES ERROR DUE TO TYPE CONVERSION: 
    const user= users.find(item=>item.id=== id);
    if(!user){
        return res.status(404).send({message : "user not found"});
    }
    users.contactDetails = req.body.contactDetails;
    res.status(202).send({message : "User updated"});
});

exports.deleteUser("/user/:id",(req,res)=>{
    const  id = req.params.id;
    const userIndex = users.findIndex(item=>item.id===id);
    if(userIndex=== -1){
        return res.status(401).send({message : "User not found"});
    }
    const deletedUser = users.splice(userIndex , 1);
    res.status(200).send({message : "User deleted" , data:deletedUser});
});

module.exports = router;