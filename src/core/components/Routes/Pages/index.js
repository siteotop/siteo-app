

import { mapState } from 'vuex';

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

  data() {
    return  {

      error: false,
      //offsetTop: 0,
      shareWindow: false
    }
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
          return id;
            /**
            if (!id) {
              return false;
            } else {

            }*/

          //console.log(id);
      },

      /**
        additional function when fetchItem Promise resolved
      */
      resultResolve(result) {
        var newStructure = {
          jsonStructure: JSON.parse(result.jsonStructure)
        }
        this.$store.commit('pages/updateModel', newStructure  );
      },
    
      registerModule(preserveState) {
          this.$store.registerApiModule( {
            name: this.$options.nameModule,
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
