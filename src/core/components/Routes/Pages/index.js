
import Loader from '../../_mixins/component-loading.js';

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

  /**
     works on ssr
  */
  serverPrefetch () {
    // возвращает Promise из действия, поэтому
    // компонент ждёт данные перед рендерингом
    this.registerModule();
    return this.fetchItem();
  },

  watch: {
      objectId(newId, oldId) {
          console.log(newId);
          console.log(oldId);
          if (newId!=oldId) {
            this.fetchItem();
          }
      }
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
            },

            pageMenu(state) {
              if (Array.isArray(state.pages.objectActive.jsonStructure)) {
                var menu = [];
                state.pages.objectActive.jsonStructure.map(function(section, index){
                    if (section.a/*_attrib*/) {
                      if (section.a.id&&section.a['data-t']) {
                        menu.push({
                            title: section.a['data-t'],
                            target: '#'+section.a.id
                         });
                        }
                    }
                });
                return menu;
              } else {
                return [];
              }
            }
        })



    },

    mounted(){
        this.addEventForEdit();
        if (this.$store.state.allowAsyncLoad) {
            this.registerModule();
            this.fetchItem();
        } else {
          this.registerModule(true);
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

            if (!id) {
              return false;
            }
            console.log(id);
            store.commit('pages/updateModel',  {error:false} );
            return new Promise ((resolve, reject)=>{
                 store.dispatch('pages/getObject', id).then((result)=>{

                    var newStructure = {
                      jsonStructure:   JSON.parse(result.jsonStructure)
                    }
                    store.commit('pages/updateModel', newStructure  );
                    resolve(result);
                 }).catch(error=>{
                   store.commit('pages/updateModel',  {error: true} );
                   resolve(error);
                   //reject(error);
                 });
            });

      },

      registerModule(preserveState) {
          this.$store.registerApiModule( {
            name: 'pages',
            module: pages('appInstance/urlID'),
            preserveState: preserveState
          } );
      }

    },


    render(h ) {

        //if (!this.pageObject.jsonStructure) {
        //   return h('div', ['loaded']);//h('div',  'not loaded');
        //}

        if (this.pageObject.error) {
          return h('RouteError', {props: this.pageObject.error});
        }

        if (Array.isArray(this.pageObject.jsonStructure)) {
          return h('PageSchema', {
            props: {
              structure: this.pageObject.jsonStructure,
              sharing: true,
              shareWindow: this.shareWindow,
              }
        })

      } else {
        return h('div', 'jsonStructure is not array');
      }



    },


    renderError (h, err) {
        return h('RouteError', {props: {status: 500 }});
    }



}
