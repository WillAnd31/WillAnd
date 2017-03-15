const restify = require('restify');
const defaultPort = 3000;

let server = restify.createServer();

server.use(restify.CORS({
	origins: ['https://willand.co', 'http://local.willand.co:3000']
}));

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
