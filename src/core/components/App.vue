<script>

import StDrawer from './Structure/StDrawer';
import StToolbar from './Structure/StToolbar';
import StRoot from './Structure/StRoot';
import StFooter from './Structure/StFooter';


export default {

     _siteo_config: {},
     _plugins: {},


     data() {
          return {
           startdrawer: false,
           mobile: true
          }
     },

     mounted() {
       this.mobile = this.$vuetify.breakpoint.xs;
     },

     render(h) {

        var self = this;
        return h('v-app',
          [
            h(StDrawer),
            h(StToolbar),
            h(StRoot),
            h(StFooter)
          ]);
     }



 };

</script>
