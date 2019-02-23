
const fs = require('fs');
const templateIndex = fs.readFileSync('./ssr/template/index.ssr.plain.html', 'utf-8');
const lodashTemplate = require ('lodash/template');
const compiled = lodashTemplate(templateIndex);
const pageError = require('./page');
const baseErrors = require('./base');
const defaultInstance = require('./instance');
//get templateError
module.exports = function (res, err, configs) {

  var error_response = baseErrors(err.code_error);

  var params_template = {
    __SITEO_INSTANCE__: JSON.stringify({
        'saveInstanse':err.__SITEO_INSTANCE__|| defaultInstance,
        'page/updateModel': pageError(error_response)
    }),
    __SITEO_CONFIG__: JSON.stringify(configs),
  };


   res.status(error.status).end(compiled(params_template));
}
