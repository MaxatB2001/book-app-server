const mongoose = require("mongoose");

const newsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    newsComments: [{type: mongoose.Schema.Types.ObjectId, ref: "NewsComment"}]
  },
  {
    minimize: false,
    timestamps: true,
  }
);

const News = mongoose.model("News", newsSchema);

module.exports = News;
