

import pages from  '../../../store/modules/pages';

import MetaInfo from './MetaInfo';

import ServerFetch from '../_mixins/serverFetch';

export default {
  mixins: [MetaInfo, ServerFetch],

  props: {
      objectId: {
        type: String,
        default: '',
      }
  },

  nameModule: 'pages',
  storeModule: pages('appInstance/urlID'),

  data() {
    return  {
      moduleAction: 'getObject',
      error: false,

    }
  },

  components: {
    PageRecipe: ()=> import( /* webpackChunkName: "PageRecipe" */ './Functional/Recipe.vue') ,
    PageCollection: ()=> import( /* webpackChunkName: "PageCollection" */ './Functional/Collection.vue') ,
  },

  watch: {
      objectId(newId, oldId) {
          if (newId!=oldId) {
             this.fetchItem();
          }
      }
  },


  computed: {

        autoHreflang() {
            return (this.$route.path == '/');
        },

        pageObject () {
          if (this.$store.state.pages) {
            return this.$store.state.pages.objectActive
          } else {
            return {};
          }
        },

    },

    /*mounted(){
        this.addEventForEdit();
    },*/


    methods: {

      /**
        Get ID for page
      */
      getParamsForFetch() {
          var id; // id for page
          if (this.$route.params.objectId) {
             id = this.$route.params.objectId;
          } else {
             id = this.$store.state.appInstance.objectActive._websites_page;
          }
          if (id) {
            return id;
          } else {
            // we must throw erro, because /test/ is not working, when we send /page without id
              this.loaded = false;
              throw "id_is_empty";
          }


      },

      /**
        additional function when fetchItem Promise resolved
      */
      resultResolve(result) {
        var newStructure = {
          jsonStructure: JSON.parse(result.jsonStructure)
        }
        this.$store.commit('pages/updateModel', newStructure  );
      }


    },


    render(h ) {

        //if (!this.pageObject.jsonStructure) {
        //   return h('div', ['loaded']);//h('div',  'not loaded');
        //}

        if (this.statusError) {
          return h('ErrorPage', {props: {status: this.statusError.status||404}});
        }

        if (this.loaded) {
           return h('v-container', [
              h('v-row', {props: {alignContent: 'center', justify: 'center'}, class: 'text-center' }, [
                h('v-col', {props: {cols: 12}}, [
                  h('v-skeleton-loader', {props: { type: 'image'} }),
                  h('v-skeleton-loader', {props: { type: 'heading'}, class:'pa-3 ma-3' }),
                  h('v-skeleton-loader', {props: { type: 'text@8'} }),
                  h('v-skeleton-loader', {props: { type: 'heading'}, class:'pa-3 ma-3' }),
                  h('v-skeleton-loader', {props: { type: 'text@8'} })

                ])
              ])
           ] )
        }

        if (!this.pageObject.f) {
          if (Array.isArray(this.pageObject.jsonStructure)) {
            return h('PageSchema', {
              props: {
                  structure: this.pageObject.jsonStructure,
                }
            });
          } else {
            return h('div', 'jsonStructure is not array');
          }

        } else {
          return h(this.pageObject.f, {
            props: {
                selfObject: this.pageObject,
              }
          });
        }





    },


    renderError (h, err) {
        return h('ErrorPage', {props: {status: 500 }});
    }



}
