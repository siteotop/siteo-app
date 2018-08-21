import ExtendField from './ExtendField/extend.vue';

import  _range from 'lodash/range';

export default {
  extends: ExtendField,
  $type: 'm',


  computed: {
      items() {

          return this.multiplyArray( this.$options.$type,  this.$options.$HelperValues.direction, _range(6), '-');

      }
  }


}
