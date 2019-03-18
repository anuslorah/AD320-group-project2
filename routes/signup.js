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
    console.log(first, last, email, uid, pwd);
    if(first === null || first === "" || last === null || last === "" || email === null || email === "" || uid === null || uid === "" || pwd === null || pwd === ""){
        res.render("signup", { empty : "All fields required!" });
    } else {
        var sql = "INSERT INTO users (user_first, user_last, user_email, user_uid, user_pwd) VALUES ('"+first+"', '"+last+"', '"+email+"', '"+uid+"', '"+pwd+"');";
        connection.query(sql, function (error, results, fields) {
            if (error) {
                console.log("error ocurred",error);
                res.render("signup", { success : 0, user: uid });
            }else{
                console.log('The solution is: ', results);
                res.render("signup", { success : 1, user: uid });
            }
        });
    }

});

module.exports = router;