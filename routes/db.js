var express = require('express');
var router = express.Router();

var pg = require('pg');
//Heroku
var conString = 'postgres:ikuxfhdkamnzyy:40fd460472c1e0cc365ebdb619d1a1ceba6a4112442d5d8fc2565a18c782f197@//ec2-23-23-192-242.compute-1.amazonaws.com:5432/d9nn2dsj7hs6st';
//var conString = 'postgres://okuraejwhdlqnu:0ca9be0f9ce6293b4f59caafbf0d28c6c74b1a2ac52b8e31d1d0b92ea52fd8bc@ec2-54-243-213-188.compute-1.amazonaws.com:5432/d2fmpks684lcsa
//'
//Local
/*var config = {
    user : 'praveen',
    database : 'pkdb',
    max : 10,
    idleTimeOutMillis : 3000
}*/
var client = new pg.Client(conString);
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




