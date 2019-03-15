var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {title: 'Search for a bar' });
});

router.get('/logout', function (req, res) {
    console.log("logout log " + req.session.user);
    req.session.destroy(function () {
        
    });
    res.render('index');
});

module.exports = router;