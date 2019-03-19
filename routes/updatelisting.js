var express = require('express');
var router = express.Router();
var connection = require('../db/connection.js');
const {body, validationresult} = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');
var bars;
var time;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('updatelisting', { title: 'Update a bar' });
});

router.post('/', function(req, res, next){
  	var city = req.body.city;
	console.log(city);
  	var zip = parseInt(req.body.zip);
  	var params = [city];

  	console.log("Connected..")
  	var sql = "SELECT * FROM bar WHERE city=?";
  	connection.query(sql, [city], function (err, result){
    	if (err) throw err;
		console.log("data retrieved");
		//console.log(bars);
		bars = result;
		console.log(bars);
		connection.close;
		console.log("Connection closed");
            res.render('update', {bars : (bars), turn : 0});
            });
});

//router.get('/', function(req, res, next) {
//  db.query("select * from bar", (error, result, fields) => {
//    if (error) {
//      res.status(500).send(error);
//    }
//    res.send(result);
//  });
//});

module.exports = router;