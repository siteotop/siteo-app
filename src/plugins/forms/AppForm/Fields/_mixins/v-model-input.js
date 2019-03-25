

export default {

  props: ['value'],


  data() {
      return {
        valueData: this.value,
      }
  },


  watch: {
      value(newValue){
         if (this.valueData!=newValue) {
           this.valueData = newValue;
         }
      },
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
