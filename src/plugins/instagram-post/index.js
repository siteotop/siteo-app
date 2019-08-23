

import InstagramPost from './component.vue';
/**
*/
export default {
  name: 'siteo-plugin-instagram-post',
  registerComponent: function (Vue, options) {
    return  {
       component:  InstagramPost
     }
   },

}
