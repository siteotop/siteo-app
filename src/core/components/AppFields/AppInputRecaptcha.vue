<template>

  <div>
    <AppPulseLoader :loading="loading" ></AppPulseLoader>
    <div  :id="id"></div>
  </div>

</template>


<script>

import $script from 'scriptjs';
import {recaptcha} from '../../config.js';

//https://developers.google.com/recaptcha/docs/display
//https://developers.google.com/recaptcha/docs/language
export default {
  name: 'google-recaptcha',
  props: {
      status: {
        default: 0,
        type: Number

      }

  },

  data(){
      return {
          id: "recaptcha" + new Date().getTime(),
          response: '',
          recaptcha: null,
          loading: true

      }


  },

  watch: {
      status: function(val, oldVal) {

          if (val !== 0 && val !==oldVal ) {
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

        this.expiredResponse();


      },


      getResponse(response){

          this.response = response;

          this.$emit('changeCaptcha', this.response );
          console.log(this.response);

      },


      expiredResponse(){

          this.response = '';
          this.$emit('changeCaptcha', this.response );
          console.log(this.response);

      },



  },




  mounted(){
        var self = this;
      //  console.log(window.onloadCallback2);

      //  var element = document.getElementById(self.id);
      //  console.log(element);

       var recaptcha_options = {
          'sitekey' : recaptcha.sitekey,
          'callback' : self.getResponse,
          'expired-callback':self.expiredResponse,
          'size': this.size

        };

        if (typeof(window.onloadCallback2)==="undefined") {
          let url = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback2&render=explicit&hl='+self.$store.getters.LANG_PORTAL
          $script([url], 'recaptcha' );

          $script.ready('recaptcha', function() {
            window.onloadCallback2 = function  (){
              self.recaptcha = window.grecaptcha.render(self.id, recaptcha_options );

             }


          });


        } else {
            //  console.log(window.grecaptcha);
            self.recaptcha = window.grecaptcha.render(self.id, recaptcha_options);

        }

  }


}

</script>
