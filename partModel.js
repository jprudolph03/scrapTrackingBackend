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
});

//export lot model
var Part = (module.exports = mongoose.model("part", partSchema));

module.exports.get = (callback, limit) => {
  Part.find(callback).limit(limit);
};
