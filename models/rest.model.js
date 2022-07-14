const { Schema, model, Types } = require("mongoose");

const restSchema = new Schema({
  owner: { type: String, required: true },
  restName: { type: String, required: true, minLength: 2 },
  restType: { type: String, required: true, minLength: 5 },
  restAvaliation: { type: Number, required: true },
  review: [{ type: Types.ObjectId, ref: "Review" }],
});

const restModel = model("Rest", restSchema);

module.exports = restModel;
