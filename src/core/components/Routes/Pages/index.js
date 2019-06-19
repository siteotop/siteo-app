
import Loader from '../../_mixins/component-loading.js';
//import mixinsAsyncdata from '../_mixins/asyncData';

import { mapState } from 'vuex';
import pages from  '../../../store/modules/pages';

export default {
  mixins: [Loader],

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
      title: this.pageObject.meta_title,
      meta: [

        {
          name: 'description',
          vmid: 'desc',
          content: this.pageObject.meta_description
        },
        {
          name: 'robots',
          vmid: 'rob',
          content: this.pageObject.meta_robots ||'index,follow'
        }
      ],
      link: [
       {
        rel: 'canonical',
        href: this.canonical
       },
      ]

    }
  },

  serverPrefetch () {
    // возвращает Promise из действия, поэтому
    // компонент ждёт данные перед рендерингом
    this.registerModule();
    return this.fetchItem();
  },




  computed: {

        /**
         generate canonikal href link for vue-meta
         if page is main generate start domain
        */
        canonical() {
          if (this.$store.state.appInstance.objectActive._websites_page == this.pageObject._id) {
            return this.$store.getters.CORE_HOST;
          } else {
              return this.$store.getters.CORE_HOST +'/'+ this.pageObject.url;
          }

        },

        ...mapState({
            pageObject (state) {
                return state.pages? state.pages.objectActive: {};
            }
        })



    },

    mounted(){
        this.addEventForEdit();

        this.registerModule(true);
        if (!this.pageObject._id) {
            this.fetchItem();
        }

    },

    destroyed() {
      this.$store.unregisterApiModule ( 'pages');
    },

    methods: {

      addEventForEdit() {
        function KeyPress(e) {
          var evtobj = window.event? event : e
          if (evtobj.keyCode == 13 && evtobj.ctrlKey) alert("Ctrl+Enter");
        }
        document.onkeydown = KeyPress;
      },

      asyncDataError(error_data) {
          this.$store.commit('pages/clearModel');
          this.$store.commit('pages/updateModel', {error: error_data});
      },

      fetchItem() {
         var store = this.$store,
             route = this.$route;

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

      },

      registerModule(preserveState) {
          this.$store.registerApiModule( 'pages', pages('appInstance/urlID'), undefined, preserveState);
      }

    },


    render(h ) {

        //if (!this.pageObject.jsonStructure) {
        //   return h('div', ['loaded']);//h('div',  'not loaded');
        //}

        if (this.pageObject.error) {
          return h('RouteError', {props: this.pageObject.error});
        }

        if (this.pageObject.jsonStructure) {
        return h('PageSchema', {
            props: {
              structure: this.pageObject.jsonStructure,
              sharing: true,
              shareWindow: this.shareWindow,
              }
        })

      } else {
        return h('div', 'Temporary null');
      }



    },


    renderError (h, err) {
        return h('RouteError', {props: {status: 500 }});
    }



}
