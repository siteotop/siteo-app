import ExtendField from './ExtendField/extend.vue';

import  _range from 'lodash/range';
export default {
  extends: ExtendField,
  $type: 'order',


  computed: {
      items() {

          return this.multiplyArray( 'order-', this.$options.$HelperValues.breakpoint, _range(1, 13), '');

      }
  }

}
