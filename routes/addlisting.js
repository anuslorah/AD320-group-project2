var express = require('express');
var router = express.Router();
var connection = require('../db/connection');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addlisting', { title: 'Add a bar:' });
});


//function respond(){
//  var response = document.getElementByID('response');
//  response.innerHTML = "Thank you for your input. Your bar has been added to the database. Please feel free to add additional awesome bars.";
//}

router.post('/', function(req, res, next){
  var name = req.body.name;
  var street = req.body.street;
  var city = req.body.city;
  var zip = parseInt(req.body.zip);
  var phone = parseInt(req.body.phone);
  var hh = req.body.hh;
  var awesome = req.body.awesome;
	
	if(name === null || name === "" ||street === null || street === "" ||city === null || city === "" ||zip === null || zip === "" ||phone === null || phone === "" ||hh === null || hh === "" ||awesome === null || awesome === ""){
	res.render('addlisting', {empty: true, title: 'Add a bar:'});	
	}else if(isNaN(zip)){
		res.render('addlisting', {number:true, title: 'Add a bar:'});		
	} else if(isNaN(phone)){
		res.render('addlisting', {number2:true, title: 'Add a bar:'});		
	}else {
		var params = [name,street,city,zip,phone,hh,awesome];

	 	console.log("Connected.. here")
	 	var sql = "INSERT INTO bar (barName, streetAddress, city, zipcode, phone, happyHour, awesome) VALUES(?,?,?,?,?,?,?)";
	 	console.log(sql);
	 	connection.query(sql, params, function (err, result){
		if (err) throw err;
			console.log("1 record inserted");
			connection.close;
			console.log("Connection closed");
			res.render('addlisting', {success: true, title: 'Add a bar:'});
		});
	}

 });




module.exports = router;
