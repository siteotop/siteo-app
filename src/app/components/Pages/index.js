
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


  metaInfo () {
   return {
      title: this.meta_title,
      titleTemplate: '%s  - ' + this.$store.state.appInstance.objectActive.name,
      meta: [
        {name: 'description', vmid: 'description', content: this.meta_description }
      ],
      link: [
      { rel: 'canonical', href: this.canonical },
      ]

    }
  },

  asyncData({ store, route }) {

      store.registerApiModule( 'pages', pages('appInstance/urlID'));
      if (store.state.allowAsyncLoad) {
        var id;
        if (route.params.objectId) {
           id = route.params.objectId;
        } else {
           id = store.state.appInstance.objectActive._websites_page;
        }

        return new Promise ((resolve, reject)=>{
             store.dispatch('pages/getObject', id).then((result)=>{

                var newStructure = {
                  jsonStructure:   JSON.parse(result.jsonStructure)
                }
                store.commit('pages/updateModel', newStructure  );
                resolve(result);
             }).catch(error=>{
               reject(error);
             });
        });

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
                return state.pages? state.pages.objectActive: {};
            }
        })



    },

    methods: {

      asyncDataError(error_data) {
          this.$store.commit('pages/clearModel');
          this.$store.commit('pages/updateModel', {error: error_data});
      },

       helperCreateMeta(sourceField, mainField ) {
         if (this.postObject[mainField]) {
           return this.postObject[sourceField]? this.postObject[sourceField]:
           this.postObject[mainField] ;
         } else {
            return '';
         }
       }
    },

  
      render(h ) {

        if (!this.postObject.jsonStructure) {
           return h('div', ['loaded']);//h('div',  'not loaded');
        }

        if (this.postObject.error) {
          return h('RouteError', {props: this.postObject.error});
        }

        return h('PageSchema', {
            props: {
              pageToolbar: true,
              speedDeal: true,
              structure: this.postObject.jsonStructure,
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
