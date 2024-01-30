const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

router.get("/", async (_, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(e);
  }
});

module.exports = router;
