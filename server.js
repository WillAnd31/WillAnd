const restify = require('restify');
const path = require('path');
const glob = require('glob');
const fs = require('fs');
const defaultPort = 3000;

let server = restify.createServer();

server.get(/^\/(?!static)(?!.*\.).*$/, restify.serveStatic({
	directory: './dist',
	file: 'index.html'
}));

server.get(/^\/(?!static).*\..*$/, restify.serveStatic({
	directory: './dist'
}));

server.get(/^\/static.*\.json$/, restify.serveStatic({
	directory: './client'
}));

server.listen(defaultPort);

console.log('Env: ' + process.env.NODE_ENV);
console.log('Listening on: ', defaultPort);
