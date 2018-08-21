import ExtendField from './ExtendField/extend.vue';

import  _range from 'lodash/range';
export default {
  extends: ExtendField,
  $type: 'elevation',


  computed: {

     /**
        elevations-n
     */
      items() {

          //var elements = _range(25);

          return this.multiplyArray('',  [this.$options.$type], _range(25), '-');


      }
  }


}
