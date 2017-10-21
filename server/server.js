const express = require('express');
const moment = require('moment');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

app.set('view engine', 'hbs');

app.use((req, res, next) => {
    // TODO: log database, search some module for that
    var now = moment().format();
    var log = `[${now}: ${req.method} ${req.url}]`;
    console.log(log);
    next();
});

app.get('/', (req, res) => {
    console.log('get /');
    res.render('login.hbs');
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
