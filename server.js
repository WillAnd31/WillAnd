var express = require('express');
var app = express();
var morgan = require('morgan');
var http = require('http');
var https = require('https');
var fs = require('fs');

var keyPem = fs.readFileSync('../../../letsencrypt/etc/live/willand.co/privkey.pem', 'utf8');
var certPem = fs.readFileSync('../../../../letsencrypt/etc/live/willand.co/cert.pem', 'utf8');

var httpPort = 80;
var httpsPort = 443;

app.use(morgan('dev'));
app.use(express.static(__dirname + '/www'));

http.createServer(app).listen(httpPort);
https.createServer({
    key: keyPem,
    cert: certPem
}, app).listen(httpsPort);

app.get('*', function(req, res, next) {
    res.sendFile('./www/index.html', { root: __dirname });
});

console.log('Running on http port: ' + httpPort);
console.log('Running on https port: ' + httpsPort);
