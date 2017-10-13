var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/db', function(req, res, next) {
    res.render('db', { title: 'HelloWorld' });
});

module.exports = router;