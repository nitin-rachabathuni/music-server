const Song = require("../models/songs.model");

exports.findAll = function (req, res) {
  Song.findAll(function (err, song) {
    if (err) res.send(err);
    res.json(song);
  });
};

exports.create = function (req, res) {
  // if (!req.body.image) {
  //   return res.status(500).send({ msg: "file is not found" });
  // }
  // // accessing the file
  // const myFile = req.body.image;

  // //  mv() method places the file inside public directory
  // myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
  //   if (err) {
  //     console.log(err);
  //     return res.status(500).send({ msg: "Error occured" });
  //   }
  //   // returing the response with file path and name
  //   // return res.send({ name: myFile.name, path: `/${myFile.name}` });
  //   req.body.image = `/${myFile.name}`;
  // });
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

exports.update = function (req, res) {
  const newSong = new Song(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Song.update(req.body.id, newSong, function (err, song) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Song updated successfully!",
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

exports.findByAlbum = function (req, res) {
  Song.findAlbums(function (err, albums) {
    if (err) res.send(err);
    res.json(albums);
  });
};

exports.findSongsByAlbum = function (req, res) {
  Song.findSongs(req.params.album, function (err, song) {
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
