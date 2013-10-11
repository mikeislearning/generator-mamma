var express = require('express'),
    routes = require('./routes'),
    hbs = require('hbs')
    path = require('path');

var app = express();
app.directory = __dirname;

require('./config/environments')(app);
require('./routes')(app);

module.exports = app;
