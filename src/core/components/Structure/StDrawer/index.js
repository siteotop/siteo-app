
/**
  Left Menu for websites like in app
*/


import helperChildren from '../_helper/childrenComponents.js';

const SHORT_NAME = 'StDrawer'

export default {

  functional: true,
  name: SHORT_NAME,
  wrapped: 'VNavigationDrawer',

  render (h, context) {


      var design = context.parent.$store.state.appInstance.objectActive.design[SHORT_NAME] || {};

    //  console.log(design);
      if (design._p&& design._p.coreOff===true) {
        return '';
      }

      return h('v-navigation-drawer', {
        props: {
          app: true,
          fixed: true,
        //  value: context.parent.drawer,
          value: context.parent.$store.state.drawer,
          ...design._p,
        },
          class: design._c,
        on: {
          input:(value)=>context.parent.$store.state.drawer = value
        },

      },
      [
           helperChildren(h, design._ch)
      ] )

  }
}
