
var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/www'));
app.listen(80);

app.get('*', function(req, res) {
	res.sendFile('./www/index.html');
});