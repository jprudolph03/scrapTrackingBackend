const mongoose = require("mongoose");

//schema
const lotSchema = mongoose.Schema({
  num: {
    type: Number,
  },
  partName: {
    type: String,
  },
  totalCoilWeight: {
    type: Number,
  },
  singlePartWeight: {
    type: Number,
  },
  ForgingScrap: {
    type: Number,
  },
  ForgingCounterTotal: {
    type: Number,
  },
  PressingScrap: {
    type: Number,
  },
  PressingCounterTotal: {
    type: Number,
  },
  eXt: {
    type: Number,
  },
});

//export lot model
var Lot = (module.exports = mongoose.model("lot", lotSchema));

module.exports.get = (callback, limit) => {
  Lot.find(callback).limit(limit);
};
