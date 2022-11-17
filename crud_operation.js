var mysql = require('mysql');
var user = require("readline-sync")

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Pooja@123",
  database: "file"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE data (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err){
        console.log("already table created");
    }
    else{
        console.log("table created")
    }
  });
});

var choice=user.question("enter the query:-")

if(choice=="insert"){

    var sql = "INSERT INTO data (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
}
else if(choice=="update"){

    var sql = "UPDATE data SET address = 'Canyon 123' WHERE address = 'Valley 345'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
}
else if(choice=="select"){
    con.query("SELECT * FROM data", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
}
else if(choice=="delete"){
    var sql = "DELETE FROM data WHERE address = 'Mountain 21'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
}