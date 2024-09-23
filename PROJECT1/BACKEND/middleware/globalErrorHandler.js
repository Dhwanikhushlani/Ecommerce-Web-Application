 //FIXME: 
// ? HANDLES ALL ERROR IN CODE GLOBALLY BY CREATING MIDDLEWARE FOR ALL ERRORS AS ONCE :

const errorHandler = (err, req, res, next)=>{
    let statusCode = 500;
    let errorMessage = err.message || "Internal Server Error";
    
    if(err.name === "ValidationError"){
        const message = Object.values(err.errors).map(error =>error.message);
        statusCode = 400;
        errorMessage = message;
    }
    // }else if(err.name === "userExist"){
    //     statusCode = 400;
    //     errorMessage = "User Already Exist";
    // }else if(err.name === "unAuthorized"){
    //     statusCode = 401;
    //     errorMessage = "Unauthorized";
    // }else if(err.name === "notFound"){
    //     statusCode = 400;
    //     errorMessage = "User not found";
    // }
    
    res.status(statusCode).json({message : errorMessage});
};

module.exports = errorHandler;