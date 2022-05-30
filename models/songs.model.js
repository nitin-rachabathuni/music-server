var dbConn = require("../config/db.config");

var Song = function (song) {
  this.id = song.id;
  this.name = song.name;
  this.url = song.url;
  this.duration = song.duration;
  this.image = song.image;
  this.artist = song.artist;
  this.created_date = new Date();
};

Song.create = function (newSong, result) {
  dbConn.query("INSERT INTO songs set ?", newSong, function (err, res) {
    if (err) {
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

Song.findById = function (id, result) {
  dbConn.query("Select * from songs where id = ?", id, function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Song.findAll = function (result) {
  dbConn.query(
    "Select id,name,artist,duration,image,created_date from songs",
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Song.update = function (id, song, result) {
  dbConn.query(
    "UPDATE songs SET name=?,url=?,image=?,artist=? WHERE id = ?",
    [song.name, song.url, song.image, song.artist, id],
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Song.delete = function (id, result) {
  dbConn.query("DELETE FROM songs WHERE id = ?", [id], function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Song;
