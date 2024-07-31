require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./router/index.js");
const connectDb = require("./utils/db.js");
connectDb();

const PORT = process.env.PORT || 7000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("ecom backend server is working");
});

app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});

module.exports = app;
