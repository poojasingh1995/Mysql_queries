var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pooja@123",
  database: "mydata"
});

// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DROP TABLE mytable";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table deleted");
//     })
// });

con.connect(function(err) {
    if (err) throw err;
    var sql = "DROP TABLE IF EXISTS mytable";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });