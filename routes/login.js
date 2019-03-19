var express = require('express');
var router = express.Router();
var connection = require('../db/connection');

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.session.user) res.render('login', { title: 'Logged in!' });
    else res.render('login', { title: 'Login:' });
});

router.post('/', function (req, res, next) {
    var user = req.body.uid;
    var pass = req.body.pwd;
    connection.query("SELECT * FROM users WHERE user_uid='"+user+"' AND user_pwd='"+pass+"'", function (error, results, fields) {
        if(results.length){
            req.session.user = user;
            res.redirect('/');
        }
        else{
            message = 'Wrong Credentials.';
            res.render('index',{message: message});
        }
    });
});



module.exports = router;