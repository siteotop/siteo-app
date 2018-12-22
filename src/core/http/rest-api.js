import axios from 'axios';

export const createRESTApi =  function (API_URL) {
  // Add a request interceptor

  var apiInstance =   axios.create({
      baseURL: API_URL

  });


  apiInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
  }
  );

  // Add a response interceptor
  apiInstance.interceptors.response.use(
  function (response) {

      if (response && response.status==200 && typeof (response.data)!=='object') {
          throw  {error: 500, error_type: 'no json', response:response};
      }
      return response;
  }, function (error) {

      return Promise.reject(error);
  });

  return apiInstance;



}
