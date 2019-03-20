/**
Top Bar Menu in APP, where is logo, site name, and top menu
*/

import helperCreateStDesign from './_helper/createStDesign.js';

export default {
    functional :true,
    //name: SHORT_NAME,
    //wrapped: 'VToolbar',
    render (h, context) {
       return helperCreateStDesign(
         h,context,
         'StToolbar',
         'v-toolbar',
         {
          app: true,
          color: 'primary',
          dark:true
         }
       );
    }
};
