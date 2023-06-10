const express = require("express");
const app = express();
const dbase = require("./config/db");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");


app.use(cors());
app.use(express.json({ extend: true }));
app.use(cookieParser());
app.use("/api/user", require("./routes/authRoutes"));
app.use("/api/test", require("./routes/test"));
app.use("/api/product", require("./routes/productRoute"));

dbase();
app.listen(PORT, (req, res) => {
  console.log(`This Server is running on port ${PORT}`);
});