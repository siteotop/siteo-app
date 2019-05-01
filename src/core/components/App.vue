<script>

import  RCt from './Structure/RootContent';
import  RDw from './Structure/RootDrawer.vue';
import  RTb from './Structure/RootToolbar.vue';
import  RFt from './Structure/RootFooter.vue';

export default {
    components: {
      RCt,
      RDw,
      RTb,
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
          'RTb',
          'RCt',
          'RFt'
        ].map(function(element){
         return  h('StChildrenHelper', {props: {element:element, defDesign:true }});
       })

      );
     }



 };

</script>
