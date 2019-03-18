var express = require('express');
var router = express.Router();
var connection = require('../db/connection');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addlisting', { title: 'Add a bar:' });
});


function respond(){
  var response = document.getElementByID('response');
  response.innerHTML = "Thank you for your input. Your bar has been added to the database. Please feel free to add additional awesome bars.";
}

router.post('/', function(req, res, next){
  var name = req.body.name;
  var street = req.body.street;
  var city = req.body.city;
  var zip = parseInt(req.body.zip);
  var phone = parseInt(req.body.phone);
  var hh = req.body.hh;
  var awesome = req.body.awesome;

  var params = [name,street,city,zip,phone,hh,awesome];

  console.log("Connected..")
  var sql = "INSERT INTO bar (barName, streetAddress, city, zipcode, phone, happyHour, awesome) VALUES(?,?,?,?,?,?,?)";
  console.log(sql);
  connection.query(sql, params, function (err, result){
    if (err) throw err;
    console.log("1 record inserted");
  connection.close;
  console.log("Connection closed");
  });
});




module.exports = router;
