<template>
  <v-card flat>
    <v-toolbar  dense flat class="error--text" ><v-toolbar-title>{{errorTitle}} </v-toolbar-title></v-toolbar>
    <v-alert v-for="(message, index) in LocalMessages" :key="index"
      transition= "scale-transition"
      v-model="message.state"
      :type="message.type"
      
      v-bind="vAlert"
    >
        {{message.text}}
    </v-alert>

    <slot name="footer"></slot>
  </v-card>
</template>
<script>

import {helperValidationError} from './error-helper';
import Loaderi18nHelper from '../../_mixins/loader-i18-chunk.js';

export default {
  mixins: [Loaderi18nHelper],
  props: {

    /**
      error.response.data from axios
    */
    errorResponse: {
       type: [Object, Boolean]
    },

    /**
      props for v-alert
    */
    vAlert: {
       type: Object,
       default: ()=>{return {dismissible:true}}
    }


  },

  helperValidationError: helperValidationError,

  data() {
    return {
      LocalMessages: [],
      valid_all: true
    }
  },

  created() {
      this.filterResponse();

      setTimeout(()=>{this.LocalMessages.map(function(message){message.state = true})}, 20);

  },

  computed: {
    errorTitle() {
        if (this.errorResponse.error_code == 'validatorMessages') {
            return this.$t('commonForm.error.no_valid');
        }
    }

  },

  methods: {
    filterResponse() {
        console.log(this.errorResponse);
        var error_code = this.errorResponse.error_code;
        var error_description = this.errorResponse.error_description;
        if (typeof(error_description) =='string') {
            this.addMessageFromResponse(error_code, error_description);
        } else {
            if (error_code == 'validatorMessages') {
              for (var name_field in error_description) {

                this.$_add(this.$options.helperValidationError(error_description, name_field, this).shift(), 'error');

              }
              //this.addMessageFromResponse('validatorMessages', );
            }

        }
    },

    addMessageFromResponse(keyError,  message) {

      var translation_key = 'errors.'+keyError;
      if (this.$i18n_te(translation_key)) {
         message = this.$i18n_t(translation_key);
      }
      this.$_add( message,  'error' );
    },

    $_add( string_message, type, action) {
       if (typeof(string_message)=='object') {
          string_message.state = false;
          string_message.type = type;
          this.LocalMessages.push(string_message);
       } else {
         this.LocalMessages.push({type:type, text:string_message , state: false, action: action});
       }

    },

  },





}

</script>
