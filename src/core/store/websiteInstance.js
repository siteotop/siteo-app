export default function ( appInstance, appDns ) {
  return  {

    state: function() {
      if (appInstance.menu==undefined) {
        appInstance.menu = [];
      }
      if (appInstance.design==undefined) {
        appInstance.desig = {};
      }
      appInstance.hosts = appDns;
      return appInstance;
    },

   mutations: {

      /**
         change state  bRender
         @param state
         @param rules {object}  rules include blocks name which need block ()
      */
      setOffRender (state, nameStructure) {
        if (!state.design[nameStructure].props ) {
            state.design[nameStructure].props = {coreOff: true};
        } else if(!state.design[nameStructure].props.coreOff) {
          state.design[nameStructure].props.coreOff = true;
        }

      },

      setOnRender(state, nameStructure) {
        if (state.design[nameStructure].props&&state.design[nameStructure].props.coreOff  ) {
            state.design[nameStructure].props.coreOff = false;
        }
      }

    },


    getters: {

      /*
      CORE_HOST(state) {

           return   'https://'+state.core.host;
      },
     */


      LANG_PORTAL(state){
          return state.hosts.active.lang;
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
