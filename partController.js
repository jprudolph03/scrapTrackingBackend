Part = require("./partModel");

//index
exports.index = (req, res) => {
  Part.get((err, lot) => {
    if (err)
      res.json({
        status: "error",
        message: err,
      });
    res.json({
      status: "success",
      message: "Got Part Success",
      data: lot,
    });
  });
};

//create new lot
exports.add = (req, res) => {
  let part = new Part();

  part.name = req.body.name ? req.body.name : part.name;
  part.lotPrefix = req.body.lotPrefix ? req.body.lotPrefix : part.lotPrefix;
  part.STDLoss = req.body.STDLoss ? req.body.STDLoss : lot.STDLoss;

  //save and check
  part.save((err) => {
    if (err) res.json(err);
    res.json({
      message: "New Part Added!",
      data: part,
    });
  });
};

//view lot
exports.view = (req, res) => {
  Part.findById(req.params.part_id, (err, part) => {
    if (err) res.send(err);
    res.json({
      message: "Part Details",
      data: part,
    });
  });
};

//update lot
exports.update = (req, res) => {
  Part.findById(req.params.part_id, (err, part) => {
    if (err) res.send(err);
    part.name = req.body.name ? req.body.name : part.name;
    part.STDLoss = req.body.STDLoss ? req.body.STDLoss : part.STDLoss;
    part.lotPrefix = req.body.lotPrefix ? req.body.lotPrefix : part.lotPrefix;
    //save and check
    part.save((err) => {
      if (err) res.json(err);
      res.json({
        message: "Part updated Successfully",
        data: part,
      });
    });
  });
};

//Delete lot
exports.delete = (req, res) => {
  Part.deleteOne(
    {
      _id: req.params.part_id,
    },
    (err, contact) => {
      if (err) res.send(err);
      res.json({
        satus: "success",
        message: "Part Deleted",
      });
    }
  );
};
