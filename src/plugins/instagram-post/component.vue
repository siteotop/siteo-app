<template >
  <div v-html="htmlInsta"></div>
</template>

<script>


export default {

  props: {
    link: {
      type: String,
      default: ''
    },

    openCaption: { // hidecaption
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
      if (!this.link) {
        self.htmlInsta = 'No Instagram Url';
        return;
      }
      var url ='https://api.instagram.com/oembed?omitscript=true&hidecaption='+!this.openCaption+'&url=' + this.link;
      var $script = self.$root.$options.$script;
        self.$root.$options.axios.get(url).then(function(result){
            console.log(result);
            self.htmlInsta=result.data.html;
            $script('https://www.instagram.com/embed.js').then(function() {
                window.instgrm.Embeds.process();
            })



        }).catch(function(error){
          self.htmlInsta = 'Error load';
          console.log('Instagram error ');
          console.log(error);
      })
  }



}
</script>
