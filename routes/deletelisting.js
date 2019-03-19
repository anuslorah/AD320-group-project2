var express = require('express');
var router = express.Router();
var connection = ('../db/connection');



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('deletelisting', { title: 'Delete a bar:' });
});

module.exports = router;

router.post('/', function (req, res) {
    var city = req.body.city;
    var zip = req.body.zip;
    var id = req.body.id;
    var sql = "";
    if(city){
        sql = "SELECT * FROM bar WHERE '" + city + "'";
    } else if(zip){
        sql = "SELECT * FROM bar WHERE '" + zip + "'";
    }  else if(id){
        sql = "SELECT * FROM bar WHERE '" + id + "'";
    } else {
        //empty
    }
    connection.query(sql, function (error, results) {
        console.log(results[0])
        res.redirect('/');
    })

})

