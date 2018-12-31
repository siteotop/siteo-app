/*
    catch error after getStructure request and  sendRequest
    error_response  must be a object and it has two parametrs
    {status : 45, data: {}   }  data is structure from server
 */

export const checkObjectResponse = function (response, store){
    console.log(typeof(response.data));
    if (!response||!response.data||(typeof(response.data)!='object')) {

      var error='API Error: Response content is null or non Object'
      store.dispatch('generateSystemMessage', {text:  error, type: 'error'});
      throw {
        response: {
          data: {
            error_code: '500' ,
            error_description:  error
          }
      }
    };

    } else {
      return true;
    }
};
