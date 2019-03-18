var express = require('express');
var router = express.Router();
var connection = require('../db/connection.js');
var bars;




/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('deletelisting', { title: 'Delete a bar' });
});

router.post('/', function (req, res, next) {
    var id = req.body.id;

    if (id === null || id === "") {
        console.log("id val");
        res.render("deletelisting", { title: 'Delete a bar', empty: 'Please enter a Bar ID'});
    } else {
        var sql = "SELECT * FROM bar WHERE barID=?";
        connection.query(sql, [id], function (err, result){
            if (err) throw err;
            console.log("listing data retrieved");

            //console.log(bars);
            bars = result;
            console.log(bars);
            connection.close;
            console.log("listing Connection closed");
            if (bars.length){
                res.render('deletelisting', {bars : (bars)});
            } else {
                res.render('deletelisting');
            }
        });
    }

});






module.exports = router;