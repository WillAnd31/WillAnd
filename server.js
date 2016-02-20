var express = require('express');
var app = express();
var morgan = require('morgan');
var http = require('http');
var https = require('https');
var fs = require('fs');

var keyPem;
var certPem;

var httpPort;
var httpsPort;

if (process.env.NODE_ENV === 'server') {
    keyPem = fs.readFileSync('../../../letsencrypt/etc/live/willand.co/privkey.pem', 'utf8');
    certPem = fs.readFileSync('../../../../letsencrypt/etc/live/willand.co/cert.pem', 'utf8');
    httpPort = 80;
    httpsPort = 443;
} else {
    httpPort = 8888;
    httpsPort = 8890;
}

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
