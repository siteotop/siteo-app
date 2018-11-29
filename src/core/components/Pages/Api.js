
import CorePage from './_extends/page.js';
export default {
  storeName: 'APP_PAGE',
  extends: CorePage,

  computed: {
        meta_title() {
            return this.$store.state.APP_PAGE.objectActive.meta_title? this.$store.state.APP_PAGE.objectActive.meta_title:
            this.$store.state.APP_PAGE.objectActive.title ;
        },

        meta_description() {
            return this.$store.state.APP_PAGE.objectActive.meta_description?
            this.$store.state.APP_PAGE.objectActive.meta_description:  this.$store.state.APP_PAGE.objectActive.description;
        },

        canonical() {
          return this.$store.getters.CORE_HOST + this.$store.state.APP_PAGE.objectActive.url;
        }



    },


    methods: {
      preFetch() {
        var post_id;
        if (!this.objectId) {
          post_id = this.$store.state.APP_INSTANCE.data.pages_id;
        } else {
          post_id = this.objectId;
        }
        //console.log(post_id);
        //console.log(_PRERENDER._id);

        if ( _PRERENDER._id == post_id) {
            this.$store.commit('APP_PAGE/setApiId',_PRERENDER._id);
            //this.$store.commit('APP_PAGE/updateModel', _PRERENDER);
            this.$store.commit('APP_PAGE/updateModel', _PRERENDER);
            return true;
        } else {
          return false;
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


        return h('PageSchema', {
            props: {
              pageToolbar: true,
              speedDeal: true,
              structure: this.$store.state.APP_PAGE.objectActive.contentStructure,
              sharing: true,
              shareWindow: this.shareWindow,
              buttonUp: true
            }

          })



      }






}
