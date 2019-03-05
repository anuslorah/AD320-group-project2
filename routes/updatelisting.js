var express = require('express');
var router = express.Router();
var mysql = require('../db/connection');



///* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('updatelisting', { title: 'Update a bar' });
//});
//
//module.exports = router;
//
//****************************
//router.get('/:id', function(req, res, next) {
//  var sqlQuery = "select * from film where film_id=?";
//  db.query(sqlQuery, [req.params.id], (error, result, fields) => {
//    if (error) {
//      res.status(500).send(error);
//    }
//    res.send(result);
//  });
//});
//
//module.exports = router;
//*************
//
///* GET home page. */
//router.get('/', function(req, res, next) {
//  //res.render('index', { title: 'Express' });
//  var sqlQuery = 'SELECT * FROM besthappy';
//  mysql.connection.connect();
//  mysql.connection.query(sqlQuery, function (error, results, fields) {
//    if (error) throw error;
//    res.send(JSON.stringify(results[0]));
//  });
//  mysql.connection.end();
//
//});
router.get('/all', function(req, res, next) {
  db.query("select * from besthappy", (error, result, fields) => {
    if (error) {
      res.status(500).send(error);
    }
    res.send(result);
  });
});
module.exports = router;