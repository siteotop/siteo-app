
const fs = require('fs');
const templateIndex = fs.readFileSync('./ssr/template/index.ssr.plain.html', 'utf-8');
const lodashTemplate = require ('lodash/template');
const compiled = lodashTemplate(templateIndex);
const pageError = require('./default/page-error');
const defaultInstance = require('./default/instance');
//get templateError
module.exports = function (instance, configs) {

  var params_template = {
    __SITEO_INSTANCE__: JSON.stringify({
      'saveInstanse':instance|| defaultInstance,
      'page/updateModel': pageError('Error_title', 'Error_description')
    }),
    __SITEO_CONFIG__: JSON.stringify(configs),
  };

  return  compiled(params_template);

}
