/*
Store for appInstance.objectActive from server
*/

export default {

  //api:'/admins',
  api: {url: '/apps', noActions:true},
  state () {
      return {
         name:"",
         title:"",
         slogan:"",
         actionText:"",
         description:"",
         contacts: [],
         design:{},
         menu:[] ,
         links:[],
         locations: [],
         _websites_page: ''
        }
    },

  actions: {

    makeOrder() {

    },

    makeSubscribe({dispatch, getters}, data) {
        var config = {data:data};
         config.method = 'POST';
         config.url = getters.WEBSITE_API_URL + '/subscribers';
         return  dispatch('callAPI', config, {root:true});

      },

    }
}



/*
export default {



    getters: {

      WEBSITE_API_URL(state) {
        return '/apps/' +state.data._id;
      },



      LANG_PORTAL(state){
          return state.data.lang;
      },


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
*/
