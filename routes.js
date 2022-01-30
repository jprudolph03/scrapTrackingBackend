let router = require("express").Router();

//import lot controller
const lotController = require("./lotController");

//lot routes
router.route("/lot").get(lotController.index).post(lotController.add);

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

module.exports = router;
