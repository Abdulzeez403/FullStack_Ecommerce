const express = require("express");
const router = express.Router();
const {test} = require("../controller/test");
// const ValidateHandler =require("../middleware/validatehandler")

router.get("/",   test);

module.exports = router;
