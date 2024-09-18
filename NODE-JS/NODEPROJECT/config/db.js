// ! 12 SEPTEMBER 2024

// ! ORM ---> OBJECT RELATION MAPPING ---> SUCH AS MONGOOSE

const mongoose = require ("mongoose");

const connectDb = ()=>{

    // ? CREATE DATABASE IN YOUR CONNETION AS COPY CONNECTION STRING FROM COMPASS CLICK ON 3 DOTS THEN COPY IT AND PASTE 
    // ?HERE AND WRITE DATABASE NAME TO BE CREATED AFTER "/" IN IT AS SHOWN BELOW :
    try{
        const connection = mongoose.connect("mongodb://localhost:27017/technoEcom");
        console.log("Database is connected");
    }catch(error){
        console.log("Error connecting database", error);
    }
};

module.exports = connectDb;