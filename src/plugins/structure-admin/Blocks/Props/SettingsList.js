
import * as PropsComponents from './Components'

export default {
  functional: true,
  props: {
      objectProps: {
        type: Array,
        default: function () {
          return [];
        }
      },

      showMenu: {
        type: Boolean,
        default: true
      }

  },


  render(h, context ) {
    //var self =context.props.objectProps;
     return context.props.objectProps.map(function(propSettings, indexSettings) {

       if (propSettings.$comp&&PropsComponents[propSettings.$comp]) {
        if (typeof PropsComponents[propSettings.$comp] !='function') {
          throw 'No Function';
        }

        var component = PropsComponents[propSettings.$comp](propSettings);

         return h('v-layout', {class:  ''} ,  [
           h('v-flex', {class: 'xs11'}, [
             h(component.name,
               {
                 props: {
                   ...component.props,
                   label: context.parent.getText(propSettings.n/*_name*/),
                   value: propSettings.value,
                   inputValue: propSettings.value
                 },
                 on: {
                   input: (value)=>{propSettings.value=value},
                   change: (value)=>{propSettings.value=value},
                 }
               })
           ]),
           context.props.showMenu?  h('v-flex', {class: 'xs1'}, [
             h('HelperMenuActions', {props: {indexComponent: indexSettings}})
           ]): ''


         ]);
       }


      })
  }

}
