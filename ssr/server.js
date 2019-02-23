var express = require('express');
var server = express();
const fs = require('fs');

const configsAPI = require('../build/configs');

const { createBundleRenderer } = require('vue-server-renderer');
const generateTemplateError = require('./template-error');
const template = fs.readFileSync('./ssr/template/index.ssr.html', 'utf-8');
const serverBundle = require('./dist/vue-ssr-server-bundle.json')

const renderer = createBundleRenderer(serverBundle, {
  inject:false,
  runInNewContext: false, // рекомендуется
  template, // (опционально) шаблон страницы
  //clientManifest // (опционально) манифест клиентской сборки
})

if (configsAPI.backend.NODE_ENV !='production')  {
   // SSL sertificate not work on local development
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
}


// how turn off x-powered-by
//https://stackoverflow.com/questions/10717685/how-to-remove-x-powered-by-in-expressjs
server.disable('x-powered-by');
server.use(express.static('dist'));

server.get('*', (req, res) => {
  //console.log(r);
  const context = { url: req.url, configsAPI:configsAPI};

  renderer.renderToString(context, (err, html) => {
    if (err) {
      //console.log(err);
      console.log(err.code||err.ssr_error_code);


      const templateError = generateTemplateError( err.__SITEO_INSTANCE__, configsAPI.frontend );

      if (err.code =='ECONNABORTED'|| err.code=='ENOTFOUND') {
        res.status(500).end(templateError);
      }

      if (err.ssr_error_code =='no_data_in_response') {
          res.status(404).end(templateError);
      }
      if (err.ssr_error_code === 404) {
        res.status(404).end(templateError);
      }
      res.status(500).end(templateError);

    } else {
      res.end(html)
    }
  })

})
const PORT = 8080;
const HOST = '0.0.0.0';

server.listen(PORT, HOST);
console.log(`Running with ${configsAPI.backend.NODE_ENV} mode`);
console.log(`Running on http://${HOST}:${PORT}`);
