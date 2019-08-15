import ExtendField from './ExtendField/extend.vue';

export default {
  extends: ExtendField,
  $type: 'text',


  computed: {
      items() {

          var baseAlign = this.multiplyArray('' ,  [this.$options.$type], this.$options.$HelperValues.align, '-');
          return baseAlign.concat (this.multiplyArray( this.$options.$type+'-',  this.$options.$HelperValues.breakpoint, this.$options.$HelperValues.align, '-'));
      }
  }


}
