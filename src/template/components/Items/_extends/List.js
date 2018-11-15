//import BaseProps from '../../Helper/base-props.js';

/**
  Props SectionWrap 
*/
export default {
  //  extends: BaseProps,

    props: {

      $bl: {  // layout class
        type:String,
        default: 'row wrap fill-height'
      },

      toggleComponent: { // variants ['list', 'cards', 'card' ]
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
      },

      $vl:  { // version list type of list ( list like V-list )
        type: Boolean,
        default:false
      }



    },

      //mixins: [LoaderStoreModule],

      data(){
        return  {
           page: 1,

        }
      },

      computed: {

        flexClass() {
          if (this.toggleComponent == 'list'||this.toggleComponent == 'card') {
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
