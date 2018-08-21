
/**
  Left Menu for websites like in app
*/
//import {ExtendAppStructure, createSettings} from './extends';

export default {
  //extends: ExtendAppStructure,

  functional :true,
  name: 'AppContent',

  //props: _settingsProps,
  render (h, context) {
    return h('v-content', [
       //h('transition', {props: {name:''}}, [
         h('router-view', {
              directives: [
                  {name: 'show', value: !context.parent.$store.state.pageLoader}
              ]
          })
       //])
       ,

       context.parent.$store.state.pageLoader?  h('v-container', {attrs: {fluid: '', 'fill-height': ''}}, [
          h('v-layout', {attrs: {'align-center':'', 'justify-center':''}},  [
              h('v-flex', [
                      h('AppPulseLoader', {props: {loading: context.parent.$store.state.pageLoader, size: '40px'}})
              ])

          ])

       ] ): '',

       /**
         BLOCK  Messages
       */
        h('AppMessagesBlock', {props: {messages: context.parent.$store.state.SystemMessages.messages }}),

        /**
          BLOCK PROGRESS BAR
        */
        h('vue-progress-bar')

    ]);

  }
}
