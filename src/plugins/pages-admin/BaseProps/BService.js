
import BTitle from './BTitle.js';

export default {
   extends: BTitle,

   props: {
     _p: {  // price
       type: String,

     },
     _di: { // discount
        type: [Number, String, Boolean]
     },
     _to: { //  to router_link
       type: String
     }
   }
}
