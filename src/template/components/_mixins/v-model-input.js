

export default {

  props: {

     /**
        v-model (value)
     */
     value: {
        type: String,
        default: '',
     }
  },


  data() {
      return {
        valueData: this.value,
      }
  },


  watch: {
      valueData(newValue) {
          this.inputValue(newValue);
      }

  },

  methods: {
      /**
        emit input new value (v-model input)
      */
      inputValue(sendData) {
          this.$emit('input', sendData);
      }

  }

}
