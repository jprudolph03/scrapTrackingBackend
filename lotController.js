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
  lot.totalCoilWeight = req.body.totalCoilWeight
    ? req.body.totalCoilWeight
    : lot.totalCoilWeight;
  lot.STDLoss = req.body.STDLoss ? req.body.STDLoss : lot.STDLoss;
  lot.singlePartWeight = req.body.singlePartWeight
    ? req.body.singlePartWeight
    : lot.singlePartWeight;

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
