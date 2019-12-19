<template>
<div ref="block" :style="{width:width, maxHeight: height , border: border}">
  <ins
    v-if="showBlock"
    class="adsbygoogle"
    v-bind="configAdsense"
    >
  </ins>
</div>
</template>

<script>
export default {
  name: 's-adsense',
  props: {

    adType: {
      type: String,
      required: false,
      default: 'content' // display, inarticle, infeed, links

    },

    height: {
      type: String,
      default: undefined
    }

  },

  data() {
    return {
      showBlock: false,
      configAdsense: false,
      width:'100%',
      border: process.env.NODE_ENV === 'development'?'1px solid red':undefined
      }

  },


    mounted() {
  /*
      const adTypes = {

         // In-article
         'page': {
            'style':"display:block; text-align:center",
            'data-ad-layout':"in-article",
            'data-ad-format':"fluid",
         },

         'values1': {
           'style':"display:block;",
           'data-ad-format':"fluid",
         },

         'values1': {
           'style':"display:block;",
           'data-ad-format':"fluid",
         },

      };

  */
      this.loadAdsense();
  },
  watch: {
      adType(newType, oldType) {
          if (!newType&&newType!=oldType) {
            this.showBlock = false;
            setTimeout(this.loadAdsense, 5);
            //this.loadAdsense();
          }

      }
  },
  methods: {
     loadAdsense() {
       var self=this;
       var configes = self.$store.getters.getSiteoConfig('siteo-plugin-googleadsense');
       // checkon/off adsense
       if (!configes||!configes.on) {
         return;
       }
       this.showBlock = true;
       var  createAd = function () {
           //var width = self.$refs.block.parentElement.offsetWidth;
           //console.log(width)

           //self.widthBlock = {width: (width -20) + 'px', border: '1px solid red' };
           self.configAdsense = {};
           self.configAdsense['data-ad-format'] = 'fluid';
           self.configAdsense['style'] = 'display:block;';

           self.configAdsense['data-ad-client'] = configes.pub;
           var isBlock  = configes.bls&&configes.bls[self.adType];
           if ( isBlock) {
             self.configAdsense['data-ad-slot'] = configes.bls[self.adType].slot;
           }

           switch(self.adType) {
               case 'content':
                   self.configAdsense['style'] = 'display:block; text-align:center;';
                 break;

               case 'card':
               case 'list':
                   if ( isBlock) {
                     self.configAdsense['data-ad-layout-key'] = configes.bls[self.adType].key;
                   }
                 break;
             }
             console.log(self.configAdsense);
           self.$root.$options.$script('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js').then(function(){
             (adsbygoogle = window.adsbygoogle || []).push({})
           });
       }
     setTimeout(createAd, 5);
     //(window.adsbygoogle = window.adsbygoogle || []).push({})

     }
  }
}
</script>
