var express = require('express');
var router = express.Router();
var connection = require('../db/connection.js');
// const {body, validationresult} = require('express-validator/check');
// const { sanitizeBody } = require('express-validator/filter');
/* GET users listing. */
router.get('/', function(req, res, next) {
    var id = req.query.id;

    console.log(id);
    console.log("Connected..");
    var sql = "SELECT * FROM bar WHERE barID=?";
    connection.query(sql, [id], function (err, result) {
        if (err) throw err;
        console.log("data retrieved");
        //console.log(bars);
        bars = result;
        console.log(bars[0].barName);
        connection.close;
        console.log("Connection closed");
        res.render('update', {title: 'Update a bar', turn: 1, bars : (bars)});
    });
});

router.post('/', function(req, res, next){
  	var phoneNumber = req.body.phoneNumber;
  	var happyHour = req.body.happyHour;
  	var awesome = req.body.awesome;
	var id = parseInt(req.body.id);
	// var params = [phoneNumber, happyHour, awesome, id];
      //
  	console.log("Connected..");
  	var sql = "UPDATE bar SET phone='"+phoneNumber+"', happyHour='"+happyHour+"', awesome='"+awesome+"' WHERE barID="+id;
	var barName;
    connection.query("SELECT barName FROM bar WHERE barID=?",[id], function (err, result) {
        if (err) throw err;
        console.log("data retrieved");
        barName = JSON.stringify(result[0].barName);
        console.log("BarName: " + JSON.stringify(result[0].barName));
        connection.close;
    } );


    connection.query(sql, function (err, result){

    	if (err) throw err;
		console.log("data retrieved");
		//console.log(bars);
		bars = result;
		console.log(bars);
		connection.close;
		console.log("Connection closed");
		res.render('updatelisting', {success: true, bar: barName});

		// res.redirect({bars : (bars)}, 'update');

  	});
});

module.exports = router;