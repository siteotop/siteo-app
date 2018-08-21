<script>

import BackgroundColor from '../Class/Background.vue'

export default {
  functional: true,
  props: {
      value: {
        type: Object
      },
      generatedProps: {
        type: Object
      }
  },




  render(h, context ) {
    var self =context.props;
     return Object.keys(self.value).map(function(nameSettings) {
       if (self.generatedProps[nameSettings]['component']) {

         var specailComponent = self.generatedProps[nameSettings]['component'];
         //self.value[nameSettings] = pecailComponent.default;
         return h(specailComponent.name, {
           props:{
             value: self.value[nameSettings],
             label: nameSettings,
             ...specailComponent.props},
           on: {
             change: function ($event) {
               self.value[nameSettings] = $event;
             },

           }
         })
       }
       if (nameSettings =='color') {
           return h(BackgroundColor, {props: {value: self.value[nameSettings]}, on: {
             input: function($event) {
                 self.value[nameSettings] = $event;
             }
           }});
       }

       if (typeof(self.value[nameSettings]) == 'boolean') {
         return h('v-switch', {props: {inputValue: self.value[nameSettings], label: nameSettings }, on: {
           change: function ($event) {
             self.value[nameSettings] = $event;
           }
         }})
       }
       return h('span', [nameSettings]);
      })
  }
}

</script>
