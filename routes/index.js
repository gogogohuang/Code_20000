var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Code-154/20000' });
    //res.send('<h1>Fuck you</h1>');
});

module.exports = router;