//? 10 SEPTEMBER 2024

const express = require("express");
const users = require("../user");

const router = express.Router();

router.get("/user",(req,res)=>{            //? http://localhost:3000/api/user
    res.send({message : "user fetched", data : users});

    //? TO SHOW ERROR DIFFERENT STATUS CODES ARE SENT AS 404 , 500 ETC.
    // res.status(400).send({message :"Error"});
});

router.post("/user",(req,res)=>{
    const data = req.body;
    const modifiedData = {id : users.length+1, ...data};
    users.push(modifiedData);
    res.status(201).send({message : "User Created", data : data});
}); 

router.put("/user/:id",(req,res)=>{
    const  id = req.params.id;
    //! DO NOT USE + BEFORE ID AS IT GIVES ERROR DUE TO TYPE CONVERSION: 
    const user= users.find(item=>item.id=== id);
    if(!user){
        return res.status(404).send({message : "user not found"});
    }
    users.contactDetails = req.body.contactDetails;
    res.status(202).send({message : "User updated"});
});

router.delete("/user/:id",(req,res)=>{
    const  id = req.params.id;
    const userIndex = users.findIndex(item=>item.id===id);
    if(userIndex=== -1){
        return res.status(401).send({message : "User not found"});
    }
    const deletedUser = users.splice(userIndex , 1);
    res.status(200).send({message : "User deleted" , data:deletedUser});
});

module.exports = router;