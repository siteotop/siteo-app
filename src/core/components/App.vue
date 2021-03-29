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
      RAc,
      
    },

    appStr: [
      'RDw',
      'RAb',
      'RCt',
      'RFt',

    ],
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
      var path = this.$store.getters['PATH_ICON'];
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

         ],
         link: [
           {
             rel:"icon",
             type: "image/x-icon",
             href: path+"favicon.ico"
           },
           {
             rel:"apple-touch-icon",
             sizes:"180x180",
             href: path+"apple-touch-icon.png"
           },
           {
             rel:"icon",
             sizes:"32x32",
             type: "image/png",
             href: path+"favicon-32x32.png"
           },
           {
             rel:"icon",
             sizes:"16x16",
             type: "image/png",
             href: path+"favicon-16x16.png"
           },
          /* {
             rel:"manifest",
             href: path+"site.webmanifest"
           },*/
           {
             rel:"mask-icon",
             href: path+"safari-pinned-tab.svg",
             color:"#cc0000"
           }
         ],
         style: [
            {
              cssText: this.$vuetify.theme.generatedStyles,
              type: 'text/css',

              id:"vuetify-theme-stylesheet"
            }
         ]

       }
     },

     mounted() {
       this.mobile = this.$vuetify.breakpoint.xs;
     },

     render(h) {
        return h('v-app',
          h('StChildrenHelper', {
            props: {
              element:this.$options.appStr,
              list:true
          }})

      );
     }



 };

</script>
