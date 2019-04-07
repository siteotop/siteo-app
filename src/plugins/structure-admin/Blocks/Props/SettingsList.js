
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
     return context.props.objectProps.map(function(propSettings) {
       if (propSettings.$comp&&PropsComponents[propSettings.$comp]) {
        if (typeof PropsComponents[propSettings.$comp] !='function') {
          throw 'No Function';
        }
        var component = PropsComponents[propSettings.$comp](propSettings);
        
         return h(component.name,
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
         });
       }

      /* if (propSettings._n =='color') {
           return h(BackgroundColor, {props: {value: self.value[nameSettings]}, on: {
             input: function($event) {
                 self.value[nameSettings] = $event;
             }
           }});
       }*/

       /*
       if (typeof(self.value[nameSettings]) == 'boolean') {
         return h('v-switch', {props: {inputValue: self.value[nameSettings], label: nameSettings }, on: {
           change: function ($event) {
             self.value[nameSettings] = $event;
           }
         }})
       }*/

      })
  }

}
