
import * as PropsComponents from './Components'

export default {
  functional: true,
  props: {
      objectProps: {
        type: Array,
        default: function () {
          return [];
        }
      }

  },


  render(h, context ) {
    //var self =context.props.objectProps;
     return context.props.objectProps.map(function(propSettings, indexSettings) {
       console.log(propSettings);
       if (propSettings.$comp&&PropsComponents[propSettings.$comp]) {
        if (typeof PropsComponents[propSettings.$comp] !='function') {
          throw 'No Function';
        }

        console.log(propSettings);
        var component = PropsComponents[propSettings.$comp](propSettings);

         return h('v-layout', {class: 'row'} ,  [
           h('v-flex', {class: 'xs11'}, [
             h(component.name,
               {
                 props: {
                   ...component.props,
                   label: propSettings._n,
                   value: propSettings.value,
                   inputValue: propSettings.value
                 },
                 on: {
                   input: (value)=>{propSettings.value=value},
                   change: (value)=>{propSettings.value=value},
                 }
               })
           ]),
           h('v-flex', {class: 'xs1'}, [
             h('HelperMenuEdit', {props: {indexComponent: indexSettings}})
           ])


         ]);
       }


      })
  }

}
