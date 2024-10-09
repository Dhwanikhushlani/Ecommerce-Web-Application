const express = require("express");
const cors=require("cors");
const app = express();
const userRoutes = require("./router/user");
const connectDb = require("./config/db");
const globalErrorHandler = require("./middleware/globalErrorHandler");
const authRoutes = require("./router/auth");
const productRoutes = require("./router/product");
const passport = require("passport");
const session = require("express-session");
const path = require("path");
require("dotenv").config();
require("./config/passport");
const stripe = require("stripe")
("sk_test_51Q7s04F8gdbXsdqfp7HDepDmmlmDb37c4ohcmftbcf6udV9YH5Wpy0mxUGJjivVfG2egIoly0aT6q9mRmyuiGTno00ilPXpGWV")


app.use(session({
    secret: "Your_Secret_Key",
    resave : false,
    saveUninitialized : false,
    cookie : {secure : false}
}));


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());

connectDb();

app.use("/uploads",express.static(path.join(__dirname, "uploads")))

app.use("/auth" , userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api",productRoutes);

app.length("/",(req,res)=>{
    res.send("Hello Techno");
})

// ? MIDDLEWARE ALWAYS PASS AFTER ROUTING AS IF IT IS PASSED EARLIER THEN IT GIVES ERROR FIRST
app.use(globalErrorHandler);


app.listen(5000,()=>{
    console.log("Server is running at 5000");
});