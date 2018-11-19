<template >
  <div v-html="htmlInsta"></div>
</template>

<script>
import PropsBInstagram from '../../../plugins/AddPager/BaseProps/BInstagram';
export default {
  extends: PropsBInstagram,

  data() {
      return {
        htmlInsta: ''
      }
  },

  created() {
      var self = this;
      if (!this._url) { return;}
      var url ='https://api.instagram.com/oembed?omitscript=true&hidecaption='+this.$hc+'&url=' + this._url;
      var $script = self.$root.$options.$script;
        self.$root.$options.axios.get(url).then(function(result){
            console.log(result);
            self.htmlInsta=result.data.html;
            $script('https://www.instagram.com/embed.js', 'instagram' );
            $script.ready('instagram', function() {
              self.$nextTick(function () {
                window.instgrm.Embeds.process();
              })
                //setTimeout(function(){ window.instgrm.Embeds.process();}, 200);
            });



        }).catch(function(error){
          self.htmlInsta = '';
          console.log('Instagram error ');
          console.log(error);
      })
  }



}
</script>
