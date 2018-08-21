import ExtendField from './ExtendField/extend.vue';

export default {
  extends: ExtendField,
  $type: 'hidden',


  computed: {
      items() {

          return this.multiplyArray( this.$options.$type+'-',  this.$options.$HelperValues.breakpoint, this.$options.$HelperValues.condition, '-');

      }
  }


}
