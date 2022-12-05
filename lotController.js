Lot = require("./lotModel");

//index
exports.index = (req, res) => {
  Lot.get((err, lot) => {
    if (err)
      res.json({
        status: "error",
        message: err,
      });
    res.json({
      status: "success",
      message: "Got Lot Success",
      data: lot,
    });
  });
};

//create new lot
exports.add = (req, res) => {
  let lot = new Lot();

  lot.num = req.body.num ? req.body.num : lot.name;
  lot.partName = req.body.partName ? req.body.partName : lot.partName;
  lot.totalCoilWeight = req.body.totalCoilWeight
    ? req.body.totalCoilWeight
    : lot.totalCoilWeight;
  lot.singlePartWeight = req.body.singlePartWeight
    ? req.body.singlePartWeight
    : lot.singlePartWeight;
  lot.ForgingScrap = req.body.ForgingScrap
    ? req.body.ForgingScrap
    : lot.ForgingScrap;
  lot.ForgingCounterTotal = req.body.ForgingCounterTotal
    ? req.body.ForgingCounterTotal
    : lot.ForgingCounterTotal;
  lot.ForgingNote = req.body.ForgingNote
    ? req.body.ForgingNote
    : lot.ForgingNote;

  lot.PressingScrap = req.body.PressingScrap
    ? req.body.PressingScrap
    : lot.PressingScrap;
  lot.PressingCounterTotal = req.body.PressingCounterTotal
    ? req.body.PressingCounterTotal
    : lot.PressingCounterTotal;
  lot.PressingNote = req.body.PressingNote
    ? req.body.PressingNote
    : lot.PressingNote;
  lot.TappingCounterTotal = req.body.TappingCounterTotal
    ? req.body.TappingCounterTotal
    : lot.TappingCounterTotal;
  lot.TappingScrap = req.body.TappingScrap
    ? req.body.TappingScrap
    : lot.TappingScrap;
  lot.TappingNote = req.body.PressingNote
    ? req.body.TappingNote
    : lot.TappingNote;

  lot.VSPackCounterTotal = req.body.VSPackCounterTotal
    ? req.body.VSPackCounterTotal
    : lot.VSPackCounterTotal;
  lot.VSPackScrap = req.body.VSPackScrap
    ? req.body.VSPackScrap
    : lot.VSPackScrap;
  lot.VSPackNote = req.body.VSPackNote ? req.body.VSPackNote : lot.VSPackNote;
  lot.eXt = req.body.eXt ? req.body.eXt : lot.eXt;

  //save and check
  lot.save((err) => {
    if (err) res.json(err);
    res.json({
      message: "New Lot Added!",
      data: lot,
    });
  });
};

//view lot
exports.view = (req, res) => {
  Lot.findById(req.params.lot_id, (err, lot) => {
    if (err) res.send(err);
    res.json({
      message: "Lot Details",
      data: lot,
    });
  });
};

//update lot
exports.update = (req, res) => {
  Lot.findById(req.params.lot_id, (err, lot) => {
    if (err) res.send(err);
    lot.num = req.body.num ? req.body.num : lot.num;
    lot.partName = req.body.partName ? req.body.partName : lot.partName;
    lot.singlePartWeight = req.body.singlePartWeight
      ? req.body.singlePartWeight
      : lot.singlePartWeight;
    lot.ForgingScrap = req.body.ForgingScrap
      ? req.body.ForgingScrap
      : lot.ForgingScrap;
    lot.ForgingCounterTotal = req.body.ForgingCounterTotal
      ? req.body.ForgingCounterTotal
      : lot.ForgingCounterTotal;
    lot.ForgingNote = req.body.ForgingNote
      ? req.body.ForgingNote
      : lot.ForgingNote;
    lot.PressingScrap = req.body.PressingScrap
      ? req.body.PressingScrap
      : lot.PressingScrap;
    lot.PressingCounterTotal = req.body.PressingCounterTotal
      ? req.body.PressingCounterTotal
      : lot.PressingCounterTotal;
    lot.PressingNote = req.body.PressingNote
      ? req.body.PressingNote
      : lot.PressingNote;
    lot.TappingCounterTotal = req.body.TappingCounterTotal
      ? req.body.TappingCounterTotal
      : lot.TappingCounterTotal;
    lot.TappingScrap = req.body.TappingScrap
      ? req.body.TappingScrap
      : lot.TappingScrap;
    lot.TappingNote = req.body.PressingNote
      ? req.body.TappingNote
      : lot.TappingNote;

    lot.VSPackCounterTotal = req.body.VSPackCounterTotal
      ? req.body.VSPackCounterTotal
      : lot.VSPackCounterTotal;
    lot.VSPackScrap = req.body.VSPackScrap
      ? req.body.VSPackScrap
      : lot.VSPackScrap;
    lot.VSPackNote = req.body.VSPackNote ? req.body.VSPackNote : lot.VSPackNote;
    lot.eXt = req.body.eXt ? req.body.eXt : lot.eXt;
    //save and check
    lot.save((err) => {
      if (err) res.json(err);
      res.json({
        message: "Lot updated Successfully",
        data: lot,
      });
    });
  });
};

//Delete lot
exports.delete = (req, res) => {
  Lot.deleteOne(
    {
      _id: req.params.lot_id,
    },
    (err, contact) => {
      if (err) res.send(err);
      res.json({
        sattus: "success",
        message: "Lot Deleted",
      });
    }
  );
};
