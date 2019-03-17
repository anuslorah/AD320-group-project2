var express = require('express');
var router = express.Router();
var connection = require('../db/connection.js');
var bars;





router.post('/', function (req, res, next) {
    console.log("/delete");
    var id = req.body.barid;
    var sql;

    if(id) {
        sql = "DELETE FROM bar WHERE barID=?";
        connection.query(sql, [id], function (err, result){
            if (err) throw err;
            console.log("delete data retrieved");

            bars = JSON.stringify(result);
            console.log(bars + " delete");
            connection.close;
            console.log("Connection closed");
            res.render('deletelisting');

        });
    }

});

module.exports = router;