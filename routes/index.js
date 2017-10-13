var express = require('express');
var router = express.Router();
var app = express.Router(); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HelloWorld' });
});

module.exports = router;
var pg = require('pg');
  app.get('/db', function (request, response) {
    pg.connect(process.env.DATABASE_URL, function(err, client, done) {
        client.query('SELECT * FROM test_table', function(err, result) {
            done();
            if (err)
            { console.error(err); response.send("Error " + err); }
            else
            { response.render('pages/db', {results: result.rows} ); }
        });
    });
});
