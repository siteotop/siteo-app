<template >
  <div v-html="htmlInsta">

  </div>
</template>

<script>

import axios from 'axios';
import $script from 'scriptjs';

export default {
  props: {
    _url: {
      type: String,
      default: ''
    },
    _hc: { // hidecaption
      type: Boolean,
      default: false
    }
  },

  data() {
      return {
        htmlInsta: ''
      }
  },

  created() {
      var self = this;
      if (!this._url) { return;}
      var url ='https://api.instagram.com/oembed?omitscript=true&hidecaption='+this._hc+'&url=' + this._url;
        axios.get(url).then(function(result){
            console.log(result);
            self.htmlInsta=result.data.html;
            $script('//www.instagram.com/embed.js', 'instagram' );
        }).catch(function(error){

          console.log('Instagram error ');
          console.log(error);
      })
  }



}
</script>
