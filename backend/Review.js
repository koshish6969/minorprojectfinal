const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  details: String,
  bookId: String,
  userId: String,
  loggedinId: String,
  username:String,
});
module.exports = mongoose.model("review", reviewSchema);
