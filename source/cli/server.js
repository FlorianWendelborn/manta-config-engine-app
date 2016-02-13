#!/usr/bin/env node
require('http-server').createServer({
	root: __dirname + '/../../build/'
}).listen(process.argv[2] || 8080);
