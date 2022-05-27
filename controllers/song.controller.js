const Song = require("../models/songs.model");

exports.findAll = function (req, res) {
  Song.findAll(function (err, song) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", song);
    res.json(song);
  });
};

exports.create = function (req, res) {
  const newSong = new Song(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Song.create(newSong, function (err, song) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Song added successfully!",
        data: song,
      });
    });
  }
};

exports.findById = function (req, res) {
  Song.findById(req.params.id, function (err, song) {
    if (err) res.send(err);
    res.json(song);
  });
};

exports.delete = function (req, res) {
  Song.delete(req.params.id, function (err, song) {
    if (err) res.send(err);
    res.json({ error: false, message: "Song successfully deleted" });
  });
};
