var express = require('express');
var server = express();


const siteoTemplate = require('./apps/siteo-template.js');
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
  server.use(express.static('dist'));
}

// common routing
var siteoRouter = express.Router();
siteoRouter.get('*', function(req,res){
    siteoTemplate(req,res, req.baseUrl, req.path )
});

var apiRouter = express.Router();
apiRouter.get('*', siteoApi);


server.use('/api', apiRouter);

if (process.env.MULTISITEO) {
  // many projects  on one hosts
  server.use('/:siteoId', siteoRouter);

  // if main page
  server.get('/', (req, res) => {
    siteoTemplate(req, res, '', '');
  });

} else {
   // one project on one host
    server.use('/', siteoRouter);
}

const PORT = 8080;
const HOST = '0.0.0.0';

server.listen(PORT, HOST);
console.log(`Running with ${process.env.NODE_ENV} mode`);
console.log(`Running on http://${HOST}:${PORT}`);
