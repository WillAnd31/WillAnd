# WillAndCo Personal Website

1. [Required applications](#required-applications)
1. [How to run locally](#how-to-run-locally)

## Required Applications

1. Node/NPM ([how to download](https://nodejs.org/en/download/package-manager/))
1. Webpack (`npm install -g webpack`)
1. Typings (`npm install -g typings`)

Additional applications for development:

1. Webpack Dev Server (`npm install -g webpack-dev-server`)

Additional applications for production:

1. PM2 (`npm install -g pm2`)

## How To Run Locally

1. Download all the required resources: `npm install`
1. Make sure that `./WillAnd/client/typings` and `./WillAnd/server/typings` directories were installed, if not: go to `./WillAnd/client` and `./WillAnd/server` and run `typings install`
1. Start the website on (localhost)[http://localhost:3000]: `npm start`
