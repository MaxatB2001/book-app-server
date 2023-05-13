const mongoose = require("mongoose");

const genreSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    }
  },
  {
    minimize: false,
    timestamps: true,
  }
);

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;
