const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const bookSchema = mongoose.Schema(
  {
    name: String,
    picture: {
      type: String,
      required: true,
    },
    pages: Number,
    bookFile: String,
    author: String,
    genre: String
  },
  {
    minimize: false,
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
