var express = require('express');
var router = express.Router();
var connection = require('../db/connection.js');
var bars;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Search for a bar' });
});

router.post('/', function(req, res, next){
    var city = req.body.city;
    console.log(city);
    var zip = parseInt(req.body.zip);
    // var params = [city];

    if(city){
        var sql = "SELECT * FROM bar WHERE city=?";
        connection.query(sql, [city], function (err, result){
            if (err) throw err;
            console.log("data retrieved");

            //console.log(bars);
            bars = JSON.stringify(result);
            console.log(bars);
            connection.close;
            console.log("Connection closed");
            res.render('index', {bars : (bars)});
        });
    } else if (zip){
        var sql = "SELECT * FROM bar WHERE zipcode=?";
        connection.query(sql, [zip], function (err, result){
            if (err) throw err;
            console.log("data retrieved");

            //console.log(bars);
            bars = result;
            var zipcode;
            var barName;
            // var array = [];
            // for (var i = 0; i < bars.length; i++){
            //     zipcode = JSON.stringify(bars.zipcode);
            //     barName = JSON.stringify(bars.barName);
            //     // array.push({zip : zipcode, name : barName});
            // }
            console.log(bars);
            connection.close;
            console.log("Connection closed");
            res.render('index', {bars : (bars)});
        });
    }


});

router.get('/logout', function (req, res) {
    console.log("logout log " + req.session.user);
    req.session.destroy(function () {

    });
    res.render('index');
});

module.exports = router;