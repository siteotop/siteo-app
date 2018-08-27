


import axios from  './interceptors.js';
import {configApps} from '../config';
//var params = {};
/*if (_GC.LANG_ACTIVE != _GC.LANG_DEFAULT) {
    params = {lang: _GC.LANG_ACTIVE};
} else {
  params = {}
}
*/
var api = axios.create({
      baseURL: configApps.API_URL,
      withCredentials: true,
      //headers: {'common': { 'Authorization':"Bearer sdfsdfsdfsdf23424s" }},
      //  params:params
});


export default api;
