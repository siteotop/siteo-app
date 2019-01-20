var express = require('express');
var server = express();
const fs = require('fs');

const configsAPI = require('./configs');

const { createBundleRenderer } = require('vue-server-renderer');
const template = fs.readFileSync('./ssr/index.template.html', 'utf-8');
const templateIndex = fs.readFileSync('./ssr/index.html', 'utf-8');
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const lodashTemplate = require ('lodash/template');
const compiled = lodashTemplate(templateIndex);
const renderer = createBundleRenderer(serverBundle, {
  inject:false,
  runInNewContext: false, // рекомендуется
  template, // (опционально) шаблон страницы
  //clientManifest // (опционально) манифест клиентской сборки
})

const scripts = (function(domain){
     var html = '';
     const scripts = [
      'siteo-polyfill.js',
      'siteo-app.js',
      'siteo-locale-en.js',
      'siteo-plugin-page-blocks.js',
      'siteo-core.js'
    ];
    for (let i in scripts) {
      html+='<script  type="text/javascript" src="'+domain+scripts[i]+'"></script>';
    }
    return html;
})( configsAPI.host+'/dist/');



const NODE_ENV = process.env.NODE_ENV || "production";
if (NODE_ENV !='production')  {
   // SSL sertificate not work on local development
    process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
}

//const { createBundleRenderer } = require('vue-server-renderer');

server.use(express.static('static'));
server.use(express.static('dev'));
// server.js
//const createApp = require('./dist/built-server-bundle.js');

server.get('*', (req, res) => {
  const context = { url: req.url, scripts: scripts, configsAPI:configsAPI};

  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.log(err);
      //console.log(JSON.stringify(err));
      const templateError = compiled({
        error: '404',
        __SITEO_INSTANCE__: JSON.stringify(err.__SITEO_INSTANCE__),
        configs:JSON.stringify(configsAPI),
        scripts:scripts
      });
      if (err.code === 404) {
        res.status(404).end(templateError);
      } else {
        res.status(500).end(templateError);
      }
    } else {
      res.end(html)
    }
  })

})


server.listen(8080, function() {

});
