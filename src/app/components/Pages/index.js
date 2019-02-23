
import Loader from '../../../core/components/_mixins/component-loading.js';
import mixinsAsyncdata from '../_mixins/asyncData';

import { mapState } from 'vuex';
import pages from  '../../store/modules/pages';

export default {
  mixins: [Loader, mixinsAsyncdata],

  props: {
      objectId: {
        type: String,
        default: '',
      }
  },

  data() {
    return  {
      error: false,
      //offsetTop: 0,
      shareWindow: false
    }
  },


  watch: {

      objectId(newValue, OldValue) {
        console.log('change objectId');

      }

  },



  metaInfo () {

   return {
      title: this.meta_title,
      titleTemplate: '%s  - ' + this.$store.state.APP_INSTANCE.data.name,
      meta: [
        {name: 'description', vmid: 'description', content: this.meta_description }
      ],
      link: [
      { rel: 'canonical', href: this.canonical },
      ]

    }
  },

  asyncData({ store, route }) {
      store.registerApiModule( 'page', pages('WEBSITE_API_URL'));
      if (store.state.allowAsyncLoad) {
        return store.dispatch('page/getObject', 'id_for_page');
      }
  },

  computed: {
        meta_title() {
          return this.helperCreateMeta('meta_title', 'title');
        },

        meta_description() {
          return this.helperCreateMeta('meta_description', 'description');
        },

        canonical() {

          return this.$store.getters.CORE_HOST + this.postObject.url;
        },

        ...mapState({
            postObject (state) {
                return state.page? state.page.objectActive: {};
            }
        })



    },

    methods: {
       helperCreateMeta(sourceField, mainField ) {
         if (this.postObject[mainField]) {
           return this.postObject[sourceField]? this.postObject[sourceField]:
           this.postObject[mainField] ;
         } else {
            return '';
         }
       }
    },

    /**

      PLACEHOLDER EXAMPLE
       https://codepen.io/isitannarli/pen/NdVZmL
       https://codepen.io/yunusekim/pen/XaBoNZ
       https://cloudcannon.com/deconstructions/2014/11/15/facebook-content-placeholder-deconstruction.html
       https://github.com/michalsnik/vue-content-placeholders

    */




      render(h ) {

        
        if (this.error) {
            return h('RouteError', {props: {status: err.statusError }});

        }
        if (!this.postObject.contentStructure) {
           return h('div', ['loaded']);//h('div',  'not loaded');
        }

        return h('PageSchema', {
            props: {
              pageToolbar: true,
              speedDeal: true,
              structure: this.postObject.contentStructure,
              sharing: true,
              shareWindow: this.shareWindow,
              buttonUp: true
            }
          })



      },


      renderError (h, err) {
            return h('RouteError', {props: {status: 500 }});
      }



}
