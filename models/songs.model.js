var dbConn = require("../config/db.config");

var Song = function (song) {
  this.id = song.id;
  this.name = song.name;
  this.url = song.url;
  this.duration = song.duration;
  this.image = song.image;
  this.artist = song.artist;
  this.album = song.album;
  this.fav = song.fav;
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
    "Select id,name,artist,url,duration,image,album,fav,created_date from songs",
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Song.getFav = function (result) {
  dbConn.query(
    "Select id,name,artist,url,duration,image,album,fav,created_date from songs where fav = 1",
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Song.findAlbums = function (result) {
  dbConn.query("Select album from songs group by album", function (err, res) {
    if (err) {
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Song.findSongs = function (album, result) {
  dbConn.query(
    `Select * from songs where album = "${album}"`,
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
    "UPDATE songs SET name=?,url=?,image=?,artist=?,album=?,duration=? WHERE id = ?",
    [
      song.name,
      song.url,
      song.image,
      song.artist,
      song.album,
      song.duration,
      id,
    ],
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Song.updateFav = function (song, result) {
  dbConn.query(
    "UPDATE songs SET fav=? WHERE id = ?",
    [song.fav, song.id],
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
