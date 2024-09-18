// ! 12 SEPTEMBER 2024

// ? CREATING SCHEMA OF COLLECTIONS : 
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName : {type : String , required : true},
    lastName : {type : String},
    email : {type : String , required : true , unique : true},
    contactDetails : {typr : String}
});

module.exports = mongoose.model("User" , userSchema);