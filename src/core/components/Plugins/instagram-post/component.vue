<template >
<div>
  <div v-show="loaded" v-html="htmlInsta"></div>
  <div v-if="!loaded">
    <v-skeleton-loader
        type="card"
    >
    </v-skeleton-loader>
  </div>
</div>
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
        loaded: false,
        htmlInsta: ''
      }
  },

/*
AXIOS WAS DELETED FROM $root.$options
  mounted() {
      var self = this;
      if (!this.link) {
        self.htmlInsta = 'No Instagram Url';
        return;
      }
      var url ='https://api.instagram.com/oembed?omitscript=true&hidecaption='+!this.openCaption+'&url=' + this.link;

      self.$root.$options.axios.get(url).then(function(result){
            console.log(result);
            self.htmlInsta=result.data.html;
            self.$loadScript('https://www.instagram.com/embed.js').then(function() {
               self.loaded=true;
                window.instgrm.Embeds.process();

            })



        }).catch(function(error){
          self.loaded=true;
          self.htmlInsta = 'Error load';

          console.log('Instagram error ');
          console.log(error);
      })
  }
*/


}
</script>
