<script>

import * as AppStructure from './Structure';

export default {

     renderList: ['AppDrawer', 'AppToolbar', 'AppContent', 'AppFooter'],
     //componentsPage: componentsPage,
     components: {...AppStructure},


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
