/**
Top Bar Menu in APP, where is logo, site name, and top menu
*/

import helperChildren from '../_helper/childrenComponents.js';

const SHORT_NAME = 'StToolbar';


export default {
    functional :true,
    name: SHORT_NAME,
    wrapped: 'VToolbar',

    render (h, context) {
      
        var design = context.parent.$store.state.appInstance.objectActive.design[SHORT_NAME] || {};
        if (design._p&& design._p.coreOff===true) {
          return '';
        }

        console.log(design._ch);

        return h('v-toolbar', {
            props: {
               app: true,
               color: 'primary',
               dark:true,
               ...design._p
            },
            class: design._c

        },
        [
          helperChildren(h, design._ch)

        ]

      );

    }
};
