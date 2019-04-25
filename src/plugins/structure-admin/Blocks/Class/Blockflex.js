import ExtendField from './ExtendField/extend.vue';

export default {
  extends: ExtendField,
  $type: 'blockflex',


  computed: {
      items() {
        return  ['',...this.$options.$HelperValues.blockflex ];
      }
  }


}
