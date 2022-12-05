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
  ForgingNote: {
    type: String,
  },
  PressingScrap: {
    type: Number,
  },
  PressingCounterTotal: {
    type: Number,
  },
  PressingNote: {
    type: String,
  },
  TappingCounterTotal: {
    type: Number,
  },
  TappingScrap: {
    type: Number,
  },
  TappingNote: {
    type: String,
  },
  VSPackCounterTotal: {
    type: Number,
  },
  VSPackScrap: {
    type: Number,
  },
  VSPackNote: {
    type: String,
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
