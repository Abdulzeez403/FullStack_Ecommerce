const express = require("express");
const router = express.Router();
const {
    CreateProduct

} = require("../controller/product");

router.post("/", CreateProduct);

module.exports = router;
