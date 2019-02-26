var express = require('express');
var server = express();
const fs = require('fs');


const { createBundleRenderer } = require('vue-server-renderer');
const generateTemplateError = require('./errors/template');
const template = fs.readFileSync('./ssr/template/index.ssr.html', 'utf-8');
const serverBundle = require('./dist/vue-ssr-server-bundle.json')

const renderer = createBundleRenderer(serverBundle, {
  inject:false,
  runInNewContext: false, // рекомендуется
  template, // (опционально) шаблон страницы
  //clientManifest // (опционально) манифест клиентской сборки
})

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


const commonResolve = function (req, res, baseUrl, path) {
  console.log(`req.originalUrl=${req.originalUrl}`);
  console.log(`req.baseUrl=${req.baseUrl}`);
  console.log(`req.hostname=${req.hostname}`);
  console.log(`baseUrl=${baseUrl}`);
  console.log(`path=${path}`);

  var siteo_id = req.hostname+baseUrl;

  const context = {
    url: path,
    configs_frontend: {
      baseUrl: baseUrl||"/",
      lang: 'en',
    },
    siteo_id:siteo_id,
    server_token: process.env.SSR_TOKEN
  };

  renderer.renderToString(context, (err, html) => {
    if (err) {
        const templateError = generateTemplateError(res, err ,context.configs_frontend );
      } else {
        res.end(html)
    }
  })
}


var siteo = express.Router();
siteo.get('*', function(req,res){
    commonResolve(req,res, req.baseUrl, req.path )
});

if (process.env.MULTISITEO) {
  // many projects  on one hosts
  server.use('/:siteoId', siteo);
  server.get('/', (req, res) => {
    commonResolve(req, res, '', '');
  });

} else {
   // one project on one host
    server.use('/', siteo);
}

const PORT = 8080;
const HOST = '0.0.0.0';

server.listen(PORT, HOST);
console.log(`Running with ${process.env.NODE_ENV} mode`);
console.log(`Running on http://${HOST}:${PORT}`);
