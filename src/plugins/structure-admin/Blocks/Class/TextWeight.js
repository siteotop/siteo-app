import ExtendField from './ExtendField/extend.vue';

export default {
  extends: ExtendField,
  $type: 'textweight',


  computed: {
      items() {
          return  ['',...this.$options.$HelperValues.fontweight ]  ;
      }
  }


}
