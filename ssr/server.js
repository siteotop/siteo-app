var express = require('express');
var server = express();
const fs = require('fs');

const configsAPI = require('../build/configs');

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
        const templateError = generateTemplateError(res, err , configsAPI.frontend );
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
