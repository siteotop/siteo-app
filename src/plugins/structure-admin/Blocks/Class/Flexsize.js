import ExtendField from './ExtendField/extend.vue';

import  _range from 'lodash/range';
export default {
  extends: ExtendField,
  $type: 'flexsize',


  computed: {
      items() {

          return this.multiplyArray( '', this.$options.$HelperValues.breakpoint, _range(1, 13) , '');

      }
  }

}
