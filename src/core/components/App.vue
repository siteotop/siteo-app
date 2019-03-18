<script>

import * as Structure from './Structure';

export default {

     renderList: ['StDrawer', 'StToolbar', 'StContent', 'StFooter'],
     //componentsPage: componentsPage,
     components: {...Structure},

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
            self.$options.renderList.map(function(section) {
               return h(section);
            }),


          ]);
     }



 };

</script>
