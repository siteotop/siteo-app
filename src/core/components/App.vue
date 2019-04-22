<script>

import  SdCopy  from './Structure/SdCopy.vue';

export default {
    components: {
      SdCopy
    },
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

        return h('v-app',

        [
          'SdDrw',
          {
            _n:'SdTlb',
            _p:{
                app:true,
                color: 'primary',
                dark: true
              }
          },
          'SdRoot',
          {
            _n:'SdFtr',
            _p: {
              app: true,
              height:'auto',
              absolute:true,
              inset:true,
              dark:true,
              color: 'primary darken-4',
            }
          }
        ].map(function(element){
         return  h('StChildrenHelper', {props: {element:element, defDesign:true }});
       })

      );
     }



 };

</script>
