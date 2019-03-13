var express = require('express');
var router = express.Router();
var connection = require('../db/connection');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('signup', { title: 'Sign Up:' });
});

router.post('/', function (req, res, next) {
    var first = req.body.first;
    var last = req.body.last;
    var email = req.body.email;
    var uid = req.body.uid;
    var pwd = req.body.pwd;
    var sql = "INSERT INTO users (user_first, user_last, user_email, user_uid, user_pwd) VALUES ('"+first+"', '"+last+"', '"+email+"', '"+uid+"', '"+pwd+"');";
    connection.query(sql, function (error, res, fields) {
        if (error) {
            console.log("error ocurred",error);
            res.send({
                "code":400,
                "failed":"error ocurred"
            })
        }else{
            console.log('The solution is: ', res);
            res.send({
                "code":200,
                "success":user +" created"
            });
        }
    });
});

module.exports = router;