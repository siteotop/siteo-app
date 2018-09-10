/**
Top Bar Menu in APP, where is logo, site name, and top menu
*/
import * as StructureChildren from './Children';

import helperChildren from '../helperChildren.js';

const SHORT_NAME = 'AppToolbar';


export default {
    functional :true,
    name: SHORT_NAME,
    children: true,
    wrapped: 'VToolbar',

    render (h, context) {
        var design = context.parent.$store.state.appInstance.design[SHORT_NAME] || {};
        if (design.props&& design.props.coreOff===true) {
          return '';
        }


        return h('v-toolbar', {
            props: {
               app: true,
               ...design.props
            },
            class: design.class

        },
        [
          helperChildren(h, design.children, StructureChildren)

        ]

      );

    }
};
