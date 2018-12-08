
const fs = require('fs');
const path = require('path');
const express = require('express');
const Promise = require('bluebird');
const serveStatic = require('serve-static');
const server = express();

const conf = {
	dist: path.resolve(__dirname, 'dist'),
	port: 3000
};

const debugLog = (...data) => console.log(`*** DEBUG [${Date.now()}]:`, ...data);
const getAllDirs = (dir) => Promise.fromCallback(cb => fs.readdir(dir, cb)).reduce((res, item) => {
	let itemPath = path.resolve(dir, item);
	return Promise.fromCallback(cb => fs.stat(itemPath, cb))
		.then(stat => {
			if (!stat.isDirectory()) return res;
			return getAllDirs(itemPath)
				.each(subDir => res.push(subDir))
				.return(res);
		});
}, [dir]);

debugLog('Configuring server');
getAllDirs(conf.dist)
	.map(dir => server.use(dir.split(conf.dist)[1], serveStatic(dir)))
	.finally(() => server.listen(conf.port, () => debugLog(`Server listening on port ${3000}`)));
