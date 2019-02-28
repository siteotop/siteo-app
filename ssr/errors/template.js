
const fs = require('fs');
const templateIndex = fs.readFileSync('./ssr/template/index.ssr.plain.html', 'utf-8');
const lodashTemplate = require ('lodash/template');
const compiled = lodashTemplate(templateIndex);
const pageError = require('./page');
const baseErrors = require('./base');
const defaultInstance = require('./instance');
//get templateError
module.exports = function (res, err, configs) {

  var error_response = baseErrors(err.ssr_error_code);
  if (err.response_data_api) {
     //var api_error = err.response_data_api;
    //  error_response.error_description+= `(status: ${api_error.status}; error_code: ${api_error.error_code}; error_description: ${api_error.error_description} )`;
      error_response.response_data_api = err.response_data_api;
  }

  var params_template = {
    __SITEO_INSTANCE__: JSON.stringify({
        'saveInstanse':err.__SITEO_INSTANCE__|| defaultInstance,
        'page/updateModel': pageError(error_response)
    }),
    __SITEO_CONFIG__: JSON.stringify(configs),
  };

   res.status(error_response.status).end(compiled(params_template));
}
