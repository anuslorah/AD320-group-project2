var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('footer', { title: 'footer' });
});

module.exports = router;