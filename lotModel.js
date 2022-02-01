const mongoose = require("mongoose");

//schema
const lotSchema = mongoose.Schema({
  num: {
    type: Number,
  },
  totalCoilWeight: {
    type: Number,
  },
  STDLoss: {
    type: Number,
  },
  singlePartWeight: {
    type: Number,
  },
});

//export lot model
var Lot = (module.exports = mongoose.model("lot", lotSchema));

module.exports.get = (callback, limit) => {
  Lot.find(callback).limit(limit);
};
