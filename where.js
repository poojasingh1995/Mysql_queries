var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pooja@123",
  database: "mydata"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM mytable WHERE address = 'Park Lane 38'", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

// con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM mytable WHERE address LIKE 'S%'", function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });