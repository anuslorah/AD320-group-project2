var express = require('express');
var router = express.Router();
var connection = require('../db/connection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addlisting', { title: 'Add a bar' });
});
console.log('before post');


router.post('/', function(req, res, next){
console.log('after post');
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
  });
});



module.exports = router;
