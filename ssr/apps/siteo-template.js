const fs = require('fs');
const { createBundleRenderer } = require('vue-server-renderer');
const generateTemplateError = require('../errors/template');
const template = fs.readFileSync('./ssr/template/index.ssr.html', 'utf-8');
const serverBundle = require('../dist/vue-ssr-server-bundle.json')
const renderer = createBundleRenderer(serverBundle, {
  inject:false,
  runInNewContext: false, // рекомендуется
  template, // (опционально) шаблон страницы
  //clientManifest // (опционально) манифест клиентской сборки
})

const httpApi = require('../helper/http-api.js');

module.exports=function (req, res, baseUrl, path) {
  console.log('app:');
  console.log(`req.originalUrl=${req.originalUrl}`);
  console.log(`req.baseUrl=${req.baseUrl}`);
  console.log(`req.hostname=${req.hostname}`);
  console.log(`baseUrl=${baseUrl}`);
  console.log(`path=${path}`);

  var  context = {
    url: path,
    configs_frontend: {
      baseUrl: baseUrl||"/",
      lang: 'en',
    },
  };


  httpApi( '/apps', {siteo_id:req.hostname+baseUrl} ).then(response=>{

    if (!response.data.instance) {
        generateTemplateError(res, 'API_NO_CONTENT_JSON' ,context.configs_frontend );
        return 0;
    }

    context.configs_frontend = {...context.configs_frontend,  ...response.data.configs };
    //context.configs_frontend.lang = response.data.instance.data.lang;
    context.instance = response.data.instance;
    renderer.renderToString(context, (err, html) => {
      if (err) {

          generateTemplateError(res, err ,context.configs_frontend );
        } else {
          res.end(html)
      }
    });

  }).catch(function(error) {
    //console.log(error);
    var err={};

    if (!error.response) {
      err={ssr_error_code: 'AXIOS_ERR_INNER_'+error.code };
    } else {
       err = {ssr_error_code: 'AXIOS_ERR_RESPONSE' , response_data_api: error.response.data};
    }
    generateTemplateError(res, err ,context.configs_frontend );
  });

}
