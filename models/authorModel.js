const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const authorSchema = mongoose.Schema(
  {
    name: String,
    picture: {
      type: String,
      required: true,
    },
    books: [{ type: ObjectId, ref: "Book" }],
  },
  {
    minimize: false,
    timestamps: true,
  }
);

const Author = mongoose.model("Author", authorSchema);

module.exports = Author;
