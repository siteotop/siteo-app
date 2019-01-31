
import CorePage from './_extends/page.js';
import { mapState } from 'vuex';
import pages from  '../../store/modules/pages';

export default {

  extends: CorePage,

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

        //console.log('Page ');

        if (this.error) {
          this.catchError();
        }
          //return h(PageError, { props: {status: this.error}  }  )
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



      }






}
