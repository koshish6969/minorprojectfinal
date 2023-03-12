const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  bookname: String,
  author: String,
  condition: String,
  publicationyr: String,
  category: String,
  userId: String,
  // latitude:Number,
  // longitude:Number,
  image: String,
  prices: Number,
  username: String,
  location:String,
  lon: String,
  lat: String,
});
module.exports = mongoose.model("product", productSchema);
