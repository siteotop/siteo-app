/*
Store for appInstance.objectActive from server
*/

export default {

  //api:'/admins',
  api: {url: '/apps',  getOnly: true },
  state () {
      return {
         name:"",
         title:"",
         slogan:"",
         actionText:"",
         description:"",
         contacts: [],
         design:{},
         menus:[] ,
         links:[],
         langs: [],
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
