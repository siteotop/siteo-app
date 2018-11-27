export default function ( APP_INSTANCE) {
  return  {

    state: function() {
       return {
         data: APP_INSTANCE.data,
         lang: APP_INSTANCE.configs.lang,
         contacts: APP_INSTANCE.contacts,
         design: APP_INSTANCE.design|| {},
         menu: APP_INSTANCE.menu||[],
         links: APP_INSTANCE.links||[],
         locations: APP_INSTANCE.locations||[]
       }
      return ;
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
          return state.lang;
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


    },

    actions: {

      makeOrder({dispatch, getters}, data) {
        var config = {data:data};
         config.method = 'POST';
         config.url = getters.WEBSITE_API_URL + '/orders';
         return  dispatch('callAPI', config, {root:true});

      },

      makeSubscribe({dispatch, getters}, data) {
        var config = {data:data};
         config.method = 'POST';
         config.url = getters.WEBSITE_API_URL + '/subscribers';
         return  dispatch('callAPI', config, {root:true});

      },

    }


  }
}
