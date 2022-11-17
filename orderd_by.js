var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pooja@123",
  database: "mydata"
});

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM mytable ORDER BY name", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM mytable ORDER BY name DESC", function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  });