var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pooja@123",
  database: "mydata"
});

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM mytable", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT name, address FROM mytable", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT name, address FROM mytable", function (err, result, fields) {
      if (err) throw err;
      console.log(fields);
    });
  });