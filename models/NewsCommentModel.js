const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const newsCommentSchema = mongoose.Schema(
  {
    user: {
      type: ObjectId,
      required: true,
      ref: "User"
    },
    text: {
      type: String,
      required: true,
    },
    news: {
      type: ObjectId,
      required: true,
      ref: "News"
    }
  },
  {
    minimize: false,
    timestamps: true,
  }
);

const NewsComment = mongoose.model("NewsComment", newsCommentSchema);

module.exports = NewsComment;
