const asyncHandler = require("express-async-handler");
 const test = asyncHandler((req,res)=>{
    res.status(200).send("testing api")
});

module.exports = {test}


