var express = require('express');
var app = require('./app');
var a = express();
a.use(app);
a.listen(8080);
