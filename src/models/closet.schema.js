const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: String,
  itemImageUrl: String,
  categoryId: Number,
  categoryName: String,
  subCategoryId: Number,
  subCategoryName: String,
  brandId: String,
  brandName: String,
  season: [String],
  colorCode: [String],
  createdOn: Date,
  updatedOn: Date,
  productId: String,
  price: Number, 
  notes: String,
});

const Closet = new mongoose.model("closet", schema);
module.exports = Closet;
