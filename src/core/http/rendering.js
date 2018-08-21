

import axios from  './interceptors.js';


export default axios.create({
      baseURL: _DNS.active.path,
      headers: {'X-Requested-With': 'XMLHttpRequest'},
      params: {json:true},
});
