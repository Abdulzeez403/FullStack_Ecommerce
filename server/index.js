const express = require("express");
const app = express();
const dbase = require("./config/db");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/errorMiddleware");
const bodyParser = require("body-parser");


app.use(cors({
  origin: ["http://localhost:5000", "http://localhost:5500"],
  methods: ["POST", "GET", "PUT", "DELETE"],
  credentials: true
}));
app.use(cookieParser());
// Increase the payload limit (e.g., 10MB)
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(errorMiddleware);
app.use(express.json({ extend: true }));
app.use("/api/user", require("./routes/authRoutes"));
app.use("/api/test", require("./routes/test"));
app.use("/api", require("./routes/productRoute"));
app.use("/api", require("./routes/cartRoutes"));
app.use("/api/order", require("./routes/orderRoutes"));


dbase();
app.listen(PORT, (req, res) => {
  console.log(`This Server is running on port ${PORT}`);
});