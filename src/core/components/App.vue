<script>

import SdDrw from './Structure/SdDrw.vue';
import SdTlb from './Structure/SdTlb.vue';
import SdRoot from './Structure/SdRoot';
import SdFtr from './Structure/SdFtr.vue';
import SdTtl from './Structure/SdTtl';
import SdTgl from './Structure/SdTgl';
import SdCopy  from './Structure/SdCopy.vue';
import SdLgo  from './Structure/SdLgo.vue';
import SdMnv from './Structure/SdMnv.vue';
import SdMnh from './Structure/SdMnh';

export default {

     _siteo_config: {},
     _plugins: {},

     components: {
       SdDrw,
       SdTlb,
       SdRoot,
       SdFtr,
       SdTtl,
       SdTgl,
       SdCopy,
       SdLgo,
       SdMnv,
       SdMnh
     },

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
