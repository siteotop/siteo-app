<template>
  <div>
    <v-alert v-for="(message, index) in LocalMessages" :key="index"
      transition= "scale-transition"
      v-model="message.state"
      :color="message.type"
      v-bind="vAlert"
    >
        {{message.text}}
    </v-alert>

  </div>
</template>
<script>
export default {

  props: {
    errorResponse: {
       type: Object
    },
    vAlert: {
       type: Object,
       default: ()=>{return {dismissible:true}}
    },
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
        if (typeof(this.errorResponse.error_description) =='string') {
            this.addMessageFromResponse(this.errorResponse.error_code, this.errorResponse.error_description)
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
