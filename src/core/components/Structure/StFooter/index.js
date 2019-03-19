
//import * as StructureChildren from './Children';
import  AppFooterCopyright  from './Children/AppFooterCopyright.vue';

import helperChildren from '../_helper/childrenComponents.js';
/**
  Footer for website
*/
export default {
    //mixins: [ExtendAppStructure],
    functional: true,
    name: 'StFooter',
  //  children: true,
    wrapped: 'VFooter',

    render(h, context) {
      var design = context.parent.$store.state.appInstance.objectActive.design['StFooter'] || {};

      return  h('v-footer', {
          props: {
            app: true,
            height:'auto',
            absolute:true,
            inset:true,
            dark:true,
            color: 'primary darken-4',
            ...design._p
          },
          class: design._c
        },
        [
          h('v-container', {class: 'fluid my-0 pa-0'},

          [
            design._ch? h('PageSchema', {props: {structure: design._ch }}):'',

            h(AppFooterCopyright)
          ])

        ]
      );

    }

}
