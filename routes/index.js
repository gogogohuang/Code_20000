var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.sendFile(path.join(__dirname + '/views/index.html'));
    res.render('index', { title: 'Code-154/20000' });
});

module.exports = router;