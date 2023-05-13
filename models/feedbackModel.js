const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const feedbackSchema = mongoose.Schema(
  {
    user: {
      type: ObjectId,
      required: true,
    },
    text: {
      type: String,
      required: true,
    }
  },
  {
    minimize: false,
    timestamps: true,
  }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);

module.exports = Feedback;
