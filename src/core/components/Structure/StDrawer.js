
/**
  Left Menu for websites like in app
*/


import helperCreateStDesign from './_helper/createStDesign.js';

export default {

  functional: true,

  render (h, context) {
      return helperCreateStDesign(h, context,
          'StDrawer',
          'v-navigation-drawer',
          {
            app: true,
            fixed: true,
            value: context.parent.$store.state.drawer,
          },
          {
            input:(value)=>context.parent.$store.state.drawer = value
          }

      );

  }
}
