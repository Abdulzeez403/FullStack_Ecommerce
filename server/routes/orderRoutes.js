const express = require("express");
const router = express.Router({ mergeParams: true });
const { PlaceOrder, GetOrder } = require("../controller/order")


router.post("/", PlaceOrder);
router.get("/", GetOrder);

module.exports = router;
