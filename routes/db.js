var express = require('express');
var router = express.Router();

var pg = require('pg');
var conString = 'postgres:praveen:password@//localhost:5432/pkdb';

var config = {
    user : 'praveen',
    database : 'pkdb',
    max : 10,
    idleTimeOutMillis : 3000
}
var client = new pg.Client(config);
router.get('/', function(req, res, next) {
    client.connect(function (err) {
        if (err)
        {
            console.log(err.message)
        }

        client.query("Select * from test_table",function (err, result) {
            if (err)
            { console.error(err); response.send("Error " + err); }
            else

            { console.log("Here are we")
                console.log(result.rows);
                res.render('pages/db', {results: result.rows}
                 );
            }
        })
    })

});
module.exports = router;




