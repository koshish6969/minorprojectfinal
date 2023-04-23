const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  bookname: String,
  author: String,
  condition: String,
  publicationyr: String,
  category: String,
  userId: String,
  //new changes here
  lon: String,
  lat: String,
  // latitude:Number,
  // longitude:Number,
  image: String,
  prices: Number,
  username: String,
  location: String,

  expire_at: { type: Date, default: Date.now, expires: 2.592e6 },
});
module.exports = mongoose.model("product", productSchema);
