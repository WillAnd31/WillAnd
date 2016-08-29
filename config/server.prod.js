module.exports = {
	serverConfigs: [{
			port: 443,
			settings: {
				key: fs.readFileSync('/root/letsencrypt/etc/live/willand.co/privkey.pem'),
				certificate: fs.readFileSync('/root/letsencrypt/etc/live/willand.co/cert.pem')
			}
		},
		{
			port: 80
		}
	]
};