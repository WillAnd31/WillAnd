const restify = require('restify');
const corsMW = require('restify-cors-middleware')
const defaultPort = 3000;

let server = restify.createServer();

const cors = corsMW({
	origins: ['https://willand.co', 'http://local.willand.co:3000']
});

server.pre(cors.preflight)
server.use(cors.actual)

server.get(/^\/(?!static)(?!.*\.).*$/, restify.plugins.serveStatic({
	directory: './dist',
	file: 'index.html'
}));

server.get(/^\/(?!static).*\..*$/, restify.plugins.serveStatic({
	directory: './dist'
}));

server.get(/^\/static.*\.json$/, restify.plugins.serveStatic({
	directory: './client'
}));

server.listen(defaultPort);

console.log('Env: ' + process.env.NODE_ENV);
console.log('Listening on: ', defaultPort);
