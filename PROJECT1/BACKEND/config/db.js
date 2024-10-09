const mongoose = require("mongoose");

const connectDb = async ()=>{
    try{
        const connectDb = await mongoose.connect("mongodb+srv://dhwanikhush05:i2oAynAHXIraUL1y@mymongodb.jy0ll84.mongodb.net/technoprojectTr1");
        console.log("Database connected");
    }catch(error){
        console.log(error);
    }
}

module.exports = connectDb;