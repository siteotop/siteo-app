<template >
<div :class="classText||'siteo-html'" v-html="cntnt.t">
</div>
</template>
<script>
import Vue from 'vue';
import PAdsense from './PAdsense/Index.vue';
export default {
  props: {
    cntnt: {
      type: Object,
      default: ()=>{{}}
    },
    classText: {
      type:String
    },
    cnf: {
      type: Object,
      default: ()=>{{}}
    }

  },

  // на SSR сервері це не потрібно тому ми робимо це в mounted
  mounted() {
    // if nourl isset
    if (!this.cnf.u) {
      this.changeLink();
    }

    let countAds = 1;
    if (this.cnf.n!=undefined) {
      countAds = parseInt(this.cnf.n);
    }
    //let countAds = 6;
    if (countAds) {
      this.insAds2();
    }
  },

  methods: {
     changeLink() {
       const container = this.$el.querySelectorAll('a');
       // https://ru.stackoverflow.com/questions/649396/%D0%A1%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B5-onclick-%D0%B4%D0%BB%D1%8F-%D0%B2%D1%81%D0%B5%D1%85-%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2-%D0%BF%D0%BE-%D0%B8%D0%BC%D0%B5%D0%BD%D0%B8-%D1%82%D0%B5%D0%B3%D0%B0-%D0%B8%D0%BB%D0%B8-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%B0
       var self = this;
       for (var i = 0; i < container.length; i++) {

         container[i].onclick = function(e){
           e.preventDefault();
           //href в даному випадку має завжди повний url
           const url = this.href;
           const host = self.$store.getters['CORE_HOST'];
           const position = url.indexOf(host, 0);

           if (position ==-1) {
               // if URL isn't path for app

               window.location = url;
               //  window.open('', '_blank');
           } else {
               // check for app path;

               let path = url.slice(host.length);

               let attrib = this.getAttribute('href');
               if (attrib[0]=='#') {
                     console.log('delay')
                     self.$vuetify.goTo(attrib, {offset: 50, duration: 40});
                   return;
               }

               if (!path) {
                 path = '/';
               }
               self.$router.push({path:path});
           }
         };
       }
     },

     /**
      insert adsense
     */
     insAds2() {
       var ComponentClass = Vue.extend(PAdsense);
        var instance = new ComponentClass({
          propsData: {
            configs:this.$store.getters.getSiteoConfig('SiteoPluginGadsense')
          }
        });
        instance.$mount(); // pass nothing
        const paragraph = this.$el.querySelectorAll('p');
        //this.$refs.container.appendChild(instance.$el)
        paragraph[0].appendChild(instance.$el);
     },
  }
}
</script>

<style>
  .siteo-cnt-menu {
    list-style-position: inside;
    list-style-type: decimal-leading-zero ;
  }
  .siteo-cnt-menu .ql-indent-1 {
    list-style-type: decimal-leading-zero ;
    padding-left: 3em;
  }

  .siteo-html p {
    font-size: 20px;
    line-height: 1.55;
  }

  .siteo-html h2, .siteo-html h3, .siteo-html h4, .siteo-html h5 {
    margin-top: 1.72em;
    margin-bottom: 1.30em;
  }
  .siteo-html h2{
      font-size: 26px;
  }
  .siteo-html h3{
      font-size: 25px;
  }
  .siteo-html h4{
      font-size: 24px;
  }

  .siteo-html img {
    max-width:100% !important;
  }

</style>
