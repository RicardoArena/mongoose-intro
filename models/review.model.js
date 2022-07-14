const mongoose = require("mongoose");
const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "Rest",
    maxLength: 32,
    // default: "Anonimo",
  },
  body: { type: String, required: true, minLength: 10 },
  createAt: { type: Date, default: Date.now() },
});

const ReviewModel = model("Review", reviewSchema);

module.exports = ReviewModel;
