import axios from 'axios';
import {configApps} from '../config';


  // Add a request interceptor
  axios.interceptors.request.use(
  function (config) {
        console.log('я выполняю запрос');
        console.log(config);
      //   nanobar.go(30);  deleted because for loaded content need use diferent loader nanobar only for routing
    //    Vue.$Progress.start();
        return config;
    },
  function (error) {

    // Do something with request error
    //  return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
  function (response) {
      // Do something with response data
      console.log('I am get response ');
      console.log( response);

      //  console.log(response);
      if (response && response.status==200 && typeof (response.data)!=='object') {
          throw  {response:response};
      }
      return response;
  }, function (error) {
    //  console.log(error);
      console.log(error.response);
      //nanobar.go(100);
  // Do something with response error
  //  return error;
     return Promise.reject(error);
  });

var api = axios.create({
      baseURL: configApps.API_URL,

});


export default api;
