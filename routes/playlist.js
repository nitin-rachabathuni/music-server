var express = require('express');
const songs = require('../mocks/favArtist');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(songs);
});
  
module.exports = router;
