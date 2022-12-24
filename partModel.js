const mongoose = require("mongoose");

//schema
const partSchema = mongoose.Schema({
  name: {
    type: String,
  },
  STDLoss: {
    type: Number,
  },
  lotPrefix: {
    type: Number,
  },
  DPTLoss: {
    type: Number,
  },
  material: {
    type: String,
  },
  machType: {
    type: String,
  },
});

//export lot model
var Part = (module.exports = mongoose.model("part", partSchema));

module.exports.get = (callback, limit) => {
  Part.find(callback).limit(limit);
};
