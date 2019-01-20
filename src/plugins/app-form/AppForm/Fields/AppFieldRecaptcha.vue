<template>
  <v-card flat color="grey lighten-3" class="pa-4 my-2">

    <AppPulseLoader :loading="loading" ></AppPulseLoader>
    <div :id="id" class="justify-center"></div>
    <v-card-text v-if="error">
      <div class="red--text" v-for="(message, index) in errorMessages" :key="index">
          {{message}}
      </div>
    </v-card-text>
  </v-card>

</template>


<script>

import VModelInput from './_mixins/v-model-input';

//https://developers.google.com/recaptcha/docs/display
//https://developers.google.com/recaptcha/docs/language
export default {

  mixins: [VModelInput],
  props: {
    error: {
      type: Boolean
    },
    errorMessages: {
      type: [Boolean, Array]
    }
  },

  data(){
      return {
          id: "recaptcha" + new Date().getTime(),
          recaptcha: null,
          loading: true,
          token: this.$store.state.recaptcha

      }


  },

  watch: {
      value(newValue, OldValue) {
          console.log('recaptcha value='+newValue);
          if (!newValue) {
              this.resetCaptcha();
          }
      },
      recaptcha: function (val, oldVal) {

      //console.log(val);
        if (val!==null) {
             this.loading = false;
          }
      }




  },

  computed: {

      size() {

        if (this.$vuetify.breakpoint.width <= 320) {
          return 'compact';
        } else {
          return 'normal';
        }

      }


  },


  methods: {
      resetCaptcha() {
        grecaptcha.reset(
          this.recaptcha
        );
      },


      getResponse(response){
          this.valueData = response;
      },


      expiredResponse(){
          this.valueData = '';
      },



  },




  mounted(){
        var self = this;
      //  console.log(window.onloadCallback2);
       if (!this.token) {
          this.loading = false;
          return;
       }


      //  var element = document.getElementById(self.id);
        console.log('captcha loading');

       var recaptcha_options = {
          'sitekey' : self.token,
          'callback' : self.getResponse,
          'expiredcallback':self.expiredResponse,
          'size': this.size

        };

        if (typeof(window.onloadCallback2)==="undefined") {
          let url = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback2&render=explicit&hl='+self.$store.getters.LANG_PORTAL
          this.$root.$options.$script(url).then(function() {
            window.onloadCallback2 = function  (){
              self.recaptcha = window.grecaptcha.render(self.id, recaptcha_options );

             }
          }).catch((error)=>{
            this.loading = false;
            console.log(error);
          });


        } else {
            //  console.log(window.grecaptcha);
            self.recaptcha = window.grecaptcha.render(self.id, recaptcha_options);

        }

  }


}

</script>
