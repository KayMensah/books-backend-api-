const { Schema, model } = require("mongoose");

const booksSchema = new Schema({
  title: String,
  author: String,
  description: String,
  image: String,
});

const BooksModel = model("Books", booksSchema);

module.exports = BooksModel;
