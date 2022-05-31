const mysql = require("mysql");

const dbConn = mysql.createConnection({
  host: "db4free.net",
  user: "bat6vwpo",
  password: "Ycxp@JG1agpi",
  database: "songsapp",
});

dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;
