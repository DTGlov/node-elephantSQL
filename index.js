const express = require('express');
const morgan = require('morgan');
const employee = require('./routes/employee.route');
var pg = require('pg');

const app = express();
require('dotenv').config();
const PORT = 3000;

app.use(express.json());

app.use(morgan('dev'));

var conString = process.env.DATABASE_URL;
var client = new pg.Client(conString);



client.connect(function (err) {
    if (err) {
        return console.error('could not connect to postgres', err);
    }
    client.query('SELECT NOW() AS "theTime"', function (err, result) {
        if (err) {
            return console.error('error running query', err);
        }
        console.log(result.rows[0].theTime);
        // >> output: 2018-08-23T14:02:57.117Z
        client.end();
    });
});

app.use('/employees', employee);

app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));