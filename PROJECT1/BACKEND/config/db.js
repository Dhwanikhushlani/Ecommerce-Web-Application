const mongoose = require("mongoose");

const connectDb = async ()=>{
    try{
        const connectDb = await mongoose.connect("mongodb://localhost:27017/project1");
        console.log("Database connected");
    }catch(error){
        console.log(error);
    }
}

module.exports = connectDb;