

const httpApi = require('../helper/http-api.js');
const errorResponse = require ('../errors/response');

module.exports = function(req,res){
    res.append('Siteo-api', 'template-proxy');
    httpApi(req.path, req.query ).then(response=>{
      if (!response.data) {
          var error_response =errorResponse('API_NO_CONTENT_JSON');
         res.status(error_response.status).json( error_response);
      } else {
          res.status(200).json(response.data);
      }
    }).catch(function(error){
      if (!error.response.data) {
          var error_response = errorResponse('AXIOS_ERR_INNER_'+error.code);
          res.status(error_response.status).json( error_response);
      } else {
          res.status(error.response.data.status).json(error.response.data);
      }
    });
}
