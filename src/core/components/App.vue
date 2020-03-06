<script>

import  RCt from './Structure/RootContent';
import  RDw from './Structure/RootDrawer.vue';
import  RAb from './Structure/RootAppBar.vue';
import  RFt from './Structure/RootFooter.vue';
import  RAc from './Structure/RootAction';
import  RLn from './Structure/RootLangs.vue';

export default {
    components: {
      RCt,
      RDw,
      RAb,
      RFt,
      RAc,
      RLn,
      FooterScroll: ()=>import( /* webpackChunkName: "footer-scroll" */ './Elements/FooterScroll.vue')
    },
    // _siteo_config: {},
    // _plugins: {},
    data() {
          return {
           mobile: true,
           
          // mounted: false
           // обив для дравера, але щось сторінка проглючує без нього
           //drawerMounted: false
          }
     },

     metaInfo () {
      return {

         titleTemplate:
           this.$store.getters.getSiteoConfig('seo_title_template') ||
           ('%s  - ' + this.$store.state.appInstance.objectActive.name),
         htmlAttrs: {
           lang: this.$store.getters.getSiteoConfig('lang'),
         },
         meta: [
           {
             name: 'theme-color',
             vmid: 'color',
             content: "#2196F3"
           }

         ]

       }
     },

     mounted() {
       this.mobile = this.$vuetify.breakpoint.xs;
     },

     render(h) {

        return h('v-app',

        [
        //this.drawerMounted? 'RDw': '',
          'RDw',
          'RAb',
          'RCt',
          'RFt',
          'FooterScroll'
        ].map(function(element){
         return  h('StChildrenHelper', {props: {element:element}});
       })

      );
     }



 };

</script>
