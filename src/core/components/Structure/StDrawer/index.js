
/**
  Left Menu for websites like in app
*/


import helperChildren from '../helperChildren.js';

const SHORT_NAME = 'StDrawer'


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


      var design = context.parent.$store.state.appInstance.objectActive.design[SHORT_NAME] || {};

      console.log(design);
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
           helperChildren(h, design.children)
      ] )

  }
}
