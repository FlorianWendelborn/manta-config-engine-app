var express = require('express');
var app = express.Router();

app.use(express.static(__dirname + '/web/dist'));

module.exports = app;
