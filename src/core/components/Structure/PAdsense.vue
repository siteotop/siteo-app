<template>
<div ref="block" :style="widthBlock">

  <ins v-if="this.configAdsense" class="adsbygoogle"
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
      configAdsense: {}
      }

  },


  mounted() {
    //console.log(this.$refs.skills.parentNode.parentElement.width);
    //console.log(document.getElementById(this.idGenerated).parentElement.offsetWidth)
    var width = this.$refs.block.parentElement.offsetWidth;
    console.log(width)

    this.widthBlock = {width: (width -20) + 'px' };
    //(window.adsbygoogle = window.adsbygoogle || []).push({})
    this.configAdsense = {
       'display': {
         'style':"display:block;",
         'data-ad-client':"ca-pub-3374933954829220",
         'data-ad-slot':"8663939025",
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
    }[this.adType];

    var configes = this.$store.getters.getSiteoConfig('siteo-plugin-googleadsense');
    if (configes) {
      this.configAdsense['data-ad-client'] = configes.pub;
      this.configAdsense['data-ad-slot'] = configes.pub['block_'+this.adType];

    } else {
        this.configAdsense = false;
    }



    this.$root.$options.$script('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js').then(function(){
      (adsbygoogle = window.adsbygoogle || []).push({})
    });






  }
}
</script>

<
