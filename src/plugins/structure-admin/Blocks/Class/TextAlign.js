import ExtendField from './ExtendField/extend.vue';

export default {
  extends: ExtendField,
  $type: 'text',
  $Helpername: 'align',

  computed: {
      items() {
          var baseHelper = this.$options.$HelperValues[this.$options.$Helpername];
          var baseAlign = this.multiplyArray('' ,  [this.$options.$type], baseHelper, '-');
          return baseAlign.concat (this.multiplyArray( this.$options.$type+'-',  this.$options.$HelperValues.breakpoint, baseHelper, '-'));
      }
  }


}
