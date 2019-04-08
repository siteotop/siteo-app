import ExtendField from './ExtendField/extend.vue';

export default {
  extends: ExtendField,
  $type: 'texttransform',


  computed: {
      items() {
          return  ['', ...this.$options.$HelperValues.texttransform ];
      }
  }


}
