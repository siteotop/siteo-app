<template>
  <v-dialog
       ref="dialog"
       v-model="modal"
       :return-value.sync="valueData"
       persistent
       lazy
       full-width
       width="290px"
     >
       <v-text-field
         slot="activator"
         v-bind="$options.propsData"
         :value="currentDateInput"
         v-validate="{required: true}"
         name="date"
         prepend-inner-icon="event"
         readonly
       ></v-text-field>
       <v-date-picker color="primary" :min="currentDate" v-model="valueData" scrollable>
         <v-btn flat color="primary" @click="clear()"><AppIcon name="si-clear"></AppIcon></v-btn>
         <v-spacer></v-spacer>
         <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
         <v-btn flat color="primary" @click="$refs.dialog.save(valueData)">OK</v-btn>
       </v-date-picker>
     </v-dialog>
</template>
<script>
/**
  Component for input date for FormOrder
  - hide, when choose date
  - create filter for sceen date
  - show two buttons for close datepicker and clear
*/
import VModelInput from '../../../_mixins/v-model-input';
import {format, unFormat} from './_helper/date-format';

export default {

  mixins: [VModelInput],

  props: ['hint', 'label', 'solo'],

  data() {
    return {
      modal: false
    }
  },


  methods: {
    /**
      Clear v-text-field and valueData
    */
    clear() {
      this.modal = false;
      this.valueData='';
    }
  },
  computed: {

    /**
      Return current date ISO for  prop "min" in date-picker component
      @return {String} date in ISO format
      @example return  "2018-05-09"
    */
    currentDate() {
      var d = new Date();
      return  format(d, 'YYYY-MM-DD');
    },

    /**
      return format date  for v-text-field
      @return {String}
      @example return  "05/09/2018"
    */
    currentDateInput() {
      if (!this.valueData || this.valueData == '0000-00-00') {
        return '';
      }
      return format(this.valueData, 'DD/MM/YYYY', 'YYYY-MM-DD')
    }
  }

}
</script>
