import express = require('express');
import path = require('path');

const port: number = process.env.NODE_ENV ? 80 : 3000;
var server;
var app = express();

app.use('/images', express.static(path.resolve(__dirname, '../client/images')));
app.use('/fonts', express.static(path.resolve(__dirname, '../client/fonts')));
app.use('/lang', express.static(path.resolve(__dirname, '../client/lang')));
app.use('/app', express.static(path.resolve(__dirname, '../dist')));
app.use('/lib', express.static(path.resolve(__dirname, '../node_modules')));

app.get('/*', (req: express.Request, res: express.Response) => {
	res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

server = app.listen(port);
console.log('Now listening on port: ' + port);
