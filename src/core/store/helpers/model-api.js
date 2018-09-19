const  API = function (api ) {

    return  {
        //namespaced: true,

        state: {
          parent: api.parent||'', // parent module  where we get prefix for urlID
          url: api.url,
          public: api.public||false,
          nameId: api.nameId||'',
          id: 0,

          //list: []
        },



        mutations: {
          setApiId(state, id) {
              state.id = id;
          }

          /*,

          saveList(state, list) {
              state.list = list;
          }*/
        },

        getters: {
           urlWithoutId(state, getters, rootState, rootGetters) {
             var prefixurl = '';
             if (state.parent) {
                prefixurl=  rootGetters[state.parent];
             }
             return  prefixurl + state.url;
           },

           urlID(state, getters) {
             if (state.id) {
                 return  getters.urlWithoutId + '/' + state.id;
             } else {
               return getters.urlWithoutId + '/no_id'
             }

           },

           nameId(state){
              return state.nameId;
           },

           activeId(state) {
              if ( state.id) {
                return state.id;
              } else {
                return false;
              }

           }

        }



    }

}

export default API;
