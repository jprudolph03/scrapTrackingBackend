let router = require("express").Router();

//import controllers
const lotController = require("./lotController");
const partController = require("./partController");

//routes
router.route("/lot").get(lotController.index).post(lotController.add);
router.route("/part").get(partController.index).post(partController.add);

//default API response
router.get("/", (req, res) => {
  res.json({
    status: "API Works",
    message: "WooHoo",
  });
});

router
  .route("/lot/:lot_id")
  .get(lotController.view)
  .patch(lotController.update)
  .put(lotController.update)
  .delete(lotController.delete);

router
  .route("/part/:part_id")
  .get(partController.view)
  .patch(partController.update)
  .put(partController.update)
  .delete(partController.delete);

module.exports = router;
