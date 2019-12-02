<template>
<div ref="block" :style="widthBlock">

  <ins v-if="configAdsense" class="adsbygoogle"
    v-bind="configAdsense"
  >
  </ins>
  </div>
</template>

<script>



export default {
  props: {
    /*adClient: {
      type: String,
      required: false,
      default: 'ca-pub-3374933954829220'
    },*/
    adSlot: {
      type: String,
      required: false,
      default: ''
    },

    adType: {
      type: String,
      required: false,
      default: 'inarticle' // display, inarticle, infeed, links

    },
    adStyle: {
      type: String,
      required: false,
      default: ''
    }
  },

  data() {
    return {
      widthBlock: {},
      configAdsense: false
      }

  },


  mounted() {
    //console.log(this.$refs.skills.parentNode.parentElement.width);
    //console.log(document.getElementById(this.idGenerated).parentElement.offsetWidth)

    //console.log(this.$refs.block.parentElement);
    //console.log(this.$refs.block.parentElement.offsetWidth);
    //console.log(this.$refs.block.parentElement.clientWidth);
    //console.log(window.getComputedStyle(this.$refs.block.parentElement).width);



      var self=this;
      var  createAd = function () {
          var width = self.$refs.block.parentElement.offsetWidth;
          console.log(width)

          self.widthBlock = {width: (width -20) + 'px', border: '1px solid red' };
        self.configAdsense = {
           'display': {
             'style':"display:block;",
             'data-ad-format':"auto",
             'data-full-width-responsive':"true"
           },
           'inarticle': {
              'style':"display:block; text-align:center;",
              'data-ad-layout':"in-article",
              'data-ad-format':"fluid",
           },
           'infeed': {},
           'links': {},
        }[self.adType];

        var configes = self.$store.getters.getSiteoConfig('siteo-plugin-googleadsense');
        if (configes) {
          self.configAdsense['data-ad-client'] = configes.pub;
          self.configAdsense['data-ad-slot'] = configes.pub['block_'+self.adType];

          self.$root.$options.$script('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js').then(function(){
            (adsbygoogle = window.adsbygoogle || []).push({})
          });

        } else {
            self.configAdsense = false;
        }

      }
    setTimeout(createAd, 10);
    //(window.adsbygoogle = window.adsbygoogle || []).push({})








  }
}
</script>
