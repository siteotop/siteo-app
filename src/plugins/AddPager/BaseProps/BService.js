
import BTitle from './BTitle.js';

export default {
   extends: BTitle,

   props: {
     _p: {  // price
       type: String,

     },
     _to: { //  to router_link 
       type: String
     }
   }
}
