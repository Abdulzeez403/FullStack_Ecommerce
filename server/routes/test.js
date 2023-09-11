const express = require("express");
const router = express.Router();
const { test } = require("../controller/test");
const { protected } = require("../middleware/authMiddleware")

router.get("/", protected, test);

module.exports = router;
