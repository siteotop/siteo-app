
//import * as StructureChildren from './Children';
import  AppFooterCopyright  from './Children/AppFooterCopyright.vue';

import helperChildren from '../helperChildren.js';
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
            color: 'secondary',
            ...design.props
          },
          class: design.class
        },
        [
          h('v-container', {class: 'fluid my-0 pa-0'},

          [
            design.children? h('PageSchema', {props: {structure: design.children }}):'',

            h(AppFooterCopyright)
          ])

        ]
      );

    }

}
