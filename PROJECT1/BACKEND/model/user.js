const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    name : {
        type : String,
        required : [true , "Name is required"],
        minlength : [3, "Name must be 3 character long"],
        maxlength : [50 ,"Name cannot exceed 50 character"],
        // todo---> USING LIBRARY VALIDATOR TO VALIDATE ALL VALUES AS NAME, EMAIL GETS VALIDATION USING IT.
        validate :{
            validator : function(value){
                // if(typeof value !== "string"){
                //     return false;
                // }
                return validator.isAlpha(value , "en-US");
            },
            message : "Name should be in string"
        }
    },
    email :{
        type : String,
        required : [true , "Email is required"],
        unique : true,
        validate : {
            validator : function(value){
                return validator.isEmail(value);
            },
            message : "Please Enter a valid email address"       //? RUNS ONLY WHEN ABOVE STATEMENT GETS FALSE 
                                                                // ?THEN THIS EXECUTED
        }
    },
    password : {
        type :  String,
        required : [true , "Password is required"],
        minlength : [8, "Password must be 8 character long"],
        maxlength : [128 , "Password cannot exceed 128 characters"],
        validate :{
            validator : function(value){
                return validator.isStrongPassword(value,{      //todo-> PASSING MULTIPLE KEYS TO DEFINE 
                                                               //TODO-> CONDITION AS 1 LOWECASE OR CHARACTER ETC 
                                                               //TODO-> TO MAKE PASS STRONG AS FOLLWS
        // * EMAIL VALIDATION REGEX IN NODEJS----> USE IT INSTEAD TO VALIDATE WITHOUT USING ANY LIBRARY AS VALIDATOR

                    minLength : 8,
                    minLowecase : 1,
                    minUppercase :1,
                    minNumbers : 1,
                    minSymbols : 1                                    
                })
            },
            message : "Password must be stronger"
        }
    },
    phoneNumber : {
        type : String,
        required : [true , "Phone Number is required"],
        validate : {
            validator : function(value){
                return validator.isMobilePhone(value, "en-IN")         //* GIVE STRINGS AS NUMBER SHOULD BE OF INDIA
            },
            message : "Please enter a valid Phone number"
        }
    }
});


FIXME:
//! MIDDLEWARE CREATED.
// ? NAME = SAVE AND NEXT INDICATING GO TO NEXT STEP.

userSchema.pre("save",async function(next){
    // console.log("Before saving the document and after the validation",this);
    // next();
    try{
    const user = this;

    
    // todo -->IF USER IS MODIFIED THEN ONLY PASS IS ENCRYPTED IF PASS IS SAME IT GOES DIRECTLY TO NEXT STEP.
    // todo--> AS IF WHEN NOT MODIFIED IT IT AGAIN GET ENCRYPTED AND STORES IN HASH FORM AGAIN AS IT IS ALREADY 
    // TODO---> IN HASH FORM

        if(!user.isModified("password")) return next();
    const hashedPassword = await bcrypt.hash(user.password , 12);
    user.password = hashedPassword;
    console.log(user);
    next();
    }catch(error){
        next(error);
    }
})


module.exports = mongoose.model("User",userSchema);