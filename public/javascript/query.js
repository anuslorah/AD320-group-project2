
connection.connect(function(err){
  if (err) throw err;
  console.log('Connected..');
  var sql = "INSERT INTO bar (barName, streetAddress, city, zipcode, phone, happyHour, awesome) VALUES ('"bar"', '"streetAddress"', '"city"', '"zip"', '"phone"', '"happyHour"', '"awesome"')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
}

module.exports = connection;
