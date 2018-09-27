
import Loader from '../../../core/components/mixins/component-loading.js';
import PageError from '../Pages/Error.vue';
export default {
    mixins: [ Loader],

    data() {
        return  {
          error: false
        }
    },

    props: {
        postId: {
          type: String,
          default: '',
        },

        idString:{
          type: String,
          default: '',
        },

    },


    metaInfo () {

     return {
        title: this.meta_title,
        titleTemplate: '%s  - ' + this.$store.state.APP_INSTANCE.data.name,
        meta: [
          {name: 'description', vmid: 'description', content: this.meta_description }
        ]

      }
    },

    created() {
        this.getPageFromServer();
    },

    watch: {

        postId(newValue, OldValue) {
          console.log('change postId');
          this.onLeave();
          this.getPageFromServer();
        }

    },

    /*beforeRouteEnter (to, from, next) {

      next(vm=>{
          console.log('created');
          vm.onLeave();
          vm.getPageFromServer();
      })
    },


    beforeRouteUpdate (to, from, next) {

        console.log('update');
        this.onLeave();
        this.getPageFromServer();
        next();
    },

    beforeRouteLeave(to, from, next) {
      console.log('leave');
       this.onLeave();
       next();
    },
*/

    beforeRouteLeave(to, from, next) {
      console.log('leave');
       this.onLeave();
       next();
    },

    computed: {
        meta_title() {

            return this.$store.state.APP_PAGE.objectActive.meta_title? this.$store.state.APP_PAGE.objectActive.meta_title:
            this.$store.state.APP_PAGE.objectActive.title ;
        },

        meta_description() {
            return this.$store.state.APP_PAGE.objectActive.meta_description?
            this.$store.state.APP_PAGE.objectActive.meta_description:  this.$store.state.APP_PAGE.objectActive.description;
        },

        pageMenu() {
          var page_menu = [];
          this.$store.state.APP_PAGE.objectActive.contentStructure.map(function(section) {

              if (section._props._na) {
                  page_menu.push( {title: section._props._na, href: '#'+section._props._id  });
              }

          })
          return page_menu;
        }


    },


    methods: {

        onLeave() {
          this.error = false;
          this.$store.commit('APP_PAGE/clearModel');

        },

        getPageFromServer() {
          var post_id;
          if (!this.postId) {
            post_id = this.$store.state.APP_INSTANCE.data.pages_id;
          } else {
            post_id = this.postId;
          }
          //console.log(post_id);
          //console.log(_PRERENDER._id);

          if ( _PRERENDER._id == post_id) {
              this.$store.commit('APP_PAGE/setApiId',_PRERENDER._id);
              //this.$store.commit('APP_PAGE/updateModel', _PRERENDER);
              this.$store.commit('APP_PAGE/updateModel', _PRERENDER);
              return;
          }
          var self = this;
          this.startLoading();
          this.$store.dispatch('APP_PAGE/getPublicObject', post_id )
          .then(function (response) {
                console.log(response);
                  self.stopLoading();
                  //  self.setServerData(response.data);


          }).catch(function(error) {
              console.log(error.response);
              self.error= error.response.status;
              self.stopLoading();
            //  self.$store.dispatch('generateSystemMessageRespone', error)

             //  self.catchError(error.response);

          });
        }


    },

    /**
       https://codepen.io/isitannarli/pen/NdVZmL
       https://codepen.io/yunusekim/pen/XaBoNZ
       https://cloudcannon.com/deconstructions/2014/11/15/facebook-content-placeholder-deconstruction.html
       https://github.com/michalsnik/vue-content-placeholders
    */

    render(h ) {

        var self = this;
        if (this.error) {
          return h(PageError, { props: {status: this.error}  }  )
        }

        return h('div',  [
            // toolbar for Page
            h( self.$root.$options.componentsPage['PageToolbar'], {props: {items:this.pageMenu}}),
           // sections for Page
          this.$store.state.APP_PAGE.objectActive.contentStructure.map(function(section) {
              return h(self.$root.$options.componentsPage[section._n], { props: section._props  }  )
            })
      ]
      )

    }

}
