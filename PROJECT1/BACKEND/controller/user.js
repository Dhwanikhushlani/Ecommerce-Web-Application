const { Router } = require("express");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const  jwt = require("jsonwebtoken");

exports.signup = async (req,res,next)=>{
    try{
        const { name , email , password , phoneNumber, role} = req.body;
        const existingUser = await User.findOne({email : email});

        if(existingUser){

            // todo---> AFTER CREATING GLOBALERROR MIDDLEWARE , CREATING INSTANCE OF ERROR AS :
            const error = new Error("User Already Exists");
            error.name = "UserExist";
            error.statusCode = 400;
            throw next(error);
            // return res.status(400).send({message : "User already exists"});
        };

//! IMMPORTANT POINTS:

        //TODO:
        // * PASSWORD IS NOT SAVED DIRECTLT TO DATABASE AS WHEN DATA IS SENT FROM DB TO BACKEND AND THEN BACKEND TO DB 
        // * THERE IS CHANCES OF LOSING SOME DATA SO PASSWORD CAN BE LOST SO TO OVERCOME IT .WE ENCRYPT PASSWORD USING 
        // * "BCRYPT LIBRARY AS": SHOWN IN SIGNUP FUNCTION.

        // * ONCE THIS DATA OR PASS IS ENCRYPTED IT CANNOT BE DECRYPTED.

        // * THIS ENCRYPTED PASSWORD IS SENT THROUGH API WHEN USER CREATED THEN IN MONGODB COMPASS PASSWORD 
        // * IS SHOWN IN ENCRYPTED MANNER AS IT IS SAVED IN DB.

        // * IT WILL GIVE INVALID PASS WHEN LOGIN API SENT TO OVERCOME IT GO TO LOGIN FUNCTION AND PASSWORD
        // * CONDITION CHANGES.


        // ? IT STILL IS NOT GOOD PROCESS AS WHEN WE PASS NORMAL PASSWORD WITHOUT CONDITION IT DISNT GIVE ERROR
        // ? AND USER CREATED BUT IT SHOULD FOLLOW CONDITION SO ITS IS INCORRECT PROCESS SO TO OVERCOME IT
        // ? WE CREATE MIDDLEWARE OF IT IN MODEL WITH NAME AS "SAVE".

        // todo --> USING BCRYPT LIBRARY TO ENCRYPT DATA.
        // const hashedPassword = await bcrypt.hash(password , 12);

        const newUser = new User({
            name : name,
            email : email,
            password : password,
            //? SAVE ENCRYPTED PASS IN DATABASE.
            // password : hashedPassword,
            phoneNumber : phoneNumber,
            role
        });

        // * HERE MIDDLEWARE IS CALLED BEFORE NEXT EXECUTION OR BEFORE SAVING OF DOCUMENT IN NEXT LINE.

        await newUser.save();
        res.status(201).send({message : "User Created",data : newUser});

    }catch(error){
        // console.log(error.name);
        // if(error.name === "ValidatorError"){
        //     const errors = Object.values(err.errors).map(error => error.message);
        //     return res.status(400).json({
        //         message : "Validation error",
        //         error : errors
        //     })
        // }
        // res.status(500).send(error);

        next(error);
    }
};


// ! USED AS GO TO POSTMAN AND RUN LOGIN API IN IT AND GET MESSAGE AS USER LOGGED IN(STATUS : 200)
// ! BEFORE IT ONCE SIGNUP AS WE GET USER CREATED AND THEN LOGIN AND GET USER LOGGED IN
// ! IF WE CHANGE ANYTHING AS EDIT PASSWORD AND THEN SEND REQUEST AT THAT TIME IT WILL GIVE 
// ! "INVALID PASSWORD" (STATUS : 401) FOR PASSWORD ELSE FOR ANY OTHER FIELD IT WILL GIVE ERROR
// ! AS USER NOT FOUND(STATUS : 404)

exports.login = async (req,res,next)=>{
    try{
        const { email , password } = req.body;
        const isExistingUser = await User.findOne({email : email});
        if(!isExistingUser){
            const error = new Error("User not found");
            error.name = "NotFound";
            error.statusCode = 404;
            throw next(error);
            // return res.status(404).send({message : "User not found"});
        };

        // const isMatched = password === isExistingUser.password;

        const isMatched = await bcrypt.compare(password, isExistingUser.password);
        if(!isMatched){
            const error = new Error("Unauthorized");
            error.name = "Unauthorized";
            error.statusCode = 401;
            throw next(error);
            // return res.status(401).send({message : "Invalid Password"});
        }

    //     const token = jwt.sign({id : isExistingUser._id,email: isExistingUser.email,
    //         role:isExistingUser.role},"your_jwt_secret" , {expiresIn : "1h"})
    //     res.status(200).send({message : "User Logged-In" , data : isExistingUser, token : token});
    // }catch(error){
    //     // res.status(500).send(error);
    //     next(error);

    const token = jwt.sign({id : isExistingUser._id,email: isExistingUser.email,
        role:isExistingUser.role}, process.env.JWT_SECRET , {expiresIn : "1h"})
    res.status(200).send({message : "User Logged-In" , data : isExistingUser, token : token});
    }catch(error){
    // res.status(500).send(error);
    next(error);
    }
}

exports.getAllUsers = async (req,res,next)=>{
    try{
        const users = await User.find({role : "User"});
            res.status(200).send({message : "User Fetched" , data : users});
    }catch(error){
        next(error);
    }
}

exports.updateUser = async (req, res, next)=>{
    try{
        const id = req.params.id;
        const isExisting = await User.findById(id);
        if(!isExisting){
            const error = new Error("User not found");
            error.name = "NotFound";
            error.statusCode = 404;
            throw error;
        }
        const updatedUser = await User.findByIdAndupdate(id,req.body())
        res.status(202).send({message :  "User updated" , data : updatedUser});
    } catch (error) {
        next(error);
    }
}


