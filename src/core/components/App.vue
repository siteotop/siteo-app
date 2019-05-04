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
          'RAb',
          'RCt',
          'RFt'
        ].map(function(element){
         return  h('StChildrenHelper', {props: {element:element, defDesign:true }});
       })

      );
     }



 };

</script>
