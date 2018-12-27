import axios from 'axios';

export const createRESTApi =  function (API_URL) {
  // Add a request interceptor

  var apiInstance =   axios.create({
      baseURL: API_URL

  });

/*
  apiInstance.interceptors.request.use(
  function (config) {
    return config;
    },
    function (error) {
    }
  );
*/
  // Add a response interceptor


  return apiInstance;


}
