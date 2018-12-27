/*
    catch error after getStructure request and  sendRequest
    error_response  must be a object and it has two parametrs
    {status : 45, data: {}   }  data is structure from server
 */

export const checkObjectResponse = function (response, store){
    if (!response||!response.data||typeof(error.response.data)!='object') {
      console.log(response);
      var error='API Error: Response content is null or non Object'
      store.dispatch('generateSystemMessage', {text:  error, type: 'error'});
      throw { response :{ error_code: '500' , error_description:  error}};
      return false;
    } else {
      return true;
    }
};


const generateSystemMessageRespone = function (error){



   switch (error.response.status)  {

      case 400:
            if (error.response.data.error_code == 'validatorMessages') {
                throw  {validatorMessages: true, messages: error.response.data.error_description};
            } else {
                throw  error.response.data;
            }

            break;

      case 406:
            //dispatch('account/logOut');
            break;
      case 423:
        if (error.response.data.redirect) {
           //this.$router.push({name:error_response.data.name});
           break;
      }
      case 404:
      case 503:
       console.log(error.response);
        if (!error.response.headers) {
           alert('503 or 404')

           return false;
        }
        break;

      default:
        dispatch('generateSystemMessage', {text: error.response.data.error_description, type: 'error'});
      break;
  }

  console.log(error);
  throw error;
};
