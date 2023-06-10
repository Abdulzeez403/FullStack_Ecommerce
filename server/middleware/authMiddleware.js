const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const asyncHandler = require("express-async-handler");

const protected = asyncHandler(async (req, res, next) => {
    let token;
    token = req.cookies.jwt;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            req.user = await User.findById(decoded.UserId).select("-password");
            next();
        } catch (error) {
            res.status(401);
            throw Error("Not authorized, Invalid token")
        }
    } else {
        res.status(401);
        throw Error("Not authorized, No token")
    }
    next();
});
module.exports = {protected}