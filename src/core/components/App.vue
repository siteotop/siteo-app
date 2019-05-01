<script>

import  RCt from './Structure/RootContent';
import  RDw from './Structure/RootDrawer.vue';
import  SdTlb from './Structure/SdTlb.vue';
import  RFt from './Structure/RootFooter.vue';

export default {
    components: {
      RCt,
      RDw,
      SdTlb,
      RFt,

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
          'RCt',
          {
            _n:'RFt',
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
