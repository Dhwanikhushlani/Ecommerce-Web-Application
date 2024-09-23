const express = require("express");
const cors=require("cors");
const app = express();
const userRoutes = require("./router/user");
const connectDb = require("./config/db");
const globalErrorHandler = require("./middleware/globalErrorHandler");




app.use(express.json());
app.use(cors());

connectDb();

app.use("/auth" , userRoutes);

// ? MIDDLEWARE ALWAYS PASS AFTER ROUTING AS IF IT IS PASSED EARLIER THEN IT GIVES ERROR FIRST
app.use(globalErrorHandler);


app.listen(5000,()=>{
    console.log("Server is running at 5000");
})