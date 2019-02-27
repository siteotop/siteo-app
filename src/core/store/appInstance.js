/*
Store for APP_INSTANCE from server

*/

export default function () {
  return  {

    state: function() {
       return {
         data: {
           name:"",
           title:"",
           slogan:"",
           actionText:"",
           description:"",
           countryAlpha2:"",
           currency: '',
           design:false,
           lang:'',
         }, //   APP_INSTANCE.data,
         configs: {

         },
         contacts: [], // APP_INSTANCE.contacts,
         design:{}, // APP_INSTANCE.design|| {},
         menu:[] ,  // APP_INSTANCE.menu||[],
         links:[],  //APP_INSTANCE.links||[],
         locations: []// APP_INSTANCE.locations||[]
       }

    },

   mutations: {
      saveInstanse(state, instance) {
          for( var i in state) {
            state[i] = instance[i];
          }
      },
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



      LANG_PORTAL(state){
          return state.data.lang;
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

      makeSubscribe({dispatch, getters}, data) {
        var config = {data:data};
         config.method = 'POST';
         config.url = getters.WEBSITE_API_URL + '/subscribers';
         return  dispatch('callAPI', config, {root:true});

      },

    }


  }
}
