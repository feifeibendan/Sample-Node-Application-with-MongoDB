'use strict';
var express = require('express');
var app = express();

app.use('/users', require('./users'));

/* GET home page. */
app.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = app;
