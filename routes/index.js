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
    var params = [city];

    console.log("Index: Post Method");
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
});

router.get('/logout', function (req, res) {
    console.log("logout log " + req.session.user);
    req.session = null;
    res.render('index');
});
//

module.exports = router;