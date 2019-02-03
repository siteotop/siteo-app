var express = require('express');
var server = express();
const fs = require('fs');

const configsAPI = require('../build/configs');

const { createBundleRenderer } = require('vue-server-renderer');
const defaultInstance = require('./default/instance');
//const pageExample = require('./default/page-example');
const template = fs.readFileSync('./ssr/template/index.ssr.html', 'utf-8');
const templateIndex = fs.readFileSync('./ssr/template/index.ssr.plain.html', 'utf-8');
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const lodashTemplate = require ('lodash/template');
const compiled = lodashTemplate(templateIndex);
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

//const { createBundleRenderer } = require('vue-server-renderer');

server.use(express.static('public'));
//server.use(express.static('dist'));
// server.js
//const createApp = require('./dist/built-server-bundle.js');

server.get('*', (req, res) => {
  console.log(req.url);
  const context = { url: req.url, configsAPI:configsAPI};

  renderer.renderToString(context, (err, html) => {
    if (err) {
      console.log(err.code||err.ssr_error_code);
      var params_template = {
        __SITEO_INSTANCE__: JSON.stringify({'saveInstanse': err.__SITEO_INSTANCE__|| defaultInstance, 'page/updateModel': { contentStructure: [{
            $$:'SectionWrap',
            _props: {
              _t: 'Error_Title',
              _d: 'description sdjhfg jasgfd kjgasjkdfg jasg dfjgkasjgdf kgasdf askdfgka',
              $tc: 'primary',
              $_t: 'white--text display-4',
              $_d: 'ma-2 display-1 white--text',
              $bls: [
                {
                  $$:'AppAction',
                  $bf:'text-xs-center'

                },
              ]
            }
          } ] }}),
        configs: JSON.stringify(configsAPI.frontend),
      };
      const templateError = compiled(params_template);

      if (err.code =='ECONNABORTED') {
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
console.log(`Running on http://${HOST}:${PORT}`);
