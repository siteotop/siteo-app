
//import * as StructureChildren from './Children';
import  AppFooterCopyright  from './Children/AppFooterCopyright.vue';
import  BottomNav  from './Children/BottomNav.vue';
import helperChildren from '../helperChildren.js';
/**
  Footer for website
*/
export default {
    //mixins: [ExtendAppStructure],
    functional: true,
    name: 'AppFooter',
  //  children: true,
    wrapped: 'VFooter',

    render(h, context) {
      var design = context.parent.$store.state.APP_INSTANCE.design['AppFooter'] || {};

      return  context.parent.$vuetify.breakpoint.xs?
       h(BottomNav, { }):
       h('v-footer', {
          props: {
            app: true,
            height:'auto',
            ...design.props
          },
          class: design.class
        },
        [
          h('v-container', {class: 'fluid my-0 pa-0'},

          [
            h('PageSchema', {props: {structure: design.children }}),
            
            h(AppFooterCopyright)
          ])

        ]
      );

    }

}
