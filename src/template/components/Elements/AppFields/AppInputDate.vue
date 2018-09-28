<template>
 <AppInputText v-if="!el.picker" :el="el"  :value="el.value" @input="setvalue"> </AppInputText>
  <v-menu v-else
         ref="menu"
         lazy
         :close-on-content-click="false"
         v-model = "pickermenu"

         transition="scale-transition"
         offset-y
         full-width
         :nudge-right="40"
         max-width="290px"
         min-width="290px"
       >

         <AppInputText :el="el"  :value="el.value" @input="setvalue"> </AppInputText>

         <v-date-picker  v-model="calendarValue" :locale="$store.getters.LANG_PORTAL"  scrollable actions>
           <v-spacer></v-spacer>
           <v-btn flat color="primary" @click="pickermenu = false">Cancel</v-btn>
           <v-btn flat color="primary" @click="$refs.menu.save(calendarValue)">OK</v-btn>
         </v-date-picker>
       </v-menu>
</template>


<script>
// https://github.com/text-mask/text-mask

//https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme
//import VueTextMask, {conformToMask}  from  'vue-text-mask';

import AbstractInput from './mixins/input.js';
import AppInputText  from './AppInputText.vue';
import {format, unFormat} from './helper/date-format';


export default {

  mixins: [AbstractInput],

  data () {
    return {
        calendarValue: this.el.value,
        pickermenu: false,

      //inputValue: this.filteredValue

    }


  },
  components: {
    ///VTextField,
  //  VDatePicker: ()=>import('vuetify/es5/components/VDatePicker' ) ,
    //VDatePicker,
    AppInputText


  },

/*
  watch: {

    value(newValue) {
      if (!this.el.state) {
                 this.el.unFilteredValue = unFormat(newValue, this.el.format,  this.el.default_format);
                 console.log(this.el);
           }
      }
  },
*/
  created() {
    this.el.slot = "activator";
    var self = this;

    this.createUnfilteredValue();

  },




  watch: {

      calendarValue(newValue) {
          if (newValue) {
             this.el.value= this.filterValue(newValue);
          }

      },

      pickermenu(newValue) {
          if (!this.el.state && newValue) {
            this.calendarValue = this.unfilterValue( this.el.value, this.el);
          }
      }



  },

  methods: {

    unfilterValue(value, element) {
        if (!value) {
          return '';
        }
        return  unFormat(value, element.format,  element.default_format);
    },

    filterValue(value) {
          if (!value || value == '0000-00-00') {
            return '';
          }
          return   format(value,  this.el.format );
    },

    createUnfilteredValue() {
     //  console.log(this);

      this.el.unFilteredFunc = this.unfilterValue;
      this.el.value = this.filterValue(this.el.value);   //this.filter(element, newValue);
      this.el.defaultValue = this.el.value;
      //this.el.unFilteredValue = this.value;

    },

    setvalue(newValue) {
        //this.el.value = newValue;
        this.el.value = newValue;

      //  console.log(this.el);
    },




  },


}

</script>
