import ExtendField from './ExtendField/extend.vue';

export default {
  extends: ExtendField,
  $type: 'blockwrap',


  computed: {
      items() {
        return  ['',...this.$options.$HelperValues.blockwrap ];
      }
  }


}
