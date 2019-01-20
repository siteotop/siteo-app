<script>

import * as AppStructure from './Structure';

export default {

     renderList: ['AppDrawer', 'AppToolbar', 'AppContent', 'AppFooter'],
     //componentsPage: componentsPage,
     components: {...AppStructure},


     data() {
          return {
           startdrawer: false,
          }
     },



     mounted() {
      /* if (this.$vuetify.breakpoint.width>this.mobileBreakPoint ) {
         if (this.instanceDesign.AppDrawer.props&&this.instanceDesign.AppDrawer.props.startmdAndUp) {
           this.$store.state.drawer = this.instanceDesign.AppDrawer.props.startmdAndUp;
         }
      }*/
     },


     /*watch: {
       '$vuetify.breakpoint': function (value) {
           if (!this.startdrawer) {

              this.startdrawer = true;
           }

       }

     },*/

    computed: {

        /*mobileBreakPoint() {
            if (this.instanceDesign.AppDrawer && this.instanceDesign.AppDrawer.props && this.instanceDesign.AppDrawer.props.mobileBreakPoint) {
                return this.instanceDesign.AppDrawer.props.mobileBreakPoint;
            } else {
              return 1000;
            }

        },*/

        instanceDesign() {
          return this.$store.state.APP_INSTANCE.design;
        },

        AppToolbarMenu() {
            return this.$store.state.APP_INSTANCE.menu;
        },

        AppDrawerMenu() {
          //console.log('start');
          return this.$store.state.APP_INSTANCE.menu;
        }


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
