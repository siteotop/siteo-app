<script>

import * as  AppStructure from './Structure';
export default {
    
     renderList: ['AppDrawer', 'AppToolbar',  'AppFooter', 'AppContent'],  //AppStructure,
     components: AppStructure,
     data() {


         return {
           startdrawer: false,
           offsetTop: 0,


         }

     },

     created(){
        //console.log(JSON.stringify(this.$vuetify.breakpoint));
        if (this.$vuetify.breakpoint.width>this.mobileBreakPoint ) {
          if (this.instanceDesign.AppDrawer.props&&this.instanceDesign.AppDrawer.props.startmdAndUp) {
            //console.log(this.instanceDesign.AppDrawer.props.startmdAndUp);
            //console.log(this.instanceDesign.AppDrawer.props);
            this.$store.state.drawer = this.instanceDesign.AppDrawer.props.startmdAndUp;
          }
       }
     },


     /*watch: {
       '$vuetify.breakpoint': function (value) {
           if (!this.startdrawer) {

              this.startdrawer = true;
           }

       }

     },*/

    computed: {

        mobileBreakPoint() {
            if (this.instanceDesign.AppDrawer && this.instanceDesign.AppDrawer.props && this.instanceDesign.AppDrawer.props.mobileBreakPoint) {
                return this.instanceDesign.AppDrawer.props.mobileBreakPoint;
            } else {
              return 1000;
            }

        },

        instanceDesign() {
          return this.$store.state.instance.design;
        },

        AppToolbarMenu() {
            return this.$store.state.instance.menu;
        },

        AppDrawerMenu() {
          //console.log('start');
          return this.$store.state.instance.menu;
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
