<template>
  <v-card>
    <v-alert v-for="(message, index) in LocalMessages" :key="index"
      transition= "scale-transition"
      v-model="message.state"
      :color="message.type"
      icon="warning"
      v-bind="vAlert"
    >
        {{message.text}}
    </v-alert>

  </v-card>
</template>
<script>
export default {

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
    },

    /**
      current i18n key for object
    */
    i18nkey: {
      type:String
    }

  },

  data() {
    return {
      LocalMessages: []
    }
  },

  created() {
      this.filterResponse();

      setTimeout(()=>{this.LocalMessages.map(function(message){message.state = true})}, 20);

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
              this.addMessageFromResponse('validatorMessages', this.$t('commonForm.no_valid'));
            }

        }
    },

    addMessageFromResponse(keyError,  message) {

      var translation_key = this.i18nkey+'.errors.'+keyError;
      if (this.$te(translation_key)) {
         message = this.$t(translation_key);
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
