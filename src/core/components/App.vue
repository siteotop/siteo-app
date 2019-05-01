<script>

import  SdRoot from './Structure/SdRoot';
import  RDw from './Structure/RootDrawer.vue';
import  SdTlb from './Structure/SdTlb.vue';
import  SdFtr from './Structure/SdFtr.vue';

export default {
    components: {
      SdRoot,
      RDw,
      SdTlb,
      SdFtr,

    },
     _siteo_config: {},
     _plugins: {},

     data() {
          return {
           mobile: true
          }
     },

     mounted() {
       this.mobile = this.$vuetify.breakpoint.xs;
     },

     render(h) {

        return h('v-app',

        [
          'RDw',
          {
            _n:'SdTlb',
            _p:{
                color: 'primary',
                dark: true
              }
          },
          'SdRoot',
          {
            _n:'SdFtr',
            _p: {

            }
          }
        ].map(function(element){
         return  h('StChildrenHelper', {props: {element:element, defDesign:true }});
       })

      );
     }



 };

</script>
