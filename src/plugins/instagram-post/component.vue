<template >
  <div v-html="htmlInsta"></div>
</template>

<script>


export default {

  props: {
    _url: {
      type: String,
      default: ''
    },

    $hc: { // hidecaption
      type: Boolean,
      default: false
    }
  },

  data() {
      return {
        htmlInsta: ''
      }
  },

  mounted() {
      var self = this;
      if (!this._url) { return;}
      var url ='https://api.instagram.com/oembed?omitscript=true&hidecaption='+this.$hc+'&url=' + this._url;
      var $script = self.$root.$options.$script;
        self.$root.$options.axios.get(url).then(function(result){
            console.log(result);
            self.htmlInsta=result.data.html;
            $script('https://www.instagram.com/embed.js').then(function() {
                window.instgrm.Embeds.process();
            })



        }).catch(function(error){
          self.htmlInsta = '';
          console.log('Instagram error ');
          console.log(error);
      })
  }



}
</script>
