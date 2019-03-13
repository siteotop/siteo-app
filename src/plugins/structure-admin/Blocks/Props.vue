<script>

import SpecialFields from './Props/special.js';
import SelectableProp from './Props/Selectable.vue'


export default {

  //name: 'settings-bloks-props',
  props: {

      componentName: {
        type: String,
        default: '',
        validator(value) {
           return value;
        }
      },
      /**
        list of all props options for  componentName
        @example value = {
            param: value,
            param2: value

      }
      */
      value: {
          type: Object
      }
  },

  computed: {


      generatedProps() {
        var props =

        this.$root.$options._siteoPlugins['design'].generateProps(this.componentName);


        for (var nameProp in  props) {
          if (SpecialFields[this.componentName]&&SpecialFields[this.componentName][nameProp]!==undefined) {
              if (SpecialFields[this.componentName][nameProp]!==false) {
                  props[nameProp]['component'] = SpecialFields[this.componentName][nameProp];
              } else {
                 delete props[nameProp]
              }
            }
        }


        return props;
      }
    },

    methods: {


      getPropsForMenu(h) {
        var self = this;
        return h(SelectableProp, {props: {value: self.value, allProps: this.generatedProps }, on:{
          input: function($event) {
              console.log($event);
              self.$emit('input', $event);

          }
        } });
      },

  },

  render(h) {
     var self = this;
     return h('div', [
       self.getPropsForMenu(h),
      //  h(PropsMenu, {props: {value: this.value, generatedProps: this.generatedProps }})
       ])

  }
}

</script>
