
import Loader from '../../_mixins/component-loading.js';

import { mapState } from 'vuex';
import pages from  '../../../store/modules/pages';

import MetaInfo from './MetaInfo';

export default {
  mixins: [Loader, MetaInfo],

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
          if (newId!=oldId) {
            this.fetchItem();
          }
      }
  },


  computed: {



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
        }),




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

    /*  asyncDataError(error_data) {
          this.$store.commit('pages/clearModel');
          this.$store.commit('pages/updateModel', {error: error_data});
      },
*/
      fetchItem() {

            var id; // id for page
            if (this.$route.params.objectId) {
               id = this.$route.params.objectId;
            } else {
               id = this.$store.state.appInstance.objectActive._websites_page;
            }

            if (!id) {
              return false;
            }
            //console.log(id);


            return new Promise ((resolve, reject)=>{
                 this.$store.dispatch('pages/getObject', id).then((result)=>{

                    var newStructure = {
                      jsonStructure: JSON.parse(result.jsonStructure)
                    }
                    this.$store.commit('pages/updateModel', newStructure  );
                    resolve(result);
                 }).catch(error=>{
                   // error is error.response
                   //console.log(error);
                   if (error.response) {
                     this.$store.commit('setSrvPageErr',  error.response.data );
                   } else {
                     this.$store.commit('setSrvPageErr', {status: 500}  )
                   }

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

        if (this.statusError) {
          return h('RouteError', {props: {status: this.statusError.status||404}});
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
