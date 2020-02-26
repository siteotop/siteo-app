import ExtendField from './ExtendField/extend.vue';

export default {
  extends: ExtendField,
  $type: 'container',


  computed: {
      items() {
          return  ['',...this.$options.$HelperValues.container ]  ;
      }
  }


}
