import ExtendField from './ExtendField/extend.vue';


export default {
  extends: ExtendField,
  $type: 'display',


  computed: {

     /**
        elevations-n
     */
      items() {

          //var elements = _range(25);

          return this.multiplyArray('',  [this.$options.$type], this.$options.$HelperValues.display, '-');


      }
  }


}
