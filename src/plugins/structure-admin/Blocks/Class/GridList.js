import ExtendField from './ExtendField/extend.vue';

export default {
  extends: ExtendField,
  $type: 'gridlist',


  computed: {
      items() {

          return this.multiplyArray( '', ['grid-list'], this.$options.$HelperValues.breakpoint, '-');

      }
  }

}
