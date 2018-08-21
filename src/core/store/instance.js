


export default function ( options ) {
  return  {

  //  namespaced: true,

    state: function() {
      return options.DNS;
    },

    modules: {
          website:{
            state: function() {
                return options.WEBSITE.website;
            }

          },

          menu: {
              state: options.WEBSITE.menu||[]
          },

          domains: {
              state: options.WEBSITE.domains
          },

          design: {
            state:options.WEBSITE.design,

            mutations: {

              /**
                 change state  bRender
                 @param state
                 @param rules {object}  rules include blocks name which need block ()
              */
              setOffRender (state, nameStructure) {
                if (!state[nameStructure].props ) {
                    state[nameStructure].props = {coreOff: true};
                } else if(!state[nameStructure].props.coreOff) {
                  state[nameStructure].props.coreOff = true;
                }

              },

              setOnRender(state, nameStructure) {
                if (state[nameStructure].props&&state[nameStructure].props.coreOff  ) {
                    state[nameStructure].props.coreOff = false;
                }
              }

            }


          }
    },


    getters: {

      CORE_HOST(state) {

           return   'https://'+state.core.host;
      },



      LANG_PORTAL(state){
          return state.active.lang;
      },

      /**
        list  for domains lang
      */
      LIST_LANG(state, getters, rootState){
        //return state.list;
        var route, langs, list;
        route = rootState.route;
        langs = [];
      //  console.log( state.website.domains);
        list = state.domains;

        for (let i in list) {

           let l={};
            l.l = list[i].l.toUpperCase();
            l.n =l.l+ ' - ' + getters.LANGUAGES[list[i].l];
            l.d = list[i].d +  route.path;
            langs.push(l);
           //  console.log(lang);
        }

        return langs;
       },


    }


  }
}
