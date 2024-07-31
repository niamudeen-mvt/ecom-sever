const express = require("express");
const router = express.Router();
const userRouter = require("./auth.routes");
const productRouter = require("./product.routes");

router.use("/auth", userRouter);
router.use("/products", productRouter);

module.exports = router;
