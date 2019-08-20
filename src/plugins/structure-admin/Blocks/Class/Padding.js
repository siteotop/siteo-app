import ExtendField from './ExtendField/extend.vue';

import  _range from 'lodash/range';

export default {
  extends: ExtendField,
  $type: 'p',
  _separator: '-',

  methods: {

      generateClases() {
          return this.multiplyArray( this.$options.$type,  this.$options.$HelperValues.direction, _range(13), this.$options._separator);
      }

  },

  computed: {
      items() {
          return this.generateClases();
      }
  }

}
