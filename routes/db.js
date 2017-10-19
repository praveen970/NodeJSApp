var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('db', { title: 'HelloWorld' });
});
module.exports = router;
/* GET db page.
var pg = require('pg');
router.get('/', function(req, res, next) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        client.query('SELECT * FROM test_table', function (err, result) {
                done();
                res.render('db',{results: result.rows});
            }
        )
    })
    res.render('db', { title: 'HelloWorld' });
});

module.exports = router;*/

//var app = express();
/*var pg = require('pg');
router.get('/db', function (request, response) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        client.query('SELECT * FROM test_table', function(err, result) {
            done();
            if (err)
            { console.error(err); response.send("Error " + err); }
            else
            { response.render('db', {results: result.rows} ); }
        });
    });
});
module.exports = router;*/