import ExtendField from './ExtendField/extend.vue';

import  _range from 'lodash/range';
export default {
  extends: ExtendField,
  $type: 'offset',


  computed: {
      items() {

          return this.multiplyArray( 'offset-', this.$options.$HelperValues.breakpoint, _range(1, 13), '');

      }
  }

}
