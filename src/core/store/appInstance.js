export default function ( APP_INSTANCE, appDns ) {
  return  {

    state: function() {
      if (APP_INSTANCE.menu==undefined) {
        APP_INSTANCE.menu = [];
      }
      if (APP_INSTANCE.design==undefined) {
        APP_INSTANCE.desig = {};
      }
      APP_INSTANCE.hosts = appDns;
      return APP_INSTANCE;
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

      WEBSITE_API_URL(state) {
        return '/websites/' +state.data._id;
      },
      /*
      CORE_HOST(state) {

           return   'https://'+state.core.host;
      },
     */
     LANGUAGES(){
       return {
         'en':'English',
         'ru':'Русский',
         'uk':'Українська'
       }
     },

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
