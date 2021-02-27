const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  name: String,
  authorId: String,
  genre: String,
});

const Book = model("Book", bookSchema);

module.exports = Book;
