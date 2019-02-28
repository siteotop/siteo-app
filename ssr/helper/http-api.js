
 var axios =require('axios');

module.exports=function(api_url, api_query) {
  /*console.log('api:')
  console.log(`req.query=${req.query}`);
  console.log(req.query);
  console.log(`req.originalUrl=${req.originalUrl}`);
  console.log(`req.baseUrl=${req.baseUrl}`);
  console.log(`req.hostname=${req.hostname}`);
  console.log(`req.path=${req.path}`);
  */

  return axios.get( process.env.HOST_API+api_url, {
    timeout:1500,
    params: api_query,
    headers: {'common': { 'Authorization':`Bearer ${process.env.SSR_TOKEN}`}}
  });

  /*  .then(function(response){
      if (!response.data) {
         res.status(500).json({error_code:'NO_RESPONSE_DATA'})
      } else {
          res.status(200).json(response.data);
      }

  })
  .catch(function(error){

        err(error)
      if (!error.response.data) {
          res.status(500).json({error_code:'Error_NO_RESPONSE_DATA'})
      } else {
          res.status(error.response.data.status).json(error.response.data);
      }

  });
*/


}
