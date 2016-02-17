var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var morgan = require('morgan');
var port = 80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(morgan('dev'));
app.use(express.static(__dirname + '/www'));
app.listen(port);

app.get('*', function(req, res, next) {
    res.sendFile('./www/index.html', { root: __dirname });
});

app.post('/test', function (req, res, next) {
    console.log(req.body);
    res.send(req.body);
});

app.get('/v1/oauth/authorize', function (req, res, next) {
    console.log('*********************GET: ', req.body);
    res.send(req.body);
});

app.get('/v1/oauth/token', function (req, res, next) {
    console.log('*********************GET: ', req.body);
    res.send(req.body);
});

app.get('/v1/oauth/me', function (req, res, next) {
    console.log('*********************GET: ', req.body);
    res.send(req.body);
});

app.post('/v1/oauth/authorize', function (req, res, next) {
    console.log('*********************POST: ', req.body);
    res.send(req.body);
});

app.post('/v1/oauth/token', function (req, res, next) {
    console.log('*********************POST: ', req.body);
    res.send(req.body);
});

app.post('/v1/oauth/me', function (req, res, next) {
    console.log('*********************POST: ', req.body);
    res.send(req.body);
});

console.log('Running on port: ' + port);