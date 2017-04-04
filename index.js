const express = require('express');
const pool = require('./db');

var app = express();

// Return a 200 for kubernetes healthchecks
app.get('/healthz', function (req, res) {
    res.status(200).end();
});

app.get('/', function (req, res) {
    //ask for a client from the pool
    pool.connect(function (err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }

        //use the client for executing the query
        client.query('SELECT * FROM employee WHERE name=$1 LIMIT 1', ["James"], function (err, result) {
            //call `done(err)` to release the client back to the pool (or destroy it if there is an error)
            done(err);

            if (err) {
                return console.error('error running query', err);
            }

            res.send(`Employee ID: ${result.rows[0].id}, Name: ${result.rows[0].name}, Age: ${result.rows[0].age}`);
        });
    });
});

/* Use PORT environment variable if it exists */
var port = process.env.PORT || 5000;
server = app.listen(port, function () {
    console.log('Server listening on port %d in %s mode', server.address().port, app.settings.env);
});