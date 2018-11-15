import VueIcon from 'vue-awesome/components/Icon.vue';


export default {

  mixins: [VueIcon],

  functional: true,

  props: {

      scale: {
        default: 1.5
      },

      defColor: {
        type: Boolean,
        default: false
      },

      name: {

        validator(){
          return true;
        }
      }

  },


  render: function (createElement, context) {
      var props = context.props;
      //props.name = getAliasName(props.name);
    //  console.log(context);
      const vueIcon = createElement(VueIcon,  {
        attrs: props,
      //  class: { 'grey--text': context.props.defColor,  'text--darken-1': context.props.defColor },
        directives: context.data.directives
      });


      if (context.data.on)  {
          return  createElement('span', { 'attrs': {'aria-controls': (context.data.on? true: false )},    on: context.data.on},  [ vueIcon] );
      } else {
        return vueIcon;
      }

  },
  // входные параметры опциональны











}
