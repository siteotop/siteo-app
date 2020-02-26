import axios from 'axios';

export const createRESTApi =  function (API_URL) {

  var apiInstance =   axios.create({
      baseURL: API_URL

  });
  return apiInstance;
}
