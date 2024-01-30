const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: String,
  description: String,
  featuredImage: {
    altText: String,
    url: String,
  },
});

module.exports = mongoose.model("Product", productSchema);
