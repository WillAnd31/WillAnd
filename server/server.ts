import express = require('express');
import path = require('path');
import LEX = require('letsencrypt-express');

let lex = LEX.create({
	configDir: require('os').homedir() + '/letsencrypt/etc',
	approveRegistration: function (hostname, cb) {
		cb(null, {
			domains: [hostname],
			email: 'will@willand.co',
			agreeTos: true
		});
	}
});

const port: number = process.env.NODE_ENV ? 80 : 3000;
let app = express();

app.use('/images', express.static(path.resolve(__dirname, '../client/images')));
app.use('/fonts', express.static(path.resolve(__dirname, '../client/fonts')));
app.use('/lang', express.static(path.resolve(__dirname, '../client/lang')));
app.use('/app', express.static(path.resolve(__dirname, '../dist')));
app.use('/lib', express.static(path.resolve(__dirname, '../node_modules')));

app.get('/*', (req: express.Request, res: express.Response) => {
	res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

lex.onRequest = app;

lex.listen([80], [443, 5001], function () {
  var protocol = ('requestCert' in this) ? 'https': 'http';
  console.log("Listening at " + protocol + '://willand-dev.willand.co:' + this.address().port);
});
