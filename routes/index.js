var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Code-154/20000' });
});

/* GET tibet page. */
router.get('/tibet', function(req, res, next) {
    res.render('tibet');
});

/* GET china page. */
router.get('/china', function(req, res, next) {
    res.render('china');
});

/* GET myanmar page. */
router.get('/myanmar', function(req, res, next) {
    res.render('myanmar');
});

module.exports = router;