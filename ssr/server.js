var express = require('express');
var server = express();


const siteoApp = require('./apps/siteo-app.js');
const siteoApi = require('./apps/siteo-api.js');

/*
//SSL sertificate not work on local development
if (process.env.NODE_ENV =='development')  {
     process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
}
*/

/*
 how turn off x-powered-by
 https://stackoverflow.com/questions/10717685/how-to-remove-x-powered-by-in-expressjs
*/
server.disable('x-powered-by');

if (process.env.NODE_ENV=='development') {

    server.use('/assets', express.static('dist/assets'));
    server.use('/plugins', express.static('dist/plugins'));

}

/**
  Create router for Siteo App
  This Router resolve SSR siteo-app
*/
var routerSiteoApp = express.Router();
routerSiteoApp.get('*', function(req,res){

    siteoApp(req,res, req.baseUrl, req.path )
});

/**
  Create router for API which using siteo-app
  This Router resolve all API calls
*/
var routerApi = express.Router();
routerApi.get('*', siteoApi);

/**
   @path "/api"
   @router  routerApi
   All routes which start with this path will be resolve using routerApi
*/
server.use('/api', routerApi);

/**
siteo-app can works as multiple project on one server
*/
if (process.env.MULTISITEO) {
  // many projects  on one hosts
  /**
     @path "/:siteoId"
     @router  routerSiteoApp
     All routes which start with  this patch will be resolve using routerSiteoApp
  */
  server.use('/([a-z]{2})/:siteoId', routerSiteoApp);
  server.use('/:siteoId', routerSiteoApp);



  // if main page, We need put separetly for start siteo-app (main application page or landing page)
  server.get('/|/([a-z]{2})', (req, res) => {
    siteoApp(req, res, '', '');
  });

} else {
  // one project on one host
  server.use('/|/([a-z]{2})', routerSiteoApp);
}

const PORT = 8080;
const HOST = '0.0.0.0';

server.listen(PORT, HOST);


console.log(`Running with ${process.env.NODE_ENV} mode`);
console.log(`Running on http://${HOST}:${PORT}`);
