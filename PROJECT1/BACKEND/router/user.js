const express = require("express");
const {signup , login} = require ("../controller/user");

const router = express.Router();

router.post("/signup" , signup);
router.post("/login",login);
router.post("createUser",login);
// router/user.js
router.get("/profile", authenticateUser, getUserProfile); // Assuming authenticateUser is a middleware for auth
router.put("/profile", authenticateUser, updateUserProfile);


module.exports = router;