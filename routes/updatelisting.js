var express = require('express');
var router = express.Router();
var db = require('../db/connection.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('updatelisting', { title: 'Update a bar' });
});

router.post('/', (req, res, next){
			
			})

//router.get('/', function(req, res, next) {
//  db.query("select * from bar", (error, result, fields) => {
//    if (error) {
//      res.status(500).send(error);
//    }
//    res.send(result);
//  });
//});
//


module.exports = router;
