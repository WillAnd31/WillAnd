const restify = require('restify');
const path = require('path');
const glob = require('glob');
const fs = require('fs');

function serverSetup (serverSettings) {
	let server = restify.createServer(serverSettings);

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

	return server;
};

console.log('Env: ' + process.env.NODE_ENV);
require(`./config/server.${process.env.NODE_ENV}`).serverConfigs.forEach((serverConfig) => serverSetup(serverConfig.settings).listen(Number(serverConfig.port), () => console.log('Listening on port: ', serverConfig.port)));
