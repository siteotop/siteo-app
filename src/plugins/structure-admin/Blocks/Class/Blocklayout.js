import ExtendField from './ExtendField/extend.vue';

export default {
  extends: ExtendField,
  $type: 'blocklayout',


  computed: {
      items() {
        return  ['',...this.$options.$HelperValues.blocklayout ];
      }
  }


}
