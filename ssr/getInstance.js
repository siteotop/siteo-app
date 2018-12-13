

var axios = require('axios');


const get_APP_INSTANCE = (API_URL)=>{

    return axios.get(API_URL+'/websites/152710249031417');
}
