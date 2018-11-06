
import PageError from './Error.vue';
import CorePage from './_extends/page.js';
export default {

  extends: CorePage,


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


  created() {
      this.getPageFromServer();
  },



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




    },

    methods: {


        onScroll(e) {
          this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
        },


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

      PLACEHOLDER EXAMPLE
       https://codepen.io/isitannarli/pen/NdVZmL
       https://codepen.io/yunusekim/pen/XaBoNZ
       https://cloudcannon.com/deconstructions/2014/11/15/facebook-content-placeholder-deconstruction.html
       https://github.com/michalsnik/vue-content-placeholders

    */




      render(h ) {

        //console.log('Page ');

        if (this.error) {
          return h(PageError, { props: {status: this.error}  }  )
        }
          //console.log('count');
          return h('div',  {
            directives: [
                {
                  name: 'scroll',
                  value: this.onScroll,
                  expression:'onScroll'
                }
            ]
          }, [
              // toolbar for Page
            h('FunctionalPageToolbar', {
              props: {offset: this.offsetTop},
              on: {
                shareWindow: ()=>{this.shareWindow = true}
              }
            }),
             // sections for Page

            h('PageSchema', {props: {structure: this.$store.state.APP_PAGE.objectActive.contentStructure }}),

            // SpeedDeal
            h('FunctionalSpeedDeal', {
              directives:[
                {
                  name: 'show',
                  value: this.needShowAction
                }
              ]}
            ),
            // Share Window
            this.shareWindow? h('FunctionalShareWindow', {
              props: {
                canonicalUrl: this.$store.state.APP_PAGE.objectActive.meta_canonical, ogTitle:this.$store.state.APP_PAGE.objectActive.meta_og_title||this.$store.state.APP_PAGE.objectActive.meta_title,

              },
              on: {
                closeShare: ()=>{this.shareWindow = false}
              }
              }):'',

            // Button UP
            h('v-fab-transition', [
              h('v-btn', {props: {fixed: true, large: this.$vuetify.breakpoint.smAndUp, bottom: true, left:true,  fab: true, color: 'secondary'},
                on: {
                  click: ()=>{this.$vuetify.goTo(0, {duration: 40})}
                },
                directives: [
                  {
                    name: 'show',
                    value: this.showUpButton&&this.needShowAction
                  }
                ]
              }, [
                h('AppIcon', {props: {name: 'si-arrow-up', inverse: true }})
              ])

            ])


        ]
        )

      }






}
