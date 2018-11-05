import BaseProps from '../../Helper/base-props.js';
import SectionListWrap from '../../Helper/SectionListWrap.vue';

export default {
    extends: BaseProps,
    components: {SectionListWrap},

    props: {

      $bl: {  // layout class
        type:String,
        default: 'row wrap fill-height'
      },

      toogleComponent: {
        type: String,
        default: 'cards'
      },

      header: {
        type:Boolean,
        default: false
      },
      pagination: {
        type:Boolean,
        default: false
      },

      query: {
        type: String,
        drfault : ''
      }

    },

      //mixins: [LoaderStoreModule],

      data(){
        return  {
           page: 1,

        }
      },

      computed: {
        componentName () {
          return  'toogle-'+this.toogleComponent;
        },

        flexClass() {
          if (this.toogleComponent == 'list') {
            return '  xs12 ';
          } else {
            return 'd-flex xs12 sm6 ' + 'md4'
          }



        },

        items() {
            console.log(this.$store.state[this.$options.storeName].items.objects);
           return this.$store.state[this.$options.storeName].items.objects;
        }


      }


}
