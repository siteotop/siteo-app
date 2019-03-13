
/**
  @return  String Data fo Sending to The server
*/

const prepareData = function (data) {
      for (let i in data) {
           if ( typeof(data[i]) =='object') {
              data[i] = JSON.stringify((data[i]));
           }
      }
      return data;
}

const  API = function (api ) {

    return  {
        //namespaced: true,

        state: {
        //  parent: , // parent module  where we get prefix for urlID
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

        actions: {
          /**

            create object in model API
          */
          createObject({dispatch, state, getters}, data) {
             var  config = {data: prepareData(data)};
             config.method = 'POST';
             config.url = getters.urlWithoutId+ '/0';
             return  dispatch('callAPI', config,  {root:true});

          },

          /**
              get object from model APi
          */
          getObject({dispatch, commit, getters, state}, id) {
             // console.log(this);

             var config = {};
             config.method = 'GET';
             config.url =  getters.urlWithoutId+ '/'+ id;  // '/users/me';
             return   dispatch('callAPI', config, {root:true}).then(response=>{
                     commit('setApiId', id);
                     commit('updateModel', response.data);
                     return state.objectActive;
                     //return response.data;
                  }
             );
          },


          /**
              upadete  object in model APi  and update in store
          */
          updateObject({dispatch, commit, getters}, data) {
             var  config = {data: prepareData(data) };
             config.method = 'PUT';
             config.url = getters.urlID;
             return   dispatch('callAPI', config, {root:true}).then(response=>{
                  commit('updateModel', response.data);
                  return response.data;
             });

          },

          patchObject({dispatch, commit, getters}) {
             var  config = {};
             config.method = 'PATCH';
             config.url = getters.urlID;
             return   dispatch('callAPI', config, {root:true}).then(response=>{
                  commit('updateModel', {pathed: 1});
             });
          },

          /**
            remove one object from Model
          */
          deleteObject({dispatch, commit, getters},  id) {
              //commit('setApiId', id);
              var  config = {};
              config.method = 'DELETE';
              config.url = getters.urlWithoutId+ '/'+ id;
              return   dispatch('callAPI', config, {root:true}).then(response=>{
                   commit('clearModel');
                   return response;
              });

          },

          clearAllFromStore({ commit, state}) {

            commit('clearModel');
            if (state.items) {
                commit('clearList' );
            }


          }

        },


        getters: {
           urlWithoutId(state, getters, rootState, rootGetters) {
             var prefixurl = '';
             if (api.parentGetterUrl) {
                prefixurl=  rootGetters[api.parentGetterUrl];
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
