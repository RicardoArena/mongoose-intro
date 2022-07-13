const { Schema, model } = require("mongoose");

const restSchema = new Schema({
  owner: { type: String, required: true },
  restName: { type: String, required: true },
  restType: { type: String, required: true },
  restAvaliation: { type: String, required: true },
});

const restModel = model("Rest", restSchema);

module.exports = restModel;
