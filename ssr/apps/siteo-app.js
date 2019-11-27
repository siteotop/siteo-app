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

//const {ErrorInstanse} = require('../errors/ErrorInstanse.js');

/**


*/
module.exports=function (req, res, baseUrl, path) {
  /**
    Example for Express: https://siteo-dev.com/pr2019/services/

    req.originalUrl = '/pr2019/services/'
    req.baseUrl = '/pr2019'
    req.hostname= 'siteo-dev.com'
    baseUrl = '/pr2019'
    path = '/services/'
  */
  var  context = {
    url: path,
    configs_frontend: {
      baseUrl: baseUrl||"/",
      lang: 'en',
      lp: true,  // need landing for turn of routes when websites not found
      host: req.hostname
    },
  };


  httpApi( '/apps', {host:req.hostname, path:baseUrl} ).then(response=>{

    if (!response.data.instance) {
        generateTemplateError(res, 'API_NO_CONTENT_JSON' ,context.configs_frontend );
        return 0;
    }

    context.configs_frontend = {...context.configs_frontend,  ...response.data.configs };
    //context.configs_frontend.lang = response.data.instance.data.lang;
    context.instance = response.data.instance;


    if (!context.instance._id) {
        generateTemplateError(
          res,
          {
            status: 404,
            ssr_error_code: 'APP_INSTANCE_NOT_VALID' ,
            response_data_api:   context.instance
          },
          context.configs_frontend );
        return 0;
      }

    renderer.renderToString(context, (err, html) => {
      if (err) {
          generateTemplateError(res, err ,context.configs_frontend );
        } else {

          // We need status code for html page if routing is PageError
          //console.log(context.state);
          if (context.state.srvPageErr) {
                res.status(404).end(html);
          } else {

            res.end(html);
          }

      }
    });

  }).catch(function(error) {

    var err={};
    // catch axios errors
    if (!error.response) {
      err={ssr_error_code: 'AXIOS_ERR_INNER_'+error.code };
    } else {
       // catch response errors (if axios has response)

       err = { ssr_error_code: 'AXIOS_ERR_RESPONSE' , response_data_api: error.response.data};

       //Why 200? private video on youtube response with 200 Ok status.
       //Website can disabled and enabled
       if (["ApiAppsDisabled", "ApiAppsNoTemplateId"].indexOf(error.response.data.error_code) !==-1) {
         err.status = 404;
       } else {
         err.status = error.response.status;
       }

    }
    generateTemplateError(res, err , context.configs_frontend );
  });

}
