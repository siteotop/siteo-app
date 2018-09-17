
/**
  Left Menu for websites like in app
*/

import * as StructureChildren from './Children';
import helperChildren from '../helperChildren.js';

const SHORT_NAME = 'AppDrawer'


export default {
  //mixins: [ExtendAppStructure],



  functional: true,
  name: SHORT_NAME,
  wrapped: 'VNavigationDrawer',
  children: true,
  /*
  props: {
    active: true,
    startmdAndUp: false,  // якщо більше md (mdAndUp) drawer використовує цю опцію, а так drawer на старті false
    mobileBreakPoint: 1000, //  мобільна точка зупинки
    //'persistent': true,   // наполегливий, стійкий, впертий
    //   'permanent':false, // постійний
    miniVariant: false,
    temporary:false
  },
  */
  props: {
    startmdAndUp: {
      type: Boolean,
      default: false
    }
  },
  //props: _settingsProps,
  render (h, context) {


      var design = context.parent.$store.state.APP_INSTANCE.design[SHORT_NAME] || {};

      if (design.props&& design.props.coreOff===true) {
        return '';
      }

      return h('v-navigation-drawer', {
        props: {
          app: true,
          fixed: true,
        //  value: context.parent.drawer,
          value: context.parent.$store.state.drawer,
          ...design.props,
        },
          class: design.class,
        on: {
          input:(value)=>context.parent.$store.state.drawer = value
        },

      },
      [

          //slots.header? slots.header:
           helperChildren(h, design.children, StructureChildren)
        //  h(AppMenuList, {props: {mainMenu: context.parent.$root.AppDrawerMenu }}),
          //slots.default,


      ] )

  }
}
