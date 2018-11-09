import BaseProps from '../../Helper/base-props.js';

export default {
    extends: BaseProps,

    props: {

      $bl: {  // layout class
        type:String,
        default: 'row wrap fill-height'
      },

      toogleComponent: { // variants ['list', 'cards', 'card' ]
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
          if (this.toogleComponent == 'list'||this.toogleComponent == 'card') {
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
