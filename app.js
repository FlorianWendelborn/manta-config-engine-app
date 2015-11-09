var express = require('express');
var app = express.Router();
var zip = new require('node-zip')();

app.use(express.static(__dirname + '/web/dist'));

module.exports = app;
