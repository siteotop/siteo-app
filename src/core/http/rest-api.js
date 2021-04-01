import axios from 'axios';
import {checkObjectResponse} from './error-handling.js';

export const createRESTApi =  function (API_URL, dispatch) {

  var apiInstance =   axios.create({
      baseURL: API_URL

  });

  apiInstance.interceptors.response.use(
    function (response) {
       if (response.status==200) {
           checkObjectResponse(response, dispatch)
       }
       return response;
    },

    function (error) {
      if (checkObjectResponse(error.response, dispatch)) {
        // common error
        if (error.response.data.error_code=='validatorMessages') {

        } else {
           dispatch('generateSystemMessage', {text: `Error ${error.response.data.status
    }: ${error.response.data.error_description}` , type: 'error'});
        }
         return Promise.reject(error);
      }

  });

  return apiInstance;
}
