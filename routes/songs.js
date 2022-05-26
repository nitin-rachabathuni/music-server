var express = require('express');
const songs = require('../mocks/songs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(songs);
});

router.get('/:id', function(req, res, next) {
    res.json(songs[0]);
  });
  
module.exports = router;
