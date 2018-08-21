


import axios from  'core/http/interceptors.js';
import {API_URL} from 'core/config';
//var params = {};
/*if (_GC.LANG_ACTIVE != _GC.LANG_DEFAULT) {
    params = {lang: _GC.LANG_ACTIVE};
} else {
  params = {}
}
*/
var api = axios.create({
      baseURL: API_URL,
      withCredentials: true,
      //headers: {'common': { 'Authorization':"Bearer sdfsdfsdfsdf23424s" }},
    //  params:params
});







export default api;
