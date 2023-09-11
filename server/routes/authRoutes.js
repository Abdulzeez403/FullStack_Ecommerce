const express = require("express");
const router = express.Router();

const {
  RegisterUser,
  LogInUser,
  LogOut,
  CurrentUser,
} = require("../controller/authController");

const { protected } = require("../middleware/authMiddleware")

router.post("/Register", RegisterUser);
router.post("/Login", LogInUser);
router.get("/Logout", LogOut);
router.get("/current/:id", CurrentUser);
module.exports = router;
