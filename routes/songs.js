var express = require("express");
var router = express.Router();
const songController = require("../controllers/song.controller");

/* GET users listing. */
router.get("/", songController.findAll);

router.get("/fav", songController.getFav);

router.get("/:id", songController.findById);

router.post("/", songController.create);

router.put("/", songController.update);

router.put("/fav", songController.updateFav);

router.delete("/:id", songController.delete);

module.exports = router;
