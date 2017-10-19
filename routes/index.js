var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HelloWorld' });
});

module.exports = router;
const { Pool } = require('pg');

const pool = new Pool();
//var pg = require('pg');
router.get('/db', function (request, response) {
    pool.connect(process.env.postgresql-trapezoidal-63026, function(err, client, done) {
        client.query('SELECT * FROM test_table', function(err, result) {
            done();
            if (err)
            { console.error(err); response.send("Error " + err); }
            else
            { response.render('pages/db', {results: result.rows} ); }
        });
    });
});