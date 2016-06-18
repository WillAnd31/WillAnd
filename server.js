// This is to be used for production

const express = require('express');
const path = require('path');
const fs = require('fs');
const http = require('http');
const SECURE = 443;
const REGULAR = 80;
const app = express();

app.use('/dist', express.static(path.resolve(__dirname, './dist')));

app.get('/*', function (req, res) {
	res.sendFile(path.resolve(__dirname, './dist/index.html'));
});

if (process.env.NODE_ENV === 'production') {
	const httpsServer = require('https').createServer({
		key: fs.readFileSync('sslcert/server.key', 'utf8'),
		cert: fs.readFileSync('sslcert/server.crt', 'utf8')
	}, app);

	httpsServer.listen(SECURE);
	console.log('Now listening on port: ' + SECURE);
}

const httpServer = http.createServer(app);
httpServer.listen(REGULAR);
console.log('Now listening on port: ' + REGULAR);
