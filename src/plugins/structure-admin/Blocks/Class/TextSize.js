import ExtendField from './ExtendField/extend.vue';

export default {
  extends: ExtendField,
  $type: 'textsize',


  computed: {
      items() {

          return  ['',...this.$options.$HelperValues.topography ]  ;

      }
  }


}
