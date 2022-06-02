var express = require("express");
const albumsData = require("../mocks/albums");
var router = express.Router();
const songController = require("../controllers/song.controller");

/* GET users listing. */
router.get("/", songController.findByAlbum);

router.get("/:album", songController.findSongsByAlbum);

module.exports = router;
