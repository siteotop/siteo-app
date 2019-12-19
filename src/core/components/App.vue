<script>

import  RCt from './Structure/RootContent';
import  RDw from './Structure/RootDrawer.vue';
import  RAb from './Structure/RootAppBar.vue';
import  RFt from './Structure/RootFooter.vue';
import  RAc from './Structure/RootAction';

export default {
    components: {
      RCt,
      RDw,
      RAb,
      RFt,
      RAc

    },
    // _siteo_config: {},
    // _plugins: {},
    data() {
          return {
           mobile: true,
           cookiePolicy: false,
           mounted: false
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
       setTimeout(this.cookieAsk, 30);
       this.mounted = true;
       // this.drawerMounted = true;
     },

     methods:{
        cookieAsk() {
            var re = window.localStorage.getItem('siteo_cookie_policy');
            if (!re) {
               this.cookiePolicy = true;
            }
        },
        cookieStop() {
          this.cookiePolicy = false;
          var re = window.localStorage.setItem('siteo_cookie_policy', true);
        }
     },

     render(h) {

        return h('v-app',

        [
        //this.drawerMounted? 'RDw': '',
          'RDw',
          'RAb',
          'RCt',
          'RFt'
        ].map(function(element){
         return  h('StChildrenHelper', {props: {element:element}});
       })

      );
     }



 };

</script>
