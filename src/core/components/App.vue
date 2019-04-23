<script>

import  SdCopy  from './Structure/SdCopy.vue';
import  SdRoot from './Structure/SdRoot';
import  SdDrw from './Structure/SdDrw.vue';
import  SdTlb from './Structure/SdTlb.vue';
import  SdFtr from './Structure/SdFtr.vue';

export default {
    components: {
      SdRoot,
      SdDrw,
      SdTlb,
      SdFtr,
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
                color: 'primary',
                dark: true
              }
          },
          'SdRoot',
          {
            _n:'SdFtr',
            _p: {
              
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
