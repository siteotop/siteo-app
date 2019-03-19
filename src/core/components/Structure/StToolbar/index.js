/**
Top Bar Menu in APP, where is logo, site name, and top menu
*/

import helperChildren from '../_helper/childrenComponents.js';

const SHORT_NAME = 'StToolbar';


export default {
    functional :true,
    name: SHORT_NAME,
    children: true,
    wrapped: 'VToolbar',

    render (h, context) {
        var design = context.parent.$store.state.appInstance.objectActive.design[SHORT_NAME] || {};
        if (design.props&& design.props.coreOff===true) {
          return '';
        }


        return h('v-toolbar', {
            props: {
               app: true,
               color: 'primary',
               dark:true,
               ...design.props
            },
            class: design.class

        },
        [
          helperChildren(h, design.children)

        ]

      );

    }
};
