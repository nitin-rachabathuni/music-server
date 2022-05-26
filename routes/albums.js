var express = require('express');
const albumsData = require('../mocks/albums');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(albumsData);
});

module.exports = router;
