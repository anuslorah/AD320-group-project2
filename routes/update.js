var express = require('express');
var router = express.Router();
var connection = require('../db/connection.js');
//const {body, validationresult} = require('express-validator/check');
//const { sanitizeBody } = require('express-validator/filter');
/* GET users listing. */

router.get('/', function(req, res, next) {
	res.render('updatelisting', {bars : (bars)});
});

router.post('/', function(req, res, next){
  	var phoneNumber = parseInt(req.body.phoneNumber);
  	var happyHour = req.body.happyHour;
  	var awesome = req.body.awesome;
	var id = req.body.id;
	var params1 = [phoneNumber];
	var params2 = [happyHour];
	var params3 = [awesome];
	var params4 = [id];

  	console.log("Connected..")
  	var sql = "UPDATE bar SET phone=?, happyHour=?, awesome=? WHERE id=?";
	
	
  	connection.query(sql, [params1],[params2],[params3],[params4], function (err, result){
    	if (err) throw err;
		console.log("data retrieved");
		//console.log(bars);
		bars = result;
		console.log(bars);
		connection.close;
		console.log("Connection closed");
		//res.render('update', {bars : bars});

		//res.redirect({bars : (bars)}, 'update');
  	});
});

module.exports = router;