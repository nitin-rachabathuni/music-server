var express = require("express");
var router = express.Router();
const songController = require("../controllers/song.controller");

/* GET users listing. */
router.get("/", songController.findAll);

router.get("/:id", songController.findById);

router.post("/", songController.create);

router.put("/", songController.update);

router.delete("/:id", songController.delete);

module.exports = router;
