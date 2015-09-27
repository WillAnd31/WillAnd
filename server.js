
var express = require('express');
var app = express();
var morgan = require('morgan');
var port = 80;

app.use(morgan('dev'));
app.use(express.static(__dirname + '/dist'));
app.listen(port);

app.get('*', function(req, res, next) {
	res.sendFile('./dist/index.html', { root: __dirname });
});

console.log('Running on port: ' + port);
console.log(__dirname)