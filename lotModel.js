const mongoose = require("mongoose");

//schema
const lotSchema = mongoose.Schema({
  num: {
    type: Number,
  },
});

//export lot model
var Lot = (module.exports = mongoose.model("lot", lotSchema));

module.exports.get = (callback, limit) => {
  Lot.find(callback).limit(limit);
};
