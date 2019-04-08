import ExtendField from './ExtendField/extend.vue';

export default {
  extends: ExtendField,
  $type: 'textwrap',


  computed: {
      items() {
        return  ['',...this.$options.$HelperValues.textwrap ];
      }
  }


}
