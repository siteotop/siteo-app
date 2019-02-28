

const httpApi = require('../helper/http-api.js');

module.exports = function(req,res){
    res.append('Siteo-api', 'template-proxy');
    httpApi(req.path, req.query ).then(response=>{
      if (!response.data) {
         res.status(500).json({error_code:'NO_RESPONSE_DATA'})
      } else {
          res.status(200).json(response.data);
      }
    }).catch(function(error){
      if (!error.response.data) {
          res.status(500).json({error_code:'Error_NO_RESPONSE_DATA'})
      } else {
          res.status(error.response.data.status).json(error.response.data);
      }
    });
}
